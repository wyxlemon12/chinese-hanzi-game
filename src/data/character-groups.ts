import { characterGroups, type CharacterGroup } from './tool-curriculum';

export type { CharacterGroup };

const simplifiedToTraditionalMap: Record<string, string> = {
  树: '樹',
  枝: '枝',
  河: '河',
  海: '海',
  湖: '湖',
  江: '江',
  妈: '媽',
  姐: '姐',
  妹: '妹',
  她: '她',
  说: '說',
  话: '話',
  语: '語',
  读: '讀',
  讲: '講',
  们: '們',
  时: '時',
  字: '字',
  草: '草',
  花: '花',
  苗: '苗',
  空: '空',
  云: '雲',
  风: '風',
  雨: '雨',
  猫: '貓',
  狗: '狗',
  鸟: '鳥',
  鱼: '魚',
  马: '馬',
  门: '門',
  关: '關',
  说话: '說話',
};

export function normalizeToTraditional(input: string) {
  const trimmed = input.trim();
  if (!trimmed) {
    return '';
  }

  return [...trimmed]
    .map((character) => simplifiedToTraditionalMap[character] ?? character)
    .join('');
}

export function getAllCharacterGroups() {
  return characterGroups;
}

export function getCharacterGroupById(groupId: string) {
  return characterGroups.find((group) => group.id === groupId) ?? null;
}

export function getCharacterGroupByCharacter(character: string) {
  return characterGroups.find((group) => group.characters.includes(character)) ?? null;
}

export function getRandomCharacterGroup() {
  return characterGroups[Math.floor(Math.random() * characterGroups.length)];
}

export function getRecommendedCharacterGroup(character: string) {
  const normalized = normalizeToTraditional(character);
  return getCharacterGroupByCharacter(normalized) ?? characterGroups[0] ?? null;
}
