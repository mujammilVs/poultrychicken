import React from 'react';
import { 
  Sparkles, 
  Globe, 
  Zap, 
  Cpu,
  CheckCircle2, 
  TrendingUp, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { companyData } from '../data/poultryData';
import SafeImage from './SafeImage';

export default function FutureInitiatives() {
  const iconMap = {
    Globe: Globe,
    Zap: Zap,
    Cpu: Cpu
  };

  return (
    <section id="future" className="scroll-mt-24 sm:scroll-mt-28 py-16 sm:py-20 bg-white border-b border-farm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amberGold-100 text-amberGold-900 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amberGold-700" />
            <span>GROWTH & EXPANSION ROADMAP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Future Poultry Growth Initiatives
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Building on our established broiler operations, Aamir Al Wagan Poultry Farm L.L.C is investing in 
            strategic growth across GCC export markets, expanded processing capacity, and smart agritech to 
            lead UAE's poultry industry into the future.
          </p>
        </div>

        {/* 3 Future Initiatives Cards with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {companyData.futureInitiatives.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Compass;

            return (
              <div 
                key={idx}
                className="bg-[#FAF8F2] rounded-3xl overflow-hidden border border-farm-200/80 shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="h-44 sm:h-48 w-full relative overflow-hidden bg-farm-100">
                    <SafeImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      fallbackIcon={IconComp}
                    />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-farm-900/90 backdrop-blur-md text-amberGold-400 flex items-center justify-center font-bold text-sm shadow">
                      {item.number}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-farm-900 border border-farm-200 shadow-xs">
                      {item.badge}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-farm-700 font-semibold mb-3">
                      Poultry Industry Growth
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                      {item.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-farm-200/60">
                      {item.bulletPoints.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-farm-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <div className="pt-3 border-t border-farm-200/60 text-[11px] font-semibold text-gray-500">
                    Target Market: UAE Commercial Supply
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sustainability & Quality Commitment Box */}
        <div className="bg-farm-900 text-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-farm-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
              Leading UAE's Poultry Industry Forward
            </h4>
            <p className="text-xs sm:text-sm text-farm-200 leading-relaxed">
              Every initiative is built on our core poultry expertise — growing from 25 farm locations 
              to a fully integrated, tech-enabled, GCC-export-ready broiler supply chain. 
              Fresh. Halal. Traceable. From our sheds to your table.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 bg-farm-800 px-4 py-2.5 rounded-xl text-xs font-semibold text-amberGold-400 border border-farm-700">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified UAE Food Security</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
