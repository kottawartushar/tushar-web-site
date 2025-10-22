import Link from "next/link";

export const revalidate = 0;

export default function BlogPage() {
  // External blog post
  const posts = [
    {
      title:
        "How to resolve redo log file corruption using ALTER DATABASE CLEAR UNARCHIVED LOGFILE command",
      description:
        "Step-by-step guide on diagnosing and resolving redo log file corruption in Oracle using the ALTER DATABASE CLEAR UNARCHIVED LOGFILE command.",
      url: "https://blog.unisoftindia.org/2016/08/step-by-step-how-to-resolve-redo-log.html",
      date: "2016-08-01",
    },
  ];

  return (
    <section className="min-h-screen py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/" className="text-sm text-slate-600 hover:underline">
            ← Back to home
          </Link>
        </div>

        {/* Page Header */}
        <h1 className="text-3xl font-heading font-bold mb-3">Blog</h1>
        <p className="text-slate-600 mb-8">
          Selected posts and writeups.
        </p>

        {/* Blog Posts */}
        <div className="space-y-6">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="border rounded-lg p-6 shadow-sm bg-slate-50 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-slate-700 mb-4">{post.description}</p>
                </div>

                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent text-white font-medium shadow hover:opacity-95"
                  aria-label={`Read blog post: ${post.title}`}
                >
                  View Full Article
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}