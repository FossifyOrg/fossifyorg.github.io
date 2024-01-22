// 1. Import utilities from `astro:content`
import { date } from 'astro/zod';
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const strings = defineCollection({
  type: 'data', // v2.5.0 and later
  schema: z.object({
    header: z.object({
      apps: z.string(),
      blog: z.string(),
      team: z.string(),
      about: z.string()
    }),
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      donate: z.string()
    }),
    profile: z.object({
      title: z.string(),
      aboutUs: z.string(),
      vision: z.object({
        title: z.string(),
        text: z.string()
      }),
      mission: z.object({
        title: z.string(),
        text: z.string()
      })
    }),
    products: z.object({
      title: z.string(),
      description: z.string(),
      hint: z.string()
    }),
    contributors: z.object({
      title: z.string(),
      description: z.string(),
    }),
    donors: z.object({
      title: z.string(),
      description: z.string(),
    })
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'strings': strings
};