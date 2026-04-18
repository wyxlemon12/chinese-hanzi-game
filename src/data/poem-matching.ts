import {
  getHanziItemById,
  getPoemLibraryEntryById,
  type AgeBand,
  type Curriculum,
  type HanziPoemLink,
  type PoemLibraryEntry,
} from './curriculum';

interface CandidateRequest {
  hanziId: string;
  projectTheme: string;
  ageBand: AgeBand;
}

interface CharacterCandidateRequest {
  character: string;
  projectTheme: string;
  ageBand: AgeBand;
}

interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export function validatePoemLibrary(curriculum: Curriculum): ValidationResult {
  const errors: string[] = [];

  for (const entry of curriculum.poemLibrary) {
    if (!entry.poemTitle || !entry.author || !entry.dynasty || !entry.lineText) {
      errors.push(`Poem entry ${entry.id} is missing required source fields.`);
    }

    if (!entry.lineText.includes(entry.focusCharacter)) {
      errors.push(`Poem entry ${entry.id} does not include focus character ${entry.focusCharacter}.`);
    }

    for (const character of entry.charactersIncluded) {
      if (!entry.lineText.includes(character)) {
        errors.push(`Poem entry ${entry.id} has invalid charactersIncluded value ${character}.`);
      }
    }
  }

  for (const link of curriculum.hanziPoemLinks) {
    if (link.matchStatus !== 'linked') {
      continue;
    }

    const target = link.poemLibraryEntryId ? getPoemLibraryEntryById(link.poemLibraryEntryId) : null;
    if (!target) {
      errors.push(`Linked hanzi ${link.hanziId} points to a missing poem entry.`);
      continue;
    }

    if (!target.isApproved) {
      errors.push(`Linked hanzi ${link.hanziId} points to an unapproved poem entry ${target.id}.`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function getPoemLinkForHanzi(curriculum: Curriculum, hanziId: string): HanziPoemLink | null {
  return curriculum.hanziPoemLinks.find((link) => link.hanziId === hanziId) ?? null;
}

export function findPoemCandidatesForHanzi(
  curriculum: Curriculum,
  request: CandidateRequest,
): PoemLibraryEntry[] {
  const hanzi = getHanziItemById(request.hanziId);
  if (!hanzi) {
    return [];
  }

  return [...curriculum.poemLibrary]
    .filter((entry) => entry.isApproved)
    .filter((entry) => entry.charactersIncluded.includes(hanzi.character))
    .sort((left, right) => scoreEntry(right, request, hanzi.character) - scoreEntry(left, request, hanzi.character))
    .slice(0, 3);
}

export function findPoemCandidatesForCharacter(
  curriculum: Curriculum,
  request: CharacterCandidateRequest,
): PoemLibraryEntry[] {
  return [...curriculum.poemLibrary]
    .filter((entry) => entry.isApproved)
    .filter((entry) => entry.charactersIncluded.includes(request.character))
    .sort((left, right) => scoreEntry(right, request, request.character) - scoreEntry(left, request, request.character))
    .slice(0, 3);
}

export function getLinkedPoemForHanzi(curriculum: Curriculum, hanziId: string) {
  const link = getPoemLinkForHanzi(curriculum, hanziId);
  if (!link || !link.poemLibraryEntryId) {
    return {
      poemLink: link,
      poemLibraryEntry: null,
    };
  }

  return {
    poemLink: link,
    poemLibraryEntry: getPoemLibraryEntryById(link.poemLibraryEntryId),
  };
}

function scoreEntry(
  entry: PoemLibraryEntry,
  request: Pick<CharacterCandidateRequest, 'projectTheme' | 'ageBand'>,
  targetCharacter: string,
) {
  let score = 0;

  if (entry.focusCharacter === targetCharacter) {
    score += 5;
  }

  if (entry.themeTags.includes(request.projectTheme)) {
    score += 4;
  }

  if (request.ageBand === '4-6' && entry.difficultyLevel === 'starter') {
    score += 3;
  }
  if (request.ageBand === '6-8' && entry.difficultyLevel !== 'advanced') {
    score += 2;
  }
  if (request.ageBand === '8-10') {
    score += 1;
  }

  if (entry.lineText.length <= 12) {
    score += 1;
  }

  return score;
}
