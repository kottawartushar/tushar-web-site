import { getMDXFromFile } from "../lib/mdx";
import Image from "next/image";
import SocialLinks from "../components/SocialLinks";

export default async function HomePage() {
  let front = {};
  try {
    const { frontmatter } = await getMDXFromFile("content/introduction.md");
    front = frontmatter || {};
  } catch (err) {
    // fallback content
    front = {
      title: "Tushar Kottawar",
      subtitle: "Data Analyst — SQL-first • Dashboard-driven • Business-focused",
      summary:
        "I transform operational data into production-ready insights: automated ETL, repeatable dashboards, and reconciliation playbooks that save analyst time.",
      italic: "Turning operational data into clear, measurable outcomes."
    };
  }

  const title = front.title || "Tushar Kottawar";
  const subtitle =
    front.subtitle || "Data Analyst — SQL-first • Dashboard-driven • Business-focused";
  const summary =
    front.summary ||
    front.description ||
    "I transform operational data into production-ready insights: automated ETL, repeatable dashboards, and reconciliation playbooks that save analyst time.";
  const italicLine = front.italic || "Turning operational data into clear, measurable outcomes.";

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-6">
        {/* avatar */}
        <div className="w-44 h-44 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/images/avatar.jpg"
            alt="Tushar Kottawar"
            width={560}
            height={560}
            sizes="(max-width: 768px) 40vw, 200px"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            priority
          />
        </div>

        {/* name */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">{title}</h1>

        {/* subtitle line */}
        <p className="mt-1 text-md text-slate-600">{subtitle}</p>

        {/* main summary */}
        <p className="mt-4 text-slate-700 text-base max-w-2xl">
          {summary}
        </p>

        {/* italic tagline */}
        <p className="mt-2 text-slate-600 italic">{italicLine}</p>

        {/* social links */}
        <div className="mt-6">
          <SocialLinks
            gmail="kottawartushar084@gmail.com"
            linkedin="https://www.linkedin.com/in/tusharkottawar"
            github="https://github.com/kottawartushar"
          />
        </div>
      </div>
    </section>
  );
}