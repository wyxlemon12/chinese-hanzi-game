import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { HomeScreen } from './HomeScreen';

function renderHomeScreen(onStartSingleCharacter = vi.fn()) {
  render(
    <HomeScreen
      completedCount={3}
      totalMistakes={7}
      lastGroupTitle="木字旁 5 字組"
      onResumeGroup={() => {}}
      onStartSingleCharacter={onStartSingleCharacter}
      onRandomGroup={vi.fn()}
      customError={null}
      groupError={null}
    />,
  );

  return {
    input: screen.getByTestId('character-input'),
    button: screen.getByTestId('character-start'),
  };
}

describe('HomeScreen', () => {
  it('renders the tool-style entry modules', () => {
    renderHomeScreen();

    expect(screen.getByText('我想學這個字')).toBeInTheDocument();
    expect(screen.getByText('隨機來一組')).toBeInTheDocument();
    expect(screen.getByText('回到上一組')).toBeInTheDocument();
  });

  it('supports IME composition and keeps the final Chinese character', () => {
    const { input } = renderHomeScreen();

    fireEvent.compositionStart(input);
    fireEvent.change(input, { target: { value: 'h' } });
    expect(input).toHaveValue('h');

    fireEvent.change(input, { target: { value: 'hao' } });
    expect(input).toHaveValue('hao');

    fireEvent.compositionEnd(input, { data: '好' });
    fireEvent.change(input, { target: { value: '好' } });
    expect(input).toHaveValue('好');
  });

  it('submits the raw input when the learner starts single-character practice', async () => {
    const onStartSingleCharacter = vi.fn();
    const user = userEvent.setup();
    const { input, button } = renderHomeScreen(onStartSingleCharacter);

    await user.type(input, '树');
    await user.click(button);

    expect(onStartSingleCharacter).toHaveBeenCalledWith('树');
  });
});
