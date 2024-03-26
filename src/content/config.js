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
      hint: z.string(),
      label: z.string(),
      close: z.string()
    }),
    contributors: z.object({
      title: z.string(),
      description: z.string(),
    }),
    donors: z.object({
      title: z.string(),
      description: z.string(),
    }),
    footer: z.object({
      copyright: z.string()
    })
  }),
});

const apps = defineCollection({
  type: "data",
  schema: ({ image }) => z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    featuresTitle: z.string(),
    features: z.array(z.string()),
    img: image(),
  })
})

const links = defineCollection({
  type: "data",
  schema: z.object({
    github: z.string().url(),
    play: z.string().url().optional(),
    fdroid: z.string().url().optional()
  })
})

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      title: z.string(),
      summary: z.string(),
      tags: z.array(z.string()).optional(),
      author: z.string().default("Anonymous"),
      date: z.date(),
      updatedAt: z.date().optional(),
      image: z.object({ src: image(), alt: z.string() }).optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  strings, apps, links, blog
};