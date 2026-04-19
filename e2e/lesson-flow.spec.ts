import { expect, test } from '@playwright/test';

test('learner can enter a grouped lesson and finish it through two practice rounds', async ({ page }) => {
  await page.goto('/?e2e=1');

  await page.getByTestId('character-input').fill('樹');
  await page.getByTestId('character-start').click();

  await expect(page.getByTestId('generated-map-screen')).toBeVisible();
  await expect(page.getByTestId('generated-map-level')).toHaveCount(5);

  await page.getByTestId('generated-map-level').first().click();
  await expect(page.getByTestId('lesson-screen')).toBeVisible();

  await page.getByTestId('start-quiz').click();
  await expect(page.getByText('第一輪：描紅練習')).toBeVisible();

  await page.getByTestId('e2e-complete-quiz').click();
  await expect(page.getByText('第二輪：空白默寫')).toBeVisible();

  await page.getByTestId('e2e-complete-quiz').click();
  await expect(page.getByTestId('lesson-summary')).toBeVisible();
});

test('learner can open a custom single-character lesson for a non-seeded character', async ({ page }) => {
  await page.goto('/?e2e=1');

  await page.getByTestId('character-input').fill('學');
  await page.getByTestId('character-start').click();

  await expect(page.getByTestId('lesson-screen')).toBeVisible();
  await expect(page.getByText('單字練習：學')).toBeVisible();
});

test('learner can open a random 5-character group', async ({ page }) => {
  await page.goto('/?e2e=1');

  await page.getByTestId('random-group-start').click();

  await expect(page.getByTestId('generated-map-screen')).toBeVisible();
  await expect(page.getByTestId('generated-map-level')).toHaveCount(5);
});
