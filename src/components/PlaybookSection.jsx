import React from 'react';
import { BookOpen, Zap, Target, Flame, ShieldAlert, Cpu } from 'lucide-react';

export default function PlaybookSection() {
  const laws = [
    {
      num: "01",
      title: "Immediate Proof of Work",
      detail: "Traditional PR press releases get ignored. Our drop videos demonstrate real code, terminal executions, or raw device interaction within the first 4 seconds. Zero corporate fluff.",
      icon: Zap
    },
    {
      num: "02",
      title: "The Synchronized Node Detonation",
      detail: "An algorithm only triggers global trending status when it detects clustered velocity. We coordinate 80–150 creators to drop authentic quote reactions within a tight 45-minute window.",
      icon: Target
    },
    {
      num: "03",
      title: "Bookmark Optimization Over Empty Likes",
      detail: "The current recommendation algorithm weights bookmarks 5x higher than standard likes. We architect reference-grade assets—cheatsheets, benchmarks, and architecture diagrams.",
      icon: Flame
    },
    {
      num: "04",
      title: "The Stealth Arbitrage",
      detail: "Building in dark mode and dropping a fully functional, mind-blowing release without prior warning produces explosive curiosity. The audience feels they discovered an unfair advantage.",
      icon: ShieldAlert
    },
    {
      num: "05",
      title: "Zero-Friction Inbound Capture",
      detail: "A viral tweet without instant product gratification is wasted heat. We integrate lightweight sandboxes, interactive playgrounds, or single-tap waitlist reservations.",
      icon: Cpu
    }
  ];

  return (
    <section id="playbook" className="py-16 md:py-24 border-b border-white/[0.08] bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>THE CORE THESIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 5 Laws of Timeline Dominance
          </h2>
          <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
            The mathematical and algorithmic principles we apply to transform technical breakthroughs into cultural milestones.
          </p>
        </div>

        {/* Laws Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {laws.map((law, idx) => {
            const Icon = law.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-zinc-900/40 border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-zinc-600 group-hover:text-emerald-400 transition-colors">
                      {law.num}
                    </span>
                    <Icon className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                    {law.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {law.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.04] mt-6 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>DOCTRINE VERIFIED</span>
                  <span className="text-emerald-400">100% ORGANIC</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
