import { expect, test } from '@playwright/test';

test('learner can reach the quiz stage and finish a lesson in test mode', async ({ page }) => {
  await page.goto('/?e2e=1');

  await page.getByTestId('start-adventure').click();
  await expect(page.getByTestId('home-screen')).toBeVisible();

  await page.getByTestId('clue-map-card-forest-camp-wood-01').click();
  await expect(page.getByTestId('lesson-screen')).toBeVisible();

  await page.getByTestId('start-quiz').click();
  await expect(page.getByTestId('quiz-panel')).toBeVisible();

  await page.getByTestId('e2e-complete-quiz').click();
  await expect(page.getByTestId('lesson-summary')).toBeVisible();

  await page.getByTestId('close-summary').click();
  await expect(page.getByTestId('home-screen')).toBeVisible();
});

test('learner can start a custom hanzi lesson from the home screen', async ({ page }) => {
  await page.goto('/?e2e=1');

  await page.getByTestId('start-adventure').click();
  await page.getByTestId('custom-hanzi-input').fill('花');
  await page.getByTestId('custom-hanzi-start').click();

  await expect(page.getByTestId('lesson-screen')).toBeVisible();
  await expect(page.getByText('自由探索：花')).toBeVisible();
});

test('learner can generate a new adventure map from a knowledge point', async ({ page }) => {
  await page.goto('/?e2e=1');

  await page.getByTestId('start-adventure').click();
  await page.getByTestId('generated-map-input').fill('春天');
  await page.getByTestId('generate-map-start').click();

  await expect(page.getByTestId('generated-map-loading')).toBeVisible();
  await expect(await page.getByTestId('generated-map-screen')).toBeVisible();
  await expect(page.getByTestId('generated-map-screen').getByTestId('generated-map-level')).toHaveCount(10);
});
