// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const profile = defineCollection({
  type: 'data', // v2.5.0 and later
  schema: z.object({
    about: z.string(),
    vision: z.string(),
    mission: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'profile': profile,
};