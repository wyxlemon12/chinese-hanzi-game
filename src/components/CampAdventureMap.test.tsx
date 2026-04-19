import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('calls onOpenClue with the clicked level id', async () => {
    const user = userEvent.setup();
    const onOpenClue = vi.fn();

    render(
      <CampAdventureMap
        clues={getProjectClueMapItems()}
        activeClueId={null}
        onOpenClue={onOpenClue}
      />,
    );

    await user.click(screen.getByTestId('clue-map-card-forest-camp-wood-01'));

    expect(onOpenClue).toHaveBeenCalledWith('forest-camp-wood-01');
  });
});
