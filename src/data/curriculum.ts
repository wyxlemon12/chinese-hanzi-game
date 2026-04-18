export type AgeBand = '4-6' | '6-8' | '8-10';

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

export interface Curriculum {
  hanziItems: HanziItem[];
  courses: Course[];
}

const hanziItems: HanziItem[] = [
  {
    id: 'hanzi-ren',
    character: '人',
    pinyin: 'ren',
    meaning: '人，站立的人形。',
    radical: '人',
    strokeCount: 2,
    animationLabel: '先观察“人”的两笔像不像站立的人。',
    introText: '“人”像一个正站着的人，先看老师写，再轮到你来描。',
    prompt: '先看清笔顺，再把“人”描写完整。',
    encouragement: '两笔写稳，你就掌握了“人”的样子。',
  },
  {
    id: 'hanzi-ri',
    character: '日',
    pinyin: 'ri',
    meaning: '太阳，白天发光的太阳。',
    radical: '日',
    strokeCount: 4,
    animationLabel: '观察“日”的外框和中间的横线。',
    introText: '“日”像一个发光的小太阳，先看笔顺，再开始描写。',
    prompt: '把太阳的外框和里面的横线都写完整。',
    encouragement: '你离学会“日”只差最后几笔。',
  },
  {
    id: 'hanzi-mu',
    character: '木',
    pinyin: 'mu',
    meaning: '树木，像树干和树枝。',
    radical: '木',
    strokeCount: 4,
    animationLabel: '看“木”像不像一棵小树。',
    introText: '“木”像树干、树枝和树根组合在一起。',
    prompt: '跟着顺序把小树写完整。',
    encouragement: '树枝和树干都快写好啦。',
  },
];

export const curriculum: Curriculum = {
  hanziItems,
  courses: [
    {
      id: 'course-starter',
      title: '汉字启蒙营',
      theme: '从生活里认识象形汉字',
      status: 'published',
      sortOrder: 1,
      units: [
        {
          id: 'unit-shapes',
          title: '第一站：看见汉字的样子',
          sortOrder: 1,
          levels: [
            {
              id: 'level-ren',
              title: '第 1 关：认识“人”',
              levelType: 'hanzi',
              passRule: 'quiz-pass',
              sortOrder: 1,
              hanziItemId: 'hanzi-ren',
              rewardTitle: '站姿观察员',
            },
            {
              id: 'level-ri',
              title: '第 2 关：认识“日”',
              levelType: 'hanzi',
              passRule: 'quiz-pass',
              sortOrder: 2,
              hanziItemId: 'hanzi-ri',
              rewardTitle: '太阳追光者',
            },
            {
              id: 'level-mu',
              title: '第 3 关：认识“木”',
              levelType: 'hanzi',
              passRule: 'quiz-pass',
              sortOrder: 3,
              hanziItemId: 'hanzi-mu',
              rewardTitle: '森林观察家',
            },
          ],
        },
      ],
    },
  ],
};

export function getHanziItemById(hanziItemId: string) {
  return curriculum.hanziItems.find((item) => item.id === hanziItemId) ?? null;
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
