import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How does the creator node seeding network actually work?",
      a: "We curate a proprietary roster of 400+ genuine senior software engineers, founders, and technical creators across AI, developer tooling, hardware, and venture. We match your product with 40 to 150 relevant leaders who test private builds under embargo, formulate their own organic technical perspective, and publish coordinated commentary simultaneously."
    },
    {
      q: "Is this paid influencer shilling or authentic distribution?",
      a: "Zero sponsored-post hashtags, zero scripted promos. We only accept clients whose technology is genuinely superior. The creator nodes evaluate the product hands-on and share authentic technical reactions, benchmarks, and honest impressions. Audiences instantly recognize and reject fake sponsored content—real distribution requires genuine peer excitement."
    },
    {
      q: "How much preparation time is required before our target launch date?",
      a: "Our ideal timeline is 3 to 4 weeks prior to detonation. This allows 10 days for product testing and creative asset framing, 7 days for creator embargo briefings, and 5 days for coordinated rehearsal and asset staging. In urgent situations (e.g. unexpected funding announcement), we can deploy an accelerated 10-day sprint."
    },
    {
      q: "What if our company is in deep stealth and has virtually zero followers?",
      a: "Several of our highest-yield case studies (like Visko and TypeSafe AI) launched out of zero or negligible follower bases. Because distribution originates across a distributed web of highly trusted personal accounts, algorithmic virality does not rely on your brand account's historical reach."
    },
    {
      q: "What metrics do you guarantee for each campaign drop?",
      a: "We contractually commit to minimum delivered creator node density, guaranteed impressions, and timeline saturation windows. Our median client campaign delivers between 8M to 25M organic views, with top performers achieving 40M+ impressions."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 border-b border-white/[0.08] bg-[#0c0d10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CLARITY & LOGISTICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Answered Questions
          </h2>
          <p className="text-zinc-400 text-sm mt-2">
            Everything you need to know about our campaign architecture, timelines, and ethics.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 font-sans">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-white/[0.08] rounded-xl overflow-hidden bg-zinc-900/40 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-zinc-800/30 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <span className="text-zinc-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-400" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/[0.04]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
