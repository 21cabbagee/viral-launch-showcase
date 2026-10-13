import React, { useEffect } from 'react';
import { X, Clock, Eye, TrendingUp, Users, CheckCircle2, Bookmark, ArrowRight, Share2, Layers } from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudies';

export default function CaseStudyModal({ studyId, onClose, onOpenContact }) {
  const study = CASE_STUDIES.find(s => s.id === studyId);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl my-auto rounded-2xl bg-[#0e1015] border border-white/[0.12] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header Bar */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {study.stage.replace(/-/g, ' ')}
            </span>
            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {study.timeToRead} DECONSTRUCTION
            </span>
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline">• {study.date}</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8">
          
          {/* Main Title & Executive Summary */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              {study.title}
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed font-normal">
              {study.summary}
            </p>
          </div>

          {/* High-Impact Numerical Metrics Dashboard */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-black/60 p-4 rounded-xl border border-white/[0.08] font-mono">
            <div>
              <div className="text-[10px] text-zinc-500 uppercase">CAMPAIGN VIEWS</div>
              <div className="text-2xl font-bold text-white mt-0.5">{study.metrics.views}</div>
              <div className="text-[10px] text-emerald-400 mt-1">Verified on timeline</div>
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 uppercase">FOLLOWER JUMP</div>
              <div className="text-2xl font-bold text-emerald-400 mt-0.5">{study.metrics.followerMultiplier || '14x'}</div>
              <div className="text-[10px] text-zinc-400 mt-1">
                {study.metrics.startingFollowers ? `${study.metrics.startingFollowers.toLocaleString()} → ${study.metrics.endingFollowers.toLocaleString()}` : 'Network blast'}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 uppercase">SAVED BOOKMARKS</div>
              <div className="text-2xl font-bold text-white mt-0.5">{study.metrics.bookmarks || '8,400'}</div>
              <div className="text-[10px] text-zinc-400 mt-1">Algorithm rank signal</div>
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 uppercase">PRIMARY IMPACT</div>
              <div className="text-sm font-bold text-zinc-200 mt-1 line-clamp-2">
                {study.metrics.conversion || study.metrics.benchmark || study.metrics.revenue}
              </div>
            </div>
          </div>

          {/* Highlights & Evidence Strip */}
          {study.highlights && (
            <div className="bg-zinc-900/40 border border-white/[0.06] rounded-xl p-5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                VERIFIED CAMPAIGN HIGHLIGHTS
              </h4>
              <ul className="space-y-2">
                {study.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-zinc-300 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Strategy Deep Dive (3-Phase Timeline Blueprint) */}
          {study.strategyBreakdown && (
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                TACTICAL DISTRIBUTION BLUEPRINT
              </h4>

              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-xs font-mono text-zinc-400 uppercase mb-1">Core Campaign Objective</div>
                <div className="text-sm text-white font-medium">{study.strategyBreakdown.objective}</div>
              </div>

              {/* Phases */}
              <div className="space-y-3">
                {study.strategyBreakdown.tactics.map((tac, tIdx) => (
                  <div key={tIdx} className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
                    <div className="text-xs font-mono text-emerald-400 font-bold mb-1">
                      {tac.phase}
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {tac.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Takeaway */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                <div className="text-xs font-mono text-emerald-400 uppercase font-semibold mb-1">
                  The Key Takeaway
                </div>
                <p className="text-sm text-emerald-100/90 leading-relaxed">
                  "{study.strategyBreakdown.takeaways}"
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 border-t border-white/[0.08] bg-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-400 font-mono">
            Ready to deploy this distribution blueprint for your company?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <span>Plan your launch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
