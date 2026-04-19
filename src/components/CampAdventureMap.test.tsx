import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { CampAdventureMap } from './CampAdventureMap';
import { getProjectClueMapItems } from '../data/camp-map';

describe('CampAdventureMap', () => {
  it('renders 10 clue cards for the homepage project map', () => {
    render(
      <CampAdventureMap
        clues={getProjectClueMapItems()}
        activeClueId={null}
        onOpenClue={vi.fn()}
      />,
    );

    expect(screen.getAllByTestId('clue-map-card')).toHaveLength(10);
  });
});
