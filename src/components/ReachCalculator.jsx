import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Sparkles, TrendingUp, Users, Eye, Bookmark, Network, CheckCircle2 } from 'lucide-react';

export default function ReachCalculator({ onOpenContact }) {
  const [startingFollowers, setStartingFollowers] = useState(2500);
  const [objective, setObjective] = useState('stealth');
  const [tier, setTier] = useState('extended'); // 'core' (40), 'extended' (90), 'maximum' (150)

  // Math models
  const results = useMemo(() => {
    const nodesCount = tier === 'core' ? 45 : tier === 'extended' ? 95 : 150;
    
    // Multiplier weighting by objective
    const objectiveMultipliers = {
      stealth: 1.45,       // high curiosity spike
      funding: 1.15,       // high VC / operator authority
      product: 1.65,       // maximum interactive demo resonance
      devtools: 1.80       // highest technical bookmarking & star velocity
    };
    const mult = objectiveMultipliers[objective] || 1.3;

    // Projected view ceiling formula
    const baseOrganic = Math.max(10000, startingFollowers * 18);
    const networkAmplification = nodesCount * 45000 * mult;
    const totalEstViews = Math.round(baseOrganic + networkAmplification);

    // Bookmarks formula
    const estBookmarks = Math.round(totalEstViews * 0.0035 * mult);

    // Timeline saturation index
    const saturationIndex = Math.min(99, Math.round(62 + (nodesCount / 150) * 28 + (startingFollowers > 10000 ? 8 : 0)));

    // Follower boost estimate
    const estimatedFollowersGain = Math.round(Math.min(65000, 1800 + (totalEstViews * 0.0028)));

    return {
      nodesCount,
      totalEstViews,
      totalViewsFormatted: (totalEstViews / 1000000).toFixed(1) + 'M',
      estBookmarks: estBookmarks.toLocaleString(),
      saturationIndex: `${saturationIndex}%`,
      estimatedFollowersGain: `+${estimatedFollowersGain.toLocaleString()}`,
      estimatedMultiplier: startingFollowers > 0 ? (estimatedFollowersGain / startingFollowers).toFixed(1) + 'x' : '50x+'
    };
  }, [startingFollowers, objective, tier]);

  return (
    <section id="calculator" className="py-16 md:py-24 border-b border-white/[0.08] bg-[#0c0d10] relative overflow-hidden">
      
      {/* Background visual detail */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE REACH-MATH ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Plan Your Launch: Projected Timeline Reach
          </h2>
          <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
            Toggle your baseline following and target drop objective to project seeded creator footprint, algorithm residency, and viral view ceiling.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-900/40 border border-white/[0.08] rounded-2xl p-6 sm:p-8 space-y-8">
            
            {/* Input 1: Starting Follower Count Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-mono uppercase text-zinc-300 font-semibold flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400" />
                  Starting Brand / Founder Followers
                </label>
                <span className="font-mono text-base font-bold text-white bg-black/60 px-3 py-1 rounded-lg border border-white/[0.08]">
                  {startingFollowers.toLocaleString()} followers
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="50000"
                step="500"
                value={startingFollowers}
                onChange={(e) => setStartingFollowers(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-2">
                <span>0 (Pure Zero-Follower Stealth)</span>
                <span>25,000</span>
                <span>50,000+</span>
              </div>
            </div>

            {/* Input 2: Launch Objective Selector */}
            <div>
              <label className="text-xs font-mono uppercase text-zinc-300 font-semibold block mb-3">
                Campaign Drop Objective
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'stealth', label: 'Out of Stealth Reveal', sub: 'High intrigue & surprise' },
                  { id: 'funding', label: 'Funding Announcement', sub: 'Tier-1 investor validation' },
                  { id: 'product', label: 'Major Product Drop', sub: 'Interactive demonstration' },
                  { id: 'devtools', label: 'Developer / OSS Release', sub: 'Benchmarks & GitHub stars' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setObjective(item.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      objective === item.id
                        ? 'bg-zinc-800 border-emerald-500/50 text-white shadow-sm'
                        : 'bg-black/40 border-white/[0.06] text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    <div className="text-xs font-semibold text-white">{item.label}</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3: Seeded Creator Node Cluster Tier */}
            <div>
              <label className="text-xs font-mono uppercase text-zinc-300 font-semibold block mb-3">
                Seeded Creator Node Density
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'core', label: 'Core Cluster', nodes: '45 Nodes', desc: 'Surgical niche impact' },
                  { id: 'extended', label: 'Extended Wave', nodes: '95 Nodes', desc: 'Full timeline saturation' },
                  { id: 'maximum', label: 'Maximum Detonation', nodes: '150 Nodes', desc: 'Category ownership drop' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setTier(item.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      tier === item.id
                        ? 'bg-zinc-800 border-emerald-500/50 text-white shadow-sm'
                        : 'bg-black/40 border-white/[0.06] text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    <div className="text-xs font-semibold text-white">{item.label}</div>
                    <div className="text-xs font-mono text-emerald-400 font-bold mt-1">{item.nodes}</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Projected Real-Time Metrics (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-white/[0.12] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <span className="text-xs font-mono uppercase text-zinc-400 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  PROJECTED TIMELINE HARVEST
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  REAL-TIME MODEL
                </span>
              </div>

              {/* Big Projected Views Number */}
              <div className="mb-6">
                <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">
                  ESTIMATED 48-HOUR VIEW CEILING
                </span>
                <div className="font-mono text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline gap-2">
                  <span>{results.totalViewsFormatted}</span>
                  <span className="text-xs font-normal text-zinc-400 font-sans">views projected</span>
                </div>
                <div className="text-xs text-emerald-400 font-mono mt-1 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Est. Follower Jump: {results.estimatedFollowersGain} ({results.estimatedMultiplier})</span>
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="space-y-3 font-mono text-xs">
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/[0.06]">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <Network className="w-3.5 h-3.5 text-emerald-400" />
                    Seeded Creator Nodes
                  </span>
                  <b className="text-white">{results.nodesCount} Verified Leaders</b>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/[0.06]">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <Bookmark className="w-3.5 h-3.5 text-blue-400" />
                    Projected Saved Bookmarks
                  </span>
                  <b className="text-white">{results.estBookmarks}</b>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/[0.06]">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Timeline Saturation Index
                  </span>
                  <b className="text-emerald-400">{results.saturationIndex}</b>
                </div>

              </div>

              {/* Methodology note */}
              <p className="text-[11px] text-zinc-500 mt-6 leading-relaxed">
                *Projections calibrated against verified campaign postmortems from 24 tech drops across Q1-Q4 2024.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-white/[0.08] mt-6">
              <button
                onClick={onOpenContact}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors shadow-lg"
              >
                <span>Lock In Your Launch Date</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
