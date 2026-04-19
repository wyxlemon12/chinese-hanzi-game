import { useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { Celebration } from './components/Celebration';
import {
  curriculum,
  getHanziItemById,
  type AgeBand,
  type HanziItem,
  type HanziPoemLink,
  type LessonLevel,
  type PoemLibraryEntry,
} from './data/curriculum';
import { type GeneratedAdventureMap } from './data/generated-map-seeds';
import { createProgressRepository, type ProgressSnapshot, type StorageLike } from './domain/progress-store';
import { AdminDashboard } from './features/admin/AdminDashboard';
import { CourseFlowScreen } from './features/course/CourseFlowScreen';
import { GeneratedMapScreen } from './features/generated-map/GeneratedMapScreen';
import { HomeScreen } from './features/home/HomeScreen';
import { LessonExperience } from './features/lesson/LessonExperience';
import { OnboardingScreen } from './features/onboarding/OnboardingScreen';
import { ProfileScreen } from './features/profile/ProfileScreen';
import { RewardsScreen } from './features/rewards/RewardsScreen';
import { generateAdventureMap } from './services/generate-adventure-map';
import { matchAndUpsertHanzi, type ResolvedCustomHanziLesson } from './services/match-and-upsert-hanzi';

type TabKey = 'home' | 'course' | 'rewards' | 'profile';
type OverlayKey = 'lesson' | 'admin' | 'generated-map' | null;

type ActiveLesson =
  | { mode: 'project'; levelId: string }
  | { mode: 'custom'; lesson: ResolvedCustomHanziLesson }
  | { mode: 'generated'; mapId: string; lesson: GeneratedAdventureMap['lessons'][number] }
  | null;

function createBrowserStorage(): StorageLike {
  if (typeof window === 'undefined') {
    const map = new Map<string, string>();
    return {
      getItem: (key) => map.get(key) ?? null,
      setItem: (key, value) => {
        map.set(key, value);
      },
      removeItem: (key) => {
        map.delete(key);
      },
    };
  }

  return {
    getItem: (key) => window.localStorage.getItem(key),
    setItem: (key, value) => window.localStorage.setItem(key, value),
    removeItem: (key) => window.localStorage.removeItem(key),
  };
}

function getAllLevels() {
  return curriculum.courses.flatMap((course) =>
    course.units.flatMap((unit) => unit.levels.map((level) => ({ ...level, unitTitle: unit.title }))),
  );
}

export default function App() {
  const [repository] = useState(() => createProgressRepository(createBrowserStorage()));
  const isE2EMode =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('e2e') === '1';

  const [learner, setLearner] = useState(() => repository.getLearnerProfile());
  const [tab, setTab] = useState<TabKey>('home');
  const [overlay, setOverlay] = useState<OverlayKey>(null);
  const [activeLesson, setActiveLesson] = useState<ActiveLesson>(null);
  const [generatedMap, setGeneratedMap] = useState<GeneratedAdventureMap | null>(null);
  const [customError, setCustomError] = useState<string | null>(null);
  const [generatedMapError, setGeneratedMapError] = useState<string | null>(null);
  const [isGeneratingMap, setIsGeneratingMap] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const levels = getAllLevels();
  const snapshots = repository.getSnapshots();
  const attempts = repository.getAttempts();

  const currentLevel = getCurrentLevel(levels, snapshots);
  const activeProjectLevel =
    activeLesson?.mode === 'project'
      ? levels.find((level) => level.id === activeLesson.levelId) ?? currentLevel
      : currentLevel;
  const activeProjectHanzi = activeProjectLevel ? getHanziItemById(activeProjectLevel.hanziItemId) : null;

  const lessonMode = activeLesson?.mode === 'generated' ? 'project' : activeLesson?.mode ?? 'project';
  const lessonLevel: LessonLevel | null =
    activeLesson?.mode === 'custom'
      ? activeLesson.lesson.level
      : activeLesson?.mode === 'generated'
        ? activeLesson.lesson.level
        : activeProjectLevel;
  const lessonHanzi: HanziItem | null =
    activeLesson?.mode === 'custom'
      ? activeLesson.lesson.hanzi
      : activeLesson?.mode === 'generated'
        ? activeLesson.lesson.hanzi
        : activeProjectHanzi;
  const lessonPoemLink: HanziPoemLink | null =
    activeLesson?.mode === 'custom'
      ? activeLesson.lesson.poemLink
      : activeLesson?.mode === 'generated'
        ? activeLesson.lesson.poemLink
        : null;
  const lessonPoemEntry: PoemLibraryEntry | null =
    activeLesson?.mode === 'custom'
      ? activeLesson.lesson.poemLibraryEntry
      : activeLesson?.mode === 'generated'
        ? activeLesson.lesson.poemLibraryEntry
        : null;

  const completedSnapshots = snapshots.filter((snapshot) => snapshot.status === 'completed');
  const totalStars = completedSnapshots.reduce((sum, snapshot) => sum + snapshot.stars, 0);

  const handleStartAdventure = (ageBand: AgeBand) => {
    setLearner(repository.ensureLearnerProfile(ageBand));
    repository.startSession();
    setTab('home');
  };

  const handleOpenProjectLesson = (levelId: string) => {
    setActiveLesson({ mode: 'project', levelId });
    setOverlay('lesson');
  };

  const handleOpenGeneratedLesson = (index: number) => {
    if (!generatedMap) {
      return;
    }

    setActiveLesson({
      mode: 'generated',
      mapId: generatedMap.id,
      lesson: generatedMap.lessons[index],
    });
    setOverlay('lesson');
  };

  const handleGenerateAdventureMap = async (options: { mode: 'topic' | 'random'; knowledgePoint?: string }) => {
    try {
      setGeneratedMapError(null);
      setIsGeneratingMap(true);
      const result = await generateAdventureMap({
        mode: options.mode,
        knowledgePoint: options.knowledgePoint,
        ageBand: learner?.ageBand ?? '6-8',
      });
      setGeneratedMap(result);
      setOverlay('generated-map');
    } catch (error) {
      setGeneratedMapError(error instanceof Error ? error.message : '新的探险地图暂时还生成不出来');
    } finally {
      setIsGeneratingMap(false);
    }
  };

  const handleStartCustomHanzi = async (character: string) => {
    try {
      setCustomError(null);
      const resolved = await matchAndUpsertHanzi({
        character,
        ageBand: learner?.ageBand ?? '6-8',
      });

      setActiveLesson({ mode: 'custom', lesson: resolved });
      setOverlay('lesson');
    } catch (error) {
      setCustomError(error instanceof Error ? error.message : '这个字暂时还不能学习');
    }
  };

  const handleLessonComplete = (totalMistakes: number) => {
    const session = repository.getCurrentSession() ?? repository.startSession();
    if (!lessonLevel || !lessonHanzi) {
      return;
    }

    repository.recordQuizAttempt({
      sessionId: session.id,
      hanziItemId: lessonHanzi.id,
      levelId: lessonLevel.id,
      totalMistakes,
      result: 'passed',
    });

    setShowCelebration(true);
  };

  const handleResetProgress = () => {
    repository.reset();
    setLearner(null);
    setTab('home');
    setOverlay(null);
    setActiveLesson(null);
    setGeneratedMap(null);
    setCustomError(null);
    setGeneratedMapError(null);
  };

  if (!learner) {
    return <OnboardingScreen onStart={handleStartAdventure} />;
  }

  if (overlay === 'admin') {
    return (
      <AdminDashboard
        attempts={attempts}
        learner={learner}
        levels={levels}
        snapshots={snapshots}
        onClose={() => setOverlay(null)}
      />
    );
  }

  if (overlay === 'generated-map' && generatedMap) {
    return (
      <GeneratedMapScreen
        map={generatedMap}
        onBack={() => {
          setOverlay(null);
        }}
        onOpenLesson={handleOpenGeneratedLesson}
      />
    );
  }

  if (overlay === 'lesson' && lessonLevel && lessonHanzi) {
    return (
      <>
        <LessonExperience
          key={lessonLevel.id}
          e2eMode={isE2EMode}
          mode={lessonMode}
          hanzi={lessonHanzi}
          level={lessonLevel}
          poemLinkOverride={lessonPoemLink}
          poemLibraryEntryOverride={lessonPoemEntry}
          onBack={() => {
            setOverlay(activeLesson?.mode === 'generated' ? 'generated-map' : null);
          }}
          onComplete={(totalMistakes) => {
            handleLessonComplete(totalMistakes);
          }}
          onCloseSummary={() => {
            if (activeLesson?.mode === 'generated') {
              setOverlay('generated-map');
            } else {
              setOverlay(null);
            }
            setActiveLesson(null);
          }}
        />
        <Celebration
          show={showCelebration}
          onComplete={() => {
            setShowCelebration(false);
          }}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-oat text-slate-900">
      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 pb-28 pt-6 sm:max-w-2xl">
        {tab === 'home' && (
          <HomeScreen
            completedCount={completedSnapshots.length}
            currentLevel={currentLevel}
            currentUnitTitle={currentLevel?.unitTitle ?? '准备领取第一条线索'}
            customError={customError}
            generatedMapError={generatedMapError}
            generatedMapLoading={isGeneratingMap}
            onContinue={() => {
              if (currentLevel) {
                handleOpenProjectLesson(currentLevel.id);
              }
            }}
            onOpenCourse={() => setTab('course')}
            onStartCustomHanzi={handleStartCustomHanzi}
            onGenerateAdventureMap={handleGenerateAdventureMap}
            totalStars={totalStars}
          />
        )}
        {tab === 'course' && (
          <CourseFlowScreen
            levels={levels}
            onStartLevel={handleOpenProjectLesson}
            snapshots={snapshots}
          />
        )}
        {tab === 'rewards' && (
          <RewardsScreen
            completedLevels={completedSnapshots.length}
            levels={levels}
            snapshots={snapshots}
            totalStars={totalStars}
          />
        )}
        {tab === 'profile' && (
          <ProfileScreen
            learner={learner}
            onOpenAdmin={() => setOverlay('admin')}
            onResetProgress={handleResetProgress}
          />
        )}
      </main>
      <BottomNav current={tab} onChange={setTab} />
    </div>
  );
}

function getCurrentLevel(
  levels: Array<LessonLevel & { unitTitle: string }>,
  snapshots: ProgressSnapshot[],
) {
  const snapshotMap = new Map(snapshots.map((snapshot) => [snapshot.levelId, snapshot]));

  for (const level of levels) {
    const snapshot = snapshotMap.get(level.id);
    if (!snapshot || snapshot.status !== 'completed') {
      return level;
    }
  }

  return levels[levels.length - 1] ?? null;
}
