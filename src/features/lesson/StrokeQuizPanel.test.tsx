import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
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

beforeEach(() => {
  createMock.mockClear();
  quizMock.mockClear();
  cancelQuizMock.mockClear();
});

describe('StrokeQuizPanel', () => {
  it('does not recreate the quiz when parent callbacks change for the same hanzi and same mode', () => {
    const { rerender } = render(
      <StrokeQuizPanel
        hanzi="人"
        mistakeOffset={0}
        practiceMode="guided"
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
        mistakeOffset={0}
        practiceMode="guided"
        onMistake={() => {}}
        onCorrectStroke={() => {}}
        onComplete={() => {}}
      />,
    );

    expect(createMock).toHaveBeenCalledTimes(1);
    expect(quizMock).toHaveBeenCalledTimes(1);
  });

  it('recreates the quiz when practice mode changes and switches visual guidance', () => {
    const { rerender } = render(
      <StrokeQuizPanel
        hanzi="人"
        mistakeOffset={0}
        practiceMode="guided"
        onMistake={() => {}}
        onCorrectStroke={() => {}}
        onComplete={() => {}}
      />,
    );

    expect(createMock).toHaveBeenLastCalledWith(
      expect.any(HTMLDivElement),
      '人',
      expect.objectContaining({
        showCharacter: true,
        showOutline: true,
        strokeColor: '#94a3b8',
        outlineColor: '#cbd5e1',
      }),
    );

    rerender(
      <StrokeQuizPanel
        hanzi="人"
        mistakeOffset={1}
        practiceMode="blank"
        onMistake={() => {}}
        onCorrectStroke={() => {}}
        onComplete={() => {}}
      />,
    );

    expect(createMock).toHaveBeenCalledTimes(2);
    expect(createMock).toHaveBeenLastCalledWith(
      expect.any(HTMLDivElement),
      '人',
      expect.objectContaining({
        showCharacter: false,
        showOutline: false,
        strokeColor: '#0f172a',
        outlineColor: '#ffffff',
      }),
    );
  });
});
