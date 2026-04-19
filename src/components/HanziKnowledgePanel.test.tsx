import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
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
    expect(screen.getByText('树木')).toBeInTheDocument();
    expect(screen.getByText('木字旁')).toBeInTheDocument();
  });

  it('does not include the current hanzi in related radical recommendations', () => {
    const hanzi = curriculum.hanziItems.find((item) => item.id === 'hanzi-mu');
    expect(hanzi).toBeTruthy();

    render(<HanziKnowledgePanel hanzi={hanzi!} />);

    expect(screen.queryByTestId('related-radical-item-hanzi-mu')).not.toBeInTheDocument();
    expect(screen.getAllByTestId('related-radical-item').length).toBeGreaterThan(0);
  });

  it('shows fallback copy when vocab and related radical recommendations are missing', () => {
    render(
      <HanziKnowledgePanel
        hanzi={{
          id: 'custom-test',
          character: '测',
          pinyin: 'ce',
          meaning: '测试用的字',
          radical: '测试部首',
          strokeCount: 0,
          animationLabel: '测试',
          introText: '测试',
          prompt: '测试',
          encouragement: '测试',
          projectTheme: '自由单字',
          observationHint: '先观察整体轮廓。',
          missionPrompt: '测试任务',
          vocabExamples: [],
          structureType: 'single',
          structureHint: '先观察整体轮廓，再看笔画走向。',
          parts: [],
        }}
      />,
    );

    expect(screen.getByTestId('vocabulary-examples-empty')).toBeInTheDocument();
    expect(screen.getByTestId('related-radical-empty')).toBeInTheDocument();
  });
});
