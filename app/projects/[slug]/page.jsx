import { getHTMLFromFile, getAllFrontmatterFromFolder } from "../../../lib/mdx";
import Link from "next/link";

export async function generateStaticParams() {
  const projects = getAllFrontmatterFromFolder("projects") || [];
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  try {
    const { frontmatter, html } = await getHTMLFromFile(`projects/${slug}.md`);
    return (
      <section className="min-h-screen py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="mb-6">
            <Link href="/projects" className="text-sm text-slate-700 hover:underline">← Back to projects</Link>
          </div>

          <h1 className="text-3xl font-heading font-bold mb-2">{frontmatter.title || slug}</h1>
          {frontmatter.subtitle && <p className="text-slate-700 mb-4">{frontmatter.subtitle}</p>}
          <div className="mb-6 text-sm text-slate-600">
            {frontmatter.date ? new Date(frontmatter.date).toLocaleDateString() : null}
          </div>

          <div
            className="prose prose-lg prose-slate max-w-none leading-relaxed
                       prose-headings:font-heading prose-headings:font-semibold prose-headings:text-slate-800
                       prose-h2:border-b prose-h2:pb-2 prose-h2:mt-12 prose-h2:mb-4
                       prose-strong:text-slate-900 prose-strong:font-semibold
                       prose-li:my-1 prose-p:my-2 prose-img:rounded-xl
                       prose-hr:my-8 prose-hr:border-slate-200
                       dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
    );
  } catch (err) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-xl font-semibold">Project not found</h2>
        <p className="text-slate-600">We couldn't find the project "{slug}".</p>
        <div className="mt-4">
          <Link href="/projects" className="text-sm text-slate-600 hover:underline">Back to projects</Link>
        </div>
      </div>
    );
  }
}