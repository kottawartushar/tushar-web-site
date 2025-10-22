import "./globals.css";

export const metadata = {
  title: "Tushar Kottawar — Data Analyst",
  description: "SQL-first • Dashboard-driven • Business-focused",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="w-full border-b">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* compact logo: circle with initials only */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold">
                TK
              </div>
            </div>

            <nav className="flex items-center gap-4 ml-8 md:ml-12 lg:ml-16">
              <a className="text-sm hover:underline" href="/projects">Projects</a>
              <a className="text-sm hover:underline" href="/certifications">Certifications</a>
              <a className="text-sm hover:underline" href="/rewards">Rewards</a>
              <a className="text-sm hover:underline" href="/blog">Blog</a>

              <a
                className="ml-3 inline-flex items-center gap-2 rounded-full px-4 py-2 bg-accent text-white text-sm font-medium shadow"
                href="/Tushar_Kottawar_CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t mt-8">
          <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-slate-600 flex items-center justify-between">
            <div>© {new Date().getFullYear()} Tushar Kottawar</div>
          </div>
        </footer>
      </body>
    </html>
  );
}