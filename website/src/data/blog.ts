import type { BlogPost } from '../types/blog';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Note記事のデータ
export const noteArticles: BlogPost[] = [
  {
    id: 'ai-development-with-chatgpt',
    title: {
      ja: 'ChatGPTを活用したAI開発の実践テクニック',
      en: 'Practical AI Development Techniques with ChatGPT'
    },
    slug: 'ai-development-with-chatgpt',
    excerpt: {
      ja: 'ChatGPTを使ったAI開発における実践的なテクニックとベストプラクティスを詳しく解説しています。',
      en: 'Detailed explanation of practical techniques and best practices for AI development using ChatGPT.'
    },
    publishDate: '2024-12-20',
    author: 'はーふテックサークル',
    category: 'AI/機械学習',
    tags: ['AI', 'ChatGPT', '機械学習', 'Python'],
    status: 'published',
    type: 'note-link',
    noteUrl: 'https://note.com/half_tech_circle/n/n123456789abc',
    ogp: {
      title: 'ChatGPTを活用したAI開発の実践テクニック',
      description: 'ChatGPTを使ったAI開発における実践的なテクニックとベストプラクティスを詳しく解説しています。',
      image: 'https://assets.st-note.com/production/uploads/images/123456789/rectangle_large_type_2_abc123.png',
      url: 'https://note.com/half_tech_circle/n/n123456789abc'
    },
    readingTime: 6
  },
  {
    id: 'typescript-best-practices',
    title: {
      ja: 'TypeScript開発で知っておくべきベストプラクティス',
      en: 'Essential TypeScript Development Best Practices'
    },
    slug: 'typescript-best-practices',
    excerpt: {
      ja: 'TypeScriptプロジェクトでの型安全性を高めるベストプラクティスと、実際のプロダクト開発での活用例を紹介します。',
      en: 'Introducing best practices for enhancing type safety in TypeScript projects and practical examples in product development.'
    },
    publishDate: '2024-11-15',
    author: 'はーふテックサークル',
    category: 'プログラミング',
    tags: ['TypeScript', 'JavaScript', 'フロントエンド', '型安全性'],
    status: 'published',
    type: 'note-link',
    noteUrl: 'https://note.com/half_tech_circle/n/n987654321def',
    ogp: {
      title: 'TypeScript開発で知っておくべきベストプラクティス',
      description: 'TypeScriptプロジェクトでの型安全性を高めるベストプラクティスと、実際のプロダクト開発での活用例を紹介します。',
      image: 'https://assets.st-note.com/production/uploads/images/987654321/rectangle_large_type_2_def456.png',
      url: 'https://note.com/half_tech_circle/n/n987654321def'
    },
    readingTime: 5
  }
];

// マークダウンファイルを読み込む関数
export function getMarkdownPosts(lang: 'ja' | 'en' = 'ja'): BlogPost[] {
  try {
    const contentDir = path.join(process.cwd(), 'src', 'content', 'blog', lang);
    
    if (!fs.existsSync(contentDir)) {
      return [];
    }

    const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));
    
    const posts: BlogPost[] = files.map(file => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      return {
        id: data.slug || file.replace('.md', ''),
        title: {
          ja: lang === 'ja' ? data.title : '',
          en: lang === 'en' ? data.title : ''
        },
        slug: data.slug,
        excerpt: {
          ja: lang === 'ja' ? data.excerpt : '',
          en: lang === 'en' ? data.excerpt : ''
        },
        content: {
          ja: lang === 'ja' ? content : '',
          en: lang === 'en' ? content : ''
        },
        publishDate: data.publishDate,
        updateDate: data.updateDate,
        author: data.author,
        category: data.category,
        tags: data.tags || [],
        status: data.status || 'published',
        type: data.type || 'markdown',
        coverImage: data.coverImage,
        readingTime: data.readingTime
      };
    });

    return posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  } catch (error) {
    console.error('Error reading markdown posts:', error);
    return [];
  }
}

// 全ブログ記事を取得する関数
export function getAllBlogPosts(lang: 'ja' | 'en' = 'ja'): BlogPost[] {
  const markdownPosts = getMarkdownPosts(lang);
  const allPosts = [...markdownPosts, ...noteArticles];
  
  return allPosts
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

// カテゴリー一覧を取得
export function getCategories(lang: 'ja' | 'en' = 'ja'): string[] {
  const posts = getAllBlogPosts(lang);
  const categories = Array.from(new Set(posts.map(post => post.category)));
  return categories.sort();
}

// タグ一覧を取得
export function getTags(lang: 'ja' | 'en' = 'ja'): string[] {
  const posts = getAllBlogPosts(lang);
  const tags = Array.from(new Set(posts.flatMap(post => post.tags)));
  return tags.sort();
}