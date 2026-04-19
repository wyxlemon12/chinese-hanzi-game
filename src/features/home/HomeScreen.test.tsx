import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { HomeScreen } from './HomeScreen';

function renderHomeScreen(onStartCustomHanzi = vi.fn()) {
  render(
    <HomeScreen
      completedCount={0}
      currentLevel={null}
      currentUnitTitle="准备领取第一条线索"
      totalStars={0}
      onContinue={() => {}}
      onOpenCourse={() => {}}
      onStartCustomHanzi={onStartCustomHanzi}
      onGenerateAdventureMap={vi.fn()}
      customError={null}
    />,
  );

  return {
    input: screen.getByTestId('custom-hanzi-input'),
    button: screen.getByTestId('custom-hanzi-start'),
  };
}

describe('HomeScreen custom hanzi input', () => {
  it('supports IME composition and keeps the final Chinese character', async () => {
    const { input } = renderHomeScreen();

    fireEvent.compositionStart(input);
    fireEvent.change(input, { target: { value: 'h' } });
    expect(input).toHaveValue('h');

    fireEvent.change(input, { target: { value: 'ha' } });
    expect(input).toHaveValue('ha');

    fireEvent.compositionEnd(input, { data: '好' });
    fireEvent.change(input, { target: { value: '好' } });
    expect(input).toHaveValue('好');
  });

  it('submits only the final single character after normal typing', async () => {
    const onStartCustomHanzi = vi.fn();
    const user = userEvent.setup();
    const { input, button } = renderHomeScreen(onStartCustomHanzi);

    await user.type(input, '好');
    await user.click(button);

    expect(onStartCustomHanzi).toHaveBeenCalledWith('好');
  });
});
