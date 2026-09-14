import React from 'react';
import { 
  Flame, 
  CheckCircle2, 
  MessageCircle, 
  Phone,
  Building2,
  Warehouse,
  Store,
  Factory
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SafetyFocusSection: React.FC = () => {
  const { language, isRTL, t } = useLanguage();

  const sectors = [
    { 
      title: language === 'ar' ? 'المستودعات والهناجر التخزينية' : 'Warehouses & Logistics Hubs', 
      icon: Warehouse, 
      note: language === 'ar' 
        ? 'تصميم شبكات الإطفاء والرش الآلي والتهوية الميكانيكية وتصريف الدخان'
        : 'Automatic sprinkler networks, mechanical ventilation, and engineered smoke evacuation'
    },
    { 
      title: language === 'ar' ? 'المحلات والأنشطة التجارية والمطاعم' : 'Commercial Retail & Restaurants', 
      icon: Store, 
      note: language === 'ar'
        ? 'مخططات السلامة المعتمدة لمنصة سلامة وتراخيص بلدي السريعة'
        : 'Salamah-approved fire blueprints and swift Balady municipal operational permits'
    },
    { 
      title: language === 'ar' ? 'المصانع والمنشآت الصناعية' : 'Factories & Industrial Plants', 
      icon: Factory, 
      note: language === 'ar'
        ? 'دراسات تقييم المخاطر وأنظمة إطفاء الغازات ونظم إنذار متطورة'
        : 'Industrial risk assessment studies, gaseous clean agent suppression, and early warning systems'
    },
    { 
      title: language === 'ar' ? 'المباني السكنية والتجارية والمكاتب' : 'Residential & Office Towers', 
      icon: Building2, 
      note: language === 'ar'
        ? 'مخارج الطوارئ ومسالك الهروب وأبواب مقاومة للحريق وشبكات الرشاشات'
        : 'Emergency egress paths, certified fire-rated doors, and integrated riser standpipes'
    }
  ];

  const safetySteps = [
    {
      num: '01',
      title: language === 'ar' ? 'دراسة الموقع ومراجعة المخططات' : 'Site Survey & Requirement Audit',
      desc: language === 'ar' 
        ? 'معاينة المنشأة وتحليل المتطلبات طبقاً لنوع النشاط واشتراطات الدفاع المدني.'
        : 'On-site facility inspection assessing building classification and Civil Defense regulations.'
    },
    {
      num: '02',
      title: language === 'ar' ? 'إعداد وتصميم المخططات الفنية' : 'Technical Blueprint Engineering',
      desc: language === 'ar'
        ? 'رسم مخططات أنظمة الإنذار والإطفاء ومسالك الهروب وحسابات هيدروليكية دقيقة.'
        : 'Drafting fire alarm, suppression, emergency egress schemes, and hydraulic flow calculations.'
    },
    {
      num: '03',
      title: language === 'ar' ? 'الاعتماد الفوري عبر منصة سلامة' : 'Salamah Portal Formal Approval',
      desc: language === 'ar'
        ? 'رفع المعاملة كجهة استشارية معتمدة للحصول على الموافقة الرسمية بسرعة وبدون تأخير.'
        : 'Direct submission as chartered consultants for rapid official Civil Defense stamp and clearance.'
    },
    {
      num: '04',
      title: language === 'ar' ? 'شهادات الإنجاز والتقارير الفنية' : 'Completion Audit & Operation License',
      desc: language === 'ar'
        ? 'إصدار التقرير الفني النهائي وشهادة تركيب وتفتيش الأنظمة لإصدار رخصة التشغيل.'
        : 'Issuing mandatory installation certificates and final technical audit for municipal operation permits.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle safety hazard / architectural lines ambient light */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/80 border border-rose-800 text-rose-300 text-xs font-bold">
            <Flame className="w-4 h-4 text-rose-500 animate-pulse" />
            <span>{t('safety_badge')}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'ar' ? (
              <>
                استشارات وخطط <span className="text-rose-400">السلامة والوقاية من الحريق</span>
              </>
            ) : (
              <>
                Consultancy & Engineering in <span className="text-rose-400">Fire Safety & Civil Defense</span>
              </>
            )}
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t('safety_desc')}
          </p>
        </div>

        {/* Sectors We Serve */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div 
                key={idx}
                className={`bg-slate-800/80 rounded-2xl border border-slate-700/80 p-5 hover:border-rose-500/50 transition-all group flex flex-col justify-between ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-white mb-2">{sec.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{sec.note}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center text-rose-400 text-xs font-semibold gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{language === 'ar' ? 'معتمد للدفاع المدني' : 'Civil Defense Accredited'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Steps Workflow */}
        <div className="mt-16 bg-slate-950/80 rounded-3xl border border-slate-800 p-8">
          <h3 className="text-xl font-bold text-center text-white mb-8">
            {language === 'ar' 
              ? 'مراحل اعتماد مخططات السلامة وإصدار الرخص الهندسية'
              : 'Workflow: Fire Safety Plan Approval & Licensing Steps'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {safetySteps.map((step, idx) => (
              <div 
                key={idx} 
                className={`relative p-4 rounded-2xl bg-slate-900/90 border border-slate-800 ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                <div className="text-3xl font-black text-rose-500/50 mb-2 font-mono">
                  {step.num}
                </div>
                <h4 className="font-bold text-white text-sm mb-2">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Direct CTA */}
        <div className="mt-12 text-center flex flex-wrap justify-center items-center gap-4">
          <a
            href={`https://wa.me/966559113990?text=${encodeURIComponent(
              language === 'ar'
                ? 'السلام عليكم، لدي منشأة وأرغب باعتماد مخطط سلامة ودفاع مدني عبر منصة سلامة من شركة ريمان.'
                : 'Hello, I have a facility and would like to request fire safety blueprint approval via the Salamah portal from Reeman Consultancy.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-rose-950 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('safety_request_btn')}</span>
          </a>

          <a
            href="tel:0559113990"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-5 py-3 rounded-xl font-bold text-sm transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>{t('safety_call_btn')}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

