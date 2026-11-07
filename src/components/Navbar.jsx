import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Phone, 
  Menu, 
  X, 
  FileText, 
  ChevronRight,
  Sparkles,
  ArrowUp,
  Building,
  ShoppingBag,
  Activity,
  Layers,
  MapPin,
  CheckCircle2,
  Camera,
  Feather,
  Mail
} from 'lucide-react';
import { companyData } from '../data/poultryData';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToTop = (e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#' || href === '#top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#', icon: ArrowUp },
    { name: 'About', href: '#about', icon: Building },
    { name: 'Products', href: '#products', icon: ShoppingBag },
    { name: 'Operations', href: '#operations', icon: Activity },
    { name: 'Facilities', href: '#facilities', icon: Layers },
    { name: 'Farm Hubs', href: '#hubs', icon: MapPin },
    { name: 'Compliance', href: '#compliance', icon: ShieldCheck },
    { name: 'Farm Gallery', href: '#gallery', icon: Camera },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Notification / Regulatory Bar */}
      <div className="bg-farm-900 text-farm-100 text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-farm-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Left certification pill */}
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-farm-800/90 text-amberGold-400 px-2 sm:px-2.5 py-0.5 rounded-full font-semibold text-[10px] sm:text-[11px] border border-farm-700 shrink-0">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> ADAFSA & ADDED Certified
            </span>
            <span className="hidden md:inline text-farm-400">|</span>
            <span className="hidden md:inline text-farm-200 text-[11px] truncate">
              Al Wagan, Al Ain · 25 Farm Locations · 100 Poultry Sheds
            </span>
          </div>

          {/* Right phone & status */}
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] shrink-0">
            <a 
              href={`tel:${companyData.phone}`} 
              className="flex items-center gap-1 sm:gap-1.5 text-farm-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-amberGold-400 shrink-0" />
              <span className="font-medium text-[10px] sm:text-[11px]">{companyData.phone}</span>
            </a>
            <span className="text-farm-700 hidden sm:inline">·</span>
            <span className="text-amberGold-300 font-medium hidden sm:inline text-[11px]">100% Fresh UAE Poultry</span>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2 sm:py-3 border-b border-farm-100' 
            : 'bg-white/95 backdrop-blur-sm py-2.5 sm:py-3.5 border-b border-farm-50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo & Title (Responsive: compact on mobile, full on tablet/desktop) */}
          <button 
            type="button"
            onClick={scrollToTop} 
            className="flex items-center gap-2 sm:gap-3 group text-left focus:outline-none min-w-0"
            title="Aamir Al Wagan Poultry Farm - Scroll to Top"
          >
            {/* Visual Poultry Emblem */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-farm-800 to-farm-900 border-2 border-amberGold-400/80 shadow-md group-hover:border-amberGold-400 transition-all shrink-0 flex items-center justify-center overflow-hidden p-1">
              <img 
                src="/images/white-broiler-chicken.png" 
                alt="Broiler Poultry" 
                className="w-full h-full object-contain filter drop-shadow group-hover:scale-110 transition-transform"
              />
              <span className="absolute bottom-0 right-0 bg-amberGold-400 text-farm-950 font-black text-[8px] px-1 rounded-tl leading-none">
                AW
              </span>
            </div>
            
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-extrabold text-farm-900 text-sm sm:text-base lg:text-lg tracking-tight leading-tight truncate">
                  AAMIR AL WAGAN
                </span>
                <span className="hidden sm:inline-block text-[10px] sm:text-xs bg-farm-100 text-farm-800 font-bold px-2 py-0.5 rounded border border-farm-200 shrink-0">
                  Baraka Al Ain
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-farm-700 font-semibold tracking-wide truncate flex items-center gap-1">
                <span className="sm:hidden font-bold text-amberGold-700">Baraka Al Ain · </span>
                <span className="text-farm-800 font-bold">FRESH POULTRY FARM</span>
                <span className="text-farm-400">·</span>
                <span className="text-gray-500">بركة العين</span>
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links (Visible on xl: 1280px+) */}
          <div className="hidden xl:flex items-center gap-1 2xl:gap-2 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-2.5 py-1.5 text-xs 2xl:text-sm font-semibold text-gray-700 hover:text-farm-800 hover:bg-farm-50 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Block (Quote CTA + Responsive Menu Button) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            
            {/* Request Quote Button (Compact on mobile, full on tablet/desktop) */}
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-1 sm:gap-2 bg-farm-700 hover:bg-farm-800 text-white text-[11px] sm:text-sm font-bold px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-xl shadow-sm hover:shadow transition-all group shrink-0"
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amberGold-400 shrink-0" />
              <span className="hidden sm:inline">Request Quote</span>
              <span className="sm:hidden">Quote</span>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-farm-300 group-hover:translate-x-0.5 transition-transform hidden sm:inline shrink-0" />
            </button>

            {/* Mobile & Mid-Screen Menu Toggle Button */}
            <div className="xl:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 sm:px-3 rounded-xl text-farm-800 bg-farm-50 border border-farm-200 hover:bg-farm-100 focus:outline-none flex items-center gap-1 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <>
                    <X className="w-5 h-5 text-farm-800" />
                    <span className="text-xs font-bold hidden sm:inline">Close</span>
                  </>
                ) : (
                  <>
                    <Menu className="w-5 h-5 text-farm-800" />
                    <span className="text-xs font-bold hidden sm:inline">Menu</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>
      </nav>

      {/* Backdrop overlay for Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="xl:hidden fixed inset-0 bg-black/40 backdrop-blur-xs z-40"
          style={{ top: '80px' }}
        />
      )}

      {/* Responsive Drawer for Mobile & Mid Screens */}
      {mobileMenuOpen && (
        <div className="xl:hidden relative z-50 bg-white border-b border-farm-200 shadow-2xl animate-fadeIn max-h-[calc(100vh-90px)] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            
            {/* Header info inside drawer */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-farm-900">Baraka Al Ain</span>
                <span className="text-[11px] bg-farm-100 text-farm-800 px-2 py-0.5 rounded-full font-medium">
                  Al Wagan, Al Ain
                </span>
              </div>
              <span className="text-gray-400 text-[11px]">UAE Fresh Poultry</span>
            </div>

            {/* 1-Col on mobile, 2-Col on tablet/mid screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-2 py-1">
              {navLinks.map((link) => {
                const IconComp = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-gray-800 hover:text-farm-900 hover:bg-farm-50 active:bg-farm-100 transition-all cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-lg bg-farm-50 text-farm-700 flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-farm-700 hover:bg-farm-800 text-white font-bold py-3 px-4 rounded-xl shadow text-xs sm:text-sm active:scale-98"
              >
                <FileText className="w-4 h-4 text-amberGold-400" />
                <span>Request Wholesale Supply Quote</span>
              </button>
              
              <a
                href={`tel:${companyData.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-farm-50 text-farm-800 hover:bg-farm-100 font-semibold py-2.5 px-4 rounded-xl border border-farm-200 text-xs shrink-0"
              >
                <Phone className="w-4 h-4 text-farm-600" />
                <span>Call Desk: {companyData.phone}</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
