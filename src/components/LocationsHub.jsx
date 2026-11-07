import React, { useState } from 'react';
import { 
  MapPin, 
  Building, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Compass,
  Navigation
} from 'lucide-react';
import { companyData } from '../data/poultryData';
import SafeImage from './SafeImage';

export default function LocationsHub() {
  const [selectedHub, setSelectedHub] = useState(companyData.hubs[0].id);

  const activeHubData = companyData.hubs.find(h => h.id === selectedHub) || companyData.hubs[0];

  return (
    <section id="hubs" className="scroll-mt-24 sm:scroll-mt-28 py-16 sm:py-20 bg-white border-b border-farm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-farm-100 text-farm-800 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>25 FARM LOCATIONS ACROSS AL AIN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Strategic Farming Hubs Across Al Ain Region
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Aamir Al Wagan Poultry Farm operates across 25 distinct locations in the Al Ain agricultural belt, 
            centred around four high-efficiency operational clusters: <strong>Al Wagan, Abu Samrah, Al Arad, and Al Jazeera</strong>.
          </p>
        </div>

        {/* 4 Hub Selector Tabs (Responsive Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-8">
          {companyData.hubs.map((hub) => {
            const isSelected = selectedHub === hub.id;

            return (
              <button
                key={hub.id}
                type="button"
                onClick={() => setSelectedHub(hub.id)}
                className={`p-3.5 sm:p-5 rounded-2xl text-left transition-all border ${
                  isSelected
                    ? 'bg-farm-800 text-white border-farm-700 shadow-md ring-2 ring-farm-600/30'
                    : 'bg-[#FCFBF7] text-gray-800 border-farm-200 hover:bg-farm-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-amberGold-400 text-farm-950' : 'bg-farm-100 text-farm-800'
                  }`}>
                    {hub.shedCount}
                  </span>
                  <MapPin className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSelected ? 'text-amberGold-300' : 'text-farm-600'}`} />
                </div>
                <h4 className="text-xs sm:text-sm md:text-base font-bold tracking-tight">{hub.name}</h4>
                <p className={`text-[11px] sm:text-xs mt-0.5 line-clamp-1 ${isSelected ? 'text-farm-200' : 'text-gray-500'}`}>
                  {hub.role}
                </p>
              </button>
            );
          })}
        </div>

        {/* Hub Interactive Details Card with Photo */}
        <div className="bg-[#FAF8F2] rounded-3xl p-6 sm:p-8 lg:p-10 border border-farm-200 shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (7 cols on lg) */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-farm-200 text-farm-900">
                  {activeHubData.locationDesc}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amberGold-100 text-amberGold-900 border border-amberGold-200">
                  {activeHubData.shedCount} Active
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                {activeHubData.name} — {activeHubData.role}
              </h3>
              
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                <strong>Core Specialty:</strong> {activeHubData.specialty}. Designed with isolated biosecurity zones 
                and automated micro-climate cooling suitable for high desert ambient temperatures, ensuring natural bird comfort and optimal conversion ratios.
              </p>

              <div>
                <h4 className="text-[11px] sm:text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                  Key Hub Capabilities & Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {activeHubData.highlights.map((item, i) => (
                    <div 
                      key={i}
                      className="bg-white p-3 rounded-xl border border-farm-100 text-xs font-medium text-gray-800 flex items-center gap-2 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Hub Visual & Geographical Summary (5 cols on lg) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-soft border border-farm-200 h-48 sm:h-56">
                <SafeImage
                  src={activeHubData.image}
                  alt={`${activeHubData.name} in Al Ain`}
                  className="w-full h-full object-cover"
                  fallbackIcon={MapPin}
                />
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-farm-200 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-farm-50 text-farm-700 flex items-center justify-center shrink-0">
                  <Navigation className="w-5 h-5 text-farm-700" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                    Al Ain Strategic Cold-Chain Corridor
                  </h4>
                  <p className="text-[11px] text-gray-500">
                    Direct transit via E22 & E66 for guaranteed same-day delivery across UAE.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
