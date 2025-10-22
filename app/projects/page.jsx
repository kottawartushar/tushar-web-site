import Link from "next/link";
import { getAllFrontmatterFromFolder } from "../../lib/mdx";

export const revalidate = 0;

function normalizeArrayField(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  // comma separated string -> array
  return String(value).split(",").map((s) => s.trim()).filter(Boolean);
}

export default async function ProjectsPage() {
  const projects = getAllFrontmatterFromFolder("projects") || [];

  // Sort priority:
  // 1) numeric frontmatter.order (ascending)
  // 2) date (newest first)
  // 3) title alphabetical
  projects.sort((a, b) => {
    const aOrder = Number.isFinite(Number(a.order)) ? Number(a.order) : Infinity;
    const bOrder = Number.isFinite(Number(b.order)) ? Number(b.order) : Infinity;
    if (aOrder !== bOrder) return aOrder - bOrder;

    if (a.date && b.date) return new Date(b.date) - new Date(a.date);
    const at = (a.title || a.slug || "").toLowerCase();
    const bt = (b.title || b.slug || "").toLowerCase();
    return at.localeCompare(bt);
  });

  return (
    <section className="min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-heading font-bold mb-4">Projects</h1>
        <p className="text-slate-600 mb-8">A selection of analytics projects where I’ve transformed complex data into actionable business insights.</p>

        {projects.length === 0 ? (
          <div className="text-slate-600">No projects found in <code>/projects</code>.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => {
              const tech = normalizeArrayField(p.tech || p.tags);
              const focus = normalizeArrayField(p.focus || p.focus_area || p.focusArea);

              return (
                <article key={p.slug} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-stretch gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-center mb-2">
                        <Link href={`/projects/${p.slug}`} className="hover:underline inline-block">
                          {p.title || p.slug}
                        </Link>
                      </h3>
                      {p.description && <p className="text-slate-600 text-sm text-center max-w-prose mx-auto">{p.description}</p>}
                    </div>

                    {/* focus area */}
                    {focus.length > 0 && (
                      <div className="flex justify-center mt-3 flex-wrap gap-2">
                        {focus.map((f, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-amber-50 rounded-full text-amber-700">
                            {f}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* tech tags */}
                    {tech.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {tech.map((t, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-slate-100 rounded-full text-slate-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* meta year on the right bottom */}
                  <div className="mt-4 flex items-center justify-end text-sm text-slate-500">
                    {p.date ? new Date(p.date).getFullYear() : null}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}