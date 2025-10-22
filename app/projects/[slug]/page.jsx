import { getMDXFromFile, getAllFrontmatterFromFolder } from "../../../lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export async function generateStaticParams() {
  const projects = getAllFrontmatterFromFolder("projects") || [];
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }) {
  // params may be a Promise in this Next.js runtime — unwrap it first
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  try {
    const { frontmatter, mdxSource } = await getMDXFromFile(`projects/${slug}.md`);
    return (
      <section className="min-h-screen py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-6">
            <Link href="/projects" className="text-sm text-slate-600 hover:underline">← Back to projects</Link>
          </div>

          <h1 className="text-3xl font-heading font-bold mb-2">{frontmatter.title || slug}</h1>
          {frontmatter.subtitle && <p className="text-slate-600 mb-4">{frontmatter.subtitle}</p>}
          <div className="mb-6 text-sm text-slate-500">
            {frontmatter.date ? new Date(frontmatter.date).toLocaleDateString() : null}
          </div>

          <div className="prose max-w-none">
            <MDXRemote source={mdxSource} />
          </div>
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