import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp, 
  Award, 
  Feather,
  Sparkles
} from 'lucide-react';
import { companyData } from '../data/poultryData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    if (!targetId || targetId === 'top') {
      scrollToTop();
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-farm-950 text-white pt-16 pb-12 border-t border-farm-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-farm-800">
          
          {/* Brand & Ethos (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <button 
                type="button"
                onClick={scrollToTop}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-farm-800 to-farm-900 border border-amberGold-400/80 p-1 flex items-center justify-center hover:scale-105 transition-all shadow-md shrink-0"
                title="Scroll to Top"
              >
                <img 
                  src="/images/white-broiler-chicken.png" 
                  alt="Aamir Al Wagan Poultry Farm" 
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </button>
              <div>
                <span className="font-bold text-lg text-white tracking-tight block">
                  AAMIR AL WAGAN POULTRY FARM L.L.C
                </span>
                <span className="text-xs text-amberGold-400 font-semibold block">
                  Baraka Al Ain · 100% Fresh UAE Broiler Chicken · بركة العين
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-farm-300 leading-relaxed max-w-sm">
              Integrated modern poultry farming enterprise based in Al Wagan, Al Ain. 
              Supplying dependable, traceable, and farm-fresh chicken across the UAE with 
              uncompromising standards of biosecurity and animal welfare.
            </p>

            <div className="pt-2">
              <p className="text-xs font-bold text-farm-200 tracking-wider uppercase mb-2">
                Official Certifications:
              </p>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="inline-flex items-center gap-1.5 bg-farm-900 px-3 py-1.5 rounded-lg border border-farm-800 text-farm-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-amberGold-400" />
                  <span>ADAFSA NOC Issued</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-farm-900 px-3 py-1.5 rounded-lg border border-farm-800 text-farm-200">
                  <Award className="w-3.5 h-3.5 text-amberGold-400" />
                  <span>ADDED Trade Licenced</span>
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links with smooth scroll */}
          <div>
            <h4 className="text-xs font-bold text-amberGold-400 uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-farm-300">
              <li><button type="button" onClick={scrollToTop} className="hover:text-white transition-colors text-left">Home (Top)</button></li>
              <li><button type="button" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-white transition-colors text-left">About & Ethos</button></li>
              <li><button type="button" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-white transition-colors text-left">Products & Supply</button></li>
              <li><button type="button" onClick={(e) => handleLinkClick(e, 'operations')} className="hover:text-white transition-colors text-left">6-Stage Operations</button></li>
              <li><button type="button" onClick={(e) => handleLinkClick(e, 'facilities')} className="hover:text-white transition-colors text-left">Facilities & Slaughterhouse</button></li>
              <li><button type="button" onClick={(e) => handleLinkClick(e, 'hubs')} className="hover:text-white transition-colors text-left">25 Farm Hubs in Al Ain</button></li>
              <li><button type="button" onClick={(e) => handleLinkClick(e, 'compliance')} className="hover:text-white transition-colors text-left">Regulatory Compliance</button></li>
              <li><button type="button" onClick={(e) => handleLinkClick(e, 'gallery')} className="hover:text-white transition-colors text-left">Poultry Farm Gallery</button></li>
            </ul>
          </div>

          {/* Products & Segments */}
          <div>
            <h4 className="text-xs font-bold text-amberGold-400 uppercase tracking-wider mb-4">
              Fresh Poultry Range
            </h4>
            <ul className="space-y-2 text-xs text-farm-300">
              <li><button type="button" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-white transition-colors text-left">Fresh Whole Chickens</button></li>
              <li><button type="button" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-white transition-colors text-left">Bulk Supply for HORECA</button></li>
              <li><button type="button" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-white transition-colors text-left">Custom Cuts & Portioning</button></li>
              <li><button type="button" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-white transition-colors text-left">Modified Atmosphere Packaging</button></li>
              <li><button type="button" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-white transition-colors text-left">Halal Slaughtered Poultry</button></li>
              <li><button type="button" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-white transition-colors text-left">Daily Cold-Chain Logistics</button></li>
            </ul>
          </div>

          {/* Farm Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-amberGold-400 uppercase tracking-wider mb-4">
              Farm Desk Contact
            </h4>
            <div className="space-y-3 text-xs text-farm-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-farm-400 shrink-0 mt-0.5" />
                <span>Al Wagan, Al Ain, Abu Dhabi, United Arab Emirates</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-farm-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">{companyData.phone}</span>
                  <span className="text-[11px] text-farm-400">{companyData.mobile}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-farm-400 shrink-0 mt-0.5" />
                <span className="text-white">{companyData.salesEmail}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-farm-400 shrink-0 mt-0.5" />
                <span className="text-[11px]">{companyData.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-farm-400">
          <div>
            © {companyData.establishedYear} {companyData.name}. Trading as {companyData.tradeName}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-farm-500">
              Fresh Chicken · Quality · Trust · Al Ain, UAE
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-farm-900 hover:bg-farm-800 text-farm-200 hover:text-white transition-colors border border-farm-800 cursor-pointer shadow-sm"
            >
              <ArrowUp className="w-3.5 h-3.5 text-amberGold-400" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
