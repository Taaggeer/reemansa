/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { TopLoadingBar, triggerTopLoader } from './components/TopLoadingBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { SafetyFocusSection } from './components/SafetyFocusSection';
import { CostEstimator } from './components/CostEstimator';
import { ProjectGallery } from './components/ProjectGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { Footer } from './components/Footer';

function MainApp() {
  const { isRTL } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    triggerTopLoader();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Cairo',sans-serif] relative ${
        isRTL ? 'text-right' : 'text-left'
      }`}
    >
      {/* Top Loading Progress Bar */}
      <TopLoadingBar />

      {/* Top Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onExploreServices={() => scrollToSection('services')}
          onRequestQuote={() => scrollToSection('estimator')}
        />

        {/* Animated Stats Section */}
        <StatsSection />

        {/* About Section */}
        <AboutSection />

        {/* All Engineering Services (Architectural, Civil & Safety) */}
        <ServicesSection />

        {/* Dedicated Safety & Civil Defense (منصة سلامة) */}
        <SafetyFocusSection />

        {/* Visual Portfolio & Project Gallery (Completed Architectural & Safety Works) */}
        <ProjectGallery />

        {/* Interactive Cost Estimator & Quote Request */}
        <CostEstimator />

        {/* Client Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* Contact, Office Map & Quick Consultation Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Sticky Bottom Bar for Mobile & Quick Dial / WhatsApp */}
      <StickyBottomBar />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

