import { useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { Celebration } from './components/Celebration';
import { curriculum, getHanziItemById, type AgeBand, type LessonLevel } from './data/curriculum';
import { createProgressRepository, type ProgressSnapshot, type StorageLike } from './domain/progress-store';
import { AdminDashboard } from './features/admin/AdminDashboard';
import { CourseFlowScreen } from './features/course/CourseFlowScreen';
import { HomeScreen } from './features/home/HomeScreen';
import { LessonExperience } from './features/lesson/LessonExperience';
import { OnboardingScreen } from './features/onboarding/OnboardingScreen';
import { ProfileScreen } from './features/profile/ProfileScreen';
import { RewardsScreen } from './features/rewards/RewardsScreen';

type TabKey = 'home' | 'course' | 'rewards' | 'profile';
type OverlayKey = 'lesson' | 'admin' | null;

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
  const [activeLevelId, setActiveLevelId] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  const levels = getAllLevels();
  const snapshots = repository.getSnapshots();
  const attempts = repository.getAttempts();

  const currentLevel = getCurrentLevel(levels, snapshots);
  const activeLevel = levels.find((level) => level.id === activeLevelId) ?? currentLevel;
  const activeHanzi = activeLevel ? getHanziItemById(activeLevel.hanziItemId) : null;

  const completedSnapshots = snapshots.filter((snapshot) => snapshot.status === 'completed');
  const totalStars = completedSnapshots.reduce((sum, snapshot) => sum + snapshot.stars, 0);

  const handleStartAdventure = (ageBand: AgeBand) => {
    setLearner(repository.ensureLearnerProfile(ageBand));
    repository.startSession();
    setTab('home');
  };

  const handleOpenLesson = (levelId: string) => {
    setActiveLevelId(levelId);
    setOverlay('lesson');
  };

  const handleLessonComplete = (totalMistakes: number) => {
    const session = repository.getCurrentSession() ?? repository.startSession();
    if (!activeLevel || !activeHanzi) {
      return;
    }

    repository.recordQuizAttempt({
      sessionId: session.id,
      hanziItemId: activeHanzi.id,
      levelId: activeLevel.id,
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
    setActiveLevelId(null);
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

  if (overlay === 'lesson' && activeLevel && activeHanzi) {
    return (
      <>
        <LessonExperience
          key={activeLevel.id}
          e2eMode={isE2EMode}
          hanzi={activeHanzi}
          level={activeLevel}
          onBack={() => setOverlay(null)}
          onComplete={(totalMistakes) => {
            handleLessonComplete(totalMistakes);
          }}
          onCloseSummary={() => {
            setActiveLevelId(null);
            setOverlay(null);
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
            onContinue={() => {
              if (currentLevel) {
                handleOpenLesson(currentLevel.id);
              }
            }}
            onOpenCourse={() => setTab('course')}
            totalStars={totalStars}
          />
        )}
        {tab === 'course' && (
          <CourseFlowScreen
            levels={levels}
            onStartLevel={handleOpenLesson}
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
