import Link from "next/link";

export const revalidate = 0;

export default function RewardsPage() {
  // Awards & recognitions data
  const rewards = [
    {
      title: "Bronze Award — GB Project",
      description:
        "Recognized with the Bronze Award for excellence in the Green Belt project — demonstrating process improvement and measurable impact on operational efficiency.",
      filePath: "/rewards_and_recognitions/Bronze_award_GB_project.pdf",
    },
    {
      title: "Bronze Award — ISP Metrics",
      description:
        "Awarded Bronze for impactful contributions towards ISP metrics improvement through automation and analytics-led process optimization.",
      filePath: "/rewards_and_recognitions/Bronze_award_ISP_metircs.pdf",
    },
    {
      title: "EE Kudos Certificate (Individual)",
      description:
        "Earned Kudos recognition for individual excellence and dedication in delivering high-quality analytical insights and operational reporting.",
      filePath: "/rewards_and_recognitions/EE_Kudos_Certificate.png",
    },
    {
      title: "EE Kudos Certificate (Team Lead)",
      description:
        "Recognized for outstanding leadership and collaboration as Team Lead — driving success in cross-functional analytics initiatives.",
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
          A showcase of awards and recognitions received for excellence,
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