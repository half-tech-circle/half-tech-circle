import { test, expect } from '@playwright/test';

test.describe('Books Pages', () => {
  test('books list page loads correctly (Japanese)', async ({ page }) => {
    await page.goto('/books');
    await expect(page).toHaveTitle(/技術書/);
    await expect(page.locator('h1')).toContainText('技術書');
    await expect(page.locator('text=発売中の書籍')).toBeVisible();
  });

  test('books list page loads correctly (English)', async ({ page }) => {
    await page.goto('/en/books');
    await expect(page).toHaveTitle(/Books/);
    await expect(page.locator('h1')).toContainText('Technical Books');
    await expect(page.locator('text=Available Books')).toBeVisible();
  });

  test('books are displayed with correct information', async ({ page }) => {
    await page.goto('/books');
    
    // Check if books are displayed
    await expect(page.locator('article').first()).toBeVisible();
    
    // Check book elements
    await expect(page.locator('article img').first()).toBeVisible();
    await expect(page.locator('article h3').first()).toBeVisible();
    await expect(page.locator('article .text-gray-600').first()).toBeVisible();
    await expect(page.locator('text=詳細を見る').first()).toBeVisible();
  });

  test('book detail page loads correctly', async ({ page }) => {
    await page.goto('/books');
    
    // Click on first book
    await page.click('text=詳細を見る >> nth=0');
    
    // Should navigate to book detail page
    await expect(page.url()).toMatch(/\/books\/[^\/]+$/);
    
    // Check page elements
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=書籍情報')).toBeVisible();
    await expect(page.locator('text=価格・購入')).toBeVisible();
  });

  test('sample images are displayed', async ({ page }) => {
    await page.goto('/books');
    
    // Navigate to first book detail
    await page.click('text=詳細を見る >> nth=0');
    
    // Check if sample images section exists
    const sampleSection = page.locator('text=サンプルページ');
    if (await sampleSection.isVisible()) {
      // Check if sample images are displayed
      await expect(page.locator('[alt*="サンプル"]')).toHaveCount({ min: 1 });
    }
  });

  test('purchase links work for published books', async ({ page }) => {
    await page.goto('/books');
    
    // Navigate to a published book
    await page.click('text=詳細を見る >> nth=0');
    
    // Check if purchase links are present for published books
    const publishedIndicator = page.locator('text=発売中');
    if (await publishedIndicator.isVisible()) {
      await expect(page.locator('text=購入はこちら')).toBeVisible();
      
      // Check if purchase buttons are present
      const purchaseButtons = page.locator('a[href*="booth"], a[href*="techbookfest"], a[href*="kindle"]');
      await expect(purchaseButtons).toHaveCount({ min: 1 });
    }
  });

  test('breadcrumb navigation works', async ({ page }) => {
    await page.goto('/books');
    await page.click('text=詳細を見る >> nth=0');
    
    // Check breadcrumb
    await expect(page.locator('nav a:text("ホーム")')).toBeVisible();
    await expect(page.locator('nav a:text("技術書")')).toBeVisible();
    
    // Click breadcrumb link
    await page.click('nav a:text("技術書")');
    await expect(page.url()).toContain('/books');
  });

  test('back to books link works', async ({ page }) => {
    await page.goto('/books');
    await page.click('text=詳細を見る >> nth=0');
    
    // Click back to books link
    await page.click('text=技術書一覧に戻る');
    await expect(page.url()).toContain('/books');
  });

  test('categories section is visible', async ({ page }) => {
    await page.goto('/books');
    await expect(page.locator('text=カテゴリー')).toBeVisible();
    await expect(page.locator('a[href*="category="]')).toHaveCount({ min: 1 });
  });

  test('responsive design works on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/books');
    await expect(page.locator('h1')).toBeVisible();
    
    // Navigate to book detail
    await page.click('text=詳細を見る >> nth=0');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('English book pages work correctly', async ({ page }) => {
    await page.goto('/en/books');
    
    // Navigate to book detail
    await page.click('text=View Details >> nth=0');
    
    // Should be on English book detail page
    await expect(page.url()).toMatch(/\/en\/books\/[^\/]+$/);
    await expect(page.locator('text=Book Information')).toBeVisible();
    await expect(page.locator('text=Back to Books')).toBeVisible();
    
    // Test back navigation
    await page.click('text=Back to Books');
    await expect(page.url()).toContain('/en/books');
  });
});