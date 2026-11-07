import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  Package, 
  Truck, 
  ArrowRight, 
  Info, 
  Layers, 
  Calendar 
} from 'lucide-react';

export default function QuoteCalculator({ onSelectQuote }) {
  const [productType, setProductType] = useState('whole'); // 'whole' | 'bulk' | 'custom'
  const [weightGrade, setWeightGrade] = useState('1000g');
  const [quantity, setQuantity] = useState(250);
  const [frequency, setFrequency] = useState('daily');
  const [packaging, setPackaging] = useState('tray-wrap');
  const [emirate, setEmirate] = useState('Al Ain');

  // Realistic UAE wholesale poultry pricing benchmark (AED per bird indicative)
  const baseRatePerBird = {
    '800g': 10.5,
    '900g': 11.5,
    '1000g': 12.5,
    '1100g': 13.5,
    '1200g': 14.5,
    '1300g': 15.5,
    '1400g+': 16.5,
  };

  const getMultiplier = () => {
    if (productType === 'bulk') return 0.92; // 8% bulk discount for high volume
    if (productType === 'custom') return 1.05; // 5% custom cutting & MAP packaging
    return 1.0;
  };

  const unitEstimate = (baseRatePerBird[weightGrade] || 12.5) * getMultiplier();
  const estimatedTotal = (quantity * unitEstimate).toFixed(2);

  const handleApplyToInquiry = () => {
    const summary = {
      productType: productType === 'whole' ? 'Fresh Whole Chickens' : productType === 'bulk' ? 'Bulk Fresh Chicken Supply' : 'Customised Chicken Supply',
      weightGrade,
      quantity,
      frequency,
      packaging,
      emirate,
      unitEstimate: unitEstimate.toFixed(2),
      estimatedTotal
    };
    if (onSelectQuote) {
      onSelectQuote(summary);
    }
  };

  return (
    <div className="bg-gradient-to-br from-farm-900 via-farm-800 to-farm-950 text-white rounded-3xl p-5 sm:p-8 lg:p-10 shadow-premium border border-farm-700">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-farm-700/80">
        <div>
          <div className="inline-flex items-center gap-2 text-amberGold-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive Wholesale Estimator</span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            Instant Commercial B2B Order Estimator
          </h3>
          <p className="text-xs sm:text-sm text-farm-200 mt-1">
            Configure order requirements for supermarkets, catering, and food distribution.
          </p>
        </div>
        <div className="shrink-0 bg-farm-800/80 px-3.5 py-2 rounded-xl border border-farm-600 self-start sm:self-auto text-left sm:text-center">
          <span className="text-[10px] sm:text-[11px] text-farm-300 block">Cold-Chain Delivery</span>
          <span className="text-xs font-bold text-amberGold-400">Direct From Al Ain</span>
        </div>
      </div>

      {/* Main Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-6">
        
        {/* 1. Product Type */}
        <div>
          <label className="block text-xs font-semibold text-farm-200 mb-2">
            1. Select Poultry Supply Type
          </label>
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setProductType('whole')}
              className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                productType === 'whole'
                  ? 'bg-amberGold-500 text-farm-950 border-amberGold-400 shadow font-bold'
                  : 'bg-farm-800/60 text-farm-200 border-farm-700 hover:bg-farm-800'
              }`}
            >
              Fresh Whole
            </button>
            <button
              type="button"
              onClick={() => setProductType('bulk')}
              className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                productType === 'bulk'
                  ? 'bg-amberGold-500 text-farm-950 border-amberGold-400 shadow font-bold'
                  : 'bg-farm-800/60 text-farm-200 border-farm-700 hover:bg-farm-800'
              }`}
            >
              Bulk Supply
            </button>
            <button
              type="button"
              onClick={() => setProductType('custom')}
              className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                productType === 'custom'
                  ? 'bg-amberGold-500 text-farm-950 border-amberGold-400 shadow font-bold'
                  : 'bg-farm-800/60 text-farm-200 border-farm-700 hover:bg-farm-800'
              }`}
            >
              Customized
            </button>
          </div>
          <p className="text-[11px] text-farm-300 mt-2">
            {productType === 'whole' && 'Hygienic tray-wrap or crate packed for retail & markets.'}
            {productType === 'bulk' && 'High-volume scheduled contract supply with tiered volume savings.'}
            {productType === 'custom' && 'Portioned cuts, specific calibrated weights & custom labelling.'}
          </p>
        </div>

        {/* 2. Weight Grade */}
        <div>
          <label className="block text-xs font-semibold text-farm-200 mb-2">
            2. Calibrated Weight Grade
          </label>
          <select
            value={weightGrade}
            onChange={(e) => setWeightGrade(e.target.value)}
            className="w-full bg-farm-800 border border-farm-600 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amberGold-400"
          >
            <option value="800g">800g - Small / Individual Roaster</option>
            <option value="900g">900g - Standard Rotisserie Cut</option>
            <option value="1000g">1000g - Standard Medium Retail</option>
            <option value="1100g">1100g - Popular Commercial Grade</option>
            <option value="1200g">1200g - Large Table Bird</option>
            <option value="1300g">1300g - Premium Jumbo Broiler</option>
            <option value="1400g+">1400g+ - Extra Heavy Broiler</option>
          </select>
          <span className="text-[11px] text-farm-400 mt-1.5 block">
            ADAFSA compliant weight calibration with zero dehydration loss.
          </span>
        </div>

        {/* 3. Delivery Destination in UAE */}
        <div>
          <label className="block text-xs font-semibold text-farm-200 mb-2">
            3. Delivery Hub / Emirate
          </label>
          <select
            value={emirate}
            onChange={(e) => setEmirate(e.target.value)}
            className="w-full bg-farm-800 border border-farm-600 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amberGold-400"
          >
            <option value="Al Ain">Al Ain (Local Farm Express)</option>
            <option value="Abu Dhabi City">Abu Dhabi City & Suburbs</option>
            <option value="Dubai">Dubai & JAFZA / Deira Market</option>
            <option value="Sharjah">Sharjah & Northern Distribution</option>
            <option value="Ajman">Ajman Commercial Hub</option>
            <option value="Ras Al Khaimah">Ras Al Khaimah</option>
            <option value="Fujairah">Fujairah & East Coast</option>
          </select>
          <span className="text-[11px] text-farm-400 mt-1.5 block">
            Cold-chain refrigerated trucks operating at 0°C to 4°C.
          </span>
        </div>

        {/* 4. Quantity Slider */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-semibold text-farm-200">
              4. Order Volume Per Dispatch (Birds / Units)
            </label>
            <span className="text-xs sm:text-sm font-bold text-amberGold-400 bg-farm-800 px-3 py-1 rounded-lg border border-farm-600">
              {quantity} Birds / Order
            </span>
          </div>
          <input
            type="range"
            min="50"
            max="3000"
            step="50"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full accent-amberGold-500 h-2 bg-farm-700 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-farm-400 mt-1">
            <span>50 birds</span>
            <span>500 birds (HORECA)</span>
            <span>1,500 (Supermarket)</span>
            <span>3,000+ (Distributor)</span>
          </div>
        </div>

        {/* 5. Frequency */}
        <div>
          <label className="block text-xs font-semibold text-farm-200 mb-2">
            5. Supply Frequency
          </label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full bg-farm-800 border border-farm-600 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amberGold-400"
          >
            <option value="daily">Daily Scheduled Supply (Fresh Slaughter)</option>
            <option value="3x-weekly">3x per Week (Mon / Wed / Sat)</option>
            <option value="weekly">Weekly Bulk Delivery</option>
            <option value="one-off">One-Time Trial Order</option>
          </select>
        </div>

      </div>

      {/* Summary Box & CTA */}
      <div className="mt-8 pt-6 border-t border-farm-700/80 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 bg-farm-950/60 p-4 sm:p-6 rounded-2xl">
        <div>
          <div className="text-[10px] sm:text-[11px] text-farm-300 uppercase tracking-wider font-semibold">
            Indicative Estimate Summary
          </div>
          <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mt-1">
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amberGold-400">
              ~ AED {estimatedTotal}
            </span>
            <span className="text-xs text-farm-300">
              (@ AED {unitEstimate.toFixed(2)} / bird estimated)
            </span>
          </div>
          <p className="text-[10px] sm:text-[11px] text-farm-400 mt-1">
            *Final contract pricing is confirmed based on custom cuts, volume commitments, and delivery schedule.
          </p>
        </div>

        <button
          type="button"
          onClick={handleApplyToInquiry}
          className="inline-flex items-center justify-center gap-2 bg-amberGold-500 hover:bg-amberGold-400 text-farm-950 font-bold px-5 sm:px-6 py-3.5 rounded-xl shadow-lg transition-all active:scale-95 text-xs sm:text-sm"
        >
          <span>Apply to Inquiry & Request Official Quote</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </button>
      </div>

    </div>
  );
}
