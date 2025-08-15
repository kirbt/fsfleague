import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FSF League - FIFA Card Tournaments & Rankings",
  description: "Competitive FIFA Ultimate Team card tournaments. Track your rank, join tournaments, and dominate the leaderboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen text-white overflow-x-hidden">
        {/* Dark gaming atmosphere background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-900/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-yellow-900/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <header className="fixed top-0 z-50 w-full">
          <div className="bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/50">
            <div className="container mx-auto px-8 py-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-yellow-300">
                  FSF LEAGUE
                </h1>

                <nav className="hidden md:flex space-x-8">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105 transform">
                    Home
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105 transform">
                    Leaderboards
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105 transform">
                    Tournaments
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105 transform">
                    My Cards
                  </a>
                </nav>

                <button className="md:hidden text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="relative z-10 pt-24 bg-gradient-to-b from-black via-gray-950 to-black min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}