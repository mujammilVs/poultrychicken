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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-farm-100 text-farm-900 text-xs font-bold uppercase tracking-wider mb-3 border border-farm-200">
              <Feather className="w-3.5 h-3.5 text-farm-700" />
              <span>100% FRESH UAE BROILER POULTRY FARM</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-5 sm:mb-6">
              Fresh UAE <span className="text-farm-700 underline decoration-amberGold-400 decoration-wavy decoration-2">Broiler Chicken</span>.<br />
              Direct From <span className="text-farm-800">Our Al Ain Farms</span>.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed mb-6 sm:mb-7 max-w-2xl mx-auto lg:mx-0">
              UAE’s dedicated broiler poultry producer operating <strong>100 modern bio-secure sheds</strong> across <strong>25 farm locations in Al Wagan, Al Ain</strong>. 
              Supplying fresh chilled Halal whole chickens, bulk commercial cuts, and custom portioning under strict <strong>ADAFSA & ADDED standards</strong>.
            </p>

            {/* Responsive Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
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
                <span>Explore Fresh Poultry Cuts</span>
              </a>
            </div>

            {/* Quick Poultry Specs Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 max-w-2xl mx-auto lg:mx-0 text-left">
              <div className="bg-white/90 p-2.5 rounded-xl border border-farm-100 shadow-xs">
                <span className="text-[10px] text-gray-500 block uppercase font-bold">Breed</span>
                <span className="text-xs font-bold text-farm-900">White Broiler</span>
              </div>
              <div className="bg-white/90 p-2.5 rounded-xl border border-farm-100 shadow-xs">
                <span className="text-[10px] text-gray-500 block uppercase font-bold">Grades</span>
                <span className="text-xs font-bold text-farm-900">800g – 1400g+</span>
              </div>
              <div className="bg-white/90 p-2.5 rounded-xl border border-farm-100 shadow-xs">
                <span className="text-[10px] text-gray-500 block uppercase font-bold">Nutrition</span>
                <span className="text-xs font-bold text-farm-900">100% Veg Grain</span>
              </div>
              <div className="bg-white/90 p-2.5 rounded-xl border border-farm-100 shadow-xs">
                <span className="text-[10px] text-gray-500 block uppercase font-bold">Cold Chain</span>
                <span className="text-xs font-bold text-emerald-700">0°C – 4°C Daily</span>
              </div>
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
              
              {/* White Broiler Chicken & Modern Shed Showcase Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-white to-[#F5FAF6] p-4 sm:p-6 border-2 border-farm-200/80 shadow-2xl overflow-hidden">
                
                {/* Background Poultry Shed Visual */}
                <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden mb-3 border border-farm-100 shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80"
                    alt="Al Wagan Modern Broiler Sheds"
                    className="w-full h-full object-cover filter brightness-[0.92]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-farm-950/80 via-farm-950/20 to-transparent flex items-end p-3">
                    <span className="text-[11px] text-amberGold-300 font-bold tracking-wide">
                      📍 Al Wagan Bio-Secure Broiler Sheds
                    </span>
                  </div>
                </div>

                {/* White Broiler Chicken Cutout Overlay */}
                <div className="relative -mt-20 sm:-mt-24 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-56 h-56 rounded-full bg-amberGold-200/30 blur-2xl"></div>
                  </div>
                  <img
                    src="/images/white-broiler-chicken.png"
                    alt="Premium White Broiler Chicken — Aamir Al Wagan Poultry Farm"
                    className="relative z-10 w-48 h-48 sm:w-60 sm:h-60 object-contain chicken-glow transform hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                {/* Floating Stat Badge 1: 2M Birds */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-farm-200 flex items-center gap-2.5 z-20">
                  <div className="w-7 h-7 rounded-lg bg-farm-100 text-farm-700 flex items-center justify-center shrink-0">
                    <Feather className="w-4 h-4 text-farm-700" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-farm-900 leading-none">2M+ Birds</div>
                    <div className="text-[9px] text-gray-500 font-medium">100 Poultry Sheds</div>
                  </div>
                </div>

                {/* Halal Badge */}
                <div className="absolute top-6 right-6 bg-amberGold-400 text-farm-950 px-3 py-1 rounded-full text-[10px] font-black shadow-md z-20 tracking-wider">
                  ✓ 100% HALAL
                </div>

                {/* Bottom Spec Footer inside Card */}
                <div className="relative z-20 mt-1 pt-3 border-t border-farm-200/70 flex items-center justify-between text-xs text-farm-800">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Truck className="w-4 h-4 text-farm-700" />
                    <span>0°C - 4°C Daily Chilled Fleet</span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[10px] font-bold">
                    ADAFSA Verified
                  </span>
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
