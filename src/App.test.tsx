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
  it('shows onboarding first and lets the learner enter the home screen', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByTestId('start-adventure')).toBeInTheDocument();
    await user.click(screen.getByTestId('start-adventure'));

    expect(screen.getByTestId('home-screen')).toBeInTheDocument();
    expect(screen.getByTestId('camp-adventure-map')).toBeInTheDocument();
    expect(screen.getByTestId('custom-hanzi-input')).toBeInTheDocument();
    expect(screen.getByTestId('generated-map-input')).toBeInTheDocument();
  });

  it('opens a project lesson from the homepage map and shows the knowledge panel', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByTestId('start-adventure'));
    await user.click(screen.getByTestId('clue-map-card-forest-camp-wood-01'));

    expect(screen.getByTestId('lesson-screen')).toBeInTheDocument();
    expect(screen.getByText('线索 01')).toBeInTheDocument();
    expect(screen.getByText('树影收集')).toBeInTheDocument();
    expect(screen.getByTestId('hanzi-knowledge-panel')).toBeInTheDocument();
  });

  it('shows a poem deep-dive card after finishing a linked project hanzi quiz', async () => {
    const user = userEvent.setup();
    window.history.replaceState({}, '', '/?e2e=1');
    render(<App />);

    await user.click(screen.getByTestId('start-adventure'));
    await user.click(screen.getByTestId('clue-map-card-forest-camp-wood-01'));
    await user.click(screen.getByTestId('start-quiz'));
    await user.click(screen.getByTestId('e2e-complete-quiz'));

    expect(screen.getByTestId('lesson-summary')).toBeInTheDocument();
    expect(screen.getByTestId('poem-card')).toBeInTheDocument();
  });

  it('lets the learner input a custom hanzi and open a custom lesson', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByTestId('start-adventure'));
    await user.type(screen.getByTestId('custom-hanzi-input'), '花');
    await user.click(screen.getByTestId('custom-hanzi-start'));

    expect(screen.getByTestId('lesson-screen')).toBeInTheDocument();
    expect(screen.getByText('自由探索：花')).toBeInTheDocument();
  });

  it('shows loading and opens a generated adventure map after entering a knowledge point', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByTestId('start-adventure'));
    await user.type(screen.getByTestId('generated-map-input'), '春天');
    await user.click(screen.getByTestId('generate-map-start'));

    expect(screen.getByTestId('generated-map-loading')).toBeInTheDocument();
    expect(await screen.findByTestId('generated-map-screen')).toBeInTheDocument();
    expect(screen.getAllByTestId('generated-map-level')).toHaveLength(10);
  });
});
