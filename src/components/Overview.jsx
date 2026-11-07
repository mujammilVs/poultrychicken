import React, { useState } from 'react';
import { 
  Building2, 
  Target, 
  Compass, 
  Award, 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  Leaf, 
  TrendingUp, 
  HeartHandshake, 
  CheckCircle2, 
  RefreshCw, 
  Globe, 
  Droplets,
  Cpu,
  Feather
} from 'lucide-react';
import { companyData } from '../data/poultryData';
import SafeImage from './SafeImage';

export default function Overview() {
  const [activeTab, setActiveTab] = useState('focus'); // 'focus' | 'commitments' | 'values'

  return (
    <section id="about" className="scroll-mt-24 sm:scroll-mt-28 py-16 sm:py-20 bg-white border-t border-b border-farm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-farm-100 text-farm-800 text-xs font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>COMPANY OVERVIEW & ETHOS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Nourishing Communities Through Responsible & Modern Poultry Farming
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            <strong>Aamir Al Wagan Poultry Farm L.L.C</strong>, trading as <strong>Baraka Al Ain</strong>, 
            is a poultry farming and trading enterprise based in Al Wagan, Al Ain. Established in 2026, 
            we operate integrated poultry activities to supply dependable, fresh, and biosecure poultry products 
            while maintaining strict welfare protocols and strong customer partnerships.
          </p>
        </div>

        {/* Visual & Regulatory Cards Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-14 sm:mb-16">
          
          {/* Card 1: Official Regulatory Standing (7 cols on lg) */}
          <div className="lg:col-span-7 bg-[#FAF8F2] p-6 sm:p-8 rounded-3xl border border-farm-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-farm-700 uppercase tracking-wider">Official Standing</span>
                <span className="px-2.5 py-1 bg-white text-farm-800 rounded-full text-[11px] sm:text-xs font-semibold border border-farm-200">
                  Dual Certified
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Licensed by ADDED & Approved by ADAFSA
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                The company holds a commercial trade licence issued by the <strong>Abu Dhabi Department of Economic Development (ADDED)</strong> 
                and a No Objection Certificate (NOC) issued by the <strong>Abu Dhabi Agriculture and Food Safety Authority (ADAFSA)</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-farm-200/60 text-xs">
              <div className="flex items-center gap-2 text-gray-800 font-medium bg-white p-3 rounded-xl border border-farm-100">
                <ShieldCheck className="w-4 h-4 text-farm-600 shrink-0" />
                <span>ADDED Commercial Licence</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800 font-medium bg-white p-3 rounded-xl border border-farm-100">
                <ShieldCheck className="w-4 h-4 text-farm-600 shrink-0" />
                <span>ADAFSA NOC Approved</span>
              </div>
            </div>
          </div>

          {/* Card 2: Visual Image of Farm Operations (5 cols on lg) */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-soft border border-farm-200 relative min-h-[260px] sm:min-h-[300px]">
            <SafeImage
              src={companyData.images.aboutFarm}
              alt="Aamir Al Wagan Modern Poultry Farm Infrastructure"
              className="w-full h-full object-cover"
              fallbackIcon={Building2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-farm-950/80 via-farm-950/30 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
              <span className="text-[11px] text-amberGold-400 font-bold uppercase tracking-wider mb-1">
                Modern Agritech & Biosecurity
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Eco-Conscious Poultry Sheds in Al Ain
              </h4>
              <p className="text-xs text-farm-200 mt-1 line-clamp-2">
                Integrated climate control and waste recycling preserving the natural desert ecology.
              </p>
            </div>
          </div>

        </div>

        {/* Vision & Mission Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 sm:mb-16 bg-gradient-to-r from-farm-50 via-white to-amberGold-50/50 p-6 sm:p-8 rounded-3xl border border-farm-200">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-farm-700 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-amberGold-300" />
            </div>
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-farm-700 mb-1">Our Vision</h4>
              <p className="text-sm sm:text-base font-bold text-gray-900 mb-1">Leading & Most Trusted Provider of Fresh Chicken</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Recognised across the industry for fresh chicken, uncompromising quality, ethical farming, and sustainable farm-to-table excellence.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4 border-t md:border-t-0 md:border-l border-farm-200 pt-5 md:pt-0 md:pl-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amberGold-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amberGold-700 mb-1">Our Mission</h4>
              <p className="text-sm sm:text-base font-bold text-gray-900 mb-1">Responsibly Raise & Deliver UAE's Freshest Chicken</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Through efficient, biosecure, and sustainable farm operations — exceeding regulatory standards while nourishing communities with wholesome, safe poultry.
              </p>
            </div>
          </div>
        </div>

        {/* Responsive Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap sm:flex-nowrap p-1 bg-gray-100 rounded-2xl gap-1 border border-gray-200 shadow-inner max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('focus')}
              className={`px-3.5 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'focus'
                  ? 'bg-farm-700 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              4 Core Focus Areas
            </button>
            <button
              onClick={() => setActiveTab('commitments')}
              className={`px-3.5 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'commitments'
                  ? 'bg-farm-700 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Farm Commitments
            </button>
            <button
              onClick={() => setActiveTab('values')}
              className={`px-3.5 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'values'
                  ? 'bg-farm-700 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              6 Core Values
            </button>
          </div>
        </div>

        {/* Tab 1: Core Focus Areas */}
        {activeTab === 'focus' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-fadeIn">
            {companyData.pillars.map((pillar) => {
              const icons = {
                TrendingUp: TrendingUp,
                Leaf: Leaf,
                ShieldCheck: ShieldCheck,
                HeartHandshake: HeartHandshake
              };
              const IconComponent = icons[pillar.icon] || TrendingUp;

              return (
                <div 
                  key={pillar.id}
                  className="bg-[#FCFBF7] p-5 sm:p-6 rounded-2xl border border-farm-200 hover:border-farm-400 hover:shadow-soft transition-all"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-farm-100 text-farm-800 flex items-center justify-center mb-3">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{pillar.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Commitments */}
        {activeTab === 'commitments' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fadeIn">
            {companyData.commitments.map((item, idx) => {
              const icons = {
                Heart: Heart,
                ShieldAlert: ShieldCheck,
                Sparkles: Sparkles,
                Droplets: Droplets,
                Cpu: Cpu
              };
              const IconComp = icons[item.icon] || Heart;

              return (
                <div 
                  key={idx}
                  className="bg-[#FCFBF7] p-5 sm:p-6 rounded-2xl border border-farm-200 hover:border-farm-400 hover:shadow-soft transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-farm-100 text-farm-700 flex items-center justify-center mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 3: Core Values */}
        {activeTab === 'values' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fadeIn">
            {companyData.values.map((val, idx) => {
              const icons = {
                CheckCircle2: CheckCircle2,
                Heart: Heart,
                ShieldCheck: ShieldCheck,
                RefreshCw: RefreshCw,
                Award: Award,
                Globe: Globe
              };
              const IconComp = icons[val.icon] || Award;

              return (
                <div 
                  key={idx}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-farm-100 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-farm-50 text-farm-700 flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-gray-900">{val.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{val.meaning}</p>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
