import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z
			.object({
				title: z.string(),
				description: z.string().optional(),
				summary: z.string().optional(),
				tags: z.array(z.string()).default([]),
				lang: z.enum(['en', 'pt']).optional(),
				translationKey: z.string().optional(),
				date: z.coerce.date().optional(),
				pubDate: z.coerce.date().optional(),
				lastmod: z.coerce.date().optional(),
				updatedDate: z.coerce.date().optional(),
				draft: z.boolean().default(false),
				authors: z.array(z.string()).optional(),
				images: z.array(z.string()).default([]),
			})
			.transform((data) => ({
				...data,
				description: data.description ?? data.summary ?? '',
				pubDate: data.pubDate ?? data.date ?? new Date(),
				updatedDate: data.updatedDate ?? data.lastmod,
				lang: data.lang,
			})),
});

export const collections = { blog };
