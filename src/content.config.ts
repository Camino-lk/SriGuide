import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: () =>
        z.object({
          datePublished: z.coerce.date().optional(),
          author: z
            .object({ name: z.string(), url: z.string().url().optional() })
            .optional(),
          articleImage: z.string().optional(),
        }),
    }),
  }),
};
