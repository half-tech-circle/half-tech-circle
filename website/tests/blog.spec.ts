import { test, expect } from '@playwright/test';

test.describe('Blog Pages', () => {
  test('blog list page loads correctly (Japanese)', async ({ page }) => {
    await page.goto('/blog');
    await expect(page).toHaveTitle(/ブログ/);
    await expect(page.locator('h1')).toContainText('ブログ');
    await expect(page.locator('text=技術の最新情報')).toBeVisible();
  });

  test('blog list page loads correctly (English)', async ({ page }) => {
    await page.goto('/en/blog');
    await expect(page).toHaveTitle(/Blog/);
    await expect(page.locator('h1')).toContainText('Blog');
    await expect(page.locator('text=Stay updated with the latest')).toBeVisible();
  });

  test('blog posts are displayed with correct information', async ({ page }) => {
    await page.goto('/blog');
    
    // Check if at least one article is displayed
    const articles = page.locator('article');
    await expect(articles).toHaveCount({ min: 1 });
    
    // Check article elements
    const firstArticle = articles.first();
    await expect(firstArticle.locator('h2')).toBeVisible();
    await expect(firstArticle.locator('.text-gray-600')).toBeVisible(); // excerpt
    await expect(firstArticle.locator('time')).toBeVisible();
  });

  test('note articles display OGP cards', async ({ page }) => {
    await page.goto('/blog');
    
    // Look for note article indicators
    const noteIndicators = page.locator('text=note記事');
    if (await noteIndicators.count() > 0) {
      // Check if OGP card or note link is present
      const ogpCards = page.locator('.border.border-gray-200.rounded-lg');
      const noteLinks = page.locator('text=noteで読む');
      
      const ogpCount = await ogpCards.count();
      const linkCount = await noteLinks.count();
      
      // At least one should be present
      expect(ogpCount + linkCount).toBeGreaterThan(0);
    }
  });

  test('markdown blog post detail page works', async ({ page }) => {
    await page.goto('/blog');
    
    // Find a markdown post (not note link)
    const markdownLinks = page.locator('text=続きを読む');
    if (await markdownLinks.count() > 0) {
      await markdownLinks.first().click();
      
      // Should be on blog detail page
      await expect(page.url()).toMatch(/\/blog\/[^\/]+$/);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('text=ブログ一覧に戻る')).toBeVisible();
    }
  });

  test('categories and tags are displayed in sidebar', async ({ page }) => {
    await page.goto('/blog');
    
    // Check categories section
    await expect(page.locator('text=カテゴリー')).toBeVisible();
    
    // Check tags section
    await expect(page.locator('text=人気のタグ')).toBeVisible();
    
    // Check archive section
    await expect(page.locator('text=アーカイブ')).toBeVisible();
  });

  test('breadcrumb navigation works on detail page', async ({ page }) => {
    await page.goto('/blog');
    
    const markdownLinks = page.locator('text=続きを読む');
    if (await markdownLinks.count() > 0) {
      await markdownLinks.first().click();
      
      // Check breadcrumb
      await expect(page.locator('nav a:text("ホーム")')).toBeVisible();
      await expect(page.locator('nav a:text("ブログ")')).toBeVisible();
      
      // Click breadcrumb link
      await page.click('nav a:text("ブログ")');
      await expect(page.url()).toContain('/blog');
    }
  });

  test('back to blog link works', async ({ page }) => {
    await page.goto('/blog');
    
    const markdownLinks = page.locator('text=続きを読む');
    if (await markdownLinks.count() > 0) {
      await markdownLinks.first().click();
      
      // Click back to blog link
      await page.click('text=ブログ一覧に戻る');
      await expect(page.url()).toContain('/blog');
    }
  });

  test('responsive design works on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/blog');
    await expect(page.locator('h1')).toBeVisible();
    
    // Check if sidebar content is accessible on mobile
    await expect(page.locator('text=カテゴリー')).toBeVisible();
  });

  test('English blog pages work correctly', async ({ page }) => {
    await page.goto('/en/blog');
    
    // Check if English content is displayed
    await expect(page.locator('h1')).toContainText('Blog');
    
    // Navigate to detail if posts exist
    const readMoreLinks = page.locator('text=Read more');
    if (await readMoreLinks.count() > 0) {
      await readMoreLinks.first().click();
      
      // Should be on English blog detail page
      await expect(page.url()).toMatch(/\/en\/blog\/[^\/]+$/);
      await expect(page.locator('text=Back to Blog')).toBeVisible();
      
      // Test back navigation
      await page.click('text=Back to Blog');
      await expect(page.url()).toContain('/en/blog');
    }
  });

  test('article metadata is displayed correctly', async ({ page }) => {
    await page.goto('/blog');
    
    const articles = page.locator('article');
    if (await articles.count() > 0) {
      const firstArticle = articles.first();
      
      // Check for publication date
      await expect(firstArticle.locator('time')).toBeVisible();
      
      // Check for category badge
      await expect(firstArticle.locator('.bg-blue-100.text-blue-800')).toBeVisible();
      
      // Check for author info
      await expect(firstArticle.locator('text=/by .+/')).toBeVisible();
    }
  });

  test('tags are clickable and properly formatted', async ({ page }) => {
    await page.goto('/blog');
    
    // Check for tags in articles
    const tagElements = page.locator('.bg-gray-100.text-gray-700');
    if (await tagElements.count() > 0) {
      // Tags should start with #
      const firstTag = await tagElements.first().textContent();
      expect(firstTag).toMatch(/^#/);
    }
    
    // Check sidebar tags
    const sidebarTags = page.locator('text=人気のタグ').locator('..').locator('a');
    if (await sidebarTags.count() > 0) {
      await expect(sidebarTags.first()).toBeVisible();
    }
  });
});