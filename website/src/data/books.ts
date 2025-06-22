import type { Book } from '../types/book';

export const books: Book[] = [
  {
    id: 'modern-web-development',
    title: {
      ja: 'モダンWeb開発入門',
      en: 'Introduction to Modern Web Development'
    },
    description: {
      ja: 'React、TypeScript、Astroを使ったモダンなWeb開発の手法を実践的に学べる技術書です。初心者から中級者まで対応しており、実際のプロジェクトで使える知識を身につけることができます。',
      en: 'A practical technical book to learn modern web development techniques using React, TypeScript, and Astro. Suitable for beginners to intermediate developers, providing knowledge that can be used in real projects.'
    },
    cover: '/images/books/modern-web-dev-cover.webp',
    samples: [
      '/images/books/modern-web-dev-sample1.webp',
      '/images/books/modern-web-dev-sample2.webp',
      '/images/books/modern-web-dev-sample3.webp'
    ],
    publishDate: '2024-12-01',
    pages: 280,
    price: {
      physical: 2500,
      digital: 1800
    },
    isbn: '978-4-123456-78-9',
    category: 'Web Development',
    tags: ['React', 'TypeScript', 'Astro', 'Frontend'],
    purchaseLinks: {
      booth: 'https://booth.pm/ja/items/1234567',
      techbookfest: 'https://techbookfest.org/product/1234567',
      booth_international: 'https://booth.pm/en/items/1234567'
    },
    status: 'published'
  },
  {
    id: 'ai-programming-guide',
    title: {
      ja: 'AI プログラミング実践ガイド',
      en: 'AI Programming Practical Guide'
    },
    description: {
      ja: 'Python を使った機械学習と深層学習の実装方法を詳しく解説。実際のデータセットを使った実習を通じて、AIアプリケーション開発のスキルを習得できます。',
      en: 'Detailed explanation of machine learning and deep learning implementation using Python. Acquire AI application development skills through hands-on practice with real datasets.'
    },
    cover: '/images/books/ai-programming-cover.webp',
    samples: [
      '/images/books/ai-programming-sample1.webp',
      '/images/books/ai-programming-sample2.webp',
      '/images/books/ai-programming-sample3.webp'
    ],
    publishDate: '2024-10-15',
    pages: 320,
    price: {
      physical: 3000,
      digital: 2200
    },
    category: 'AI/Machine Learning',
    tags: ['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow'],
    purchaseLinks: {
      booth: 'https://booth.pm/ja/items/2345678',
      techbookfest: 'https://techbookfest.org/product/2345678',
      booth_international: 'https://booth.pm/en/items/2345678'
    },
    status: 'published'
  },
  {
    id: 'cloud-infrastructure',
    title: {
      ja: 'クラウドインフラ設計・運用',
      en: 'Cloud Infrastructure Design & Operations'
    },
    description: {
      ja: 'AWS、Azure、GCPを使ったクラウドインフラの設計から運用まで、実践的なノウハウを総合的に学べる一冊。DevOpsエンジニア必携の技術書です。',
      en: 'A comprehensive book to learn practical know-how from cloud infrastructure design to operations using AWS, Azure, and GCP. An essential technical book for DevOps engineers.'
    },
    cover: '/images/books/cloud-infra-cover.webp',
    samples: [
      '/images/books/cloud-infra-sample1.webp',
      '/images/books/cloud-infra-sample2.webp'
    ],
    publishDate: '2025-03-01',
    pages: 400,
    price: {
      physical: 3500,
      digital: 2800
    },
    category: 'Infrastructure',
    tags: ['AWS', 'Azure', 'GCP', 'DevOps', 'Docker', 'Kubernetes'],
    purchaseLinks: {
      booth: 'https://booth.pm/ja/items/3456789',
      techbookfest: 'https://techbookfest.org/product/3456789'
    },
    status: 'coming-soon'
  }
];