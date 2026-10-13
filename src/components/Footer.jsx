import React, { useState, useEffect } from 'react';
import { Zap, ArrowUp, Activity } from 'lucide-react';


export default function Footer({ onOpenContact }) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setCurrentTime(d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-white/[0.08] text-xs font-mono text-zinc-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/[0.06]">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-zinc-900 border border-white/[0.1] flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <span className="text-sm font-bold text-white tracking-wider">LAUNCHFORGE / DOOMERS</span>
            </div>
            <p className="text-zinc-400 text-xs font-sans max-w-sm">
              Editorial, data-dense agency replica tracking viral tech launches, creator distribution nodes, and timeline metrics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-zinc-400 text-xs">
            <a href="#case-studies" className="hover:text-white transition-colors">Directory</a>
            <a href="#metrics" className="hover:text-white transition-colors">Benchmarks</a>
            <a href="#calculator" className="hover:text-white transition-colors">Reach Calculator</a>
            <a href="#playbook" className="hover:text-white transition-colors">Playbook</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <button
              onClick={onOpenContact}
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              Plan Your Launch →
            </button>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              ALL DISTRIBUTION CLUSTERS NOMINAL
            </span>
            <span className="text-zinc-600">•</span>
            <span>SYSTEM CLOCK: {currentTime}</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <a 
              href="https://github.com/21cabbagee/viral-launch-showcase" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 transition-colors pl-2"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
