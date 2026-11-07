import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Truck, 
  Wheat, 
  Feather, 
  Home, 
  Zap, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { companyData } from '../data/poultryData';
import SafeImage from './SafeImage';

export default function Hero({ onOpenQuote }) {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#f5f9f5] via-[#faf8f2] to-[#FCFBF7]">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-farm-200/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-amberGold-100/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Regulatory & Brand Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-farm-100/90 text-farm-900 text-[11px] sm:text-xs font-semibold border border-farm-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>AAMIR AL WAGAN POULTRY FARM L.L.C</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amberGold-50 text-amberGold-800 text-[11px] sm:text-xs font-semibold border border-amberGold-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amberGold-600" />
            <span>Trading as Baraka Al Ain · بركة العين</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-gray-700 text-[11px] sm:text-xs font-medium border border-gray-200 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-farm-600" />
            <span>Al Wagan, Al Ain, UAE</span>
          </div>
        </div>

        {/* 2-Column Responsive Layout: Headline & Content (Left) + Visual Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Left Column: Headlines & CTA (7 cols on desktop) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-farm-700 uppercase mb-3">
              {companyData.tagline}
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-5 sm:mb-6">
              Freshness You <span className="text-farm-700 underline decoration-amberGold-400 decoration-wavy decoration-2">Trust</span>.<br />
              Quality You <span className="text-farm-800">Deserve</span>.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Integrated modern poultry farming and trading operating <strong>100 bio-secure sheds</strong> across <strong>25 farm locations in Al Ain</strong>. 
              Supplying UAE supermarkets, wholesalers, and restaurants with wholesome, traceable fresh chicken under strict ADAFSA standards.
            </p>

            {/* Responsive Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 bg-farm-700 hover:bg-farm-800 text-white font-semibold px-6 sm:px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95"
              >
                <span>Request Wholesale Supply Quote</span>
                <ArrowRight className="w-4 h-4 text-amberGold-300" />
              </button>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-farm-50 text-farm-900 font-semibold px-5 sm:px-6 py-3.5 rounded-xl border border-farm-200 shadow-sm transition-all"
              >
                <span>Explore Fresh Cuts</span>
              </a>
            </div>

            {/* Regulatory Badges Strip */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 text-xs text-gray-600 bg-white/70 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-farm-100">
              <div className="flex items-center gap-1.5 font-medium text-farm-900">
                <ShieldCheck className="w-4 h-4 text-farm-600 shrink-0" />
                <span>ADAFSA Approved (NOC)</span>
              </div>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 font-medium text-amberGold-900">
                <Award className="w-4 h-4 text-amberGold-600 shrink-0" />
                <span>ADDED Commercial Licence</span>
              </div>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 font-medium text-emerald-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Halal Slaughter</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase (5 cols on desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="rounded-3xl overflow-hidden shadow-premium border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <SafeImage
                  src={companyData.images.hero}
                  alt="Aamir Al Wagan Modern Poultry Farm in Al Ain"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  fallbackIcon={Feather}
                />
              </div>

              {/* Floating Stat Badge 1: 2M Birds */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-lg border border-farm-100 flex items-center gap-3 animate-fadeIn">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-farm-100 text-farm-700 flex items-center justify-center shrink-0">
                  <Feather className="w-5 h-5 text-farm-700" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-extrabold text-farm-900 leading-tight">2 Million</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 font-medium">Birds Total Capacity</div>
                </div>
              </div>

              {/* Floating Stat Badge 2: Daily Cold-Chain Delivery */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-farm-900 text-white p-3 sm:p-4 rounded-2xl shadow-xl border border-farm-700 flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-farm-800 text-amberGold-400 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-amberGold-400 leading-tight">0°C - 4°C Fresh</div>
                  <div className="text-[10px] sm:text-xs text-farm-200">Daily UAE Cold Chain</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 5 Core Capacity Stats Bar (Fully Responsive Grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {/* Card 1: 25 Locations */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-farm-100 shadow-soft hover:shadow-md transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-farm-50 text-farm-700 flex items-center justify-center mb-2.5">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-farm-600" />
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-farm-900 tracking-tight">25</div>
            <div className="text-xs font-semibold text-gray-800 mt-0.5">Farm Locations</div>
            <p className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5 line-clamp-1">Across Al Ain region</p>
          </div>

          {/* Card 2: 100 Sheds */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-farm-100 shadow-soft hover:shadow-md transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-farm-50 text-farm-700 flex items-center justify-center mb-2.5">
              <Home className="w-4 h-4 sm:w-5 sm:h-5 text-farm-600" />
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-farm-900 tracking-tight">100</div>
            <div className="text-xs font-semibold text-gray-800 mt-0.5">Poultry Sheds</div>
            <p className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5 line-clamp-1">Bio-secure climate sheds</p>
          </div>

          {/* Card 3: 2M Birds */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-farm-100 shadow-soft hover:shadow-md transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amberGold-50 text-amberGold-700 flex items-center justify-center mb-2.5">
              <Feather className="w-4 h-4 sm:w-5 sm:h-5 text-amberGold-600" />
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-farm-900 tracking-tight">2M+</div>
            <div className="text-xs font-semibold text-gray-800 mt-0.5">Production Capacity</div>
            <p className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5 line-clamp-1">Broiler capacity in UAE</p>
          </div>

          {/* Card 4: 10,000 Tonnes Feed */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-farm-100 shadow-soft hover:shadow-md transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-farm-50 text-farm-700 flex items-center justify-center mb-2.5">
              <Wheat className="w-4 h-4 sm:w-5 sm:h-5 text-farm-600" />
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-farm-900 tracking-tight">10,000 t</div>
            <div className="text-xs font-semibold text-gray-800 mt-0.5">Feed Capacity / Yr</div>
            <p className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5 line-clamp-1">In-house balanced diet</p>
          </div>

          {/* Card 5: 4,000 / hr Processing */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 bg-gradient-to-br from-farm-800 to-farm-900 text-white p-4 sm:p-5 rounded-2xl shadow-premium hover:shadow-xl transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-farm-700/80 text-amberGold-400 flex items-center justify-center mb-2.5">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-amberGold-400 tracking-tight">4,000 / hr</div>
            <div className="text-xs font-semibold text-farm-100 mt-0.5">Slaughterhouse Speed</div>
            <p className="text-[10px] sm:text-[11px] text-farm-300 mt-0.5 line-clamp-1">Halal processing line</p>
          </div>
        </div>

      </div>
    </section>
  );
}
