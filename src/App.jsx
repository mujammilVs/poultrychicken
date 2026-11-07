import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Products from './components/Products';
import FarmOperations from './components/FarmOperations';
import Facilities from './components/Facilities';
import LocationsHub from './components/LocationsHub';
import QualityCompliance from './components/QualityCompliance';
import PoultryGallery from './components/PoultryGallery';
import TeamSection from './components/TeamSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';
import { companyData } from './data/poultryData';

export default function App() {
  const [selectedQuoteData, setSelectedQuoteData] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleOpenQuote = (productName = '') => {
    if (productName) {
      setSelectedQuoteData({
        productType: productName
      });
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const headerOffset = 85;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectQuoteFromCalc = (summary) => {
    setSelectedQuoteData(summary);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const headerOffset = 85;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleClearSelectedQuote = () => {
    setSelectedQuoteData(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans selection:bg-farm-700 selection:text-white">
      {/* Navigation with smooth scroll to top on Home/Logo */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* Company Overview, Vision, Mission & Values */}
        <Overview />

        {/* Products, Pricing Estimator & Specs */}
        <Products 
          onOpenQuote={handleOpenQuote} 
          onSelectQuoteFromCalc={handleSelectQuoteFromCalc} 
        />

        {/* 6-Stage Operational Workflow */}
        <FarmOperations />

        {/* Facilities & 4,000/hr In-House Slaughterhouse */}
        <Facilities />

        {/* 25 Locations Across Al Ain (Al Wagan, Abu Samrah, Al Arad, Al Jazeera) */}
        <LocationsHub />

        {/* Quality, ADAFSA & ADDED Compliance */}
        <QualityCompliance />

        {/* Live Poultry Operations & Farm Gallery */}
        <PoultryGallery />

        {/* Leadership & Operations Governance */}
        <TeamSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Commercial Inquiry & Wholesale Quote Request Form */}
        <ContactSection 
          selectedQuoteData={selectedQuoteData}
          clearSelectedQuote={handleClearSelectedQuote}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        
        {/* Scroll to Top Floating Button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-full bg-farm-800 hover:bg-farm-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center transform hover:-translate-y-0.5 border border-farm-600 animate-fadeIn focus:outline-none"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5 text-amberGold-400" />
          </button>
        )}

      </div>
    </div>
  );
}
