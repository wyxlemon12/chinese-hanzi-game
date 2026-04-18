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

beforeEach(() => {
  vi.stubGlobal('crypto', {
    randomUUID: () => 'test-uuid',
  });
  window.localStorage.clear();
});

describe('App', () => {
  it('shows onboarding first and lets the learner enter the home screen', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(
      screen.getByRole('heading', { name: '书院汉字小勇士' }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '开始今天的冒险' }));

    expect(
      screen.getByRole('heading', { name: '继续今天的汉字冒险' }),
    ).toBeInTheDocument();
    expect(screen.getByText('第一站：看见汉字的样子')).toBeInTheDocument();
  });

  it('opens the first lesson and shows the demo stage before quiz', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: '开始今天的冒险' }));
    await user.click(screen.getByRole('button', { name: '开始第 1 关：认识“人”' }));

    expect(screen.getByText('演示段')).toBeInTheDocument();
    expect(screen.getByText('练习段')).toBeInTheDocument();
    expect(screen.getByText('先看老师把“人”写一遍')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: '开始描写测验' }),
    ).toBeInTheDocument();
  });
});
