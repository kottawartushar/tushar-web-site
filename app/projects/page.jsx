import Link from "next/link";
import { getAllFrontmatterFromFolder } from "../../lib/mdx";

export const revalidate = 0;

export default async function ProjectsPage() {
  const projects = getAllFrontmatterFromFolder("projects") || [];

  projects.sort((a, b) => {
    if (a.date && b.date) return new Date(b.date) - new Date(a.date);
    return 0;
  });

  return (
    <section className="min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-heading font-bold mb-4">Projects</h1>
        <p className="text-slate-600 mb-8">Case studies and featured work — click a card to read the full writeup.</p>

        {projects.length === 0 ? (
          <div className="text-slate-600">No projects found in <code>/projects</code>.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.slug} className="border rounded-lg p-5 shadow-sm hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">
                      <Link href={`/projects/${p.slug}`} className="hover:underline">
                        {p.title || p.slug}
                      </Link>
                    </h3>

                    {p.description && <p className="text-slate-600 mt-2">{p.description}</p>}

                    <div className="mt-3 flex flex-wrap gap-2">
                      {(p.tech || p.tags || []).slice(0, 6).map((t, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-slate-100 rounded-full text-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm text-slate-500">
                    {p.date ? new Date(p.date).getFullYear() : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}