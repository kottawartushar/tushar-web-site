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
      subtitle: "I transform operational data into production-ready insights",
      summary: "Automated ETL, repeatable dashboards and reconciliation playbooks that save analyst time and recover revenue."
    };
  }

  const title = front.title || "Tushar Kottawar";
  const subtitle = front.subtitle || "I transform operational data into production-ready insights";
  const summary = front.summary || front.description || "Automated ETL, repeatable dashboards and reconciliation playbooks that save analyst time and recover revenue.";

  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
        {/* text area - centered */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">{title}</h1>
          <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
          <p className="mt-6 text-slate-700 max-w-2xl mx-auto md:mx-0">{summary}</p>

          <div className="mt-8 flex items-center justify-center md:justify-start">
            <SocialLinks
              gmail="kottawartushar084@gmail.com"
              linkedin="https://www.linkedin.com/in/tusharkottawar"
              github="https://github.com/kottawartushar"
            />
          </div>
        </div>

        {/* avatar area */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/avatar.jpg"
              alt="Tushar Kottawar"
              width={720}
              height={720}
              sizes="(max-width: 768px) 60vw, 320px"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}