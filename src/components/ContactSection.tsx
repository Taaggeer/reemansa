import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck, 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { OfficeMap } from './OfficeMap';

export const ContactSection: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: language === 'ar' ? 'معماري وإنشائي ورخص بلدي' : 'Architectural, Structural & Balady Permits',
    projectType: language === 'ar' ? 'سكني (فيلا / قصر / عمارة)' : 'Residential (Villa / Palace / Building)',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const text = encodeURIComponent(
      language === 'ar'
        ? `طلب استشارة هندسية جديد عبر موقع شركة ريمان:\n` +
          `• الاسم: ${formData.name}\n` +
          `• رقم الجوال: ${formData.phone}\n` +
          `• نوع الخدمة: ${formData.serviceType}\n` +
          `• نوع المشروع: ${formData.projectType}\n` +
          `• تفاصيل إضافية: ${formData.notes || 'لا يوجد'}`
        : `New engineering consultancy request via Reeman website:\n` +
          `• Name: ${formData.name}\n` +
          `• Mobile: ${formData.phone}\n` +
          `• Service: ${formData.serviceType}\n` +
          `• Project Type: ${formData.projectType}\n` +
          `• Notes: ${formData.notes || 'None'}`
    );

    // Open whatsapp with the filled data
    window.open(`https://wa.me/966559113990?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>{t('contact_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('contact_heading')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {t('contact_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`bg-slate-900 text-white rounded-3xl p-7 sm:p-8 shadow-xl relative overflow-hidden ${
              isRTL ? 'text-right' : 'text-left'
            }`}>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-xl font-bold mb-6 text-white border-b border-slate-800 pb-4">
                {t('contact_card_title')}
              </h3>

              <div className="space-y-6 text-sm">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-amber-400 border border-slate-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400 block font-medium">
                      {t('contact_address_label')}
                    </span>
                    <strong className="text-white text-sm sm:text-base font-semibold block leading-snug">
                      {t('contact_address_val')}
                    </strong>
                    <span className="text-xs text-slate-400 block">
                      {language === 'ar' ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}
                    </span>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-sky-400 border border-slate-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400 block font-medium">
                      {t('contact_phone_label')}
                    </span>
                    <a 
                      href="tel:0559113990"
                      className="text-white text-lg font-bold hover:text-amber-400 transition-colors block font-mono"
                      dir="ltr"
                    >
                      0559113990
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-emerald-400 border border-slate-700">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400 block font-medium">
                      {t('contact_wa_label')}
                    </span>
                    <a 
                      href="https://wa.me/966559113990"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 text-sm font-bold hover:underline block font-mono"
                      dir="ltr"
                    >
                      +966 55 911 3990
                    </a>
                    <span className="text-[11px] text-slate-400 block">
                      {t('contact_wa_sub')}
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-indigo-400 border border-slate-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400 block font-medium">
                      {t('contact_hours_label')}
                    </span>
                    <span className="text-white text-sm font-semibold block">
                      {t('contact_hours_val')}
                    </span>
                    <span className="text-xs text-slate-400 block">
                      {t('contact_friday_val')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Google Maps Directions Button */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href="https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D9%85%D8%AD%D9%85%D8%AF+%D9%87%D8%A7%D8%AF%D9%8A+%D8%B1%D9%8A%D9%85%D8%A7%D9%86+%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9+%D9%88%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9%E2%80%AD/data=!4m2!3m1!1s0x0:0xac6fb6836721d8bd?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors border border-slate-700 hover:border-amber-400/50"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>{t('contact_open_map')}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>

            {/* Quick trust strip */}
            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 flex items-center gap-3 text-emerald-900">
              <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <p className="text-xs font-semibold leading-relaxed">
                {language === 'ar'
                  ? 'شركة هندسية معتمدة رسمياً ومسجلة بالهيئة السعودية للمهندسين ومعتمدة لدى الدفاع المدني ومنصة بلدي.'
                  : 'Officially certified engineering consultancy registered with SCE, accredited by Civil Defense and Balady.'}
              </p>
            </div>
          </div>

          {/* Quick Request Consultation Form */}
          <div className={`lg:col-span-7 bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 ${
            isRTL ? 'text-right' : 'text-left'
          }`}>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {t('contact_form_title')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              {t('contact_form_desc')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t('contact_name_label')} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t('contact_name_placeholder')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t('contact_phone_input_label')} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="05XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Service Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t('contact_service_label')}
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="معماري وإنشائي ورخص بلدي">
                      {language === 'ar' ? 'تصميم معماري وإنشائي (رخص بلدي)' : 'Architectural & Structural (Balady)'}
                    </option>
                    <option value="مخططات واعتماد سلامة ودفاع مدني">
                      {language === 'ar' ? 'مخططات واعتماد سلامة (الدفاع المدني)' : 'Fire Safety Plans & Approval (Civil Defense)'}
                    </option>
                    <option value="إشراف هندسي واستلام صبات">
                      {language === 'ar' ? 'إشراف هندسي ميداني واستلام صب' : 'Site Supervision & Concrete Inspection'}
                    </option>
                    <option value="تقارير سلامة إنشائية وفحص مبنى">
                      {language === 'ar' ? 'تقارير سلامة إنشائية وفحص مبنى' : 'Structural Health Audit & Assessment'}
                    </option>
                    <option value="تصميم داخلي ولاندسكيب">
                      {language === 'ar' ? 'تصميم داخلي ولاندسكيب' : 'Interior Design & Landscaping'}
                    </option>
                    <option value="حزمة شاملة لجميع الخدمات">
                      {language === 'ar' ? 'حزمة شاملة لكافة الخدمات الهندسية' : 'Comprehensive Full Engineering Package'}
                    </option>
                  </select>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t('contact_proj_type_label')}
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="سكني (فيلا / قصر / عمارة)">
                      {language === 'ar' ? 'سكني (فيلا / قصر / عمارة)' : 'Residential (Villa / Palace / Building)'}
                    </option>
                    <option value="تجاري (معرض / مجمع تجاري / مطعم)">
                      {language === 'ar' ? 'تجاري (معرض / مجمع تجاري / مطعم)' : 'Commercial (Plaza / Showroom / Restaurant)'}
                    </option>
                    <option value="مستودع أو هنجر تخزيني">
                      {language === 'ar' ? 'مستودع أو هنجر تخزيني' : 'Warehouse or Logistics Hangar'}
                    </option>
                    <option value="مبنى إداري ومكاتب شركات">
                      {language === 'ar' ? 'مبنى إداري ومكاتب شركات' : 'Corporate Office / Headquarters'}
                    </option>
                    <option value="صناعي (مصنع / ورشة)">
                      {language === 'ar' ? 'صناعي (مصنع / ورشة)' : 'Industrial (Factory / Workshop)'}
                    </option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t('contact_notes_label')}
                </label>
                <textarea
                  rows={3}
                  placeholder={t('contact_notes_placeholder')}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                ></textarea>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('contact_submit_btn')}</span>
                </button>

                <a
                  href="tel:0559113990"
                  className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-3.5 px-6 rounded-xl font-bold text-sm transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span dir="ltr">0559113990</span>
                </a>
              </div>

              {isSubmitted && (
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{t('contact_success_msg')}</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Interactive Google Map Component */}
        <div className="mt-10 sm:mt-12" id="office-map-location">
          <OfficeMap />
        </div>

      </div>
    </section>
  );
};

