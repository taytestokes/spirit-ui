import { promises as fsp } from "fs";
import path from "path";

/**
 * Get a collection of all documentation MDX file slugs.
 */
export const getDocumentationSlugs = async () =>
  await fsp.readFile(path.join(process.cwd(), "app", "_docs"), "utf-8");

/**
 * Get documentation content of the MDX file by the slug name.
 */
export const getDocumentationBySlug = async (slug: string) =>
  await fsp.readFile(
    path.join(process.cwd(), "app", "_docs", `${slug}.mdx`),
    "utf-8"
  );
