import { useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { Celebration } from './components/Celebration';
import {
  getCharacterGroupByCharacter,
  getCharacterGroupById,
  normalizeToTraditional,
} from './data/character-groups';
import {
  curriculum,
  getHanziItemById,
  type HanziItem,
  type HanziPoemLink,
  type LessonLevel,
  type PoemLibraryEntry,
} from './data/curriculum';
import { type GeneratedAdventureMap } from './data/generated-map-seeds';
import { createProgressRepository, type StorageLike } from './domain/progress-store';
import { AdminDashboard } from './features/admin/AdminDashboard';
import { CourseFlowScreen } from './features/course/CourseFlowScreen';
import { GeneratedMapScreen } from './features/generated-map/GeneratedMapScreen';
import { HomeScreen } from './features/home/HomeScreen';
import { LessonExperience } from './features/lesson/LessonExperience';
import { ProfileScreen } from './features/profile/ProfileScreen';
import { RewardsScreen } from './features/rewards/RewardsScreen';
import {
  clearGeneratedAdventureMaps,
  generateAdventureMap,
  getLatestGeneratedAdventureMap,
} from './services/generate-adventure-map';
import { matchAndUpsertHanzi, type ResolvedCustomHanziLesson } from './services/match-and-upsert-hanzi';

type TabKey = 'home' | 'course' | 'rewards' | 'profile';
type OverlayKey = 'lesson' | 'admin' | 'generated-map' | null;

type ActiveLesson =
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

  const [learner] = useState(() => repository.getLearnerProfile() ?? repository.ensureLearnerProfile('6-8'));
  const [tab, setTab] = useState<TabKey>('home');
  const [overlay, setOverlay] = useState<OverlayKey>(null);
  const [activeLesson, setActiveLesson] = useState<ActiveLesson>(null);
  const [generatedMap, setGeneratedMap] = useState<GeneratedAdventureMap | null>(() => getLatestGeneratedAdventureMap());
  const [customError, setCustomError] = useState<string | null>(null);
  const [groupError, setGroupError] = useState<string | null>(null);
  const [isGeneratingGroup, setIsGeneratingGroup] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const levels = getAllLevels();
  const units = curriculum.courses[0]?.units ?? [];
  const snapshots = repository.getSnapshots();
  const attempts = repository.getAttempts();
  const completedSnapshots = snapshots.filter((snapshot) => snapshot.status === 'completed');
  const completedLevelIds = completedSnapshots.map((snapshot) => snapshot.levelId);
  const totalMistakes = attempts.reduce((sum, attempt) => sum + attempt.totalMistakes, 0);

  const lessonLevel: LessonLevel | null =
    activeLesson?.mode === 'custom'
      ? activeLesson.lesson.level
      : activeLesson?.mode === 'generated'
        ? activeLesson.lesson.level
        : null;
  const lessonHanzi: HanziItem | null =
    activeLesson?.mode === 'custom'
      ? activeLesson.lesson.hanzi
      : activeLesson?.mode === 'generated'
        ? activeLesson.lesson.hanzi
        : null;
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

  const openGeneratedGroup = async (knowledgePoint?: string, mode: 'topic' | 'random' = 'topic') => {
    setGroupError(null);
    setIsGeneratingGroup(true);

    try {
      const group = await generateAdventureMap({
        ageBand: learner.ageBand,
        knowledgePoint,
        mode,
      });

      setGeneratedMap(group);
      setOverlay('generated-map');
    } catch (error) {
      setGroupError(error instanceof Error ? error.message : '這一組字暫時打不開。');
    } finally {
      setIsGeneratingGroup(false);
    }
  };

  const handleStartSingleCharacter = async (rawInput: string) => {
    const normalizedCharacter = normalizeToTraditional(rawInput);

    if (!normalizedCharacter || [...normalizedCharacter].length !== 1) {
      setCustomError('請輸入一個單字。');
      return;
    }

    const grouped = getCharacterGroupByCharacter(normalizedCharacter);
    if (grouped) {
      setCustomError(null);
      await openGeneratedGroup(normalizedCharacter, 'topic');
      return;
    }

    try {
      setCustomError(null);
      const resolved = await matchAndUpsertHanzi({
        character: normalizedCharacter,
        ageBand: learner.ageBand,
      });
      setActiveLesson({ mode: 'custom', lesson: resolved });
      setOverlay('lesson');
    } catch (error) {
      setCustomError(error instanceof Error ? error.message : '這個字暫時還不能練習。');
    }
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

  const handleOpenRelatedHanzi = async (hanziId: string) => {
    const nextLevel = levels.find((level) => level.hanziItemId === hanziId);
    if (nextLevel && generatedMap) {
      const index = generatedMap.lessons.findIndex((lesson) => lesson.level.hanziItemId === hanziId);
      if (index >= 0) {
        handleOpenGeneratedLesson(index);
        return;
      }
    }

    const nextHanzi = getHanziItemById(hanziId);
    if (nextHanzi) {
      await handleStartSingleCharacter(nextHanzi.character);
    }
  };

  const handleLessonComplete = (totalMistakesForLesson: number) => {
    const session = repository.getCurrentSession() ?? repository.startSession();
    if (!lessonLevel || !lessonHanzi) {
      return;
    }

    repository.recordQuizAttempt({
      sessionId: session.id,
      hanziItemId: lessonHanzi.id,
      levelId: lessonLevel.id,
      totalMistakes: totalMistakesForLesson,
      result: 'passed',
    });

    setShowCelebration(true);
  };

  const handleResumeGroup = () => {
    if (generatedMap) {
      setOverlay('generated-map');
    }
  };

  const handleResetProgress = () => {
    repository.reset();
    clearGeneratedAdventureMaps();
    setGeneratedMap(null);
    setActiveLesson(null);
    setOverlay(null);
    setCustomError(null);
    setGroupError(null);
  };

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
        completedLevelIds={completedLevelIds}
        map={generatedMap}
        onBack={() => setOverlay(null)}
        onOpenLesson={handleOpenGeneratedLesson}
      />
    );
  }

  if (overlay === 'lesson' && lessonLevel && lessonHanzi) {
    return (
      <>
        <LessonExperience
          key={`${lessonLevel.id}-${lessonHanzi.id}`}
          e2eMode={isE2EMode}
          mode={activeLesson?.mode === 'custom' ? 'custom' : 'project'}
          hanzi={lessonHanzi}
          level={lessonLevel}
          onBack={() => {
            if (activeLesson?.mode === 'generated') {
              setOverlay('generated-map');
            } else {
              setOverlay(null);
            }
          }}
          onCloseSummary={() => {
            if (activeLesson?.mode === 'generated') {
              setOverlay('generated-map');
            } else {
              setOverlay(null);
            }
            setActiveLesson(null);
          }}
          onComplete={handleLessonComplete}
          onOpenRelatedHanzi={handleOpenRelatedHanzi}
          poemLibraryEntryOverride={lessonPoemEntry}
          poemLinkOverride={lessonPoemLink}
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
            customError={customError}
            groupError={groupError}
            groupLoading={isGeneratingGroup}
            lastGroupTitle={generatedMap?.themeTitle ?? null}
            onRandomGroup={() => openGeneratedGroup(undefined, 'random')}
            onResumeGroup={handleResumeGroup}
            onStartSingleCharacter={handleStartSingleCharacter}
            totalMistakes={totalMistakes}
          />
        )}
        {tab === 'course' && (
          <CourseFlowScreen
            snapshots={snapshots}
            units={units}
            onStartGroup={(unitId) => {
              const unit = getCharacterGroupById(unitId);
              if (unit) {
                void openGeneratedGroup(unit.characters[0], 'topic');
              }
            }}
          />
        )}
        {tab === 'rewards' && (
          <RewardsScreen
            attempts={attempts}
            completedCount={completedSnapshots.length}
            totalMistakes={totalMistakes}
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
