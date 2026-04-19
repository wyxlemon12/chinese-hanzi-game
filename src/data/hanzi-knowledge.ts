import { curriculum, type HanziItem } from './curriculum';

const fallbackStructureMeta: Record<
  string,
  { structureType: NonNullable<HanziItem['structureType']>; structureHint: string; parts: string[] }
> = {
  'hanzi-mu': {
    structureType: 'single',
    structureHint: '一竖像树干，左右像伸开的树枝。',
    parts: ['十', '八'],
  },
  'hanzi-lin': {
    structureType: 'left-right',
    structureHint: '两个“木”并排站在一起，就像一片小树林。',
    parts: ['木', '木'],
  },
  'hanzi-sen': {
    structureType: 'compound',
    structureHint: '三个“木”聚在一起，表示树特别多、森林特别深。',
    parts: ['木', '木', '木'],
  },
  'hanzi-shan': {
    structureType: 'single',
    structureHint: '中间高、两边低，像三座连在一起的山峰。',
    parts: ['丨', '凵'],
  },
  'hanzi-ri': {
    structureType: 'single',
    structureHint: '外框像太阳的边，中间一横像光线。',
    parts: ['囗', '一'],
  },
  'hanzi-yue': {
    structureType: 'single',
    structureHint: '外轮廓像弯月，里面两笔像柔和的月光。',
    parts: ['月'],
  },
  'hanzi-shui': {
    structureType: 'single',
    structureHint: '中间像主水流，两边像溅开的水花。',
    parts: ['丨', '氺'],
  },
  'hanzi-yun': {
    structureType: 'top-bottom',
    structureHint: '上面平平地托住，下面像一团飘起来的云。',
    parts: ['二', '厶'],
  },
  'hanzi-feng': {
    structureType: 'surround',
    structureHint: '外面像风绕着转，里面像风卷起的小痕迹。',
    parts: ['几', '㐅'],
  },
  'hanzi-ren': {
    structureType: 'single',
    structureHint: '两笔像一个人张开腿，稳稳站住。',
    parts: ['丿', '㇏'],
  },
};

export function getStructureMeta(hanzi: HanziItem) {
  return {
    structureType: hanzi.structureType ?? fallbackStructureMeta[hanzi.id]?.structureType ?? 'single',
    structureHint:
      hanzi.structureHint ?? fallbackStructureMeta[hanzi.id]?.structureHint ?? hanzi.observationHint,
    parts: hanzi.parts ?? fallbackStructureMeta[hanzi.id]?.parts ?? [],
  };
}

export function getSiblingHanziByRadical(hanziId: string, radical: string) {
  const current = curriculum.hanziItems.find((item) => item.id === hanziId);
  const sameProject = curriculum.hanziItems.filter(
    (item) =>
      item.radical === radical &&
      item.id !== hanziId &&
      current &&
      item.projectTheme === current.projectTheme,
  );
  const fallback = curriculum.hanziItems.filter(
    (item) =>
      item.radical === radical &&
      item.id !== hanziId &&
      !sameProject.some((candidate) => candidate.id === item.id),
  );

  return [...sameProject, ...fallback].slice(0, 4);
}
