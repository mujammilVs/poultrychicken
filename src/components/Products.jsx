import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Check, 
  Users, 
  Sparkles, 
  Truck, 
  ThermometerSnowflake, 
  Package, 
  Clock, 
  FileCheck2,
  ArrowRight,
  Feather
} from 'lucide-react';
import { companyData } from '../data/poultryData';
import QuoteCalculator from './QuoteCalculator';
import SafeImage from './SafeImage';

export default function Products({ onOpenQuote, onSelectQuoteFromCalc }) {
  const [selectedProduct, setSelectedProduct] = useState(companyData.products[0].id);

  return (
    <section id="products" className="scroll-mt-24 sm:scroll-mt-28 py-16 sm:py-20 bg-[#FAF8F2] border-b border-farm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-farm-100 text-farm-800 text-xs font-semibold mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>PRODUCTS & SUPPLY ARRANGEMENTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Core Fresh Poultry Supply Range
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            We specialise in the supply of dependable fresh chicken to meet the rigorous demands of commercial, 
            retail, and food-service customers across the UAE. Handled with meticulous care, hygiene, and freshness.
          </p>
        </div>

        {/* 3 Main Product Range Cards with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {companyData.products.map((prod) => (
            <div 
              key={prod.id}
              className={`rounded-3xl overflow-hidden transition-all flex flex-col justify-between ${
                selectedProduct === prod.id
                  ? 'bg-white border-2 border-farm-600 shadow-premium'
                  : 'bg-white/90 border border-farm-200 hover:border-farm-400 hover:shadow-soft'
              }`}
            >
              <div>
                {/* Product Image Banner */}
                <div className="h-44 sm:h-48 w-full relative overflow-hidden bg-farm-100">
                  <SafeImage
                    src={prod.image}
                    alt={prod.name}
                    className={`w-full h-full transform hover:scale-105 transition-transform duration-500 ${
                      prod.image.includes('white-broiler') ? 'object-contain p-3 bg-gradient-to-b from-white to-[#F5FAF6]' : 'object-cover'
                    }`}
                    fallbackIcon={Feather}
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-farm-900 border border-farm-200 shadow-xs">
                    {prod.badge}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-farm-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-semibold text-amberGold-300">
                    Min: {prod.minOrder}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{prod.name}</h3>
                  <p className="text-xs text-farm-700 font-semibold mb-3">{prod.tagline}</p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                    {prod.description}
                  </p>

                  {/* Customer Segment Tags */}
                  <div className="mb-5">
                    <span className="text-[10px] sm:text-[11px] font-bold text-gray-700 uppercase tracking-wider block mb-2">
                      Primary Customer Segments:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prod.segments.map((seg, i) => (
                        <span 
                          key={i} 
                          className="text-[11px] bg-farm-50 text-farm-800 px-2 py-0.5 rounded-md border border-farm-100 font-medium"
                        >
                          {seg}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-2 mb-6">
                    {prod.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => {
                    setSelectedProduct(prod.id);
                    onOpenQuote(prod.name);
                  }}
                  className={`w-full py-3 rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all ${
                    selectedProduct === prod.id
                      ? 'bg-farm-700 hover:bg-farm-800 text-white shadow'
                      : 'bg-farm-50 hover:bg-farm-100 text-farm-800 border border-farm-200'
                  }`}
                >
                  <span>Request Supply Terms</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quality, Handling & Specifications Table with responsive horizontal scroll */}
        <div className="bg-white rounded-3xl p-5 sm:p-8 border border-farm-200 shadow-soft mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Fresh Chicken Specifications & Handling Standards
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Adhering to strict Abu Dhabi Agriculture and Food Safety Authority (ADAFSA) standards.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-semibold border border-blue-200">
                <ThermometerSnowflake className="w-3.5 h-3.5" /> Chilled 0°C to 4°C
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] sm:text-xs font-semibold border border-emerald-200">
                <FileCheck2 className="w-3.5 h-3.5" /> 100% Halal Certified
              </span>
            </div>
          </div>

          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <table className="w-full text-left text-xs sm:text-sm min-w-[580px]">
              <thead>
                <tr className="bg-farm-50/80 text-farm-900 border-b border-farm-100">
                  <th className="py-3 px-4 font-bold rounded-l-xl">Specification Parameter</th>
                  <th className="py-3 px-4 font-bold">Standard Grade Specification</th>
                  <th className="py-3 px-4 font-bold rounded-r-xl">Customer Assurance / Protocol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">Available Weight Sizes</td>
                  <td className="py-3.5 px-4">800g, 900g, 1000g, 1100g, 1200g, 1300g, 1400g+</td>
                  <td className="py-3.5 px-4 text-gray-600">Strictly calibrated, zero underweight variance</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">Slaughter Protocol</td>
                  <td className="py-3.5 px-4">In-house slaughterhouse (4,000 birds/hr)</td>
                  <td className="py-3.5 px-4 text-gray-600">Manual Islamic Halal cut, thorough bleed, no stunning chemicals</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">Temperature Control</td>
                  <td className="py-3.5 px-4">Chilled at 0°C to +4°C (Never frozen)</td>
                  <td className="py-3.5 px-4 text-gray-600">Continuous digital thermal logging from line to client delivery</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">Packaging Options</td>
                  <td className="py-3.5 px-4">Hygienic tray wrap, food-grade crates, or MAP</td>
                  <td className="py-3.5 px-4 text-gray-600">Leak-resistant, clear branding or white-label options</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">Shelf Life & Freshness</td>
                  <td className="py-3.5 px-4">Up to 7 days from slaughter under 0°C - 4°C</td>
                  <td className="py-3.5 px-4 text-gray-600">Fresh daily dispatch within hours of morning processing</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">Flock Origin & Diet</td>
                  <td className="py-3.5 px-4">Al Wagan & Al Ain farms, 10,000t in-house feed</td>
                  <td className="py-3.5 px-4 text-gray-600">100% vegetarian grain diet, zero antibiotic growth promoters</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive B2B Order / Quote Calculator */}
        <QuoteCalculator onSelectQuote={onSelectQuoteFromCalc} />

      </div>
    </section>
  );
}
