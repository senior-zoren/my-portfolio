import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    publishDate: z.date(),
    type: z.enum(['dict', 'personal']).default('personal'),
    code: z.string().optional(),
    status: z.string().optional(), // Added status field (e.g., "Client-Ready System", "Active Production Utility", "Capstone / R&D")
    featured: z.boolean().default(true),
    order: z.number().default(99),
    role: z.string().optional(),
    highlights: z.array(z.string()).optional(),
    // Accepts a valid URL, empty string, or undefined
    link: z.string().url().or(z.literal('')).optional(),
    github: z.string().url().or(z.literal('')).optional(),
  }),
});

export const collections = { projects };