import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { curriculum } from '../data/curriculum';
import { HanziKnowledgePanel } from './HanziKnowledgePanel';

describe('HanziKnowledgePanel', () => {
  it('renders structure analysis, vocabulary examples, and related radical recommendations', () => {
    const hanzi = curriculum.hanziItems.find((item) => item.id === 'hanzi-mu');
    expect(hanzi).toBeTruthy();

    render(<HanziKnowledgePanel hanzi={hanzi!} />);

    expect(screen.getByTestId('hanzi-knowledge-panel')).toBeInTheDocument();
    expect(screen.getByTestId('structure-analysis-card')).toBeInTheDocument();
    expect(screen.getByTestId('vocabulary-examples-card')).toBeInTheDocument();
    expect(screen.getByTestId('related-radical-card')).toBeInTheDocument();
    expect(screen.getByText('樹木')).toBeInTheDocument();
    expect(screen.getByText('木字旁')).toBeInTheDocument();
  });

  it('does not include the current hanzi in related radical recommendations', () => {
    const hanzi = curriculum.hanziItems.find((item) => item.id === 'hanzi-mu');
    expect(hanzi).toBeTruthy();

    render(<HanziKnowledgePanel hanzi={hanzi!} />);

    expect(screen.queryByTestId('related-radical-item-hanzi-mu')).not.toBeInTheDocument();
    expect(screen.getAllByTestId('related-radical-item').length).toBeGreaterThan(0);
  });

  it('opens another hanzi when a related radical item is clicked', async () => {
    const hanzi = curriculum.hanziItems.find((item) => item.id === 'hanzi-mu');
    expect(hanzi).toBeTruthy();
    const onOpenRelatedHanzi = vi.fn();
    const user = userEvent.setup();

    render(<HanziKnowledgePanel hanzi={hanzi!} onOpenRelatedHanzi={onOpenRelatedHanzi} />);

    await user.click(screen.getByTestId('related-radical-item-hanzi-lin'));

    expect(onOpenRelatedHanzi).toHaveBeenCalledWith('hanzi-lin');
  });

  it('shows fallback copy when vocab and related radical recommendations are missing', () => {
    render(
      <HanziKnowledgePanel
        hanzi={{
          id: 'custom-test',
          character: '學',
          pinyin: 'xué',
          meaning: '測試用字',
          radical: '自由單字',
          strokeCount: 0,
          animationLabel: '測試',
          introText: '測試',
          prompt: '測試',
          encouragement: '測試',
          projectTheme: '自由單字',
          observationHint: '先觀察整體輪廓。',
          missionPrompt: '測試任務',
          vocabExamples: [],
          structureType: 'single',
          structureHint: '先觀察整體輪廓，再看筆畫走向。',
          parts: [],
        }}
      />,
    );

    expect(screen.getByTestId('vocabulary-examples-empty')).toBeInTheDocument();
    expect(screen.getByTestId('related-radical-empty')).toBeInTheDocument();
  });
});
