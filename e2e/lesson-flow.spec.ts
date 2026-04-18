import { expect, test } from '@playwright/test';

test('learner can reach the quiz stage and finish a lesson in test mode', async ({ page }) => {
  await page.goto('/?e2e=1');

  await page.getByTestId('start-adventure').click();
  await expect(page.getByTestId('home-screen')).toBeVisible();

  await page.getByTestId('continue-lesson').click();
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
