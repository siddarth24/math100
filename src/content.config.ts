import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const figureSchema = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
});

const questionSchema = z.object({
  number: z.number(),
  id: z.string(),
  stage: z.number().nullable(),
  half: z.enum(['first', 'harder']),
  oldExam: z.boolean().default(false),
  asking: z.string(),
  statement: z.string(),
  figures: z.array(figureSchema).optional(),
});

const videoItemSchema = z.object({
  title: z.string(),
  creator: z.string(),
  url: z.string().url(),
  watchFor: z.string().optional(),
  note: z.string().optional(),
});

const topicsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/topics' }),
  schema: z.object({
    slug: z.string(),
    section: z.string(),
    title: z.string(),
    shortTitle: z.string(),
    group: z.string(),
    order: z.number(),
    flavour: z.enum(['all', 'A', 'AB', 'B', 'C']),
    goal: z.string(),
    howToReadOverride: z
      .object({
        title: z.string(),
        body: z.string(),
        cueWords: z.array(z.string()).optional(),
      })
      .optional(),
    beforeThis: z.object({
      skill: z.string(),
      links: z
        .array(
          z.object({
            label: z.string(),
            href: z.string(),
          })
        )
        .max(2),
    }),
    seeIt: z.array(videoItemSchema),
    slowWalkthrough: z.array(videoItemSchema).optional(),
    staged: z.boolean(),
    practiceNote: z.string().optional(),
    questions: z.array(questionSchema),
  }),
});

export const collections = {
  topics: topicsCollection,
};
