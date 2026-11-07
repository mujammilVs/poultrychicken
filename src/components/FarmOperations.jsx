import React, { useState } from 'react';
import { 
  GitCommit, 
  Calendar, 
  ShoppingBag, 
  Activity, 
  ShieldAlert, 
  CheckCircle, 
  Truck, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { companyData } from '../data/poultryData';

export default function FarmOperations() {
  const [activeStep, setActiveStep] = useState(1);

  const icons = {
    Calendar: Calendar,
    ShoppingBag: ShoppingBag,
    Activity: Activity,
    ShieldAlert: ShieldAlert,
    CheckCircle: CheckCircle,
    Truck: Truck
  };

  const currentStage = companyData.processStages.find(s => s.step === activeStep) || companyData.processStages[0];

  return (
    <section id="operations" className="scroll-mt-24 sm:scroll-mt-28 py-16 sm:py-20 bg-white border-b border-farm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-farm-100 text-farm-800 text-xs font-semibold mb-3">
            <GitCommit className="w-3.5 h-3.5" />
            <span>RIGOROUS OPERATIONAL PROCESS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            6-Stage Precision Farm Management & Supply Chain
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Our operations are methodically coordinated across all 25 farm locations and 100 poultry sheds in Al Ain. 
            From initial flock planning to cold-chain delivery, each phase maintains uncompromising biosecurity, 
            hygiene, and veterinary oversight.
          </p>
        </div>

        {/* 6 Step Responsive Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8 sm:mb-10">
          {companyData.processStages.map((stage) => {
            const IconComp = icons[stage.icon] || Activity;
            const isActive = activeStep === stage.step;

            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStep(stage.step)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all border ${
                  isActive 
                    ? 'bg-farm-800 text-white border-farm-700 shadow-md ring-2 ring-farm-600/30' 
                    : 'bg-[#FCFBF7] text-gray-700 border-farm-200/80 hover:bg-farm-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-amberGold-400 text-farm-950' : 'bg-farm-100 text-farm-800'
                  }`}>
                    Stage {stage.step}
                  </span>
                  <IconComp className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-amberGold-300' : 'text-farm-600'}`} />
                </div>
                <h4 className="text-xs sm:text-sm font-bold tracking-tight line-clamp-1">{stage.title}</h4>
                <p className={`text-[10px] sm:text-[11px] mt-1 line-clamp-2 ${isActive ? 'text-farm-200' : 'text-gray-500'}`}>
                  {stage.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="bg-gradient-to-r from-farm-50 via-[#FAF8F2] to-white p-6 sm:p-8 rounded-3xl border border-farm-200 shadow-soft">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-farm-700 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amberGold-500" />
                <span>Stage {currentStage.step} of 6 Protocol Details</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                {currentStage.step}. {currentStage.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                {currentStage.desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs text-gray-600 pt-3 border-t border-farm-200/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Audited under ADAFSA regulations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Supervised by Avian Veterinarians</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Flock biometrics record keeping</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Biosecurity barrier sanitation</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center justify-center bg-white p-5 sm:p-6 rounded-2xl border border-farm-200 text-center min-w-[200px] sm:min-w-[240px]">
              <span className="text-[11px] text-gray-500 font-medium">Standard Operating Cycle</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-farm-800 my-1">24 / 7</span>
              <span className="text-[11px] sm:text-xs font-semibold text-amberGold-700 bg-amberGold-50 px-3 py-1 rounded-full border border-amberGold-200">
                Coordinated Across 25 Hubs
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
