import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building, 
  ShieldCheck, 
  MessageSquare,
  Sparkles,
  HelpCircle,
  X
} from 'lucide-react';
import { companyData } from '../data/poultryData';

export default function ContactSection({ selectedQuoteData, clearSelectedQuote }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessType: 'Supermarket / Retail Chain',
    phone: '',
    email: '',
    emirate: 'Al Ain',
    productType: 'Fresh Whole Chickens',
    weightGrade: '1000g',
    volume: '250 Birds / Day',
    frequency: 'Daily Scheduled Delivery',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Sync quote data if received from calculator or product button
  useEffect(() => {
    if (selectedQuoteData) {
      setFormData(prev => ({
        ...prev,
        productType: selectedQuoteData.productType || prev.productType,
        weightGrade: selectedQuoteData.weightGrade || prev.weightGrade,
        volume: selectedQuoteData.quantity ? `${selectedQuoteData.quantity} Birds / Order` : prev.volume,
        frequency: selectedQuoteData.frequency || prev.frequency,
        emirate: selectedQuoteData.emirate || prev.emirate,
        notes: selectedQuoteData.estimatedTotal 
          ? `[Indicative Estimate: ~AED ${selectedQuoteData.estimatedTotal} based on ~AED ${selectedQuoteData.unitEstimate}/bird]` 
          : prev.notes
      }));
    }
  }, [selectedQuoteData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="scroll-mt-24 sm:scroll-mt-28 py-16 sm:py-20 bg-[#FAF8F2] border-b border-farm-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-farm-100 text-farm-800 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMERCIAL INQUIRY & CONTRACT SUPPLY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Order Fresh Poultry & Request Wholesale Terms
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Connect directly with our commercial sales and farm logistics team in Al Ain. 
            We provide customized supply contracts, scheduled cold-chain delivery, and competitive commercial pricing for UAE businesses.
          </p>
        </div>

        {/* Selected Quote Banner if present */}
        {selectedQuoteData && (
          <div className="mb-8 p-4 bg-amberGold-50 border border-amberGold-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amberGold-600 shrink-0" />
              <div className="text-xs text-amberGold-900">
                <strong>Configured Supply Request:</strong> {formData.productType} ({formData.weightGrade}) · {formData.volume} · Destination: {formData.emirate}
              </div>
            </div>
            {clearSelectedQuote && (
              <button 
                onClick={clearSelectedQuote}
                className="text-amberGold-800 hover:text-amberGold-950 text-xs font-bold underline self-end sm:self-auto"
              >
                Clear Preset
              </button>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact & Farm Info (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-farm-200 shadow-soft">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-farm-700 shrink-0" />
                <span>Aamir Al Wagan Poultry Farm L.L.C</span>
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-farm-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-gray-900">Farm Headquarters & Primary Hub</span>
                    <span className="text-gray-600">{companyData.location}</span>
                    <span className="text-[11px] text-farm-700 block mt-0.5 font-medium">
                      (25 Farm Locations across Al Ain: Al Wagan, Abu Samrah, Al Arad, Al Jazeera)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-farm-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-gray-900">Sales & Order Desk</span>
                    <a href={`tel:${companyData.phone}`} className="text-farm-700 font-bold hover:underline block">
                      {companyData.phone}
                    </a>
                    <a href={`tel:${companyData.mobile}`} className="text-gray-600 text-xs hover:underline block">
                      Mobile / WhatsApp: {companyData.mobile}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-farm-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-gray-900">Commercial Email</span>
                    <a href={`mailto:${companyData.salesEmail}`} className="text-farm-700 hover:underline block">
                      {companyData.salesEmail}
                    </a>
                    <a href={`mailto:${companyData.email}`} className="text-gray-500 text-xs hover:underline block">
                      {companyData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-farm-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-gray-900">Operating Schedule</span>
                    <span className="text-gray-600">{companyData.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="mt-6 pt-5 border-t border-gray-100">
                <a
                  href={`https://wa.me/971508291199?text=${encodeURIComponent("Hello Baraka Al Ain, I would like to inquire about fresh chicken wholesale supply.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3 px-4 rounded-xl shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Regulatory Assurance Callout */}
            <div className="bg-gradient-to-br from-farm-800 to-farm-900 text-white p-6 rounded-3xl shadow-sm border border-farm-700">
              <div className="flex items-center gap-2 text-amberGold-400 font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Documentation</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                ADAFSA NOC & ADDED Commercial Licence Available
              </h4>
              <p className="text-xs text-farm-200 leading-relaxed">
                Copies of our Abu Dhabi Agriculture and Food Safety Authority (ADAFSA) No Objection Certificate 
                and Commercial Trade Licence can be furnished upon request during vendor onboarding.
              </p>
            </div>

          </div>

          {/* Right Column: Inquiry / Request Quote Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-9 rounded-3xl border border-farm-200 shadow-soft">
              
              {submitted ? (
                <div className="py-10 sm:py-12 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mb-6">
                    Thank you for contacting <strong>Aamir Al Wagan Poultry Farm (Baraka Al Ain)</strong>. 
                    Our commercial sales executive will review your order requirements and contact you within 2-4 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-farm-700 text-white text-xs font-semibold hover:bg-farm-800"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-gray-100 pb-3 mb-4">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      Wholesale Supply & Order Inquiry Form
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Please provide your business requirements for an official quote and delivery schedule.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Tariq Mansoor"
                        className="w-full bg-[#FCFBF7] border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-farm-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Company / Entity Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Al Ain Gourmet Hypermarket"
                        className="w-full bg-[#FCFBF7] border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-farm-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone Number (UAE) *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 50 123 4567"
                        className="w-full bg-[#FCFBF7] border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-farm-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="buyer@company.ae"
                        className="w-full bg-[#FCFBF7] border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-farm-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Business Segment
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full bg-[#FCFBF7] border border-gray-200 rounded-xl px-3 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-farm-600"
                      >
                        <option>Supermarket / Retail Chain</option>
                        <option>Wholesale Food Distributor</option>
                        <option>Hotel & Restaurant (HORECA)</option>
                        <option>Catering & Institutional Kitchen</option>
                        <option>Butcher Shop</option>
                        <option>Individual / Bulk Household</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Delivery Emirate
                      </label>
                      <select
                        name="emirate"
                        value={formData.emirate}
                        onChange={handleChange}
                        className="w-full bg-[#FCFBF7] border border-gray-200 rounded-xl px-3 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-farm-600"
                      >
                        <option>Al Ain</option>
                        <option>Abu Dhabi City</option>
                        <option>Dubai</option>
                        <option>Sharjah</option>
                        <option>Ajman</option>
                        <option>Ras Al Khaimah</option>
                        <option>Fujairah</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Product Supply Range
                      </label>
                      <select
                        name="productType"
                        value={formData.productType}
                        onChange={handleChange}
                        className="w-full bg-[#FCFBF7] border border-gray-200 rounded-xl px-3 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-farm-600"
                      >
                        <option>Fresh Whole Chickens</option>
                        <option>Bulk Fresh Chicken Supply</option>
                        <option>Customised Chicken Supply</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Preferred Weight Grade
                      </label>
                      <select
                        name="weightGrade"
                        value={formData.weightGrade}
                        onChange={handleChange}
                        className="w-full bg-[#FCFBF7] border border-gray-200 rounded-xl px-3 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-farm-600"
                      >
                        <option value="800g">800g</option>
                        <option value="900g">900g</option>
                        <option value="1000g">1000g (Standard)</option>
                        <option value="1100g">1100g</option>
                        <option value="1200g">1200g</option>
                        <option value="1300g">1300g</option>
                        <option value="1400g+">1400g+</option>
                        <option value="Assorted / Mixed">Assorted / Mixed</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Estimated Order Volume
                      </label>
                      <input
                        type="text"
                        name="volume"
                        value={formData.volume}
                        onChange={handleChange}
                        placeholder="e.g. 500 birds / week or 500 kg"
                        className="w-full bg-[#FCFBF7] border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-farm-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Packaging & Special Handling Notes
                    </label>
                    <textarea
                      rows="3"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Specify tray-wrap, bulk food crates, vacuum packaging, preferred morning delivery time, etc."
                      className="w-full bg-[#FCFBF7] border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-farm-600"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-farm-700 hover:bg-farm-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 text-xs sm:text-sm"
                  >
                    {submitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-amberGold-400" />
                        <span>Submit Wholesale Supply Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] sm:text-[11px] text-center text-gray-500">
                    Direct inquiries handled by Aamir Al Wagan commercial sales executive. No spam guaranteed.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
