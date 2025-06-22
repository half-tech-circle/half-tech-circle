export interface Book {
  id: string;
  title: {
    ja: string;
    en: string;
  };
  description: {
    ja: string;
    en: string;
  };
  cover: string;
  samples: string[];
  publishDate: string;
  pages: number;
  price: {
    physical?: number;
    digital?: number;
  };
  isbn?: string;
  category: string;
  tags: string[];
  purchaseLinks: {
    booth?: string;
    techbookfest?: string;
    kindle?: string;
    booth_international?: string;
  };
  status: 'published' | 'coming-soon' | 'draft';
}