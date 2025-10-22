import { getMDXFromFile } from "../lib/mdx";
import Image from "next/image";
import SocialLinks from "../components/SocialLinks";
//import { MDXRemote } from "next-mdx-remote/rsc";

export default async function HomePage() {
  // Hero content (try to read content/introduction.md)
  let front = {};
  try {
    const { frontmatter } = await getMDXFromFile("content/introduction.md");
    front = frontmatter || {};
  } catch (err) {
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

  // Load Certifications and Rewards MDX (if files exist)
  let certsMDX = null;
  let rewardsMDX = null;
  try {
    const certRes = await getMDXFromFile("content/certifications_and_badges.md");
    certsMDX = certRes.mdxSource;
  } catch (e) {
    certsMDX = null;
  }
  try {
    const rewRes = await getMDXFromFile("content/rewards_and_recognition.md");
    rewardsMDX = rewRes.mdxSource;
  } catch (e) {
    rewardsMDX = null;
  }

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-6">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
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

          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">{title}</h1>
          <p className="mt-1 text-md text-slate-600">{subtitle}</p>
          <p className="mt-4 text-slate-700 text-base max-w-2xl">{summary}</p>
          <p className="mt-2 text-slate-600 italic">{italicLine}</p>

          <div className="mt-6">
            <SocialLinks
              gmail="kottawartushar084@gmail.com"
              linkedin="https://www.linkedin.com/in/tusharkottawar"
              github="https://github.com/kottawartushar"
            />
          </div>
        </div>
      </section>

      {/* Projects section (anchor) */}
      <section id="projects" className="border-t">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <p className="text-slate-600 mb-6">Featured work and case studies — click to read more.</p>

          {/* Placeholder project cards (we'll auto-populate from /projects/*.md later) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg shadow-sm">
              <div className="font-semibold">Fraud Ops Dashboard</div>
              <div className="text-sm text-slate-600 mt-2">ETL, LookML & dashboarding to reduce fraud reporting time.</div>
            </div>

            <div className="p-4 border rounded-lg shadow-sm">
              <div className="font-semibold">Bug Governance System</div>
              <div className="text-sm text-slate-600 mt-2">Process automation and SLA tracking.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications section (anchor) */}
      <section id="certifications" className="border-t bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <p className="text-slate-600 mb-6">Selected certifications and badges.</p>


            <div className="text-slate-600">(Certifications content -- temporarily disabled for debugging)</div>
        </div>
      </section>

      {/* Rewards & Recognitions (anchor) */}
      <section id="rewards" className="border-t">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-4">Rewards & Recognitions</h2>
          <p className="text-slate-600 mb-6">Achievements and recognition highlights.</p>


            <div className="text-slate-600">(Rewards content -- temporarily disabled for debugging)</div>
        </div>
      </section>

      {/* Blog section (anchor) */}
      <section id="blog" className="border-t bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-4">Blog</h2>
          <p className="text-slate-600 mb-6">Short posts and technical writeups.</p>
          <div className="text-slate-600">Blog index will be populated from content/blog/*.md</div>
        </div>
      </section>
    </>
  );
}