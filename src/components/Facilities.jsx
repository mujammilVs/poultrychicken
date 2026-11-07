import React from 'react';
import { 
  Building, 
  Wheat, 
  Database, 
  Droplets, 
  Wrench, 
  Zap, 
  Truck, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { companyData } from '../data/poultryData';
import SafeImage from './SafeImage';

export default function Facilities() {
  const iconMap = {
    Building: Building,
    Wheat: Wheat,
    Database: Database,
    Droplets: Droplets,
    Wrench: Wrench,
    Zap: Zap,
    Truck: Truck,
    ShieldCheck: ShieldCheck
  };

  return (
    <section id="facilities" className="scroll-mt-24 sm:scroll-mt-28 py-16 sm:py-20 bg-[#FAF8F2] border-b border-farm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-farm-100 text-farm-800 text-xs font-semibold mb-3">
              <Building className="w-3.5 h-3.5" />
              <span>FARM FACILITIES & INFRASTRUCTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Built for Scale, Hygiene & Sustainable Production
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              Our facilities are purpose-built to support every stage of modern poultry production — 
              from high-capacity feed milling and climate-managed sheds to in-house Halal processing and cold-chain logistics.
            </p>
          </div>

          <div className="shrink-0 bg-white p-4 rounded-2xl border border-farm-200 shadow-xs flex items-center gap-4 self-start md:self-auto">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-farm-800 text-amberGold-400 flex items-center justify-center font-bold text-lg sm:text-xl">
              100
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">Poultry Sheds</div>
              <div className="text-xs text-farm-600 font-medium">Distributed across Al Ain</div>
            </div>
          </div>
        </div>

        {/* Facilities Grid with Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.facilities.map((fac, idx) => {
            const IconComp = iconMap[fac.icon] || Building;

            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-farm-200/90 shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Facility Card Image Banner */}
                  <div className="h-36 sm:h-40 w-full relative overflow-hidden bg-farm-100">
                    <SafeImage
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      fallbackIcon={IconComp}
                    />
                    <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold text-farm-900 border border-farm-200 shadow-xs">
                      {fac.stat}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="w-9 h-9 rounded-xl bg-farm-50 text-farm-700 flex items-center justify-center mb-3 group-hover:bg-farm-700 group-hover:text-amberGold-300 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 group-hover:text-farm-800 transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <div className="pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-farm-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Operational & Biosecure</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Slaughterhouse & Processing Spotlight */}
        <div className="mt-12 bg-gradient-to-r from-farm-900 via-farm-800 to-farm-950 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-premium flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="px-3 py-1 bg-amberGold-500/20 text-amberGold-300 border border-amberGold-500/40 rounded-full text-xs font-semibold inline-block mb-3">
              Modern In-House Slaughterhouse
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
              Hygienic Halal Processing Line: 4,000 Birds / Hour
            </h3>
            <p className="text-xs sm:text-sm text-farm-200 leading-relaxed">
              Operating under continuous veterinary inspection with automated water scalding, feather picking, evisceration, 
              air chilling, and weight grading to protect meat texture, retain tenderness, and ensure zero cross-contamination.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 sm:gap-4 shrink-0">
            <div className="bg-farm-800/80 p-3.5 sm:p-4 rounded-2xl border border-farm-700 text-center">
              <span className="text-xl sm:text-2xl font-black text-amberGold-400">4,000</span>
              <span className="block text-[10px] sm:text-[11px] text-farm-200 mt-0.5">Birds / Hour Speed</span>
            </div>
            <div className="bg-farm-800/80 p-3.5 sm:p-4 rounded-2xl border border-farm-700 text-center">
              <span className="text-xl sm:text-2xl font-black text-amberGold-400">0°C - 4°C</span>
              <span className="block text-[10px] sm:text-[11px] text-farm-200 mt-0.5">Rapid Air Chilling</span>
            </div>
            <div className="bg-farm-800/80 p-3.5 sm:p-4 rounded-2xl border border-farm-700 text-center">
              <span className="text-xl sm:text-2xl font-black text-amberGold-400">100%</span>
              <span className="block text-[10px] sm:text-[11px] text-farm-200 mt-0.5">Halal Supervised</span>
            </div>
            <div className="bg-farm-800/80 p-3.5 sm:p-4 rounded-2xl border border-farm-700 text-center">
              <span className="text-xl sm:text-2xl font-black text-amberGold-400">ADAFSA</span>
              <span className="block text-[10px] sm:text-[11px] text-farm-200 mt-0.5">NOC Registered</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
