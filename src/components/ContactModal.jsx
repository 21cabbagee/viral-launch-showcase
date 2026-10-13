import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Shield, Sparkles } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    twitterHandle: '',
    company: '',
    launchDate: '',
    stage: 'stealth',
    tier: 'extended',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-xl my-auto rounded-2xl bg-[#0e1015] border border-white/[0.12] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-zinc-900/60">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-0.5">
              CONFIDENTIAL INTAKE
            </span>
            <h3 className="text-lg font-bold text-white">Plan Your Viral Launch</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Campaign Intake Logged</h4>
              <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                Thank you, <b>{formData.name || 'Founder'}</b>. Our distribution lead will review your brief and contact you directly via X (<b>{formData.twitterHandle || '@handle'}</b>) within 4 hours.
              </p>
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/[0.06] font-mono text-xs text-zinc-400 max-w-sm mx-auto text-left space-y-1">
                <div>COMPANY: <span className="text-white">{formData.company || 'Confidential'}</span></div>
                <div>STAGE: <span className="text-emerald-400">{formData.stage.toUpperCase()}</span></div>
                <div>EST. TIMELINE: <span className="text-white">{formData.launchDate || 'Q4 Sprint'}</span></div>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => { setSubmitted(false); onClose(); }}
                  className="px-6 py-2 rounded-lg bg-white text-black font-semibold text-xs hover:bg-zinc-200"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase text-zinc-400 block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Lin"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 bg-black/60 border border-white/[0.1] rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase text-zinc-400 block mb-1.5">
                    X / Twitter Handle *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@founder_x"
                    value={formData.twitterHandle}
                    onChange={(e) => setFormData({ ...formData, twitterHandle: e.target.value })}
                    className="w-full px-3.5 py-2 bg-black/60 border border-white/[0.1] rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase text-zinc-400 block mb-1.5">
                    Company / Product Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Cortex AI"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2 bg-black/60 border border-white/[0.1] rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase text-zinc-400 block mb-1.5">
                    Target Drop Date
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Next 3-4 Weeks"
                    value={formData.launchDate}
                    onChange={(e) => setFormData({ ...formData, launchDate: e.target.value })}
                    className="w-full px-3.5 py-2 bg-black/60 border border-white/[0.1] rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase text-zinc-400 block mb-1.5">
                    Company Stage
                  </label>
                  <select
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    className="w-full px-3 py-2 bg-black/60 border border-white/[0.1] rounded-lg text-xs text-white focus:outline-none focus:border-emerald-500/50"
                  >
                    <option value="stealth">Out of Stealth</option>
                    <option value="seed">Seed Stage</option>
                    <option value="series-a-b">Series A / B</option>
                    <option value="growth">Growth / Late Stage</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-mono uppercase text-zinc-400 block mb-1.5">
                    Target Creator Density
                  </label>
                  <select
                    value={formData.tier}
                    onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                    className="w-full px-3 py-2 bg-black/60 border border-white/[0.1] rounded-lg text-xs text-white focus:outline-none focus:border-emerald-500/50"
                  >
                    <option value="core">Core Wave (45 Creator Nodes)</option>
                    <option value="extended">Extended Wave (95 Creator Nodes)</option>
                    <option value="maximum">Maximum Wave (150 Creator Nodes)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-zinc-400 block mb-1.5">
                  Brief Technical Overview / Link
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us what you are building and why it's technically differentiated..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 bg-black/60 border border-white/[0.1] rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 resize-none"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Confidential Campaign Brief</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-500 pt-1">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>All product specs protected under strict two-way NDA</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
