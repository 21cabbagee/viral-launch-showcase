import React from 'react';
import { ArrowDown, Flame, TrendingUp, Sparkles, Compass } from 'lucide-react';

export default function Hero({ onSelectStudy, onOpenCalculator }) {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-white/[0.08] overflow-hidden bg-grid-subtle">
      {/* Radial ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Subheader Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-zinc-900/60 backdrop-blur-sm text-xs font-mono text-zinc-300 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>LAUNCH ARCHITECTURE & DISTRIBUTION LABORATORY</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.08] mb-6 font-sans">
          The numbers-first <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500">
            viral launch engine.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed mb-10 font-normal">
          We architect timeline dominance for high-conviction tech companies. Coordinated creator node seeding, algorithm resonance, and undeniable proof of work—delivering hundreds of millions of impressions on zero ad spend.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <span>Explore 8 Curated Case Studies</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenCalculator}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 border border-white/[0.12] text-zinc-200 font-semibold text-sm hover:bg-zinc-800 hover:border-white/[0.2] transition-colors"
          >
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Launch Reach Calculator</span>
          </button>
        </div>

        {/* "Start Here" Editorial Duo */}
        <div className="border-t border-white/[0.08] pt-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-emerald-400" />
              Featured Flagship Breakdowns (Start Here)
            </span>
            <span className="text-xs font-mono text-zinc-500">VERIFIED DATA</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Card 1: TypeSafe AI */}
            <div 
              onClick={() => onSelectStudy('typesafe-jev')}
              className="group p-5 rounded-xl bg-zinc-900/60 border border-white/[0.08] hover:border-white/[0.2] transition-all cursor-pointer hover:bg-zinc-900/90"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  OUT OF STEALTH
                </span>
                <span className="font-mono text-xs text-zinc-400">Read: 2:56</span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                TypeSafe AI: Stealth to 40M Views in 24 Hours
              </h3>
              <p className="text-sm text-zinc-400 line-clamp-2 mb-4">
                Distribution and amplification through 80 to 100 engineers and creators, generating 150,000 signups and a $7.5B valuation event.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-300 border-t border-white/[0.06] pt-3">
                <div><span className="text-zinc-500">VIEWS:</span> <b className="text-white">40.4M</b></div>
                <div><span className="text-zinc-500">GROWTH:</span> <b className="text-emerald-400">102x Follower Jump</b></div>
                <div><span className="text-zinc-500">CONVERSION:</span> <b className="text-white">150k Signups</b></div>
              </div>
            </div>

            {/* Card 2: Pine Computer */}
            <div 
              onClick={() => onSelectStudy('pine-computer')}
              className="group p-5 rounded-xl bg-zinc-900/60 border border-white/[0.08] hover:border-white/[0.2] transition-all cursor-pointer hover:bg-zinc-900/90"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  SEED TO SERIES B
                </span>
                <span className="font-mono text-xs text-zinc-400">Read: 1:43</span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                Pine Computer: The Biggest Hardware Drop of the Week
              </h3>
              <p className="text-sm text-zinc-400 line-clamp-2 mb-4">
                Surpassed Google and Microsoft keynote impressions by coordinating agent builders, reviewers, and desktop hardware enthusiasts.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-300 border-t border-white/[0.06] pt-3">
                <div><span className="text-zinc-500">VIEWS:</span> <b className="text-white">24.1M</b></div>
                <div><span className="text-zinc-500">BENCHMARK:</span> <b className="text-blue-400">#1 Tech on X</b></div>
                <div><span className="text-zinc-500">BOOKMARKS:</span> <b className="text-white">14.2k</b></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
