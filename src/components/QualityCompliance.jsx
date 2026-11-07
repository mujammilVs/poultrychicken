import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  FileCheck, 
  CheckCircle2, 
  Scale, 
  Heart, 
  Leaf, 
  Lock, 
  Microscope,
  FileText
} from 'lucide-react';
import { companyData } from '../data/poultryData';

export default function QualityCompliance() {
  return (
    <section id="compliance" className="scroll-mt-24 sm:scroll-mt-28 py-16 sm:py-20 bg-[#FAF8F2] border-b border-farm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-farm-100 text-farm-800 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>REGULATORY STANDING & FOOD SAFETY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Strict Compliance, Unwavering Quality Assurance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Aamir Al Wagan Poultry Farm L.L.C conducts its commercial business and poultry farming operations 
            in full compliance with applicable UAE laws, federal food safety mandates, and animal welfare standards.
          </p>
        </div>

        {/* Dual Official Licences Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* License 1: ADDED */}
          <div className="bg-white rounded-3xl p-8 border border-farm-200 shadow-soft relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amberGold-100/30 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-amberGold-50 text-amberGold-700 flex items-center justify-center font-black text-xl border border-amberGold-200">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amberGold-700 uppercase tracking-wider block">
                  Commercial Authority
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Abu Dhabi Department of Economic Development (ADDED)
                </h3>
              </div>
            </div>

            <div className="bg-amberGold-50/60 p-4 rounded-xl border border-amberGold-100 mb-4">
              <div className="text-xs font-bold text-amberGold-900">
                Document: Commercial Trade Licence
              </div>
              <p className="text-xs text-amberGold-800 mt-1">
                Authorizes commercial poultry trading, livestock management, and wholesale supply throughout Abu Dhabi and the UAE.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fully verified commercial legal standing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Registered commercial entity: Aamir Al Wagan Poultry Farm L.L.C</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Authorized for integrated commercial supply & distribution</span>
              </li>
            </ul>
          </div>

          {/* License 2: ADAFSA */}
          <div className="bg-white rounded-3xl p-8 border border-farm-200 shadow-soft relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-farm-100/40 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-farm-100 text-farm-800 flex items-center justify-center font-black text-xl border border-farm-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-farm-700 uppercase tracking-wider block">
                  Food Safety & Agriculture Authority
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Abu Dhabi Agriculture and Food Safety Authority (ADAFSA)
                </h3>
              </div>
            </div>

            <div className="bg-farm-50 p-4 rounded-xl border border-farm-100 mb-4">
              <div className="text-xs font-bold text-farm-900">
                Document: No Objection Certificate (NOC)
              </div>
              <p className="text-xs text-farm-800 mt-1">
                Validates high-level biosecurity compliance, hygienic slaughterhouse operations, flock welfare, and food safety standards.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Routine agricultural audits & hygiene inspections</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certified flock health surveillance and disease prevention</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Compliant water quality and farm sanitation standards</span>
              </li>
            </ul>
          </div>

        </div>

        {/* HSE & Quality Assurance 3-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-farm-200">
            <div className="w-10 h-10 rounded-xl bg-farm-50 text-farm-700 flex items-center justify-center mb-4">
              <Microscope className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2">
              Routine Checks & Laboratory Testing
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Continuous monitoring of flock biological indicators, feed nutritional parameters, water purity tests, 
              and pathogen swabs before packaging and dispatch.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-farm-200">
            <div className="w-10 h-10 rounded-xl bg-farm-50 text-farm-700 flex items-center justify-center mb-4">
              <Leaf className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2">
              Health, Safety & Environment (HSE)
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Safe working conditions for staff, responsible chemical usage, integrated pest management, and 
              responsible biological waste disposal preserving the local environment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-farm-200">
            <div className="w-10 h-10 rounded-xl bg-farm-50 text-farm-700 flex items-center justify-center mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2">
              Multi-Layered Biosecurity Gates
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Restricted site access, automated vehicle disinfection spray baths, staff sanitation airlocks, 
              and physical quarantine barriers safeguarding all 100 sheds.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
