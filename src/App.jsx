import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MetricsStrip from './components/MetricsStrip';
import CaseStudiesDirectory from './components/CaseStudiesDirectory';
import MethodologySection from './components/MethodologySection';
import ReachCalculator from './components/ReachCalculator';
import PlaybookSection from './components/PlaybookSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [activeStudyId, setActiveStudyId] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] flex flex-col selection:bg-emerald-500/20 selection:text-emerald-400">
      
      {/* Navigation Header */}
      <Header onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onSelectStudy={(id) => setActiveStudyId(id)}
          onOpenCalculator={scrollToCalculator}
        />
        
        <MetricsStrip />

        <CaseStudiesDirectory
          onSelectStudy={(id) => setActiveStudyId(id)}
        />

        <MethodologySection />

        <ReachCalculator
          onOpenContact={() => setIsContactOpen(true)}
        />

        <PlaybookSection />

        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Modals & Drawers */}
      {activeStudyId && (
        <CaseStudyModal
          studyId={activeStudyId}
          onClose={() => setActiveStudyId(null)}
          onOpenContact={() => setIsContactOpen(true)}
        />
      )}

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
