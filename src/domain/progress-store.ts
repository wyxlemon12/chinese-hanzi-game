import type { AgeBand, Curriculum } from '../data/curriculum';

type SnapshotStatus = 'locked' | 'in_progress' | 'completed';
type QuizResult = 'failed' | 'passed';

export interface LearnerProfile {
  id: string;
  deviceKey: string;
  ageBand: AgeBand;
  createdAt: string;
  lastActiveAt: string;
}

export interface LearningSession {
  id: string;
  learnerProfileId: string;
  startedAt: string;
}

export interface ProgressSnapshot {
  learnerProfileId: string;
  levelId: string;
  status: SnapshotStatus;
  score: number;
  stars: number;
  completedAt: string | null;
}

export interface QuizAttemptInput {
  sessionId: string;
  hanziItemId: string;
  levelId: string;
  totalMistakes: number;
  result: QuizResult;
}

export interface QuizAttemptRecord extends QuizAttemptInput {
  id: string;
  learnerProfileId: string;
  createdAt: string;
}

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

interface PersistedState {
  learner: LearnerProfile | null;
  currentSession: LearningSession | null;
  snapshots: Record<string, ProgressSnapshot>;
  attempts: QuizAttemptRecord[];
}

const STORAGE_KEY = 'shuyuan-progress-store';

export function createMemoryStorage(): StorageLike {
  const store = new Map<string, string>();

  return {
    getItem(key) {
      return store.get(key) ?? null;
    },
    setItem(key, value) {
      store.set(key, value);
    },
    removeItem(key) {
      store.delete(key);
    },
  };
}

export function createProgressRepository(storage: StorageLike) {
  const state = readState(storage);

  const persist = () => {
    storage.setItem(STORAGE_KEY, JSON.stringify(state));
  };

  return {
    ensureLearnerProfile(ageBand: AgeBand) {
      if (!state.learner) {
        const now = new Date().toISOString();
        const id = crypto.randomUUID();
        state.learner = {
          id,
          deviceKey: id,
          ageBand,
          createdAt: now,
          lastActiveAt: now,
        };
        persist();
      }

      return state.learner;
    },
    getLearnerProfile() {
      return state.learner;
    },
    startSession() {
      if (!state.learner) {
        throw new Error('Learner profile must exist before starting a session.');
      }

      state.currentSession = {
        id: crypto.randomUUID(),
        learnerProfileId: state.learner.id,
        startedAt: new Date().toISOString(),
      };
      persist();
      return state.currentSession;
    },
    getCurrentSession() {
      return state.currentSession;
    },
    recordQuizAttempt(input: QuizAttemptInput) {
      if (!state.learner) {
        throw new Error('Learner profile must exist before recording a quiz attempt.');
      }

      const existing =
        state.snapshots[input.levelId] ??
        ({
          learnerProfileId: state.learner.id,
          levelId: input.levelId,
          status: 'locked',
          score: 0,
          stars: 0,
          completedAt: null,
        } satisfies ProgressSnapshot);

      state.attempts.push({
        ...input,
        id: crypto.randomUUID(),
        learnerProfileId: state.learner.id,
        createdAt: new Date().toISOString(),
      });

      if (input.result === 'passed') {
        state.snapshots[input.levelId] = {
          ...existing,
          status: 'completed',
          score: 100,
          stars: getStarCount(input.totalMistakes),
          completedAt: new Date().toISOString(),
        };
      } else {
        state.snapshots[input.levelId] = {
          ...existing,
          status: 'in_progress',
          score: Math.max(existing.score, 35),
          stars: existing.stars,
          completedAt: existing.completedAt,
        };
      }

      persist();
    },
    getSnapshot(levelId: string) {
      return state.snapshots[levelId] ?? null;
    },
    getSnapshots() {
      return Object.values(state.snapshots);
    },
    getAttempts() {
      return state.attempts;
    },
    reset() {
      state.learner = null;
      state.currentSession = null;
      state.snapshots = {};
      state.attempts = [];
      persist();
    },
  };
}

export function getNextLevelId(curriculum: Curriculum, currentLevelId: string) {
  const levelIds: string[] = [];

  for (const course of curriculum.courses) {
    for (const unit of course.units) {
      for (const level of unit.levels) {
        levelIds.push(level.id);
      }
    }
  }

  const currentIndex = levelIds.indexOf(currentLevelId);
  return currentIndex >= 0 ? (levelIds[currentIndex + 1] ?? null) : null;
}

function readState(storage: StorageLike): PersistedState {
  const raw = storage.getItem(STORAGE_KEY);
  if (!raw) {
    return {
      learner: null,
      currentSession: null,
      snapshots: {},
      attempts: [],
    };
  }

  return JSON.parse(raw) as PersistedState;
}

function getStarCount(totalMistakes: number) {
  if (totalMistakes <= 1) {
    return 3;
  }

  if (totalMistakes <= 3) {
    return 2;
  }

  return 1;
}
