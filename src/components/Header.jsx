import React from 'react';
import { ArrowUpRight, Zap, Sparkles } from 'lucide-react';

export default function Header({ onOpenContact }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#09090b]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Status */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/[0.12] flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
              <Zap className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-mono text-base font-bold tracking-tight text-white flex items-center gap-1.5">
              LAUNCHFORGE
              <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-400 font-normal">
                DOOMERS REPLICA
              </span>
            </span>
          </a>

          {/* Editorial Status Badges */}
          <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/[0.08] text-xs font-mono text-zinc-400">
            <span className="inline-flex items-center gap-1.5 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Metrics Active
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">8 Selected Studies</span>
            <span className="text-zinc-600">•</span>
            <span className="text-emerald-400/90 font-medium">Q4 Slots Open</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
          <a href="#metrics" className="hover:text-white transition-colors">Metrics</a>
          <a href="#calculator" className="hover:text-white transition-colors">Reach Calculator</a>
          <a href="#playbook" className="hover:text-white transition-colors">Playbook</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-sm hover:shadow-white/10"
          >
            <span>Plan your launch</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
}
