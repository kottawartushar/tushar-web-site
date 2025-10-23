import Link from "next/link";

export const revalidate = 0;

export default function RewardsPage() {
  // Awards & recognitions data
  const rewards = [
    {
      title: "Bronze Award — Automation of Insights for Internal Communication (Six Sigma GB Project)",
      description:
        "Recognized with a Bronze Cash Award for automating the text analysis process and finding the key insights, saving up to 10 hours at least.",
      filePath: "/rewards_and_recognitions/Bronze_award_GB_Project.pdf",
    },
    {
      title: "Bronze Award — Intelligent Succession Planning Metrics Collection",
      description:
        "Recognized with a Bronze Cash Award for rapidly developing and supporting new metrics collection process using Google Analytics and SOP definition — ensuring timely and sustainable reporting for internal metrics.",
      filePath: "/rewards_and_recognitions/Bronze_award_ISP_metrics.pdf",
    },
    {
      title: "Thank You Award — Be Committed (Employee Engagement Team)",
      description:
        "Recognized for exceptional dedication and collaboration as part of the Employee Engagement Team. Contributed to organizing large-scale virtual events that strengthened team morale and engagement during a challenging period.",
      filePath: "/rewards_and_recognitions/EE_Kudos_Certificate.png",
    },
    {
      title: "Thank You Award — Be Committed (Team Leadership Appreciation)",
      description:
        "Recognized by the HRS leadership team for sustained efforts in organizing monthly Employee Engagement events that strengthened morale, collaboration, and team culture during the pandemic.",
      filePath: "/rewards_and_recognitions/EE_Kudos_Certificate_Team_Lead.png",
    },
  ];

  return (
    <section className="min-h-screen py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="mb-6">
          <Link href="/" className="text-sm text-slate-600 hover:underline">
            ← Back to home
          </Link>
        </div>

        <h1 className="text-3xl font-heading font-bold mb-3">
          Rewards & Recognitions
        </h1>
        <p className="text-slate-600 mb-8">
          A showcase of rewards and recognitions received for excellence,
          innovation, and leadership.
        </p>

        {/* Reward Cards */}
        <div className="space-y-6">
          {rewards.map((item, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-6 shadow-sm bg-slate-50 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-slate-700">{item.description}</p>
                </div>
                <a
                  href={item.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent text-white font-medium shadow hover:opacity-95"
                  aria-label={`View ${item.title}`}
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}