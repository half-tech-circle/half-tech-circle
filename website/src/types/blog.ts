export interface BlogPost {
  id: string;
  title: {
    ja: string;
    en: string;
  };
  slug: string;
  excerpt: {
    ja: string;
    en: string;
  };
  content?: {
    ja: string;
    en: string;
  };
  publishDate: string;
  updateDate?: string;
  author: string;
  category: string;
  tags: string[];
  status: 'published' | 'draft';
  type: 'markdown' | 'note-link';
  coverImage?: string;
  noteUrl?: string; // For note articles
  ogp?: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
  readingTime?: number; // in minutes
}