import fs from 'node:fs/promises';
import path from 'node:path';

const IDS_LEFT_RIGHT = new Set(['⿰']);
const IDS_TOP_BOTTOM = new Set(['⿱']);
const IDS_SURROUND = new Set(['⿴', '⿵', '⿶', '⿷', '⿸', '⿹', '⿺']);
const IDS_COMPOUND = new Set(['⿲', '⿳', '⿻']);
const IDS_ALL = new Set([...IDS_LEFT_RIGHT, ...IDS_TOP_BOTTOM, ...IDS_SURROUND, ...IDS_COMPOUND]);

const frequencyUrl =
  'https://raw.githubusercontent.com/nieldlr/hanzi/master/lib/data/frequency_with_script_variants_removed.txt.js';
const openccUrl =
  'https://raw.githubusercontent.com/BYVoid/OpenCC/master/data/dictionary/TSCharacters.txt';
const dictionaryUrl =
  'https://raw.githubusercontent.com/skishore/makemeahanzi/master/dictionary.txt';
const graphicsUrl =
  'https://raw.githubusercontent.com/skishore/makemeahanzi/master/graphics.txt';
const radicalsUrl =
  'https://raw.githubusercontent.com/nieldlr/hanzi/master/lib/data/radicalListWithMeaning.js';

const outputPath = path.resolve('src/data/layered-character-resources.generated.ts');

function parseBacktickModule(text) {
  const start = text.indexOf('`');
  const end = text.lastIndexOf('`');
  if (start < 0 || end <= start) {
    throw new Error('Failed to parse backtick module export');
  }
  return text.slice(start + 1, end);
}

function parseCommonJsObject(text) {
  const firstBrace = text.indexOf('{');
  const lastBrace = text.lastIndexOf('};');
  if (firstBrace < 0 || lastBrace <= firstBrace) {
    throw new Error('Failed to parse CommonJS object export');
  }
  const objectLiteral = text.slice(firstBrace, lastBrace + 1);
  return Function(`"use strict"; return (${objectLiteral});`)();
}

function toDefinition(definition) {
  if (!definition) return null;
  const first = definition.split('/').filter(Boolean)[0] ?? '';
  return first || null;
}

function toStructureType(decomposition) {
  if (!decomposition || decomposition.startsWith('？')) return 'single';
  const head = decomposition[0];
  if (IDS_LEFT_RIGHT.has(head)) return 'left-right';
  if (IDS_TOP_BOTTOM.has(head)) return 'top-bottom';
  if (IDS_SURROUND.has(head)) return 'surround';
  if (IDS_COMPOUND.has(head)) return 'compound';
  return 'single';
}

function toParts(decomposition) {
  if (!decomposition || decomposition.startsWith('？')) return [];
  return [...decomposition]
    .filter((char) => !IDS_ALL.has(char) && char !== '？')
    .slice(0, 4);
}

function toObservationHint(character, structureType, radical) {
  switch (structureType) {
    case 'left-right':
      return `先觀察「${character}」左右兩邊的分工，再把位置寫穩。`;
    case 'top-bottom':
      return `先看清楚「${character}」上下兩層，再按順序落筆。`;
    case 'surround':
      return `先看「${character}」的外框，再注意裡面的部分。`;
    case 'compound':
      return `先把「${character}」拆成幾個部分，再把整體拼起來。`;
    default:
      return `先觀察「${character}」整體輪廓，再留意和 ${radical} 有關的部分。`;
  }
}

function toStructureHint(structureType, parts, radical) {
  const partText = parts.length > 0 ? ` 常見部分有 ${parts.join('、')}。` : '';
  switch (structureType) {
    case 'left-right':
      return `這是左右結構的字。${partText}`.trim();
    case 'top-bottom':
      return `這是上下結構的字。${partText}`.trim();
    case 'surround':
      return `這是帶包圍感的字。${partText}`.trim();
    case 'compound':
      return `這是由多個部分組成的字。${partText}`.trim();
    default:
      return `這是以單體字形為主的字，部首是 ${radical}。`;
  }
}

function toId(character) {
  return `layered-${character.codePointAt(0).toString(16)}`;
}

const [frequencyRaw, openccRaw, dictionaryRaw, graphicsRaw, radicalsRaw] = await Promise.all([
  fetch(frequencyUrl).then((res) => res.text()),
  fetch(openccUrl).then((res) => res.text()),
  fetch(dictionaryUrl).then((res) => res.text()),
  fetch(graphicsUrl).then((res) => res.text()),
  fetch(radicalsUrl).then((res) => res.text()),
]);

