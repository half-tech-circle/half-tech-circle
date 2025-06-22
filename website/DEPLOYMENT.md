# Half Tech Circle Website - Deployment Guide

## Overview

This website is built with Astro, React, and TypeScript, designed for GitHub Pages deployment with automatic CI/CD.

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+

### Development Setup

1. **Clone and Install**
   ```bash
   git clone https://github.com/half-tech-circle/half-tech-circle.git
   cd half-tech-circle/website
   npm install --legacy-peer-deps
   ```

2. **Development Server**
   ```bash
   npm run dev
   ```
   Visit http://localhost:4321

3. **Build for Production**
   ```bash
   npm run build
   ```

### Environment Configuration

1. **Copy Environment File**
   ```bash
   cp .env.example .env
   ```

2. **Configure Google Analytics** (Optional)
   - Get GA4 Measurement ID from Google Analytics
   - Update `.env`:
     ```
     PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
     ```

## GitHub Pages Deployment

### Automatic Deployment (Recommended)

The website automatically deploys when you push to the `main` branch:

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - The workflow will build and deploy automatically

2. **Access Your Site**
   - URL: `https://half-tech-circle.github.io/`
   - Updates reflect within 2-5 minutes after push

### Manual Deployment

If needed, you can trigger deployment manually:
- Go to Actions tab → "Deploy to GitHub Pages" → "Run workflow"

## Content Management

### Adding Blog Posts

1. **Create Markdown File**
   ```bash
   # Japanese
   website/src/content/blog/ja/your-post-title.md
   
   # English  
   website/src/content/blog/en/your-post-title.md
   ```

2. **Frontmatter Format**
   ```yaml
   ---
   title: "Your Post Title"
   slug: "your-post-title"
   excerpt: "Brief description of your post"
   publishDate: "2025-01-15"
   author: "Author Name"
   category: "Tech Trends"
   tags: ["Tag1", "Tag2"]
   coverImage: "/images/blog/your-image.webp"
   readingTime: 5
   ---
   ```

### Adding Books

Edit `website/src/data/books.ts`:

```typescript
{
  id: "new-book",
  title: {
    ja: "新しい技術書",
    en: "New Technical Book"
  },
  description: {
    ja: "説明文",
    en: "Description"
  },
  // ... other fields
}
```

### Adding Members

Edit `website/src/data/members.ts`:

```typescript
{
  id: "new-member",
  name: {
    ja: "新メンバー",
    en: "New Member"
  },
  // ... other fields
}
```

## Testing

### Run Tests
```bash
npm run test         # Playwright E2E tests
npm run lint         # ESLint
npm run typecheck    # TypeScript check
```

### Performance Testing
```bash
npm run lighthouse   # Lighthouse audit
```

## Directory Structure

```
website/
├── src/
│   ├── components/     # React/Astro components
│   ├── content/        # Blog content (markdown)
│   ├── data/          # Data files (books, members)
│   ├── layouts/       # Page layouts
│   ├── pages/         # Route pages
│   ├── styles/        # Global styles
│   └── types/         # TypeScript types
├── public/            # Static assets
├── tests/             # E2E tests
└── dist/              # Built output
```

## Performance Optimization

### Lighthouse Score Targets
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### Optimization Tips
1. **Images**: Use WebP format, optimize size
2. **Code Splitting**: Astro automatically handles this
3. **Caching**: Static assets cached via GitHub Pages
4. **Bundle Analysis**: Check dist/ after build

## Troubleshooting

### Common Issues

1. **Build Fails with Tailwind Errors**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Pages Not Loading Correctly**
   - Check base path in `astro.config.mjs`
   - Ensure all links use relative paths

3. **Tests Failing**
   ```bash
   npm run test -- --headed  # Run with browser visible
   ```

### Support

- **Documentation**: Check CLAUDE.md for project specifications
- **Issues**: Create GitHub issue for bugs
- **Dependencies**: Use `--legacy-peer-deps` for npm installs

## Maintenance

### Regular Updates
1. **Dependencies**: Monthly dependency updates
2. **Content**: Regular blog posts and book updates
3. **Analytics**: Monitor GA4 for performance insights
4. **SEO**: Update sitemap.xml when adding new pages

### Security
- Dependencies auto-updated via Dependabot
- No sensitive data in repository
- Environment variables for configuration

---

**Last Updated**: 2025-06-22  
**Version**: 1.0