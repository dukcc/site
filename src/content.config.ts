import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";
import { IconProps } from "./types/MeowIcons";

const meows = defineCollection({
  loader: glob({ base: "./src/content/meows", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: IconProps,
  }),
});

export const collections = { meows };
