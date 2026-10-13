import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUpRight, Clock, Eye, Users, Bookmark, ChevronRight, Layers, LayoutGrid, List } from 'lucide-react';
import { CASE_STUDIES, LAUNCH_STAGES } from '../data/caseStudies';

export default function CaseStudiesDirectory({ onSelectStudy }) {
  const [selectedStage, setSelectedStage] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('views'); // 'views', 'multiplier', 'readTime'
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'

  // Filter & Sort logic
  const filteredStudies = useMemo(() => {
    return CASE_STUDIES.filter(study => {
      // Stage check
      const matchesStage = selectedStage === 'all' || study.stage === selectedStage;

      // Search query check
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        study.title.toLowerCase().includes(q) ||
        study.company.toLowerCase().includes(q) ||
        study.summary.toLowerCase().includes(q) ||
        study.tags.some(t => t.toLowerCase().includes(q)) ||
        (study.metrics.conversion && study.metrics.conversion.toLowerCase().includes(q))
      );

      return matchesStage && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'views') {
        return b.metrics.rawViews - a.metrics.rawViews;
      }
      if (sortBy === 'multiplier') {
        const multA = parseFloat(a.metrics.followerMultiplier) || 1;
        const multB = parseFloat(b.metrics.followerMultiplier) || 1;
        return multB - multA;
      }
      if (sortBy === 'readTime') {
        return a.timeToRead.localeCompare(b.timeToRead);
      }
      return 0;
    });
  }, [selectedStage, searchQuery, sortBy]);

  return (
    <section id="case-studies" className="py-16 md:py-24 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>THE DIRECTORY ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Launch Case Studies
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-xl">
              Inspect the exact tactics, seeding networks, and timeline metrics across 8 flagship drops.
            </p>
          </div>

          {/* Quick stats counter */}
          <div className="text-xs font-mono text-zinc-500 bg-zinc-900/60 border border-white/[0.08] px-4 py-2 rounded-lg w-fit">
            SHOWING <b className="text-white">{filteredStudies.length}</b> OF {CASE_STUDIES.length} ARCHIVED RELEASES
          </div>
        </div>

        {/* Filter Controls & Search Toolbar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 bg-zinc-900/40 border border-white/[0.08] p-3 rounded-xl">
          
          {/* Stage Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {LAUNCH_STAGES.map(stage => {
              const active = selectedStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    active
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  <span>{stage.label}</span>
                  <span className={`ml-1.5 text-[10px] font-mono px-1.5 py-0.2 rounded ${active ? 'bg-zinc-200 text-black' : 'bg-zinc-800 text-zinc-500'}`}>
                    {stage.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search company, tech, tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-black/60 border border-white/[0.1] rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-black/60 border border-white/[0.1] text-xs text-zinc-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500/50 font-mono"
            >
              <option value="views">Sort: Most Views</option>
              <option value="multiplier">Sort: Highest Multiplier</option>
              <option value="readTime">Sort: Read Time</option>
            </select>

            {/* View Mode Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-black/40 border border-white/[0.08] p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                title="Grid Cards View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded ${viewMode === 'table' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                title="Tabular List View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* =========================================================================
           View Mode A: Editorial Card Grid
           ========================================================================= */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((study) => {
              const stageColors = {
                'stealth': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
                'seed-to-series-b': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
                'growth': 'bg-purple-500/10 text-purple-400 border-purple-500/20'
              };

              return (
                <div
                  key={study.id}
                  onClick={() => onSelectStudy(study.id)}
                  className="group rounded-xl bg-zinc-900/40 border border-white/[0.08] hover:border-white/[0.22] p-6 flex flex-col justify-between transition-all hover:bg-zinc-900/70 cursor-pointer relative"
                >
                  {/* Top Meta Bar */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[11px] font-mono uppercase px-2 py-0.5 rounded border ${stageColors[study.stage] || 'bg-zinc-800 text-zinc-400'}`}>
                        {study.stage.replace(/-/g, ' ')}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                        <Clock className="w-3 h-3" />
                        <span>{study.timeToRead}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-2 leading-snug">
                      {study.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-zinc-400 line-clamp-3 mb-5 leading-relaxed">
                      {study.summary}
                    </p>
                  </div>

                  {/* Metrics Block */}
                  <div>
                    {/* Follower Multiplier Progress Bar */}
                    {study.metrics.startingFollowers && study.metrics.endingFollowers && (
                      <div className="mb-4 bg-black/40 border border-white/[0.06] p-3 rounded-lg">
                        <div className="flex justify-between items-center text-[11px] font-mono text-zinc-400 mb-1.5">
                          <span>AUDIENCE EXPANSION</span>
                          <span className="text-emerald-400 font-bold">{study.metrics.followerMultiplier}</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden flex">
                          <div className="h-full bg-zinc-600" style={{ width: '12%' }} />
                          <div className="h-full bg-emerald-500" style={{ width: '88%' }} />
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mt-1.5">
                          <span>START: {study.metrics.startingFollowers.toLocaleString()}</span>
                          <span>END: {study.metrics.endingFollowers.toLocaleString()}</span>
                        </div>
                      </div>
                    )}

                    {/* Quick Metric Pills */}
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-3 border-t border-white/[0.06] mb-4">
                      <div className="bg-zinc-900/60 p-2 rounded border border-white/[0.04]">
                        <span className="text-zinc-500 block text-[10px]">TOTAL VIEWS</span>
                        <b className="text-white text-sm">{study.metrics.views}</b>
                      </div>
                      <div className="bg-zinc-900/60 p-2 rounded border border-white/[0.04]">
                        <span className="text-zinc-500 block text-[10px]">BOOKMARKS</span>
                        <b className="text-zinc-200 text-sm">{study.metrics.bookmarks || '750+'}</b>
                      </div>
                    </div>

                    {/* Tags & Action */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex flex-wrap gap-1">
                        {study.tags.slice(0, 2).map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-mono text-zinc-400 bg-zinc-800/80 px-1.5 py-0.5 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">
                        Deconstruct <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* =========================================================================
           View Mode B: Tabular List Directory
           ========================================================================= */}
        {viewMode === 'table' && (
          <div className="border border-white/[0.08] rounded-xl overflow-hidden bg-zinc-900/40">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-black/60 font-mono text-zinc-400 uppercase text-[11px]">
                    <th className="py-3 px-4">Company & Campaign</th>
                    <th className="py-3 px-4">Stage</th>
                    <th className="py-3 px-4 text-right">Views</th>
                    <th className="py-3 px-4 text-right">Growth Multiplier</th>
                    <th className="py-3 px-4">Key Conversion Metric</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] font-mono">
                  {filteredStudies.map((study) => (
                    <tr
                      key={study.id}
                      onClick={() => onSelectStudy(study.id)}
                      className="hover:bg-zinc-800/40 transition-colors cursor-pointer group"
                    >
                      <td className="py-4 px-4 font-sans font-medium text-white group-hover:text-emerald-300">
                        <div className="font-bold text-sm">{study.title}</div>
                        <div className="text-zinc-500 text-xs font-mono mt-0.5">{study.tags.join(' • ')}</div>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded text-[11px] bg-zinc-800 text-zinc-300 border border-white/[0.06]">
                          {study.stage.replace(/-/g, ' ')}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right whitespace-nowrap text-white font-bold text-sm">
                        {study.metrics.views}
                      </td>
                      <td className="py-4 px-4 text-right whitespace-nowrap text-emerald-400 font-bold">
                        {study.metrics.followerMultiplier || 'N/A'}
                      </td>
                      <td className="py-4 px-4 text-zinc-300 text-xs font-sans">
                        {study.metrics.conversion || study.metrics.benchmark || study.metrics.revenue}
                      </td>
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <button className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-800 text-zinc-200 hover:bg-emerald-500 hover:text-black transition-colors text-xs font-sans">
                          Inspect <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {filteredStudies.length === 0 && (
          <div className="text-center py-16 border border-white/[0.08] rounded-xl bg-zinc-900/20">
            <p className="text-sm text-zinc-400 mb-2">No case studies matched your current search criteria.</p>
            <button
              onClick={() => { setSelectedStage('all'); setSearchQuery(''); }}
              className="text-xs font-mono text-emerald-400 underline hover:text-emerald-300"
            >
              Reset all filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
