import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PoemDeepDiveCard } from './PoemDeepDiveCard';
import { curriculum } from '../data/curriculum';

describe('PoemDeepDiveCard', () => {
  it('renders a linked poem snippet with source metadata', () => {
    const poemLink = curriculum.hanziPoemLinks.find((item) => item.hanziId === 'hanzi-mu') ?? null;
    const poemLibraryEntry = curriculum.poemLibrary.find((item) => item.id === poemLink?.poemLibraryEntryId) ?? null;

    render(
      <PoemDeepDiveCard
        hanziId="hanzi-mu"
        poemLibraryEntry={poemLibraryEntry}
        poemLink={poemLink}
      />,
    );

    expect(screen.getByTestId('poem-card')).toBeInTheDocument();
    expect(screen.getByTestId('poem-line')).toBeInTheDocument();
    expect(screen.getByTestId('poem-source')).toBeInTheDocument();
  });

  it('renders a fallback state when the hanzi is still waiting for a poem', () => {
    render(
      <PoemDeepDiveCard
        hanziId="hanzi-ri"
        poemLibraryEntry={null}
        poemLink={{
          hanziId: 'hanzi-ri',
          poemLibraryEntryId: null,
          matchStatus: 'missing',
          reviewNote: '待补古诗',
          reviewedBy: null,
        }}
      />,
    );

    expect(screen.getByTestId('poem-card-missing')).toBeInTheDocument();
  });
});
