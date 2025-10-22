import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

/**
 * Read a markdown file and return { frontmatter, mdxSource }
 * @param {string} relativePath - path relative to repo root, e.g. "content/about.md"
 */
export async function getMDXFromFile(relativePath) {
  const fullPath = path.join(process.cwd(), relativePath);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data: frontmatter, content } = matter(raw);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
      format: "mdx",
    },
    scope: frontmatter,
  });

  return { frontmatter, mdxSource };
}

/**
 * Read all files inside a folder and return parsed frontmatter (no serialization)
 * Useful for listing projects/blog posts
 * @param {string} folderRelativePath e.g. "content" or "content/blog"
 */
export function getAllFrontmatterFromFolder(folderRelativePath) {
  const dir = path.join(process.cwd(), folderRelativePath);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  return files.map((filename) => {
    const filePath = path.join(dir, filename);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = matter(raw);
    return {
      ...data,
      slug: filename.replace(/\.mdx?$/, ""),
      _filename: filename,
    };
  });
}
