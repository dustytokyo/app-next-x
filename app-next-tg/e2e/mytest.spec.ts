import { test, expect } from '@playwright/test';

test.describe('MyTest Page', () => {
  test('should display button and open modal', async ({ page }) => {
    await page.goto('/mytest');

    // Check if button is visible
    const button = page.getByTestId('hello-button');
    await expect(button).toBeVisible();
    await expect(button).toHaveText('Click Me!');

    // Click the button
    await button.click();

    // Check if modal appears with "hello!" text
    const modal = page.getByTestId('hello-modal');
    await expect(modal).toBeVisible();
    await expect(page.getByText('hello!')).toBeVisible();
  });
});
