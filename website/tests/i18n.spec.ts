import { test, expect } from '@playwright/test';

test('Japanese homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('はーふテックサークル');
  await expect(page.locator('main h1').first()).toContainText('はーふテックサークル');
});

test('English homepage loads correctly', async ({ page }) => {
  await page.goto('/en');
  await expect(page).toHaveTitle('Half Tech Circle');
  await expect(page.locator('main h1').first()).toContainText('Half Tech Circle');
});

test('Language selector works', async ({ page }) => {
  // Start on Japanese page
  await page.goto('/');
  await expect(page.locator('main h1').first()).toContainText('はーふテックサークル');
  
  // Click English link
  await page.click('a:text("English")');
  await expect(page).toHaveURL('/en');
  await expect(page.locator('main h1').first()).toContainText('Half Tech Circle');
  
  // Click Japanese link
  await page.click('a:text("日本語")');
  await expect(page).toHaveURL('/');
  await expect(page.locator('main h1').first()).toContainText('はーふテックサークル');
});

test('Navigation works in both languages', async ({ page }) => {
  // Test Japanese navigation
  await page.goto('/');
  await expect(page.locator('nav a:text("技術書")')).toBeVisible();
  await expect(page.locator('nav a:text("メンバー")')).toBeVisible();
  
  // Test English navigation
  await page.goto('/en');
  await expect(page.locator('nav a:text("Books")')).toBeVisible();
  await expect(page.locator('nav a:text("Members")')).toBeVisible();
});

test('Active language indicator works', async ({ page }) => {
  // Japanese page should have active Japanese indicator
  await page.goto('/');
  await expect(page.locator('a:text("日本語").bg-blue-600')).toBeVisible();
  
  // English page should have active English indicator  
  await page.goto('/en');
  await expect(page.locator('a:text("English").bg-blue-600')).toBeVisible();
});