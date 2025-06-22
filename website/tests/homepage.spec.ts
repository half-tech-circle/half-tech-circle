import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('はーふテックサークル');
});

test('hero section is visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('はーふテックサークル');
  await expect(page.locator('text=技術同人誌制作サークル')).toBeVisible();
});

test('navigation menu works', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('nav a[href="/books"]')).toContainText('技術書');
  await expect(page.locator('nav a[href="/members"]')).toContainText('メンバー');
  await expect(page.locator('nav a[href="/blog"]')).toContainText('ブログ');
  await expect(page.locator('nav a[href="/contact"]')).toContainText('お問い合わせ');
});

test('about section is visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=サークルについて')).toBeVisible();
  await expect(page.locator('text=技術書制作')).toBeVisible();
  await expect(page.locator('text=イベント参加')).toBeVisible();
  await expect(page.locator('text=国際展開')).toBeVisible();
});

test('footer is visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.locator('text=© 2025 はーふテックサークル')).toBeVisible();
});

test('responsive design', async ({ page }) => {
  // Mobile test
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
  
  // Desktop test
  await page.setViewportSize({ width: 1200, height: 800 });
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
});