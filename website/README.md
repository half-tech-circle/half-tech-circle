# はーふテックサークル Website

A comprehensive multilingual website for Half Tech Circle, a technical doujinshi production circle. Built with modern web technologies for optimal performance and SEO.

[![Deploy Status](https://github.com/half-tech-circle/half-tech-circle/actions/workflows/deploy.yml/badge.svg)](https://github.com/half-tech-circle/half-tech-circle/actions/workflows/deploy.yml)

## 🌐 Live Website

**Production**: [https://half-tech-circle.github.io/](https://half-tech-circle.github.io/)

## ✨ Features

- **🌍 Multilingual**: Complete Japanese/English support
- **📚 Content Management**: Books, blog posts, member profiles
- **🎨 Modern Design**: Responsive design with Tailwind CSS
- **⚡ Performance**: Static site generation with Astro
- **🔍 SEO Optimized**: Meta tags, sitemap, structured data
- **📊 Analytics**: Google Analytics 4 integration
- **🧪 Testing**: Comprehensive E2E testing with Playwright
- **🚀 CI/CD**: Automatic GitHub Pages deployment

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) v5.10.0
- **UI Library**: [React](https://react.dev) v19.1.0
- **Language**: [TypeScript](https://typescriptlang.org) (strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4.1.10
- **Testing**: [Playwright](https://playwright.dev)
- **Linting**: [ESLint](https://eslint.org) v9
- **Deployment**: GitHub Pages with Actions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
# Clone repository
git clone https://github.com/half-tech-circle/half-tech-circle.git
cd half-tech-circle/website

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

Visit http://localhost:4321

### Environment Setup
```bash
# Copy environment template
cp .env.example .env

# Configure Google Analytics (optional)
# Edit .env and add your GA4 Measurement ID
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 📁 Project Structure

```
website/
├── src/
│   ├── components/        # Reusable UI components
│   ├── content/blog/      # Markdown blog posts (ja/en)
│   ├── data/             # Static data (books, members)
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route pages (ja/en)
│   ├── styles/           # Global CSS
│   └── types/            # TypeScript definitions
├── public/               # Static assets
├── tests/               # E2E tests
└── .github/workflows/   # CI/CD configuration
```

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run E2E tests |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check TypeScript |

## 📝 Content Management

### Blog Posts
Create markdown files in `src/content/blog/[lang]/`:

```yaml
---
title: "Post Title"
excerpt: "Brief description"
publishDate: "2025-01-15"
author: "Author Name"
category: "Category"
tags: ["tag1", "tag2"]
---

Your markdown content here...
```

### Books & Members
Edit data files:
- `src/data/books.ts` - Technical books
- `src/data/members.ts` - Circle members

## 🎯 SEO & Performance

- **Lighthouse Score**: 95+ targets for all metrics
- **Meta Tags**: Complete Open Graph and Twitter Cards
- **Structured Data**: Schema.org organization markup
- **Sitemap**: Automatic XML sitemap generation
- **Robots.txt**: Search engine optimization

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run specific test suite
npm run test tests/homepage.spec.ts

# Run tests with UI
npm run test -- --ui
```

Test coverage includes:
- Homepage functionality
- Multilingual navigation
- Books and blog pages
- Responsive design
- Accessibility

## 🚀 Deployment

### Automatic (Recommended)
- Push to `main` branch
- GitHub Actions builds and deploys automatically
- Live in 2-5 minutes

### Manual
- Go to Actions → "Deploy to GitHub Pages" → "Run workflow"

## 📊 Analytics & Monitoring

- **Google Analytics**: Configured via environment variables
- **Performance**: Lighthouse CI integration
- **Error Tracking**: Built-in Astro error handling
- **Build Status**: GitHub Actions badges

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 Documentation

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment guide
- [CLAUDE.md](../CLAUDE.md) - Project specifications
- [Astro Docs](https://docs.astro.build) - Framework documentation

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🌟 Acknowledgments

- **Built with**: [Claude Code](https://claude.ai/code)
- **Framework**: Astro team for excellent documentation
- **Community**: Technical doujinshi community for inspiration

---

**Version**: 1.0  
**Last Updated**: 2025-06-22  
**Maintainers**: Half Tech Circle