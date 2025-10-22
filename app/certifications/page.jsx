import Link from "next/link";
import { getHTMLFromFile } from "../../lib/mdx";

export const revalidate = 0;

export default async function CertificationsPage() {
  let mdHtml = null;
  try {
    const res = await getHTMLFromFile("content/certifications_and_badges.md");
    mdHtml = res.html;
  } catch (e) {
    mdHtml = null;
  }

  // Local certification details
  const localPdfPath = "/certifications/Certificate_of_Achievement_Six_Sigma_GB.pdf";
  const localPdfTitle = "Six Sigma Green Belt Certification";
  const localPdfShort =
    "Certified in Lean Six Sigma Green Belt methodologies for process improvement and operational efficiency.";

  // Credly profile details
  const credlyUrl = "https://www.credly.com/users/tushar-kottawar";
  const credlyTitle = "Verified Credentials on Credly";
  const credlyShort =
    "View all my verified digital credentials and badges issued by Credly.";

  return (
    <section className="min-h-screen py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="mb-6">
          <Link href="/" className="text-sm text-slate-600 hover:underline">
            ← Back to home
          </Link>
        </div>

        <h1 className="text-3xl font-heading font-bold mb-3">Certifications</h1>
        <p className="text-slate-600 mb-8">
          List of all certifications and verified badges.
        </p>

        {/* Six Sigma Certification Card */}
        <div className="border rounded-lg p-6 mb-6 shadow-sm bg-slate-50 hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center text-center gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">{localPdfTitle}</h2>
              <p className="text-slate-700">{localPdfShort}</p>
            </div>
            <a
              href={localPdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent text-white font-medium shadow hover:opacity-95"
              aria-label={`View ${localPdfTitle}`}
            >
              View Certificate
            </a>
          </div>
        </div>

        {/* Credly Profile Card */}
        <div className="border rounded-lg p-6 mb-6 shadow-sm bg-slate-50 hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center text-center gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">{credlyTitle}</h2>
              <p className="text-slate-700">{credlyShort}</p>
            </div>
            <a
              href={credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent text-white font-medium shadow hover:opacity-95"
              aria-label="View Credly Profile"
            >
              View My Credly Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}