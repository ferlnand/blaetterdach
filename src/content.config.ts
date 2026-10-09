import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

// One Markdown file per service, shown on /leistungen and as buttons on the start page.
const leistungen = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/leistungen" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      button: z.string().optional(),
      order: z.number(),
      image: image().optional(),
      imageAlt: z.string().optional(),
    }),
});

// Text blocks of the regular pages (Start, Über mich, Für Unternehmen).
const seiten = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/seiten" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    blocks: z.record(z.string()).default({}),
  }),
});

// Impressum, AGB, Datenschutzerklärung as plain Markdown.
const rechtliches = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/rechtliches" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

// Contact details and form settings used across the site.
const einstellungen = defineCollection({
  loader: file("./src/content/einstellungen.json"),
  schema: z.object({
    firma: z.string(),
    name: z.string(),
    strasse: z.string(),
    ort: z.string(),
    telefon: z.string(),
    email: z.string(),
    web3formsKey: z.string().default(""),
  }),
});

export const collections = { leistungen, seiten, rechtliches, einstellungen };
