import Link from "next/link";
import { getHTMLFromFile } from "../../lib/mdx";

export const revalidate = 0;

export default async function CertificationsPage() {
  // Try to load optional markdown content (kept as fallback)
  let mdHtml = null;
  try {
    const res = await getHTMLFromFile("content/certifications_and_badges.md");
    mdHtml = res.html;
  } catch (e) {
    mdHtml = null;
  }

  // Local PDF path in `public/certifications/Certificate_of_Achievement_Six_Sigma_GB.pdf`
  const localPdfPath = "/certifications/Certificate_of_Achievement_Six_Sigma_GB.pdf";
  const localPdfTitle = "Six Sigma Green Belt Certification";
  const localPdfShort = "Certificate of Achievement — Six Sigma Green Belt. Downloadable verification of training and skills in process improvement and quality management.";

  const credlyUrl = "https://www.credly.com/users/tushar-kottawar";
  const credlyLinkText = "Tushar Kottawar — Credly Profile";

  return (
    <section className="min-h-screen py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="mb-6">
          <Link href="/" className="text-sm text-slate-600 hover:underline">← Back to home</Link>
        </div>

        <h1 className="text-3xl font-heading font-bold mb-3">Certifications</h1>
        <p className="text-slate-600 mb-8">Selected certifications and verified badges.</p>

        {/* Local PDF card */}
        <div className="border rounded-lg p-6 mb-8 shadow-sm bg-slate-50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">{localPdfTitle}</h2>
              <p className="mt-2 text-slate-700">{localPdfShort}</p>
            </div>

            <div className="flex gap-3 items-center">
              <a
                href={localPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white font-medium shadow hover:opacity-95"
                aria-label={`Open or download ${localPdfTitle}`}
              >
                View / Download
              </a>

              <a
                href={localPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-600 hover:underline"
                aria-label={`Open ${localPdfTitle} in new tab`}
              >
                Open PDF
              </a>
            </div>
          </div>
        </div>

        {/* Credly CTA */}
        <div className="border rounded-lg p-6 mb-8 shadow-sm">
          <p className="text-slate-700">
            View all my verified certifications on Credly:&nbsp;
            <a
              href={credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-600 hover:underline"
            >
              {credlyLinkText}
            </a>
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Click the link above to see verified badges and digital credentials issued by Credly.
          </p>
        </div>

        {/* Optional: render markdown content from content/certifications_and_badges.md */}
        {mdHtml ? (
          <>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Additional certification notes</h2>
            <div
              className="prose prose-lg prose-slate max-w-none leading-relaxed
                         prose-headings:font-heading prose-headings:font-semibold
                         prose-li:my-1 prose-p:my-2 prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: mdHtml }}
            />
          </>
        ) : (
          <div className="text-slate-600 mt-6">No additional certifications content found at <code>content/certifications_and_badges.md</code>.</div>
        )}
      </div>
    </section>
  );
}