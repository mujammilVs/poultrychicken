import React from 'react';
import { 
  Users, 
  Briefcase, 
  ShieldCheck, 
  Stethoscope, 
  Calculator, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { companyData } from '../data/poultryData';

export default function TeamSection() {
  const iconMap = {
    Briefcase: Briefcase,
    ShieldCheck: ShieldCheck,
    Stethoscope: Stethoscope,
    Calculator: Calculator,
    Users: Users
  };

  return (
    <section className="py-20 bg-[#FAF8F2] border-b border-farm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-farm-100 text-farm-800 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>LEADERSHIP & OPERATIONS GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Experienced People Driving Farm Excellence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Aamir Al Wagan Poultry Farm L.L.C is backed by an experienced operational, veterinary, 
            and commercial leadership team committed to continuous oversight, animal health, and dependable customer partnerships.
          </p>
        </div>

        {/* 5 Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.team.map((member, idx) => {
            const IconComp = iconMap[member.icon] || Users;

            return (
              <div 
                key={idx}
                className="bg-white p-7 rounded-3xl border border-farm-200/80 shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-farm-50 text-farm-700 flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-farm-700 uppercase tracking-wider bg-farm-100/60 px-2.5 py-1 rounded-full">
                      Key Function
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{member.role}</h3>
                  <div className="text-xs font-semibold text-farm-700 mb-2">Core Responsibility:</div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {member.responsibility}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Aamir Al Wagan Team</span>
                  <span className="font-semibold text-farm-800">Al Ain, UAE</span>
                </div>
              </div>
            );
          })}

          {/* Quick Connect Card */}
          <div className="bg-gradient-to-br from-farm-800 to-farm-900 text-white p-7 rounded-3xl shadow-premium flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-farm-700 text-amberGold-400 flex items-center justify-center mb-4">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Direct Commercial Desk</h3>
              <p className="text-xs text-farm-200 leading-relaxed mb-4">
                Speak directly with our Sales Executive or Farm Manager for long-term contract inquiries, custom slaughterhouse specs, or scheduled delivery slots.
              </p>
            </div>

            <div className="space-y-1.5 pt-4 border-t border-farm-700 text-xs">
              <div className="text-farm-300">Direct Farm Line:</div>
              <div className="text-sm font-bold text-amberGold-400">{companyData.phone}</div>
              <div className="text-[11px] text-farm-300">{companyData.workingHours}</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
