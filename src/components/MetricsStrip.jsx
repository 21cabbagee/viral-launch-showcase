import React from 'react';
import { Eye, TrendingUp, DollarSign, Network, BarChart3, Bookmark } from 'lucide-react';
import { AGENCY_METRICS } from '../data/caseStudies';

export default function MetricsStrip() {
  const stats = [
    {
      label: "Delivered client impressions",
      value: AGENCY_METRICS.totalDeliveredViews,
      detail: "Across 24 high-conviction campaign launches",
      icon: Eye,
      accent: "text-emerald-400"
    },
    {
      label: "Peak views on a single campaign",
      value: AGENCY_METRICS.peakViewsCampaign,
      detail: "TypeSafe AI stealth reveal in 24 hours",
      icon: TrendingUp,
      accent: "text-white"
    },
    {
      label: "First-week booked ARR tracked",
      value: AGENCY_METRICS.bookedArrTracked,
      detail: "Verified conversion documented by Sequoia",
      icon: DollarSign,
      accent: "text-emerald-400"
    },
    {
      label: "Seeded creator nodes per launch",
      value: AGENCY_METRICS.seededNodesPerLaunch,
      detail: "Curated engineers, founders & technical creators",
      icon: Network,
      accent: "text-white"
    }
  ];

  return (
    <section id="metrics" className="border-b border-white/[0.08] bg-[#0c0d10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Section header kicker */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            AGGREGATE PERFORMANCE BENCHMARKS
          </span>
          <span className="text-xs font-mono text-zinc-500">Q1 2024 – PRESENT</span>
        </div>

        {/* 4-column Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-zinc-900/40 border border-white/[0.08] hover:border-white/[0.16] transition-colors relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase text-zinc-400 font-medium">
                    {stat.label}
                  </span>
                  <Icon className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                </div>
                <div className={`font-mono text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 ${stat.accent}`}>
                  {stat.value}
                </div>
                <p className="text-xs text-zinc-500 leading-normal">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Secondary metric ticker strip */}
        <div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-emerald-400" />
            <span>AVG FOLLOWER MULTIPLIER: <b className="text-white">28.4x</b></span>
          </div>
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-blue-400" />
            <span>MEDIAN CAMPAIGN BOOKMARKS: <b className="text-white">8,900</b></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>ALGORITHM RESIDENCY TIME: <b className="text-white">36.5 HOURS</b></span>
          </div>
        </div>

      </div>
    </section>
  );
}
