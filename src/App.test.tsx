import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

vi.mock('hanzi-writer', () => ({
  default: {
    create: () => ({
      hideCharacter: vi.fn(),
      showOutline: vi.fn(),
      animateCharacter: ({ onComplete }: { onComplete?: () => void }) => {
        onComplete?.();
      },
      quiz: vi.fn(),
      cancelQuiz: vi.fn(),
    }),
  },
}));

vi.mock('canvas-confetti', () => ({
  default: vi.fn(),
}));

beforeEach(() => {
  vi.stubGlobal('crypto', {
    randomUUID: () => 'test-uuid',
  });
  window.localStorage.clear();
  window.history.replaceState({}, '', '/');
});

describe('App', () => {
  it('shows the tool-style home screen immediately', () => {
    render(<App />);

    expect(screen.getByTestId('home-screen')).toBeInTheDocument();
    expect(screen.getByTestId('character-input')).toBeInTheDocument();
    expect(screen.getByTestId('random-group-start')).toBeInTheDocument();
    expect(screen.getByTestId('resume-group')).toBeInTheDocument();
  });

  it('normalizes simplified input and opens the matching 5-character group', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByTestId('character-input'), '树');
    await user.click(screen.getByTestId('character-start'));

    expect(await screen.findByTestId('generated-map-screen')).toBeInTheDocument();
    expect(screen.getByText('木字旁 5 字組')).toBeInTheDocument();
    expect(screen.getAllByTestId('generated-map-level')).toHaveLength(5);
  });

  it('opens a custom single-character lesson when the input is outside the 50-character set', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByTestId('character-input'), '學');
    await user.click(screen.getByTestId('character-start'));

    expect(screen.getByTestId('lesson-screen')).toBeInTheDocument();
    expect(screen.getByText('單字練習：學')).toBeInTheDocument();
  });

  it('lets the learner open a lesson from a 5-character group', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByTestId('random-group-start'));
    expect(await screen.findByTestId('generated-map-screen')).toBeInTheDocument();

    await user.click(screen.getAllByTestId('generated-map-level')[0]);
    expect(screen.getByTestId('lesson-screen')).toBeInTheDocument();
  });
});
