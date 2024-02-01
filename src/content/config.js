// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from 'astro:content';

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
      subtitle: z.string(),
      about: z.object({
        description: z.string()
      }),
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

const blog = defineCollection({
  type: "content",
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    summary: z.string(),
    author: z.string().default("Anonymous"),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    related: z.array(reference('blog')).optional(),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),
    language: z.string(),
    authorContact: z.string().email().optional(),
  })
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  strings, blog
};