const frequencyRows = parseBacktickModule(frequencyRaw)
  .trim()
  .split('\n')
  .map((line) => line.split('\t'))
  .map(([rank, character]) => ({ rank: Number(rank), character }));

const simplifiedToTraditional = new Map(
  openccRaw
    .split('\n')
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => line.split('\t'))
    .filter((parts) => parts.length >= 2)
    .map(([traditional, simplified]) => [simplified, traditional]),
);

const dictionaryMap = new Map(
  dictionaryRaw
    .trim()
    .split('\n')
    .map((line) => JSON.parse(line))
    .map((entry) => [entry.character, entry]),
);

const graphicsMap = new Map(
  graphicsRaw
    .trim()
    .split('\n')
    .map((line) => JSON.parse(line))
    .map((entry) => [entry.character, entry]),
);

const radicalMeaningMap = parseCommonJsObject(radicalsRaw);

const seen = new Set();
const selected = [];

for (const row of frequencyRows) {
  const traditional = simplifiedToTraditional.get(row.character) ?? row.character;
  if (traditional.length !== 1) continue;
  if (seen.has(traditional)) continue;
  if (!/\p{Script=Han}/u.test(traditional)) continue;

  const dictionaryEntry = dictionaryMap.get(traditional);
  const graphicsEntry = graphicsMap.get(traditional);
  if (!dictionaryEntry || !graphicsEntry) continue;

  seen.add(traditional);
  selected.push({
    rank: row.rank,
    character: traditional,
    dictionaryEntry,
    graphicsEntry,
  });

  if (selected.length === 500) break;
}

if (selected.length < 500) {
  throw new Error(`Only found ${selected.length} usable traditional characters`);
}

const resources = selected.map((entry, index) => {
  const decomposition =
    entry.dictionaryEntry.decomposition && !entry.dictionaryEntry.decomposition.startsWith('？')
      ? entry.dictionaryEntry.decomposition
      : null;
  const structureType = toStructureType(decomposition);
  const parts = toParts(decomposition);
  const radical = entry.dictionaryEntry.radical;

  return {
    id: toId(entry.character),
    layer: index < 300 ? 1 : 2,
    character: entry.character,
    rank: entry.rank,
    pinyin: Array.isArray(entry.dictionaryEntry.pinyin)
      ? entry.dictionaryEntry.pinyin
      : entry.dictionaryEntry.pinyin
        ? [entry.dictionaryEntry.pinyin]
        : [],
    radical,
    radicalMeaning: radicalMeaningMap[radical] ?? null,
    strokeCount: entry.graphicsEntry.medians?.length ?? entry.graphicsEntry.strokes?.length ?? 0,
    decomposition,
    structureType,
    structureHint: toStructureHint(structureType, parts, radical),
    observationHint: toObservationHint(entry.character, structureType, radical),
    parts,
    definition: toDefinition(entry.dictionaryEntry.definition),
    vocabExamples: [],
    poemCard: null,
    enrichmentStatus: index < 300 ? 'base-ready' : 'needs-enrichment',
    source: 'makemeahanzi+hanzijs+opencc',
  };
});

const firstLayer = resources.filter((entry) => entry.layer === 1);
const secondLayer = resources.filter((entry) => entry.layer === 2);

const file = `export interface LayeredCharacterResource {
  id: string;
  layer: 1 | 2;
  character: string;
  rank: number;
  pinyin: string[];
  radical: string;
  radicalMeaning: string | null;
  strokeCount: number;
  decomposition: string | null;
  structureType: 'single' | 'left-right' | 'top-bottom' | 'surround' | 'compound';
  structureHint: string;
  observationHint: string;
  parts: string[];
  definition: string | null;
  vocabExamples: Array<{ word: string; gloss: string }>;
  poemCard: null;
  enrichmentStatus: 'base-ready' | 'needs-enrichment';
  source: 'makemeahanzi+hanzijs+opencc';
}

export const firstLayerCharacterResources: LayeredCharacterResource[] = ${JSON.stringify(firstLayer, null, 2)} as LayeredCharacterResource[];

export const secondLayerCharacterResources: LayeredCharacterResource[] = ${JSON.stringify(secondLayer, null, 2)} as LayeredCharacterResource[];

export const layeredCharacterResources: LayeredCharacterResource[] = ${JSON.stringify(resources, null, 2)} as LayeredCharacterResource[];
`;

await fs.writeFile(outputPath, file, 'utf8');
console.log(`Generated ${resources.length} traditional characters at ${outputPath}`);
