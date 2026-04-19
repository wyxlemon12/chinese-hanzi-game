export interface LayeredCharacterResource {
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

export const firstLayerCharacterResources: LayeredCharacterResource[] = [
  {
    "id": "layered-7684",
    "layer": 1,
    "character": "的",
    "rank": 1,
    "pinyin": [
      "de"
    ],
    "radical": "白",
    "radicalMeaning": "white",
    "strokeCount": 8,
    "decomposition": "⿰白勺",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 白、勺。",
    "observationHint": "先觀察「的」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "白",
      "勺"
    ],
    "definition": "aim, goal; of; possessive particle; -self suffix",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e00",
    "layer": 1,
    "character": "一",
    "rank": 2,
    "pinyin": [
      "yī"
    ],
    "radical": "一",
    "radicalMeaning": "one",
    "strokeCount": 1,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 一。",
    "observationHint": "先觀察「一」整體輪廓，再留意和 一 有關的部分。",
    "parts": [],
    "definition": "one; a, an; alone",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-662f",
    "layer": 1,
    "character": "是",
    "rank": 3,
    "pinyin": [
      "shì"
    ],
    "radical": "日",
    "radicalMeaning": "sun/day",
    "strokeCount": 9,
    "decomposition": "⿱日疋",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 日、疋。",
    "observationHint": "先看清楚「是」上下兩層，再按順序落筆。",
    "parts": [
      "日",
      "疋"
    ],
    "definition": "to be; indeed, right, yes; okay",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e0d",
    "layer": 1,
    "character": "不",
    "rank": 4,
    "pinyin": [
      "bù"
    ],
    "radical": "一",
    "radicalMeaning": "one",
    "strokeCount": 4,
    "decomposition": "⿱一？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一。",
    "observationHint": "先看清楚「不」上下兩層，再按順序落筆。",
    "parts": [
      "一"
    ],
    "definition": "no, not, un-; negative prefix",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e86",
    "layer": 1,
    "character": "了",
    "rank": 5,
    "pinyin": [
      "le",
      "liǎo"
    ],
    "radical": "亅",
    "radicalMeaning": "hook",
    "strokeCount": 2,
    "decomposition": "⿱乛亅",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 乛、亅。",
    "observationHint": "先看清楚「了」上下兩層，再按順序落筆。",
    "parts": [
      "乛",
      "亅"
    ],
    "definition": "clear; to finish; particle of completed action",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5728",
    "layer": 1,
    "character": "在",
    "rank": 6,
    "pinyin": [
      "zài"
    ],
    "radical": "土",
    "radicalMeaning": "earth",
    "strokeCount": 6,
    "decomposition": "⿸才土",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 才、土。",
    "observationHint": "先看「在」的外框，再注意裡面的部分。",
    "parts": [
      "才",
      "土"
    ],
    "definition": "at, in, on; to exist; used to indicate the present progressive tense",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4eba",
    "layer": 1,
    "character": "人",
    "rank": 7,
    "pinyin": [
      "rén"
    ],
    "radical": "人",
    "radicalMeaning": "human",
    "strokeCount": 2,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 人。",
    "observationHint": "先觀察「人」整體輪廓，再留意和 人 有關的部分。",
    "parts": [],
    "definition": "man, person; people",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6709",
    "layer": 1,
    "character": "有",
    "rank": 8,
    "pinyin": [
      "yǒu"
    ],
    "radical": "月",
    "radicalMeaning": "moon",
    "strokeCount": 6,
    "decomposition": "⿸？月",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 月。",
    "observationHint": "先看「有」的外框，再注意裡面的部分。",
    "parts": [
      "月"
    ],
    "definition": "to have, to own, to possess; to exist",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6211",
    "layer": 1,
    "character": "我",
    "rank": 9,
    "pinyin": [
      "wǒ"
    ],
    "radical": "戈",
    "radicalMeaning": "spear",
    "strokeCount": 7,
    "decomposition": "⿰扌戈",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、戈。",
    "observationHint": "先觀察「我」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "戈"
    ],
    "definition": "I, me, my; our, us",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4ed6",
    "layer": 1,
    "character": "他",
    "rank": 10,
    "pinyin": [
      "tā"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 5,
    "decomposition": "⿰亻也",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、也。",
    "observationHint": "先觀察「他」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "也"
    ],
    "definition": "other, another; he, she, it",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9019",
    "layer": 1,
    "character": "這",
    "rank": 11,
    "pinyin": [
      "zhè"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 10,
    "decomposition": "⿺辶言",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、言。",
    "observationHint": "先看「這」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "言"
    ],
    "definition": "this, these; such; here",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5011",
    "layer": 1,
    "character": "們",
    "rank": 13,
    "pinyin": [
      "men"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 10,
    "decomposition": "⿰亻門",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、門。",
    "observationHint": "先觀察「們」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "門"
    ],
    "definition": "plural marker for pronouns and some nouns",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e2d",
    "layer": 1,
    "character": "中",
    "rank": 14,
    "pinyin": [
      "zhōng"
    ],
    "radical": "丨",
    "radicalMeaning": "line",
    "strokeCount": 4,
    "decomposition": "⿻口丨",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 口、丨。",
    "observationHint": "先把「中」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "口",
      "丨"
    ],
    "definition": "central; center, middle; amidst; to hit (target), to attain; China; Chinese",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f86",
    "layer": 1,
    "character": "來",
    "rank": 15,
    "pinyin": [
      "lái"
    ],
    "radical": "人",
    "radicalMeaning": "human",
    "strokeCount": 8,
    "decomposition": "⿻木从",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 木、从。",
    "observationHint": "先把「來」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "木",
      "从"
    ],
    "definition": "to arrive, to come, to return; in the future, later on",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e0a",
    "layer": 1,
    "character": "上",
    "rank": 16,
    "pinyin": [
      "shàng"
    ],
    "radical": "一",
    "radicalMeaning": "one",
    "strokeCount": 3,
    "decomposition": "⿱⺊一",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺊、一。",
    "observationHint": "先看清楚「上」上下兩層，再按順序落筆。",
    "parts": [
      "⺊",
      "一"
    ],
    "definition": "above, on top, superior; to go up; to attend; previous",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5927",
    "layer": 1,
    "character": "大",
    "rank": 17,
    "pinyin": [
      "dà"
    ],
    "radical": "大",
    "radicalMeaning": "big",
    "strokeCount": 3,
    "decomposition": "⿻一人",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 一、人。",
    "observationHint": "先把「大」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "一",
      "人"
    ],
    "definition": "big, great, vast, high, deep",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-548c",
    "layer": 1,
    "character": "和",
    "rank": 19,
    "pinyin": [
      "hé"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 8,
    "decomposition": "⿰禾口",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 禾、口。",
    "observationHint": "先觀察「和」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "禾",
      "口"
    ],
    "definition": "harmony, peace; calm, peaceful",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-570b",
    "layer": 1,
    "character": "國",
    "rank": 20,
    "pinyin": [
      "guó"
    ],
    "radical": "囗",
    "radicalMeaning": "enclosure",
    "strokeCount": 11,
    "decomposition": "⿴囗或",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 囗、或。",
    "observationHint": "先看「國」的外框，再注意裡面的部分。",
    "parts": [
      "囗",
      "或"
    ],
    "definition": "country, nation, state; national",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5730",
    "layer": 1,
    "character": "地",
    "rank": 21,
    "pinyin": [
      "de"
    ],
    "radical": "土",
    "radicalMeaning": "earth",
    "strokeCount": 6,
    "decomposition": "⿰土也",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 土、也。",
    "observationHint": "先觀察「地」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "土",
      "也"
    ],
    "definition": "earth, ground, soil; land, region; structural particle used before a verb",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5230",
    "layer": 1,
    "character": "到",
    "rank": 22,
    "pinyin": [
      "dào"
    ],
    "radical": "刂",
    "radicalMeaning": "knife",
    "strokeCount": 8,
    "decomposition": "⿰至刂",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 至、刂。",
    "observationHint": "先觀察「到」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "至",
      "刂"
    ],
    "definition": "to go to, to arrive",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4ee5",
    "layer": 1,
    "character": "以",
    "rank": 23,
    "pinyin": [
      "yǐ"
    ],
    "radical": "人",
    "radicalMeaning": "human",
    "strokeCount": 4,
    "decomposition": "⿰？人",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 人。",
    "observationHint": "先觀察「以」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "人"
    ],
    "definition": "according to; so as to; because of; then",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6642",
    "layer": 1,
    "character": "時",
    "rank": 25,
    "pinyin": [
      "shí"
    ],
    "radical": "日",
    "radicalMeaning": "sun/day",
    "strokeCount": 10,
    "decomposition": "⿰日寺",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 日、寺。",
    "observationHint": "先觀察「時」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "日",
      "寺"
    ],
    "definition": "time, season; period, era, age",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8981",
    "layer": 1,
    "character": "要",
    "rank": 26,
    "pinyin": [
      "yào"
    ],
    "radical": "覀",
    "radicalMeaning": "west",
    "strokeCount": 9,
    "decomposition": "⿱覀女",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 覀、女。",
    "observationHint": "先看清楚「要」上下兩層，再按順序落筆。",
    "parts": [
      "覀",
      "女"
    ],
    "definition": "essential, necessary; to ask for; to coerce; to demand",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c31",
    "layer": 1,
    "character": "就",
    "rank": 27,
    "pinyin": [
      "jiù"
    ],
    "radical": "尢",
    "radicalMeaning": "lame",
    "strokeCount": 12,
    "decomposition": "⿰京尤",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 京、尤。",
    "observationHint": "先觀察「就」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "京",
      "尤"
    ],
    "definition": "just, simply; to go to; to approach, near",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6703",
    "layer": 1,
    "character": "會",
    "rank": 29,
    "pinyin": [
      "huì"
    ],
    "radical": "曰",
    "radicalMeaning": "say",
    "strokeCount": 13,
    "decomposition": "⿱⿱亼？日",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 亼、日。",
    "observationHint": "先看清楚「會」上下兩層，再按順序落筆。",
    "parts": [
      "亼",
      "日"
    ],
    "definition": "to assemble, to meet; meeting; association, group",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53ef",
    "layer": 1,
    "character": "可",
    "rank": 30,
    "pinyin": [
      "kě"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 5,
    "decomposition": "⿻丁口",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 丁、口。",
    "observationHint": "先把「可」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "丁",
      "口"
    ],
    "definition": "may, can, -able; possibly",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e5f",
    "layer": 1,
    "character": "也",
    "rank": 31,
    "pinyin": [
      "yě"
    ],
    "radical": "乚",
    "radicalMeaning": "second",
    "strokeCount": 3,
    "decomposition": "⿻？乚",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 乚。",
    "observationHint": "先把「也」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "乚"
    ],
    "definition": "also, too",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f60",
    "layer": 1,
    "character": "你",
    "rank": 32,
    "pinyin": [
      "nǐ"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 7,
    "decomposition": "⿰亻尔",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、尔。",
    "observationHint": "先觀察「你」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "尔"
    ],
    "definition": "you, second person pronoun",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c0d",
    "layer": 1,
    "character": "對",
    "rank": 33,
    "pinyin": [
      "duì"
    ],
    "radical": "寸",
    "radicalMeaning": "thumb",
    "strokeCount": 14,
    "decomposition": "⿰⿱业羊寸",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 业、羊、寸。",
    "observationHint": "先觀察「對」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "业",
      "羊",
      "寸"
    ],
    "definition": "correct, right; facing, opposed",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-751f",
    "layer": 1,
    "character": "生",
    "rank": 34,
    "pinyin": [
      "shēng"
    ],
    "radical": "生",
    "radicalMeaning": "life",
    "strokeCount": 5,
    "decomposition": "⿻一土",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 一、土。",
    "observationHint": "先把「生」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "一",
      "土"
    ],
    "definition": "life, lifetime; birth; growth",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-80fd",
    "layer": 1,
    "character": "能",
    "rank": 35,
    "pinyin": [
      "néng"
    ],
    "radical": "⺼",
    "radicalMeaning": "meat",
    "strokeCount": 10,
    "decomposition": "⿰⿱厶⺼⿱匕匕",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 厶、⺼、匕、匕。",
    "observationHint": "先觀察「能」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "厶",
      "⺼",
      "匕",
      "匕"
    ],
    "definition": "can, may; capable, full of energy",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-800c",
    "layer": 1,
    "character": "而",
    "rank": 36,
    "pinyin": [
      "ér"
    ],
    "radical": "而",
    "radicalMeaning": "beard",
    "strokeCount": 6,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 而。",
    "observationHint": "先觀察「而」整體輪廓，再留意和 而 有關的部分。",
    "parts": [],
    "definition": "and, and then, and yet; but",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b50",
    "layer": 1,
    "character": "子",
    "rank": 37,
    "pinyin": [
      "zi"
    ],
    "radical": "子",
    "radicalMeaning": "child",
    "strokeCount": 3,
    "decomposition": "⿻了一",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 了、一。",
    "observationHint": "先把「子」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "了",
      "一"
    ],
    "definition": "son, child; seed, egg; fruit; small thing",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-90a3",
    "layer": 1,
    "character": "那",
    "rank": 38,
    "pinyin": [
      "nà"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 6,
    "decomposition": "⿰⿹？？阝",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 阝。",
    "observationHint": "先觀察「那」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "阝"
    ],
    "definition": "that, that one, those",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f97",
    "layer": 1,
    "character": "得",
    "rank": 39,
    "pinyin": [
      "dé"
    ],
    "radical": "彳",
    "radicalMeaning": "step",
    "strokeCount": 11,
    "decomposition": "⿰彳⿱旦寸",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 彳、旦、寸。",
    "observationHint": "先觀察「得」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "彳",
      "旦",
      "寸"
    ],
    "definition": "to obtain, to get, to acquire; suitable, proper; ready",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e8e",
    "layer": 1,
    "character": "于",
    "rank": 40,
    "pinyin": [
      "yú"
    ],
    "radical": "二",
    "radicalMeaning": "two",
    "strokeCount": 3,
    "decomposition": "⿻二亅",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 二、亅。",
    "observationHint": "先把「于」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "二",
      "亅"
    ],
    "definition": "at, in, on; to, from; alas!",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7740",
    "layer": 1,
    "character": "着",
    "rank": 41,
    "pinyin": [
      "zhe"
    ],
    "radical": "目",
    "radicalMeaning": "eye",
    "strokeCount": 11,
    "decomposition": "⿸羊目",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 羊、目。",
    "observationHint": "先看「着」的外框，再注意裡面的部分。",
    "parts": [
      "羊",
      "目"
    ],
    "definition": "to make a move, to take action",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e0b",
    "layer": 1,
    "character": "下",
    "rank": 42,
    "pinyin": [
      "xià"
    ],
    "radical": "一",
    "radicalMeaning": "one",
    "strokeCount": 3,
    "decomposition": "⿱一卜",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、卜。",
    "observationHint": "先看清楚「下」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "卜"
    ],
    "definition": "below, underneath; inferior; to bring down; next",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-81ea",
    "layer": 1,
    "character": "自",
    "rank": 43,
    "pinyin": [
      "zì"
    ],
    "radical": "自",
    "radicalMeaning": "self",
    "strokeCount": 6,
    "decomposition": "⿻目？",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 目。",
    "observationHint": "先把「自」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "目"
    ],
    "definition": "self; private, personal; from",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e4b",
    "layer": 1,
    "character": "之",
    "rank": 44,
    "pinyin": [
      "zhī"
    ],
    "radical": "丿",
    "radicalMeaning": "bend",
    "strokeCount": 3,
    "decomposition": "⿱丶？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 丶。",
    "observationHint": "先看清楚「之」上下兩層，再按順序落筆。",
    "parts": [
      "丶"
    ],
    "definition": "marks preceding phrase as modifier of following phrase; it, him her, them; to go to",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e74",
    "layer": 1,
    "character": "年",
    "rank": 45,
    "pinyin": [
      "nián"
    ],
    "radical": "干",
    "radicalMeaning": "dry",
    "strokeCount": 6,
    "decomposition": "⿻干？",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 干。",
    "observationHint": "先把「年」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "干"
    ],
    "definition": "year; anniversary; a person's age",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-904e",
    "layer": 1,
    "character": "過",
    "rank": 46,
    "pinyin": [
      "guò"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 12,
    "decomposition": "⿺辶咼",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、咼。",
    "observationHint": "先看「過」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "咼"
    ],
    "definition": "pass; to go across, to pass through",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9aee",
    "layer": 1,
    "character": "髮",
    "rank": 47,
    "pinyin": [
      "fā"
    ],
    "radical": "髟",
    "radicalMeaning": "hair",
    "strokeCount": 15,
    "decomposition": "⿱髟犮",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 髟、犮。",
    "observationHint": "先看清楚「髮」上下兩層，再按順序落筆。",
    "parts": [
      "髟",
      "犮"
    ],
    "definition": "to issue, to dispatch, to send out; hair",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f8c",
    "layer": 1,
    "character": "後",
    "rank": 48,
    "pinyin": [
      "hòu"
    ],
    "radical": "彳",
    "radicalMeaning": "step",
    "strokeCount": 9,
    "decomposition": "⿰彳⿱幺夂",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 彳、幺、夂。",
    "observationHint": "先觀察「後」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "彳",
      "幺",
      "夂"
    ],
    "definition": "after; behind, rear; descendants",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f5c",
    "layer": 1,
    "character": "作",
    "rank": 49,
    "pinyin": [
      "zuò"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 7,
    "decomposition": "⿰亻乍",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、乍。",
    "observationHint": "先觀察「作」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "乍"
    ],
    "definition": "to make; to write, to compose; to act, to perform",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-88e1",
    "layer": 1,
    "character": "裡",
    "rank": 50,
    "pinyin": [
      "lǐ"
    ],
    "radical": "衤",
    "radicalMeaning": "clothes",
    "strokeCount": 12,
    "decomposition": "⿰衤里",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 衤、里。",
    "observationHint": "先觀察「裡」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "衤",
      "里"
    ],
    "definition": "unit of distance equal to 0.5km; village; lane",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7528",
    "layer": 1,
    "character": "用",
    "rank": 51,
    "pinyin": [
      "yòng"
    ],
    "radical": "用",
    "radicalMeaning": "use",
    "strokeCount": 5,
    "decomposition": "⿵冂？",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 冂。",
    "observationHint": "先看「用」的外框，再注意裡面的部分。",
    "parts": [
      "冂"
    ],
    "definition": "to use, to employ, to apply; use",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9053",
    "layer": 1,
    "character": "道",
    "rank": 52,
    "pinyin": [
      "dào"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 12,
    "decomposition": "⿺辶首",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、首。",
    "observationHint": "先看「道」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "首"
    ],
    "definition": "method, way; path, road",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-884c",
    "layer": 1,
    "character": "行",
    "rank": 53,
    "pinyin": [
      "xíng"
    ],
    "radical": "行",
    "radicalMeaning": "go/do",
    "strokeCount": 6,
    "decomposition": "⿰彳亍",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 彳、亍。",
    "observationHint": "先觀察「行」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "彳",
      "亍"
    ],
    "definition": "to go, to walk, to move; professional",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6240",
    "layer": 1,
    "character": "所",
    "rank": 54,
    "pinyin": [
      "suǒ"
    ],
    "radical": "户",
    "radicalMeaning": "door/house",
    "strokeCount": 8,
    "decomposition": "⿰户斤",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 户、斤。",
    "observationHint": "先觀察「所」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "户",
      "斤"
    ],
    "definition": "place, location; \"that which\", a particle introducing a passive clause",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7136",
    "layer": 1,
    "character": "然",
    "rank": 55,
    "pinyin": [
      "rán"
    ],
    "radical": "灬",
    "radicalMeaning": "fire",
    "strokeCount": 12,
    "decomposition": "⿱肰灬",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 肰、灬。",
    "observationHint": "先看清楚「然」上下兩層，再按順序落筆。",
    "parts": [
      "肰",
      "灬"
    ],
    "definition": "certainly; naturally; suddenly",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-50a2",
    "layer": 1,
    "character": "傢",
    "rank": 56,
    "pinyin": [
      "jiā"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 12,
    "decomposition": "⿰亻家",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、家。",
    "observationHint": "先觀察「傢」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "家"
    ],
    "definition": "stubborn, obstinate, intransigent",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7a2e",
    "layer": 1,
    "character": "種",
    "rank": 57,
    "pinyin": [
      "zhǒng"
    ],
    "radical": "禾",
    "radicalMeaning": "grain",
    "strokeCount": 14,
    "decomposition": "⿰禾重",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 禾、重。",
    "observationHint": "先觀察「種」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "禾",
      "重"
    ],
    "definition": "race, kind, breed; seed; to plant",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e8b",
    "layer": 1,
    "character": "事",
    "rank": 58,
    "pinyin": [
      "shì"
    ],
    "radical": "亅",
    "radicalMeaning": "hook",
    "strokeCount": 8,
    "decomposition": "⿻⿳一口彐亅",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 一、口、彐、亅。",
    "observationHint": "先把「事」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "一",
      "口",
      "彐",
      "亅"
    ],
    "definition": "affair, matter, business; to serve; accident, incident",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6210",
    "layer": 1,
    "character": "成",
    "rank": 59,
    "pinyin": [
      "chéng"
    ],
    "radical": "戈",
    "radicalMeaning": "spear",
    "strokeCount": 6,
    "decomposition": "⿰丁戈",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 丁、戈。",
    "observationHint": "先觀察「成」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "丁",
      "戈"
    ],
    "definition": "to accomplish; to become; to complete, to finish; to succeed",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-65b9",
    "layer": 1,
    "character": "方",
    "rank": 60,
    "pinyin": [
      "fāng"
    ],
    "radical": "方",
    "radicalMeaning": "square/raft",
    "strokeCount": 4,
    "decomposition": "⿱亠？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 亠。",
    "observationHint": "先看清楚「方」上下兩層，再按順序落筆。",
    "parts": [
      "亠"
    ],
    "definition": "square, rectangle; side; region; flag",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-591a",
    "layer": 1,
    "character": "多",
    "rank": 61,
    "pinyin": [
      "duō"
    ],
    "radical": "夕",
    "radicalMeaning": "evening/unset",
    "strokeCount": 6,
    "decomposition": "⿱夕夕",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 夕、夕。",
    "observationHint": "先看清楚「多」上下兩層，再按順序落筆。",
    "parts": [
      "夕",
      "夕"
    ],
    "definition": "much, many, multi-; more than, over",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7d93",
    "layer": 1,
    "character": "經",
    "rank": 62,
    "pinyin": [
      "jīng"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 13,
    "decomposition": "⿰糹巠",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、巠。",
    "observationHint": "先觀察「經」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "巠"
    ],
    "definition": "the classics; to experience, to undergo",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e48",
    "layer": 1,
    "character": "么",
    "rank": 63,
    "pinyin": [
      "me"
    ],
    "radical": "丿",
    "radicalMeaning": "bend",
    "strokeCount": 3,
    "decomposition": "⿱丿厶",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 丿、厶。",
    "observationHint": "先看清楚「么」上下兩層，再按順序落筆。",
    "parts": [
      "丿",
      "厶"
    ],
    "definition": "interrogative particle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53bb",
    "layer": 1,
    "character": "去",
    "rank": 64,
    "pinyin": [
      "qù"
    ],
    "radical": "厶",
    "radicalMeaning": "private",
    "strokeCount": 5,
    "decomposition": "⿱土厶",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 土、厶。",
    "observationHint": "先看清楚「去」上下兩層，再按順序落筆。",
    "parts": [
      "土",
      "厶"
    ],
    "definition": "to go away, to leave, to depart",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6cd5",
    "layer": 1,
    "character": "法",
    "rank": 65,
    "pinyin": [
      "fǎ"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 8,
    "decomposition": "⿰氵去",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、去。",
    "observationHint": "先觀察「法」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "去"
    ],
    "definition": "law, rule, statute; method, way; French",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b78",
    "layer": 1,
    "character": "學",
    "rank": 66,
    "pinyin": [
      "xué"
    ],
    "radical": "子",
    "radicalMeaning": "child",
    "strokeCount": 16,
    "decomposition": "⿳？冖子",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 冖、子。",
    "observationHint": "先把「學」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "冖",
      "子"
    ],
    "definition": "learning, knowledge, science; to study, to go to school; -ology",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5982",
    "layer": 1,
    "character": "如",
    "rank": 67,
    "pinyin": [
      "rú"
    ],
    "radical": "女",
    "radicalMeaning": "woman",
    "strokeCount": 6,
    "decomposition": "⿰女口",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 女、口。",
    "observationHint": "先觀察「如」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "女",
      "口"
    ],
    "definition": "as, as if, like, such as, supposing",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-90fd",
    "layer": 1,
    "character": "都",
    "rank": 68,
    "pinyin": [
      "dōu"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 10,
    "decomposition": "⿰者阝",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 者、阝。",
    "observationHint": "先觀察「都」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "者",
      "阝"
    ],
    "definition": "all, each, entirely, whole; metropolis; capital",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8855",
    "layer": 1,
    "character": "衕",
    "rank": 69,
    "pinyin": [
      "tóng"
    ],
    "radical": "行",
    "radicalMeaning": "go/do",
    "strokeCount": 12,
    "decomposition": "⿻行同",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 行、同。",
    "observationHint": "先把「衕」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "行",
      "同"
    ],
    "definition": "same, similar; together with, alike",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-73fe",
    "layer": 1,
    "character": "現",
    "rank": 70,
    "pinyin": [
      "xiàn"
    ],
    "radical": "王",
    "radicalMeaning": "jade",
    "strokeCount": 11,
    "decomposition": "⿰王見",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 王、見。",
    "observationHint": "先觀察「現」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "王",
      "見"
    ],
    "definition": "to appear, to manifest; current, now",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7576",
    "layer": 1,
    "character": "當",
    "rank": 71,
    "pinyin": [
      "dāng"
    ],
    "radical": "田",
    "radicalMeaning": "field",
    "strokeCount": 13,
    "decomposition": "⿱尚田",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 尚、田。",
    "observationHint": "先看清楚「當」上下兩層，再按順序落筆。",
    "parts": [
      "尚",
      "田"
    ],
    "definition": "appropriate, timely; to act, to serve; the sound of bells",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6c92",
    "layer": 1,
    "character": "沒",
    "rank": 72,
    "pinyin": [
      "méi"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 7,
    "decomposition": "⿰氵⿱？又",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、又。",
    "observationHint": "先觀察「沒」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "又"
    ],
    "definition": "not, none, gone; to bury; to sink, to drown",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-52d5",
    "layer": 1,
    "character": "動",
    "rank": 73,
    "pinyin": [
      "dòng"
    ],
    "radical": "力",
    "radicalMeaning": "power/force",
    "strokeCount": 11,
    "decomposition": "⿰重力",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 重、力。",
    "observationHint": "先觀察「動」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "重",
      "力"
    ],
    "definition": "to move, to happen; movement, action",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8d77",
    "layer": 1,
    "character": "起",
    "rank": 75,
    "pinyin": [
      "qǐ"
    ],
    "radical": "走",
    "radicalMeaning": "run",
    "strokeCount": 10,
    "decomposition": "⿺走己",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 走、己。",
    "observationHint": "先看「起」的外框，再注意裡面的部分。",
    "parts": [
      "走",
      "己"
    ],
    "definition": "to begin, to initiate; to rise, to stand up",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-770b",
    "layer": 1,
    "character": "看",
    "rank": 76,
    "pinyin": [
      "kàn"
    ],
    "radical": "目",
    "radicalMeaning": "eye",
    "strokeCount": 9,
    "decomposition": "⿱手目",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 手、目。",
    "observationHint": "先看清楚「看」上下兩層，再按順序落筆。",
    "parts": [
      "手",
      "目"
    ],
    "definition": "to look, to see; to examine, to scrutinize",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b9a",
    "layer": 1,
    "character": "定",
    "rank": 77,
    "pinyin": [
      "dìng"
    ],
    "radical": "宀",
    "radicalMeaning": "roof",
    "strokeCount": 8,
    "decomposition": "⿱宀疋",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、疋。",
    "observationHint": "先看清楚「定」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "疋"
    ],
    "definition": "to decide, to fix, to settle; to order; definite, fixed, sure",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5929",
    "layer": 1,
    "character": "天",
    "rank": 78,
    "pinyin": [
      "tiān"
    ],
    "radical": "大",
    "radicalMeaning": "big",
    "strokeCount": 4,
    "decomposition": "⿱一大",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、大。",
    "observationHint": "先看清楚「天」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "大"
    ],
    "definition": "sky, heaven; god, celestial",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5206",
    "layer": 1,
    "character": "分",
    "rank": 79,
    "pinyin": [
      "fēn"
    ],
    "radical": "刀",
    "radicalMeaning": "knife",
    "strokeCount": 4,
    "decomposition": "⿱八刀",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 八、刀。",
    "observationHint": "先看清楚「分」上下兩層，再按順序落筆。",
    "parts": [
      "八",
      "刀"
    ],
    "definition": "to divide, to allocate; fraction; small unit of time or other quantity",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9084",
    "layer": 1,
    "character": "還",
    "rank": 80,
    "pinyin": [
      "hái"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 16,
    "decomposition": "⿺辶睘",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、睘。",
    "observationHint": "先看「還」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "睘"
    ],
    "definition": "also, besides; still, yet; to return",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9032",
    "layer": 1,
    "character": "進",
    "rank": 81,
    "pinyin": [
      "jìn"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 11,
    "decomposition": "⿺辶隹",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、隹。",
    "observationHint": "先看「進」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "隹"
    ],
    "definition": "to advance, to make progress; to come in, to enter",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-597d",
    "layer": 1,
    "character": "好",
    "rank": 82,
    "pinyin": [
      "hǎo"
    ],
    "radical": "女",
    "radicalMeaning": "woman",
    "strokeCount": 6,
    "decomposition": "⿰女子",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 女、子。",
    "observationHint": "先觀察「好」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "女",
      "子"
    ],
    "definition": "good, excellent, fine; proper, suitable; well",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c0f",
    "layer": 1,
    "character": "小",
    "rank": 83,
    "pinyin": [
      "xiǎo"
    ],
    "radical": "小",
    "radicalMeaning": "small",
    "strokeCount": 3,
    "decomposition": "⿻亅八",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 亅、八。",
    "observationHint": "先把「小」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "亅",
      "八"
    ],
    "definition": "small, tiny, insignificant",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-90e8",
    "layer": 1,
    "character": "部",
    "rank": 84,
    "pinyin": [
      "bù"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 10,
    "decomposition": "⿰咅阝",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 咅、阝。",
    "observationHint": "先觀察「部」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "咅",
      "阝"
    ],
    "definition": "department, ministry; division, unit; part, section",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5176",
    "layer": 1,
    "character": "其",
    "rank": 85,
    "pinyin": [
      "qí"
    ],
    "radical": "八",
    "radicalMeaning": "eight/divide",
    "strokeCount": 8,
    "decomposition": "⿱甘⿱一八",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 甘、一、八。",
    "observationHint": "先看清楚「其」上下兩層，再按順序落筆。",
    "parts": [
      "甘",
      "一",
      "八"
    ],
    "definition": "his, her, its, their; that",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e9b",
    "layer": 1,
    "character": "些",
    "rank": 86,
    "pinyin": [
      "xiē"
    ],
    "radical": "二",
    "radicalMeaning": "two",
    "strokeCount": 8,
    "decomposition": "⿱此二",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 此、二。",
    "observationHint": "先看清楚「些」上下兩層，再按順序落筆。",
    "parts": [
      "此",
      "二"
    ],
    "definition": "little, few; rather, somewhat",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e3b",
    "layer": 1,
    "character": "主",
    "rank": 87,
    "pinyin": [
      "zhǔ"
    ],
    "radical": "丶",
    "radicalMeaning": "dot",
    "strokeCount": 5,
    "decomposition": "⿱丶王",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 丶、王。",
    "observationHint": "先看清楚「主」上下兩層，再按順序落筆。",
    "parts": [
      "丶",
      "王"
    ],
    "definition": "to own; to host; master; host; lord",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6a23",
    "layer": 1,
    "character": "樣",
    "rank": 88,
    "pinyin": [
      "yàng"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 15,
    "decomposition": "⿰木羕",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、羕。",
    "observationHint": "先觀察「樣」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "羕"
    ],
    "definition": "form, pattern, shape, style",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7406",
    "layer": 1,
    "character": "理",
    "rank": 89,
    "pinyin": [
      "lǐ"
    ],
    "radical": "王",
    "radicalMeaning": "jade",
    "strokeCount": 11,
    "decomposition": "⿰王里",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 王、里。",
    "observationHint": "先觀察「理」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "王",
      "里"
    ],
    "definition": "science, reason, logic; to manage",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5fc3",
    "layer": 1,
    "character": "心",
    "rank": 90,
    "pinyin": [
      "xīn"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 4,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 心。",
    "observationHint": "先觀察「心」整體輪廓，再留意和 心 有關的部分。",
    "parts": [],
    "definition": "heart; mind; soul",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5979",
    "layer": 1,
    "character": "她",
    "rank": 91,
    "pinyin": [
      "tā"
    ],
    "radical": "女",
    "radicalMeaning": "woman",
    "strokeCount": 6,
    "decomposition": "⿰女也",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 女、也。",
    "observationHint": "先觀察「她」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "女",
      "也"
    ],
    "definition": "she, her",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-672c",
    "layer": 1,
    "character": "本",
    "rank": 92,
    "pinyin": [
      "běn"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 5,
    "decomposition": "⿻木一",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 木、一。",
    "observationHint": "先把「本」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "木",
      "一"
    ],
    "definition": "root, origin, source; basis",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-524d",
    "layer": 1,
    "character": "前",
    "rank": 93,
    "pinyin": [
      "qián"
    ],
    "radical": "刂",
    "radicalMeaning": "knife",
    "strokeCount": 9,
    "decomposition": "⿱⿱丷一刖",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 丷、一、刖。",
    "observationHint": "先看清楚「前」上下兩層，再按順序落筆。",
    "parts": [
      "丷",
      "一",
      "刖"
    ],
    "definition": "in front, forward; former, preceding",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f00",
    "layer": 1,
    "character": "开",
    "rank": 94,
    "pinyin": [
      "kāi"
    ],
    "radical": "廾",
    "radicalMeaning": null,
    "strokeCount": 4,
    "decomposition": "⿱一廾",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、廾。",
    "observationHint": "先看清楚「开」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "廾"
    ],
    "definition": "to open; to start, to initiate, to begin",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f46",
    "layer": 1,
    "character": "但",
    "rank": 95,
    "pinyin": [
      "dàn"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 7,
    "decomposition": "⿰亻旦",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、旦。",
    "observationHint": "先觀察「但」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "旦"
    ],
    "definition": "only; but, however, yet, still",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-56e0",
    "layer": 1,
    "character": "因",
    "rank": 96,
    "pinyin": [
      "yīn"
    ],
    "radical": "囗",
    "radicalMeaning": "enclosure",
    "strokeCount": 6,
    "decomposition": "⿴囗大",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 囗、大。",
    "observationHint": "先看「因」的外框，再注意裡面的部分。",
    "parts": [
      "囗",
      "大"
    ],
    "definition": "cause, reason; by; because",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-96bb",
    "layer": 1,
    "character": "隻",
    "rank": 97,
    "pinyin": [
      "zhī"
    ],
    "radical": "隹",
    "radicalMeaning": "small bird",
    "strokeCount": 10,
    "decomposition": "⿱隹又",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 隹、又。",
    "observationHint": "先看清楚「隻」上下兩層，再按順序落筆。",
    "parts": [
      "隹",
      "又"
    ],
    "definition": "only, merely, just",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f9e",
    "layer": 1,
    "character": "從",
    "rank": 98,
    "pinyin": [
      "cóng"
    ],
    "radical": "彳",
    "radicalMeaning": "step",
    "strokeCount": 11,
    "decomposition": "⿰彳⿱从足",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 彳、从、足。",
    "observationHint": "先觀察「從」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "彳",
      "从",
      "足"
    ],
    "definition": "from, by, since, whence, through",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-60f3",
    "layer": 1,
    "character": "想",
    "rank": 99,
    "pinyin": [
      "xiǎng"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 13,
    "decomposition": "⿱相心",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 相、心。",
    "observationHint": "先看清楚「想」上下兩層，再按順序落筆。",
    "parts": [
      "相",
      "心"
    ],
    "definition": "to believe, to wish for; to consider, to plan, to think",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5be6",
    "layer": 1,
    "character": "實",
    "rank": 100,
    "pinyin": [
      "shí"
    ],
    "radical": "宀",
    "radicalMeaning": "roof",
    "strokeCount": 14,
    "decomposition": "⿱宀貫",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、貫。",
    "observationHint": "先看清楚「實」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "貫"
    ],
    "definition": "real, true; honest, sincere",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-65e5",
    "layer": 1,
    "character": "日",
    "rank": 101,
    "pinyin": [
      "rì"
    ],
    "radical": "日",
    "radicalMeaning": "sun/day",
    "strokeCount": 4,
    "decomposition": "⿴口一",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 口、一。",
    "observationHint": "先看「日」的外框，再注意裡面的部分。",
    "parts": [
      "口",
      "一"
    ],
    "definition": "sun; day; daytime",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8ecd",
    "layer": 1,
    "character": "軍",
    "rank": 102,
    "pinyin": [
      "jūn"
    ],
    "radical": "車",
    "radicalMeaning": "car",
    "strokeCount": 9,
    "decomposition": "⿱冖車",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 冖、車。",
    "observationHint": "先看清楚「軍」上下兩層，再按順序落筆。",
    "parts": [
      "冖",
      "車"
    ],
    "definition": "army, military; soldiers, troops",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8005",
    "layer": 1,
    "character": "者",
    "rank": 103,
    "pinyin": [
      "zhě"
    ],
    "radical": "耂",
    "radicalMeaning": "old",
    "strokeCount": 8,
    "decomposition": "⿸耂日",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 耂、日。",
    "observationHint": "先看「者」的外框，再注意裡面的部分。",
    "parts": [
      "耂",
      "日"
    ],
    "definition": "that which; they who; those who",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-610f",
    "layer": 1,
    "character": "意",
    "rank": 104,
    "pinyin": [
      "yì"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 13,
    "decomposition": "⿱音心",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 音、心。",
    "observationHint": "先看清楚「意」上下兩層，再按順序落筆。",
    "parts": [
      "音",
      "心"
    ],
    "definition": "thought, idea, opinion; desire, wish; meaning, intention",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7121",
    "layer": 1,
    "character": "無",
    "rank": 105,
    "pinyin": [
      "wú"
    ],
    "radical": "灬",
    "radicalMeaning": "fire",
    "strokeCount": 12,
    "decomposition": "⿱？灬",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 灬。",
    "observationHint": "先看清楚「無」上下兩層，再按順序落筆。",
    "parts": [
      "灬"
    ],
    "definition": "no, not; lacking, -less",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-529b",
    "layer": 1,
    "character": "力",
    "rank": 106,
    "pinyin": [
      "lì"
    ],
    "radical": "力",
    "radicalMeaning": "power/force",
    "strokeCount": 2,
    "decomposition": "⿻丿？",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 丿。",
    "observationHint": "先把「力」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "丿"
    ],
    "definition": "strength, power; capability, influence",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b83",
    "layer": 1,
    "character": "它",
    "rank": 107,
    "pinyin": [
      "tā"
    ],
    "radical": "宀",
    "radicalMeaning": "roof",
    "strokeCount": 5,
    "decomposition": "⿱宀匕",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、匕。",
    "observationHint": "先看清楚「它」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "匕"
    ],
    "definition": "it; other",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8207",
    "layer": 1,
    "character": "與",
    "rank": 108,
    "pinyin": [
      "yǔ"
    ],
    "radical": "臼",
    "radicalMeaning": "mortar",
    "strokeCount": 13,
    "decomposition": "⿱⿻臼？八",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 臼、八。",
    "observationHint": "先看清楚「與」上下兩層，再按順序落筆。",
    "parts": [
      "臼",
      "八"
    ],
    "definition": "and; with; to; for; to give, to grant",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9577",
    "layer": 1,
    "character": "長",
    "rank": 109,
    "pinyin": [
      "zhǎng"
    ],
    "radical": "長",
    "radicalMeaning": "long/grow",
    "strokeCount": 8,
    "decomposition": "⿱？？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。",
    "observationHint": "先看清楚「長」上下兩層，再按順序落筆。",
    "parts": [],
    "definition": "long, lasting; to excel in",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-628a",
    "layer": 1,
    "character": "把",
    "rank": 110,
    "pinyin": [
      "bǎ"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 7,
    "decomposition": "⿰扌巴",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、巴。",
    "observationHint": "先觀察「把」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "巴"
    ],
    "definition": "to grasp, to hold; to guard, to take; handle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6a5f",
    "layer": 1,
    "character": "機",
    "rank": 111,
    "pinyin": [
      "jī"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 16,
    "decomposition": "⿰木幾",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、幾。",
    "observationHint": "先觀察「機」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "幾"
    ],
    "definition": "desk; machine; moment, opportunity",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5341",
    "layer": 1,
    "character": "十",
    "rank": 112,
    "pinyin": [
      "shí"
    ],
    "radical": "十",
    "radicalMeaning": "ten",
    "strokeCount": 2,
    "decomposition": "⿻一丨",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 一、丨。",
    "observationHint": "先把「十」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "一",
      "丨"
    ],
    "definition": "ten, tenth; complete; perfect",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6c11",
    "layer": 1,
    "character": "民",
    "rank": 113,
    "pinyin": [
      "mín"
    ],
    "radical": "民",
    "radicalMeaning": null,
    "strokeCount": 5,
    "decomposition": "⿻巳戈",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 巳、戈。",
    "observationHint": "先把「民」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "巳",
      "戈"
    ],
    "definition": "citizens, subjects; a nation's people",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7b2c",
    "layer": 1,
    "character": "第",
    "rank": 114,
    "pinyin": [
      "dì"
    ],
    "radical": "⺮",
    "radicalMeaning": "bamboo",
    "strokeCount": 11,
    "decomposition": "⿱⺮弟",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺮、弟。",
    "observationHint": "先看清楚「第」上下兩層，再按順序落筆。",
    "parts": [
      "⺮",
      "弟"
    ],
    "definition": "sequence, number; grade, degree; particle prefacing an ordinal",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-516c",
    "layer": 1,
    "character": "公",
    "rank": 115,
    "pinyin": [
      "gōng"
    ],
    "radical": "八",
    "radicalMeaning": "eight/divide",
    "strokeCount": 4,
    "decomposition": "⿱八厶",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 八、厶。",
    "observationHint": "先看清楚「公」上下兩層，再按順序落筆。",
    "parts": [
      "八",
      "厶"
    ],
    "definition": "fair, equitable; public; duke",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6b64",
    "layer": 1,
    "character": "此",
    "rank": 116,
    "pinyin": [
      "cǐ"
    ],
    "radical": "止",
    "radicalMeaning": "stop",
    "strokeCount": 6,
    "decomposition": "⿰止匕",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 止、匕。",
    "observationHint": "先觀察「此」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "止",
      "匕"
    ],
    "definition": "this, these; in this case, then",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5df2",
    "layer": 1,
    "character": "已",
    "rank": 117,
    "pinyin": [
      "yǐ"
    ],
    "radical": "己",
    "radicalMeaning": "oneself",
    "strokeCount": 3,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 己。",
    "observationHint": "先觀察「已」整體輪廓，再留意和 己 有關的部分。",
    "parts": [],
    "definition": "already; finished; to stop; then, afterwards",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5de5",
    "layer": 1,
    "character": "工",
    "rank": 118,
    "pinyin": [
      "gōng"
    ],
    "radical": "工",
    "radicalMeaning": "work",
    "strokeCount": 3,
    "decomposition": "⿱一丄",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、丄。",
    "observationHint": "先看清楚「工」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "丄"
    ],
    "definition": "labor, work; laborer, worker",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f7f",
    "layer": 1,
    "character": "使",
    "rank": 119,
    "pinyin": [
      "shǐ"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 8,
    "decomposition": "⿰亻吏",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、吏。",
    "observationHint": "先觀察「使」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "吏"
    ],
    "definition": "cause, mission, orders; envoy, messenger, ambassador",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-60c5",
    "layer": 1,
    "character": "情",
    "rank": 120,
    "pinyin": [
      "qíng"
    ],
    "radical": "忄",
    "radicalMeaning": "heart",
    "strokeCount": 11,
    "decomposition": "⿰忄青",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 忄、青。",
    "observationHint": "先觀察「情」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "忄",
      "青"
    ],
    "definition": "emotion, feeling, sentiment",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-660e",
    "layer": 1,
    "character": "明",
    "rank": 121,
    "pinyin": [
      "míng"
    ],
    "radical": "日",
    "radicalMeaning": "sun/day",
    "strokeCount": 8,
    "decomposition": "⿰日月",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 日、月。",
    "observationHint": "先觀察「明」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "日",
      "月"
    ],
    "definition": "bright, clear; to explain, to understand, to shed light",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6027",
    "layer": 1,
    "character": "性",
    "rank": 122,
    "pinyin": [
      "xìng"
    ],
    "radical": "忄",
    "radicalMeaning": "heart",
    "strokeCount": 8,
    "decomposition": "⿰忄生",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 忄、生。",
    "observationHint": "先觀察「性」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "忄",
      "生"
    ],
    "definition": "sex, nature, character; suffix converting a verb to an adjective",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-77e5",
    "layer": 1,
    "character": "知",
    "rank": 123,
    "pinyin": [
      "zhī"
    ],
    "radical": "矢",
    "radicalMeaning": "arrow",
    "strokeCount": 8,
    "decomposition": "⿰矢口",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 矢、口。",
    "observationHint": "先觀察「知」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "矢",
      "口"
    ],
    "definition": "to know, to perceive, to comprehend",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5168",
    "layer": 1,
    "character": "全",
    "rank": 124,
    "pinyin": [
      "quán"
    ],
    "radical": "入",
    "radicalMeaning": "enter",
    "strokeCount": 6,
    "decomposition": "⿱入玉",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 入、玉。",
    "observationHint": "先看清楚「全」上下兩層，再按順序落筆。",
    "parts": [
      "入",
      "玉"
    ],
    "definition": "whole, entire, complete; to preserve",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e09",
    "layer": 1,
    "character": "三",
    "rank": 125,
    "pinyin": [
      "sān"
    ],
    "radical": "一",
    "radicalMeaning": "one",
    "strokeCount": 3,
    "decomposition": "⿱一二",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、二。",
    "observationHint": "先看清楚「三」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "二"
    ],
    "definition": "three",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53c8",
    "layer": 1,
    "character": "又",
    "rank": 126,
    "pinyin": [
      "yòu"
    ],
    "radical": "又",
    "radicalMeaning": "right hand",
    "strokeCount": 2,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 又。",
    "observationHint": "先觀察「又」整體輪廓，再留意和 又 有關的部分。",
    "parts": [],
    "definition": "and, also, again, in addition",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-95dc",
    "layer": 1,
    "character": "關",
    "rank": 127,
    "pinyin": [
      "guān"
    ],
    "radical": "門",
    "radicalMeaning": "gate",
    "strokeCount": 19,
    "decomposition": "⿵門⿱⿰幺幺丱",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 門、幺、幺、丱。",
    "observationHint": "先看「關」的外框，再注意裡面的部分。",
    "parts": [
      "門",
      "幺",
      "幺",
      "丱"
    ],
    "definition": "frontier pass; to close, to shut; relation",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9ede",
    "layer": 1,
    "character": "點",
    "rank": 128,
    "pinyin": [
      "diǎn"
    ],
    "radical": "黑",
    "radicalMeaning": "black",
    "strokeCount": 17,
    "decomposition": "⿰黑占",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 黑、占。",
    "observationHint": "先觀察「點」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "黑",
      "占"
    ],
    "definition": "dot, point, speck",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6b63",
    "layer": 1,
    "character": "正",
    "rank": 129,
    "pinyin": [
      "zhèng"
    ],
    "radical": "止",
    "radicalMeaning": "stop",
    "strokeCount": 5,
    "decomposition": "⿱一止",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、止。",
    "observationHint": "先看清楚「正」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "止"
    ],
    "definition": "straight, right, proper, correct, just, true",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-696d",
    "layer": 1,
    "character": "業",
    "rank": 130,
    "pinyin": [
      "yè"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 13,
    "decomposition": "⿱业⿱？未",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 业、未。",
    "observationHint": "先看清楚「業」上下兩層，再按順序落筆。",
    "parts": [
      "业",
      "未"
    ],
    "definition": "business, profession; to study, to work",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5916",
    "layer": 1,
    "character": "外",
    "rank": 131,
    "pinyin": [
      "wài"
    ],
    "radical": "夕",
    "radicalMeaning": "evening/unset",
    "strokeCount": 5,
    "decomposition": "⿰夕卜",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 夕、卜。",
    "observationHint": "先觀察「外」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "夕",
      "卜"
    ],
    "definition": "out, outside, external; foreign; in addition",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c07",
    "layer": 1,
    "character": "將",
    "rank": 132,
    "pinyin": [
      "jiāng"
    ],
    "radical": "寸",
    "radicalMeaning": "thumb",
    "strokeCount": 11,
    "decomposition": "⿰爿⿱夕寸",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 爿、夕、寸。",
    "observationHint": "先觀察「將」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "爿",
      "夕",
      "寸"
    ],
    "definition": "the future, what will be; ready, prepared; a general",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5169",
    "layer": 1,
    "character": "兩",
    "rank": 133,
    "pinyin": [
      "liǎng"
    ],
    "radical": "入",
    "radicalMeaning": "enter",
    "strokeCount": 8,
    "decomposition": "⿱一⿻巾⿰入入",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、巾、入、入。",
    "observationHint": "先看清楚「兩」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "巾",
      "入",
      "入"
    ],
    "definition": "two, both, pair, couple; ounce",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9ad8",
    "layer": 1,
    "character": "高",
    "rank": 134,
    "pinyin": [
      "gāo"
    ],
    "radical": "高",
    "radicalMeaning": "tall",
    "strokeCount": 10,
    "decomposition": "⿳亠口冋",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 亠、口、冋。",
    "observationHint": "先把「高」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "亠",
      "口",
      "冋"
    ],
    "definition": "tall, lofty; high, elevated",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9593",
    "layer": 1,
    "character": "間",
    "rank": 135,
    "pinyin": [
      "jiān"
    ],
    "radical": "門",
    "radicalMeaning": "gate",
    "strokeCount": 12,
    "decomposition": "⿵門日",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 門、日。",
    "observationHint": "先看「間」的外框，再注意裡面的部分。",
    "parts": [
      "門",
      "日"
    ],
    "definition": "between, among; midpoint; space, place, locality",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7531",
    "layer": 1,
    "character": "由",
    "rank": 136,
    "pinyin": [
      "yóu"
    ],
    "radical": "田",
    "radicalMeaning": "field",
    "strokeCount": 5,
    "decomposition": "田",
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 田。",
    "observationHint": "先觀察「由」整體輪廓，再留意和 田 有關的部分。",
    "parts": [
      "田"
    ],
    "definition": "cause, reason; from",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-554f",
    "layer": 1,
    "character": "問",
    "rank": 137,
    "pinyin": [
      "wèn"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 11,
    "decomposition": "⿵門口",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 門、口。",
    "observationHint": "先看「問」的外框，再注意裡面的部分。",
    "parts": [
      "門",
      "口"
    ],
    "definition": "to ask about, to inquire after",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f88",
    "layer": 1,
    "character": "很",
    "rank": 138,
    "pinyin": [
      "hěn"
    ],
    "radical": "彳",
    "radicalMeaning": "step",
    "strokeCount": 9,
    "decomposition": "⿰彳艮",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 彳、艮。",
    "observationHint": "先觀察「很」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "彳",
      "艮"
    ],
    "definition": "very, quite, much",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6700",
    "layer": 1,
    "character": "最",
    "rank": 139,
    "pinyin": [
      "zuì"
    ],
    "radical": "曰",
    "radicalMeaning": "say",
    "strokeCount": 12,
    "decomposition": "⿱日取",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 日、取。",
    "observationHint": "先看清楚「最」上下兩層，再按順序落筆。",
    "parts": [
      "日",
      "取"
    ],
    "definition": "most, extremely, exceedingly; superlative",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-91cd",
    "layer": 1,
    "character": "重",
    "rank": 140,
    "pinyin": [
      "zhòng"
    ],
    "radical": "里",
    "radicalMeaning": "village/mile",
    "strokeCount": 9,
    "decomposition": "⿻千里",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 千、里。",
    "observationHint": "先把「重」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "千",
      "里"
    ],
    "definition": "heavy, weighty; to double, to repeat",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f75",
    "layer": 1,
    "character": "併",
    "rank": 141,
    "pinyin": [
      "bìng"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 8,
    "decomposition": "⿰亻并",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、并。",
    "observationHint": "先觀察「併」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "并"
    ],
    "definition": "to combine, to annex; also, what's more",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7269",
    "layer": 1,
    "character": "物",
    "rank": 142,
    "pinyin": [
      "wù"
    ],
    "radical": "牛",
    "radicalMeaning": "cow",
    "strokeCount": 8,
    "decomposition": "⿰牛勿",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 牛、勿。",
    "observationHint": "先觀察「物」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "牛",
      "勿"
    ],
    "definition": "thing, substance, matter; creature",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-624b",
    "layer": 1,
    "character": "手",
    "rank": 143,
    "pinyin": [
      "shǒu"
    ],
    "radical": "手",
    "radicalMeaning": "hand",
    "strokeCount": 4,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 手。",
    "observationHint": "先觀察「手」整體輪廓，再留意和 手 有關的部分。",
    "parts": [],
    "definition": "hand",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-61c9",
    "layer": 1,
    "character": "應",
    "rank": 144,
    "pinyin": [
      "yīng"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 17,
    "decomposition": "⿸⿸广倠心",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 广、倠、心。",
    "observationHint": "先看「應」的外框，再注意裡面的部分。",
    "parts": [
      "广",
      "倠",
      "心"
    ],
    "definition": "should, must; to respond, to handle; to deal with, to cope",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6218",
    "layer": 1,
    "character": "战",
    "rank": 145,
    "pinyin": [
      "zhàn"
    ],
    "radical": "戈",
    "radicalMeaning": "spear",
    "strokeCount": 9,
    "decomposition": "⿰占戈",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 占、戈。",
    "observationHint": "先觀察「战」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "占",
      "戈"
    ],
    "definition": "war, fighting, battle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-982d",
    "layer": 1,
    "character": "頭",
    "rank": 147,
    "pinyin": [
      "tóu"
    ],
    "radical": "頁",
    "radicalMeaning": "leaf",
    "strokeCount": 16,
    "decomposition": "⿰豆頁",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 豆、頁。",
    "observationHint": "先觀察「頭」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "豆",
      "頁"
    ],
    "definition": "head; chief, boss; first, top",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6587",
    "layer": 1,
    "character": "文",
    "rank": 148,
    "pinyin": [
      "wén"
    ],
    "radical": "文",
    "radicalMeaning": "script/literature",
    "strokeCount": 4,
    "decomposition": "⿱亠乂",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 亠、乂。",
    "observationHint": "先看清楚「文」上下兩層，再按順序落筆。",
    "parts": [
      "亠",
      "乂"
    ],
    "definition": "culture, literature, writing",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9ad4",
    "layer": 1,
    "character": "體",
    "rank": 149,
    "pinyin": [
      "tǐ"
    ],
    "radical": "骨",
    "radicalMeaning": "bone",
    "strokeCount": 23,
    "decomposition": "⿰骨豊",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 骨、豊。",
    "observationHint": "先觀察「體」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "骨",
      "豊"
    ],
    "definition": "body; group, class; form, style, system",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-653f",
    "layer": 1,
    "character": "政",
    "rank": 150,
    "pinyin": [
      "zhèng"
    ],
    "radical": "攵",
    "radicalMeaning": "knock",
    "strokeCount": 9,
    "decomposition": "⿰正攵",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 正、攵。",
    "observationHint": "先觀察「政」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "正",
      "攵"
    ],
    "definition": "government, politics",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7f8e",
    "layer": 1,
    "character": "美",
    "rank": 151,
    "pinyin": [
      "měi"
    ],
    "radical": "羊",
    "radicalMeaning": "sheep",
    "strokeCount": 9,
    "decomposition": "⿱羊大",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 羊、大。",
    "observationHint": "先看清楚「美」上下兩層，再按順序落筆。",
    "parts": [
      "羊",
      "大"
    ],
    "definition": "beautiful, pretty; pleasing",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-76f8",
    "layer": 1,
    "character": "相",
    "rank": 152,
    "pinyin": [
      "xiāng"
    ],
    "radical": "目",
    "radicalMeaning": "eye",
    "strokeCount": 9,
    "decomposition": "⿰木目",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、目。",
    "observationHint": "先觀察「相」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "目"
    ],
    "definition": "mutual, reciprocal; equal; each other",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-898b",
    "layer": 1,
    "character": "見",
    "rank": 153,
    "pinyin": [
      "jiàn"
    ],
    "radical": "見",
    "radicalMeaning": "see",
    "strokeCount": 7,
    "decomposition": "⿱目儿",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 目、儿。",
    "observationHint": "先看清楚「見」上下兩層，再按順序落筆。",
    "parts": [
      "目",
      "儿"
    ],
    "definition": "to see, to observe, to meet, to appear",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-88ab",
    "layer": 1,
    "character": "被",
    "rank": 154,
    "pinyin": [
      "bèi"
    ],
    "radical": "衤",
    "radicalMeaning": "clothes",
    "strokeCount": 10,
    "decomposition": "⿰衤皮",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 衤、皮。",
    "observationHint": "先觀察「被」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "衤",
      "皮"
    ],
    "definition": "bedding; a passive particle meaning \"by\"",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5229",
    "layer": 1,
    "character": "利",
    "rank": 155,
    "pinyin": [
      "lì"
    ],
    "radical": "刂",
    "radicalMeaning": "knife",
    "strokeCount": 7,
    "decomposition": "⿰禾刂",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 禾、刂。",
    "observationHint": "先觀察「利」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "禾",
      "刂"
    ],
    "definition": "gains, advantage, profit, merit",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4ec0",
    "layer": 1,
    "character": "什",
    "rank": 156,
    "pinyin": [
      "shén"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 4,
    "decomposition": "⿰亻十",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、十。",
    "observationHint": "先觀察「什」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "十"
    ],
    "definition": "what? mixed, miscellaneous",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e8c",
    "layer": 1,
    "character": "二",
    "rank": 157,
    "pinyin": [
      "èr"
    ],
    "radical": "二",
    "radicalMeaning": "two",
    "strokeCount": 2,
    "decomposition": "⿱一一",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、一。",
    "observationHint": "先看清楚「二」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "一"
    ],
    "definition": "two; twice",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7b49",
    "layer": 1,
    "character": "等",
    "rank": 158,
    "pinyin": [
      "děng"
    ],
    "radical": "⺮",
    "radicalMeaning": "bamboo",
    "strokeCount": 12,
    "decomposition": "⿱⺮寺",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺮、寺。",
    "observationHint": "先看清楚「等」上下兩層，再按順序落筆。",
    "parts": [
      "⺮",
      "寺"
    ],
    "definition": "rank, grade; same, equal; to wait",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7523",
    "layer": 1,
    "character": "産",
    "rank": 159,
    "pinyin": [
      "chǎn"
    ],
    "radical": "生",
    "radicalMeaning": "life",
    "strokeCount": 11,
    "decomposition": "⿸产生",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 产、生。",
    "observationHint": "先看「産」的外框，再注意裡面的部分。",
    "parts": [
      "产",
      "生"
    ],
    "definition": "to give birth",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6216",
    "layer": 1,
    "character": "或",
    "rank": 160,
    "pinyin": [
      "huò"
    ],
    "radical": "戈",
    "radicalMeaning": "spear",
    "strokeCount": 8,
    "decomposition": "⿹戈⿱口一",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 戈、口、一。",
    "observationHint": "先看「或」的外框，再注意裡面的部分。",
    "parts": [
      "戈",
      "口",
      "一"
    ],
    "definition": "or, either, else; maybe, perhaps, possibly",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-65b0",
    "layer": 1,
    "character": "新",
    "rank": 161,
    "pinyin": [
      "xīn"
    ],
    "radical": "斤",
    "radicalMeaning": "axe",
    "strokeCount": 13,
    "decomposition": "⿰亲斤",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亲、斤。",
    "observationHint": "先觀察「新」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亲",
      "斤"
    ],
    "definition": "new, recent, fresh, modern",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5df1",
    "layer": 1,
    "character": "己",
    "rank": 162,
    "pinyin": [
      "jǐ"
    ],
    "radical": "己",
    "radicalMeaning": "oneself",
    "strokeCount": 3,
    "decomposition": "⿱？乚",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 乚。",
    "observationHint": "先看清楚「己」上下兩層，再按順序落筆。",
    "parts": [
      "乚"
    ],
    "definition": "self, oneself; personal, private; 6th heavenly stem",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-88fd",
    "layer": 1,
    "character": "製",
    "rank": 163,
    "pinyin": [
      "zhì"
    ],
    "radical": "衣",
    "radicalMeaning": "clothes",
    "strokeCount": 14,
    "decomposition": "⿱制衣",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 制、衣。",
    "observationHint": "先看清楚「製」上下兩層，再按順序落筆。",
    "parts": [
      "制",
      "衣"
    ],
    "definition": "system; to establish; to manufacture; to overpower",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8eab",
    "layer": 1,
    "character": "身",
    "rank": 164,
    "pinyin": [
      "shēn"
    ],
    "radical": "身",
    "radicalMeaning": "body",
    "strokeCount": 7,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 身。",
    "observationHint": "先觀察「身」整體輪廓，再留意和 身 有關的部分。",
    "parts": [],
    "definition": "body, torso; person; pregnancy",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-679c",
    "layer": 1,
    "character": "果",
    "rank": 165,
    "pinyin": [
      "guǒ"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 8,
    "decomposition": "⿱田木",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 田、木。",
    "observationHint": "先看清楚「果」上下兩層，再按順序落筆。",
    "parts": [
      "田",
      "木"
    ],
    "definition": "fruit, nut; result",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-52a0",
    "layer": 1,
    "character": "加",
    "rank": 166,
    "pinyin": [
      "jiā"
    ],
    "radical": "力",
    "radicalMeaning": "power/force",
    "strokeCount": 5,
    "decomposition": "⿰力口",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 力、口。",
    "observationHint": "先觀察「加」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "力",
      "口"
    ],
    "definition": "to add to, to increase, to augment",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-897f",
    "layer": 1,
    "character": "西",
    "rank": 167,
    "pinyin": [
      "xī"
    ],
    "radical": "西",
    "radicalMeaning": "west",
    "strokeCount": 6,
    "decomposition": "⿻兀囗",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 兀、囗。",
    "observationHint": "先把「西」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "兀",
      "囗"
    ],
    "definition": "west, western, westward",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-65af",
    "layer": 1,
    "character": "斯",
    "rank": 168,
    "pinyin": [
      "sī"
    ],
    "radical": "斤",
    "radicalMeaning": "axe",
    "strokeCount": 12,
    "decomposition": "⿰其斤",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 其、斤。",
    "observationHint": "先觀察「斯」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "其",
      "斤"
    ],
    "definition": "this, thus, such; emphatic particle; used in transliterations",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6708",
    "layer": 1,
    "character": "月",
    "rank": 169,
    "pinyin": [
      "yuè"
    ],
    "radical": "月",
    "radicalMeaning": "moon",
    "strokeCount": 4,
    "decomposition": "⿵冂二",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 冂、二。",
    "observationHint": "先看「月」的外框，再注意裡面的部分。",
    "parts": [
      "冂",
      "二"
    ],
    "definition": "moon; month",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a71",
    "layer": 1,
    "character": "話",
    "rank": 170,
    "pinyin": [
      "huà"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 13,
    "decomposition": "⿰言舌",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、舌。",
    "observationHint": "先觀察「話」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "舌"
    ],
    "definition": "talk, speech; language, dialect",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-95a4",
    "layer": 1,
    "character": "閤",
    "rank": 171,
    "pinyin": [
      "gé"
    ],
    "radical": "門",
    "radicalMeaning": "gate",
    "strokeCount": 14,
    "decomposition": "⿵門合",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 門、合。",
    "observationHint": "先看「閤」的外框，再注意裡面的部分。",
    "parts": [
      "門",
      "合"
    ],
    "definition": "chamber; shelf; side-door",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8ff4",
    "layer": 1,
    "character": "迴",
    "rank": 172,
    "pinyin": [
      "huí"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 9,
    "decomposition": "⿺辶回",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、回。",
    "observationHint": "先看「迴」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "回"
    ],
    "definition": "to rotate, to revolve; curve, zig-zag",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7279",
    "layer": 1,
    "character": "特",
    "rank": 173,
    "pinyin": [
      "tè"
    ],
    "radical": "牛",
    "radicalMeaning": "cow",
    "strokeCount": 10,
    "decomposition": "⿰牛寺",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 牛、寺。",
    "observationHint": "先觀察「特」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "牛",
      "寺"
    ],
    "definition": "special, unique, distinguished",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4ee3",
    "layer": 1,
    "character": "代",
    "rank": 174,
    "pinyin": [
      "dài"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 5,
    "decomposition": "⿰亻弋",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、弋。",
    "observationHint": "先觀察「代」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "弋"
    ],
    "definition": "era, generation; to substitute for, to replace",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5167",
    "layer": 1,
    "character": "內",
    "rank": 175,
    "pinyin": [
      "nèi"
    ],
    "radical": "入",
    "radicalMeaning": "enter",
    "strokeCount": 4,
    "decomposition": "⿻冂入",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 冂、入。",
    "observationHint": "先把「內」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "冂",
      "入"
    ],
    "definition": "inside",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4fe1",
    "layer": 1,
    "character": "信",
    "rank": 176,
    "pinyin": [
      "xìn"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 9,
    "decomposition": "⿰亻言",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、言。",
    "observationHint": "先觀察「信」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "言"
    ],
    "definition": "to trust, to believe; letter, sign",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9336",
    "layer": 1,
    "character": "錶",
    "rank": 177,
    "pinyin": [
      "biǎo"
    ],
    "radical": "釒",
    "radicalMeaning": "metal/gold",
    "strokeCount": 16,
    "decomposition": "⿰釒表",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 釒、表。",
    "observationHint": "先觀察「錶」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "釒",
      "表"
    ],
    "definition": "to show, to express, to display; outside, appearance; a watch",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5316",
    "layer": 1,
    "character": "化",
    "rank": 178,
    "pinyin": [
      "huà"
    ],
    "radical": "匕",
    "radicalMeaning": "spoon",
    "strokeCount": 4,
    "decomposition": "⿰亻匕",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、匕。",
    "observationHint": "先觀察「化」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "匕"
    ],
    "definition": "to change, to convert, to reform; -ize",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8001",
    "layer": 1,
    "character": "老",
    "rank": 179,
    "pinyin": [
      "lǎo"
    ],
    "radical": "老",
    "radicalMeaning": "old",
    "strokeCount": 6,
    "decomposition": "⿱耂匕",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 耂、匕。",
    "observationHint": "先看清楚「老」上下兩層，再按順序落筆。",
    "parts": [
      "耂",
      "匕"
    ],
    "definition": "old, aged; experienced",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7d66",
    "layer": 1,
    "character": "給",
    "rank": 180,
    "pinyin": [
      "gěi"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 12,
    "decomposition": "⿰糹合",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、合。",
    "observationHint": "先觀察「給」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "合"
    ],
    "definition": "to give, to lend; for, by",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e16",
    "layer": 1,
    "character": "世",
    "rank": 181,
    "pinyin": [
      "shì"
    ],
    "radical": "一",
    "radicalMeaning": "one",
    "strokeCount": 5,
    "decomposition": "⿻廿？",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 廿。",
    "observationHint": "先把「世」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "廿"
    ],
    "definition": "generation, era, age; world",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f4d",
    "layer": 1,
    "character": "位",
    "rank": 182,
    "pinyin": [
      "wèi"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 7,
    "decomposition": "⿰亻立",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、立。",
    "observationHint": "先觀察「位」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "立"
    ],
    "definition": "seat, throne; rank, status; position, location",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6b21",
    "layer": 1,
    "character": "次",
    "rank": 183,
    "pinyin": [
      "cì"
    ],
    "radical": "欠",
    "radicalMeaning": "yawn",
    "strokeCount": 6,
    "decomposition": "⿰冫欠",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 冫、欠。",
    "observationHint": "先觀察「次」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "冫",
      "欠"
    ],
    "definition": "order, sequence; second, next; one after the other",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5ea6",
    "layer": 1,
    "character": "度",
    "rank": 184,
    "pinyin": [
      "dù"
    ],
    "radical": "广",
    "radicalMeaning": "house on cliff",
    "strokeCount": 9,
    "decomposition": "⿸广⿱廿又",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 广、廿、又。",
    "observationHint": "先看「度」的外框，再注意裡面的部分。",
    "parts": [
      "广",
      "廿",
      "又"
    ],
    "definition": "degree, system; manner; to consider",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9580",
    "layer": 1,
    "character": "門",
    "rank": 185,
    "pinyin": [
      "mén"
    ],
    "radical": "門",
    "radicalMeaning": "gate",
    "strokeCount": 8,
    "decomposition": "⿰？？",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。",
    "observationHint": "先觀察「門」左右兩邊的分工，再把位置寫穩。",
    "parts": [],
    "definition": "gate, door, entrance, opening",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4efb",
    "layer": 1,
    "character": "任",
    "rank": 186,
    "pinyin": [
      "rèn"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 6,
    "decomposition": "⿰亻壬",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、壬。",
    "observationHint": "先觀察「任」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "壬"
    ],
    "definition": "to trust, to rely on; to appoint; to bear; duty, office",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e38",
    "layer": 1,
    "character": "常",
    "rank": 187,
    "pinyin": [
      "cháng"
    ],
    "radical": "巾",
    "radicalMeaning": "turban/scarf",
    "strokeCount": 11,
    "decomposition": "⿱尚巾",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 尚、巾。",
    "observationHint": "先看清楚「常」上下兩層，再按順序落筆。",
    "parts": [
      "尚",
      "巾"
    ],
    "definition": "common, general, normal; always, frequently, regularly",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5148",
    "layer": 1,
    "character": "先",
    "rank": 188,
    "pinyin": [
      "xiān"
    ],
    "radical": "儿",
    "radicalMeaning": "legs",
    "strokeCount": 6,
    "decomposition": "⿱⿰？土儿",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 土、儿。",
    "observationHint": "先看清楚「先」上下兩層，再按順序落筆。",
    "parts": [
      "土",
      "儿"
    ],
    "definition": "first, former, previous",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6d77",
    "layer": 1,
    "character": "海",
    "rank": 189,
    "pinyin": [
      "hǎi"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 10,
    "decomposition": "⿰氵每",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、每。",
    "observationHint": "先觀察「海」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "每"
    ],
    "definition": "sea, ocean; maritime",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-901a",
    "layer": 1,
    "character": "通",
    "rank": 190,
    "pinyin": [
      "tōng"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 10,
    "decomposition": "⿺辶甬",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、甬。",
    "observationHint": "先看「通」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "甬"
    ],
    "definition": "to pass through, to open, to connect; to communicate; common",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5152",
    "layer": 1,
    "character": "兒",
    "rank": 192,
    "pinyin": [
      "ér"
    ],
    "radical": "儿",
    "radicalMeaning": "legs",
    "strokeCount": 8,
    "decomposition": "⿱臼儿",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 臼、儿。",
    "observationHint": "先看清楚「兒」上下兩層，再按順序落筆。",
    "parts": [
      "臼",
      "儿"
    ],
    "definition": "son, child",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-539f",
    "layer": 1,
    "character": "原",
    "rank": 193,
    "pinyin": [
      "yuán"
    ],
    "radical": "厂",
    "radicalMeaning": "cliff",
    "strokeCount": 10,
    "decomposition": "⿸厂泉",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 厂、泉。",
    "observationHint": "先看「原」的外框，再注意裡面的部分。",
    "parts": [
      "厂",
      "泉"
    ],
    "definition": "source, origin, beginning",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6771",
    "layer": 1,
    "character": "東",
    "rank": 194,
    "pinyin": [
      "dōng"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 8,
    "decomposition": "⿻木日",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 木、日。",
    "observationHint": "先把「東」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "木",
      "日"
    ],
    "definition": "east, eastern, eastward",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8072",
    "layer": 1,
    "character": "聲",
    "rank": 195,
    "pinyin": [
      "shēng"
    ],
    "radical": "耳",
    "radicalMeaning": "ear",
    "strokeCount": 17,
    "decomposition": "⿱殸耳",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 殸、耳。",
    "observationHint": "先看清楚「聲」上下兩層，再按順序落筆。",
    "parts": [
      "殸",
      "耳"
    ],
    "definition": "sound, noise; voice, tone, music",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-63d0",
    "layer": 1,
    "character": "提",
    "rank": 196,
    "pinyin": [
      "tí"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 12,
    "decomposition": "⿰扌是",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、是。",
    "observationHint": "先觀察「提」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "是"
    ],
    "definition": "to hold in the hand; to lift, to raise",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7acb",
    "layer": 1,
    "character": "立",
    "rank": 197,
    "pinyin": [
      "lì"
    ],
    "radical": "立",
    "radicalMeaning": "stand erect",
    "strokeCount": 5,
    "decomposition": "⿳亠丷一",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 亠、丷、一。",
    "observationHint": "先把「立」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "亠",
      "丷",
      "一"
    ],
    "definition": "to stand; to establish, to set up",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53ca",
    "layer": 1,
    "character": "及",
    "rank": 198,
    "pinyin": [
      "jí"
    ],
    "radical": "又",
    "radicalMeaning": "right hand",
    "strokeCount": 3,
    "decomposition": "⿻？又",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 又。",
    "observationHint": "先把「及」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "又"
    ],
    "definition": "to extend; to reach; and; in time",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6bd4",
    "layer": 1,
    "character": "比",
    "rank": 199,
    "pinyin": [
      "bǐ"
    ],
    "radical": "比",
    "radicalMeaning": "compare/compete",
    "strokeCount": 4,
    "decomposition": "⿰匕匕",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 匕、匕。",
    "observationHint": "先觀察「比」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "匕",
      "匕"
    ],
    "definition": "to compare, liken; comparison; than",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-54e1",
    "layer": 1,
    "character": "員",
    "rank": 200,
    "pinyin": [
      "yuán"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 10,
    "decomposition": "⿱口貝",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 口、貝。",
    "observationHint": "先看清楚「員」上下兩層，再按順序落筆。",
    "parts": [
      "口",
      "貝"
    ],
    "definition": "employee; member; personnel, staff",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-89e3",
    "layer": 1,
    "character": "解",
    "rank": 201,
    "pinyin": [
      "jiě"
    ],
    "radical": "角",
    "radicalMeaning": "horn",
    "strokeCount": 13,
    "decomposition": "⿰角⿱刀牛",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 角、刀、牛。",
    "observationHint": "先觀察「解」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "角",
      "刀",
      "牛"
    ],
    "definition": "to explain; to loosen; to unfasten, to untie",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6c34",
    "layer": 1,
    "character": "水",
    "rank": 202,
    "pinyin": [
      "shuǐ"
    ],
    "radical": "水",
    "radicalMeaning": "water",
    "strokeCount": 4,
    "decomposition": "⿻亅？",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 亅。",
    "observationHint": "先把「水」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "亅"
    ],
    "definition": "water, liquid, lotion, juice",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-540d",
    "layer": 1,
    "character": "名",
    "rank": 203,
    "pinyin": [
      "míng"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 6,
    "decomposition": "⿸夕口",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 夕、口。",
    "observationHint": "先看「名」的外框，再注意裡面的部分。",
    "parts": [
      "夕",
      "口"
    ],
    "definition": "name; position, rank, title",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8ad6",
    "layer": 1,
    "character": "論",
    "rank": 205,
    "pinyin": [
      "lùn"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 15,
    "decomposition": "⿰言侖",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、侖。",
    "observationHint": "先觀察「論」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "侖"
    ],
    "definition": "debate; discussion",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8655",
    "layer": 1,
    "character": "處",
    "rank": 206,
    "pinyin": [
      "chù"
    ],
    "radical": "虍",
    "radicalMeaning": "tiger stripes",
    "strokeCount": 11,
    "decomposition": "⿸虍処",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 虍、処。",
    "observationHint": "先看「處」的外框，再注意裡面的部分。",
    "parts": [
      "虍",
      "処"
    ],
    "definition": "to reside at, to live in; place, locale; department",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8d70",
    "layer": 1,
    "character": "走",
    "rank": 207,
    "pinyin": [
      "zǒu"
    ],
    "radical": "走",
    "radicalMeaning": "run",
    "strokeCount": 7,
    "decomposition": "⿱土止",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 土、止。",
    "observationHint": "先看清楚「走」上下兩層，再按順序落筆。",
    "parts": [
      "土",
      "止"
    ],
    "definition": "to walk, to run, to flee",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7fa9",
    "layer": 1,
    "character": "義",
    "rank": 208,
    "pinyin": [
      "yì"
    ],
    "radical": "羊",
    "radicalMeaning": "sheep",
    "strokeCount": 13,
    "decomposition": "⿱羊我",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 羊、我。",
    "observationHint": "先看清楚「義」上下兩層，再按順序落筆。",
    "parts": [
      "羊",
      "我"
    ],
    "definition": "right conduct, propriety; justice",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5404",
    "layer": 1,
    "character": "各",
    "rank": 209,
    "pinyin": [
      "gè"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 6,
    "decomposition": "⿱夂口",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 夂、口。",
    "observationHint": "先看清楚「各」上下兩層，再按順序落筆。",
    "parts": [
      "夂",
      "口"
    ],
    "definition": "individual; each, every; all",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5165",
    "layer": 1,
    "character": "入",
    "rank": 210,
    "pinyin": [
      "rù"
    ],
    "radical": "入",
    "radicalMeaning": "enter",
    "strokeCount": 2,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 入。",
    "observationHint": "先觀察「入」整體輪廓，再留意和 入 有關的部分。",
    "parts": [],
    "definition": "to enter, to come in; to join",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e7e",
    "layer": 1,
    "character": "幾",
    "rank": 211,
    "pinyin": [
      "jǐ"
    ],
    "radical": "幺",
    "radicalMeaning": "short/tiny",
    "strokeCount": 12,
    "decomposition": "⿻⿰幺幺戍",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 幺、幺、戍。",
    "observationHint": "先把「幾」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "幺",
      "幺",
      "戍"
    ],
    "definition": "small table; how many; a few, some",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53e3",
    "layer": 1,
    "character": "口",
    "rank": 212,
    "pinyin": [
      "kǒu"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 3,
    "decomposition": "⿱冂一",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 冂、一。",
    "observationHint": "先看清楚「口」上下兩層，再按順序落筆。",
    "parts": [
      "冂",
      "一"
    ],
    "definition": "mouth; entrance, gate, opening",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a8d",
    "layer": 1,
    "character": "認",
    "rank": 213,
    "pinyin": [
      "rèn"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 14,
    "decomposition": "⿰言忍",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、忍。",
    "observationHint": "先觀察「認」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "忍"
    ],
    "definition": "to know, to recognize, to understand",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-689d",
    "layer": 1,
    "character": "條",
    "rank": 214,
    "pinyin": [
      "tiáo"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 11,
    "decomposition": "⿲亻丨条",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 亻、丨、条。",
    "observationHint": "先把「條」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "亻",
      "丨",
      "条"
    ],
    "definition": "clause, condition; string, stripe",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e73",
    "layer": 1,
    "character": "平",
    "rank": 215,
    "pinyin": [
      "píng"
    ],
    "radical": "广",
    "radicalMeaning": "house on cliff",
    "strokeCount": 5,
    "decomposition": "⿻干丷",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 干、丷。",
    "observationHint": "先把「平」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "干",
      "丷"
    ],
    "definition": "flat, level, even; peaceful",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7e6b",
    "layer": 1,
    "character": "繫",
    "rank": 216,
    "pinyin": [
      "xì"
    ],
    "radical": "糸",
    "radicalMeaning": "silk",
    "strokeCount": 19,
    "decomposition": "⿱毄糸",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 毄、糸。",
    "observationHint": "先看清楚「繫」上下兩層，再按順序落筆。",
    "parts": [
      "毄",
      "糸"
    ],
    "definition": "system; line, link, connection",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6c23",
    "layer": 1,
    "character": "氣",
    "rank": 217,
    "pinyin": [
      "qì"
    ],
    "radical": "气",
    "radicalMeaning": "steam/breath",
    "strokeCount": 10,
    "decomposition": "⿹气米",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 气、米。",
    "observationHint": "先看「氣」的外框，再注意裡面的部分。",
    "parts": [
      "气",
      "米"
    ],
    "definition": "air, gas; steam, vapor; anger",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-984c",
    "layer": 1,
    "character": "題",
    "rank": 218,
    "pinyin": [
      "tí"
    ],
    "radical": "頁",
    "radicalMeaning": "leaf",
    "strokeCount": 18,
    "decomposition": "⿺是頁",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 是、頁。",
    "observationHint": "先看「題」的外框，再注意裡面的部分。",
    "parts": [
      "是",
      "頁"
    ],
    "definition": "forehead; headline, title; theme",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6d3b",
    "layer": 1,
    "character": "活",
    "rank": 219,
    "pinyin": [
      "huó"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 9,
    "decomposition": "⿰氵舌",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、舌。",
    "observationHint": "先觀察「活」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "舌"
    ],
    "definition": "to exist, to live, to survive; living, working",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-723e",
    "layer": 1,
    "character": "爾",
    "rank": 220,
    "pinyin": [
      "ěr"
    ],
    "radical": "爻",
    "radicalMeaning": "mix/twine/cross",
    "strokeCount": 14,
    "decomposition": "⿻？⿰爻爻",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 爻、爻。",
    "observationHint": "先把「爾」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "爻",
      "爻"
    ],
    "definition": "you; that, those; final particle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-66f4",
    "layer": 1,
    "character": "更",
    "rank": 221,
    "pinyin": [
      "gèng"
    ],
    "radical": "曰",
    "radicalMeaning": "say",
    "strokeCount": 7,
    "decomposition": "⿱一⿻曰乂",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、曰、乂。",
    "observationHint": "先看清楚「更」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "曰",
      "乂"
    ],
    "definition": "more, further; to shift, to alternate; to modify",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f46",
    "layer": 1,
    "character": "彆",
    "rank": 222,
    "pinyin": [
      "biè"
    ],
    "radical": "弓",
    "radicalMeaning": "bow",
    "strokeCount": 14,
    "decomposition": "⿱敝弓",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 敝、弓。",
    "observationHint": "先看清楚「彆」上下兩層，再按順序落筆。",
    "parts": [
      "敝",
      "弓"
    ],
    "definition": "awkward",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6253",
    "layer": 1,
    "character": "打",
    "rank": 223,
    "pinyin": [
      "dǎ"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 5,
    "decomposition": "⿰扌丁",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、丁。",
    "observationHint": "先觀察「打」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "丁"
    ],
    "definition": "to attack, to beat, to hit, to strike",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5973",
    "layer": 1,
    "character": "女",
    "rank": 224,
    "pinyin": [
      "nǚ"
    ],
    "radical": "女",
    "radicalMeaning": "woman",
    "strokeCount": 3,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 女。",
    "observationHint": "先觀察「女」整體輪廓，再留意和 女 有關的部分。",
    "parts": [],
    "definition": "woman, girl; female",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8b8a",
    "layer": 1,
    "character": "變",
    "rank": 225,
    "pinyin": [
      "biàn"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 23,
    "decomposition": "⿱䜌攵",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 䜌、攵。",
    "observationHint": "先看清楚「變」上下兩層，再按順序落筆。",
    "parts": [
      "䜌",
      "攵"
    ],
    "definition": "to change, to transform, to alter; rebel",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-56db",
    "layer": 1,
    "character": "四",
    "rank": 226,
    "pinyin": [
      "sì"
    ],
    "radical": "囗",
    "radicalMeaning": "enclosure",
    "strokeCount": 5,
    "decomposition": "⿴囗儿",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 囗、儿。",
    "observationHint": "先看「四」的外框，再注意裡面的部分。",
    "parts": [
      "囗",
      "儿"
    ],
    "definition": "four",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-795e",
    "layer": 1,
    "character": "神",
    "rank": 227,
    "pinyin": [
      "shén"
    ],
    "radical": "礻",
    "radicalMeaning": "sign",
    "strokeCount": 9,
    "decomposition": "⿰礻申",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 礻、申。",
    "observationHint": "先觀察「神」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "礻",
      "申"
    ],
    "definition": "god, spirit; divine, mysterious, supernatural",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7e3d",
    "layer": 1,
    "character": "總",
    "rank": 228,
    "pinyin": [
      "zǒng"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 17,
    "decomposition": "⿰糹悤",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、悤。",
    "observationHint": "先觀察「總」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "悤"
    ],
    "definition": "to gather, to collect; overall, altogether",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f55",
    "layer": 1,
    "character": "何",
    "rank": 229,
    "pinyin": [
      "hé"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 7,
    "decomposition": "⿰亻可",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、可。",
    "observationHint": "先觀察「何」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "可"
    ],
    "definition": "what, why, where, which, how",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-96fb",
    "layer": 1,
    "character": "電",
    "rank": 230,
    "pinyin": [
      "diàn"
    ],
    "radical": "雨",
    "radicalMeaning": "rain",
    "strokeCount": 13,
    "decomposition": "⿱雨电",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 雨、电。",
    "observationHint": "先看清楚「電」上下兩層，再按順序落筆。",
    "parts": [
      "雨",
      "电"
    ],
    "definition": "electricity; electric; lightning",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6578",
    "layer": 1,
    "character": "數",
    "rank": 231,
    "pinyin": [
      "shù"
    ],
    "radical": "攵",
    "radicalMeaning": "knock",
    "strokeCount": 15,
    "decomposition": "⿰婁攵",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 婁、攵。",
    "observationHint": "先觀察「數」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "婁",
      "攵"
    ],
    "definition": "count, number, several",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b89",
    "layer": 1,
    "character": "安",
    "rank": 232,
    "pinyin": [
      "ān"
    ],
    "radical": "宀",
    "radicalMeaning": "roof",
    "strokeCount": 6,
    "decomposition": "⿱宀女",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、女。",
    "observationHint": "先看清楚「安」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "女"
    ],
    "definition": "peaceful, tranquil, quiet",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c11",
    "layer": 1,
    "character": "少",
    "rank": 233,
    "pinyin": [
      "shǎo"
    ],
    "radical": "小",
    "radicalMeaning": "small",
    "strokeCount": 4,
    "decomposition": "⿱小丿",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 小、丿。",
    "observationHint": "先看清楚「少」上下兩層，再按順序落筆。",
    "parts": [
      "小",
      "丿"
    ],
    "definition": "few, little; less; inadequate",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5831",
    "layer": 1,
    "character": "報",
    "rank": 234,
    "pinyin": [
      "bào"
    ],
    "radical": "土",
    "radicalMeaning": "earth",
    "strokeCount": 12,
    "decomposition": "⿰幸⿱卩又",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 幸、卩、又。",
    "observationHint": "先觀察「報」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "幸",
      "卩",
      "又"
    ],
    "definition": "to announce, to report; newspaper; payback, revenge",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7e94",
    "layer": 1,
    "character": "纔",
    "rank": 235,
    "pinyin": [
      "cái"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 23,
    "decomposition": "⿰糹毚",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、毚。",
    "observationHint": "先觀察「纔」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "毚"
    ],
    "definition": "talent, ability; only, just",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7d50",
    "layer": 1,
    "character": "結",
    "rank": 236,
    "pinyin": [
      "jié"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 12,
    "decomposition": "⿰糹吉",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、吉。",
    "observationHint": "先觀察「結」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "吉"
    ],
    "definition": "knot, tie; to connect, to join",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53cd",
    "layer": 1,
    "character": "反",
    "rank": 237,
    "pinyin": [
      "fǎn"
    ],
    "radical": "又",
    "radicalMeaning": "right hand",
    "strokeCount": 4,
    "decomposition": "⿸厂又",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 厂、又。",
    "observationHint": "先看「反」的外框，再注意裡面的部分。",
    "parts": [
      "厂",
      "又"
    ],
    "definition": "reverse, opposite; contrary, anti-",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53d7",
    "layer": 1,
    "character": "受",
    "rank": 238,
    "pinyin": [
      "shòu"
    ],
    "radical": "又",
    "radicalMeaning": "right hand",
    "strokeCount": 8,
    "decomposition": "⿳爫冖又",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 爫、冖、又。",
    "observationHint": "先把「受」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "爫",
      "冖",
      "又"
    ],
    "definition": "to receive, to get, to accept; to bear",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-76ee",
    "layer": 1,
    "character": "目",
    "rank": 239,
    "pinyin": [
      "mù"
    ],
    "radical": "目",
    "radicalMeaning": "eye",
    "strokeCount": 5,
    "decomposition": "⿴口二",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 口、二。",
    "observationHint": "先看「目」的外框，再注意裡面的部分。",
    "parts": [
      "口",
      "二"
    ],
    "definition": "eye; to look, to see; division, topic",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-592a",
    "layer": 1,
    "character": "太",
    "rank": 240,
    "pinyin": [
      "tài"
    ],
    "radical": "大",
    "radicalMeaning": "big",
    "strokeCount": 4,
    "decomposition": "⿵大丶",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 大、丶。",
    "observationHint": "先看「太」的外框，再注意裡面的部分。",
    "parts": [
      "大",
      "丶"
    ],
    "definition": "very, too much; big; extreme",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-91cf",
    "layer": 1,
    "character": "量",
    "rank": 241,
    "pinyin": [
      "liàng"
    ],
    "radical": "里",
    "radicalMeaning": "village/mile",
    "strokeCount": 12,
    "decomposition": "⿱旦里",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 旦、里。",
    "observationHint": "先看清楚「量」上下兩層，再按順序落筆。",
    "parts": [
      "旦",
      "里"
    ],
    "definition": "measure, volume; amount, quantity",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-518d",
    "layer": 1,
    "character": "再",
    "rank": 242,
    "pinyin": [
      "zài"
    ],
    "radical": "冂",
    "radicalMeaning": "upside down box",
    "strokeCount": 6,
    "decomposition": "⿱一冉",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、冉。",
    "observationHint": "先看清楚「再」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "冉"
    ],
    "definition": "again, twice, re-",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-611f",
    "layer": 1,
    "character": "感",
    "rank": 243,
    "pinyin": [
      "gǎn"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 13,
    "decomposition": "⿱咸心",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 咸、心。",
    "observationHint": "先看清楚「感」上下兩層，再按順序落筆。",
    "parts": [
      "咸",
      "心"
    ],
    "definition": "to affect, to move, to touch; to perceive, to sense",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5efa",
    "layer": 1,
    "character": "建",
    "rank": 244,
    "pinyin": [
      "jiàn"
    ],
    "radical": "廴",
    "radicalMeaning": "long stride",
    "strokeCount": 8,
    "decomposition": "⿺廴聿",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 廴、聿。",
    "observationHint": "先看「建」的外框，再注意裡面的部分。",
    "parts": [
      "廴",
      "聿"
    ],
    "definition": "to build, to erect; to establish, to found",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-52d9",
    "layer": 1,
    "character": "務",
    "rank": 245,
    "pinyin": [
      "wù"
    ],
    "radical": "力",
    "radicalMeaning": "power/force",
    "strokeCount": 11,
    "decomposition": "⿰矛务",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 矛、务。",
    "observationHint": "先觀察「務」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "矛",
      "务"
    ],
    "definition": "affairs, business; should; must",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-505a",
    "layer": 1,
    "character": "做",
    "rank": 246,
    "pinyin": [
      "zuò"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 11,
    "decomposition": "⿰亻故",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、故。",
    "observationHint": "先觀察「做」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "故"
    ],
    "definition": "to work, to make; to act",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-63a5",
    "layer": 1,
    "character": "接",
    "rank": 247,
    "pinyin": [
      "jiē"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 11,
    "decomposition": "⿰扌妾",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、妾。",
    "observationHint": "先觀察「接」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "妾"
    ],
    "definition": "to connect, to join; to receive, to meet, to answer the phone",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5fc5",
    "layer": 1,
    "character": "必",
    "rank": 248,
    "pinyin": [
      "bì"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 5,
    "decomposition": "⿻心丿",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 心、丿。",
    "observationHint": "先把「必」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "心",
      "丿"
    ],
    "definition": "surely, certainly; must; will",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5834",
    "layer": 1,
    "character": "場",
    "rank": 249,
    "pinyin": [
      "chǎng"
    ],
    "radical": "土",
    "radicalMeaning": "earth",
    "strokeCount": 12,
    "decomposition": "⿰土昜",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 土、昜。",
    "observationHint": "先觀察「場」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "土",
      "昜"
    ],
    "definition": "field, open space; market, square; stage",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4ef6",
    "layer": 1,
    "character": "件",
    "rank": 250,
    "pinyin": [
      "jiàn"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 6,
    "decomposition": "⿰亻牛",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、牛。",
    "observationHint": "先觀察「件」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "牛"
    ],
    "definition": "item, matter; component, part; measure word for events",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a08",
    "layer": 1,
    "character": "計",
    "rank": 251,
    "pinyin": [
      "jì"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 9,
    "decomposition": "⿰言十",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、十。",
    "observationHint": "先觀察「計」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "十"
    ],
    "definition": "to calculate, to count; to plan, to reckon; plot, scheme",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7ba1",
    "layer": 1,
    "character": "管",
    "rank": 252,
    "pinyin": [
      "guǎn"
    ],
    "radical": "⺮",
    "radicalMeaning": "bamboo",
    "strokeCount": 14,
    "decomposition": "⿱⺮官",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺮、官。",
    "observationHint": "先看清楚「管」上下兩層，再按順序落筆。",
    "parts": [
      "⺮",
      "官"
    ],
    "definition": "tube, pipe, duct; to manage, to control",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-671f",
    "layer": 1,
    "character": "期",
    "rank": 253,
    "pinyin": [
      "qī"
    ],
    "radical": "月",
    "radicalMeaning": "moon",
    "strokeCount": 12,
    "decomposition": "⿰其月",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 其、月。",
    "observationHint": "先觀察「期」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "其",
      "月"
    ],
    "definition": "a period of time; date, time; phase",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e02",
    "layer": 1,
    "character": "市",
    "rank": 254,
    "pinyin": [
      "shì"
    ],
    "radical": "巾",
    "radicalMeaning": "turban/scarf",
    "strokeCount": 5,
    "decomposition": "⿱亠巾",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 亠、巾。",
    "observationHint": "先看清楚「市」上下兩層，再按順序落筆。",
    "parts": [
      "亠",
      "巾"
    ],
    "definition": "city, town; market, fair; to trade",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-76f4",
    "layer": 1,
    "character": "直",
    "rank": 255,
    "pinyin": [
      "zhí"
    ],
    "radical": "目",
    "radicalMeaning": "eye",
    "strokeCount": 8,
    "decomposition": "⿳十目一",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 十、目、一。",
    "observationHint": "先把「直」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "十",
      "目",
      "一"
    ],
    "definition": "straight, vertical; candid, direct, frank",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5fb7",
    "layer": 1,
    "character": "德",
    "rank": 256,
    "pinyin": [
      "dé"
    ],
    "radical": "彳",
    "radicalMeaning": "step",
    "strokeCount": 15,
    "decomposition": "⿰彳⿱⿱十罒⿱一心",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 彳、十、罒、一。",
    "observationHint": "先觀察「德」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "彳",
      "十",
      "罒",
      "一"
    ],
    "definition": "ethics, morality; compassion, kindness",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8cc7",
    "layer": 1,
    "character": "資",
    "rank": 257,
    "pinyin": [
      "zī"
    ],
    "radical": "貝",
    "radicalMeaning": "shell",
    "strokeCount": 13,
    "decomposition": "⿱次貝",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 次、貝。",
    "observationHint": "先看清楚「資」上下兩層，再按順序落筆。",
    "parts": [
      "次",
      "貝"
    ],
    "definition": "wealth, property, capital",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-547d",
    "layer": 1,
    "character": "命",
    "rank": 258,
    "pinyin": [
      "mìng"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 8,
    "decomposition": "⿹令口",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 令、口。",
    "observationHint": "先看「命」的外框，再注意裡面的部分。",
    "parts": [
      "令",
      "口"
    ],
    "definition": "life; destiny, fate, luck; an order, instruction",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c71",
    "layer": 1,
    "character": "山",
    "rank": 259,
    "pinyin": [
      "shān"
    ],
    "radical": "山",
    "radicalMeaning": "mountain",
    "strokeCount": 3,
    "decomposition": "⿶凵丨",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 凵、丨。",
    "observationHint": "先看「山」的外框，再注意裡面的部分。",
    "parts": [
      "凵",
      "丨"
    ],
    "definition": "mountain, hill, peak",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-91d1",
    "layer": 1,
    "character": "金",
    "rank": 260,
    "pinyin": [
      "jīn"
    ],
    "radical": "金",
    "radicalMeaning": "metal/gold",
    "strokeCount": 8,
    "decomposition": "⿱人⿻王丷",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 人、王、丷。",
    "observationHint": "先看清楚「金」上下兩層，再按順序落筆。",
    "parts": [
      "人",
      "王",
      "丷"
    ],
    "definition": "gold, metal; money",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6307",
    "layer": 1,
    "character": "指",
    "rank": 261,
    "pinyin": [
      "zhǐ"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 9,
    "decomposition": "⿰扌旨",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、旨。",
    "observationHint": "先觀察「指」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "旨"
    ],
    "definition": "finger, toe; to point, to indicate",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-514b",
    "layer": 1,
    "character": "克",
    "rank": 262,
    "pinyin": [
      "kè"
    ],
    "radical": "儿",
    "radicalMeaning": "legs",
    "strokeCount": 7,
    "decomposition": "⿱十兄",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 十、兄。",
    "observationHint": "先看清楚「克」上下兩層，再按順序落筆。",
    "parts": [
      "十",
      "兄"
    ],
    "definition": "to subdue, to restrain, to overcome; used in transliterations",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a31",
    "layer": 1,
    "character": "許",
    "rank": 263,
    "pinyin": [
      "xǔ"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 11,
    "decomposition": "⿰言午",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、午。",
    "observationHint": "先觀察「許」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "午"
    ],
    "definition": "to consent, to permit; to promise, to betroth",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7d71",
    "layer": 1,
    "character": "統",
    "rank": 264,
    "pinyin": [
      "tǒng"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 12,
    "decomposition": "⿰糹充",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、充。",
    "observationHint": "先觀察「統」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "充"
    ],
    "definition": "to govern, to command; to gather, to unite",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5340",
    "layer": 1,
    "character": "區",
    "rank": 265,
    "pinyin": [
      "qū"
    ],
    "radical": "匸",
    "radicalMeaning": "hiding enclosure",
    "strokeCount": 11,
    "decomposition": "⿷匸品",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 匸、品。",
    "observationHint": "先看「區」的外框，再注意裡面的部分。",
    "parts": [
      "匸",
      "品"
    ],
    "definition": "area, district, region, ward; surname",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4fdd",
    "layer": 1,
    "character": "保",
    "rank": 266,
    "pinyin": [
      "bǎo"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 9,
    "decomposition": "⿰亻呆",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、呆。",
    "observationHint": "先觀察「保」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "呆"
    ],
    "definition": "to safeguard, to protect, to defend, to care for",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-81f3",
    "layer": 1,
    "character": "至",
    "rank": 267,
    "pinyin": [
      "zhì"
    ],
    "radical": "至",
    "radicalMeaning": "arrive",
    "strokeCount": 6,
    "decomposition": "⿱⿱一厶土",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、厶、土。",
    "observationHint": "先看清楚「至」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "厶",
      "土"
    ],
    "definition": "reach, arrive; very, extremely",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-968a",
    "layer": 1,
    "character": "隊",
    "rank": 268,
    "pinyin": [
      "duì"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 11,
    "decomposition": "⿰阝㒸",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 阝、㒸。",
    "observationHint": "先觀察「隊」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "阝",
      "㒸"
    ],
    "definition": "team, group, band, army unit; measure word for groups of people",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f62",
    "layer": 1,
    "character": "形",
    "rank": 269,
    "pinyin": [
      "xíng"
    ],
    "radical": "彡",
    "radicalMeaning": "bristle/beard",
    "strokeCount": 7,
    "decomposition": "⿰开彡",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 开、彡。",
    "observationHint": "先觀察「形」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "开",
      "彡"
    ],
    "definition": "form, shape; to appear; to describe; to look",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-793e",
    "layer": 1,
    "character": "社",
    "rank": 270,
    "pinyin": [
      "shè"
    ],
    "radical": "礻",
    "radicalMeaning": "sign",
    "strokeCount": 7,
    "decomposition": "⿰礻土",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 礻、土。",
    "observationHint": "先觀察「社」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "礻",
      "土"
    ],
    "definition": "group, organization, society; a god of the soil",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4fbf",
    "layer": 1,
    "character": "便",
    "rank": 271,
    "pinyin": [
      "biàn"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 9,
    "decomposition": "⿰亻更",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、更。",
    "observationHint": "先觀察「便」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "更"
    ],
    "definition": "easy, convenient; expedient",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7a7a",
    "layer": 1,
    "character": "空",
    "rank": 272,
    "pinyin": [
      "kōng"
    ],
    "radical": "穴",
    "radicalMeaning": "cave",
    "strokeCount": 8,
    "decomposition": "⿱穴工",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 穴、工。",
    "observationHint": "先看清楚「空」上下兩層，再按順序落筆。",
    "parts": [
      "穴",
      "工"
    ],
    "definition": "hollow, empty, deserted, bare",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6c7a",
    "layer": 1,
    "character": "決",
    "rank": 273,
    "pinyin": [
      "jué"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 7,
    "decomposition": "⿰氵夬",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、夬。",
    "observationHint": "先觀察「決」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "夬"
    ],
    "definition": "to decide, to determine, to judge",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6cbb",
    "layer": 1,
    "character": "治",
    "rank": 274,
    "pinyin": [
      "zhì"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 8,
    "decomposition": "⿰氵台",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、台。",
    "observationHint": "先觀察「治」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "台"
    ],
    "definition": "to administer, to govern, to regulate",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c55",
    "layer": 1,
    "character": "展",
    "rank": 275,
    "pinyin": [
      "zhǎn"
    ],
    "radical": "尸",
    "radicalMeaning": "corpse",
    "strokeCount": 10,
    "decomposition": "⿸尸⿻？衣",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 尸、衣。",
    "observationHint": "先看「展」的外框，再注意裡面的部分。",
    "parts": [
      "尸",
      "衣"
    ],
    "definition": "to open, to unfold; to extend, to stretch",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-99ac",
    "layer": 1,
    "character": "馬",
    "rank": 276,
    "pinyin": [
      "mǎ"
    ],
    "radical": "馬",
    "radicalMeaning": "horse",
    "strokeCount": 10,
    "decomposition": "⿹？灬",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 灬。",
    "observationHint": "先看「馬」的外框，再注意裡面的部分。",
    "parts": [
      "灬"
    ],
    "definition": "horse; surname",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-79d1",
    "layer": 1,
    "character": "科",
    "rank": 277,
    "pinyin": [
      "kē"
    ],
    "radical": "禾",
    "radicalMeaning": "grain",
    "strokeCount": 9,
    "decomposition": "⿰禾斗",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 禾、斗。",
    "observationHint": "先觀察「科」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "禾",
      "斗"
    ],
    "definition": "section, department; field, branch; science",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53f8",
    "layer": 1,
    "character": "司",
    "rank": 278,
    "pinyin": [
      "sī"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 5,
    "decomposition": "⿹？口",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 口。",
    "observationHint": "先看「司」的外框，再注意裡面的部分。",
    "parts": [
      "口"
    ],
    "definition": "to take charge of, to control, to manage; officer",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e94",
    "layer": 1,
    "character": "五",
    "rank": 279,
    "pinyin": [
      "wǔ"
    ],
    "radical": "二",
    "radicalMeaning": "two",
    "strokeCount": 4,
    "decomposition": "⿴二？",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 二。",
    "observationHint": "先看「五」的外框，再注意裡面的部分。",
    "parts": [
      "二"
    ],
    "definition": "five; surname",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-57fa",
    "layer": 1,
    "character": "基",
    "rank": 280,
    "pinyin": [
      "jī"
    ],
    "radical": "土",
    "radicalMeaning": "earth",
    "strokeCount": 11,
    "decomposition": "⿱其土",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 其、土。",
    "observationHint": "先看清楚「基」上下兩層，再按順序落筆。",
    "parts": [
      "其",
      "土"
    ],
    "definition": "foundation, base",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-773c",
    "layer": 1,
    "character": "眼",
    "rank": 281,
    "pinyin": [
      "yǎn"
    ],
    "radical": "目",
    "radicalMeaning": "eye",
    "strokeCount": 11,
    "decomposition": "⿰目艮",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 目、艮。",
    "observationHint": "先觀察「眼」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "目",
      "艮"
    ],
    "definition": "eyelet, hole, opening",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-66f8",
    "layer": 1,
    "character": "書",
    "rank": 282,
    "pinyin": [
      "shū"
    ],
    "radical": "曰",
    "radicalMeaning": "say",
    "strokeCount": 10,
    "decomposition": "⿱聿曰",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 聿、曰。",
    "observationHint": "先看清楚「書」上下兩層，再按順序落筆。",
    "parts": [
      "聿",
      "曰"
    ],
    "definition": "book, letter, document; writing",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-975e",
    "layer": 1,
    "character": "非",
    "rank": 283,
    "pinyin": [
      "fēi"
    ],
    "radical": "非",
    "radicalMeaning": "wrong",
    "strokeCount": 8,
    "decomposition": "⿰？？",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。",
    "observationHint": "先觀察「非」左右兩邊的分工，再把位置寫穩。",
    "parts": [],
    "definition": "not, negative, non-; to oppose",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5247",
    "layer": 1,
    "character": "則",
    "rank": 284,
    "pinyin": [
      "zé"
    ],
    "radical": "刂",
    "radicalMeaning": "knife",
    "strokeCount": 9,
    "decomposition": "⿰貝刂",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 貝、刂。",
    "observationHint": "先觀察「則」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "貝",
      "刂"
    ],
    "definition": "rule, law, regulation; grades",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-807d",
    "layer": 1,
    "character": "聽",
    "rank": 285,
    "pinyin": [
      "tīng"
    ],
    "radical": "耳",
    "radicalMeaning": "ear",
    "strokeCount": 22,
    "decomposition": "⿰⿹耳王⿱⿱十罒⿱一心",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 耳、王、十、罒。",
    "observationHint": "先觀察「聽」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "耳",
      "王",
      "十",
      "罒"
    ],
    "definition": "to hear, to listen; to understand; to obey",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-767d",
    "layer": 1,
    "character": "白",
    "rank": 286,
    "pinyin": [
      "bái"
    ],
    "radical": "白",
    "radicalMeaning": "white",
    "strokeCount": 5,
    "decomposition": "⿻？日",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 日。",
    "observationHint": "先把「白」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "日"
    ],
    "definition": "white; clear, pure, unblemished; bright",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-537b",
    "layer": 1,
    "character": "卻",
    "rank": 287,
    "pinyin": [
      "què"
    ],
    "radical": "卩",
    "radicalMeaning": "seal",
    "strokeCount": 9,
    "decomposition": "⿰谷卩",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 谷、卩。",
    "observationHint": "先觀察「卻」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "谷",
      "卩"
    ],
    "definition": "still, but; decline; retreat",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-754c",
    "layer": 1,
    "character": "界",
    "rank": 288,
    "pinyin": [
      "jiè"
    ],
    "radical": "田",
    "radicalMeaning": "field",
    "strokeCount": 9,
    "decomposition": "⿱田介",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 田、介。",
    "observationHint": "先看清楚「界」上下兩層，再按順序落筆。",
    "parts": [
      "田",
      "介"
    ],
    "definition": "boundary, limit; domain; society, the world",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9054",
    "layer": 1,
    "character": "達",
    "rank": 289,
    "pinyin": [
      "dá"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 12,
    "decomposition": "⿺辶羍",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、羍。",
    "observationHint": "先看「達」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "羍"
    ],
    "definition": "to reach, to arrive at; intelligent",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5149",
    "layer": 1,
    "character": "光",
    "rank": 290,
    "pinyin": [
      "guāng"
    ],
    "radical": "儿",
    "radicalMeaning": "legs",
    "strokeCount": 6,
    "decomposition": "⿱⺌兀",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺌、兀。",
    "observationHint": "先看清楚「光」上下兩層，再按順序落筆。",
    "parts": [
      "⺌",
      "兀"
    ],
    "definition": "light; bright, brilliant; only, merely",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-653e",
    "layer": 1,
    "character": "放",
    "rank": 291,
    "pinyin": [
      "fàng"
    ],
    "radical": "攵",
    "radicalMeaning": "knock",
    "strokeCount": 8,
    "decomposition": "⿰方攵",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 方、攵。",
    "observationHint": "先觀察「放」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "方",
      "攵"
    ],
    "definition": "to release, to liberate, to free",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f37",
    "layer": 1,
    "character": "強",
    "rank": 292,
    "pinyin": [
      "qiáng"
    ],
    "radical": "弓",
    "radicalMeaning": "bow",
    "strokeCount": 11,
    "decomposition": "⿰弓⿱厶虫",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 弓、厶、虫。",
    "observationHint": "先觀察「強」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "弓",
      "厶",
      "虫"
    ],
    "definition": "strong, powerful, energetic",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-50cf",
    "layer": 1,
    "character": "像",
    "rank": 294,
    "pinyin": [
      "xiàng"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 13,
    "decomposition": "⿰亻象",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、象。",
    "observationHint": "先觀察「像」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "象"
    ],
    "definition": "picture, image, figure; to resemble",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-96e3",
    "layer": 1,
    "character": "難",
    "rank": 295,
    "pinyin": [
      "nán"
    ],
    "radical": "隹",
    "radicalMeaning": "small bird",
    "strokeCount": 19,
    "decomposition": "⿰堇隹",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 堇、隹。",
    "observationHint": "先觀察「難」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "堇",
      "隹"
    ],
    "definition": "hard, difficult, arduous; unable",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e14",
    "layer": 1,
    "character": "且",
    "rank": 296,
    "pinyin": [
      "qiě"
    ],
    "radical": "一",
    "radicalMeaning": "one",
    "strokeCount": 5,
    "decomposition": "⿱月一",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 月、一。",
    "observationHint": "先看清楚「且」上下兩層，再按順序落筆。",
    "parts": [
      "月",
      "一"
    ],
    "definition": "moreover, also (post-subject); about to, will soon (pre-verb)",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6b0a",
    "layer": 1,
    "character": "權",
    "rank": 297,
    "pinyin": [
      "quán"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 22,
    "decomposition": "⿰木雚",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、雚。",
    "observationHint": "先觀察「權」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "雚"
    ],
    "definition": "authority, power, right",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-601d",
    "layer": 1,
    "character": "思",
    "rank": 298,
    "pinyin": [
      "sī"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 9,
    "decomposition": "⿱田心",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 田、心。",
    "observationHint": "先看清楚「思」上下兩層，再按順序落筆。",
    "parts": [
      "田",
      "心"
    ],
    "definition": "to think, to ponder, to consider; final particle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-738b",
    "layer": 1,
    "character": "王",
    "rank": 299,
    "pinyin": [
      "wáng"
    ],
    "radical": "王",
    "radicalMeaning": "jade",
    "strokeCount": 4,
    "decomposition": "⿱一土",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、土。",
    "observationHint": "先看清楚「王」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "土"
    ],
    "definition": "king, ruler; royal; surname",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8c61",
    "layer": 1,
    "character": "象",
    "rank": 300,
    "pinyin": [
      "xiàng"
    ],
    "radical": "豕",
    "radicalMeaning": "pig",
    "strokeCount": 11,
    "decomposition": "⿳⺈口豕",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 ⺈、口、豕。",
    "observationHint": "先把「象」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "⺈",
      "口",
      "豕"
    ],
    "definition": "elephant; ivory; figure, image",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b8c",
    "layer": 1,
    "character": "完",
    "rank": 301,
    "pinyin": [
      "wán"
    ],
    "radical": "宀",
    "radicalMeaning": "roof",
    "strokeCount": 7,
    "decomposition": "⿱宀元",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、元。",
    "observationHint": "先看清楚「完」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "元"
    ],
    "definition": "to complete, to finish, to settle; whole",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a2d",
    "layer": 1,
    "character": "設",
    "rank": 302,
    "pinyin": [
      "shè"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 11,
    "decomposition": "⿰言殳",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、殳。",
    "observationHint": "先觀察「設」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "殳"
    ],
    "definition": "to build, to design; to establish; to offer",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f0f",
    "layer": 1,
    "character": "式",
    "rank": 303,
    "pinyin": [
      "shì"
    ],
    "radical": "弋",
    "radicalMeaning": "arrow",
    "strokeCount": 6,
    "decomposition": "⿹弋工",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 弋、工。",
    "observationHint": "先看「式」的外框，再注意裡面的部分。",
    "parts": [
      "弋",
      "工"
    ],
    "definition": "formula, pattern, rule, style, system",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8272",
    "layer": 1,
    "character": "色",
    "rank": 304,
    "pinyin": [
      "sè"
    ],
    "radical": "色",
    "radicalMeaning": "color/prettiness",
    "strokeCount": 6,
    "decomposition": "⿱⺈巴",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺈、巴。",
    "observationHint": "先看清楚「色」上下兩層，再按順序落筆。",
    "parts": [
      "⺈",
      "巴"
    ],
    "definition": "color, tint, hue, shade; beauty, form; sex",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8def",
    "layer": 1,
    "character": "路",
    "rank": 305,
    "pinyin": [
      "lù"
    ],
    "radical": "足",
    "radicalMeaning": "foot",
    "strokeCount": 13,
    "decomposition": "⿰足各",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 足、各。",
    "observationHint": "先觀察「路」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "足",
      "各"
    ],
    "definition": "road, path, street; journey",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a18",
    "layer": 1,
    "character": "記",
    "rank": 306,
    "pinyin": [
      "jì"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 10,
    "decomposition": "⿰言己",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、己。",
    "observationHint": "先觀察「記」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "己"
    ],
    "definition": "mark, sign; to note, to record",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5357",
    "layer": 1,
    "character": "南",
    "rank": 307,
    "pinyin": [
      "nán"
    ],
    "radical": "十",
    "radicalMeaning": "ten",
    "strokeCount": 9,
    "decomposition": "⿱十⿵冂⿱丷干",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 十、冂、丷、干。",
    "observationHint": "先看清楚「南」上下兩層，再按順序落筆。",
    "parts": [
      "十",
      "冂",
      "丷",
      "干"
    ],
    "definition": "south; southern; southward",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-54c1",
    "layer": 1,
    "character": "品",
    "rank": 308,
    "pinyin": [
      "pǐn"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 9,
    "decomposition": "⿱口⿰口口",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 口、口、口。",
    "observationHint": "先看清楚「品」上下兩層，再按順序落筆。",
    "parts": [
      "口",
      "口",
      "口"
    ],
    "definition": "article, good, product; commodity; quality, character",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f4f",
    "layer": 1,
    "character": "住",
    "rank": 309,
    "pinyin": [
      "zhù"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 7,
    "decomposition": "⿰亻主",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、主。",
    "observationHint": "先觀察「住」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "主"
    ],
    "definition": "to reside, to live at, to dwell, to lodge; to stop",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  }
] as LayeredCharacterResource[];

export const secondLayerCharacterResources: LayeredCharacterResource[] = [
  {
    "id": "layered-544a",
    "layer": 2,
    "character": "告",
    "rank": 310,
    "pinyin": [
      "gào"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 7,
    "decomposition": "⿱牛口",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 牛、口。",
    "observationHint": "先看清楚「告」上下兩層，再按順序落筆。",
    "parts": [
      "牛",
      "口"
    ],
    "definition": "to tell, to inform, to announce; to accuse",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-985e",
    "layer": 2,
    "character": "類",
    "rank": 311,
    "pinyin": [
      "lèi"
    ],
    "radical": "頁",
    "radicalMeaning": "leaf",
    "strokeCount": 19,
    "decomposition": "⿰⿱米犬頁",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 米、犬、頁。",
    "observationHint": "先觀察「類」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "米",
      "犬",
      "頁"
    ],
    "definition": "category, class, group, kind; similar to; to resemble",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6c42",
    "layer": 2,
    "character": "求",
    "rank": 312,
    "pinyin": [
      "qiú"
    ],
    "radical": "氺",
    "radicalMeaning": "water",
    "strokeCount": 7,
    "decomposition": "⿻一氺",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 一、氺。",
    "observationHint": "先把「求」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "一",
      "氺"
    ],
    "definition": "to seek; to request, to demand; to beseech, to beg for",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-64da",
    "layer": 2,
    "character": "據",
    "rank": 313,
    "pinyin": [
      "jù"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 16,
    "decomposition": "⿰扌豦",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、豦。",
    "observationHint": "先觀察「據」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "豦"
    ],
    "definition": "to possess, to occupy; position; base",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7a0b",
    "layer": 2,
    "character": "程",
    "rank": 314,
    "pinyin": [
      "chéng"
    ],
    "radical": "禾",
    "radicalMeaning": "grain",
    "strokeCount": 12,
    "decomposition": "⿰禾呈",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 禾、呈。",
    "observationHint": "先觀察「程」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "禾",
      "呈"
    ],
    "definition": "process, rules; journey, trip; agenda, schedule",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5317",
    "layer": 2,
    "character": "北",
    "rank": 315,
    "pinyin": [
      "běi"
    ],
    "radical": "匕",
    "radicalMeaning": "spoon",
    "strokeCount": 5,
    "decomposition": "⿰？匕",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 匕。",
    "observationHint": "先觀察「北」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "匕"
    ],
    "definition": "north; northern; northward",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-908a",
    "layer": 2,
    "character": "邊",
    "rank": 316,
    "pinyin": [
      "biān"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 18,
    "decomposition": "⿺辶臱",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、臱。",
    "observationHint": "先看「邊」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "臱"
    ],
    "definition": "border, edge, margin, side",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6b7b",
    "layer": 2,
    "character": "死",
    "rank": 317,
    "pinyin": [
      "sǐ"
    ],
    "radical": "歹",
    "radicalMeaning": "death/decay",
    "strokeCount": 6,
    "decomposition": "⿸歹匕",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 歹、匕。",
    "observationHint": "先看「死」的外框，再注意裡面的部分。",
    "parts": [
      "歹",
      "匕"
    ],
    "definition": "dead; death; impassable, inflexible",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f35",
    "layer": 2,
    "character": "張",
    "rank": 318,
    "pinyin": [
      "zhāng"
    ],
    "radical": "弓",
    "radicalMeaning": "bow",
    "strokeCount": 11,
    "decomposition": "⿰弓長",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 弓、長。",
    "observationHint": "先觀察「張」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "弓",
      "長"
    ],
    "definition": "to display; to expand, to open; to stretch; a sheet of paper",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a72",
    "layer": 2,
    "character": "該",
    "rank": 319,
    "pinyin": [
      "gāi"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 13,
    "decomposition": "⿰言亥",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、亥。",
    "observationHint": "先觀察「該」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "亥"
    ],
    "definition": "should, ought to, must",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4ea4",
    "layer": 2,
    "character": "交",
    "rank": 320,
    "pinyin": [
      "jiāo"
    ],
    "radical": "亠",
    "radicalMeaning": "lid",
    "strokeCount": 6,
    "decomposition": "⿱六乂",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 六、乂。",
    "observationHint": "先看清楚「交」上下兩層，再按順序落筆。",
    "parts": [
      "六",
      "乂"
    ],
    "definition": "to connect; to deliver, to exchange; to intersect; to mix",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-898f",
    "layer": 2,
    "character": "規",
    "rank": 321,
    "pinyin": [
      "guī"
    ],
    "radical": "見",
    "radicalMeaning": "see",
    "strokeCount": 11,
    "decomposition": "⿰夫見",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 夫、見。",
    "observationHint": "先觀察「規」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "夫",
      "見"
    ],
    "definition": "rules, regulations, customs, law",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-842c",
    "layer": 2,
    "character": "萬",
    "rank": 322,
    "pinyin": [
      "wàn"
    ],
    "radical": "艹",
    "radicalMeaning": "grass",
    "strokeCount": 13,
    "decomposition": "⿱艹禺",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 艹、禺。",
    "observationHint": "先看清楚「萬」上下兩層，再按順序落筆。",
    "parts": [
      "艹",
      "禺"
    ],
    "definition": "ten thousand; innumerable",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53d6",
    "layer": 2,
    "character": "取",
    "rank": 323,
    "pinyin": [
      "qǔ"
    ],
    "radical": "又",
    "radicalMeaning": "right hand",
    "strokeCount": 8,
    "decomposition": "⿰耳又",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 耳、又。",
    "observationHint": "先觀察「取」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "耳",
      "又"
    ],
    "definition": "to take, to receive, to obtain; to select",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-62c9",
    "layer": 2,
    "character": "拉",
    "rank": 324,
    "pinyin": [
      "lā"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 8,
    "decomposition": "⿰扌立",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、立。",
    "observationHint": "先觀察「拉」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "立"
    ],
    "definition": "to pull, to drag; to seize, to hold; to lengthen; to play (a violin)",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-683c",
    "layer": 2,
    "character": "格",
    "rank": 325,
    "pinyin": [
      "gé"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 10,
    "decomposition": "⿰木各",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、各。",
    "observationHint": "先觀察「格」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "各"
    ],
    "definition": "form, pattern, standard",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-671b",
    "layer": 2,
    "character": "望",
    "rank": 326,
    "pinyin": [
      "wàng"
    ],
    "radical": "月",
    "radicalMeaning": "moon",
    "strokeCount": 11,
    "decomposition": "⿱⿰亡月王",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 亡、月、王。",
    "observationHint": "先看清楚「望」上下兩層，再按順序落筆。",
    "parts": [
      "亡",
      "月",
      "王"
    ],
    "definition": "to expect, to hope, to look forward to",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-89ba",
    "layer": 2,
    "character": "覺",
    "rank": 327,
    "pinyin": [
      "jué"
    ],
    "radical": "見",
    "radicalMeaning": "see",
    "strokeCount": 20,
    "decomposition": "⿱？見",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 見。",
    "observationHint": "先看清楚「覺」上下兩層，再按順序落筆。",
    "parts": [
      "見"
    ],
    "definition": "conscious; to nap, to sleep; to wake up",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8853",
    "layer": 2,
    "character": "術",
    "rank": 328,
    "pinyin": [
      "shù"
    ],
    "radical": "行",
    "radicalMeaning": "go/do",
    "strokeCount": 11,
    "decomposition": "⿻行术",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 行、术。",
    "observationHint": "先把「術」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "行",
      "术"
    ],
    "definition": "skill, art; method, technique; trick",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9818",
    "layer": 2,
    "character": "領",
    "rank": 329,
    "pinyin": [
      "lǐng"
    ],
    "radical": "頁",
    "radicalMeaning": "leaf",
    "strokeCount": 14,
    "decomposition": "⿰令頁",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 令、頁。",
    "observationHint": "先觀察「領」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "令",
      "頁"
    ],
    "definition": "neck, collar; lead, guide",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5171",
    "layer": 2,
    "character": "共",
    "rank": 330,
    "pinyin": [
      "gòng"
    ],
    "radical": "八",
    "radicalMeaning": "eight/divide",
    "strokeCount": 6,
    "decomposition": "⿳廾一八",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 廾、一、八。",
    "observationHint": "先把「共」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "廾",
      "一",
      "八"
    ],
    "definition": "all, total; together; to share",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-78ba",
    "layer": 2,
    "character": "確",
    "rank": 331,
    "pinyin": [
      "què"
    ],
    "radical": "石",
    "radicalMeaning": "stone",
    "strokeCount": 15,
    "decomposition": "⿰石隺",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 石、隺。",
    "observationHint": "先觀察「確」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "石",
      "隺"
    ],
    "definition": "certain, sure; definite, exact; real, true",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-50b3",
    "layer": 2,
    "character": "傳",
    "rank": 332,
    "pinyin": [
      "chuán"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 13,
    "decomposition": "⿰亻專",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、專。",
    "observationHint": "先觀察「傳」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "專"
    ],
    "definition": "to pass on; to propagate; to transmit; summons",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e2b",
    "layer": 2,
    "character": "師",
    "rank": 333,
    "pinyin": [
      "shī"
    ],
    "radical": "巾",
    "radicalMeaning": "turban/scarf",
    "strokeCount": 10,
    "decomposition": "⿰⿱丿㠯帀",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 丿、㠯、帀。",
    "observationHint": "先觀察「師」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "丿",
      "㠯",
      "帀"
    ],
    "definition": "teacher, professional, master",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-89c0",
    "layer": 2,
    "character": "觀",
    "rank": 334,
    "pinyin": [
      "guān"
    ],
    "radical": "見",
    "radicalMeaning": "see",
    "strokeCount": 25,
    "decomposition": "⿰雚見",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 雚、見。",
    "observationHint": "先觀察「觀」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "雚",
      "見"
    ],
    "definition": "to observe, to spectate; appearance, view",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6e05",
    "layer": 2,
    "character": "清",
    "rank": 335,
    "pinyin": [
      "qīng"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 11,
    "decomposition": "⿰氵青",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、青。",
    "observationHint": "先觀察「清」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "青"
    ],
    "definition": "clean, pure; clear, distinct; peaceful",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4eca",
    "layer": 2,
    "character": "今",
    "rank": 336,
    "pinyin": [
      "jīn"
    ],
    "radical": "人",
    "radicalMeaning": "human",
    "strokeCount": 4,
    "decomposition": "⿱人？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 人。",
    "observationHint": "先看清楚「今」上下兩層，再按順序落筆。",
    "parts": [
      "人"
    ],
    "definition": "modern, current; today, now",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5207",
    "layer": 2,
    "character": "切",
    "rank": 337,
    "pinyin": [
      "qiè"
    ],
    "radical": "刀",
    "radicalMeaning": "knife",
    "strokeCount": 4,
    "decomposition": "⿰七刀",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 七、刀。",
    "observationHint": "先觀察「切」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "七",
      "刀"
    ],
    "definition": "to cut, to mince, to slice, to carve; close to; eager",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9662",
    "layer": 2,
    "character": "院",
    "rank": 338,
    "pinyin": [
      "yuàn"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 9,
    "decomposition": "⿰阝完",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 阝、完。",
    "observationHint": "先觀察「院」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "阝",
      "完"
    ],
    "definition": "court, yard, courtyard; school",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8b93",
    "layer": 2,
    "character": "讓",
    "rank": 339,
    "pinyin": [
      "ràng"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 24,
    "decomposition": "⿰言襄",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、襄。",
    "observationHint": "先觀察「讓」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "襄"
    ],
    "definition": "to allow, to permit, to yield",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8b58",
    "layer": 2,
    "character": "識",
    "rank": 340,
    "pinyin": [
      "shí"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 19,
    "decomposition": "⿰言戠",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、戠。",
    "observationHint": "先觀察「識」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "戠"
    ],
    "definition": "knowledge; to understand, to recognize, to know",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5019",
    "layer": 2,
    "character": "候",
    "rank": 341,
    "pinyin": [
      "hòu"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 10,
    "decomposition": "⿰亻矦",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、矦。",
    "observationHint": "先觀察「候」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "矦"
    ],
    "definition": "to wait, to expect; to visit; to greet",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e36",
    "layer": 2,
    "character": "帶",
    "rank": 342,
    "pinyin": [
      "dài"
    ],
    "radical": "巾",
    "radicalMeaning": "turban/scarf",
    "strokeCount": 11,
    "decomposition": "⿱卌⿱冖巾",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 卌、冖、巾。",
    "observationHint": "先看清楚「帶」上下兩層，再按順序落筆。",
    "parts": [
      "卌",
      "冖",
      "巾"
    ],
    "definition": "belt, strap; band, ribbon; area, zone; to carry, to raise, to wear",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c0e",
    "layer": 2,
    "character": "導",
    "rank": 343,
    "pinyin": [
      "dǎo"
    ],
    "radical": "寸",
    "radicalMeaning": "thumb",
    "strokeCount": 15,
    "decomposition": "⿱道寸",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 道、寸。",
    "observationHint": "先看清楚「導」上下兩層，再按順序落筆。",
    "parts": [
      "道",
      "寸"
    ],
    "definition": "to direct, to guide, to lead, to conduct",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-722d",
    "layer": 2,
    "character": "爭",
    "rank": 344,
    "pinyin": [
      "zhēng"
    ],
    "radical": "爫",
    "radicalMeaning": "claw/talon",
    "strokeCount": 8,
    "decomposition": "⿱爫⿻彐亅",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 爫、彐、亅。",
    "observationHint": "先看清楚「爭」上下兩層，再按順序落筆。",
    "parts": [
      "爫",
      "彐",
      "亅"
    ],
    "definition": "to dispute, to fight, to contend, to strive",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-904b",
    "layer": 2,
    "character": "運",
    "rank": 345,
    "pinyin": [
      "yùn"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 12,
    "decomposition": "⿺辶軍",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、軍。",
    "observationHint": "先看「運」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "軍"
    ],
    "definition": "to run; ship, transport; fortune, luck",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7b11",
    "layer": 2,
    "character": "笑",
    "rank": 346,
    "pinyin": [
      "xiào"
    ],
    "radical": "⺮",
    "radicalMeaning": "bamboo",
    "strokeCount": 10,
    "decomposition": "⿱⺮夭",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺮、夭。",
    "observationHint": "先看清楚「笑」上下兩層，再按順序落筆。",
    "parts": [
      "⺮",
      "夭"
    ],
    "definition": "to smile, to laugh; to giggle; to snicker",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-98db",
    "layer": 2,
    "character": "飛",
    "rank": 347,
    "pinyin": [
      "fēi"
    ],
    "radical": "飛",
    "radicalMeaning": "fly",
    "strokeCount": 9,
    "decomposition": "⿹飞⿻？飞",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 飞、飞。",
    "observationHint": "先看「飛」的外框，再注意裡面的部分。",
    "parts": [
      "飞",
      "飞"
    ],
    "definition": "to fly, to dart; high",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-98a8",
    "layer": 2,
    "character": "風",
    "rank": 348,
    "pinyin": [
      "fēng"
    ],
    "radical": "風",
    "radicalMeaning": "wind",
    "strokeCount": 9,
    "decomposition": "⿵几虫",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 几、虫。",
    "observationHint": "先看「風」的外框，再注意裡面的部分。",
    "parts": [
      "几",
      "虫"
    ],
    "definition": "wind; air; customs, manners; news",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6b65",
    "layer": 2,
    "character": "步",
    "rank": 349,
    "pinyin": [
      "bù"
    ],
    "radical": "止",
    "radicalMeaning": "stop",
    "strokeCount": 7,
    "decomposition": "⿱止？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 止。",
    "observationHint": "先看清楚「步」上下兩層，再按順序落筆。",
    "parts": [
      "止"
    ],
    "definition": "walk, stroll, pace, march; to make progress",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6539",
    "layer": 2,
    "character": "改",
    "rank": 350,
    "pinyin": [
      "gǎi"
    ],
    "radical": "攵",
    "radicalMeaning": "knock",
    "strokeCount": 7,
    "decomposition": "⿰己攵",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 己、攵。",
    "observationHint": "先觀察「改」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "己",
      "攵"
    ],
    "definition": "to alter, to change, to improve, to remodel",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6536",
    "layer": 2,
    "character": "收",
    "rank": 351,
    "pinyin": [
      "shōu"
    ],
    "radical": "攵",
    "radicalMeaning": "knock",
    "strokeCount": 6,
    "decomposition": "⿰丩攵",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 丩、攵。",
    "observationHint": "先觀察「收」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "丩",
      "攵"
    ],
    "definition": "to collect, to gather, to harvest",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6839",
    "layer": 2,
    "character": "根",
    "rank": 352,
    "pinyin": [
      "gēn"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 10,
    "decomposition": "⿰木艮",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、艮。",
    "observationHint": "先觀察「根」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "艮"
    ],
    "definition": "root, basis, foundation",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9020",
    "layer": 2,
    "character": "造",
    "rank": 354,
    "pinyin": [
      "zào"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 10,
    "decomposition": "⿺辶告",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、告。",
    "observationHint": "先看「造」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "告"
    ],
    "definition": "to build, to construct, to invent, to manufacture",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a00",
    "layer": 2,
    "character": "言",
    "rank": 355,
    "pinyin": [
      "yán"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 7,
    "decomposition": "⿱亠⿱二口",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 亠、二、口。",
    "observationHint": "先看清楚「言」上下兩層，再按順序落筆。",
    "parts": [
      "亠",
      "二",
      "口"
    ],
    "definition": "words, speech; to speak, to say",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-806f",
    "layer": 2,
    "character": "聯",
    "rank": 356,
    "pinyin": [
      "lián"
    ],
    "radical": "耳",
    "radicalMeaning": "ear",
    "strokeCount": 17,
    "decomposition": "⿰耳絲",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 耳、絲。",
    "observationHint": "先觀察「聯」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "耳",
      "絲"
    ],
    "definition": "ally, associate; to connect, to join",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6301",
    "layer": 2,
    "character": "持",
    "rank": 357,
    "pinyin": [
      "chí"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 9,
    "decomposition": "⿰扌寺",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、寺。",
    "observationHint": "先觀察「持」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "寺"
    ],
    "definition": "to hold, to support, to sustain",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7d44",
    "layer": 2,
    "character": "組",
    "rank": 358,
    "pinyin": [
      "zǔ"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 11,
    "decomposition": "⿰糹且",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、且。",
    "observationHint": "先觀察「組」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "且"
    ],
    "definition": "to form, to assemble; section, department",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6bcf",
    "layer": 2,
    "character": "每",
    "rank": 359,
    "pinyin": [
      "měi"
    ],
    "radical": "母",
    "radicalMeaning": "do not",
    "strokeCount": 7,
    "decomposition": "⿱？母",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 母。",
    "observationHint": "先看清楚「每」上下兩層，再按順序落筆。",
    "parts": [
      "母"
    ],
    "definition": "each, every",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6fdf",
    "layer": 2,
    "character": "濟",
    "rank": 360,
    "pinyin": [
      "jì"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 17,
    "decomposition": "⿰氵齊",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、齊。",
    "observationHint": "先觀察「濟」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "齊"
    ],
    "definition": "to aid, to help, to relieve; to ferry across",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8eca",
    "layer": 2,
    "character": "車",
    "rank": 361,
    "pinyin": [
      "chē"
    ],
    "radical": "車",
    "radicalMeaning": "car",
    "strokeCount": 7,
    "decomposition": "⿻？日",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 日。",
    "observationHint": "先把「車」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "日"
    ],
    "definition": "cart, vehicle; to move in a cart",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-89aa",
    "layer": 2,
    "character": "親",
    "rank": 362,
    "pinyin": [
      "qīn"
    ],
    "radical": "見",
    "radicalMeaning": "see",
    "strokeCount": 16,
    "decomposition": "⿰亲見",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亲、見。",
    "observationHint": "先觀察「親」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亲",
      "見"
    ],
    "definition": "relatives, parents; intimate; the hazelnut tree",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6975",
    "layer": 2,
    "character": "極",
    "rank": 363,
    "pinyin": [
      "jí"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 12,
    "decomposition": "⿰木亟",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、亟。",
    "observationHint": "先觀察「極」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "亟"
    ],
    "definition": "extreme, top; final, furthest, utmost; pole",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6797",
    "layer": 2,
    "character": "林",
    "rank": 364,
    "pinyin": [
      "lín"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 8,
    "decomposition": "⿰木木",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、木。",
    "observationHint": "先觀察「林」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "木"
    ],
    "definition": "forest, grove; surname",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-670d",
    "layer": 2,
    "character": "服",
    "rank": 365,
    "pinyin": [
      "fú"
    ],
    "radical": "月",
    "radicalMeaning": "moon",
    "strokeCount": 8,
    "decomposition": "⿰月⿸卩又",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 月、卩、又。",
    "observationHint": "先觀察「服」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "月",
      "卩",
      "又"
    ],
    "definition": "clothes; to dress, to wear; to take medicine",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5feb",
    "layer": 2,
    "character": "快",
    "rank": 366,
    "pinyin": [
      "kuài"
    ],
    "radical": "忄",
    "radicalMeaning": "heart",
    "strokeCount": 7,
    "decomposition": "⿰忄夬",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 忄、夬。",
    "observationHint": "先觀察「快」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "忄",
      "夬"
    ],
    "definition": "speedy, rapid, quick; soon",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8fa6",
    "layer": 2,
    "character": "辦",
    "rank": 367,
    "pinyin": [
      "bàn"
    ],
    "radical": "辛",
    "radicalMeaning": "bitter",
    "strokeCount": 16,
    "decomposition": "⿲辛力辛",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 辛、力、辛。",
    "observationHint": "先把「辦」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "辛",
      "力",
      "辛"
    ],
    "definition": "to set up; to manage, to run; to deal with, to handle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8b70",
    "layer": 2,
    "character": "議",
    "rank": 368,
    "pinyin": [
      "yì"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 20,
    "decomposition": "⿰言義",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、義。",
    "observationHint": "先觀察「議」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "義"
    ],
    "definition": "to consult, to talk over; to criticize, to discuss",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f80",
    "layer": 2,
    "character": "往",
    "rank": 369,
    "pinyin": [
      "wǎng"
    ],
    "radical": "彳",
    "radicalMeaning": "step",
    "strokeCount": 8,
    "decomposition": "⿰彳⿱？王",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 彳、王。",
    "observationHint": "先觀察「往」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "彳",
      "王"
    ],
    "definition": "to go, to depart; past, former",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5143",
    "layer": 2,
    "character": "元",
    "rank": 370,
    "pinyin": [
      "yuán"
    ],
    "radical": "儿",
    "radicalMeaning": "legs",
    "strokeCount": 4,
    "decomposition": "⿱二儿",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 二、儿。",
    "observationHint": "先看清楚「元」上下兩層，再按順序落筆。",
    "parts": [
      "二",
      "儿"
    ],
    "definition": "first; dollar; origin; head",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-82f1",
    "layer": 2,
    "character": "英",
    "rank": 371,
    "pinyin": [
      "yīng"
    ],
    "radical": "艹",
    "radicalMeaning": "grass",
    "strokeCount": 8,
    "decomposition": "⿱艹央",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 艹、央。",
    "observationHint": "先看清楚「英」上下兩層，再按順序落筆。",
    "parts": [
      "艹",
      "央"
    ],
    "definition": "petal, flower, leaf; brave, heroic; English",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-58eb",
    "layer": 2,
    "character": "士",
    "rank": 372,
    "pinyin": [
      "shì"
    ],
    "radical": "士",
    "radicalMeaning": "scholar",
    "strokeCount": 3,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 士。",
    "observationHint": "先觀察「士」整體輪廓，再留意和 士 有關的部分。",
    "parts": [],
    "definition": "scholar, gentleman; soldier",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8b49",
    "layer": 2,
    "character": "證",
    "rank": 373,
    "pinyin": [
      "zhèng"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 19,
    "decomposition": "⿰言登",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、登。",
    "observationHint": "先觀察「證」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "登"
    ],
    "definition": "to prove, to verify; certificate, proof",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8fd1",
    "layer": 2,
    "character": "近",
    "rank": 374,
    "pinyin": [
      "jìn"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 7,
    "decomposition": "⿺辶斤",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、斤。",
    "observationHint": "先看「近」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "斤"
    ],
    "definition": "to approach; near, close; intimate",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5931",
    "layer": 2,
    "character": "失",
    "rank": 375,
    "pinyin": [
      "shī"
    ],
    "radical": "大",
    "radicalMeaning": "big",
    "strokeCount": 5,
    "decomposition": "⿻丿夫",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 丿、夫。",
    "observationHint": "先把「失」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "丿",
      "夫"
    ],
    "definition": "to lose; to make a mistake, to neglect",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8f49",
    "layer": 2,
    "character": "轉",
    "rank": 376,
    "pinyin": [
      "zhuǎn"
    ],
    "radical": "車",
    "radicalMeaning": "car",
    "strokeCount": 18,
    "decomposition": "⿰車專",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 車、專。",
    "observationHint": "先觀察「轉」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "車",
      "專"
    ],
    "definition": "to move, to convey; to turn, to revolve, to circle; to forward mail",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-592b",
    "layer": 2,
    "character": "夫",
    "rank": 377,
    "pinyin": [
      "fū"
    ],
    "radical": "大",
    "radicalMeaning": "big",
    "strokeCount": 4,
    "decomposition": "⿻一大",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 一、大。",
    "observationHint": "先把「夫」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "一",
      "大"
    ],
    "definition": "man, husband; worker; those",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4ee4",
    "layer": 2,
    "character": "令",
    "rank": 378,
    "pinyin": [
      "lìng"
    ],
    "radical": "人",
    "radicalMeaning": "human",
    "strokeCount": 5,
    "decomposition": "⿱人？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 人。",
    "observationHint": "先看清楚「令」上下兩層，再按順序落筆。",
    "parts": [
      "人"
    ],
    "definition": "command, decree, order; magistrate; to allow, to cause",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6e96",
    "layer": 2,
    "character": "準",
    "rank": 379,
    "pinyin": [
      "zhǔn"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 13,
    "decomposition": "⿱淮十",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 淮、十。",
    "observationHint": "先看清楚「準」上下兩層，再按順序落筆。",
    "parts": [
      "淮",
      "十"
    ],
    "definition": "standard, accurate; to permit, to approve, to allow",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f48",
    "layer": 2,
    "character": "佈",
    "rank": 380,
    "pinyin": [
      "bù"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 7,
    "decomposition": "⿰亻布",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、布。",
    "observationHint": "先觀察「佈」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "布"
    ],
    "definition": "to spread, to publicize, to announce",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-59cb",
    "layer": 2,
    "character": "始",
    "rank": 381,
    "pinyin": [
      "shǐ"
    ],
    "radical": "女",
    "radicalMeaning": "woman",
    "strokeCount": 8,
    "decomposition": "⿰女台",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 女、台。",
    "observationHint": "先觀察「始」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "女",
      "台"
    ],
    "definition": "to begin, to start; beginning",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-600e",
    "layer": 2,
    "character": "怎",
    "rank": 382,
    "pinyin": [
      "zěn"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 9,
    "decomposition": "⿱乍心",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 乍、心。",
    "observationHint": "先看清楚「怎」上下兩層，再按順序落筆。",
    "parts": [
      "乍",
      "心"
    ],
    "definition": "what? why? how?",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5462",
    "layer": 2,
    "character": "呢",
    "rank": 383,
    "pinyin": [
      "né",
      "ne"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 8,
    "decomposition": "⿰口尼",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 口、尼。",
    "observationHint": "先觀察「呢」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "口",
      "尼"
    ],
    "definition": "wool; interrogative or emphatic final particle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b58",
    "layer": 2,
    "character": "存",
    "rank": 384,
    "pinyin": [
      "cún"
    ],
    "radical": "子",
    "radicalMeaning": "child",
    "strokeCount": 6,
    "decomposition": "⿸才子",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 才、子。",
    "observationHint": "先看「存」的外框，再注意裡面的部分。",
    "parts": [
      "才",
      "子"
    ],
    "definition": "to exist; to survive, to maintain; to keep, to store; to deposit",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-672a",
    "layer": 2,
    "character": "未",
    "rank": 385,
    "pinyin": [
      "wèi"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 5,
    "decomposition": "⿻一木",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 一、木。",
    "observationHint": "先把「未」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "一",
      "木"
    ],
    "definition": "not yet; 8th terrestrial branch",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9060",
    "layer": 2,
    "character": "遠",
    "rank": 386,
    "pinyin": [
      "yuǎn"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 13,
    "decomposition": "⿺辶袁",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、袁。",
    "observationHint": "先看「遠」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "袁"
    ],
    "definition": "distant, remote, far; profound",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53eb",
    "layer": 2,
    "character": "叫",
    "rank": 387,
    "pinyin": [
      "jiào"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 5,
    "decomposition": "⿰口丩",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 口、丩。",
    "observationHint": "先觀察「叫」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "口",
      "丩"
    ],
    "definition": "cry, shout; to call, to greet, to hail",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-98b1",
    "layer": 2,
    "character": "颱",
    "rank": 388,
    "pinyin": [
      "tái"
    ],
    "radical": "風",
    "radicalMeaning": "wind",
    "strokeCount": 14,
    "decomposition": "⿺風台",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 風、台。",
    "observationHint": "先看「颱」的外框，再注意裡面的部分。",
    "parts": [
      "風",
      "台"
    ],
    "definition": "platform; unit; term of address",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-55ae",
    "layer": 2,
    "character": "單",
    "rank": 389,
    "pinyin": [
      "dān"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 12,
    "decomposition": "⿱⿰口口？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 口、口。",
    "observationHint": "先看清楚「單」上下兩層，再按順序落筆。",
    "parts": [
      "口",
      "口"
    ],
    "definition": "single, individual, only; lone",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f71",
    "layer": 2,
    "character": "影",
    "rank": 390,
    "pinyin": [
      "yǐng"
    ],
    "radical": "彡",
    "radicalMeaning": "bristle/beard",
    "strokeCount": 15,
    "decomposition": "⿰景彡",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 景、彡。",
    "observationHint": "先觀察「影」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "景",
      "彡"
    ],
    "definition": "shadow; image, reflection; photograph",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5177",
    "layer": 2,
    "character": "具",
    "rank": 391,
    "pinyin": [
      "jù"
    ],
    "radical": "八",
    "radicalMeaning": "eight/divide",
    "strokeCount": 8,
    "decomposition": "⿱目⿱一八",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 目、一、八。",
    "observationHint": "先看清楚「具」上下兩層，再按順序落筆。",
    "parts": [
      "目",
      "一",
      "八"
    ],
    "definition": "tool, implement; to draw up, to write",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7f85",
    "layer": 2,
    "character": "羅",
    "rank": 392,
    "pinyin": [
      "luō"
    ],
    "radical": "罒",
    "radicalMeaning": "net",
    "strokeCount": 19,
    "decomposition": "⿱罒維",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 罒、維。",
    "observationHint": "先看清楚「羅」上下兩層，再按順序落筆。",
    "parts": [
      "罒",
      "維"
    ],
    "definition": "gauze, net; to collect, to display",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b57",
    "layer": 2,
    "character": "字",
    "rank": 393,
    "pinyin": [
      "zì"
    ],
    "radical": "子",
    "radicalMeaning": "child",
    "strokeCount": 6,
    "decomposition": "⿱宀子",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、子。",
    "observationHint": "先看清楚「字」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "子"
    ],
    "definition": "character, letter, symbol, word",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-611b",
    "layer": 2,
    "character": "愛",
    "rank": 394,
    "pinyin": [
      "ài"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 13,
    "decomposition": "⿱⿱爫⿱冖心夂",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 爫、冖、心、夂。",
    "observationHint": "先看清楚「愛」上下兩層，再按順序落筆。",
    "parts": [
      "爫",
      "冖",
      "心",
      "夂"
    ],
    "definition": "to love, to like, to be fond of; love, affection",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-64ca",
    "layer": 2,
    "character": "擊",
    "rank": 395,
    "pinyin": [
      "jī"
    ],
    "radical": "手",
    "radicalMeaning": "hand",
    "strokeCount": 17,
    "decomposition": "⿱毄手",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 毄、手。",
    "observationHint": "先看清楚「擊」上下兩層，再按順序落筆。",
    "parts": [
      "毄",
      "手"
    ],
    "definition": "to strike, to hit, to beat; to attack, to fight",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6d41",
    "layer": 2,
    "character": "流",
    "rank": 396,
    "pinyin": [
      "liú"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 10,
    "decomposition": "⿰氵㐬",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、㐬。",
    "observationHint": "先觀察「流」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "㐬"
    ],
    "definition": "to flow, to drift, to circulate; class",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5099",
    "layer": 2,
    "character": "備",
    "rank": 397,
    "pinyin": [
      "bèi"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 12,
    "decomposition": "⿰亻？",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻。",
    "observationHint": "先觀察「備」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻"
    ],
    "definition": "to prepare; to get ready, to equip; ready; perfect",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5175",
    "layer": 2,
    "character": "兵",
    "rank": 398,
    "pinyin": [
      "bīng"
    ],
    "radical": "八",
    "radicalMeaning": "eight/divide",
    "strokeCount": 7,
    "decomposition": "⿱丘八",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 丘、八。",
    "observationHint": "先看清楚「兵」上下兩層，再按順序落筆。",
    "parts": [
      "丘",
      "八"
    ],
    "definition": "soldier; troops, an army; warlike",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9023",
    "layer": 2,
    "character": "連",
    "rank": 399,
    "pinyin": [
      "lián"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 10,
    "decomposition": "⿺辶車",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、車。",
    "observationHint": "先看「連」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "車"
    ],
    "definition": "to join, to connect; continuous; even",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8abf",
    "layer": 2,
    "character": "調",
    "rank": 400,
    "pinyin": [
      "diào"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 15,
    "decomposition": "⿰言周",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、周。",
    "observationHint": "先觀察「調」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "周"
    ],
    "definition": "tune, melody, key; to transfer, to exchange",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6df1",
    "layer": 2,
    "character": "深",
    "rank": 401,
    "pinyin": [
      "shēn"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 11,
    "decomposition": "⿰氵罙",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、罙。",
    "observationHint": "先觀察「深」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "罙"
    ],
    "definition": "deep, profound; depth",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5546",
    "layer": 2,
    "character": "商",
    "rank": 402,
    "pinyin": [
      "shāng"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 11,
    "decomposition": "⿱⿱亠丷冏",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 亠、丷、冏。",
    "observationHint": "先看清楚「商」上下兩層，再按順序落筆。",
    "parts": [
      "亠",
      "丷",
      "冏"
    ],
    "definition": "commerce, business, trade",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7b97",
    "layer": 2,
    "character": "算",
    "rank": 403,
    "pinyin": [
      "suàn"
    ],
    "radical": "⺮",
    "radicalMeaning": "bamboo",
    "strokeCount": 14,
    "decomposition": "⿱⺮具",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺮、具。",
    "observationHint": "先看清楚「算」上下兩層，再按順序落筆。",
    "parts": [
      "⺮",
      "具"
    ],
    "definition": "to calculate, to count; to figure, to plan",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8cea",
    "layer": 2,
    "character": "質",
    "rank": 404,
    "pinyin": [
      "zhì"
    ],
    "radical": "貝",
    "radicalMeaning": "shell",
    "strokeCount": 15,
    "decomposition": "⿱斦貝",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 斦、貝。",
    "observationHint": "先看清楚「質」上下兩層，再按順序落筆。",
    "parts": [
      "斦",
      "貝"
    ],
    "definition": "essence, nature; material, substance",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7cf0",
    "layer": 2,
    "character": "糰",
    "rank": 405,
    "pinyin": [
      "tuán"
    ],
    "radical": "米",
    "radicalMeaning": "rice",
    "strokeCount": 20,
    "decomposition": "⿰米團",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 米、團。",
    "observationHint": "先觀察「糰」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "米",
      "團"
    ],
    "definition": "rice ball",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-96c6",
    "layer": 2,
    "character": "集",
    "rank": 406,
    "pinyin": [
      "jí"
    ],
    "radical": "隹",
    "radicalMeaning": "small bird",
    "strokeCount": 12,
    "decomposition": "⿱隹木",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 隹、木。",
    "observationHint": "先看清楚「集」上下兩層，再按順序落筆。",
    "parts": [
      "隹",
      "木"
    ],
    "definition": "to gather, to collect; set, collection",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-767e",
    "layer": 2,
    "character": "百",
    "rank": 407,
    "pinyin": [
      "bǎi"
    ],
    "radical": "白",
    "radicalMeaning": "white",
    "strokeCount": 6,
    "decomposition": "⿱一白",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、白。",
    "observationHint": "先看清楚「百」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "白"
    ],
    "definition": "one hundred; numerous, many",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9700",
    "layer": 2,
    "character": "需",
    "rank": 408,
    "pinyin": [
      "xū"
    ],
    "radical": "雨",
    "radicalMeaning": "rain",
    "strokeCount": 14,
    "decomposition": "⿱雨而",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 雨、而。",
    "observationHint": "先看清楚「需」上下兩層，再按順序落筆。",
    "parts": [
      "雨",
      "而"
    ],
    "definition": "to need, to require; must",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-50f9",
    "layer": 2,
    "character": "價",
    "rank": 409,
    "pinyin": [
      "jià"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 15,
    "decomposition": "⿰亻賈",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、賈。",
    "observationHint": "先觀察「價」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "賈"
    ],
    "definition": "price, value",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-82b1",
    "layer": 2,
    "character": "花",
    "rank": 410,
    "pinyin": [
      "huā"
    ],
    "radical": "艹",
    "radicalMeaning": "grass",
    "strokeCount": 7,
    "decomposition": "⿱艹化",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 艹、化。",
    "observationHint": "先看清楚「花」上下兩層，再按順序落筆。",
    "parts": [
      "艹",
      "化"
    ],
    "definition": "flower, blossom; to spend (time or money)",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9ee8",
    "layer": 2,
    "character": "黨",
    "rank": 411,
    "pinyin": [
      "dǎng"
    ],
    "radical": "黑",
    "radicalMeaning": "black",
    "strokeCount": 20,
    "decomposition": "⿱尚黑",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 尚、黑。",
    "observationHint": "先看清楚「黨」上下兩層，再按順序落筆。",
    "parts": [
      "尚",
      "黑"
    ],
    "definition": "political party, gang, faction",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-83ef",
    "layer": 2,
    "character": "華",
    "rank": 412,
    "pinyin": [
      "huá"
    ],
    "radical": "艹",
    "radicalMeaning": "grass",
    "strokeCount": 11,
    "decomposition": "⿱艹⿻十？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 艹、十。",
    "observationHint": "先看清楚「華」上下兩層，再按順序落筆。",
    "parts": [
      "艹",
      "十"
    ],
    "definition": "flowery; illustrious; Chinese",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-57ce",
    "layer": 2,
    "character": "城",
    "rank": 413,
    "pinyin": [
      "chéng"
    ],
    "radical": "土",
    "radicalMeaning": "earth",
    "strokeCount": 9,
    "decomposition": "⿰土成",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 土、成。",
    "observationHint": "先觀察「城」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "土",
      "成"
    ],
    "definition": "castle, city, town; municipality",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-77f3",
    "layer": 2,
    "character": "石",
    "rank": 414,
    "pinyin": [
      "shí"
    ],
    "radical": "石",
    "radicalMeaning": "stone",
    "strokeCount": 5,
    "decomposition": "⿸厂口",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 厂、口。",
    "observationHint": "先看「石」的外框，再注意裡面的部分。",
    "parts": [
      "厂",
      "口"
    ],
    "definition": "stone, rock, mineral",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7d1a",
    "layer": 2,
    "character": "級",
    "rank": 415,
    "pinyin": [
      "jí"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 9,
    "decomposition": "⿰糹及",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、及。",
    "observationHint": "先觀察「級」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "及"
    ],
    "definition": "level, rank; class, grade",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6574",
    "layer": 2,
    "character": "整",
    "rank": 416,
    "pinyin": [
      "zhěng"
    ],
    "radical": "攵",
    "radicalMeaning": "knock",
    "strokeCount": 16,
    "decomposition": "⿱敕正",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 敕、正。",
    "observationHint": "先看清楚「整」上下兩層，再按順序落筆。",
    "parts": [
      "敕",
      "正"
    ],
    "definition": "neat, orderly, whole; to repair, to mend",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e9c",
    "layer": 2,
    "character": "府",
    "rank": 417,
    "pinyin": [
      "fǔ"
    ],
    "radical": "广",
    "radicalMeaning": "house on cliff",
    "strokeCount": 8,
    "decomposition": "⿸广付",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 广、付。",
    "observationHint": "先看「府」的外框，再注意裡面的部分。",
    "parts": [
      "广",
      "付"
    ],
    "definition": "prefect; prefecture, government",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-96e2",
    "layer": 2,
    "character": "離",
    "rank": 418,
    "pinyin": [
      "lí"
    ],
    "radical": "隹",
    "radicalMeaning": "small bird",
    "strokeCount": 18,
    "decomposition": "⿰离隹",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 离、隹。",
    "observationHint": "先觀察「離」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "离",
      "隹"
    ],
    "definition": "rare beast; strange; elegant",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6cc1",
    "layer": 2,
    "character": "況",
    "rank": 419,
    "pinyin": [
      "kuàng"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 8,
    "decomposition": "⿰氵兄",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、兄。",
    "observationHint": "先觀察「況」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "兄"
    ],
    "definition": "condition, situation; furthermore",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e9e",
    "layer": 2,
    "character": "亞",
    "rank": 420,
    "pinyin": [
      "yà"
    ],
    "radical": "二",
    "radicalMeaning": "two",
    "strokeCount": 8,
    "decomposition": "⿻二？",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 二。",
    "observationHint": "先把「亞」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "二"
    ],
    "definition": "Asia; second",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8acb",
    "layer": 2,
    "character": "請",
    "rank": 421,
    "pinyin": [
      "qǐng"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 15,
    "decomposition": "⿰言青",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、青。",
    "observationHint": "先觀察「請」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "青"
    ],
    "definition": "to ask, to request; to invite; please",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6280",
    "layer": 2,
    "character": "技",
    "rank": 422,
    "pinyin": [
      "jì"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 7,
    "decomposition": "⿰扌支",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、支。",
    "observationHint": "先觀察「技」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "支"
    ],
    "definition": "ability, talent; skill, technique",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-969b",
    "layer": 2,
    "character": "際",
    "rank": 423,
    "pinyin": [
      "jì"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 13,
    "decomposition": "⿰阝祭",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 阝、祭。",
    "observationHint": "先觀察「際」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "阝",
      "祭"
    ],
    "definition": "border, boundary, juncture",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7d04",
    "layer": 2,
    "character": "約",
    "rank": 424,
    "pinyin": [
      "yuē"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 9,
    "decomposition": "⿰糹勺",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、勺。",
    "observationHint": "先觀察「約」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "勺"
    ],
    "definition": "treaty, covenant, agreement",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-793a",
    "layer": 2,
    "character": "示",
    "rank": 425,
    "pinyin": [
      "shì"
    ],
    "radical": "示",
    "radicalMeaning": "sign",
    "strokeCount": 5,
    "decomposition": "⿱二小",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 二、小。",
    "observationHint": "先看清楚「示」上下兩層，再按順序落筆。",
    "parts": [
      "二",
      "小"
    ],
    "definition": "altar; ceremony; to show, to demonstrate",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8907",
    "layer": 2,
    "character": "複",
    "rank": 426,
    "pinyin": [
      "fù"
    ],
    "radical": "衤",
    "radicalMeaning": "clothes",
    "strokeCount": 14,
    "decomposition": "⿰衤复",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 衤、复。",
    "observationHint": "先觀察「複」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "衤",
      "复"
    ],
    "definition": "again, repeatedly; copy, duplicate; to restore, to return",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-75c5",
    "layer": 2,
    "character": "病",
    "rank": 427,
    "pinyin": [
      "bìng"
    ],
    "radical": "疒",
    "radicalMeaning": "sickness",
    "strokeCount": 10,
    "decomposition": "⿸疒丙",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 疒、丙。",
    "observationHint": "先看「病」的外框，再注意裡面的部分。",
    "parts": [
      "疒",
      "丙"
    ],
    "definition": "sickness, illness, disease",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-606f",
    "layer": 2,
    "character": "息",
    "rank": 428,
    "pinyin": [
      "xī"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 10,
    "decomposition": "⿱自心",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 自、心。",
    "observationHint": "先看清楚「息」上下兩層，再按順序落筆。",
    "parts": [
      "自",
      "心"
    ],
    "definition": "to end, to cease, to put a stop to; pause, breath, rest; news",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7a76",
    "layer": 2,
    "character": "究",
    "rank": 429,
    "pinyin": [
      "jiū"
    ],
    "radical": "穴",
    "radicalMeaning": "cave",
    "strokeCount": 7,
    "decomposition": "⿱穴九",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 穴、九。",
    "observationHint": "先看清楚「究」上下兩層，再按順序落筆。",
    "parts": [
      "穴",
      "九"
    ],
    "definition": "to dig into, to investigate; actually, after all",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f3c",
    "layer": 2,
    "character": "似",
    "rank": 431,
    "pinyin": [
      "shì"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 6,
    "decomposition": "⿰亻以",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、以。",
    "observationHint": "先觀察「似」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "以"
    ],
    "definition": "resembling, similar to; as if, to seem",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b98",
    "layer": 2,
    "character": "官",
    "rank": 432,
    "pinyin": [
      "guān"
    ],
    "radical": "宀",
    "radicalMeaning": "roof",
    "strokeCount": 8,
    "decomposition": "⿱宀㠯",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、㠯。",
    "observationHint": "先看清楚「官」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "㠯"
    ],
    "definition": "official, public servant",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-706b",
    "layer": 2,
    "character": "火",
    "rank": 433,
    "pinyin": [
      "huǒ"
    ],
    "radical": "火",
    "radicalMeaning": "fire",
    "strokeCount": 4,
    "decomposition": "⿻丷人",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 丷、人。",
    "observationHint": "先把「火」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "丷",
      "人"
    ],
    "definition": "fire, flame; to burn; anger, rage",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-65b7",
    "layer": 2,
    "character": "斷",
    "rank": 434,
    "pinyin": [
      "duàn"
    ],
    "radical": "斤",
    "radicalMeaning": "axe",
    "strokeCount": 18,
    "decomposition": "⿰⿺？⿳⿰幺幺一⿰幺幺斤",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 幺、幺、一、幺。",
    "observationHint": "先觀察「斷」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "幺",
      "幺",
      "一",
      "幺"
    ],
    "definition": "to sever, to cut off, to interrupt",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7cbe",
    "layer": 2,
    "character": "精",
    "rank": 435,
    "pinyin": [
      "jīng"
    ],
    "radical": "米",
    "radicalMeaning": "rice",
    "strokeCount": 14,
    "decomposition": "⿰米青",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 米、青。",
    "observationHint": "先觀察「精」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "米",
      "青"
    ],
    "definition": "essence, germ, spirit",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6eff",
    "layer": 2,
    "character": "滿",
    "rank": 436,
    "pinyin": [
      "mǎn"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 14,
    "decomposition": "⿰氵㒼",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、㒼。",
    "observationHint": "先觀察「滿」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "㒼"
    ],
    "definition": "to fill; full, packed; satisfied",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-652f",
    "layer": 2,
    "character": "支",
    "rank": 437,
    "pinyin": [
      "zhī"
    ],
    "radical": "支",
    "radicalMeaning": "branch",
    "strokeCount": 4,
    "decomposition": "⿱十又",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 十、又。",
    "observationHint": "先看清楚「支」上下兩層，再按順序落筆。",
    "parts": [
      "十",
      "又"
    ],
    "definition": "to support, to sustain; to withdraw, to pay; a branch (of a bank)",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8996",
    "layer": 2,
    "character": "視",
    "rank": 438,
    "pinyin": [
      "shì"
    ],
    "radical": "見",
    "radicalMeaning": "see",
    "strokeCount": 11,
    "decomposition": "⿰礻見",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 礻、見。",
    "observationHint": "先觀察「視」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "礻",
      "見"
    ],
    "definition": "to look at, to inspect, to observe, to regard",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6d88",
    "layer": 2,
    "character": "消",
    "rank": 439,
    "pinyin": [
      "xiāo"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 10,
    "decomposition": "⿰氵肖",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、肖。",
    "observationHint": "先觀察「消」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "肖"
    ],
    "definition": "news, rumors; to die out, to melt away, to vanish",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8d8a",
    "layer": 2,
    "character": "越",
    "rank": 440,
    "pinyin": [
      "yuè"
    ],
    "radical": "走",
    "radicalMeaning": "run",
    "strokeCount": 12,
    "decomposition": "⿺走戉",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 走、戉。",
    "observationHint": "先看「越」的外框，再注意裡面的部分。",
    "parts": [
      "走",
      "戉"
    ],
    "definition": "to exceed, to surpass, to transcend",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5668",
    "layer": 2,
    "character": "器",
    "rank": 441,
    "pinyin": [
      "qì"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 16,
    "decomposition": "⿳⿰口口犬⿰口口",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 口、口、犬、口。",
    "observationHint": "先把「器」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "口",
      "口",
      "犬",
      "口"
    ],
    "definition": "device, instrument, tool; receptacle, vessel",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5bb9",
    "layer": 2,
    "character": "容",
    "rank": 442,
    "pinyin": [
      "róng"
    ],
    "radical": "宀",
    "radicalMeaning": "roof",
    "strokeCount": 10,
    "decomposition": "⿱宀谷",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、谷。",
    "observationHint": "先看清楚「容」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "谷"
    ],
    "definition": "appearance, looks; form, figure; to contain, to hold",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7167",
    "layer": 2,
    "character": "照",
    "rank": 443,
    "pinyin": [
      "zhào"
    ],
    "radical": "灬",
    "radicalMeaning": "fire",
    "strokeCount": 13,
    "decomposition": "⿱昭灬",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 昭、灬。",
    "observationHint": "先看清楚「照」上下兩層，再按順序落筆。",
    "parts": [
      "昭",
      "灬"
    ],
    "definition": "to shine, to reflect, to illuminate",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9b1a",
    "layer": 2,
    "character": "鬚",
    "rank": 444,
    "pinyin": [
      "xū"
    ],
    "radical": "髟",
    "radicalMeaning": "hair",
    "strokeCount": 22,
    "decomposition": "⿱髟須",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 髟、須。",
    "observationHint": "先看清楚「鬚」上下兩層，再按順序落筆。",
    "parts": [
      "髟",
      "須"
    ],
    "definition": "beard; must; necessary",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e5d",
    "layer": 2,
    "character": "九",
    "rank": 445,
    "pinyin": [
      "jiǔ"
    ],
    "radical": "乙",
    "radicalMeaning": "second",
    "strokeCount": 2,
    "decomposition": "⿻丿乙",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 丿、乙。",
    "observationHint": "先把「九」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "丿",
      "乙"
    ],
    "definition": "nine",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-589e",
    "layer": 2,
    "character": "增",
    "rank": 446,
    "pinyin": [
      "zēng"
    ],
    "radical": "土",
    "radicalMeaning": "earth",
    "strokeCount": 15,
    "decomposition": "⿰土曾",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 土、曾。",
    "observationHint": "先觀察「增」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "土",
      "曾"
    ],
    "definition": "to increase; to expand; to augment; to add",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7814",
    "layer": 2,
    "character": "研",
    "rank": 447,
    "pinyin": [
      "yán"
    ],
    "radical": "石",
    "radicalMeaning": "stone",
    "strokeCount": 9,
    "decomposition": "⿰石开",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 石、开。",
    "observationHint": "先觀察「研」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "石",
      "开"
    ],
    "definition": "to grind, to rub; to study, to research",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5beb",
    "layer": 2,
    "character": "寫",
    "rank": 448,
    "pinyin": [
      "xiě"
    ],
    "radical": "宀",
    "radicalMeaning": "roof",
    "strokeCount": 15,
    "decomposition": "⿱宀舄",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、舄。",
    "observationHint": "先看清楚「寫」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "舄"
    ],
    "definition": "to write; to draw, to sketch; to compose",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7a31",
    "layer": 2,
    "character": "稱",
    "rank": 449,
    "pinyin": [
      "chēng"
    ],
    "radical": "禾",
    "radicalMeaning": "grain",
    "strokeCount": 14,
    "decomposition": "⿰禾爯",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 禾、爯。",
    "observationHint": "先觀察「稱」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "禾",
      "爯"
    ],
    "definition": "balanced; name, brand; to say, to call",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f01",
    "layer": 2,
    "character": "企",
    "rank": 450,
    "pinyin": [
      "qǐ"
    ],
    "radical": "人",
    "radicalMeaning": "human",
    "strokeCount": 6,
    "decomposition": "⿱人止",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 人、止。",
    "observationHint": "先看清楚「企」上下兩層，再按順序落筆。",
    "parts": [
      "人",
      "止"
    ],
    "definition": "to plan a project; to stand on tiptoe",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-516b",
    "layer": 2,
    "character": "八",
    "rank": 451,
    "pinyin": [
      "bā"
    ],
    "radical": "八",
    "radicalMeaning": "eight/divide",
    "strokeCount": 2,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 八。",
    "observationHint": "先觀察「八」整體輪廓，再留意和 八 有關的部分。",
    "parts": [],
    "definition": "eight; all around, all sides",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-529f",
    "layer": 2,
    "character": "功",
    "rank": 452,
    "pinyin": [
      "gōng"
    ],
    "radical": "力",
    "radicalMeaning": "power/force",
    "strokeCount": 5,
    "decomposition": "⿰工力",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 工、力。",
    "observationHint": "先觀察「功」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "工",
      "力"
    ],
    "definition": "achievement, good work; merit; service",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-55ce",
    "layer": 2,
    "character": "嗎",
    "rank": 453,
    "pinyin": [
      "ma"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 13,
    "decomposition": "⿰口馬",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 口、馬。",
    "observationHint": "先觀察「嗎」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "口",
      "馬"
    ],
    "definition": "final interrogative particle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5305",
    "layer": 2,
    "character": "包",
    "rank": 454,
    "pinyin": [
      "bāo"
    ],
    "radical": "勹",
    "radicalMeaning": "wrap",
    "strokeCount": 5,
    "decomposition": "⿹勹巳",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 勹、巳。",
    "observationHint": "先看「包」的外框，再注意裡面的部分。",
    "parts": [
      "勹",
      "巳"
    ],
    "definition": "wrap, pack, bundle; package",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7247",
    "layer": 2,
    "character": "片",
    "rank": 455,
    "pinyin": [
      "piàn"
    ],
    "radical": "片",
    "radicalMeaning": "a slice",
    "strokeCount": 4,
    "decomposition": "⿸？？",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。",
    "observationHint": "先看「片」的外框，再注意裡面的部分。",
    "parts": [],
    "definition": "slice, splinter; page, strip",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53f2",
    "layer": 2,
    "character": "史",
    "rank": 456,
    "pinyin": [
      "shǐ"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 5,
    "decomposition": "⿻口乂",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 口、乂。",
    "observationHint": "先把「史」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "口",
      "乂"
    ],
    "definition": "history, chronicle, annals",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-59d4",
    "layer": 2,
    "character": "委",
    "rank": 457,
    "pinyin": [
      "wěi"
    ],
    "radical": "女",
    "radicalMeaning": "woman",
    "strokeCount": 8,
    "decomposition": "⿱禾女",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 禾、女。",
    "observationHint": "先看清楚「委」上下兩層，再按順序落筆。",
    "parts": [
      "禾",
      "女"
    ],
    "definition": "to appoint, to commission, to send",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e4e",
    "layer": 2,
    "character": "乎",
    "rank": 458,
    "pinyin": [
      "hū"
    ],
    "radical": "丿",
    "radicalMeaning": "bend",
    "strokeCount": 5,
    "decomposition": "⿻丿⿻？丷",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 丿、丷。",
    "observationHint": "先把「乎」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "丿",
      "丷"
    ],
    "definition": "interrogative or exclamatory final particle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8f15",
    "layer": 2,
    "character": "輕",
    "rank": 460,
    "pinyin": [
      "qīng"
    ],
    "radical": "車",
    "radicalMeaning": "car",
    "strokeCount": 14,
    "decomposition": "⿰車巠",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 車、巠。",
    "observationHint": "先觀察「輕」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "車",
      "巠"
    ],
    "definition": "light, gentle; simple, easy",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6613",
    "layer": 2,
    "character": "易",
    "rank": 461,
    "pinyin": [
      "yì"
    ],
    "radical": "日",
    "radicalMeaning": "sun/day",
    "strokeCount": 8,
    "decomposition": "⿱日勿",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 日、勿。",
    "observationHint": "先看清楚「易」上下兩層，再按順序落筆。",
    "parts": [
      "日",
      "勿"
    ],
    "definition": "to change; to exchange, to trade; simple, easy",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-65e9",
    "layer": 2,
    "character": "早",
    "rank": 462,
    "pinyin": [
      "zǎo"
    ],
    "radical": "日",
    "radicalMeaning": "sun/day",
    "strokeCount": 6,
    "decomposition": "⿱日十",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 日、十。",
    "observationHint": "先看清楚「早」上下兩層，再按順序落筆。",
    "parts": [
      "日",
      "十"
    ],
    "definition": "early; soon; morning",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-66fe",
    "layer": 2,
    "character": "曾",
    "rank": 463,
    "pinyin": [
      "céng"
    ],
    "radical": "曰",
    "radicalMeaning": "say",
    "strokeCount": 12,
    "decomposition": "⿳丷？日",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 丷、日。",
    "observationHint": "先把「曾」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "丷",
      "日"
    ],
    "definition": "already, formerly, once; the past",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9664",
    "layer": 2,
    "character": "除",
    "rank": 464,
    "pinyin": [
      "chú"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 9,
    "decomposition": "⿰阝余",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 阝、余。",
    "observationHint": "先觀察「除」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "阝",
      "余"
    ],
    "definition": "to eliminate, to remove, to wipe out",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8fb2",
    "layer": 2,
    "character": "農",
    "rank": 465,
    "pinyin": [
      "nóng"
    ],
    "radical": "辰",
    "radicalMeaning": "morning",
    "strokeCount": 13,
    "decomposition": "⿱曲辰",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 曲、辰。",
    "observationHint": "先看清楚「農」上下兩層，再按順序落筆。",
    "parts": [
      "曲",
      "辰"
    ],
    "definition": "agriculture, farming; farmer",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-627e",
    "layer": 2,
    "character": "找",
    "rank": 466,
    "pinyin": [
      "zhǎo"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 7,
    "decomposition": "⿰扌戈",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、戈。",
    "observationHint": "先觀察「找」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "戈"
    ],
    "definition": "to search for, to look for, to find; change (as in money)",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-88dd",
    "layer": 2,
    "character": "裝",
    "rank": 467,
    "pinyin": [
      "zhuāng"
    ],
    "radical": "衣",
    "radicalMeaning": "clothes",
    "strokeCount": 13,
    "decomposition": "⿱壯衣",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 壯、衣。",
    "observationHint": "先看清楚「裝」上下兩層，再按順序落筆。",
    "parts": [
      "壯",
      "衣"
    ],
    "definition": "dress, clothes, attire; to wear, to install",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5ee3",
    "layer": 2,
    "character": "廣",
    "rank": 468,
    "pinyin": [
      "guǎng"
    ],
    "radical": "广",
    "radicalMeaning": "house on cliff",
    "strokeCount": 15,
    "decomposition": "⿸广黄",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 广、黄。",
    "observationHint": "先看「廣」的外框，再注意裡面的部分。",
    "parts": [
      "广",
      "黄"
    ],
    "definition": "broad, vast, wide; building, house",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-986f",
    "layer": 2,
    "character": "顯",
    "rank": 469,
    "pinyin": [
      "xiǎn"
    ],
    "radical": "頁",
    "radicalMeaning": "leaf",
    "strokeCount": 23,
    "decomposition": "⿰㬎頁",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 㬎、頁。",
    "observationHint": "先觀察「顯」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "㬎",
      "頁"
    ],
    "definition": "clear, evident; prominent; to show",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5427",
    "layer": 2,
    "character": "吧",
    "rank": 470,
    "pinyin": [
      "bā"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 7,
    "decomposition": "⿰口巴",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 口、巴。",
    "observationHint": "先觀察「吧」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "口",
      "巴"
    ],
    "definition": "emphatic final particle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-963f",
    "layer": 2,
    "character": "阿",
    "rank": 471,
    "pinyin": [
      "ā"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 7,
    "decomposition": "⿰阝可",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 阝、可。",
    "observationHint": "先觀察「阿」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "阝",
      "可"
    ],
    "definition": "an initial particle, a prefix used for names; used in transliterations",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-674e",
    "layer": 2,
    "character": "李",
    "rank": 472,
    "pinyin": [
      "lǐ"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 7,
    "decomposition": "⿱木子",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 木、子。",
    "observationHint": "先看清楚「李」上下兩層，再按順序落筆。",
    "parts": [
      "木",
      "子"
    ],
    "definition": "plum; luggage; surname",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6a19",
    "layer": 2,
    "character": "標",
    "rank": 473,
    "pinyin": [
      "biāo"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 15,
    "decomposition": "⿰木票",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、票。",
    "observationHint": "先觀察「標」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "票"
    ],
    "definition": "mark, sign, symbol; bid, prize",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8ac7",
    "layer": 2,
    "character": "談",
    "rank": 474,
    "pinyin": [
      "tán"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 15,
    "decomposition": "⿰言炎",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、炎。",
    "observationHint": "先觀察「談」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "炎"
    ],
    "definition": "to talk, to chat; conversation; surname",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5716",
    "layer": 2,
    "character": "圖",
    "rank": 476,
    "pinyin": [
      "tú"
    ],
    "radical": "囗",
    "radicalMeaning": "enclosure",
    "strokeCount": 14,
    "decomposition": "⿴囗啚",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 囗、啚。",
    "observationHint": "先看「圖」的外框，再注意裡面的部分。",
    "parts": [
      "囗",
      "啚"
    ],
    "definition": "diagram, chart, map, picture; to plan",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5538",
    "layer": 2,
    "character": "唸",
    "rank": 477,
    "pinyin": [
      "niàn"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 11,
    "decomposition": "⿰口念",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 口、念。",
    "observationHint": "先觀察「唸」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "口",
      "念"
    ],
    "definition": "to recite, to read, to chant",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-516d",
    "layer": 2,
    "character": "六",
    "rank": 478,
    "pinyin": [
      "liù"
    ],
    "radical": "八",
    "radicalMeaning": "eight/divide",
    "strokeCount": 4,
    "decomposition": "⿱亠八",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 亠、八。",
    "observationHint": "先看清楚「六」上下兩層，再按順序落筆。",
    "parts": [
      "亠",
      "八"
    ],
    "definition": "six",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f15",
    "layer": 2,
    "character": "引",
    "rank": 479,
    "pinyin": [
      "yǐn"
    ],
    "radical": "弓",
    "radicalMeaning": "bow",
    "strokeCount": 4,
    "decomposition": "⿰弓丨",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 弓、丨。",
    "observationHint": "先觀察「引」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "弓",
      "丨"
    ],
    "definition": "to pull, to stretch; to draw; to attract",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6b77",
    "layer": 2,
    "character": "歷",
    "rank": 480,
    "pinyin": [
      "lì"
    ],
    "radical": "止",
    "radicalMeaning": "stop",
    "strokeCount": 16,
    "decomposition": "⿸厤止",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 厤、止。",
    "observationHint": "先看「歷」的外框，再注意裡面的部分。",
    "parts": [
      "厤",
      "止"
    ],
    "definition": "history; calendar",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9996",
    "layer": 2,
    "character": "首",
    "rank": 481,
    "pinyin": [
      "shǒu"
    ],
    "radical": "首",
    "radicalMeaning": "head",
    "strokeCount": 9,
    "decomposition": "⿱丷自",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 丷、自。",
    "observationHint": "先看清楚「首」上下兩層，再按順序落筆。",
    "parts": [
      "丷",
      "自"
    ],
    "definition": "chief, head, leader",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-91ab",
    "layer": 2,
    "character": "醫",
    "rank": 482,
    "pinyin": [
      "yī"
    ],
    "radical": "酉",
    "radicalMeaning": "wine/alcohol",
    "strokeCount": 18,
    "decomposition": "⿱殹酉",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 殹、酉。",
    "observationHint": "先看清楚「醫」上下兩層，再按順序落筆。",
    "parts": [
      "殹",
      "酉"
    ],
    "definition": "to cure, to heal, to treat; doctor; medicine",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4fb7",
    "layer": 2,
    "character": "侷",
    "rank": 483,
    "pinyin": [
      "jú"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 9,
    "decomposition": "⿰亻局",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、局。",
    "observationHint": "先觀察「侷」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "局"
    ],
    "definition": "narrow, cramped, confined",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7a81",
    "layer": 2,
    "character": "突",
    "rank": 484,
    "pinyin": [
      "tū"
    ],
    "radical": "穴",
    "radicalMeaning": "cave",
    "strokeCount": 9,
    "decomposition": "⿱穴犬",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 穴、犬。",
    "observationHint": "先看清楚「突」上下兩層，再按順序落筆。",
    "parts": [
      "穴",
      "犬"
    ],
    "definition": "sudden, abrupt, unexpected",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c08",
    "layer": 2,
    "character": "專",
    "rank": 485,
    "pinyin": [
      "zhuān"
    ],
    "radical": "寸",
    "radicalMeaning": "thumb",
    "strokeCount": 11,
    "decomposition": "⿱叀寸",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 叀、寸。",
    "observationHint": "先看清楚「專」上下兩層，再按順序落筆。",
    "parts": [
      "叀",
      "寸"
    ],
    "definition": "concentrated, specialized; to monopolize",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8cbb",
    "layer": 2,
    "character": "費",
    "rank": 486,
    "pinyin": [
      "fèi"
    ],
    "radical": "貝",
    "radicalMeaning": "shell",
    "strokeCount": 12,
    "decomposition": "⿱弗貝",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 弗、貝。",
    "observationHint": "先看清楚「費」上下兩層，再按順序落筆。",
    "parts": [
      "弗",
      "貝"
    ],
    "definition": "expenses, fees; to cost, to spend; wasteful",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-865f",
    "layer": 2,
    "character": "號",
    "rank": 487,
    "pinyin": [
      "hào"
    ],
    "radical": "虎",
    "radicalMeaning": null,
    "strokeCount": 13,
    "decomposition": "⿰号虎",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 号、虎。",
    "observationHint": "先觀察「號」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "号",
      "虎"
    ],
    "definition": "mark, sign; symbol; number; to call, to cry, to roar",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-76e1",
    "layer": 2,
    "character": "盡",
    "rank": 488,
    "pinyin": [
      "jǐn"
    ],
    "radical": "皿",
    "radicalMeaning": "dish",
    "strokeCount": 14,
    "decomposition": "⿱⿱聿灬皿",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 聿、灬、皿。",
    "observationHint": "先看清楚「盡」上下兩層，再按順序落筆。",
    "parts": [
      "聿",
      "灬",
      "皿"
    ],
    "definition": "to exhaust, to use up, to deplete",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53e6",
    "layer": 2,
    "character": "另",
    "rank": 489,
    "pinyin": [
      "lìng"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 5,
    "decomposition": "⿱口力",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 口、力。",
    "observationHint": "先看清楚「另」上下兩層，再按順序落筆。",
    "parts": [
      "口",
      "力"
    ],
    "definition": "another; separate, other",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9031",
    "layer": 2,
    "character": "週",
    "rank": 490,
    "pinyin": [
      "zhōu"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 11,
    "decomposition": "⿺辶周",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、周。",
    "observationHint": "先看「週」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "周"
    ],
    "definition": "week; turn, cycle; anniversary",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8f03",
    "layer": 2,
    "character": "較",
    "rank": 491,
    "pinyin": [
      "jiào"
    ],
    "radical": "車",
    "radicalMeaning": "car",
    "strokeCount": 13,
    "decomposition": "⿰車交",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 車、交。",
    "observationHint": "先觀察「較」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "車",
      "交"
    ],
    "definition": "to compare; relatively; more",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a3b",
    "layer": 2,
    "character": "註",
    "rank": 492,
    "pinyin": [
      "zhù"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 12,
    "decomposition": "⿰言主",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、主。",
    "observationHint": "先觀察「註」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "主"
    ],
    "definition": "to concentrate, to focus",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a9e",
    "layer": 2,
    "character": "語",
    "rank": 493,
    "pinyin": [
      "yǔ"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 14,
    "decomposition": "⿰言吾",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、吾。",
    "observationHint": "先觀察「語」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "吾"
    ],
    "definition": "words, language; saying, expression",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-50c5",
    "layer": 2,
    "character": "僅",
    "rank": 494,
    "pinyin": [
      "jǐn"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 13,
    "decomposition": "⿰亻堇",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、堇。",
    "observationHint": "先觀察「僅」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "堇"
    ],
    "definition": "only, merely, solely, just",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8003",
    "layer": 2,
    "character": "考",
    "rank": 495,
    "pinyin": [
      "kǎo"
    ],
    "radical": "耂",
    "radicalMeaning": "old",
    "strokeCount": 6,
    "decomposition": "⿸耂丂",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 耂、丂。",
    "observationHint": "先看「考」的外框，再注意裡面的部分。",
    "parts": [
      "耂",
      "丂"
    ],
    "definition": "to test, to investigate, to examine",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-843d",
    "layer": 2,
    "character": "落",
    "rank": 496,
    "pinyin": [
      "luò"
    ],
    "radical": "艹",
    "radicalMeaning": "grass",
    "strokeCount": 12,
    "decomposition": "⿱艹洛",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 艹、洛。",
    "observationHint": "先看清楚「落」上下兩層，再按順序落筆。",
    "parts": [
      "艹",
      "洛"
    ],
    "definition": "to fall, to drop; surplus, net income",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9752",
    "layer": 2,
    "character": "青",
    "rank": 497,
    "pinyin": [
      "qīng"
    ],
    "radical": "青",
    "radicalMeaning": "green/blue",
    "strokeCount": 8,
    "decomposition": "⿱龶月",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 龶、月。",
    "observationHint": "先看清楚「青」上下兩層，再按順序落筆。",
    "parts": [
      "龶",
      "月"
    ],
    "definition": "nature's color; blue, green, black; young",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-96a8",
    "layer": 2,
    "character": "隨",
    "rank": 498,
    "pinyin": [
      "suí"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 14,
    "decomposition": "⿰阝遀",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 阝、遀。",
    "observationHint": "先觀察「隨」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "阝",
      "遀"
    ],
    "definition": "to follow, to listen to, to submit to",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9078",
    "layer": 2,
    "character": "選",
    "rank": 499,
    "pinyin": [
      "xuǎn"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 15,
    "decomposition": "⿺辶巽",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、巽。",
    "observationHint": "先看「選」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "巽"
    ],
    "definition": "to select, to elect, to choose; election",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5217",
    "layer": 2,
    "character": "列",
    "rank": 500,
    "pinyin": [
      "liè"
    ],
    "radical": "刂",
    "radicalMeaning": "knife",
    "strokeCount": 6,
    "decomposition": "⿰歹刂",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 歹、刂。",
    "observationHint": "先觀察「列」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "歹",
      "刂"
    ],
    "definition": "a line; to arrange, to classify",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6b66",
    "layer": 2,
    "character": "武",
    "rank": 501,
    "pinyin": [
      "wǔ"
    ],
    "radical": "止",
    "radicalMeaning": "stop",
    "strokeCount": 8,
    "decomposition": "⿸一⿹弋止",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 一、弋、止。",
    "observationHint": "先看「武」的外框，再注意裡面的部分。",
    "parts": [
      "一",
      "弋",
      "止"
    ],
    "definition": "military; martial, warlike",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7d05",
    "layer": 2,
    "character": "紅",
    "rank": 502,
    "pinyin": [
      "hóng"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 9,
    "decomposition": "⿰糹工",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、工。",
    "observationHint": "先觀察「紅」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "工"
    ],
    "definition": "red, vermillion; to blush, to flush; popular",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-97ff",
    "layer": 2,
    "character": "響",
    "rank": 503,
    "pinyin": [
      "xiǎng"
    ],
    "radical": "音",
    "radicalMeaning": "sound",
    "strokeCount": 20,
    "decomposition": "⿱鄉音",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 鄉、音。",
    "observationHint": "先看清楚「響」上下兩層，再按順序落筆。",
    "parts": [
      "鄉",
      "音"
    ],
    "definition": "to make noise, to make sound; sound",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-96d6",
    "layer": 2,
    "character": "雖",
    "rank": 504,
    "pinyin": [
      "suī"
    ],
    "radical": "隹",
    "radicalMeaning": "small bird",
    "strokeCount": 17,
    "decomposition": "⿰虽隹",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 虽、隹。",
    "observationHint": "先觀察「雖」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "虽",
      "隹"
    ],
    "definition": "although, even though",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-63a8",
    "layer": 2,
    "character": "推",
    "rank": 505,
    "pinyin": [
      "tuī"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 11,
    "decomposition": "⿰扌隹",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、隹。",
    "observationHint": "先觀察「推」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "隹"
    ],
    "definition": "to push; to expel; to drive; to decline",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-52e2",
    "layer": 2,
    "character": "勢",
    "rank": 506,
    "pinyin": [
      "shì"
    ],
    "radical": "力",
    "radicalMeaning": "power/force",
    "strokeCount": 13,
    "decomposition": "⿱埶力",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 埶、力。",
    "observationHint": "先看清楚「勢」上下兩層，再按順序落筆。",
    "parts": [
      "埶",
      "力"
    ],
    "definition": "power, force; tendency, attitude",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e0c",
    "layer": 2,
    "character": "希",
    "rank": 508,
    "pinyin": [
      "xī"
    ],
    "radical": "巾",
    "radicalMeaning": "turban/scarf",
    "strokeCount": 7,
    "decomposition": "⿱乂布",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 乂、布。",
    "observationHint": "先看清楚「希」上下兩層，再按順序落筆。",
    "parts": [
      "乂",
      "布"
    ],
    "definition": "rare; to hope for, to strive for; to expect",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53e4",
    "layer": 2,
    "character": "古",
    "rank": 509,
    "pinyin": [
      "gǔ"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 5,
    "decomposition": "⿱十口",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 十、口。",
    "observationHint": "先看清楚「古」上下兩層，再按順序落筆。",
    "parts": [
      "十",
      "口"
    ],
    "definition": "old, classic, ancient",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8846",
    "layer": 2,
    "character": "衆",
    "rank": 510,
    "pinyin": [
      "zhòng"
    ],
    "radical": "血",
    "radicalMeaning": "blood",
    "strokeCount": 12,
    "decomposition": "⿱血乑",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 血、乑。",
    "observationHint": "先看清楚「衆」上下兩層，再按順序落筆。",
    "parts": [
      "血",
      "乑"
    ],
    "definition": "multitude, crowd; the public",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-69cb",
    "layer": 2,
    "character": "構",
    "rank": 511,
    "pinyin": [
      "gòu"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 14,
    "decomposition": "⿰木冓",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、冓。",
    "observationHint": "先觀察「構」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "冓"
    ],
    "definition": "to compose, to make; building, frame, structure",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-623f",
    "layer": 2,
    "character": "房",
    "rank": 512,
    "pinyin": [
      "fáng"
    ],
    "radical": "户",
    "radicalMeaning": "door/house",
    "strokeCount": 8,
    "decomposition": "⿸户方",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 户、方。",
    "observationHint": "先看「房」的外框，再注意裡面的部分。",
    "parts": [
      "户",
      "方"
    ],
    "definition": "building, house, room",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-534a",
    "layer": 2,
    "character": "半",
    "rank": 513,
    "pinyin": [
      "bàn"
    ],
    "radical": "十",
    "radicalMeaning": "ten",
    "strokeCount": 5,
    "decomposition": "⿻丷牛",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 丷、牛。",
    "observationHint": "先把「半」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "丷",
      "牛"
    ],
    "definition": "half; semi-, incomplete",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7bc0",
    "layer": 2,
    "character": "節",
    "rank": 514,
    "pinyin": [
      "jié"
    ],
    "radical": "⺮",
    "radicalMeaning": "bamboo",
    "strokeCount": 13,
    "decomposition": "⿱⺮即",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺮、即。",
    "observationHint": "先看清楚「節」上下兩層，再按順序落筆。",
    "parts": [
      "⺮",
      "即"
    ],
    "definition": "festival; knot, joint; segment; to economize, to save",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  }
] as LayeredCharacterResource[];

export const layeredCharacterResources: LayeredCharacterResource[] = [
  {
    "id": "layered-7684",
    "layer": 1,
    "character": "的",
    "rank": 1,
    "pinyin": [
      "de"
    ],
    "radical": "白",
    "radicalMeaning": "white",
    "strokeCount": 8,
    "decomposition": "⿰白勺",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 白、勺。",
    "observationHint": "先觀察「的」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "白",
      "勺"
    ],
    "definition": "aim, goal; of; possessive particle; -self suffix",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e00",
    "layer": 1,
    "character": "一",
    "rank": 2,
    "pinyin": [
      "yī"
    ],
    "radical": "一",
    "radicalMeaning": "one",
    "strokeCount": 1,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 一。",
    "observationHint": "先觀察「一」整體輪廓，再留意和 一 有關的部分。",
    "parts": [],
    "definition": "one; a, an; alone",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-662f",
    "layer": 1,
    "character": "是",
    "rank": 3,
    "pinyin": [
      "shì"
    ],
    "radical": "日",
    "radicalMeaning": "sun/day",
    "strokeCount": 9,
    "decomposition": "⿱日疋",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 日、疋。",
    "observationHint": "先看清楚「是」上下兩層，再按順序落筆。",
    "parts": [
      "日",
      "疋"
    ],
    "definition": "to be; indeed, right, yes; okay",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e0d",
    "layer": 1,
    "character": "不",
    "rank": 4,
    "pinyin": [
      "bù"
    ],
    "radical": "一",
    "radicalMeaning": "one",
    "strokeCount": 4,
    "decomposition": "⿱一？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一。",
    "observationHint": "先看清楚「不」上下兩層，再按順序落筆。",
    "parts": [
      "一"
    ],
    "definition": "no, not, un-; negative prefix",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e86",
    "layer": 1,
    "character": "了",
    "rank": 5,
    "pinyin": [
      "le",
      "liǎo"
    ],
    "radical": "亅",
    "radicalMeaning": "hook",
    "strokeCount": 2,
    "decomposition": "⿱乛亅",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 乛、亅。",
    "observationHint": "先看清楚「了」上下兩層，再按順序落筆。",
    "parts": [
      "乛",
      "亅"
    ],
    "definition": "clear; to finish; particle of completed action",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5728",
    "layer": 1,
    "character": "在",
    "rank": 6,
    "pinyin": [
      "zài"
    ],
    "radical": "土",
    "radicalMeaning": "earth",
    "strokeCount": 6,
    "decomposition": "⿸才土",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 才、土。",
    "observationHint": "先看「在」的外框，再注意裡面的部分。",
    "parts": [
      "才",
      "土"
    ],
    "definition": "at, in, on; to exist; used to indicate the present progressive tense",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4eba",
    "layer": 1,
    "character": "人",
    "rank": 7,
    "pinyin": [
      "rén"
    ],
    "radical": "人",
    "radicalMeaning": "human",
    "strokeCount": 2,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 人。",
    "observationHint": "先觀察「人」整體輪廓，再留意和 人 有關的部分。",
    "parts": [],
    "definition": "man, person; people",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6709",
    "layer": 1,
    "character": "有",
    "rank": 8,
    "pinyin": [
      "yǒu"
    ],
    "radical": "月",
    "radicalMeaning": "moon",
    "strokeCount": 6,
    "decomposition": "⿸？月",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 月。",
    "observationHint": "先看「有」的外框，再注意裡面的部分。",
    "parts": [
      "月"
    ],
    "definition": "to have, to own, to possess; to exist",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6211",
    "layer": 1,
    "character": "我",
    "rank": 9,
    "pinyin": [
      "wǒ"
    ],
    "radical": "戈",
    "radicalMeaning": "spear",
    "strokeCount": 7,
    "decomposition": "⿰扌戈",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、戈。",
    "observationHint": "先觀察「我」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "戈"
    ],
    "definition": "I, me, my; our, us",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4ed6",
    "layer": 1,
    "character": "他",
    "rank": 10,
    "pinyin": [
      "tā"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 5,
    "decomposition": "⿰亻也",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、也。",
    "observationHint": "先觀察「他」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "也"
    ],
    "definition": "other, another; he, she, it",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9019",
    "layer": 1,
    "character": "這",
    "rank": 11,
    "pinyin": [
      "zhè"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 10,
    "decomposition": "⿺辶言",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、言。",
    "observationHint": "先看「這」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "言"
    ],
    "definition": "this, these; such; here",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5011",
    "layer": 1,
    "character": "們",
    "rank": 13,
    "pinyin": [
      "men"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 10,
    "decomposition": "⿰亻門",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、門。",
    "observationHint": "先觀察「們」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "門"
    ],
    "definition": "plural marker for pronouns and some nouns",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e2d",
    "layer": 1,
    "character": "中",
    "rank": 14,
    "pinyin": [
      "zhōng"
    ],
    "radical": "丨",
    "radicalMeaning": "line",
    "strokeCount": 4,
    "decomposition": "⿻口丨",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 口、丨。",
    "observationHint": "先把「中」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "口",
      "丨"
    ],
    "definition": "central; center, middle; amidst; to hit (target), to attain; China; Chinese",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f86",
    "layer": 1,
    "character": "來",
    "rank": 15,
    "pinyin": [
      "lái"
    ],
    "radical": "人",
    "radicalMeaning": "human",
    "strokeCount": 8,
    "decomposition": "⿻木从",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 木、从。",
    "observationHint": "先把「來」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "木",
      "从"
    ],
    "definition": "to arrive, to come, to return; in the future, later on",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e0a",
    "layer": 1,
    "character": "上",
    "rank": 16,
    "pinyin": [
      "shàng"
    ],
    "radical": "一",
    "radicalMeaning": "one",
    "strokeCount": 3,
    "decomposition": "⿱⺊一",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺊、一。",
    "observationHint": "先看清楚「上」上下兩層，再按順序落筆。",
    "parts": [
      "⺊",
      "一"
    ],
    "definition": "above, on top, superior; to go up; to attend; previous",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5927",
    "layer": 1,
    "character": "大",
    "rank": 17,
    "pinyin": [
      "dà"
    ],
    "radical": "大",
    "radicalMeaning": "big",
    "strokeCount": 3,
    "decomposition": "⿻一人",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 一、人。",
    "observationHint": "先把「大」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "一",
      "人"
    ],
    "definition": "big, great, vast, high, deep",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-548c",
    "layer": 1,
    "character": "和",
    "rank": 19,
    "pinyin": [
      "hé"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 8,
    "decomposition": "⿰禾口",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 禾、口。",
    "observationHint": "先觀察「和」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "禾",
      "口"
    ],
    "definition": "harmony, peace; calm, peaceful",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-570b",
    "layer": 1,
    "character": "國",
    "rank": 20,
    "pinyin": [
      "guó"
    ],
    "radical": "囗",
    "radicalMeaning": "enclosure",
    "strokeCount": 11,
    "decomposition": "⿴囗或",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 囗、或。",
    "observationHint": "先看「國」的外框，再注意裡面的部分。",
    "parts": [
      "囗",
      "或"
    ],
    "definition": "country, nation, state; national",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5730",
    "layer": 1,
    "character": "地",
    "rank": 21,
    "pinyin": [
      "de"
    ],
    "radical": "土",
    "radicalMeaning": "earth",
    "strokeCount": 6,
    "decomposition": "⿰土也",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 土、也。",
    "observationHint": "先觀察「地」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "土",
      "也"
    ],
    "definition": "earth, ground, soil; land, region; structural particle used before a verb",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5230",
    "layer": 1,
    "character": "到",
    "rank": 22,
    "pinyin": [
      "dào"
    ],
    "radical": "刂",
    "radicalMeaning": "knife",
    "strokeCount": 8,
    "decomposition": "⿰至刂",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 至、刂。",
    "observationHint": "先觀察「到」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "至",
      "刂"
    ],
    "definition": "to go to, to arrive",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4ee5",
    "layer": 1,
    "character": "以",
    "rank": 23,
    "pinyin": [
      "yǐ"
    ],
    "radical": "人",
    "radicalMeaning": "human",
    "strokeCount": 4,
    "decomposition": "⿰？人",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 人。",
    "observationHint": "先觀察「以」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "人"
    ],
    "definition": "according to; so as to; because of; then",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6642",
    "layer": 1,
    "character": "時",
    "rank": 25,
    "pinyin": [
      "shí"
    ],
    "radical": "日",
    "radicalMeaning": "sun/day",
    "strokeCount": 10,
    "decomposition": "⿰日寺",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 日、寺。",
    "observationHint": "先觀察「時」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "日",
      "寺"
    ],
    "definition": "time, season; period, era, age",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8981",
    "layer": 1,
    "character": "要",
    "rank": 26,
    "pinyin": [
      "yào"
    ],
    "radical": "覀",
    "radicalMeaning": "west",
    "strokeCount": 9,
    "decomposition": "⿱覀女",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 覀、女。",
    "observationHint": "先看清楚「要」上下兩層，再按順序落筆。",
    "parts": [
      "覀",
      "女"
    ],
    "definition": "essential, necessary; to ask for; to coerce; to demand",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c31",
    "layer": 1,
    "character": "就",
    "rank": 27,
    "pinyin": [
      "jiù"
    ],
    "radical": "尢",
    "radicalMeaning": "lame",
    "strokeCount": 12,
    "decomposition": "⿰京尤",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 京、尤。",
    "observationHint": "先觀察「就」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "京",
      "尤"
    ],
    "definition": "just, simply; to go to; to approach, near",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6703",
    "layer": 1,
    "character": "會",
    "rank": 29,
    "pinyin": [
      "huì"
    ],
    "radical": "曰",
    "radicalMeaning": "say",
    "strokeCount": 13,
    "decomposition": "⿱⿱亼？日",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 亼、日。",
    "observationHint": "先看清楚「會」上下兩層，再按順序落筆。",
    "parts": [
      "亼",
      "日"
    ],
    "definition": "to assemble, to meet; meeting; association, group",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53ef",
    "layer": 1,
    "character": "可",
    "rank": 30,
    "pinyin": [
      "kě"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 5,
    "decomposition": "⿻丁口",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 丁、口。",
    "observationHint": "先把「可」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "丁",
      "口"
    ],
    "definition": "may, can, -able; possibly",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e5f",
    "layer": 1,
    "character": "也",
    "rank": 31,
    "pinyin": [
      "yě"
    ],
    "radical": "乚",
    "radicalMeaning": "second",
    "strokeCount": 3,
    "decomposition": "⿻？乚",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 乚。",
    "observationHint": "先把「也」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "乚"
    ],
    "definition": "also, too",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f60",
    "layer": 1,
    "character": "你",
    "rank": 32,
    "pinyin": [
      "nǐ"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 7,
    "decomposition": "⿰亻尔",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、尔。",
    "observationHint": "先觀察「你」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "尔"
    ],
    "definition": "you, second person pronoun",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c0d",
    "layer": 1,
    "character": "對",
    "rank": 33,
    "pinyin": [
      "duì"
    ],
    "radical": "寸",
    "radicalMeaning": "thumb",
    "strokeCount": 14,
    "decomposition": "⿰⿱业羊寸",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 业、羊、寸。",
    "observationHint": "先觀察「對」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "业",
      "羊",
      "寸"
    ],
    "definition": "correct, right; facing, opposed",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-751f",
    "layer": 1,
    "character": "生",
    "rank": 34,
    "pinyin": [
      "shēng"
    ],
    "radical": "生",
    "radicalMeaning": "life",
    "strokeCount": 5,
    "decomposition": "⿻一土",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 一、土。",
    "observationHint": "先把「生」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "一",
      "土"
    ],
    "definition": "life, lifetime; birth; growth",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-80fd",
    "layer": 1,
    "character": "能",
    "rank": 35,
    "pinyin": [
      "néng"
    ],
    "radical": "⺼",
    "radicalMeaning": "meat",
    "strokeCount": 10,
    "decomposition": "⿰⿱厶⺼⿱匕匕",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 厶、⺼、匕、匕。",
    "observationHint": "先觀察「能」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "厶",
      "⺼",
      "匕",
      "匕"
    ],
    "definition": "can, may; capable, full of energy",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-800c",
    "layer": 1,
    "character": "而",
    "rank": 36,
    "pinyin": [
      "ér"
    ],
    "radical": "而",
    "radicalMeaning": "beard",
    "strokeCount": 6,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 而。",
    "observationHint": "先觀察「而」整體輪廓，再留意和 而 有關的部分。",
    "parts": [],
    "definition": "and, and then, and yet; but",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b50",
    "layer": 1,
    "character": "子",
    "rank": 37,
    "pinyin": [
      "zi"
    ],
    "radical": "子",
    "radicalMeaning": "child",
    "strokeCount": 3,
    "decomposition": "⿻了一",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 了、一。",
    "observationHint": "先把「子」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "了",
      "一"
    ],
    "definition": "son, child; seed, egg; fruit; small thing",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-90a3",
    "layer": 1,
    "character": "那",
    "rank": 38,
    "pinyin": [
      "nà"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 6,
    "decomposition": "⿰⿹？？阝",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 阝。",
    "observationHint": "先觀察「那」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "阝"
    ],
    "definition": "that, that one, those",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f97",
    "layer": 1,
    "character": "得",
    "rank": 39,
    "pinyin": [
      "dé"
    ],
    "radical": "彳",
    "radicalMeaning": "step",
    "strokeCount": 11,
    "decomposition": "⿰彳⿱旦寸",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 彳、旦、寸。",
    "observationHint": "先觀察「得」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "彳",
      "旦",
      "寸"
    ],
    "definition": "to obtain, to get, to acquire; suitable, proper; ready",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e8e",
    "layer": 1,
    "character": "于",
    "rank": 40,
    "pinyin": [
      "yú"
    ],
    "radical": "二",
    "radicalMeaning": "two",
    "strokeCount": 3,
    "decomposition": "⿻二亅",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 二、亅。",
    "observationHint": "先把「于」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "二",
      "亅"
    ],
    "definition": "at, in, on; to, from; alas!",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7740",
    "layer": 1,
    "character": "着",
    "rank": 41,
    "pinyin": [
      "zhe"
    ],
    "radical": "目",
    "radicalMeaning": "eye",
    "strokeCount": 11,
    "decomposition": "⿸羊目",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 羊、目。",
    "observationHint": "先看「着」的外框，再注意裡面的部分。",
    "parts": [
      "羊",
      "目"
    ],
    "definition": "to make a move, to take action",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e0b",
    "layer": 1,
    "character": "下",
    "rank": 42,
    "pinyin": [
      "xià"
    ],
    "radical": "一",
    "radicalMeaning": "one",
    "strokeCount": 3,
    "decomposition": "⿱一卜",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、卜。",
    "observationHint": "先看清楚「下」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "卜"
    ],
    "definition": "below, underneath; inferior; to bring down; next",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-81ea",
    "layer": 1,
    "character": "自",
    "rank": 43,
    "pinyin": [
      "zì"
    ],
    "radical": "自",
    "radicalMeaning": "self",
    "strokeCount": 6,
    "decomposition": "⿻目？",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 目。",
    "observationHint": "先把「自」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "目"
    ],
    "definition": "self; private, personal; from",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e4b",
    "layer": 1,
    "character": "之",
    "rank": 44,
    "pinyin": [
      "zhī"
    ],
    "radical": "丿",
    "radicalMeaning": "bend",
    "strokeCount": 3,
    "decomposition": "⿱丶？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 丶。",
    "observationHint": "先看清楚「之」上下兩層，再按順序落筆。",
    "parts": [
      "丶"
    ],
    "definition": "marks preceding phrase as modifier of following phrase; it, him her, them; to go to",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e74",
    "layer": 1,
    "character": "年",
    "rank": 45,
    "pinyin": [
      "nián"
    ],
    "radical": "干",
    "radicalMeaning": "dry",
    "strokeCount": 6,
    "decomposition": "⿻干？",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 干。",
    "observationHint": "先把「年」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "干"
    ],
    "definition": "year; anniversary; a person's age",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-904e",
    "layer": 1,
    "character": "過",
    "rank": 46,
    "pinyin": [
      "guò"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 12,
    "decomposition": "⿺辶咼",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、咼。",
    "observationHint": "先看「過」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "咼"
    ],
    "definition": "pass; to go across, to pass through",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9aee",
    "layer": 1,
    "character": "髮",
    "rank": 47,
    "pinyin": [
      "fā"
    ],
    "radical": "髟",
    "radicalMeaning": "hair",
    "strokeCount": 15,
    "decomposition": "⿱髟犮",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 髟、犮。",
    "observationHint": "先看清楚「髮」上下兩層，再按順序落筆。",
    "parts": [
      "髟",
      "犮"
    ],
    "definition": "to issue, to dispatch, to send out; hair",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f8c",
    "layer": 1,
    "character": "後",
    "rank": 48,
    "pinyin": [
      "hòu"
    ],
    "radical": "彳",
    "radicalMeaning": "step",
    "strokeCount": 9,
    "decomposition": "⿰彳⿱幺夂",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 彳、幺、夂。",
    "observationHint": "先觀察「後」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "彳",
      "幺",
      "夂"
    ],
    "definition": "after; behind, rear; descendants",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f5c",
    "layer": 1,
    "character": "作",
    "rank": 49,
    "pinyin": [
      "zuò"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 7,
    "decomposition": "⿰亻乍",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、乍。",
    "observationHint": "先觀察「作」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "乍"
    ],
    "definition": "to make; to write, to compose; to act, to perform",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-88e1",
    "layer": 1,
    "character": "裡",
    "rank": 50,
    "pinyin": [
      "lǐ"
    ],
    "radical": "衤",
    "radicalMeaning": "clothes",
    "strokeCount": 12,
    "decomposition": "⿰衤里",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 衤、里。",
    "observationHint": "先觀察「裡」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "衤",
      "里"
    ],
    "definition": "unit of distance equal to 0.5km; village; lane",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7528",
    "layer": 1,
    "character": "用",
    "rank": 51,
    "pinyin": [
      "yòng"
    ],
    "radical": "用",
    "radicalMeaning": "use",
    "strokeCount": 5,
    "decomposition": "⿵冂？",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 冂。",
    "observationHint": "先看「用」的外框，再注意裡面的部分。",
    "parts": [
      "冂"
    ],
    "definition": "to use, to employ, to apply; use",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9053",
    "layer": 1,
    "character": "道",
    "rank": 52,
    "pinyin": [
      "dào"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 12,
    "decomposition": "⿺辶首",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、首。",
    "observationHint": "先看「道」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "首"
    ],
    "definition": "method, way; path, road",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-884c",
    "layer": 1,
    "character": "行",
    "rank": 53,
    "pinyin": [
      "xíng"
    ],
    "radical": "行",
    "radicalMeaning": "go/do",
    "strokeCount": 6,
    "decomposition": "⿰彳亍",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 彳、亍。",
    "observationHint": "先觀察「行」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "彳",
      "亍"
    ],
    "definition": "to go, to walk, to move; professional",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6240",
    "layer": 1,
    "character": "所",
    "rank": 54,
    "pinyin": [
      "suǒ"
    ],
    "radical": "户",
    "radicalMeaning": "door/house",
    "strokeCount": 8,
    "decomposition": "⿰户斤",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 户、斤。",
    "observationHint": "先觀察「所」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "户",
      "斤"
    ],
    "definition": "place, location; \"that which\", a particle introducing a passive clause",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7136",
    "layer": 1,
    "character": "然",
    "rank": 55,
    "pinyin": [
      "rán"
    ],
    "radical": "灬",
    "radicalMeaning": "fire",
    "strokeCount": 12,
    "decomposition": "⿱肰灬",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 肰、灬。",
    "observationHint": "先看清楚「然」上下兩層，再按順序落筆。",
    "parts": [
      "肰",
      "灬"
    ],
    "definition": "certainly; naturally; suddenly",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-50a2",
    "layer": 1,
    "character": "傢",
    "rank": 56,
    "pinyin": [
      "jiā"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 12,
    "decomposition": "⿰亻家",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、家。",
    "observationHint": "先觀察「傢」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "家"
    ],
    "definition": "stubborn, obstinate, intransigent",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7a2e",
    "layer": 1,
    "character": "種",
    "rank": 57,
    "pinyin": [
      "zhǒng"
    ],
    "radical": "禾",
    "radicalMeaning": "grain",
    "strokeCount": 14,
    "decomposition": "⿰禾重",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 禾、重。",
    "observationHint": "先觀察「種」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "禾",
      "重"
    ],
    "definition": "race, kind, breed; seed; to plant",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e8b",
    "layer": 1,
    "character": "事",
    "rank": 58,
    "pinyin": [
      "shì"
    ],
    "radical": "亅",
    "radicalMeaning": "hook",
    "strokeCount": 8,
    "decomposition": "⿻⿳一口彐亅",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 一、口、彐、亅。",
    "observationHint": "先把「事」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "一",
      "口",
      "彐",
      "亅"
    ],
    "definition": "affair, matter, business; to serve; accident, incident",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6210",
    "layer": 1,
    "character": "成",
    "rank": 59,
    "pinyin": [
      "chéng"
    ],
    "radical": "戈",
    "radicalMeaning": "spear",
    "strokeCount": 6,
    "decomposition": "⿰丁戈",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 丁、戈。",
    "observationHint": "先觀察「成」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "丁",
      "戈"
    ],
    "definition": "to accomplish; to become; to complete, to finish; to succeed",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-65b9",
    "layer": 1,
    "character": "方",
    "rank": 60,
    "pinyin": [
      "fāng"
    ],
    "radical": "方",
    "radicalMeaning": "square/raft",
    "strokeCount": 4,
    "decomposition": "⿱亠？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 亠。",
    "observationHint": "先看清楚「方」上下兩層，再按順序落筆。",
    "parts": [
      "亠"
    ],
    "definition": "square, rectangle; side; region; flag",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-591a",
    "layer": 1,
    "character": "多",
    "rank": 61,
    "pinyin": [
      "duō"
    ],
    "radical": "夕",
    "radicalMeaning": "evening/unset",
    "strokeCount": 6,
    "decomposition": "⿱夕夕",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 夕、夕。",
    "observationHint": "先看清楚「多」上下兩層，再按順序落筆。",
    "parts": [
      "夕",
      "夕"
    ],
    "definition": "much, many, multi-; more than, over",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7d93",
    "layer": 1,
    "character": "經",
    "rank": 62,
    "pinyin": [
      "jīng"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 13,
    "decomposition": "⿰糹巠",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、巠。",
    "observationHint": "先觀察「經」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "巠"
    ],
    "definition": "the classics; to experience, to undergo",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e48",
    "layer": 1,
    "character": "么",
    "rank": 63,
    "pinyin": [
      "me"
    ],
    "radical": "丿",
    "radicalMeaning": "bend",
    "strokeCount": 3,
    "decomposition": "⿱丿厶",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 丿、厶。",
    "observationHint": "先看清楚「么」上下兩層，再按順序落筆。",
    "parts": [
      "丿",
      "厶"
    ],
    "definition": "interrogative particle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53bb",
    "layer": 1,
    "character": "去",
    "rank": 64,
    "pinyin": [
      "qù"
    ],
    "radical": "厶",
    "radicalMeaning": "private",
    "strokeCount": 5,
    "decomposition": "⿱土厶",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 土、厶。",
    "observationHint": "先看清楚「去」上下兩層，再按順序落筆。",
    "parts": [
      "土",
      "厶"
    ],
    "definition": "to go away, to leave, to depart",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6cd5",
    "layer": 1,
    "character": "法",
    "rank": 65,
    "pinyin": [
      "fǎ"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 8,
    "decomposition": "⿰氵去",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、去。",
    "observationHint": "先觀察「法」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "去"
    ],
    "definition": "law, rule, statute; method, way; French",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b78",
    "layer": 1,
    "character": "學",
    "rank": 66,
    "pinyin": [
      "xué"
    ],
    "radical": "子",
    "radicalMeaning": "child",
    "strokeCount": 16,
    "decomposition": "⿳？冖子",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 冖、子。",
    "observationHint": "先把「學」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "冖",
      "子"
    ],
    "definition": "learning, knowledge, science; to study, to go to school; -ology",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5982",
    "layer": 1,
    "character": "如",
    "rank": 67,
    "pinyin": [
      "rú"
    ],
    "radical": "女",
    "radicalMeaning": "woman",
    "strokeCount": 6,
    "decomposition": "⿰女口",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 女、口。",
    "observationHint": "先觀察「如」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "女",
      "口"
    ],
    "definition": "as, as if, like, such as, supposing",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-90fd",
    "layer": 1,
    "character": "都",
    "rank": 68,
    "pinyin": [
      "dōu"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 10,
    "decomposition": "⿰者阝",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 者、阝。",
    "observationHint": "先觀察「都」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "者",
      "阝"
    ],
    "definition": "all, each, entirely, whole; metropolis; capital",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8855",
    "layer": 1,
    "character": "衕",
    "rank": 69,
    "pinyin": [
      "tóng"
    ],
    "radical": "行",
    "radicalMeaning": "go/do",
    "strokeCount": 12,
    "decomposition": "⿻行同",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 行、同。",
    "observationHint": "先把「衕」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "行",
      "同"
    ],
    "definition": "same, similar; together with, alike",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-73fe",
    "layer": 1,
    "character": "現",
    "rank": 70,
    "pinyin": [
      "xiàn"
    ],
    "radical": "王",
    "radicalMeaning": "jade",
    "strokeCount": 11,
    "decomposition": "⿰王見",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 王、見。",
    "observationHint": "先觀察「現」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "王",
      "見"
    ],
    "definition": "to appear, to manifest; current, now",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7576",
    "layer": 1,
    "character": "當",
    "rank": 71,
    "pinyin": [
      "dāng"
    ],
    "radical": "田",
    "radicalMeaning": "field",
    "strokeCount": 13,
    "decomposition": "⿱尚田",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 尚、田。",
    "observationHint": "先看清楚「當」上下兩層，再按順序落筆。",
    "parts": [
      "尚",
      "田"
    ],
    "definition": "appropriate, timely; to act, to serve; the sound of bells",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6c92",
    "layer": 1,
    "character": "沒",
    "rank": 72,
    "pinyin": [
      "méi"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 7,
    "decomposition": "⿰氵⿱？又",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、又。",
    "observationHint": "先觀察「沒」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "又"
    ],
    "definition": "not, none, gone; to bury; to sink, to drown",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-52d5",
    "layer": 1,
    "character": "動",
    "rank": 73,
    "pinyin": [
      "dòng"
    ],
    "radical": "力",
    "radicalMeaning": "power/force",
    "strokeCount": 11,
    "decomposition": "⿰重力",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 重、力。",
    "observationHint": "先觀察「動」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "重",
      "力"
    ],
    "definition": "to move, to happen; movement, action",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8d77",
    "layer": 1,
    "character": "起",
    "rank": 75,
    "pinyin": [
      "qǐ"
    ],
    "radical": "走",
    "radicalMeaning": "run",
    "strokeCount": 10,
    "decomposition": "⿺走己",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 走、己。",
    "observationHint": "先看「起」的外框，再注意裡面的部分。",
    "parts": [
      "走",
      "己"
    ],
    "definition": "to begin, to initiate; to rise, to stand up",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-770b",
    "layer": 1,
    "character": "看",
    "rank": 76,
    "pinyin": [
      "kàn"
    ],
    "radical": "目",
    "radicalMeaning": "eye",
    "strokeCount": 9,
    "decomposition": "⿱手目",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 手、目。",
    "observationHint": "先看清楚「看」上下兩層，再按順序落筆。",
    "parts": [
      "手",
      "目"
    ],
    "definition": "to look, to see; to examine, to scrutinize",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b9a",
    "layer": 1,
    "character": "定",
    "rank": 77,
    "pinyin": [
      "dìng"
    ],
    "radical": "宀",
    "radicalMeaning": "roof",
    "strokeCount": 8,
    "decomposition": "⿱宀疋",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、疋。",
    "observationHint": "先看清楚「定」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "疋"
    ],
    "definition": "to decide, to fix, to settle; to order; definite, fixed, sure",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5929",
    "layer": 1,
    "character": "天",
    "rank": 78,
    "pinyin": [
      "tiān"
    ],
    "radical": "大",
    "radicalMeaning": "big",
    "strokeCount": 4,
    "decomposition": "⿱一大",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、大。",
    "observationHint": "先看清楚「天」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "大"
    ],
    "definition": "sky, heaven; god, celestial",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5206",
    "layer": 1,
    "character": "分",
    "rank": 79,
    "pinyin": [
      "fēn"
    ],
    "radical": "刀",
    "radicalMeaning": "knife",
    "strokeCount": 4,
    "decomposition": "⿱八刀",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 八、刀。",
    "observationHint": "先看清楚「分」上下兩層，再按順序落筆。",
    "parts": [
      "八",
      "刀"
    ],
    "definition": "to divide, to allocate; fraction; small unit of time or other quantity",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9084",
    "layer": 1,
    "character": "還",
    "rank": 80,
    "pinyin": [
      "hái"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 16,
    "decomposition": "⿺辶睘",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、睘。",
    "observationHint": "先看「還」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "睘"
    ],
    "definition": "also, besides; still, yet; to return",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9032",
    "layer": 1,
    "character": "進",
    "rank": 81,
    "pinyin": [
      "jìn"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 11,
    "decomposition": "⿺辶隹",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、隹。",
    "observationHint": "先看「進」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "隹"
    ],
    "definition": "to advance, to make progress; to come in, to enter",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-597d",
    "layer": 1,
    "character": "好",
    "rank": 82,
    "pinyin": [
      "hǎo"
    ],
    "radical": "女",
    "radicalMeaning": "woman",
    "strokeCount": 6,
    "decomposition": "⿰女子",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 女、子。",
    "observationHint": "先觀察「好」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "女",
      "子"
    ],
    "definition": "good, excellent, fine; proper, suitable; well",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c0f",
    "layer": 1,
    "character": "小",
    "rank": 83,
    "pinyin": [
      "xiǎo"
    ],
    "radical": "小",
    "radicalMeaning": "small",
    "strokeCount": 3,
    "decomposition": "⿻亅八",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 亅、八。",
    "observationHint": "先把「小」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "亅",
      "八"
    ],
    "definition": "small, tiny, insignificant",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-90e8",
    "layer": 1,
    "character": "部",
    "rank": 84,
    "pinyin": [
      "bù"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 10,
    "decomposition": "⿰咅阝",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 咅、阝。",
    "observationHint": "先觀察「部」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "咅",
      "阝"
    ],
    "definition": "department, ministry; division, unit; part, section",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5176",
    "layer": 1,
    "character": "其",
    "rank": 85,
    "pinyin": [
      "qí"
    ],
    "radical": "八",
    "radicalMeaning": "eight/divide",
    "strokeCount": 8,
    "decomposition": "⿱甘⿱一八",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 甘、一、八。",
    "observationHint": "先看清楚「其」上下兩層，再按順序落筆。",
    "parts": [
      "甘",
      "一",
      "八"
    ],
    "definition": "his, her, its, their; that",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e9b",
    "layer": 1,
    "character": "些",
    "rank": 86,
    "pinyin": [
      "xiē"
    ],
    "radical": "二",
    "radicalMeaning": "two",
    "strokeCount": 8,
    "decomposition": "⿱此二",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 此、二。",
    "observationHint": "先看清楚「些」上下兩層，再按順序落筆。",
    "parts": [
      "此",
      "二"
    ],
    "definition": "little, few; rather, somewhat",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e3b",
    "layer": 1,
    "character": "主",
    "rank": 87,
    "pinyin": [
      "zhǔ"
    ],
    "radical": "丶",
    "radicalMeaning": "dot",
    "strokeCount": 5,
    "decomposition": "⿱丶王",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 丶、王。",
    "observationHint": "先看清楚「主」上下兩層，再按順序落筆。",
    "parts": [
      "丶",
      "王"
    ],
    "definition": "to own; to host; master; host; lord",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6a23",
    "layer": 1,
    "character": "樣",
    "rank": 88,
    "pinyin": [
      "yàng"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 15,
    "decomposition": "⿰木羕",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、羕。",
    "observationHint": "先觀察「樣」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "羕"
    ],
    "definition": "form, pattern, shape, style",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7406",
    "layer": 1,
    "character": "理",
    "rank": 89,
    "pinyin": [
      "lǐ"
    ],
    "radical": "王",
    "radicalMeaning": "jade",
    "strokeCount": 11,
    "decomposition": "⿰王里",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 王、里。",
    "observationHint": "先觀察「理」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "王",
      "里"
    ],
    "definition": "science, reason, logic; to manage",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5fc3",
    "layer": 1,
    "character": "心",
    "rank": 90,
    "pinyin": [
      "xīn"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 4,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 心。",
    "observationHint": "先觀察「心」整體輪廓，再留意和 心 有關的部分。",
    "parts": [],
    "definition": "heart; mind; soul",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5979",
    "layer": 1,
    "character": "她",
    "rank": 91,
    "pinyin": [
      "tā"
    ],
    "radical": "女",
    "radicalMeaning": "woman",
    "strokeCount": 6,
    "decomposition": "⿰女也",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 女、也。",
    "observationHint": "先觀察「她」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "女",
      "也"
    ],
    "definition": "she, her",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-672c",
    "layer": 1,
    "character": "本",
    "rank": 92,
    "pinyin": [
      "běn"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 5,
    "decomposition": "⿻木一",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 木、一。",
    "observationHint": "先把「本」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "木",
      "一"
    ],
    "definition": "root, origin, source; basis",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-524d",
    "layer": 1,
    "character": "前",
    "rank": 93,
    "pinyin": [
      "qián"
    ],
    "radical": "刂",
    "radicalMeaning": "knife",
    "strokeCount": 9,
    "decomposition": "⿱⿱丷一刖",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 丷、一、刖。",
    "observationHint": "先看清楚「前」上下兩層，再按順序落筆。",
    "parts": [
      "丷",
      "一",
      "刖"
    ],
    "definition": "in front, forward; former, preceding",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f00",
    "layer": 1,
    "character": "开",
    "rank": 94,
    "pinyin": [
      "kāi"
    ],
    "radical": "廾",
    "radicalMeaning": null,
    "strokeCount": 4,
    "decomposition": "⿱一廾",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、廾。",
    "observationHint": "先看清楚「开」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "廾"
    ],
    "definition": "to open; to start, to initiate, to begin",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f46",
    "layer": 1,
    "character": "但",
    "rank": 95,
    "pinyin": [
      "dàn"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 7,
    "decomposition": "⿰亻旦",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、旦。",
    "observationHint": "先觀察「但」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "旦"
    ],
    "definition": "only; but, however, yet, still",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-56e0",
    "layer": 1,
    "character": "因",
    "rank": 96,
    "pinyin": [
      "yīn"
    ],
    "radical": "囗",
    "radicalMeaning": "enclosure",
    "strokeCount": 6,
    "decomposition": "⿴囗大",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 囗、大。",
    "observationHint": "先看「因」的外框，再注意裡面的部分。",
    "parts": [
      "囗",
      "大"
    ],
    "definition": "cause, reason; by; because",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-96bb",
    "layer": 1,
    "character": "隻",
    "rank": 97,
    "pinyin": [
      "zhī"
    ],
    "radical": "隹",
    "radicalMeaning": "small bird",
    "strokeCount": 10,
    "decomposition": "⿱隹又",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 隹、又。",
    "observationHint": "先看清楚「隻」上下兩層，再按順序落筆。",
    "parts": [
      "隹",
      "又"
    ],
    "definition": "only, merely, just",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f9e",
    "layer": 1,
    "character": "從",
    "rank": 98,
    "pinyin": [
      "cóng"
    ],
    "radical": "彳",
    "radicalMeaning": "step",
    "strokeCount": 11,
    "decomposition": "⿰彳⿱从足",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 彳、从、足。",
    "observationHint": "先觀察「從」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "彳",
      "从",
      "足"
    ],
    "definition": "from, by, since, whence, through",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-60f3",
    "layer": 1,
    "character": "想",
    "rank": 99,
    "pinyin": [
      "xiǎng"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 13,
    "decomposition": "⿱相心",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 相、心。",
    "observationHint": "先看清楚「想」上下兩層，再按順序落筆。",
    "parts": [
      "相",
      "心"
    ],
    "definition": "to believe, to wish for; to consider, to plan, to think",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5be6",
    "layer": 1,
    "character": "實",
    "rank": 100,
    "pinyin": [
      "shí"
    ],
    "radical": "宀",
    "radicalMeaning": "roof",
    "strokeCount": 14,
    "decomposition": "⿱宀貫",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、貫。",
    "observationHint": "先看清楚「實」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "貫"
    ],
    "definition": "real, true; honest, sincere",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-65e5",
    "layer": 1,
    "character": "日",
    "rank": 101,
    "pinyin": [
      "rì"
    ],
    "radical": "日",
    "radicalMeaning": "sun/day",
    "strokeCount": 4,
    "decomposition": "⿴口一",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 口、一。",
    "observationHint": "先看「日」的外框，再注意裡面的部分。",
    "parts": [
      "口",
      "一"
    ],
    "definition": "sun; day; daytime",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8ecd",
    "layer": 1,
    "character": "軍",
    "rank": 102,
    "pinyin": [
      "jūn"
    ],
    "radical": "車",
    "radicalMeaning": "car",
    "strokeCount": 9,
    "decomposition": "⿱冖車",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 冖、車。",
    "observationHint": "先看清楚「軍」上下兩層，再按順序落筆。",
    "parts": [
      "冖",
      "車"
    ],
    "definition": "army, military; soldiers, troops",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8005",
    "layer": 1,
    "character": "者",
    "rank": 103,
    "pinyin": [
      "zhě"
    ],
    "radical": "耂",
    "radicalMeaning": "old",
    "strokeCount": 8,
    "decomposition": "⿸耂日",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 耂、日。",
    "observationHint": "先看「者」的外框，再注意裡面的部分。",
    "parts": [
      "耂",
      "日"
    ],
    "definition": "that which; they who; those who",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-610f",
    "layer": 1,
    "character": "意",
    "rank": 104,
    "pinyin": [
      "yì"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 13,
    "decomposition": "⿱音心",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 音、心。",
    "observationHint": "先看清楚「意」上下兩層，再按順序落筆。",
    "parts": [
      "音",
      "心"
    ],
    "definition": "thought, idea, opinion; desire, wish; meaning, intention",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7121",
    "layer": 1,
    "character": "無",
    "rank": 105,
    "pinyin": [
      "wú"
    ],
    "radical": "灬",
    "radicalMeaning": "fire",
    "strokeCount": 12,
    "decomposition": "⿱？灬",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 灬。",
    "observationHint": "先看清楚「無」上下兩層，再按順序落筆。",
    "parts": [
      "灬"
    ],
    "definition": "no, not; lacking, -less",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-529b",
    "layer": 1,
    "character": "力",
    "rank": 106,
    "pinyin": [
      "lì"
    ],
    "radical": "力",
    "radicalMeaning": "power/force",
    "strokeCount": 2,
    "decomposition": "⿻丿？",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 丿。",
    "observationHint": "先把「力」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "丿"
    ],
    "definition": "strength, power; capability, influence",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b83",
    "layer": 1,
    "character": "它",
    "rank": 107,
    "pinyin": [
      "tā"
    ],
    "radical": "宀",
    "radicalMeaning": "roof",
    "strokeCount": 5,
    "decomposition": "⿱宀匕",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、匕。",
    "observationHint": "先看清楚「它」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "匕"
    ],
    "definition": "it; other",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8207",
    "layer": 1,
    "character": "與",
    "rank": 108,
    "pinyin": [
      "yǔ"
    ],
    "radical": "臼",
    "radicalMeaning": "mortar",
    "strokeCount": 13,
    "decomposition": "⿱⿻臼？八",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 臼、八。",
    "observationHint": "先看清楚「與」上下兩層，再按順序落筆。",
    "parts": [
      "臼",
      "八"
    ],
    "definition": "and; with; to; for; to give, to grant",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9577",
    "layer": 1,
    "character": "長",
    "rank": 109,
    "pinyin": [
      "zhǎng"
    ],
    "radical": "長",
    "radicalMeaning": "long/grow",
    "strokeCount": 8,
    "decomposition": "⿱？？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。",
    "observationHint": "先看清楚「長」上下兩層，再按順序落筆。",
    "parts": [],
    "definition": "long, lasting; to excel in",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-628a",
    "layer": 1,
    "character": "把",
    "rank": 110,
    "pinyin": [
      "bǎ"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 7,
    "decomposition": "⿰扌巴",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、巴。",
    "observationHint": "先觀察「把」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "巴"
    ],
    "definition": "to grasp, to hold; to guard, to take; handle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6a5f",
    "layer": 1,
    "character": "機",
    "rank": 111,
    "pinyin": [
      "jī"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 16,
    "decomposition": "⿰木幾",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、幾。",
    "observationHint": "先觀察「機」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "幾"
    ],
    "definition": "desk; machine; moment, opportunity",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5341",
    "layer": 1,
    "character": "十",
    "rank": 112,
    "pinyin": [
      "shí"
    ],
    "radical": "十",
    "radicalMeaning": "ten",
    "strokeCount": 2,
    "decomposition": "⿻一丨",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 一、丨。",
    "observationHint": "先把「十」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "一",
      "丨"
    ],
    "definition": "ten, tenth; complete; perfect",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6c11",
    "layer": 1,
    "character": "民",
    "rank": 113,
    "pinyin": [
      "mín"
    ],
    "radical": "民",
    "radicalMeaning": null,
    "strokeCount": 5,
    "decomposition": "⿻巳戈",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 巳、戈。",
    "observationHint": "先把「民」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "巳",
      "戈"
    ],
    "definition": "citizens, subjects; a nation's people",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7b2c",
    "layer": 1,
    "character": "第",
    "rank": 114,
    "pinyin": [
      "dì"
    ],
    "radical": "⺮",
    "radicalMeaning": "bamboo",
    "strokeCount": 11,
    "decomposition": "⿱⺮弟",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺮、弟。",
    "observationHint": "先看清楚「第」上下兩層，再按順序落筆。",
    "parts": [
      "⺮",
      "弟"
    ],
    "definition": "sequence, number; grade, degree; particle prefacing an ordinal",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-516c",
    "layer": 1,
    "character": "公",
    "rank": 115,
    "pinyin": [
      "gōng"
    ],
    "radical": "八",
    "radicalMeaning": "eight/divide",
    "strokeCount": 4,
    "decomposition": "⿱八厶",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 八、厶。",
    "observationHint": "先看清楚「公」上下兩層，再按順序落筆。",
    "parts": [
      "八",
      "厶"
    ],
    "definition": "fair, equitable; public; duke",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6b64",
    "layer": 1,
    "character": "此",
    "rank": 116,
    "pinyin": [
      "cǐ"
    ],
    "radical": "止",
    "radicalMeaning": "stop",
    "strokeCount": 6,
    "decomposition": "⿰止匕",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 止、匕。",
    "observationHint": "先觀察「此」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "止",
      "匕"
    ],
    "definition": "this, these; in this case, then",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5df2",
    "layer": 1,
    "character": "已",
    "rank": 117,
    "pinyin": [
      "yǐ"
    ],
    "radical": "己",
    "radicalMeaning": "oneself",
    "strokeCount": 3,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 己。",
    "observationHint": "先觀察「已」整體輪廓，再留意和 己 有關的部分。",
    "parts": [],
    "definition": "already; finished; to stop; then, afterwards",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5de5",
    "layer": 1,
    "character": "工",
    "rank": 118,
    "pinyin": [
      "gōng"
    ],
    "radical": "工",
    "radicalMeaning": "work",
    "strokeCount": 3,
    "decomposition": "⿱一丄",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、丄。",
    "observationHint": "先看清楚「工」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "丄"
    ],
    "definition": "labor, work; laborer, worker",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f7f",
    "layer": 1,
    "character": "使",
    "rank": 119,
    "pinyin": [
      "shǐ"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 8,
    "decomposition": "⿰亻吏",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、吏。",
    "observationHint": "先觀察「使」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "吏"
    ],
    "definition": "cause, mission, orders; envoy, messenger, ambassador",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-60c5",
    "layer": 1,
    "character": "情",
    "rank": 120,
    "pinyin": [
      "qíng"
    ],
    "radical": "忄",
    "radicalMeaning": "heart",
    "strokeCount": 11,
    "decomposition": "⿰忄青",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 忄、青。",
    "observationHint": "先觀察「情」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "忄",
      "青"
    ],
    "definition": "emotion, feeling, sentiment",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-660e",
    "layer": 1,
    "character": "明",
    "rank": 121,
    "pinyin": [
      "míng"
    ],
    "radical": "日",
    "radicalMeaning": "sun/day",
    "strokeCount": 8,
    "decomposition": "⿰日月",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 日、月。",
    "observationHint": "先觀察「明」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "日",
      "月"
    ],
    "definition": "bright, clear; to explain, to understand, to shed light",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6027",
    "layer": 1,
    "character": "性",
    "rank": 122,
    "pinyin": [
      "xìng"
    ],
    "radical": "忄",
    "radicalMeaning": "heart",
    "strokeCount": 8,
    "decomposition": "⿰忄生",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 忄、生。",
    "observationHint": "先觀察「性」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "忄",
      "生"
    ],
    "definition": "sex, nature, character; suffix converting a verb to an adjective",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-77e5",
    "layer": 1,
    "character": "知",
    "rank": 123,
    "pinyin": [
      "zhī"
    ],
    "radical": "矢",
    "radicalMeaning": "arrow",
    "strokeCount": 8,
    "decomposition": "⿰矢口",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 矢、口。",
    "observationHint": "先觀察「知」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "矢",
      "口"
    ],
    "definition": "to know, to perceive, to comprehend",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5168",
    "layer": 1,
    "character": "全",
    "rank": 124,
    "pinyin": [
      "quán"
    ],
    "radical": "入",
    "radicalMeaning": "enter",
    "strokeCount": 6,
    "decomposition": "⿱入玉",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 入、玉。",
    "observationHint": "先看清楚「全」上下兩層，再按順序落筆。",
    "parts": [
      "入",
      "玉"
    ],
    "definition": "whole, entire, complete; to preserve",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e09",
    "layer": 1,
    "character": "三",
    "rank": 125,
    "pinyin": [
      "sān"
    ],
    "radical": "一",
    "radicalMeaning": "one",
    "strokeCount": 3,
    "decomposition": "⿱一二",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、二。",
    "observationHint": "先看清楚「三」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "二"
    ],
    "definition": "three",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53c8",
    "layer": 1,
    "character": "又",
    "rank": 126,
    "pinyin": [
      "yòu"
    ],
    "radical": "又",
    "radicalMeaning": "right hand",
    "strokeCount": 2,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 又。",
    "observationHint": "先觀察「又」整體輪廓，再留意和 又 有關的部分。",
    "parts": [],
    "definition": "and, also, again, in addition",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-95dc",
    "layer": 1,
    "character": "關",
    "rank": 127,
    "pinyin": [
      "guān"
    ],
    "radical": "門",
    "radicalMeaning": "gate",
    "strokeCount": 19,
    "decomposition": "⿵門⿱⿰幺幺丱",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 門、幺、幺、丱。",
    "observationHint": "先看「關」的外框，再注意裡面的部分。",
    "parts": [
      "門",
      "幺",
      "幺",
      "丱"
    ],
    "definition": "frontier pass; to close, to shut; relation",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9ede",
    "layer": 1,
    "character": "點",
    "rank": 128,
    "pinyin": [
      "diǎn"
    ],
    "radical": "黑",
    "radicalMeaning": "black",
    "strokeCount": 17,
    "decomposition": "⿰黑占",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 黑、占。",
    "observationHint": "先觀察「點」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "黑",
      "占"
    ],
    "definition": "dot, point, speck",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6b63",
    "layer": 1,
    "character": "正",
    "rank": 129,
    "pinyin": [
      "zhèng"
    ],
    "radical": "止",
    "radicalMeaning": "stop",
    "strokeCount": 5,
    "decomposition": "⿱一止",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、止。",
    "observationHint": "先看清楚「正」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "止"
    ],
    "definition": "straight, right, proper, correct, just, true",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-696d",
    "layer": 1,
    "character": "業",
    "rank": 130,
    "pinyin": [
      "yè"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 13,
    "decomposition": "⿱业⿱？未",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 业、未。",
    "observationHint": "先看清楚「業」上下兩層，再按順序落筆。",
    "parts": [
      "业",
      "未"
    ],
    "definition": "business, profession; to study, to work",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5916",
    "layer": 1,
    "character": "外",
    "rank": 131,
    "pinyin": [
      "wài"
    ],
    "radical": "夕",
    "radicalMeaning": "evening/unset",
    "strokeCount": 5,
    "decomposition": "⿰夕卜",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 夕、卜。",
    "observationHint": "先觀察「外」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "夕",
      "卜"
    ],
    "definition": "out, outside, external; foreign; in addition",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c07",
    "layer": 1,
    "character": "將",
    "rank": 132,
    "pinyin": [
      "jiāng"
    ],
    "radical": "寸",
    "radicalMeaning": "thumb",
    "strokeCount": 11,
    "decomposition": "⿰爿⿱夕寸",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 爿、夕、寸。",
    "observationHint": "先觀察「將」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "爿",
      "夕",
      "寸"
    ],
    "definition": "the future, what will be; ready, prepared; a general",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5169",
    "layer": 1,
    "character": "兩",
    "rank": 133,
    "pinyin": [
      "liǎng"
    ],
    "radical": "入",
    "radicalMeaning": "enter",
    "strokeCount": 8,
    "decomposition": "⿱一⿻巾⿰入入",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、巾、入、入。",
    "observationHint": "先看清楚「兩」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "巾",
      "入",
      "入"
    ],
    "definition": "two, both, pair, couple; ounce",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9ad8",
    "layer": 1,
    "character": "高",
    "rank": 134,
    "pinyin": [
      "gāo"
    ],
    "radical": "高",
    "radicalMeaning": "tall",
    "strokeCount": 10,
    "decomposition": "⿳亠口冋",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 亠、口、冋。",
    "observationHint": "先把「高」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "亠",
      "口",
      "冋"
    ],
    "definition": "tall, lofty; high, elevated",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9593",
    "layer": 1,
    "character": "間",
    "rank": 135,
    "pinyin": [
      "jiān"
    ],
    "radical": "門",
    "radicalMeaning": "gate",
    "strokeCount": 12,
    "decomposition": "⿵門日",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 門、日。",
    "observationHint": "先看「間」的外框，再注意裡面的部分。",
    "parts": [
      "門",
      "日"
    ],
    "definition": "between, among; midpoint; space, place, locality",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7531",
    "layer": 1,
    "character": "由",
    "rank": 136,
    "pinyin": [
      "yóu"
    ],
    "radical": "田",
    "radicalMeaning": "field",
    "strokeCount": 5,
    "decomposition": "田",
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 田。",
    "observationHint": "先觀察「由」整體輪廓，再留意和 田 有關的部分。",
    "parts": [
      "田"
    ],
    "definition": "cause, reason; from",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-554f",
    "layer": 1,
    "character": "問",
    "rank": 137,
    "pinyin": [
      "wèn"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 11,
    "decomposition": "⿵門口",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 門、口。",
    "observationHint": "先看「問」的外框，再注意裡面的部分。",
    "parts": [
      "門",
      "口"
    ],
    "definition": "to ask about, to inquire after",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f88",
    "layer": 1,
    "character": "很",
    "rank": 138,
    "pinyin": [
      "hěn"
    ],
    "radical": "彳",
    "radicalMeaning": "step",
    "strokeCount": 9,
    "decomposition": "⿰彳艮",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 彳、艮。",
    "observationHint": "先觀察「很」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "彳",
      "艮"
    ],
    "definition": "very, quite, much",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6700",
    "layer": 1,
    "character": "最",
    "rank": 139,
    "pinyin": [
      "zuì"
    ],
    "radical": "曰",
    "radicalMeaning": "say",
    "strokeCount": 12,
    "decomposition": "⿱日取",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 日、取。",
    "observationHint": "先看清楚「最」上下兩層，再按順序落筆。",
    "parts": [
      "日",
      "取"
    ],
    "definition": "most, extremely, exceedingly; superlative",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-91cd",
    "layer": 1,
    "character": "重",
    "rank": 140,
    "pinyin": [
      "zhòng"
    ],
    "radical": "里",
    "radicalMeaning": "village/mile",
    "strokeCount": 9,
    "decomposition": "⿻千里",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 千、里。",
    "observationHint": "先把「重」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "千",
      "里"
    ],
    "definition": "heavy, weighty; to double, to repeat",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f75",
    "layer": 1,
    "character": "併",
    "rank": 141,
    "pinyin": [
      "bìng"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 8,
    "decomposition": "⿰亻并",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、并。",
    "observationHint": "先觀察「併」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "并"
    ],
    "definition": "to combine, to annex; also, what's more",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7269",
    "layer": 1,
    "character": "物",
    "rank": 142,
    "pinyin": [
      "wù"
    ],
    "radical": "牛",
    "radicalMeaning": "cow",
    "strokeCount": 8,
    "decomposition": "⿰牛勿",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 牛、勿。",
    "observationHint": "先觀察「物」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "牛",
      "勿"
    ],
    "definition": "thing, substance, matter; creature",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-624b",
    "layer": 1,
    "character": "手",
    "rank": 143,
    "pinyin": [
      "shǒu"
    ],
    "radical": "手",
    "radicalMeaning": "hand",
    "strokeCount": 4,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 手。",
    "observationHint": "先觀察「手」整體輪廓，再留意和 手 有關的部分。",
    "parts": [],
    "definition": "hand",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-61c9",
    "layer": 1,
    "character": "應",
    "rank": 144,
    "pinyin": [
      "yīng"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 17,
    "decomposition": "⿸⿸广倠心",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 广、倠、心。",
    "observationHint": "先看「應」的外框，再注意裡面的部分。",
    "parts": [
      "广",
      "倠",
      "心"
    ],
    "definition": "should, must; to respond, to handle; to deal with, to cope",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6218",
    "layer": 1,
    "character": "战",
    "rank": 145,
    "pinyin": [
      "zhàn"
    ],
    "radical": "戈",
    "radicalMeaning": "spear",
    "strokeCount": 9,
    "decomposition": "⿰占戈",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 占、戈。",
    "observationHint": "先觀察「战」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "占",
      "戈"
    ],
    "definition": "war, fighting, battle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-982d",
    "layer": 1,
    "character": "頭",
    "rank": 147,
    "pinyin": [
      "tóu"
    ],
    "radical": "頁",
    "radicalMeaning": "leaf",
    "strokeCount": 16,
    "decomposition": "⿰豆頁",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 豆、頁。",
    "observationHint": "先觀察「頭」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "豆",
      "頁"
    ],
    "definition": "head; chief, boss; first, top",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6587",
    "layer": 1,
    "character": "文",
    "rank": 148,
    "pinyin": [
      "wén"
    ],
    "radical": "文",
    "radicalMeaning": "script/literature",
    "strokeCount": 4,
    "decomposition": "⿱亠乂",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 亠、乂。",
    "observationHint": "先看清楚「文」上下兩層，再按順序落筆。",
    "parts": [
      "亠",
      "乂"
    ],
    "definition": "culture, literature, writing",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9ad4",
    "layer": 1,
    "character": "體",
    "rank": 149,
    "pinyin": [
      "tǐ"
    ],
    "radical": "骨",
    "radicalMeaning": "bone",
    "strokeCount": 23,
    "decomposition": "⿰骨豊",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 骨、豊。",
    "observationHint": "先觀察「體」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "骨",
      "豊"
    ],
    "definition": "body; group, class; form, style, system",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-653f",
    "layer": 1,
    "character": "政",
    "rank": 150,
    "pinyin": [
      "zhèng"
    ],
    "radical": "攵",
    "radicalMeaning": "knock",
    "strokeCount": 9,
    "decomposition": "⿰正攵",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 正、攵。",
    "observationHint": "先觀察「政」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "正",
      "攵"
    ],
    "definition": "government, politics",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7f8e",
    "layer": 1,
    "character": "美",
    "rank": 151,
    "pinyin": [
      "měi"
    ],
    "radical": "羊",
    "radicalMeaning": "sheep",
    "strokeCount": 9,
    "decomposition": "⿱羊大",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 羊、大。",
    "observationHint": "先看清楚「美」上下兩層，再按順序落筆。",
    "parts": [
      "羊",
      "大"
    ],
    "definition": "beautiful, pretty; pleasing",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-76f8",
    "layer": 1,
    "character": "相",
    "rank": 152,
    "pinyin": [
      "xiāng"
    ],
    "radical": "目",
    "radicalMeaning": "eye",
    "strokeCount": 9,
    "decomposition": "⿰木目",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、目。",
    "observationHint": "先觀察「相」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "目"
    ],
    "definition": "mutual, reciprocal; equal; each other",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-898b",
    "layer": 1,
    "character": "見",
    "rank": 153,
    "pinyin": [
      "jiàn"
    ],
    "radical": "見",
    "radicalMeaning": "see",
    "strokeCount": 7,
    "decomposition": "⿱目儿",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 目、儿。",
    "observationHint": "先看清楚「見」上下兩層，再按順序落筆。",
    "parts": [
      "目",
      "儿"
    ],
    "definition": "to see, to observe, to meet, to appear",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-88ab",
    "layer": 1,
    "character": "被",
    "rank": 154,
    "pinyin": [
      "bèi"
    ],
    "radical": "衤",
    "radicalMeaning": "clothes",
    "strokeCount": 10,
    "decomposition": "⿰衤皮",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 衤、皮。",
    "observationHint": "先觀察「被」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "衤",
      "皮"
    ],
    "definition": "bedding; a passive particle meaning \"by\"",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5229",
    "layer": 1,
    "character": "利",
    "rank": 155,
    "pinyin": [
      "lì"
    ],
    "radical": "刂",
    "radicalMeaning": "knife",
    "strokeCount": 7,
    "decomposition": "⿰禾刂",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 禾、刂。",
    "observationHint": "先觀察「利」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "禾",
      "刂"
    ],
    "definition": "gains, advantage, profit, merit",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4ec0",
    "layer": 1,
    "character": "什",
    "rank": 156,
    "pinyin": [
      "shén"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 4,
    "decomposition": "⿰亻十",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、十。",
    "observationHint": "先觀察「什」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "十"
    ],
    "definition": "what? mixed, miscellaneous",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e8c",
    "layer": 1,
    "character": "二",
    "rank": 157,
    "pinyin": [
      "èr"
    ],
    "radical": "二",
    "radicalMeaning": "two",
    "strokeCount": 2,
    "decomposition": "⿱一一",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、一。",
    "observationHint": "先看清楚「二」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "一"
    ],
    "definition": "two; twice",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7b49",
    "layer": 1,
    "character": "等",
    "rank": 158,
    "pinyin": [
      "děng"
    ],
    "radical": "⺮",
    "radicalMeaning": "bamboo",
    "strokeCount": 12,
    "decomposition": "⿱⺮寺",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺮、寺。",
    "observationHint": "先看清楚「等」上下兩層，再按順序落筆。",
    "parts": [
      "⺮",
      "寺"
    ],
    "definition": "rank, grade; same, equal; to wait",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7523",
    "layer": 1,
    "character": "産",
    "rank": 159,
    "pinyin": [
      "chǎn"
    ],
    "radical": "生",
    "radicalMeaning": "life",
    "strokeCount": 11,
    "decomposition": "⿸产生",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 产、生。",
    "observationHint": "先看「産」的外框，再注意裡面的部分。",
    "parts": [
      "产",
      "生"
    ],
    "definition": "to give birth",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6216",
    "layer": 1,
    "character": "或",
    "rank": 160,
    "pinyin": [
      "huò"
    ],
    "radical": "戈",
    "radicalMeaning": "spear",
    "strokeCount": 8,
    "decomposition": "⿹戈⿱口一",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 戈、口、一。",
    "observationHint": "先看「或」的外框，再注意裡面的部分。",
    "parts": [
      "戈",
      "口",
      "一"
    ],
    "definition": "or, either, else; maybe, perhaps, possibly",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-65b0",
    "layer": 1,
    "character": "新",
    "rank": 161,
    "pinyin": [
      "xīn"
    ],
    "radical": "斤",
    "radicalMeaning": "axe",
    "strokeCount": 13,
    "decomposition": "⿰亲斤",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亲、斤。",
    "observationHint": "先觀察「新」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亲",
      "斤"
    ],
    "definition": "new, recent, fresh, modern",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5df1",
    "layer": 1,
    "character": "己",
    "rank": 162,
    "pinyin": [
      "jǐ"
    ],
    "radical": "己",
    "radicalMeaning": "oneself",
    "strokeCount": 3,
    "decomposition": "⿱？乚",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 乚。",
    "observationHint": "先看清楚「己」上下兩層，再按順序落筆。",
    "parts": [
      "乚"
    ],
    "definition": "self, oneself; personal, private; 6th heavenly stem",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-88fd",
    "layer": 1,
    "character": "製",
    "rank": 163,
    "pinyin": [
      "zhì"
    ],
    "radical": "衣",
    "radicalMeaning": "clothes",
    "strokeCount": 14,
    "decomposition": "⿱制衣",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 制、衣。",
    "observationHint": "先看清楚「製」上下兩層，再按順序落筆。",
    "parts": [
      "制",
      "衣"
    ],
    "definition": "system; to establish; to manufacture; to overpower",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8eab",
    "layer": 1,
    "character": "身",
    "rank": 164,
    "pinyin": [
      "shēn"
    ],
    "radical": "身",
    "radicalMeaning": "body",
    "strokeCount": 7,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 身。",
    "observationHint": "先觀察「身」整體輪廓，再留意和 身 有關的部分。",
    "parts": [],
    "definition": "body, torso; person; pregnancy",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-679c",
    "layer": 1,
    "character": "果",
    "rank": 165,
    "pinyin": [
      "guǒ"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 8,
    "decomposition": "⿱田木",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 田、木。",
    "observationHint": "先看清楚「果」上下兩層，再按順序落筆。",
    "parts": [
      "田",
      "木"
    ],
    "definition": "fruit, nut; result",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-52a0",
    "layer": 1,
    "character": "加",
    "rank": 166,
    "pinyin": [
      "jiā"
    ],
    "radical": "力",
    "radicalMeaning": "power/force",
    "strokeCount": 5,
    "decomposition": "⿰力口",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 力、口。",
    "observationHint": "先觀察「加」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "力",
      "口"
    ],
    "definition": "to add to, to increase, to augment",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-897f",
    "layer": 1,
    "character": "西",
    "rank": 167,
    "pinyin": [
      "xī"
    ],
    "radical": "西",
    "radicalMeaning": "west",
    "strokeCount": 6,
    "decomposition": "⿻兀囗",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 兀、囗。",
    "observationHint": "先把「西」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "兀",
      "囗"
    ],
    "definition": "west, western, westward",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-65af",
    "layer": 1,
    "character": "斯",
    "rank": 168,
    "pinyin": [
      "sī"
    ],
    "radical": "斤",
    "radicalMeaning": "axe",
    "strokeCount": 12,
    "decomposition": "⿰其斤",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 其、斤。",
    "observationHint": "先觀察「斯」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "其",
      "斤"
    ],
    "definition": "this, thus, such; emphatic particle; used in transliterations",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6708",
    "layer": 1,
    "character": "月",
    "rank": 169,
    "pinyin": [
      "yuè"
    ],
    "radical": "月",
    "radicalMeaning": "moon",
    "strokeCount": 4,
    "decomposition": "⿵冂二",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 冂、二。",
    "observationHint": "先看「月」的外框，再注意裡面的部分。",
    "parts": [
      "冂",
      "二"
    ],
    "definition": "moon; month",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a71",
    "layer": 1,
    "character": "話",
    "rank": 170,
    "pinyin": [
      "huà"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 13,
    "decomposition": "⿰言舌",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、舌。",
    "observationHint": "先觀察「話」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "舌"
    ],
    "definition": "talk, speech; language, dialect",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-95a4",
    "layer": 1,
    "character": "閤",
    "rank": 171,
    "pinyin": [
      "gé"
    ],
    "radical": "門",
    "radicalMeaning": "gate",
    "strokeCount": 14,
    "decomposition": "⿵門合",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 門、合。",
    "observationHint": "先看「閤」的外框，再注意裡面的部分。",
    "parts": [
      "門",
      "合"
    ],
    "definition": "chamber; shelf; side-door",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8ff4",
    "layer": 1,
    "character": "迴",
    "rank": 172,
    "pinyin": [
      "huí"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 9,
    "decomposition": "⿺辶回",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、回。",
    "observationHint": "先看「迴」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "回"
    ],
    "definition": "to rotate, to revolve; curve, zig-zag",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7279",
    "layer": 1,
    "character": "特",
    "rank": 173,
    "pinyin": [
      "tè"
    ],
    "radical": "牛",
    "radicalMeaning": "cow",
    "strokeCount": 10,
    "decomposition": "⿰牛寺",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 牛、寺。",
    "observationHint": "先觀察「特」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "牛",
      "寺"
    ],
    "definition": "special, unique, distinguished",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4ee3",
    "layer": 1,
    "character": "代",
    "rank": 174,
    "pinyin": [
      "dài"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 5,
    "decomposition": "⿰亻弋",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、弋。",
    "observationHint": "先觀察「代」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "弋"
    ],
    "definition": "era, generation; to substitute for, to replace",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5167",
    "layer": 1,
    "character": "內",
    "rank": 175,
    "pinyin": [
      "nèi"
    ],
    "radical": "入",
    "radicalMeaning": "enter",
    "strokeCount": 4,
    "decomposition": "⿻冂入",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 冂、入。",
    "observationHint": "先把「內」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "冂",
      "入"
    ],
    "definition": "inside",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4fe1",
    "layer": 1,
    "character": "信",
    "rank": 176,
    "pinyin": [
      "xìn"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 9,
    "decomposition": "⿰亻言",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、言。",
    "observationHint": "先觀察「信」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "言"
    ],
    "definition": "to trust, to believe; letter, sign",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9336",
    "layer": 1,
    "character": "錶",
    "rank": 177,
    "pinyin": [
      "biǎo"
    ],
    "radical": "釒",
    "radicalMeaning": "metal/gold",
    "strokeCount": 16,
    "decomposition": "⿰釒表",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 釒、表。",
    "observationHint": "先觀察「錶」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "釒",
      "表"
    ],
    "definition": "to show, to express, to display; outside, appearance; a watch",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5316",
    "layer": 1,
    "character": "化",
    "rank": 178,
    "pinyin": [
      "huà"
    ],
    "radical": "匕",
    "radicalMeaning": "spoon",
    "strokeCount": 4,
    "decomposition": "⿰亻匕",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、匕。",
    "observationHint": "先觀察「化」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "匕"
    ],
    "definition": "to change, to convert, to reform; -ize",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8001",
    "layer": 1,
    "character": "老",
    "rank": 179,
    "pinyin": [
      "lǎo"
    ],
    "radical": "老",
    "radicalMeaning": "old",
    "strokeCount": 6,
    "decomposition": "⿱耂匕",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 耂、匕。",
    "observationHint": "先看清楚「老」上下兩層，再按順序落筆。",
    "parts": [
      "耂",
      "匕"
    ],
    "definition": "old, aged; experienced",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7d66",
    "layer": 1,
    "character": "給",
    "rank": 180,
    "pinyin": [
      "gěi"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 12,
    "decomposition": "⿰糹合",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、合。",
    "observationHint": "先觀察「給」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "合"
    ],
    "definition": "to give, to lend; for, by",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e16",
    "layer": 1,
    "character": "世",
    "rank": 181,
    "pinyin": [
      "shì"
    ],
    "radical": "一",
    "radicalMeaning": "one",
    "strokeCount": 5,
    "decomposition": "⿻廿？",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 廿。",
    "observationHint": "先把「世」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "廿"
    ],
    "definition": "generation, era, age; world",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f4d",
    "layer": 1,
    "character": "位",
    "rank": 182,
    "pinyin": [
      "wèi"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 7,
    "decomposition": "⿰亻立",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、立。",
    "observationHint": "先觀察「位」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "立"
    ],
    "definition": "seat, throne; rank, status; position, location",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6b21",
    "layer": 1,
    "character": "次",
    "rank": 183,
    "pinyin": [
      "cì"
    ],
    "radical": "欠",
    "radicalMeaning": "yawn",
    "strokeCount": 6,
    "decomposition": "⿰冫欠",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 冫、欠。",
    "observationHint": "先觀察「次」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "冫",
      "欠"
    ],
    "definition": "order, sequence; second, next; one after the other",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5ea6",
    "layer": 1,
    "character": "度",
    "rank": 184,
    "pinyin": [
      "dù"
    ],
    "radical": "广",
    "radicalMeaning": "house on cliff",
    "strokeCount": 9,
    "decomposition": "⿸广⿱廿又",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 广、廿、又。",
    "observationHint": "先看「度」的外框，再注意裡面的部分。",
    "parts": [
      "广",
      "廿",
      "又"
    ],
    "definition": "degree, system; manner; to consider",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9580",
    "layer": 1,
    "character": "門",
    "rank": 185,
    "pinyin": [
      "mén"
    ],
    "radical": "門",
    "radicalMeaning": "gate",
    "strokeCount": 8,
    "decomposition": "⿰？？",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。",
    "observationHint": "先觀察「門」左右兩邊的分工，再把位置寫穩。",
    "parts": [],
    "definition": "gate, door, entrance, opening",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4efb",
    "layer": 1,
    "character": "任",
    "rank": 186,
    "pinyin": [
      "rèn"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 6,
    "decomposition": "⿰亻壬",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、壬。",
    "observationHint": "先觀察「任」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "壬"
    ],
    "definition": "to trust, to rely on; to appoint; to bear; duty, office",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e38",
    "layer": 1,
    "character": "常",
    "rank": 187,
    "pinyin": [
      "cháng"
    ],
    "radical": "巾",
    "radicalMeaning": "turban/scarf",
    "strokeCount": 11,
    "decomposition": "⿱尚巾",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 尚、巾。",
    "observationHint": "先看清楚「常」上下兩層，再按順序落筆。",
    "parts": [
      "尚",
      "巾"
    ],
    "definition": "common, general, normal; always, frequently, regularly",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5148",
    "layer": 1,
    "character": "先",
    "rank": 188,
    "pinyin": [
      "xiān"
    ],
    "radical": "儿",
    "radicalMeaning": "legs",
    "strokeCount": 6,
    "decomposition": "⿱⿰？土儿",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 土、儿。",
    "observationHint": "先看清楚「先」上下兩層，再按順序落筆。",
    "parts": [
      "土",
      "儿"
    ],
    "definition": "first, former, previous",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6d77",
    "layer": 1,
    "character": "海",
    "rank": 189,
    "pinyin": [
      "hǎi"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 10,
    "decomposition": "⿰氵每",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、每。",
    "observationHint": "先觀察「海」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "每"
    ],
    "definition": "sea, ocean; maritime",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-901a",
    "layer": 1,
    "character": "通",
    "rank": 190,
    "pinyin": [
      "tōng"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 10,
    "decomposition": "⿺辶甬",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、甬。",
    "observationHint": "先看「通」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "甬"
    ],
    "definition": "to pass through, to open, to connect; to communicate; common",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5152",
    "layer": 1,
    "character": "兒",
    "rank": 192,
    "pinyin": [
      "ér"
    ],
    "radical": "儿",
    "radicalMeaning": "legs",
    "strokeCount": 8,
    "decomposition": "⿱臼儿",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 臼、儿。",
    "observationHint": "先看清楚「兒」上下兩層，再按順序落筆。",
    "parts": [
      "臼",
      "儿"
    ],
    "definition": "son, child",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-539f",
    "layer": 1,
    "character": "原",
    "rank": 193,
    "pinyin": [
      "yuán"
    ],
    "radical": "厂",
    "radicalMeaning": "cliff",
    "strokeCount": 10,
    "decomposition": "⿸厂泉",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 厂、泉。",
    "observationHint": "先看「原」的外框，再注意裡面的部分。",
    "parts": [
      "厂",
      "泉"
    ],
    "definition": "source, origin, beginning",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6771",
    "layer": 1,
    "character": "東",
    "rank": 194,
    "pinyin": [
      "dōng"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 8,
    "decomposition": "⿻木日",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 木、日。",
    "observationHint": "先把「東」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "木",
      "日"
    ],
    "definition": "east, eastern, eastward",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8072",
    "layer": 1,
    "character": "聲",
    "rank": 195,
    "pinyin": [
      "shēng"
    ],
    "radical": "耳",
    "radicalMeaning": "ear",
    "strokeCount": 17,
    "decomposition": "⿱殸耳",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 殸、耳。",
    "observationHint": "先看清楚「聲」上下兩層，再按順序落筆。",
    "parts": [
      "殸",
      "耳"
    ],
    "definition": "sound, noise; voice, tone, music",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-63d0",
    "layer": 1,
    "character": "提",
    "rank": 196,
    "pinyin": [
      "tí"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 12,
    "decomposition": "⿰扌是",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、是。",
    "observationHint": "先觀察「提」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "是"
    ],
    "definition": "to hold in the hand; to lift, to raise",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7acb",
    "layer": 1,
    "character": "立",
    "rank": 197,
    "pinyin": [
      "lì"
    ],
    "radical": "立",
    "radicalMeaning": "stand erect",
    "strokeCount": 5,
    "decomposition": "⿳亠丷一",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 亠、丷、一。",
    "observationHint": "先把「立」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "亠",
      "丷",
      "一"
    ],
    "definition": "to stand; to establish, to set up",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53ca",
    "layer": 1,
    "character": "及",
    "rank": 198,
    "pinyin": [
      "jí"
    ],
    "radical": "又",
    "radicalMeaning": "right hand",
    "strokeCount": 3,
    "decomposition": "⿻？又",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 又。",
    "observationHint": "先把「及」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "又"
    ],
    "definition": "to extend; to reach; and; in time",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6bd4",
    "layer": 1,
    "character": "比",
    "rank": 199,
    "pinyin": [
      "bǐ"
    ],
    "radical": "比",
    "radicalMeaning": "compare/compete",
    "strokeCount": 4,
    "decomposition": "⿰匕匕",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 匕、匕。",
    "observationHint": "先觀察「比」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "匕",
      "匕"
    ],
    "definition": "to compare, liken; comparison; than",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-54e1",
    "layer": 1,
    "character": "員",
    "rank": 200,
    "pinyin": [
      "yuán"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 10,
    "decomposition": "⿱口貝",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 口、貝。",
    "observationHint": "先看清楚「員」上下兩層，再按順序落筆。",
    "parts": [
      "口",
      "貝"
    ],
    "definition": "employee; member; personnel, staff",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-89e3",
    "layer": 1,
    "character": "解",
    "rank": 201,
    "pinyin": [
      "jiě"
    ],
    "radical": "角",
    "radicalMeaning": "horn",
    "strokeCount": 13,
    "decomposition": "⿰角⿱刀牛",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 角、刀、牛。",
    "observationHint": "先觀察「解」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "角",
      "刀",
      "牛"
    ],
    "definition": "to explain; to loosen; to unfasten, to untie",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6c34",
    "layer": 1,
    "character": "水",
    "rank": 202,
    "pinyin": [
      "shuǐ"
    ],
    "radical": "水",
    "radicalMeaning": "water",
    "strokeCount": 4,
    "decomposition": "⿻亅？",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 亅。",
    "observationHint": "先把「水」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "亅"
    ],
    "definition": "water, liquid, lotion, juice",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-540d",
    "layer": 1,
    "character": "名",
    "rank": 203,
    "pinyin": [
      "míng"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 6,
    "decomposition": "⿸夕口",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 夕、口。",
    "observationHint": "先看「名」的外框，再注意裡面的部分。",
    "parts": [
      "夕",
      "口"
    ],
    "definition": "name; position, rank, title",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8ad6",
    "layer": 1,
    "character": "論",
    "rank": 205,
    "pinyin": [
      "lùn"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 15,
    "decomposition": "⿰言侖",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、侖。",
    "observationHint": "先觀察「論」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "侖"
    ],
    "definition": "debate; discussion",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8655",
    "layer": 1,
    "character": "處",
    "rank": 206,
    "pinyin": [
      "chù"
    ],
    "radical": "虍",
    "radicalMeaning": "tiger stripes",
    "strokeCount": 11,
    "decomposition": "⿸虍処",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 虍、処。",
    "observationHint": "先看「處」的外框，再注意裡面的部分。",
    "parts": [
      "虍",
      "処"
    ],
    "definition": "to reside at, to live in; place, locale; department",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8d70",
    "layer": 1,
    "character": "走",
    "rank": 207,
    "pinyin": [
      "zǒu"
    ],
    "radical": "走",
    "radicalMeaning": "run",
    "strokeCount": 7,
    "decomposition": "⿱土止",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 土、止。",
    "observationHint": "先看清楚「走」上下兩層，再按順序落筆。",
    "parts": [
      "土",
      "止"
    ],
    "definition": "to walk, to run, to flee",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7fa9",
    "layer": 1,
    "character": "義",
    "rank": 208,
    "pinyin": [
      "yì"
    ],
    "radical": "羊",
    "radicalMeaning": "sheep",
    "strokeCount": 13,
    "decomposition": "⿱羊我",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 羊、我。",
    "observationHint": "先看清楚「義」上下兩層，再按順序落筆。",
    "parts": [
      "羊",
      "我"
    ],
    "definition": "right conduct, propriety; justice",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5404",
    "layer": 1,
    "character": "各",
    "rank": 209,
    "pinyin": [
      "gè"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 6,
    "decomposition": "⿱夂口",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 夂、口。",
    "observationHint": "先看清楚「各」上下兩層，再按順序落筆。",
    "parts": [
      "夂",
      "口"
    ],
    "definition": "individual; each, every; all",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5165",
    "layer": 1,
    "character": "入",
    "rank": 210,
    "pinyin": [
      "rù"
    ],
    "radical": "入",
    "radicalMeaning": "enter",
    "strokeCount": 2,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 入。",
    "observationHint": "先觀察「入」整體輪廓，再留意和 入 有關的部分。",
    "parts": [],
    "definition": "to enter, to come in; to join",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e7e",
    "layer": 1,
    "character": "幾",
    "rank": 211,
    "pinyin": [
      "jǐ"
    ],
    "radical": "幺",
    "radicalMeaning": "short/tiny",
    "strokeCount": 12,
    "decomposition": "⿻⿰幺幺戍",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 幺、幺、戍。",
    "observationHint": "先把「幾」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "幺",
      "幺",
      "戍"
    ],
    "definition": "small table; how many; a few, some",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53e3",
    "layer": 1,
    "character": "口",
    "rank": 212,
    "pinyin": [
      "kǒu"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 3,
    "decomposition": "⿱冂一",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 冂、一。",
    "observationHint": "先看清楚「口」上下兩層，再按順序落筆。",
    "parts": [
      "冂",
      "一"
    ],
    "definition": "mouth; entrance, gate, opening",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a8d",
    "layer": 1,
    "character": "認",
    "rank": 213,
    "pinyin": [
      "rèn"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 14,
    "decomposition": "⿰言忍",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、忍。",
    "observationHint": "先觀察「認」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "忍"
    ],
    "definition": "to know, to recognize, to understand",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-689d",
    "layer": 1,
    "character": "條",
    "rank": 214,
    "pinyin": [
      "tiáo"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 11,
    "decomposition": "⿲亻丨条",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 亻、丨、条。",
    "observationHint": "先把「條」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "亻",
      "丨",
      "条"
    ],
    "definition": "clause, condition; string, stripe",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e73",
    "layer": 1,
    "character": "平",
    "rank": 215,
    "pinyin": [
      "píng"
    ],
    "radical": "广",
    "radicalMeaning": "house on cliff",
    "strokeCount": 5,
    "decomposition": "⿻干丷",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 干、丷。",
    "observationHint": "先把「平」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "干",
      "丷"
    ],
    "definition": "flat, level, even; peaceful",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7e6b",
    "layer": 1,
    "character": "繫",
    "rank": 216,
    "pinyin": [
      "xì"
    ],
    "radical": "糸",
    "radicalMeaning": "silk",
    "strokeCount": 19,
    "decomposition": "⿱毄糸",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 毄、糸。",
    "observationHint": "先看清楚「繫」上下兩層，再按順序落筆。",
    "parts": [
      "毄",
      "糸"
    ],
    "definition": "system; line, link, connection",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6c23",
    "layer": 1,
    "character": "氣",
    "rank": 217,
    "pinyin": [
      "qì"
    ],
    "radical": "气",
    "radicalMeaning": "steam/breath",
    "strokeCount": 10,
    "decomposition": "⿹气米",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 气、米。",
    "observationHint": "先看「氣」的外框，再注意裡面的部分。",
    "parts": [
      "气",
      "米"
    ],
    "definition": "air, gas; steam, vapor; anger",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-984c",
    "layer": 1,
    "character": "題",
    "rank": 218,
    "pinyin": [
      "tí"
    ],
    "radical": "頁",
    "radicalMeaning": "leaf",
    "strokeCount": 18,
    "decomposition": "⿺是頁",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 是、頁。",
    "observationHint": "先看「題」的外框，再注意裡面的部分。",
    "parts": [
      "是",
      "頁"
    ],
    "definition": "forehead; headline, title; theme",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6d3b",
    "layer": 1,
    "character": "活",
    "rank": 219,
    "pinyin": [
      "huó"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 9,
    "decomposition": "⿰氵舌",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、舌。",
    "observationHint": "先觀察「活」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "舌"
    ],
    "definition": "to exist, to live, to survive; living, working",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-723e",
    "layer": 1,
    "character": "爾",
    "rank": 220,
    "pinyin": [
      "ěr"
    ],
    "radical": "爻",
    "radicalMeaning": "mix/twine/cross",
    "strokeCount": 14,
    "decomposition": "⿻？⿰爻爻",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 爻、爻。",
    "observationHint": "先把「爾」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "爻",
      "爻"
    ],
    "definition": "you; that, those; final particle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-66f4",
    "layer": 1,
    "character": "更",
    "rank": 221,
    "pinyin": [
      "gèng"
    ],
    "radical": "曰",
    "radicalMeaning": "say",
    "strokeCount": 7,
    "decomposition": "⿱一⿻曰乂",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、曰、乂。",
    "observationHint": "先看清楚「更」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "曰",
      "乂"
    ],
    "definition": "more, further; to shift, to alternate; to modify",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f46",
    "layer": 1,
    "character": "彆",
    "rank": 222,
    "pinyin": [
      "biè"
    ],
    "radical": "弓",
    "radicalMeaning": "bow",
    "strokeCount": 14,
    "decomposition": "⿱敝弓",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 敝、弓。",
    "observationHint": "先看清楚「彆」上下兩層，再按順序落筆。",
    "parts": [
      "敝",
      "弓"
    ],
    "definition": "awkward",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6253",
    "layer": 1,
    "character": "打",
    "rank": 223,
    "pinyin": [
      "dǎ"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 5,
    "decomposition": "⿰扌丁",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、丁。",
    "observationHint": "先觀察「打」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "丁"
    ],
    "definition": "to attack, to beat, to hit, to strike",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5973",
    "layer": 1,
    "character": "女",
    "rank": 224,
    "pinyin": [
      "nǚ"
    ],
    "radical": "女",
    "radicalMeaning": "woman",
    "strokeCount": 3,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 女。",
    "observationHint": "先觀察「女」整體輪廓，再留意和 女 有關的部分。",
    "parts": [],
    "definition": "woman, girl; female",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8b8a",
    "layer": 1,
    "character": "變",
    "rank": 225,
    "pinyin": [
      "biàn"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 23,
    "decomposition": "⿱䜌攵",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 䜌、攵。",
    "observationHint": "先看清楚「變」上下兩層，再按順序落筆。",
    "parts": [
      "䜌",
      "攵"
    ],
    "definition": "to change, to transform, to alter; rebel",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-56db",
    "layer": 1,
    "character": "四",
    "rank": 226,
    "pinyin": [
      "sì"
    ],
    "radical": "囗",
    "radicalMeaning": "enclosure",
    "strokeCount": 5,
    "decomposition": "⿴囗儿",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 囗、儿。",
    "observationHint": "先看「四」的外框，再注意裡面的部分。",
    "parts": [
      "囗",
      "儿"
    ],
    "definition": "four",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-795e",
    "layer": 1,
    "character": "神",
    "rank": 227,
    "pinyin": [
      "shén"
    ],
    "radical": "礻",
    "radicalMeaning": "sign",
    "strokeCount": 9,
    "decomposition": "⿰礻申",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 礻、申。",
    "observationHint": "先觀察「神」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "礻",
      "申"
    ],
    "definition": "god, spirit; divine, mysterious, supernatural",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7e3d",
    "layer": 1,
    "character": "總",
    "rank": 228,
    "pinyin": [
      "zǒng"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 17,
    "decomposition": "⿰糹悤",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、悤。",
    "observationHint": "先觀察「總」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "悤"
    ],
    "definition": "to gather, to collect; overall, altogether",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f55",
    "layer": 1,
    "character": "何",
    "rank": 229,
    "pinyin": [
      "hé"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 7,
    "decomposition": "⿰亻可",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、可。",
    "observationHint": "先觀察「何」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "可"
    ],
    "definition": "what, why, where, which, how",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-96fb",
    "layer": 1,
    "character": "電",
    "rank": 230,
    "pinyin": [
      "diàn"
    ],
    "radical": "雨",
    "radicalMeaning": "rain",
    "strokeCount": 13,
    "decomposition": "⿱雨电",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 雨、电。",
    "observationHint": "先看清楚「電」上下兩層，再按順序落筆。",
    "parts": [
      "雨",
      "电"
    ],
    "definition": "electricity; electric; lightning",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6578",
    "layer": 1,
    "character": "數",
    "rank": 231,
    "pinyin": [
      "shù"
    ],
    "radical": "攵",
    "radicalMeaning": "knock",
    "strokeCount": 15,
    "decomposition": "⿰婁攵",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 婁、攵。",
    "observationHint": "先觀察「數」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "婁",
      "攵"
    ],
    "definition": "count, number, several",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b89",
    "layer": 1,
    "character": "安",
    "rank": 232,
    "pinyin": [
      "ān"
    ],
    "radical": "宀",
    "radicalMeaning": "roof",
    "strokeCount": 6,
    "decomposition": "⿱宀女",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、女。",
    "observationHint": "先看清楚「安」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "女"
    ],
    "definition": "peaceful, tranquil, quiet",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c11",
    "layer": 1,
    "character": "少",
    "rank": 233,
    "pinyin": [
      "shǎo"
    ],
    "radical": "小",
    "radicalMeaning": "small",
    "strokeCount": 4,
    "decomposition": "⿱小丿",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 小、丿。",
    "observationHint": "先看清楚「少」上下兩層，再按順序落筆。",
    "parts": [
      "小",
      "丿"
    ],
    "definition": "few, little; less; inadequate",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5831",
    "layer": 1,
    "character": "報",
    "rank": 234,
    "pinyin": [
      "bào"
    ],
    "radical": "土",
    "radicalMeaning": "earth",
    "strokeCount": 12,
    "decomposition": "⿰幸⿱卩又",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 幸、卩、又。",
    "observationHint": "先觀察「報」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "幸",
      "卩",
      "又"
    ],
    "definition": "to announce, to report; newspaper; payback, revenge",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7e94",
    "layer": 1,
    "character": "纔",
    "rank": 235,
    "pinyin": [
      "cái"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 23,
    "decomposition": "⿰糹毚",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、毚。",
    "observationHint": "先觀察「纔」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "毚"
    ],
    "definition": "talent, ability; only, just",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7d50",
    "layer": 1,
    "character": "結",
    "rank": 236,
    "pinyin": [
      "jié"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 12,
    "decomposition": "⿰糹吉",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、吉。",
    "observationHint": "先觀察「結」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "吉"
    ],
    "definition": "knot, tie; to connect, to join",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53cd",
    "layer": 1,
    "character": "反",
    "rank": 237,
    "pinyin": [
      "fǎn"
    ],
    "radical": "又",
    "radicalMeaning": "right hand",
    "strokeCount": 4,
    "decomposition": "⿸厂又",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 厂、又。",
    "observationHint": "先看「反」的外框，再注意裡面的部分。",
    "parts": [
      "厂",
      "又"
    ],
    "definition": "reverse, opposite; contrary, anti-",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53d7",
    "layer": 1,
    "character": "受",
    "rank": 238,
    "pinyin": [
      "shòu"
    ],
    "radical": "又",
    "radicalMeaning": "right hand",
    "strokeCount": 8,
    "decomposition": "⿳爫冖又",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 爫、冖、又。",
    "observationHint": "先把「受」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "爫",
      "冖",
      "又"
    ],
    "definition": "to receive, to get, to accept; to bear",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-76ee",
    "layer": 1,
    "character": "目",
    "rank": 239,
    "pinyin": [
      "mù"
    ],
    "radical": "目",
    "radicalMeaning": "eye",
    "strokeCount": 5,
    "decomposition": "⿴口二",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 口、二。",
    "observationHint": "先看「目」的外框，再注意裡面的部分。",
    "parts": [
      "口",
      "二"
    ],
    "definition": "eye; to look, to see; division, topic",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-592a",
    "layer": 1,
    "character": "太",
    "rank": 240,
    "pinyin": [
      "tài"
    ],
    "radical": "大",
    "radicalMeaning": "big",
    "strokeCount": 4,
    "decomposition": "⿵大丶",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 大、丶。",
    "observationHint": "先看「太」的外框，再注意裡面的部分。",
    "parts": [
      "大",
      "丶"
    ],
    "definition": "very, too much; big; extreme",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-91cf",
    "layer": 1,
    "character": "量",
    "rank": 241,
    "pinyin": [
      "liàng"
    ],
    "radical": "里",
    "radicalMeaning": "village/mile",
    "strokeCount": 12,
    "decomposition": "⿱旦里",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 旦、里。",
    "observationHint": "先看清楚「量」上下兩層，再按順序落筆。",
    "parts": [
      "旦",
      "里"
    ],
    "definition": "measure, volume; amount, quantity",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-518d",
    "layer": 1,
    "character": "再",
    "rank": 242,
    "pinyin": [
      "zài"
    ],
    "radical": "冂",
    "radicalMeaning": "upside down box",
    "strokeCount": 6,
    "decomposition": "⿱一冉",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、冉。",
    "observationHint": "先看清楚「再」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "冉"
    ],
    "definition": "again, twice, re-",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-611f",
    "layer": 1,
    "character": "感",
    "rank": 243,
    "pinyin": [
      "gǎn"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 13,
    "decomposition": "⿱咸心",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 咸、心。",
    "observationHint": "先看清楚「感」上下兩層，再按順序落筆。",
    "parts": [
      "咸",
      "心"
    ],
    "definition": "to affect, to move, to touch; to perceive, to sense",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5efa",
    "layer": 1,
    "character": "建",
    "rank": 244,
    "pinyin": [
      "jiàn"
    ],
    "radical": "廴",
    "radicalMeaning": "long stride",
    "strokeCount": 8,
    "decomposition": "⿺廴聿",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 廴、聿。",
    "observationHint": "先看「建」的外框，再注意裡面的部分。",
    "parts": [
      "廴",
      "聿"
    ],
    "definition": "to build, to erect; to establish, to found",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-52d9",
    "layer": 1,
    "character": "務",
    "rank": 245,
    "pinyin": [
      "wù"
    ],
    "radical": "力",
    "radicalMeaning": "power/force",
    "strokeCount": 11,
    "decomposition": "⿰矛务",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 矛、务。",
    "observationHint": "先觀察「務」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "矛",
      "务"
    ],
    "definition": "affairs, business; should; must",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-505a",
    "layer": 1,
    "character": "做",
    "rank": 246,
    "pinyin": [
      "zuò"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 11,
    "decomposition": "⿰亻故",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、故。",
    "observationHint": "先觀察「做」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "故"
    ],
    "definition": "to work, to make; to act",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-63a5",
    "layer": 1,
    "character": "接",
    "rank": 247,
    "pinyin": [
      "jiē"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 11,
    "decomposition": "⿰扌妾",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、妾。",
    "observationHint": "先觀察「接」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "妾"
    ],
    "definition": "to connect, to join; to receive, to meet, to answer the phone",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5fc5",
    "layer": 1,
    "character": "必",
    "rank": 248,
    "pinyin": [
      "bì"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 5,
    "decomposition": "⿻心丿",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 心、丿。",
    "observationHint": "先把「必」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "心",
      "丿"
    ],
    "definition": "surely, certainly; must; will",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5834",
    "layer": 1,
    "character": "場",
    "rank": 249,
    "pinyin": [
      "chǎng"
    ],
    "radical": "土",
    "radicalMeaning": "earth",
    "strokeCount": 12,
    "decomposition": "⿰土昜",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 土、昜。",
    "observationHint": "先觀察「場」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "土",
      "昜"
    ],
    "definition": "field, open space; market, square; stage",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4ef6",
    "layer": 1,
    "character": "件",
    "rank": 250,
    "pinyin": [
      "jiàn"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 6,
    "decomposition": "⿰亻牛",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、牛。",
    "observationHint": "先觀察「件」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "牛"
    ],
    "definition": "item, matter; component, part; measure word for events",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a08",
    "layer": 1,
    "character": "計",
    "rank": 251,
    "pinyin": [
      "jì"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 9,
    "decomposition": "⿰言十",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、十。",
    "observationHint": "先觀察「計」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "十"
    ],
    "definition": "to calculate, to count; to plan, to reckon; plot, scheme",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7ba1",
    "layer": 1,
    "character": "管",
    "rank": 252,
    "pinyin": [
      "guǎn"
    ],
    "radical": "⺮",
    "radicalMeaning": "bamboo",
    "strokeCount": 14,
    "decomposition": "⿱⺮官",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺮、官。",
    "observationHint": "先看清楚「管」上下兩層，再按順序落筆。",
    "parts": [
      "⺮",
      "官"
    ],
    "definition": "tube, pipe, duct; to manage, to control",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-671f",
    "layer": 1,
    "character": "期",
    "rank": 253,
    "pinyin": [
      "qī"
    ],
    "radical": "月",
    "radicalMeaning": "moon",
    "strokeCount": 12,
    "decomposition": "⿰其月",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 其、月。",
    "observationHint": "先觀察「期」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "其",
      "月"
    ],
    "definition": "a period of time; date, time; phase",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e02",
    "layer": 1,
    "character": "市",
    "rank": 254,
    "pinyin": [
      "shì"
    ],
    "radical": "巾",
    "radicalMeaning": "turban/scarf",
    "strokeCount": 5,
    "decomposition": "⿱亠巾",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 亠、巾。",
    "observationHint": "先看清楚「市」上下兩層，再按順序落筆。",
    "parts": [
      "亠",
      "巾"
    ],
    "definition": "city, town; market, fair; to trade",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-76f4",
    "layer": 1,
    "character": "直",
    "rank": 255,
    "pinyin": [
      "zhí"
    ],
    "radical": "目",
    "radicalMeaning": "eye",
    "strokeCount": 8,
    "decomposition": "⿳十目一",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 十、目、一。",
    "observationHint": "先把「直」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "十",
      "目",
      "一"
    ],
    "definition": "straight, vertical; candid, direct, frank",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5fb7",
    "layer": 1,
    "character": "德",
    "rank": 256,
    "pinyin": [
      "dé"
    ],
    "radical": "彳",
    "radicalMeaning": "step",
    "strokeCount": 15,
    "decomposition": "⿰彳⿱⿱十罒⿱一心",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 彳、十、罒、一。",
    "observationHint": "先觀察「德」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "彳",
      "十",
      "罒",
      "一"
    ],
    "definition": "ethics, morality; compassion, kindness",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8cc7",
    "layer": 1,
    "character": "資",
    "rank": 257,
    "pinyin": [
      "zī"
    ],
    "radical": "貝",
    "radicalMeaning": "shell",
    "strokeCount": 13,
    "decomposition": "⿱次貝",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 次、貝。",
    "observationHint": "先看清楚「資」上下兩層，再按順序落筆。",
    "parts": [
      "次",
      "貝"
    ],
    "definition": "wealth, property, capital",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-547d",
    "layer": 1,
    "character": "命",
    "rank": 258,
    "pinyin": [
      "mìng"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 8,
    "decomposition": "⿹令口",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 令、口。",
    "observationHint": "先看「命」的外框，再注意裡面的部分。",
    "parts": [
      "令",
      "口"
    ],
    "definition": "life; destiny, fate, luck; an order, instruction",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c71",
    "layer": 1,
    "character": "山",
    "rank": 259,
    "pinyin": [
      "shān"
    ],
    "radical": "山",
    "radicalMeaning": "mountain",
    "strokeCount": 3,
    "decomposition": "⿶凵丨",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 凵、丨。",
    "observationHint": "先看「山」的外框，再注意裡面的部分。",
    "parts": [
      "凵",
      "丨"
    ],
    "definition": "mountain, hill, peak",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-91d1",
    "layer": 1,
    "character": "金",
    "rank": 260,
    "pinyin": [
      "jīn"
    ],
    "radical": "金",
    "radicalMeaning": "metal/gold",
    "strokeCount": 8,
    "decomposition": "⿱人⿻王丷",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 人、王、丷。",
    "observationHint": "先看清楚「金」上下兩層，再按順序落筆。",
    "parts": [
      "人",
      "王",
      "丷"
    ],
    "definition": "gold, metal; money",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6307",
    "layer": 1,
    "character": "指",
    "rank": 261,
    "pinyin": [
      "zhǐ"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 9,
    "decomposition": "⿰扌旨",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、旨。",
    "observationHint": "先觀察「指」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "旨"
    ],
    "definition": "finger, toe; to point, to indicate",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-514b",
    "layer": 1,
    "character": "克",
    "rank": 262,
    "pinyin": [
      "kè"
    ],
    "radical": "儿",
    "radicalMeaning": "legs",
    "strokeCount": 7,
    "decomposition": "⿱十兄",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 十、兄。",
    "observationHint": "先看清楚「克」上下兩層，再按順序落筆。",
    "parts": [
      "十",
      "兄"
    ],
    "definition": "to subdue, to restrain, to overcome; used in transliterations",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a31",
    "layer": 1,
    "character": "許",
    "rank": 263,
    "pinyin": [
      "xǔ"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 11,
    "decomposition": "⿰言午",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、午。",
    "observationHint": "先觀察「許」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "午"
    ],
    "definition": "to consent, to permit; to promise, to betroth",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7d71",
    "layer": 1,
    "character": "統",
    "rank": 264,
    "pinyin": [
      "tǒng"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 12,
    "decomposition": "⿰糹充",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、充。",
    "observationHint": "先觀察「統」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "充"
    ],
    "definition": "to govern, to command; to gather, to unite",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5340",
    "layer": 1,
    "character": "區",
    "rank": 265,
    "pinyin": [
      "qū"
    ],
    "radical": "匸",
    "radicalMeaning": "hiding enclosure",
    "strokeCount": 11,
    "decomposition": "⿷匸品",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 匸、品。",
    "observationHint": "先看「區」的外框，再注意裡面的部分。",
    "parts": [
      "匸",
      "品"
    ],
    "definition": "area, district, region, ward; surname",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4fdd",
    "layer": 1,
    "character": "保",
    "rank": 266,
    "pinyin": [
      "bǎo"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 9,
    "decomposition": "⿰亻呆",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、呆。",
    "observationHint": "先觀察「保」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "呆"
    ],
    "definition": "to safeguard, to protect, to defend, to care for",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-81f3",
    "layer": 1,
    "character": "至",
    "rank": 267,
    "pinyin": [
      "zhì"
    ],
    "radical": "至",
    "radicalMeaning": "arrive",
    "strokeCount": 6,
    "decomposition": "⿱⿱一厶土",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、厶、土。",
    "observationHint": "先看清楚「至」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "厶",
      "土"
    ],
    "definition": "reach, arrive; very, extremely",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-968a",
    "layer": 1,
    "character": "隊",
    "rank": 268,
    "pinyin": [
      "duì"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 11,
    "decomposition": "⿰阝㒸",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 阝、㒸。",
    "observationHint": "先觀察「隊」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "阝",
      "㒸"
    ],
    "definition": "team, group, band, army unit; measure word for groups of people",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f62",
    "layer": 1,
    "character": "形",
    "rank": 269,
    "pinyin": [
      "xíng"
    ],
    "radical": "彡",
    "radicalMeaning": "bristle/beard",
    "strokeCount": 7,
    "decomposition": "⿰开彡",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 开、彡。",
    "observationHint": "先觀察「形」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "开",
      "彡"
    ],
    "definition": "form, shape; to appear; to describe; to look",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-793e",
    "layer": 1,
    "character": "社",
    "rank": 270,
    "pinyin": [
      "shè"
    ],
    "radical": "礻",
    "radicalMeaning": "sign",
    "strokeCount": 7,
    "decomposition": "⿰礻土",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 礻、土。",
    "observationHint": "先觀察「社」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "礻",
      "土"
    ],
    "definition": "group, organization, society; a god of the soil",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4fbf",
    "layer": 1,
    "character": "便",
    "rank": 271,
    "pinyin": [
      "biàn"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 9,
    "decomposition": "⿰亻更",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、更。",
    "observationHint": "先觀察「便」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "更"
    ],
    "definition": "easy, convenient; expedient",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7a7a",
    "layer": 1,
    "character": "空",
    "rank": 272,
    "pinyin": [
      "kōng"
    ],
    "radical": "穴",
    "radicalMeaning": "cave",
    "strokeCount": 8,
    "decomposition": "⿱穴工",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 穴、工。",
    "observationHint": "先看清楚「空」上下兩層，再按順序落筆。",
    "parts": [
      "穴",
      "工"
    ],
    "definition": "hollow, empty, deserted, bare",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6c7a",
    "layer": 1,
    "character": "決",
    "rank": 273,
    "pinyin": [
      "jué"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 7,
    "decomposition": "⿰氵夬",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、夬。",
    "observationHint": "先觀察「決」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "夬"
    ],
    "definition": "to decide, to determine, to judge",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6cbb",
    "layer": 1,
    "character": "治",
    "rank": 274,
    "pinyin": [
      "zhì"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 8,
    "decomposition": "⿰氵台",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、台。",
    "observationHint": "先觀察「治」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "台"
    ],
    "definition": "to administer, to govern, to regulate",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c55",
    "layer": 1,
    "character": "展",
    "rank": 275,
    "pinyin": [
      "zhǎn"
    ],
    "radical": "尸",
    "radicalMeaning": "corpse",
    "strokeCount": 10,
    "decomposition": "⿸尸⿻？衣",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 尸、衣。",
    "observationHint": "先看「展」的外框，再注意裡面的部分。",
    "parts": [
      "尸",
      "衣"
    ],
    "definition": "to open, to unfold; to extend, to stretch",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-99ac",
    "layer": 1,
    "character": "馬",
    "rank": 276,
    "pinyin": [
      "mǎ"
    ],
    "radical": "馬",
    "radicalMeaning": "horse",
    "strokeCount": 10,
    "decomposition": "⿹？灬",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 灬。",
    "observationHint": "先看「馬」的外框，再注意裡面的部分。",
    "parts": [
      "灬"
    ],
    "definition": "horse; surname",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-79d1",
    "layer": 1,
    "character": "科",
    "rank": 277,
    "pinyin": [
      "kē"
    ],
    "radical": "禾",
    "radicalMeaning": "grain",
    "strokeCount": 9,
    "decomposition": "⿰禾斗",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 禾、斗。",
    "observationHint": "先觀察「科」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "禾",
      "斗"
    ],
    "definition": "section, department; field, branch; science",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53f8",
    "layer": 1,
    "character": "司",
    "rank": 278,
    "pinyin": [
      "sī"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 5,
    "decomposition": "⿹？口",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 口。",
    "observationHint": "先看「司」的外框，再注意裡面的部分。",
    "parts": [
      "口"
    ],
    "definition": "to take charge of, to control, to manage; officer",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e94",
    "layer": 1,
    "character": "五",
    "rank": 279,
    "pinyin": [
      "wǔ"
    ],
    "radical": "二",
    "radicalMeaning": "two",
    "strokeCount": 4,
    "decomposition": "⿴二？",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 二。",
    "observationHint": "先看「五」的外框，再注意裡面的部分。",
    "parts": [
      "二"
    ],
    "definition": "five; surname",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-57fa",
    "layer": 1,
    "character": "基",
    "rank": 280,
    "pinyin": [
      "jī"
    ],
    "radical": "土",
    "radicalMeaning": "earth",
    "strokeCount": 11,
    "decomposition": "⿱其土",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 其、土。",
    "observationHint": "先看清楚「基」上下兩層，再按順序落筆。",
    "parts": [
      "其",
      "土"
    ],
    "definition": "foundation, base",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-773c",
    "layer": 1,
    "character": "眼",
    "rank": 281,
    "pinyin": [
      "yǎn"
    ],
    "radical": "目",
    "radicalMeaning": "eye",
    "strokeCount": 11,
    "decomposition": "⿰目艮",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 目、艮。",
    "observationHint": "先觀察「眼」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "目",
      "艮"
    ],
    "definition": "eyelet, hole, opening",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-66f8",
    "layer": 1,
    "character": "書",
    "rank": 282,
    "pinyin": [
      "shū"
    ],
    "radical": "曰",
    "radicalMeaning": "say",
    "strokeCount": 10,
    "decomposition": "⿱聿曰",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 聿、曰。",
    "observationHint": "先看清楚「書」上下兩層，再按順序落筆。",
    "parts": [
      "聿",
      "曰"
    ],
    "definition": "book, letter, document; writing",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-975e",
    "layer": 1,
    "character": "非",
    "rank": 283,
    "pinyin": [
      "fēi"
    ],
    "radical": "非",
    "radicalMeaning": "wrong",
    "strokeCount": 8,
    "decomposition": "⿰？？",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。",
    "observationHint": "先觀察「非」左右兩邊的分工，再把位置寫穩。",
    "parts": [],
    "definition": "not, negative, non-; to oppose",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5247",
    "layer": 1,
    "character": "則",
    "rank": 284,
    "pinyin": [
      "zé"
    ],
    "radical": "刂",
    "radicalMeaning": "knife",
    "strokeCount": 9,
    "decomposition": "⿰貝刂",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 貝、刂。",
    "observationHint": "先觀察「則」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "貝",
      "刂"
    ],
    "definition": "rule, law, regulation; grades",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-807d",
    "layer": 1,
    "character": "聽",
    "rank": 285,
    "pinyin": [
      "tīng"
    ],
    "radical": "耳",
    "radicalMeaning": "ear",
    "strokeCount": 22,
    "decomposition": "⿰⿹耳王⿱⿱十罒⿱一心",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 耳、王、十、罒。",
    "observationHint": "先觀察「聽」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "耳",
      "王",
      "十",
      "罒"
    ],
    "definition": "to hear, to listen; to understand; to obey",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-767d",
    "layer": 1,
    "character": "白",
    "rank": 286,
    "pinyin": [
      "bái"
    ],
    "radical": "白",
    "radicalMeaning": "white",
    "strokeCount": 5,
    "decomposition": "⿻？日",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 日。",
    "observationHint": "先把「白」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "日"
    ],
    "definition": "white; clear, pure, unblemished; bright",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-537b",
    "layer": 1,
    "character": "卻",
    "rank": 287,
    "pinyin": [
      "què"
    ],
    "radical": "卩",
    "radicalMeaning": "seal",
    "strokeCount": 9,
    "decomposition": "⿰谷卩",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 谷、卩。",
    "observationHint": "先觀察「卻」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "谷",
      "卩"
    ],
    "definition": "still, but; decline; retreat",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-754c",
    "layer": 1,
    "character": "界",
    "rank": 288,
    "pinyin": [
      "jiè"
    ],
    "radical": "田",
    "radicalMeaning": "field",
    "strokeCount": 9,
    "decomposition": "⿱田介",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 田、介。",
    "observationHint": "先看清楚「界」上下兩層，再按順序落筆。",
    "parts": [
      "田",
      "介"
    ],
    "definition": "boundary, limit; domain; society, the world",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9054",
    "layer": 1,
    "character": "達",
    "rank": 289,
    "pinyin": [
      "dá"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 12,
    "decomposition": "⿺辶羍",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、羍。",
    "observationHint": "先看「達」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "羍"
    ],
    "definition": "to reach, to arrive at; intelligent",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5149",
    "layer": 1,
    "character": "光",
    "rank": 290,
    "pinyin": [
      "guāng"
    ],
    "radical": "儿",
    "radicalMeaning": "legs",
    "strokeCount": 6,
    "decomposition": "⿱⺌兀",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺌、兀。",
    "observationHint": "先看清楚「光」上下兩層，再按順序落筆。",
    "parts": [
      "⺌",
      "兀"
    ],
    "definition": "light; bright, brilliant; only, merely",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-653e",
    "layer": 1,
    "character": "放",
    "rank": 291,
    "pinyin": [
      "fàng"
    ],
    "radical": "攵",
    "radicalMeaning": "knock",
    "strokeCount": 8,
    "decomposition": "⿰方攵",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 方、攵。",
    "observationHint": "先觀察「放」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "方",
      "攵"
    ],
    "definition": "to release, to liberate, to free",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f37",
    "layer": 1,
    "character": "強",
    "rank": 292,
    "pinyin": [
      "qiáng"
    ],
    "radical": "弓",
    "radicalMeaning": "bow",
    "strokeCount": 11,
    "decomposition": "⿰弓⿱厶虫",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 弓、厶、虫。",
    "observationHint": "先觀察「強」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "弓",
      "厶",
      "虫"
    ],
    "definition": "strong, powerful, energetic",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-50cf",
    "layer": 1,
    "character": "像",
    "rank": 294,
    "pinyin": [
      "xiàng"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 13,
    "decomposition": "⿰亻象",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、象。",
    "observationHint": "先觀察「像」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "象"
    ],
    "definition": "picture, image, figure; to resemble",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-96e3",
    "layer": 1,
    "character": "難",
    "rank": 295,
    "pinyin": [
      "nán"
    ],
    "radical": "隹",
    "radicalMeaning": "small bird",
    "strokeCount": 19,
    "decomposition": "⿰堇隹",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 堇、隹。",
    "observationHint": "先觀察「難」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "堇",
      "隹"
    ],
    "definition": "hard, difficult, arduous; unable",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e14",
    "layer": 1,
    "character": "且",
    "rank": 296,
    "pinyin": [
      "qiě"
    ],
    "radical": "一",
    "radicalMeaning": "one",
    "strokeCount": 5,
    "decomposition": "⿱月一",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 月、一。",
    "observationHint": "先看清楚「且」上下兩層，再按順序落筆。",
    "parts": [
      "月",
      "一"
    ],
    "definition": "moreover, also (post-subject); about to, will soon (pre-verb)",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6b0a",
    "layer": 1,
    "character": "權",
    "rank": 297,
    "pinyin": [
      "quán"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 22,
    "decomposition": "⿰木雚",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、雚。",
    "observationHint": "先觀察「權」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "雚"
    ],
    "definition": "authority, power, right",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-601d",
    "layer": 1,
    "character": "思",
    "rank": 298,
    "pinyin": [
      "sī"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 9,
    "decomposition": "⿱田心",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 田、心。",
    "observationHint": "先看清楚「思」上下兩層，再按順序落筆。",
    "parts": [
      "田",
      "心"
    ],
    "definition": "to think, to ponder, to consider; final particle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-738b",
    "layer": 1,
    "character": "王",
    "rank": 299,
    "pinyin": [
      "wáng"
    ],
    "radical": "王",
    "radicalMeaning": "jade",
    "strokeCount": 4,
    "decomposition": "⿱一土",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、土。",
    "observationHint": "先看清楚「王」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "土"
    ],
    "definition": "king, ruler; royal; surname",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8c61",
    "layer": 1,
    "character": "象",
    "rank": 300,
    "pinyin": [
      "xiàng"
    ],
    "radical": "豕",
    "radicalMeaning": "pig",
    "strokeCount": 11,
    "decomposition": "⿳⺈口豕",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 ⺈、口、豕。",
    "observationHint": "先把「象」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "⺈",
      "口",
      "豕"
    ],
    "definition": "elephant; ivory; figure, image",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b8c",
    "layer": 1,
    "character": "完",
    "rank": 301,
    "pinyin": [
      "wán"
    ],
    "radical": "宀",
    "radicalMeaning": "roof",
    "strokeCount": 7,
    "decomposition": "⿱宀元",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、元。",
    "observationHint": "先看清楚「完」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "元"
    ],
    "definition": "to complete, to finish, to settle; whole",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a2d",
    "layer": 1,
    "character": "設",
    "rank": 302,
    "pinyin": [
      "shè"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 11,
    "decomposition": "⿰言殳",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、殳。",
    "observationHint": "先觀察「設」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "殳"
    ],
    "definition": "to build, to design; to establish; to offer",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f0f",
    "layer": 1,
    "character": "式",
    "rank": 303,
    "pinyin": [
      "shì"
    ],
    "radical": "弋",
    "radicalMeaning": "arrow",
    "strokeCount": 6,
    "decomposition": "⿹弋工",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 弋、工。",
    "observationHint": "先看「式」的外框，再注意裡面的部分。",
    "parts": [
      "弋",
      "工"
    ],
    "definition": "formula, pattern, rule, style, system",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8272",
    "layer": 1,
    "character": "色",
    "rank": 304,
    "pinyin": [
      "sè"
    ],
    "radical": "色",
    "radicalMeaning": "color/prettiness",
    "strokeCount": 6,
    "decomposition": "⿱⺈巴",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺈、巴。",
    "observationHint": "先看清楚「色」上下兩層，再按順序落筆。",
    "parts": [
      "⺈",
      "巴"
    ],
    "definition": "color, tint, hue, shade; beauty, form; sex",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8def",
    "layer": 1,
    "character": "路",
    "rank": 305,
    "pinyin": [
      "lù"
    ],
    "radical": "足",
    "radicalMeaning": "foot",
    "strokeCount": 13,
    "decomposition": "⿰足各",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 足、各。",
    "observationHint": "先觀察「路」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "足",
      "各"
    ],
    "definition": "road, path, street; journey",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a18",
    "layer": 1,
    "character": "記",
    "rank": 306,
    "pinyin": [
      "jì"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 10,
    "decomposition": "⿰言己",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、己。",
    "observationHint": "先觀察「記」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "己"
    ],
    "definition": "mark, sign; to note, to record",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5357",
    "layer": 1,
    "character": "南",
    "rank": 307,
    "pinyin": [
      "nán"
    ],
    "radical": "十",
    "radicalMeaning": "ten",
    "strokeCount": 9,
    "decomposition": "⿱十⿵冂⿱丷干",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 十、冂、丷、干。",
    "observationHint": "先看清楚「南」上下兩層，再按順序落筆。",
    "parts": [
      "十",
      "冂",
      "丷",
      "干"
    ],
    "definition": "south; southern; southward",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-54c1",
    "layer": 1,
    "character": "品",
    "rank": 308,
    "pinyin": [
      "pǐn"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 9,
    "decomposition": "⿱口⿰口口",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 口、口、口。",
    "observationHint": "先看清楚「品」上下兩層，再按順序落筆。",
    "parts": [
      "口",
      "口",
      "口"
    ],
    "definition": "article, good, product; commodity; quality, character",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f4f",
    "layer": 1,
    "character": "住",
    "rank": 309,
    "pinyin": [
      "zhù"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 7,
    "decomposition": "⿰亻主",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、主。",
    "observationHint": "先觀察「住」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "主"
    ],
    "definition": "to reside, to live at, to dwell, to lodge; to stop",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "base-ready",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-544a",
    "layer": 2,
    "character": "告",
    "rank": 310,
    "pinyin": [
      "gào"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 7,
    "decomposition": "⿱牛口",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 牛、口。",
    "observationHint": "先看清楚「告」上下兩層，再按順序落筆。",
    "parts": [
      "牛",
      "口"
    ],
    "definition": "to tell, to inform, to announce; to accuse",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-985e",
    "layer": 2,
    "character": "類",
    "rank": 311,
    "pinyin": [
      "lèi"
    ],
    "radical": "頁",
    "radicalMeaning": "leaf",
    "strokeCount": 19,
    "decomposition": "⿰⿱米犬頁",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 米、犬、頁。",
    "observationHint": "先觀察「類」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "米",
      "犬",
      "頁"
    ],
    "definition": "category, class, group, kind; similar to; to resemble",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6c42",
    "layer": 2,
    "character": "求",
    "rank": 312,
    "pinyin": [
      "qiú"
    ],
    "radical": "氺",
    "radicalMeaning": "water",
    "strokeCount": 7,
    "decomposition": "⿻一氺",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 一、氺。",
    "observationHint": "先把「求」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "一",
      "氺"
    ],
    "definition": "to seek; to request, to demand; to beseech, to beg for",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-64da",
    "layer": 2,
    "character": "據",
    "rank": 313,
    "pinyin": [
      "jù"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 16,
    "decomposition": "⿰扌豦",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、豦。",
    "observationHint": "先觀察「據」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "豦"
    ],
    "definition": "to possess, to occupy; position; base",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7a0b",
    "layer": 2,
    "character": "程",
    "rank": 314,
    "pinyin": [
      "chéng"
    ],
    "radical": "禾",
    "radicalMeaning": "grain",
    "strokeCount": 12,
    "decomposition": "⿰禾呈",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 禾、呈。",
    "observationHint": "先觀察「程」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "禾",
      "呈"
    ],
    "definition": "process, rules; journey, trip; agenda, schedule",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5317",
    "layer": 2,
    "character": "北",
    "rank": 315,
    "pinyin": [
      "běi"
    ],
    "radical": "匕",
    "radicalMeaning": "spoon",
    "strokeCount": 5,
    "decomposition": "⿰？匕",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 匕。",
    "observationHint": "先觀察「北」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "匕"
    ],
    "definition": "north; northern; northward",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-908a",
    "layer": 2,
    "character": "邊",
    "rank": 316,
    "pinyin": [
      "biān"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 18,
    "decomposition": "⿺辶臱",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、臱。",
    "observationHint": "先看「邊」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "臱"
    ],
    "definition": "border, edge, margin, side",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6b7b",
    "layer": 2,
    "character": "死",
    "rank": 317,
    "pinyin": [
      "sǐ"
    ],
    "radical": "歹",
    "radicalMeaning": "death/decay",
    "strokeCount": 6,
    "decomposition": "⿸歹匕",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 歹、匕。",
    "observationHint": "先看「死」的外框，再注意裡面的部分。",
    "parts": [
      "歹",
      "匕"
    ],
    "definition": "dead; death; impassable, inflexible",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f35",
    "layer": 2,
    "character": "張",
    "rank": 318,
    "pinyin": [
      "zhāng"
    ],
    "radical": "弓",
    "radicalMeaning": "bow",
    "strokeCount": 11,
    "decomposition": "⿰弓長",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 弓、長。",
    "observationHint": "先觀察「張」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "弓",
      "長"
    ],
    "definition": "to display; to expand, to open; to stretch; a sheet of paper",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a72",
    "layer": 2,
    "character": "該",
    "rank": 319,
    "pinyin": [
      "gāi"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 13,
    "decomposition": "⿰言亥",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、亥。",
    "observationHint": "先觀察「該」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "亥"
    ],
    "definition": "should, ought to, must",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4ea4",
    "layer": 2,
    "character": "交",
    "rank": 320,
    "pinyin": [
      "jiāo"
    ],
    "radical": "亠",
    "radicalMeaning": "lid",
    "strokeCount": 6,
    "decomposition": "⿱六乂",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 六、乂。",
    "observationHint": "先看清楚「交」上下兩層，再按順序落筆。",
    "parts": [
      "六",
      "乂"
    ],
    "definition": "to connect; to deliver, to exchange; to intersect; to mix",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-898f",
    "layer": 2,
    "character": "規",
    "rank": 321,
    "pinyin": [
      "guī"
    ],
    "radical": "見",
    "radicalMeaning": "see",
    "strokeCount": 11,
    "decomposition": "⿰夫見",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 夫、見。",
    "observationHint": "先觀察「規」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "夫",
      "見"
    ],
    "definition": "rules, regulations, customs, law",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-842c",
    "layer": 2,
    "character": "萬",
    "rank": 322,
    "pinyin": [
      "wàn"
    ],
    "radical": "艹",
    "radicalMeaning": "grass",
    "strokeCount": 13,
    "decomposition": "⿱艹禺",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 艹、禺。",
    "observationHint": "先看清楚「萬」上下兩層，再按順序落筆。",
    "parts": [
      "艹",
      "禺"
    ],
    "definition": "ten thousand; innumerable",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53d6",
    "layer": 2,
    "character": "取",
    "rank": 323,
    "pinyin": [
      "qǔ"
    ],
    "radical": "又",
    "radicalMeaning": "right hand",
    "strokeCount": 8,
    "decomposition": "⿰耳又",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 耳、又。",
    "observationHint": "先觀察「取」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "耳",
      "又"
    ],
    "definition": "to take, to receive, to obtain; to select",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-62c9",
    "layer": 2,
    "character": "拉",
    "rank": 324,
    "pinyin": [
      "lā"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 8,
    "decomposition": "⿰扌立",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、立。",
    "observationHint": "先觀察「拉」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "立"
    ],
    "definition": "to pull, to drag; to seize, to hold; to lengthen; to play (a violin)",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-683c",
    "layer": 2,
    "character": "格",
    "rank": 325,
    "pinyin": [
      "gé"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 10,
    "decomposition": "⿰木各",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、各。",
    "observationHint": "先觀察「格」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "各"
    ],
    "definition": "form, pattern, standard",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-671b",
    "layer": 2,
    "character": "望",
    "rank": 326,
    "pinyin": [
      "wàng"
    ],
    "radical": "月",
    "radicalMeaning": "moon",
    "strokeCount": 11,
    "decomposition": "⿱⿰亡月王",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 亡、月、王。",
    "observationHint": "先看清楚「望」上下兩層，再按順序落筆。",
    "parts": [
      "亡",
      "月",
      "王"
    ],
    "definition": "to expect, to hope, to look forward to",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-89ba",
    "layer": 2,
    "character": "覺",
    "rank": 327,
    "pinyin": [
      "jué"
    ],
    "radical": "見",
    "radicalMeaning": "see",
    "strokeCount": 20,
    "decomposition": "⿱？見",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 見。",
    "observationHint": "先看清楚「覺」上下兩層，再按順序落筆。",
    "parts": [
      "見"
    ],
    "definition": "conscious; to nap, to sleep; to wake up",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8853",
    "layer": 2,
    "character": "術",
    "rank": 328,
    "pinyin": [
      "shù"
    ],
    "radical": "行",
    "radicalMeaning": "go/do",
    "strokeCount": 11,
    "decomposition": "⿻行术",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 行、术。",
    "observationHint": "先把「術」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "行",
      "术"
    ],
    "definition": "skill, art; method, technique; trick",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9818",
    "layer": 2,
    "character": "領",
    "rank": 329,
    "pinyin": [
      "lǐng"
    ],
    "radical": "頁",
    "radicalMeaning": "leaf",
    "strokeCount": 14,
    "decomposition": "⿰令頁",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 令、頁。",
    "observationHint": "先觀察「領」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "令",
      "頁"
    ],
    "definition": "neck, collar; lead, guide",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5171",
    "layer": 2,
    "character": "共",
    "rank": 330,
    "pinyin": [
      "gòng"
    ],
    "radical": "八",
    "radicalMeaning": "eight/divide",
    "strokeCount": 6,
    "decomposition": "⿳廾一八",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 廾、一、八。",
    "observationHint": "先把「共」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "廾",
      "一",
      "八"
    ],
    "definition": "all, total; together; to share",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-78ba",
    "layer": 2,
    "character": "確",
    "rank": 331,
    "pinyin": [
      "què"
    ],
    "radical": "石",
    "radicalMeaning": "stone",
    "strokeCount": 15,
    "decomposition": "⿰石隺",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 石、隺。",
    "observationHint": "先觀察「確」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "石",
      "隺"
    ],
    "definition": "certain, sure; definite, exact; real, true",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-50b3",
    "layer": 2,
    "character": "傳",
    "rank": 332,
    "pinyin": [
      "chuán"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 13,
    "decomposition": "⿰亻專",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、專。",
    "observationHint": "先觀察「傳」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "專"
    ],
    "definition": "to pass on; to propagate; to transmit; summons",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e2b",
    "layer": 2,
    "character": "師",
    "rank": 333,
    "pinyin": [
      "shī"
    ],
    "radical": "巾",
    "radicalMeaning": "turban/scarf",
    "strokeCount": 10,
    "decomposition": "⿰⿱丿㠯帀",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 丿、㠯、帀。",
    "observationHint": "先觀察「師」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "丿",
      "㠯",
      "帀"
    ],
    "definition": "teacher, professional, master",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-89c0",
    "layer": 2,
    "character": "觀",
    "rank": 334,
    "pinyin": [
      "guān"
    ],
    "radical": "見",
    "radicalMeaning": "see",
    "strokeCount": 25,
    "decomposition": "⿰雚見",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 雚、見。",
    "observationHint": "先觀察「觀」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "雚",
      "見"
    ],
    "definition": "to observe, to spectate; appearance, view",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6e05",
    "layer": 2,
    "character": "清",
    "rank": 335,
    "pinyin": [
      "qīng"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 11,
    "decomposition": "⿰氵青",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、青。",
    "observationHint": "先觀察「清」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "青"
    ],
    "definition": "clean, pure; clear, distinct; peaceful",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4eca",
    "layer": 2,
    "character": "今",
    "rank": 336,
    "pinyin": [
      "jīn"
    ],
    "radical": "人",
    "radicalMeaning": "human",
    "strokeCount": 4,
    "decomposition": "⿱人？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 人。",
    "observationHint": "先看清楚「今」上下兩層，再按順序落筆。",
    "parts": [
      "人"
    ],
    "definition": "modern, current; today, now",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5207",
    "layer": 2,
    "character": "切",
    "rank": 337,
    "pinyin": [
      "qiè"
    ],
    "radical": "刀",
    "radicalMeaning": "knife",
    "strokeCount": 4,
    "decomposition": "⿰七刀",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 七、刀。",
    "observationHint": "先觀察「切」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "七",
      "刀"
    ],
    "definition": "to cut, to mince, to slice, to carve; close to; eager",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9662",
    "layer": 2,
    "character": "院",
    "rank": 338,
    "pinyin": [
      "yuàn"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 9,
    "decomposition": "⿰阝完",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 阝、完。",
    "observationHint": "先觀察「院」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "阝",
      "完"
    ],
    "definition": "court, yard, courtyard; school",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8b93",
    "layer": 2,
    "character": "讓",
    "rank": 339,
    "pinyin": [
      "ràng"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 24,
    "decomposition": "⿰言襄",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、襄。",
    "observationHint": "先觀察「讓」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "襄"
    ],
    "definition": "to allow, to permit, to yield",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8b58",
    "layer": 2,
    "character": "識",
    "rank": 340,
    "pinyin": [
      "shí"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 19,
    "decomposition": "⿰言戠",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、戠。",
    "observationHint": "先觀察「識」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "戠"
    ],
    "definition": "knowledge; to understand, to recognize, to know",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5019",
    "layer": 2,
    "character": "候",
    "rank": 341,
    "pinyin": [
      "hòu"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 10,
    "decomposition": "⿰亻矦",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、矦。",
    "observationHint": "先觀察「候」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "矦"
    ],
    "definition": "to wait, to expect; to visit; to greet",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e36",
    "layer": 2,
    "character": "帶",
    "rank": 342,
    "pinyin": [
      "dài"
    ],
    "radical": "巾",
    "radicalMeaning": "turban/scarf",
    "strokeCount": 11,
    "decomposition": "⿱卌⿱冖巾",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 卌、冖、巾。",
    "observationHint": "先看清楚「帶」上下兩層，再按順序落筆。",
    "parts": [
      "卌",
      "冖",
      "巾"
    ],
    "definition": "belt, strap; band, ribbon; area, zone; to carry, to raise, to wear",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c0e",
    "layer": 2,
    "character": "導",
    "rank": 343,
    "pinyin": [
      "dǎo"
    ],
    "radical": "寸",
    "radicalMeaning": "thumb",
    "strokeCount": 15,
    "decomposition": "⿱道寸",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 道、寸。",
    "observationHint": "先看清楚「導」上下兩層，再按順序落筆。",
    "parts": [
      "道",
      "寸"
    ],
    "definition": "to direct, to guide, to lead, to conduct",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-722d",
    "layer": 2,
    "character": "爭",
    "rank": 344,
    "pinyin": [
      "zhēng"
    ],
    "radical": "爫",
    "radicalMeaning": "claw/talon",
    "strokeCount": 8,
    "decomposition": "⿱爫⿻彐亅",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 爫、彐、亅。",
    "observationHint": "先看清楚「爭」上下兩層，再按順序落筆。",
    "parts": [
      "爫",
      "彐",
      "亅"
    ],
    "definition": "to dispute, to fight, to contend, to strive",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-904b",
    "layer": 2,
    "character": "運",
    "rank": 345,
    "pinyin": [
      "yùn"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 12,
    "decomposition": "⿺辶軍",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、軍。",
    "observationHint": "先看「運」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "軍"
    ],
    "definition": "to run; ship, transport; fortune, luck",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7b11",
    "layer": 2,
    "character": "笑",
    "rank": 346,
    "pinyin": [
      "xiào"
    ],
    "radical": "⺮",
    "radicalMeaning": "bamboo",
    "strokeCount": 10,
    "decomposition": "⿱⺮夭",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺮、夭。",
    "observationHint": "先看清楚「笑」上下兩層，再按順序落筆。",
    "parts": [
      "⺮",
      "夭"
    ],
    "definition": "to smile, to laugh; to giggle; to snicker",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-98db",
    "layer": 2,
    "character": "飛",
    "rank": 347,
    "pinyin": [
      "fēi"
    ],
    "radical": "飛",
    "radicalMeaning": "fly",
    "strokeCount": 9,
    "decomposition": "⿹飞⿻？飞",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 飞、飞。",
    "observationHint": "先看「飛」的外框，再注意裡面的部分。",
    "parts": [
      "飞",
      "飞"
    ],
    "definition": "to fly, to dart; high",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-98a8",
    "layer": 2,
    "character": "風",
    "rank": 348,
    "pinyin": [
      "fēng"
    ],
    "radical": "風",
    "radicalMeaning": "wind",
    "strokeCount": 9,
    "decomposition": "⿵几虫",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 几、虫。",
    "observationHint": "先看「風」的外框，再注意裡面的部分。",
    "parts": [
      "几",
      "虫"
    ],
    "definition": "wind; air; customs, manners; news",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6b65",
    "layer": 2,
    "character": "步",
    "rank": 349,
    "pinyin": [
      "bù"
    ],
    "radical": "止",
    "radicalMeaning": "stop",
    "strokeCount": 7,
    "decomposition": "⿱止？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 止。",
    "observationHint": "先看清楚「步」上下兩層，再按順序落筆。",
    "parts": [
      "止"
    ],
    "definition": "walk, stroll, pace, march; to make progress",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6539",
    "layer": 2,
    "character": "改",
    "rank": 350,
    "pinyin": [
      "gǎi"
    ],
    "radical": "攵",
    "radicalMeaning": "knock",
    "strokeCount": 7,
    "decomposition": "⿰己攵",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 己、攵。",
    "observationHint": "先觀察「改」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "己",
      "攵"
    ],
    "definition": "to alter, to change, to improve, to remodel",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6536",
    "layer": 2,
    "character": "收",
    "rank": 351,
    "pinyin": [
      "shōu"
    ],
    "radical": "攵",
    "radicalMeaning": "knock",
    "strokeCount": 6,
    "decomposition": "⿰丩攵",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 丩、攵。",
    "observationHint": "先觀察「收」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "丩",
      "攵"
    ],
    "definition": "to collect, to gather, to harvest",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6839",
    "layer": 2,
    "character": "根",
    "rank": 352,
    "pinyin": [
      "gēn"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 10,
    "decomposition": "⿰木艮",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、艮。",
    "observationHint": "先觀察「根」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "艮"
    ],
    "definition": "root, basis, foundation",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9020",
    "layer": 2,
    "character": "造",
    "rank": 354,
    "pinyin": [
      "zào"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 10,
    "decomposition": "⿺辶告",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、告。",
    "observationHint": "先看「造」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "告"
    ],
    "definition": "to build, to construct, to invent, to manufacture",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a00",
    "layer": 2,
    "character": "言",
    "rank": 355,
    "pinyin": [
      "yán"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 7,
    "decomposition": "⿱亠⿱二口",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 亠、二、口。",
    "observationHint": "先看清楚「言」上下兩層，再按順序落筆。",
    "parts": [
      "亠",
      "二",
      "口"
    ],
    "definition": "words, speech; to speak, to say",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-806f",
    "layer": 2,
    "character": "聯",
    "rank": 356,
    "pinyin": [
      "lián"
    ],
    "radical": "耳",
    "radicalMeaning": "ear",
    "strokeCount": 17,
    "decomposition": "⿰耳絲",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 耳、絲。",
    "observationHint": "先觀察「聯」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "耳",
      "絲"
    ],
    "definition": "ally, associate; to connect, to join",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6301",
    "layer": 2,
    "character": "持",
    "rank": 357,
    "pinyin": [
      "chí"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 9,
    "decomposition": "⿰扌寺",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、寺。",
    "observationHint": "先觀察「持」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "寺"
    ],
    "definition": "to hold, to support, to sustain",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7d44",
    "layer": 2,
    "character": "組",
    "rank": 358,
    "pinyin": [
      "zǔ"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 11,
    "decomposition": "⿰糹且",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、且。",
    "observationHint": "先觀察「組」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "且"
    ],
    "definition": "to form, to assemble; section, department",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6bcf",
    "layer": 2,
    "character": "每",
    "rank": 359,
    "pinyin": [
      "měi"
    ],
    "radical": "母",
    "radicalMeaning": "do not",
    "strokeCount": 7,
    "decomposition": "⿱？母",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 母。",
    "observationHint": "先看清楚「每」上下兩層，再按順序落筆。",
    "parts": [
      "母"
    ],
    "definition": "each, every",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6fdf",
    "layer": 2,
    "character": "濟",
    "rank": 360,
    "pinyin": [
      "jì"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 17,
    "decomposition": "⿰氵齊",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、齊。",
    "observationHint": "先觀察「濟」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "齊"
    ],
    "definition": "to aid, to help, to relieve; to ferry across",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8eca",
    "layer": 2,
    "character": "車",
    "rank": 361,
    "pinyin": [
      "chē"
    ],
    "radical": "車",
    "radicalMeaning": "car",
    "strokeCount": 7,
    "decomposition": "⿻？日",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 日。",
    "observationHint": "先把「車」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "日"
    ],
    "definition": "cart, vehicle; to move in a cart",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-89aa",
    "layer": 2,
    "character": "親",
    "rank": 362,
    "pinyin": [
      "qīn"
    ],
    "radical": "見",
    "radicalMeaning": "see",
    "strokeCount": 16,
    "decomposition": "⿰亲見",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亲、見。",
    "observationHint": "先觀察「親」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亲",
      "見"
    ],
    "definition": "relatives, parents; intimate; the hazelnut tree",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6975",
    "layer": 2,
    "character": "極",
    "rank": 363,
    "pinyin": [
      "jí"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 12,
    "decomposition": "⿰木亟",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、亟。",
    "observationHint": "先觀察「極」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "亟"
    ],
    "definition": "extreme, top; final, furthest, utmost; pole",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6797",
    "layer": 2,
    "character": "林",
    "rank": 364,
    "pinyin": [
      "lín"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 8,
    "decomposition": "⿰木木",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、木。",
    "observationHint": "先觀察「林」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "木"
    ],
    "definition": "forest, grove; surname",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-670d",
    "layer": 2,
    "character": "服",
    "rank": 365,
    "pinyin": [
      "fú"
    ],
    "radical": "月",
    "radicalMeaning": "moon",
    "strokeCount": 8,
    "decomposition": "⿰月⿸卩又",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 月、卩、又。",
    "observationHint": "先觀察「服」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "月",
      "卩",
      "又"
    ],
    "definition": "clothes; to dress, to wear; to take medicine",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5feb",
    "layer": 2,
    "character": "快",
    "rank": 366,
    "pinyin": [
      "kuài"
    ],
    "radical": "忄",
    "radicalMeaning": "heart",
    "strokeCount": 7,
    "decomposition": "⿰忄夬",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 忄、夬。",
    "observationHint": "先觀察「快」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "忄",
      "夬"
    ],
    "definition": "speedy, rapid, quick; soon",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8fa6",
    "layer": 2,
    "character": "辦",
    "rank": 367,
    "pinyin": [
      "bàn"
    ],
    "radical": "辛",
    "radicalMeaning": "bitter",
    "strokeCount": 16,
    "decomposition": "⿲辛力辛",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 辛、力、辛。",
    "observationHint": "先把「辦」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "辛",
      "力",
      "辛"
    ],
    "definition": "to set up; to manage, to run; to deal with, to handle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8b70",
    "layer": 2,
    "character": "議",
    "rank": 368,
    "pinyin": [
      "yì"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 20,
    "decomposition": "⿰言義",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、義。",
    "observationHint": "先觀察「議」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "義"
    ],
    "definition": "to consult, to talk over; to criticize, to discuss",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f80",
    "layer": 2,
    "character": "往",
    "rank": 369,
    "pinyin": [
      "wǎng"
    ],
    "radical": "彳",
    "radicalMeaning": "step",
    "strokeCount": 8,
    "decomposition": "⿰彳⿱？王",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 彳、王。",
    "observationHint": "先觀察「往」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "彳",
      "王"
    ],
    "definition": "to go, to depart; past, former",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5143",
    "layer": 2,
    "character": "元",
    "rank": 370,
    "pinyin": [
      "yuán"
    ],
    "radical": "儿",
    "radicalMeaning": "legs",
    "strokeCount": 4,
    "decomposition": "⿱二儿",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 二、儿。",
    "observationHint": "先看清楚「元」上下兩層，再按順序落筆。",
    "parts": [
      "二",
      "儿"
    ],
    "definition": "first; dollar; origin; head",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-82f1",
    "layer": 2,
    "character": "英",
    "rank": 371,
    "pinyin": [
      "yīng"
    ],
    "radical": "艹",
    "radicalMeaning": "grass",
    "strokeCount": 8,
    "decomposition": "⿱艹央",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 艹、央。",
    "observationHint": "先看清楚「英」上下兩層，再按順序落筆。",
    "parts": [
      "艹",
      "央"
    ],
    "definition": "petal, flower, leaf; brave, heroic; English",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-58eb",
    "layer": 2,
    "character": "士",
    "rank": 372,
    "pinyin": [
      "shì"
    ],
    "radical": "士",
    "radicalMeaning": "scholar",
    "strokeCount": 3,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 士。",
    "observationHint": "先觀察「士」整體輪廓，再留意和 士 有關的部分。",
    "parts": [],
    "definition": "scholar, gentleman; soldier",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8b49",
    "layer": 2,
    "character": "證",
    "rank": 373,
    "pinyin": [
      "zhèng"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 19,
    "decomposition": "⿰言登",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、登。",
    "observationHint": "先觀察「證」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "登"
    ],
    "definition": "to prove, to verify; certificate, proof",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8fd1",
    "layer": 2,
    "character": "近",
    "rank": 374,
    "pinyin": [
      "jìn"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 7,
    "decomposition": "⿺辶斤",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、斤。",
    "observationHint": "先看「近」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "斤"
    ],
    "definition": "to approach; near, close; intimate",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5931",
    "layer": 2,
    "character": "失",
    "rank": 375,
    "pinyin": [
      "shī"
    ],
    "radical": "大",
    "radicalMeaning": "big",
    "strokeCount": 5,
    "decomposition": "⿻丿夫",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 丿、夫。",
    "observationHint": "先把「失」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "丿",
      "夫"
    ],
    "definition": "to lose; to make a mistake, to neglect",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8f49",
    "layer": 2,
    "character": "轉",
    "rank": 376,
    "pinyin": [
      "zhuǎn"
    ],
    "radical": "車",
    "radicalMeaning": "car",
    "strokeCount": 18,
    "decomposition": "⿰車專",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 車、專。",
    "observationHint": "先觀察「轉」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "車",
      "專"
    ],
    "definition": "to move, to convey; to turn, to revolve, to circle; to forward mail",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-592b",
    "layer": 2,
    "character": "夫",
    "rank": 377,
    "pinyin": [
      "fū"
    ],
    "radical": "大",
    "radicalMeaning": "big",
    "strokeCount": 4,
    "decomposition": "⿻一大",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 一、大。",
    "observationHint": "先把「夫」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "一",
      "大"
    ],
    "definition": "man, husband; worker; those",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4ee4",
    "layer": 2,
    "character": "令",
    "rank": 378,
    "pinyin": [
      "lìng"
    ],
    "radical": "人",
    "radicalMeaning": "human",
    "strokeCount": 5,
    "decomposition": "⿱人？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 人。",
    "observationHint": "先看清楚「令」上下兩層，再按順序落筆。",
    "parts": [
      "人"
    ],
    "definition": "command, decree, order; magistrate; to allow, to cause",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6e96",
    "layer": 2,
    "character": "準",
    "rank": 379,
    "pinyin": [
      "zhǔn"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 13,
    "decomposition": "⿱淮十",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 淮、十。",
    "observationHint": "先看清楚「準」上下兩層，再按順序落筆。",
    "parts": [
      "淮",
      "十"
    ],
    "definition": "standard, accurate; to permit, to approve, to allow",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f48",
    "layer": 2,
    "character": "佈",
    "rank": 380,
    "pinyin": [
      "bù"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 7,
    "decomposition": "⿰亻布",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、布。",
    "observationHint": "先觀察「佈」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "布"
    ],
    "definition": "to spread, to publicize, to announce",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-59cb",
    "layer": 2,
    "character": "始",
    "rank": 381,
    "pinyin": [
      "shǐ"
    ],
    "radical": "女",
    "radicalMeaning": "woman",
    "strokeCount": 8,
    "decomposition": "⿰女台",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 女、台。",
    "observationHint": "先觀察「始」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "女",
      "台"
    ],
    "definition": "to begin, to start; beginning",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-600e",
    "layer": 2,
    "character": "怎",
    "rank": 382,
    "pinyin": [
      "zěn"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 9,
    "decomposition": "⿱乍心",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 乍、心。",
    "observationHint": "先看清楚「怎」上下兩層，再按順序落筆。",
    "parts": [
      "乍",
      "心"
    ],
    "definition": "what? why? how?",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5462",
    "layer": 2,
    "character": "呢",
    "rank": 383,
    "pinyin": [
      "né",
      "ne"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 8,
    "decomposition": "⿰口尼",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 口、尼。",
    "observationHint": "先觀察「呢」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "口",
      "尼"
    ],
    "definition": "wool; interrogative or emphatic final particle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b58",
    "layer": 2,
    "character": "存",
    "rank": 384,
    "pinyin": [
      "cún"
    ],
    "radical": "子",
    "radicalMeaning": "child",
    "strokeCount": 6,
    "decomposition": "⿸才子",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 才、子。",
    "observationHint": "先看「存」的外框，再注意裡面的部分。",
    "parts": [
      "才",
      "子"
    ],
    "definition": "to exist; to survive, to maintain; to keep, to store; to deposit",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-672a",
    "layer": 2,
    "character": "未",
    "rank": 385,
    "pinyin": [
      "wèi"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 5,
    "decomposition": "⿻一木",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 一、木。",
    "observationHint": "先把「未」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "一",
      "木"
    ],
    "definition": "not yet; 8th terrestrial branch",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9060",
    "layer": 2,
    "character": "遠",
    "rank": 386,
    "pinyin": [
      "yuǎn"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 13,
    "decomposition": "⿺辶袁",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、袁。",
    "observationHint": "先看「遠」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "袁"
    ],
    "definition": "distant, remote, far; profound",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53eb",
    "layer": 2,
    "character": "叫",
    "rank": 387,
    "pinyin": [
      "jiào"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 5,
    "decomposition": "⿰口丩",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 口、丩。",
    "observationHint": "先觀察「叫」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "口",
      "丩"
    ],
    "definition": "cry, shout; to call, to greet, to hail",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-98b1",
    "layer": 2,
    "character": "颱",
    "rank": 388,
    "pinyin": [
      "tái"
    ],
    "radical": "風",
    "radicalMeaning": "wind",
    "strokeCount": 14,
    "decomposition": "⿺風台",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 風、台。",
    "observationHint": "先看「颱」的外框，再注意裡面的部分。",
    "parts": [
      "風",
      "台"
    ],
    "definition": "platform; unit; term of address",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-55ae",
    "layer": 2,
    "character": "單",
    "rank": 389,
    "pinyin": [
      "dān"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 12,
    "decomposition": "⿱⿰口口？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 口、口。",
    "observationHint": "先看清楚「單」上下兩層，再按順序落筆。",
    "parts": [
      "口",
      "口"
    ],
    "definition": "single, individual, only; lone",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f71",
    "layer": 2,
    "character": "影",
    "rank": 390,
    "pinyin": [
      "yǐng"
    ],
    "radical": "彡",
    "radicalMeaning": "bristle/beard",
    "strokeCount": 15,
    "decomposition": "⿰景彡",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 景、彡。",
    "observationHint": "先觀察「影」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "景",
      "彡"
    ],
    "definition": "shadow; image, reflection; photograph",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5177",
    "layer": 2,
    "character": "具",
    "rank": 391,
    "pinyin": [
      "jù"
    ],
    "radical": "八",
    "radicalMeaning": "eight/divide",
    "strokeCount": 8,
    "decomposition": "⿱目⿱一八",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 目、一、八。",
    "observationHint": "先看清楚「具」上下兩層，再按順序落筆。",
    "parts": [
      "目",
      "一",
      "八"
    ],
    "definition": "tool, implement; to draw up, to write",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7f85",
    "layer": 2,
    "character": "羅",
    "rank": 392,
    "pinyin": [
      "luō"
    ],
    "radical": "罒",
    "radicalMeaning": "net",
    "strokeCount": 19,
    "decomposition": "⿱罒維",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 罒、維。",
    "observationHint": "先看清楚「羅」上下兩層，再按順序落筆。",
    "parts": [
      "罒",
      "維"
    ],
    "definition": "gauze, net; to collect, to display",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b57",
    "layer": 2,
    "character": "字",
    "rank": 393,
    "pinyin": [
      "zì"
    ],
    "radical": "子",
    "radicalMeaning": "child",
    "strokeCount": 6,
    "decomposition": "⿱宀子",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、子。",
    "observationHint": "先看清楚「字」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "子"
    ],
    "definition": "character, letter, symbol, word",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-611b",
    "layer": 2,
    "character": "愛",
    "rank": 394,
    "pinyin": [
      "ài"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 13,
    "decomposition": "⿱⿱爫⿱冖心夂",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 爫、冖、心、夂。",
    "observationHint": "先看清楚「愛」上下兩層，再按順序落筆。",
    "parts": [
      "爫",
      "冖",
      "心",
      "夂"
    ],
    "definition": "to love, to like, to be fond of; love, affection",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-64ca",
    "layer": 2,
    "character": "擊",
    "rank": 395,
    "pinyin": [
      "jī"
    ],
    "radical": "手",
    "radicalMeaning": "hand",
    "strokeCount": 17,
    "decomposition": "⿱毄手",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 毄、手。",
    "observationHint": "先看清楚「擊」上下兩層，再按順序落筆。",
    "parts": [
      "毄",
      "手"
    ],
    "definition": "to strike, to hit, to beat; to attack, to fight",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6d41",
    "layer": 2,
    "character": "流",
    "rank": 396,
    "pinyin": [
      "liú"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 10,
    "decomposition": "⿰氵㐬",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、㐬。",
    "observationHint": "先觀察「流」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "㐬"
    ],
    "definition": "to flow, to drift, to circulate; class",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5099",
    "layer": 2,
    "character": "備",
    "rank": 397,
    "pinyin": [
      "bèi"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 12,
    "decomposition": "⿰亻？",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻。",
    "observationHint": "先觀察「備」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻"
    ],
    "definition": "to prepare; to get ready, to equip; ready; perfect",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5175",
    "layer": 2,
    "character": "兵",
    "rank": 398,
    "pinyin": [
      "bīng"
    ],
    "radical": "八",
    "radicalMeaning": "eight/divide",
    "strokeCount": 7,
    "decomposition": "⿱丘八",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 丘、八。",
    "observationHint": "先看清楚「兵」上下兩層，再按順序落筆。",
    "parts": [
      "丘",
      "八"
    ],
    "definition": "soldier; troops, an army; warlike",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9023",
    "layer": 2,
    "character": "連",
    "rank": 399,
    "pinyin": [
      "lián"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 10,
    "decomposition": "⿺辶車",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、車。",
    "observationHint": "先看「連」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "車"
    ],
    "definition": "to join, to connect; continuous; even",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8abf",
    "layer": 2,
    "character": "調",
    "rank": 400,
    "pinyin": [
      "diào"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 15,
    "decomposition": "⿰言周",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、周。",
    "observationHint": "先觀察「調」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "周"
    ],
    "definition": "tune, melody, key; to transfer, to exchange",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6df1",
    "layer": 2,
    "character": "深",
    "rank": 401,
    "pinyin": [
      "shēn"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 11,
    "decomposition": "⿰氵罙",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、罙。",
    "observationHint": "先觀察「深」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "罙"
    ],
    "definition": "deep, profound; depth",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5546",
    "layer": 2,
    "character": "商",
    "rank": 402,
    "pinyin": [
      "shāng"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 11,
    "decomposition": "⿱⿱亠丷冏",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 亠、丷、冏。",
    "observationHint": "先看清楚「商」上下兩層，再按順序落筆。",
    "parts": [
      "亠",
      "丷",
      "冏"
    ],
    "definition": "commerce, business, trade",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7b97",
    "layer": 2,
    "character": "算",
    "rank": 403,
    "pinyin": [
      "suàn"
    ],
    "radical": "⺮",
    "radicalMeaning": "bamboo",
    "strokeCount": 14,
    "decomposition": "⿱⺮具",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺮、具。",
    "observationHint": "先看清楚「算」上下兩層，再按順序落筆。",
    "parts": [
      "⺮",
      "具"
    ],
    "definition": "to calculate, to count; to figure, to plan",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8cea",
    "layer": 2,
    "character": "質",
    "rank": 404,
    "pinyin": [
      "zhì"
    ],
    "radical": "貝",
    "radicalMeaning": "shell",
    "strokeCount": 15,
    "decomposition": "⿱斦貝",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 斦、貝。",
    "observationHint": "先看清楚「質」上下兩層，再按順序落筆。",
    "parts": [
      "斦",
      "貝"
    ],
    "definition": "essence, nature; material, substance",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7cf0",
    "layer": 2,
    "character": "糰",
    "rank": 405,
    "pinyin": [
      "tuán"
    ],
    "radical": "米",
    "radicalMeaning": "rice",
    "strokeCount": 20,
    "decomposition": "⿰米團",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 米、團。",
    "observationHint": "先觀察「糰」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "米",
      "團"
    ],
    "definition": "rice ball",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-96c6",
    "layer": 2,
    "character": "集",
    "rank": 406,
    "pinyin": [
      "jí"
    ],
    "radical": "隹",
    "radicalMeaning": "small bird",
    "strokeCount": 12,
    "decomposition": "⿱隹木",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 隹、木。",
    "observationHint": "先看清楚「集」上下兩層，再按順序落筆。",
    "parts": [
      "隹",
      "木"
    ],
    "definition": "to gather, to collect; set, collection",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-767e",
    "layer": 2,
    "character": "百",
    "rank": 407,
    "pinyin": [
      "bǎi"
    ],
    "radical": "白",
    "radicalMeaning": "white",
    "strokeCount": 6,
    "decomposition": "⿱一白",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 一、白。",
    "observationHint": "先看清楚「百」上下兩層，再按順序落筆。",
    "parts": [
      "一",
      "白"
    ],
    "definition": "one hundred; numerous, many",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9700",
    "layer": 2,
    "character": "需",
    "rank": 408,
    "pinyin": [
      "xū"
    ],
    "radical": "雨",
    "radicalMeaning": "rain",
    "strokeCount": 14,
    "decomposition": "⿱雨而",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 雨、而。",
    "observationHint": "先看清楚「需」上下兩層，再按順序落筆。",
    "parts": [
      "雨",
      "而"
    ],
    "definition": "to need, to require; must",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-50f9",
    "layer": 2,
    "character": "價",
    "rank": 409,
    "pinyin": [
      "jià"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 15,
    "decomposition": "⿰亻賈",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、賈。",
    "observationHint": "先觀察「價」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "賈"
    ],
    "definition": "price, value",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-82b1",
    "layer": 2,
    "character": "花",
    "rank": 410,
    "pinyin": [
      "huā"
    ],
    "radical": "艹",
    "radicalMeaning": "grass",
    "strokeCount": 7,
    "decomposition": "⿱艹化",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 艹、化。",
    "observationHint": "先看清楚「花」上下兩層，再按順序落筆。",
    "parts": [
      "艹",
      "化"
    ],
    "definition": "flower, blossom; to spend (time or money)",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9ee8",
    "layer": 2,
    "character": "黨",
    "rank": 411,
    "pinyin": [
      "dǎng"
    ],
    "radical": "黑",
    "radicalMeaning": "black",
    "strokeCount": 20,
    "decomposition": "⿱尚黑",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 尚、黑。",
    "observationHint": "先看清楚「黨」上下兩層，再按順序落筆。",
    "parts": [
      "尚",
      "黑"
    ],
    "definition": "political party, gang, faction",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-83ef",
    "layer": 2,
    "character": "華",
    "rank": 412,
    "pinyin": [
      "huá"
    ],
    "radical": "艹",
    "radicalMeaning": "grass",
    "strokeCount": 11,
    "decomposition": "⿱艹⿻十？",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 艹、十。",
    "observationHint": "先看清楚「華」上下兩層，再按順序落筆。",
    "parts": [
      "艹",
      "十"
    ],
    "definition": "flowery; illustrious; Chinese",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-57ce",
    "layer": 2,
    "character": "城",
    "rank": 413,
    "pinyin": [
      "chéng"
    ],
    "radical": "土",
    "radicalMeaning": "earth",
    "strokeCount": 9,
    "decomposition": "⿰土成",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 土、成。",
    "observationHint": "先觀察「城」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "土",
      "成"
    ],
    "definition": "castle, city, town; municipality",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-77f3",
    "layer": 2,
    "character": "石",
    "rank": 414,
    "pinyin": [
      "shí"
    ],
    "radical": "石",
    "radicalMeaning": "stone",
    "strokeCount": 5,
    "decomposition": "⿸厂口",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 厂、口。",
    "observationHint": "先看「石」的外框，再注意裡面的部分。",
    "parts": [
      "厂",
      "口"
    ],
    "definition": "stone, rock, mineral",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7d1a",
    "layer": 2,
    "character": "級",
    "rank": 415,
    "pinyin": [
      "jí"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 9,
    "decomposition": "⿰糹及",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、及。",
    "observationHint": "先觀察「級」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "及"
    ],
    "definition": "level, rank; class, grade",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6574",
    "layer": 2,
    "character": "整",
    "rank": 416,
    "pinyin": [
      "zhěng"
    ],
    "radical": "攵",
    "radicalMeaning": "knock",
    "strokeCount": 16,
    "decomposition": "⿱敕正",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 敕、正。",
    "observationHint": "先看清楚「整」上下兩層，再按順序落筆。",
    "parts": [
      "敕",
      "正"
    ],
    "definition": "neat, orderly, whole; to repair, to mend",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e9c",
    "layer": 2,
    "character": "府",
    "rank": 417,
    "pinyin": [
      "fǔ"
    ],
    "radical": "广",
    "radicalMeaning": "house on cliff",
    "strokeCount": 8,
    "decomposition": "⿸广付",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 广、付。",
    "observationHint": "先看「府」的外框，再注意裡面的部分。",
    "parts": [
      "广",
      "付"
    ],
    "definition": "prefect; prefecture, government",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-96e2",
    "layer": 2,
    "character": "離",
    "rank": 418,
    "pinyin": [
      "lí"
    ],
    "radical": "隹",
    "radicalMeaning": "small bird",
    "strokeCount": 18,
    "decomposition": "⿰离隹",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 离、隹。",
    "observationHint": "先觀察「離」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "离",
      "隹"
    ],
    "definition": "rare beast; strange; elegant",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6cc1",
    "layer": 2,
    "character": "況",
    "rank": 419,
    "pinyin": [
      "kuàng"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 8,
    "decomposition": "⿰氵兄",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、兄。",
    "observationHint": "先觀察「況」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "兄"
    ],
    "definition": "condition, situation; furthermore",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e9e",
    "layer": 2,
    "character": "亞",
    "rank": 420,
    "pinyin": [
      "yà"
    ],
    "radical": "二",
    "radicalMeaning": "two",
    "strokeCount": 8,
    "decomposition": "⿻二？",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 二。",
    "observationHint": "先把「亞」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "二"
    ],
    "definition": "Asia; second",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8acb",
    "layer": 2,
    "character": "請",
    "rank": 421,
    "pinyin": [
      "qǐng"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 15,
    "decomposition": "⿰言青",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、青。",
    "observationHint": "先觀察「請」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "青"
    ],
    "definition": "to ask, to request; to invite; please",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6280",
    "layer": 2,
    "character": "技",
    "rank": 422,
    "pinyin": [
      "jì"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 7,
    "decomposition": "⿰扌支",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、支。",
    "observationHint": "先觀察「技」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "支"
    ],
    "definition": "ability, talent; skill, technique",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-969b",
    "layer": 2,
    "character": "際",
    "rank": 423,
    "pinyin": [
      "jì"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 13,
    "decomposition": "⿰阝祭",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 阝、祭。",
    "observationHint": "先觀察「際」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "阝",
      "祭"
    ],
    "definition": "border, boundary, juncture",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7d04",
    "layer": 2,
    "character": "約",
    "rank": 424,
    "pinyin": [
      "yuē"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 9,
    "decomposition": "⿰糹勺",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、勺。",
    "observationHint": "先觀察「約」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "勺"
    ],
    "definition": "treaty, covenant, agreement",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-793a",
    "layer": 2,
    "character": "示",
    "rank": 425,
    "pinyin": [
      "shì"
    ],
    "radical": "示",
    "radicalMeaning": "sign",
    "strokeCount": 5,
    "decomposition": "⿱二小",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 二、小。",
    "observationHint": "先看清楚「示」上下兩層，再按順序落筆。",
    "parts": [
      "二",
      "小"
    ],
    "definition": "altar; ceremony; to show, to demonstrate",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8907",
    "layer": 2,
    "character": "複",
    "rank": 426,
    "pinyin": [
      "fù"
    ],
    "radical": "衤",
    "radicalMeaning": "clothes",
    "strokeCount": 14,
    "decomposition": "⿰衤复",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 衤、复。",
    "observationHint": "先觀察「複」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "衤",
      "复"
    ],
    "definition": "again, repeatedly; copy, duplicate; to restore, to return",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-75c5",
    "layer": 2,
    "character": "病",
    "rank": 427,
    "pinyin": [
      "bìng"
    ],
    "radical": "疒",
    "radicalMeaning": "sickness",
    "strokeCount": 10,
    "decomposition": "⿸疒丙",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 疒、丙。",
    "observationHint": "先看「病」的外框，再注意裡面的部分。",
    "parts": [
      "疒",
      "丙"
    ],
    "definition": "sickness, illness, disease",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-606f",
    "layer": 2,
    "character": "息",
    "rank": 428,
    "pinyin": [
      "xī"
    ],
    "radical": "心",
    "radicalMeaning": "heart",
    "strokeCount": 10,
    "decomposition": "⿱自心",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 自、心。",
    "observationHint": "先看清楚「息」上下兩層，再按順序落筆。",
    "parts": [
      "自",
      "心"
    ],
    "definition": "to end, to cease, to put a stop to; pause, breath, rest; news",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7a76",
    "layer": 2,
    "character": "究",
    "rank": 429,
    "pinyin": [
      "jiū"
    ],
    "radical": "穴",
    "radicalMeaning": "cave",
    "strokeCount": 7,
    "decomposition": "⿱穴九",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 穴、九。",
    "observationHint": "先看清楚「究」上下兩層，再按順序落筆。",
    "parts": [
      "穴",
      "九"
    ],
    "definition": "to dig into, to investigate; actually, after all",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f3c",
    "layer": 2,
    "character": "似",
    "rank": 431,
    "pinyin": [
      "shì"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 6,
    "decomposition": "⿰亻以",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、以。",
    "observationHint": "先觀察「似」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "以"
    ],
    "definition": "resembling, similar to; as if, to seem",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5b98",
    "layer": 2,
    "character": "官",
    "rank": 432,
    "pinyin": [
      "guān"
    ],
    "radical": "宀",
    "radicalMeaning": "roof",
    "strokeCount": 8,
    "decomposition": "⿱宀㠯",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、㠯。",
    "observationHint": "先看清楚「官」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "㠯"
    ],
    "definition": "official, public servant",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-706b",
    "layer": 2,
    "character": "火",
    "rank": 433,
    "pinyin": [
      "huǒ"
    ],
    "radical": "火",
    "radicalMeaning": "fire",
    "strokeCount": 4,
    "decomposition": "⿻丷人",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 丷、人。",
    "observationHint": "先把「火」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "丷",
      "人"
    ],
    "definition": "fire, flame; to burn; anger, rage",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-65b7",
    "layer": 2,
    "character": "斷",
    "rank": 434,
    "pinyin": [
      "duàn"
    ],
    "radical": "斤",
    "radicalMeaning": "axe",
    "strokeCount": 18,
    "decomposition": "⿰⿺？⿳⿰幺幺一⿰幺幺斤",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 幺、幺、一、幺。",
    "observationHint": "先觀察「斷」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "幺",
      "幺",
      "一",
      "幺"
    ],
    "definition": "to sever, to cut off, to interrupt",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7cbe",
    "layer": 2,
    "character": "精",
    "rank": 435,
    "pinyin": [
      "jīng"
    ],
    "radical": "米",
    "radicalMeaning": "rice",
    "strokeCount": 14,
    "decomposition": "⿰米青",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 米、青。",
    "observationHint": "先觀察「精」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "米",
      "青"
    ],
    "definition": "essence, germ, spirit",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6eff",
    "layer": 2,
    "character": "滿",
    "rank": 436,
    "pinyin": [
      "mǎn"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 14,
    "decomposition": "⿰氵㒼",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、㒼。",
    "observationHint": "先觀察「滿」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "㒼"
    ],
    "definition": "to fill; full, packed; satisfied",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-652f",
    "layer": 2,
    "character": "支",
    "rank": 437,
    "pinyin": [
      "zhī"
    ],
    "radical": "支",
    "radicalMeaning": "branch",
    "strokeCount": 4,
    "decomposition": "⿱十又",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 十、又。",
    "observationHint": "先看清楚「支」上下兩層，再按順序落筆。",
    "parts": [
      "十",
      "又"
    ],
    "definition": "to support, to sustain; to withdraw, to pay; a branch (of a bank)",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8996",
    "layer": 2,
    "character": "視",
    "rank": 438,
    "pinyin": [
      "shì"
    ],
    "radical": "見",
    "radicalMeaning": "see",
    "strokeCount": 11,
    "decomposition": "⿰礻見",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 礻、見。",
    "observationHint": "先觀察「視」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "礻",
      "見"
    ],
    "definition": "to look at, to inspect, to observe, to regard",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6d88",
    "layer": 2,
    "character": "消",
    "rank": 439,
    "pinyin": [
      "xiāo"
    ],
    "radical": "氵",
    "radicalMeaning": "water",
    "strokeCount": 10,
    "decomposition": "⿰氵肖",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 氵、肖。",
    "observationHint": "先觀察「消」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "氵",
      "肖"
    ],
    "definition": "news, rumors; to die out, to melt away, to vanish",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8d8a",
    "layer": 2,
    "character": "越",
    "rank": 440,
    "pinyin": [
      "yuè"
    ],
    "radical": "走",
    "radicalMeaning": "run",
    "strokeCount": 12,
    "decomposition": "⿺走戉",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 走、戉。",
    "observationHint": "先看「越」的外框，再注意裡面的部分。",
    "parts": [
      "走",
      "戉"
    ],
    "definition": "to exceed, to surpass, to transcend",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5668",
    "layer": 2,
    "character": "器",
    "rank": 441,
    "pinyin": [
      "qì"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 16,
    "decomposition": "⿳⿰口口犬⿰口口",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 口、口、犬、口。",
    "observationHint": "先把「器」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "口",
      "口",
      "犬",
      "口"
    ],
    "definition": "device, instrument, tool; receptacle, vessel",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5bb9",
    "layer": 2,
    "character": "容",
    "rank": 442,
    "pinyin": [
      "róng"
    ],
    "radical": "宀",
    "radicalMeaning": "roof",
    "strokeCount": 10,
    "decomposition": "⿱宀谷",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、谷。",
    "observationHint": "先看清楚「容」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "谷"
    ],
    "definition": "appearance, looks; form, figure; to contain, to hold",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7167",
    "layer": 2,
    "character": "照",
    "rank": 443,
    "pinyin": [
      "zhào"
    ],
    "radical": "灬",
    "radicalMeaning": "fire",
    "strokeCount": 13,
    "decomposition": "⿱昭灬",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 昭、灬。",
    "observationHint": "先看清楚「照」上下兩層，再按順序落筆。",
    "parts": [
      "昭",
      "灬"
    ],
    "definition": "to shine, to reflect, to illuminate",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9b1a",
    "layer": 2,
    "character": "鬚",
    "rank": 444,
    "pinyin": [
      "xū"
    ],
    "radical": "髟",
    "radicalMeaning": "hair",
    "strokeCount": 22,
    "decomposition": "⿱髟須",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 髟、須。",
    "observationHint": "先看清楚「鬚」上下兩層，再按順序落筆。",
    "parts": [
      "髟",
      "須"
    ],
    "definition": "beard; must; necessary",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e5d",
    "layer": 2,
    "character": "九",
    "rank": 445,
    "pinyin": [
      "jiǔ"
    ],
    "radical": "乙",
    "radicalMeaning": "second",
    "strokeCount": 2,
    "decomposition": "⿻丿乙",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 丿、乙。",
    "observationHint": "先把「九」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "丿",
      "乙"
    ],
    "definition": "nine",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-589e",
    "layer": 2,
    "character": "增",
    "rank": 446,
    "pinyin": [
      "zēng"
    ],
    "radical": "土",
    "radicalMeaning": "earth",
    "strokeCount": 15,
    "decomposition": "⿰土曾",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 土、曾。",
    "observationHint": "先觀察「增」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "土",
      "曾"
    ],
    "definition": "to increase; to expand; to augment; to add",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7814",
    "layer": 2,
    "character": "研",
    "rank": 447,
    "pinyin": [
      "yán"
    ],
    "radical": "石",
    "radicalMeaning": "stone",
    "strokeCount": 9,
    "decomposition": "⿰石开",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 石、开。",
    "observationHint": "先觀察「研」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "石",
      "开"
    ],
    "definition": "to grind, to rub; to study, to research",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5beb",
    "layer": 2,
    "character": "寫",
    "rank": 448,
    "pinyin": [
      "xiě"
    ],
    "radical": "宀",
    "radicalMeaning": "roof",
    "strokeCount": 15,
    "decomposition": "⿱宀舄",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 宀、舄。",
    "observationHint": "先看清楚「寫」上下兩層，再按順序落筆。",
    "parts": [
      "宀",
      "舄"
    ],
    "definition": "to write; to draw, to sketch; to compose",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7a31",
    "layer": 2,
    "character": "稱",
    "rank": 449,
    "pinyin": [
      "chēng"
    ],
    "radical": "禾",
    "radicalMeaning": "grain",
    "strokeCount": 14,
    "decomposition": "⿰禾爯",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 禾、爯。",
    "observationHint": "先觀察「稱」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "禾",
      "爯"
    ],
    "definition": "balanced; name, brand; to say, to call",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4f01",
    "layer": 2,
    "character": "企",
    "rank": 450,
    "pinyin": [
      "qǐ"
    ],
    "radical": "人",
    "radicalMeaning": "human",
    "strokeCount": 6,
    "decomposition": "⿱人止",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 人、止。",
    "observationHint": "先看清楚「企」上下兩層，再按順序落筆。",
    "parts": [
      "人",
      "止"
    ],
    "definition": "to plan a project; to stand on tiptoe",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-516b",
    "layer": 2,
    "character": "八",
    "rank": 451,
    "pinyin": [
      "bā"
    ],
    "radical": "八",
    "radicalMeaning": "eight/divide",
    "strokeCount": 2,
    "decomposition": null,
    "structureType": "single",
    "structureHint": "這是以單體字形為主的字，部首是 八。",
    "observationHint": "先觀察「八」整體輪廓，再留意和 八 有關的部分。",
    "parts": [],
    "definition": "eight; all around, all sides",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-529f",
    "layer": 2,
    "character": "功",
    "rank": 452,
    "pinyin": [
      "gōng"
    ],
    "radical": "力",
    "radicalMeaning": "power/force",
    "strokeCount": 5,
    "decomposition": "⿰工力",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 工、力。",
    "observationHint": "先觀察「功」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "工",
      "力"
    ],
    "definition": "achievement, good work; merit; service",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-55ce",
    "layer": 2,
    "character": "嗎",
    "rank": 453,
    "pinyin": [
      "ma"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 13,
    "decomposition": "⿰口馬",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 口、馬。",
    "observationHint": "先觀察「嗎」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "口",
      "馬"
    ],
    "definition": "final interrogative particle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5305",
    "layer": 2,
    "character": "包",
    "rank": 454,
    "pinyin": [
      "bāo"
    ],
    "radical": "勹",
    "radicalMeaning": "wrap",
    "strokeCount": 5,
    "decomposition": "⿹勹巳",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 勹、巳。",
    "observationHint": "先看「包」的外框，再注意裡面的部分。",
    "parts": [
      "勹",
      "巳"
    ],
    "definition": "wrap, pack, bundle; package",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7247",
    "layer": 2,
    "character": "片",
    "rank": 455,
    "pinyin": [
      "piàn"
    ],
    "radical": "片",
    "radicalMeaning": "a slice",
    "strokeCount": 4,
    "decomposition": "⿸？？",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。",
    "observationHint": "先看「片」的外框，再注意裡面的部分。",
    "parts": [],
    "definition": "slice, splinter; page, strip",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53f2",
    "layer": 2,
    "character": "史",
    "rank": 456,
    "pinyin": [
      "shǐ"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 5,
    "decomposition": "⿻口乂",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 口、乂。",
    "observationHint": "先把「史」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "口",
      "乂"
    ],
    "definition": "history, chronicle, annals",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-59d4",
    "layer": 2,
    "character": "委",
    "rank": 457,
    "pinyin": [
      "wěi"
    ],
    "radical": "女",
    "radicalMeaning": "woman",
    "strokeCount": 8,
    "decomposition": "⿱禾女",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 禾、女。",
    "observationHint": "先看清楚「委」上下兩層，再按順序落筆。",
    "parts": [
      "禾",
      "女"
    ],
    "definition": "to appoint, to commission, to send",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4e4e",
    "layer": 2,
    "character": "乎",
    "rank": 458,
    "pinyin": [
      "hū"
    ],
    "radical": "丿",
    "radicalMeaning": "bend",
    "strokeCount": 5,
    "decomposition": "⿻丿⿻？丷",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 丿、丷。",
    "observationHint": "先把「乎」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "丿",
      "丷"
    ],
    "definition": "interrogative or exclamatory final particle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8f15",
    "layer": 2,
    "character": "輕",
    "rank": 460,
    "pinyin": [
      "qīng"
    ],
    "radical": "車",
    "radicalMeaning": "car",
    "strokeCount": 14,
    "decomposition": "⿰車巠",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 車、巠。",
    "observationHint": "先觀察「輕」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "車",
      "巠"
    ],
    "definition": "light, gentle; simple, easy",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6613",
    "layer": 2,
    "character": "易",
    "rank": 461,
    "pinyin": [
      "yì"
    ],
    "radical": "日",
    "radicalMeaning": "sun/day",
    "strokeCount": 8,
    "decomposition": "⿱日勿",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 日、勿。",
    "observationHint": "先看清楚「易」上下兩層，再按順序落筆。",
    "parts": [
      "日",
      "勿"
    ],
    "definition": "to change; to exchange, to trade; simple, easy",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-65e9",
    "layer": 2,
    "character": "早",
    "rank": 462,
    "pinyin": [
      "zǎo"
    ],
    "radical": "日",
    "radicalMeaning": "sun/day",
    "strokeCount": 6,
    "decomposition": "⿱日十",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 日、十。",
    "observationHint": "先看清楚「早」上下兩層，再按順序落筆。",
    "parts": [
      "日",
      "十"
    ],
    "definition": "early; soon; morning",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-66fe",
    "layer": 2,
    "character": "曾",
    "rank": 463,
    "pinyin": [
      "céng"
    ],
    "radical": "曰",
    "radicalMeaning": "say",
    "strokeCount": 12,
    "decomposition": "⿳丷？日",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 丷、日。",
    "observationHint": "先把「曾」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "丷",
      "日"
    ],
    "definition": "already, formerly, once; the past",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9664",
    "layer": 2,
    "character": "除",
    "rank": 464,
    "pinyin": [
      "chú"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 9,
    "decomposition": "⿰阝余",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 阝、余。",
    "observationHint": "先觀察「除」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "阝",
      "余"
    ],
    "definition": "to eliminate, to remove, to wipe out",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8fb2",
    "layer": 2,
    "character": "農",
    "rank": 465,
    "pinyin": [
      "nóng"
    ],
    "radical": "辰",
    "radicalMeaning": "morning",
    "strokeCount": 13,
    "decomposition": "⿱曲辰",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 曲、辰。",
    "observationHint": "先看清楚「農」上下兩層，再按順序落筆。",
    "parts": [
      "曲",
      "辰"
    ],
    "definition": "agriculture, farming; farmer",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-627e",
    "layer": 2,
    "character": "找",
    "rank": 466,
    "pinyin": [
      "zhǎo"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 7,
    "decomposition": "⿰扌戈",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、戈。",
    "observationHint": "先觀察「找」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "戈"
    ],
    "definition": "to search for, to look for, to find; change (as in money)",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-88dd",
    "layer": 2,
    "character": "裝",
    "rank": 467,
    "pinyin": [
      "zhuāng"
    ],
    "radical": "衣",
    "radicalMeaning": "clothes",
    "strokeCount": 13,
    "decomposition": "⿱壯衣",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 壯、衣。",
    "observationHint": "先看清楚「裝」上下兩層，再按順序落筆。",
    "parts": [
      "壯",
      "衣"
    ],
    "definition": "dress, clothes, attire; to wear, to install",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5ee3",
    "layer": 2,
    "character": "廣",
    "rank": 468,
    "pinyin": [
      "guǎng"
    ],
    "radical": "广",
    "radicalMeaning": "house on cliff",
    "strokeCount": 15,
    "decomposition": "⿸广黄",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 广、黄。",
    "observationHint": "先看「廣」的外框，再注意裡面的部分。",
    "parts": [
      "广",
      "黄"
    ],
    "definition": "broad, vast, wide; building, house",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-986f",
    "layer": 2,
    "character": "顯",
    "rank": 469,
    "pinyin": [
      "xiǎn"
    ],
    "radical": "頁",
    "radicalMeaning": "leaf",
    "strokeCount": 23,
    "decomposition": "⿰㬎頁",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 㬎、頁。",
    "observationHint": "先觀察「顯」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "㬎",
      "頁"
    ],
    "definition": "clear, evident; prominent; to show",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5427",
    "layer": 2,
    "character": "吧",
    "rank": 470,
    "pinyin": [
      "bā"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 7,
    "decomposition": "⿰口巴",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 口、巴。",
    "observationHint": "先觀察「吧」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "口",
      "巴"
    ],
    "definition": "emphatic final particle",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-963f",
    "layer": 2,
    "character": "阿",
    "rank": 471,
    "pinyin": [
      "ā"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 7,
    "decomposition": "⿰阝可",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 阝、可。",
    "observationHint": "先觀察「阿」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "阝",
      "可"
    ],
    "definition": "an initial particle, a prefix used for names; used in transliterations",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-674e",
    "layer": 2,
    "character": "李",
    "rank": 472,
    "pinyin": [
      "lǐ"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 7,
    "decomposition": "⿱木子",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 木、子。",
    "observationHint": "先看清楚「李」上下兩層，再按順序落筆。",
    "parts": [
      "木",
      "子"
    ],
    "definition": "plum; luggage; surname",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6a19",
    "layer": 2,
    "character": "標",
    "rank": 473,
    "pinyin": [
      "biāo"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 15,
    "decomposition": "⿰木票",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、票。",
    "observationHint": "先觀察「標」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "票"
    ],
    "definition": "mark, sign, symbol; bid, prize",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8ac7",
    "layer": 2,
    "character": "談",
    "rank": 474,
    "pinyin": [
      "tán"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 15,
    "decomposition": "⿰言炎",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、炎。",
    "observationHint": "先觀察「談」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "炎"
    ],
    "definition": "to talk, to chat; conversation; surname",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5716",
    "layer": 2,
    "character": "圖",
    "rank": 476,
    "pinyin": [
      "tú"
    ],
    "radical": "囗",
    "radicalMeaning": "enclosure",
    "strokeCount": 14,
    "decomposition": "⿴囗啚",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 囗、啚。",
    "observationHint": "先看「圖」的外框，再注意裡面的部分。",
    "parts": [
      "囗",
      "啚"
    ],
    "definition": "diagram, chart, map, picture; to plan",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5538",
    "layer": 2,
    "character": "唸",
    "rank": 477,
    "pinyin": [
      "niàn"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 11,
    "decomposition": "⿰口念",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 口、念。",
    "observationHint": "先觀察「唸」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "口",
      "念"
    ],
    "definition": "to recite, to read, to chant",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-516d",
    "layer": 2,
    "character": "六",
    "rank": 478,
    "pinyin": [
      "liù"
    ],
    "radical": "八",
    "radicalMeaning": "eight/divide",
    "strokeCount": 4,
    "decomposition": "⿱亠八",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 亠、八。",
    "observationHint": "先看清楚「六」上下兩層，再按順序落筆。",
    "parts": [
      "亠",
      "八"
    ],
    "definition": "six",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5f15",
    "layer": 2,
    "character": "引",
    "rank": 479,
    "pinyin": [
      "yǐn"
    ],
    "radical": "弓",
    "radicalMeaning": "bow",
    "strokeCount": 4,
    "decomposition": "⿰弓丨",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 弓、丨。",
    "observationHint": "先觀察「引」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "弓",
      "丨"
    ],
    "definition": "to pull, to stretch; to draw; to attract",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6b77",
    "layer": 2,
    "character": "歷",
    "rank": 480,
    "pinyin": [
      "lì"
    ],
    "radical": "止",
    "radicalMeaning": "stop",
    "strokeCount": 16,
    "decomposition": "⿸厤止",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 厤、止。",
    "observationHint": "先看「歷」的外框，再注意裡面的部分。",
    "parts": [
      "厤",
      "止"
    ],
    "definition": "history; calendar",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9996",
    "layer": 2,
    "character": "首",
    "rank": 481,
    "pinyin": [
      "shǒu"
    ],
    "radical": "首",
    "radicalMeaning": "head",
    "strokeCount": 9,
    "decomposition": "⿱丷自",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 丷、自。",
    "observationHint": "先看清楚「首」上下兩層，再按順序落筆。",
    "parts": [
      "丷",
      "自"
    ],
    "definition": "chief, head, leader",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-91ab",
    "layer": 2,
    "character": "醫",
    "rank": 482,
    "pinyin": [
      "yī"
    ],
    "radical": "酉",
    "radicalMeaning": "wine/alcohol",
    "strokeCount": 18,
    "decomposition": "⿱殹酉",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 殹、酉。",
    "observationHint": "先看清楚「醫」上下兩層，再按順序落筆。",
    "parts": [
      "殹",
      "酉"
    ],
    "definition": "to cure, to heal, to treat; doctor; medicine",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-4fb7",
    "layer": 2,
    "character": "侷",
    "rank": 483,
    "pinyin": [
      "jú"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 9,
    "decomposition": "⿰亻局",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、局。",
    "observationHint": "先觀察「侷」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "局"
    ],
    "definition": "narrow, cramped, confined",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7a81",
    "layer": 2,
    "character": "突",
    "rank": 484,
    "pinyin": [
      "tū"
    ],
    "radical": "穴",
    "radicalMeaning": "cave",
    "strokeCount": 9,
    "decomposition": "⿱穴犬",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 穴、犬。",
    "observationHint": "先看清楚「突」上下兩層，再按順序落筆。",
    "parts": [
      "穴",
      "犬"
    ],
    "definition": "sudden, abrupt, unexpected",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5c08",
    "layer": 2,
    "character": "專",
    "rank": 485,
    "pinyin": [
      "zhuān"
    ],
    "radical": "寸",
    "radicalMeaning": "thumb",
    "strokeCount": 11,
    "decomposition": "⿱叀寸",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 叀、寸。",
    "observationHint": "先看清楚「專」上下兩層，再按順序落筆。",
    "parts": [
      "叀",
      "寸"
    ],
    "definition": "concentrated, specialized; to monopolize",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8cbb",
    "layer": 2,
    "character": "費",
    "rank": 486,
    "pinyin": [
      "fèi"
    ],
    "radical": "貝",
    "radicalMeaning": "shell",
    "strokeCount": 12,
    "decomposition": "⿱弗貝",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 弗、貝。",
    "observationHint": "先看清楚「費」上下兩層，再按順序落筆。",
    "parts": [
      "弗",
      "貝"
    ],
    "definition": "expenses, fees; to cost, to spend; wasteful",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-865f",
    "layer": 2,
    "character": "號",
    "rank": 487,
    "pinyin": [
      "hào"
    ],
    "radical": "虎",
    "radicalMeaning": null,
    "strokeCount": 13,
    "decomposition": "⿰号虎",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 号、虎。",
    "observationHint": "先觀察「號」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "号",
      "虎"
    ],
    "definition": "mark, sign; symbol; number; to call, to cry, to roar",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-76e1",
    "layer": 2,
    "character": "盡",
    "rank": 488,
    "pinyin": [
      "jǐn"
    ],
    "radical": "皿",
    "radicalMeaning": "dish",
    "strokeCount": 14,
    "decomposition": "⿱⿱聿灬皿",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 聿、灬、皿。",
    "observationHint": "先看清楚「盡」上下兩層，再按順序落筆。",
    "parts": [
      "聿",
      "灬",
      "皿"
    ],
    "definition": "to exhaust, to use up, to deplete",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53e6",
    "layer": 2,
    "character": "另",
    "rank": 489,
    "pinyin": [
      "lìng"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 5,
    "decomposition": "⿱口力",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 口、力。",
    "observationHint": "先看清楚「另」上下兩層，再按順序落筆。",
    "parts": [
      "口",
      "力"
    ],
    "definition": "another; separate, other",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9031",
    "layer": 2,
    "character": "週",
    "rank": 490,
    "pinyin": [
      "zhōu"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 11,
    "decomposition": "⿺辶周",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、周。",
    "observationHint": "先看「週」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "周"
    ],
    "definition": "week; turn, cycle; anniversary",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8f03",
    "layer": 2,
    "character": "較",
    "rank": 491,
    "pinyin": [
      "jiào"
    ],
    "radical": "車",
    "radicalMeaning": "car",
    "strokeCount": 13,
    "decomposition": "⿰車交",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 車、交。",
    "observationHint": "先觀察「較」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "車",
      "交"
    ],
    "definition": "to compare; relatively; more",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a3b",
    "layer": 2,
    "character": "註",
    "rank": 492,
    "pinyin": [
      "zhù"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 12,
    "decomposition": "⿰言主",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、主。",
    "observationHint": "先觀察「註」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "主"
    ],
    "definition": "to concentrate, to focus",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8a9e",
    "layer": 2,
    "character": "語",
    "rank": 493,
    "pinyin": [
      "yǔ"
    ],
    "radical": "言",
    "radicalMeaning": "speech",
    "strokeCount": 14,
    "decomposition": "⿰言吾",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 言、吾。",
    "observationHint": "先觀察「語」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "言",
      "吾"
    ],
    "definition": "words, language; saying, expression",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-50c5",
    "layer": 2,
    "character": "僅",
    "rank": 494,
    "pinyin": [
      "jǐn"
    ],
    "radical": "亻",
    "radicalMeaning": "human",
    "strokeCount": 13,
    "decomposition": "⿰亻堇",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 亻、堇。",
    "observationHint": "先觀察「僅」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "亻",
      "堇"
    ],
    "definition": "only, merely, solely, just",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8003",
    "layer": 2,
    "character": "考",
    "rank": 495,
    "pinyin": [
      "kǎo"
    ],
    "radical": "耂",
    "radicalMeaning": "old",
    "strokeCount": 6,
    "decomposition": "⿸耂丂",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 耂、丂。",
    "observationHint": "先看「考」的外框，再注意裡面的部分。",
    "parts": [
      "耂",
      "丂"
    ],
    "definition": "to test, to investigate, to examine",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-843d",
    "layer": 2,
    "character": "落",
    "rank": 496,
    "pinyin": [
      "luò"
    ],
    "radical": "艹",
    "radicalMeaning": "grass",
    "strokeCount": 12,
    "decomposition": "⿱艹洛",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 艹、洛。",
    "observationHint": "先看清楚「落」上下兩層，再按順序落筆。",
    "parts": [
      "艹",
      "洛"
    ],
    "definition": "to fall, to drop; surplus, net income",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9752",
    "layer": 2,
    "character": "青",
    "rank": 497,
    "pinyin": [
      "qīng"
    ],
    "radical": "青",
    "radicalMeaning": "green/blue",
    "strokeCount": 8,
    "decomposition": "⿱龶月",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 龶、月。",
    "observationHint": "先看清楚「青」上下兩層，再按順序落筆。",
    "parts": [
      "龶",
      "月"
    ],
    "definition": "nature's color; blue, green, black; young",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-96a8",
    "layer": 2,
    "character": "隨",
    "rank": 498,
    "pinyin": [
      "suí"
    ],
    "radical": "阝",
    "radicalMeaning": "town",
    "strokeCount": 14,
    "decomposition": "⿰阝遀",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 阝、遀。",
    "observationHint": "先觀察「隨」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "阝",
      "遀"
    ],
    "definition": "to follow, to listen to, to submit to",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-9078",
    "layer": 2,
    "character": "選",
    "rank": 499,
    "pinyin": [
      "xuǎn"
    ],
    "radical": "辶",
    "radicalMeaning": "walk",
    "strokeCount": 15,
    "decomposition": "⿺辶巽",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 辶、巽。",
    "observationHint": "先看「選」的外框，再注意裡面的部分。",
    "parts": [
      "辶",
      "巽"
    ],
    "definition": "to select, to elect, to choose; election",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5217",
    "layer": 2,
    "character": "列",
    "rank": 500,
    "pinyin": [
      "liè"
    ],
    "radical": "刂",
    "radicalMeaning": "knife",
    "strokeCount": 6,
    "decomposition": "⿰歹刂",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 歹、刂。",
    "observationHint": "先觀察「列」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "歹",
      "刂"
    ],
    "definition": "a line; to arrange, to classify",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-6b66",
    "layer": 2,
    "character": "武",
    "rank": 501,
    "pinyin": [
      "wǔ"
    ],
    "radical": "止",
    "radicalMeaning": "stop",
    "strokeCount": 8,
    "decomposition": "⿸一⿹弋止",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 一、弋、止。",
    "observationHint": "先看「武」的外框，再注意裡面的部分。",
    "parts": [
      "一",
      "弋",
      "止"
    ],
    "definition": "military; martial, warlike",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7d05",
    "layer": 2,
    "character": "紅",
    "rank": 502,
    "pinyin": [
      "hóng"
    ],
    "radical": "糹",
    "radicalMeaning": "silk",
    "strokeCount": 9,
    "decomposition": "⿰糹工",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 糹、工。",
    "observationHint": "先觀察「紅」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "糹",
      "工"
    ],
    "definition": "red, vermillion; to blush, to flush; popular",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-97ff",
    "layer": 2,
    "character": "響",
    "rank": 503,
    "pinyin": [
      "xiǎng"
    ],
    "radical": "音",
    "radicalMeaning": "sound",
    "strokeCount": 20,
    "decomposition": "⿱鄉音",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 鄉、音。",
    "observationHint": "先看清楚「響」上下兩層，再按順序落筆。",
    "parts": [
      "鄉",
      "音"
    ],
    "definition": "to make noise, to make sound; sound",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-96d6",
    "layer": 2,
    "character": "雖",
    "rank": 504,
    "pinyin": [
      "suī"
    ],
    "radical": "隹",
    "radicalMeaning": "small bird",
    "strokeCount": 17,
    "decomposition": "⿰虽隹",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 虽、隹。",
    "observationHint": "先觀察「雖」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "虽",
      "隹"
    ],
    "definition": "although, even though",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-63a8",
    "layer": 2,
    "character": "推",
    "rank": 505,
    "pinyin": [
      "tuī"
    ],
    "radical": "扌",
    "radicalMeaning": "hand",
    "strokeCount": 11,
    "decomposition": "⿰扌隹",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 扌、隹。",
    "observationHint": "先觀察「推」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "扌",
      "隹"
    ],
    "definition": "to push; to expel; to drive; to decline",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-52e2",
    "layer": 2,
    "character": "勢",
    "rank": 506,
    "pinyin": [
      "shì"
    ],
    "radical": "力",
    "radicalMeaning": "power/force",
    "strokeCount": 13,
    "decomposition": "⿱埶力",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 埶、力。",
    "observationHint": "先看清楚「勢」上下兩層，再按順序落筆。",
    "parts": [
      "埶",
      "力"
    ],
    "definition": "power, force; tendency, attitude",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-5e0c",
    "layer": 2,
    "character": "希",
    "rank": 508,
    "pinyin": [
      "xī"
    ],
    "radical": "巾",
    "radicalMeaning": "turban/scarf",
    "strokeCount": 7,
    "decomposition": "⿱乂布",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 乂、布。",
    "observationHint": "先看清楚「希」上下兩層，再按順序落筆。",
    "parts": [
      "乂",
      "布"
    ],
    "definition": "rare; to hope for, to strive for; to expect",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-53e4",
    "layer": 2,
    "character": "古",
    "rank": 509,
    "pinyin": [
      "gǔ"
    ],
    "radical": "口",
    "radicalMeaning": "mouth",
    "strokeCount": 5,
    "decomposition": "⿱十口",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 十、口。",
    "observationHint": "先看清楚「古」上下兩層，再按順序落筆。",
    "parts": [
      "十",
      "口"
    ],
    "definition": "old, classic, ancient",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-8846",
    "layer": 2,
    "character": "衆",
    "rank": 510,
    "pinyin": [
      "zhòng"
    ],
    "radical": "血",
    "radicalMeaning": "blood",
    "strokeCount": 12,
    "decomposition": "⿱血乑",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 血、乑。",
    "observationHint": "先看清楚「衆」上下兩層，再按順序落筆。",
    "parts": [
      "血",
      "乑"
    ],
    "definition": "multitude, crowd; the public",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-69cb",
    "layer": 2,
    "character": "構",
    "rank": 511,
    "pinyin": [
      "gòu"
    ],
    "radical": "木",
    "radicalMeaning": "tree",
    "strokeCount": 14,
    "decomposition": "⿰木冓",
    "structureType": "left-right",
    "structureHint": "這是左右結構的字。 常見部分有 木、冓。",
    "observationHint": "先觀察「構」左右兩邊的分工，再把位置寫穩。",
    "parts": [
      "木",
      "冓"
    ],
    "definition": "to compose, to make; building, frame, structure",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-623f",
    "layer": 2,
    "character": "房",
    "rank": 512,
    "pinyin": [
      "fáng"
    ],
    "radical": "户",
    "radicalMeaning": "door/house",
    "strokeCount": 8,
    "decomposition": "⿸户方",
    "structureType": "surround",
    "structureHint": "這是帶包圍感的字。 常見部分有 户、方。",
    "observationHint": "先看「房」的外框，再注意裡面的部分。",
    "parts": [
      "户",
      "方"
    ],
    "definition": "building, house, room",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-534a",
    "layer": 2,
    "character": "半",
    "rank": 513,
    "pinyin": [
      "bàn"
    ],
    "radical": "十",
    "radicalMeaning": "ten",
    "strokeCount": 5,
    "decomposition": "⿻丷牛",
    "structureType": "compound",
    "structureHint": "這是由多個部分組成的字。 常見部分有 丷、牛。",
    "observationHint": "先把「半」拆成幾個部分，再把整體拼起來。",
    "parts": [
      "丷",
      "牛"
    ],
    "definition": "half; semi-, incomplete",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  },
  {
    "id": "layered-7bc0",
    "layer": 2,
    "character": "節",
    "rank": 514,
    "pinyin": [
      "jié"
    ],
    "radical": "⺮",
    "radicalMeaning": "bamboo",
    "strokeCount": 13,
    "decomposition": "⿱⺮即",
    "structureType": "top-bottom",
    "structureHint": "這是上下結構的字。 常見部分有 ⺮、即。",
    "observationHint": "先看清楚「節」上下兩層，再按順序落筆。",
    "parts": [
      "⺮",
      "即"
    ],
    "definition": "festival; knot, joint; segment; to economize, to save",
    "vocabExamples": [],
    "poemCard": null,
    "enrichmentStatus": "needs-enrichment",
    "source": "makemeahanzi+hanzijs+opencc"
  }
] as LayeredCharacterResource[];
