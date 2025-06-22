import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    excerpt: z.string().optional(),
    publishDate: z.string(),
    updateDate: z.string().optional(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    status: z.string().optional(),
    type: z.string().optional(),
    coverImage: z.string().optional(),
    readingTime: z.number().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};