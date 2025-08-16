'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleViewCards = () => {
    router.push('/cards');
  };

  const handleViewRankings = () => {
    router.push('/leaderboard');
  };

  const handleViewMatches = () => {
    router.push('/matches');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Container - FIFA card style */}
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/30 to-green-600/30 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <Image
                src="/icon kota.png"
                alt="FIFA Card Tournament"
                width={500}
                height={280}
                className="rounded-xl w-full h-auto shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* FIFA card overlay effect */}
              <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded text-sm font-bold">
                ICON
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r text-yellow-300 bg-clip-text text-transparent">
                  FSF
                </span>
                <br />
                <span className="text-white">LEAGUE</span>
              </h1>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleViewCards}
                className="group px-8 py-4 border-1 border-gray-600 rounded-xl font-semibold text-white backdrop-blur-sm hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">View Player Stats</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={handleViewRankings}
                className="px-8 py-4 border-1 border-gray-600 rounded-xl font-semibold text-white backdrop-blur-sm hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-300 hover:scale-105"
              >
                View Rankings
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                  176
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">PLAYERS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  8
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">TEAMS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  3
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">SEASONS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <button
            onClick={handleViewCards}
            className="group p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 text-left cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-yellow-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">View Player Cards</h3>
            <p className="text-gray-400">Join FIFA Ultimate Team card tournaments with real-time matchmaking and rankings.</p>
          </button>

          <button
            onClick={handleViewRankings}
            className="group p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 text-left cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Leaderboard Rankings</h3>
            <p className="text-gray-400">Track your ranking across different game modes and tournament formats.</p>
          </button>

          <button
            onClick={handleViewMatches}
            className="group p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 text-left cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Matches</h3>
            <p className="text-gray-400">Compete for cash prizes and exclusive FIFA packs in weekly tournaments.</p>
          </button>
        </div>
      </section>

    </div>
  );
}