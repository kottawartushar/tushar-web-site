import { getMDXFromFile } from "../lib/mdx";

export default async function HomePage() {
  let front = {};
  try {
    const { frontmatter } = await getMDXFromFile("content/introduction.md");
    front = frontmatter || {};
  } catch (err) {
    // fallback content
    front = {
      title: "Tushar Kottawar",
      subtitle: "I transform operational data into production-ready insights",
      summary: "Automated ETL, repeatable dashboards and reconciliation playbooks that save analyst time and recover revenue."
    };
  }

  const title = front.title || "Tushar Kottawar";
  const subtitle = front.subtitle || "SQL-first • Dashboard-driven • Business-focused";
  const summary = front.summary || front.description || "Automated ETL, repeatable dashboards and reconciliation playbooks that save analyst time and recover revenue.";

  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">{title}</h1>
          <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
          <p className="mt-6 text-slate-700">{summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/Tushar_Kottawar_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-accent text-white font-medium"
            >
              Download Resume
            </a>

            <a
              href="mailto:kottawartushar084@gmail.com"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-slate-200 text-sm"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-64 h-64 rounded-2xl bg-gradient-to-tr from-primary-300 to-primary-600 flex items-center justify-center text-white text-2xl font-bold">
            Photo
          </div>
        </div>
      </div>
    </section>
  );
}