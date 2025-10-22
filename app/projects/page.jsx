import Link from "next/link";
import { getAllFrontmatterFromFolder } from "../../lib/mdx";

export const revalidate = 0;

function normalizeArrayField(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return String(value).split(",").map((s) => s.trim()).filter(Boolean);
}

export default async function ProjectsPage() {
  const projects = getAllFrontmatterFromFolder("projects") || [];

  // Sorting: order -> date -> title
  projects.sort((a, b) => {
    const aOrder = Number.isFinite(Number(a.order)) ? Number(a.order) : Infinity;
    const bOrder = Number.isFinite(Number(b.order)) ? Number(b.order) : Infinity;
    if (aOrder !== bOrder) return aOrder - bOrder;
    if (a.date && b.date) return new Date(b.date) - new Date(a.date);
    return (a.title || a.slug || "").localeCompare(b.title || b.slug || "");
  });

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-6">
          <Link href="/" className="text-sm text-slate-600 hover:underline">← Back to home</Link>
        </div>

        <header className="mb-8">
          <h1 className="text-3xl font-heading font-bold mb-3">Projects</h1>
          <p className="text-slate-600 max-w-2xl">A selection of analytics projects where I’ve transformed complex data into actionable business insights.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => {
            const focus = normalizeArrayField(p.focus || p.focus_area || p.focusArea);
            const tech = normalizeArrayField(p.tech || p.tags);

            return (
              <article
                key={p.slug}
                className="group border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-slate-50 flex flex-col"
              >
                {/* Top / grow area */}
                <div className="flex-1 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold mb-3">
                    <Link href={`/projects/${p.slug}`} className="hover:underline inline-block">
                      {p.title || p.slug}
                    </Link>
                  </h3>

                  {p.description && (
                    <p className="text-slate-600 text-sm mx-auto max-w-prose mb-4">
                      {p.description}
                    </p>
                  )}

                  {/* Focus Areas label + tags */}
                  {focus.length > 0 && (
                    <>
                      <div className="text-sm font-medium text-slate-500 mb-2">Focus Areas</div>
                      <div className="flex justify-center flex-wrap gap-2 mb-3">
                        {focus.map((f, i) => (
                          <span key={i} className="text-xs px-3 py-1 rounded-full bg-amber-50 text-amber-700">
                            {f}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Tech Stack label + tags */}
                  {tech.length > 0 && (
                    <>
                      <div className="text-sm font-medium text-slate-500 mb-2">Tech Stack</div>
                      <div className="flex justify-center flex-wrap gap-2 mb-4">
                        {tech.map((t, i) => (
                          <span key={i} className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* CTA centered */}
                <div className="mt-4">
                  <div className="flex justify-center">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent text-white text-sm font-medium shadow hover:opacity-95"
                    >
                      View Project
                    </Link>
                  </div>

                  <div className="mt-4 text-center text-sm text-slate-500">
                    {p.date ? new Date(p.date).getFullYear() : ""}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="pt-12" /> {/* breathing room */}
      </div>
    </section>
  );
}