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
          <p className="text-slate-600 max-w-2xl">
            A selection of analytics projects where I’ve transformed complex data into actionable business insights.
          </p>
        </header>

        {/* Single-column stack */}
        <div className="grid grid-cols-1 gap-6">
          {projects.map((p) => {
            const focus = normalizeArrayField(p.focus || p.focus_area || p.focusArea);
            const tech = normalizeArrayField(p.tech || p.tags);

            return (
              <article
                key={p.slug}
                className="group border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                {/* content area */}
                <div className="flex-1 flex flex-col items-stretch">
                  <h3 className="text-xl font-semibold text-center mb-3">
                    <Link href={`/projects/${p.slug}`} className="hover:underline inline-block">
                      {p.title || p.slug}
                    </Link>
                  </h3>

                  {p.description && (
                    <p className="text-slate-600 text-sm text-center mx-auto max-w-prose mb-4">
                      {p.description}
                    </p>
                  )}

                  {/* Focus tags (orange) */}
                  {focus.length > 0 && (
                    <div className="flex justify-center flex-wrap gap-2 mb-3">
                      {focus.map((f, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-amber-50 text-amber-700"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech tags (blue) */}
                  {tech.length > 0 && (
                    <div className="flex justify-center flex-wrap gap-2 mt-auto">
                      {tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* footer row with CTA and year */}
                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-accent text-white text-sm font-medium shadow hover:opacity-95"
                  >
                    View Project
                  </Link>

                  <div className="text-sm text-slate-500">
                    {p.date ? new Date(p.date).getFullYear() : ""}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="pt-12" />
      </div>
    </section>
  );
}