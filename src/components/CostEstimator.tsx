import React, { useState } from 'react';
import { Calculator, Check, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CostEstimator: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [projectType, setProjectType] = useState<'villa' | 'building' | 'warehouse' | 'commercial' | 'factory'>('villa');
  const [area, setArea] = useState<number>(500);
  const [selectedServices, setSelectedServices] = useState<{
    arch: boolean;
    civil: boolean;
    safety: boolean;
    supervision: boolean;
  }>({
    arch: true,
    civil: true,
    safety: true,
    supervision: false,
  });

  const projectTypes = [
    { 
      id: 'villa', 
      name: language === 'ar' ? 'فيلا سكنية / قصر' : 'Residential Villa / Palace', 
      baseMultiplier: 1.0, 
      defaultArea: 450 
    },
    { 
      id: 'building', 
      name: language === 'ar' ? 'عمارة سكنية / تجارية' : 'Residential / Commercial Building', 
      baseMultiplier: 1.25, 
      defaultArea: 1200 
    },
    { 
      id: 'warehouse', 
      name: language === 'ar' ? 'مستودع / هنجر تخزيني' : 'Warehouse / Logistics Hangar', 
      baseMultiplier: 1.15, 
      defaultArea: 1500 
    },
    { 
      id: 'commercial', 
      name: language === 'ar' ? 'مجمع تجاري / معارض' : 'Commercial Strip / Plaza', 
      baseMultiplier: 1.35, 
      defaultArea: 2000 
    },
    { 
      id: 'factory', 
      name: language === 'ar' ? 'منشأة صناعية / ورشة' : 'Industrial Facility / Plant', 
      baseMultiplier: 1.3, 
      defaultArea: 1800 
    },
  ];

  const handleTypeChange = (typeId: any) => {
    setProjectType(typeId);
    const found = projectTypes.find(t => t.id === typeId);
    if (found) setArea(found.defaultArea);
  };

  const toggleService = (key: keyof typeof selectedServices) => {
    setSelectedServices(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Estimate calculation (indicative for Riyadh market)
  const currentType = projectTypes.find(t => t.id === projectType) || projectTypes[0];
  let ratePerSqMeter = 0;
  if (selectedServices.arch) ratePerSqMeter += 12;
  if (selectedServices.civil) ratePerSqMeter += 10;
  if (selectedServices.safety) ratePerSqMeter += 8;
  if (selectedServices.supervision) ratePerSqMeter += 15;

  const estimatedMin = Math.round(area * ratePerSqMeter * currentType.baseMultiplier * 0.85);
  const estimatedMax = Math.round(area * ratePerSqMeter * currentType.baseMultiplier * 1.15);

  const selectedServicesText = language === 'ar'
    ? [
        selectedServices.arch ? 'التصميم المعماري ورخص بلدي' : null,
        selectedServices.civil ? 'التصميم الإنشائي وكود البناء' : null,
        selectedServices.safety ? 'مخططات السلامة والدفاع المدني' : null,
        selectedServices.supervision ? 'الإشراف الهندسي الميداني' : null,
      ].filter(Boolean).join(' + ')
    : [
        selectedServices.arch ? 'Architectural & Balady' : null,
        selectedServices.civil ? 'Structural & SBC' : null,
        selectedServices.safety ? 'Fire Safety & Salamah' : null,
        selectedServices.supervision ? 'Site Supervision' : null,
      ].filter(Boolean).join(' + ');

  const whatsappMessage = encodeURIComponent(
    language === 'ar'
      ? `السلام عليكم، أود الحصول على عرض سعر رسمي من شركة ريمان للإستشارات الهندسية والسلامة:\n` +
        `• نوع المشروع: ${currentType.name}\n` +
        `• المساحة الإجمالية: ${area} متر مربع\n` +
        `• الخدمات المطلوبة: ${selectedServicesText || 'استشارة عامة'}\n` +
        `• التقدير التقريبي من الحاسبة: من ${estimatedMin.toLocaleString()} إلى ${estimatedMax.toLocaleString()} ر.س\n` +
        `يرجى التواصل معي للتفاصيل.`
      : `Hello, I would like to request an official quotation from Reeman Engineering & Safety Consultancy:\n` +
        `• Project Type: ${currentType.name}\n` +
        `• Total Built-up Area: ${area} sq.m\n` +
        `• Requested Services: ${selectedServicesText || 'General Consultancy'}\n` +
        `• Indicative Estimate: ${estimatedMin.toLocaleString()} - ${estimatedMax.toLocaleString()} SAR\n` +
        `Please contact me with details.`
  );

  return (
    <section id="estimator" className="py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
            <Calculator className="w-4 h-4 text-amber-600" />
            <span>{t('calc_badge')}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {t('calc_heading')}
          </h2>
          <p className="text-slate-600 text-sm">
            {t('calc_desc')}
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Column */}
          <div className={`lg:col-span-7 space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            
            {/* 1. Project Type */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-3">
                {t('calc_step1')}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {projectTypes.map(t => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleTypeChange(t.id)}
                    className={`p-3 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
                      projectType === t.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Area slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800">
                  {t('calc_step2')}
                </label>
                <span className="text-base font-extrabold text-sky-700 bg-sky-50 px-3 py-0.5 rounded-lg border border-sky-100 font-mono">
                  {area} {t('calc_sqm')}
                </span>
              </div>
              <input
                type="range"
                min={100}
                max={6000}
                step={50}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>100 {t('calc_sqm')}</span>
                <span>3,000 {t('calc_sqm')}</span>
                <span>6,000 {t('calc_sqm')}</span>
              </div>
            </div>

            {/* 3. Services Selection */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-3">
                {t('calc_step3')}
              </label>
              <div className="space-y-2.5">
                {/* Arch */}
                <div
                  onClick={() => toggleService('arch')}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    selectedServices.arch
                      ? 'bg-sky-50/80 border-sky-300 text-slate-900'
                      : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${selectedServices.arch ? 'bg-sky-600 border-sky-600 text-white' : 'border-slate-300'}`}>
                      {selectedServices.arch && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span>{t('calc_srv_arch')}</span>
                  </div>
                  <span className="text-[11px] font-bold text-sky-700 bg-white px-2 py-0.5 rounded border border-sky-100">
                    {language === 'ar' ? 'معماري' : 'Arch'}
                  </span>
                </div>

                {/* Civil */}
                <div
                  onClick={() => toggleService('civil')}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    selectedServices.civil
                      ? 'bg-amber-50/80 border-amber-300 text-slate-900'
                      : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${selectedServices.civil ? 'bg-amber-600 border-amber-600 text-white' : 'border-slate-300'}`}>
                      {selectedServices.civil && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span>{t('calc_srv_civil')}</span>
                  </div>
                  <span className="text-[11px] font-bold text-amber-700 bg-white px-2 py-0.5 rounded border border-amber-100">
                    {language === 'ar' ? 'إنشائي' : 'Civil'}
                  </span>
                </div>

                {/* Safety */}
                <div
                  onClick={() => toggleService('safety')}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    selectedServices.safety
                      ? 'bg-rose-50/80 border-rose-300 text-slate-900'
                      : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${selectedServices.safety ? 'bg-rose-600 border-rose-600 text-white' : 'border-slate-300'}`}>
                      {selectedServices.safety && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span>{t('calc_srv_safety')}</span>
                  </div>
                  <span className="text-[11px] font-bold text-rose-700 bg-white px-2 py-0.5 rounded border border-rose-100">
                    {language === 'ar' ? 'سلامة وحريق' : 'Safety'}
                  </span>
                </div>

                {/* Supervision */}
                <div
                  onClick={() => toggleService('supervision')}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    selectedServices.supervision
                      ? 'bg-emerald-50/80 border-emerald-300 text-slate-900'
                      : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${selectedServices.supervision ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300'}`}>
                      {selectedServices.supervision && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span>{t('calc_srv_supervision')}</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-100">
                    {language === 'ar' ? 'إشراف موقعي' : 'Supervision'}
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className={`lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-md ${
            isRTL ? 'text-right' : 'text-left'
          }`}>
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-semibold text-slate-400">{t('calc_summary_title')}</span>
                <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">
                  {language === 'ar' ? 'تقدير استرشادي' : 'Indicative'}
                </span>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>{t('calc_summary_type')}</span>
                  <span className="font-bold text-white">{currentType.name}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300">
                  <span>{t('calc_summary_area')}</span>
                  <span className="font-bold text-white font-mono">{area} {t('calc_sqm')}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300">
                  <span>{t('calc_summary_services')}</span>
                  <span className={`font-bold text-sky-300 max-w-[170px] truncate ${isRTL ? 'text-left' : 'text-right'}`}>
                    {selectedServicesText || (language === 'ar' ? 'لا يوجد' : 'None')}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                <span className="text-xs text-slate-400 block mb-1">{t('calc_est_range')}</span>
                <div className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight font-mono" dir="ltr">
                  {estimatedMin.toLocaleString()} - {estimatedMax.toLocaleString()} SAR
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  {t('calc_disclaimer')}
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 pt-4 border-t border-slate-800 space-y-3">
              <a
                href={`https://wa.me/966559113990?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('calc_send_wa')}</span>
              </a>

              <a
                href="tel:0559113990"
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 py-2.5 rounded-xl font-bold text-xs transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{t('calc_call_btn')}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

