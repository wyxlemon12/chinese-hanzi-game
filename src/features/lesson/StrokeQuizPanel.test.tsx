import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { StrokeQuizPanel } from './StrokeQuizPanel';

const createMock = vi.fn();
const quizMock = vi.fn();
const cancelQuizMock = vi.fn();

vi.mock('hanzi-writer', () => ({
  default: {
    create: (...args: unknown[]) => {
      createMock(...args);
      return {
        quiz: quizMock,
        cancelQuiz: cancelQuizMock,
      };
    },
  },
}));

describe('StrokeQuizPanel', () => {
  it('does not recreate the quiz when parent callbacks change during the same lesson', () => {
    const { rerender } = render(
      <StrokeQuizPanel
        hanzi="人"
        onMistake={() => {}}
        onCorrectStroke={() => {}}
        onComplete={() => {}}
      />,
    );

    expect(createMock).toHaveBeenCalledTimes(1);
    expect(quizMock).toHaveBeenCalledTimes(1);

    rerender(
      <StrokeQuizPanel
        hanzi="人"
        onMistake={() => {}}
        onCorrectStroke={() => {}}
        onComplete={() => {}}
      />,
    );

    expect(createMock).toHaveBeenCalledTimes(1);
    expect(quizMock).toHaveBeenCalledTimes(1);
  });
});
