import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const strings = defineCollection({
  loader: glob({
    base: "./src/content/strings",
    pattern: "**/*.json",
  }),
  schema: z.object({
    header: z.object({
      apps: z.string(),
      blog: z.string(),
      team: z.string(),
      about: z.string(),
    }),
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      donate: z.string(),
    }),
    profile: z.object({
      title: z.string(),
      subtitle: z.string(),
      about: z.object({
        description: z.string(),
      }),
      vision: z.object({
        title: z.string(),
        text: z.string(),
      }),
      mission: z.object({
        title: z.string(),
        text: z.string(),
      }),
    }),
    donation: z.object({
      title: z.string(),
      description: z.string(),
    }),
    products: z.object({
      title: z.string(),
      description: z.string(),
      hint: z.string(),
      label: z.string(),
      close: z.string(),
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
      copyright: z.string(),
    }),
  }),
});

const apps = defineCollection({
  loader: glob({
    base: "./src/content/apps",
    pattern: "**/*.json",
  }),
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      title: z.string(),
      description: z.string(),
      featuresTitle: z.string(),
      features: z.array(z.string()),
      img: image(),
    }),
});

const links = defineCollection({
  loader: glob({
    base: "./src/content/links",
    pattern: "**/*.json",
  }),
  schema: z.object({
    github: z.url(),
    play: z.url().optional(),
    fdroid: z.url().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.{md,mdx}",
  }),
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      title: z.string(),
      summary: z.string(),
      tags: z.array(z.string()).optional(),
      author: z.string().default("Anonymous"),
      date: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      image: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

export const collections = {
  strings,
  apps,
  links,
  blog,
};