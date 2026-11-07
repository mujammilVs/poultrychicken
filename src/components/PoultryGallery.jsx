import React from 'react';
import { 
  Sparkles, 
  Feather, 
  ShieldCheck, 
  ThermometerSnowflake, 
  CheckCircle2, 
  Truck, 
  Camera, 
  Layers 
} from 'lucide-react';
import { companyData } from '../data/poultryData';
import SafeImage from './SafeImage';

export default function PoultryGallery() {
  const galleryItems = companyData.gallery || [
    {
      title: "Healthy White Broiler Flocks",
      category: "Al Wagan Sheds",
      image: "https://images.unsplash.com/photo-1569288063643-5d29ad64df09?auto=format&fit=crop&w=900&q=80",
      description: "Active, healthy white broiler chickens reared in climate-controlled, stress-free sheds in Al Ain."
    },
    {
      title: "White Broiler Shed Environment",
      category: "100 Modern Sheds",
      image: "https://images.unsplash.com/photo-1786119445014-6a0cedbdfd69?auto=format&fit=crop&w=900&q=80",
      description: "Bio-secure, spacious sheds designed for healthy white broiler welfare and growth."
    },
    {
      title: "Prime White Broiler Showcase",
      category: "Flagship Broilers",
      image: "/images/white-broiler-chicken.png",
      description: "Uniform, healthy white broilers bred for tenderness, natural nutrition, and optimal meat yield."
    },
    {
      title: "Pure White Broiler Health",
      category: "Daily Care",
      image: "https://images.unsplash.com/photo-1780105200761-6511f3a2ee3a?auto=format&fit=crop&w=900&q=80",
      description: "Balanced vegetarian corn and soy nutrition, free from animal by-products and artificial hormones."
    },
    {
      title: "White Broiler Vitality",
      category: "Al Ain Farms",
      image: "https://images.unsplash.com/photo-1770993158197-bfe844a3885d?auto=format&fit=crop&w=900&q=80",
      description: "Monitored round the clock under ADAFSA regulations and avian veterinary supervision."
    },
    {
      title: "White Broiler Flock Management",
      category: "25 Farm Hubs",
      image: "https://images.unsplash.com/photo-1788860175608-eb26d18f437c?auto=format&fit=crop&w=900&q=80",
      description: "Clean, humane desert farming providing fresh white broiler chicken across the UAE."
    }
  ];

  return (
    <section id="gallery" className="scroll-mt-24 sm:scroll-mt-28 py-16 sm:py-20 bg-gradient-to-b from-[#F7FBF8] to-white border-b border-farm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-farm-100 text-farm-800 text-xs font-semibold mb-3 border border-farm-200">
              <Camera className="w-3.5 h-3.5 text-farm-700" />
              <span>LIVE POULTRY OPERATIONS & FARM GALLERY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Inside Our Al Ain Poultry Farms & Operations
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              Explore authentic glimpses into our bio-secure sheds, healthy white broiler flocks, in-house feed milling, 
              and state-of-the-art Halal processing facility in Al Wagan, Al Ain.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-farm-200 shadow-sm self-start md:self-auto">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-farm-800 text-amberGold-400 flex items-center justify-center font-bold text-sm">
              <Feather className="w-5 h-5 text-amberGold-400" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-gray-900">100% Broiler Poultry</div>
              <div className="text-[11px] text-farm-600 font-medium">Zero other livestock · Pure focus</div>
            </div>
          </div>
        </div>

        {/* 6 High-Impact Poultry Gallery Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-12">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-farm-200/90 shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo frame */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-farm-50">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    fallbackIcon={Feather}
                  />
                  <div className="absolute top-3 left-3 bg-farm-900/85 backdrop-blur-md text-amberGold-400 text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full border border-farm-700/60 shadow-sm">
                    {item.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-farm-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs border border-farm-200">
                    ADAFSA Standard
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-farm-800 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom tag strip */}
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <div className="pt-3 border-t border-farm-100 flex items-center justify-between text-[11px] text-farm-700 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Bio-Secure Standard
                  </span>
                  <span className="text-gray-400">Al Ain, UAE</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner: 100% Dedicated to Fresh UAE Poultry */}
        <div className="bg-gradient-to-r from-farm-900 via-farm-800 to-farm-900 text-white p-6 sm:p-8 rounded-3xl border border-farm-700 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-amberGold-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Dedicated UAE Poultry Farming Excellence</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              Purely Focused on Fresh White Broiler Chickens
            </h3>
            <p className="text-xs sm:text-sm text-farm-200 leading-relaxed">
              Every facility, every vehicle, and every team member across our 25 Al Ain locations is committed to one 
              single mission: supplying UAE with the freshest, healthiest, and highest-grade white broiler poultry. 
              No distractions, no other livestock — 100% specialized poultry expertise.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap gap-2.5 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 bg-farm-800/90 text-amberGold-400 px-3.5 py-2 rounded-xl text-xs font-semibold border border-farm-700">
              <ShieldCheck className="w-4 h-4" />
              <span>ADAFSA Approved NOC</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-farm-800/90 text-amberGold-400 px-3.5 py-2 rounded-xl text-xs font-semibold border border-farm-700">
              <ThermometerSnowflake className="w-4 h-4" />
              <span>Chilled 0°C - 4°C Daily</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
