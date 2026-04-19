export type ClueIcon =
  | 'tree'
  | 'forest'
  | 'mountain'
  | 'sun'
  | 'moon'
  | 'water'
  | 'cloud'
  | 'wind'
  | 'trail'
  | 'person';

export interface ProjectClueMapItem {
  levelId: string;
  clueIndex: number;
  clueTitle: string;
  clueDescription: string;
  clueIcon: ClueIcon;
  position: {
    top: string;
    left: string;
    rotate?: string;
  };
}

const projectClueMapItems: ProjectClueMapItem[] = [
  {
    levelId: 'forest-camp-wood-01',
    clueIndex: 1,
    clueTitle: '树影收集',
    clueDescription: '在营地北侧找到第一张树影线索。',
    clueIcon: 'tree',
    position: { top: '8%', left: '7%', rotate: '-6deg' },
  },
  {
    levelId: 'forest-camp-forest-02',
    clueIndex: 2,
    clueTitle: '林间回声',
    clueDescription: '沿着林地边缘找到第二张线索。',
    clueIcon: 'forest',
    position: { top: '21%', left: '18%', rotate: '4deg' },
  },
  {
    levelId: 'forest-camp-forest-03',
    clueIndex: 3,
    clueTitle: '密林深处',
    clueDescription: '在更深的林区发现新的痕迹。',
    clueIcon: 'forest',
    position: { top: '39%', left: '13%', rotate: '-2deg' },
  },
  {
    levelId: 'forest-camp-mountain-04',
    clueIndex: 4,
    clueTitle: '山路标记',
    clueDescription: '帮营地找到通往山顶的山路标记。',
    clueIcon: 'mountain',
    position: { top: '66%', left: '9%', rotate: '-7deg' },
  },
  {
    levelId: 'forest-camp-sun-05',
    clueIndex: 5,
    clueTitle: '清晨记录',
    clueDescription: '记录第一束日光留下的线索。',
    clueIcon: 'sun',
    position: { top: '13%', left: '70%', rotate: '5deg' },
  },
  {
    levelId: 'forest-camp-moon-06',
    clueIndex: 6,
    clueTitle: '夜光小路',
    clueDescription: '追踪夜里发光的月路。',
    clueIcon: 'moon',
    position: { top: '31%', left: '81%', rotate: '7deg' },
  },
  {
    levelId: 'forest-camp-water-07',
    clueIndex: 7,
    clueTitle: '溪边足迹',
    clueDescription: '沿着水边寻找营地脚印。',
    clueIcon: 'water',
    position: { top: '57%', left: '73%', rotate: '4deg' },
  },
  {
    levelId: 'forest-camp-cloud-08',
    clueIndex: 8,
    clueTitle: '云层望哨',
    clueDescription: '抬头找到天空里的观察点。',
    clueIcon: 'cloud',
    position: { top: '74%', left: '57%', rotate: '-5deg' },
  },
  {
    levelId: 'forest-camp-wind-09',
    clueIndex: 9,
    clueTitle: '风痕纸片',
    clueDescription: '捡起风吹来的营地纸片。',
    clueIcon: 'wind',
    position: { top: '79%', left: '31%', rotate: '6deg' },
  },
  {
    levelId: 'forest-camp-person-10',
    clueIndex: 10,
    clueTitle: '伙伴邀约',
    clueDescription: '找到营地伙伴留给你的最后一张卡。',
    clueIcon: 'person',
    position: { top: '38%', left: '59%', rotate: '3deg' },
  },
];

export function getProjectClueMapItems() {
  return projectClueMapItems;
}

export function getProjectClueByLevelId(levelId: string) {
  return projectClueMapItems.find((item) => item.levelId === levelId) ?? null;
}
