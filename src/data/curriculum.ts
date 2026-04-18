import {
  projectCourses,
  projectHanziItems,
  projectHanziPoemLinks,
  projectPoemLibrary,
} from './project-curriculum';

export type AgeBand = '4-6' | '6-8' | '8-10';

export interface VocabExample {
  id: string;
  word: string;
  gloss: string;
}

export interface HanziItem {
  id: string;
  character: string;
  pinyin: string;
  meaning: string;
  radical: string;
  strokeCount: number;
  animationLabel: string;
  introText: string;
  prompt: string;
  encouragement: string;
  projectTheme: string;
  observationHint: string;
  missionPrompt: string;
  vocabExamples: VocabExample[];
}

export interface LessonLevel {
  id: string;
  title: string;
  levelType: 'hanzi';
  passRule: 'quiz-pass';
  sortOrder: number;
  hanziItemId: string;
  rewardTitle: string;
}

export interface LessonUnit {
  id: string;
  title: string;
  sortOrder: number;
  levels: LessonLevel[];
}

export interface Course {
  id: string;
  title: string;
  theme: string;
  status: 'published' | 'draft';
  sortOrder: number;
  units: LessonUnit[];
}

export interface PoemLibraryEntry {
  id: string;
  lineText: string;
  poemTitle: string;
  author: string;
  dynasty: string;
  focusCharacter: string;
  charactersIncluded: string[];
  difficultyLevel: 'starter' | 'core' | 'advanced';
  themeTags: string[];
  isApproved: boolean;
  meaningInLine: string;
  kidExplanation: string;
  sourceNote: string;
}

export interface HanziPoemLink {
  hanziId: string;
  poemLibraryEntryId: string | null;
  matchStatus: 'linked' | 'pending' | 'missing';
  reviewNote: string;
  reviewedBy: string | null;
}

export interface Curriculum {
  hanziItems: HanziItem[];
  courses: Course[];
  poemLibrary: PoemLibraryEntry[];
  hanziPoemLinks: HanziPoemLink[];
}

export const curriculum: Curriculum = {
  hanziItems: projectHanziItems,
  courses: projectCourses,
  poemLibrary: projectPoemLibrary,
  hanziPoemLinks: projectHanziPoemLinks,
};

export function getHanziItemById(hanziItemId: string) {
  return curriculum.hanziItems.find((item) => item.id === hanziItemId) ?? null;
}

export function getHanziItemByCharacter(character: string) {
  return curriculum.hanziItems.find((item) => item.character === character) ?? null;
}

export function getLevelById(levelId: string) {
  for (const course of curriculum.courses) {
    for (const unit of course.units) {
      const level = unit.levels.find((entry) => entry.id === levelId);
      if (level) {
        return level;
      }
    }
  }

  return null;
}

export function getPoemLibraryEntryById(poemLibraryEntryId: string) {
  return curriculum.poemLibrary.find((entry) => entry.id === poemLibraryEntryId) ?? null;
}
