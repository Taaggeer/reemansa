import React, { useState } from 'react';
import { Star, Quote, CheckCircle, Building2, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Testimonial {
  id: string;
  name: { ar: string; en: string };
  role: { ar: string; en: string };
  project: { ar: string; en: string };
  category: 'all' | 'arch' | 'civil' | 'safety';
  categoryLabel: { ar: string; en: string };
  rating: number;
  text: { ar: string; en: string };
  date: { ar: string; en: string };
  location: { ar: string; en: string };
}

export const TestimonialsSection: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'arch' | 'civil' | 'safety'>('all');

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: { ar: 'م. فهد القحطاني', en: 'Eng. Fahad Al-Qahtani' },
      role: { ar: 'مالك فيلا سكنية', en: 'Residential Villa Owner' },
      project: { ar: 'تصميم معماري وإنشائي واستخراج رخصة بلدي', en: 'Architectural & Structural Design, Balady Permit' },
      category: 'arch',
      categoryLabel: { ar: 'معماري ورخص بناء', en: 'Architecture & Permits' },
      rating: 5,
      text: {
        ar: 'تعاملت مع شركة ريمان لتصميم فيلتي الخاصة بالرياض، وكانت التجربة ممتازة من البداية حتى استخراج رخصة البناء عبر منصة بلدي. تصاميم معمارية مودرن مريحة واستغلال ذكي لكامل المساحة مع التزام صارم بكود البناء السعودي.',
        en: 'I worked with Reeman on designing my private villa in Riyadh. The experience was remarkable from initial concept to obtaining the building permit via Balady. Modern layouts, intelligent space utilization, and strict adherence to the Saudi Building Code.'
      },
      date: { ar: 'منذ أسبوعين', en: '2 weeks ago' },
      location: { ar: 'حي الروضة، الرياض', en: 'Ar Rawdah, Riyadh' },
    },
    {
      id: '2',
      name: { ar: 'أ. عبد العزيز الدوسري', en: 'Mr. Abdulaziz Al-Dossary' },
      role: { ar: 'مدير عمليات وتشغيل لوجستي', en: 'Logistics Operations Director' },
      project: { ar: 'اعتماد مخطط سلامة لمستودع تخزين 2400 م²', en: 'Fire Safety Approval for 2,400 m² Logistics Warehouse' },
      category: 'safety',
      categoryLabel: { ar: 'سلامة ودفاع مدني', en: 'Fire Safety & Civil Defense' },
      rating: 5,
      text: {
        ar: 'أفضل مكتب بالرياض في معاملات الدفاع المدني ومنصة سلامة! أنجزوا دراسة تقييم المخاطر وتصميم شبكة الرشاشات ومضخات الحريق وتم اعتماد المخطط في وقت قياسي وبدون أي ملاحظات.',
        en: 'The best firm in Riyadh for Civil Defense approvals and Salamah platform! They carried out comprehensive hazard assessments and sprinkler designs, securing official accreditation in record time with zero revisions.'
      },
      date: { ar: 'منذ شهر', en: '1 month ago' },
      location: { ar: 'المنطقة الصناعية، الرياض', en: 'Industrial City, Riyadh' },
    },
    {
      id: '3',
      name: { ar: 'أ. صالح العمري', en: 'Mr. Saleh Al-Omari' },
      role: { ar: 'مطور عقاري', en: 'Real Estate Developer' },
      project: { ar: 'تصميم إنشائي وإشراف هندسي لعمارة تجارية', en: 'Structural Engineering & Site Supervision for Commercial Plaza' },
      category: 'civil',
      categoryLabel: { ar: 'إنشائي وإشراف', en: 'Civil & Supervision' },
      rating: 5,
      text: {
        ar: 'مهندسو ريمان متمكنون جداً في التصميم الإنشائي. وفروا علينا في كميات حديد التسليح بدون المساس بمتانة المبنى، وإشرافهم الميداني على صب الخرسانات كان دقيقاً وبمحاضر استلام رسمية لكل مرحلة.',
        en: 'Reeman’s structural engineers are exceptionally skilled. They optimized steel reinforcement quantities while maintaining structural rigidity, and provided precise field inspection reports for every concrete pour.'
      },
      date: { ar: 'منذ شهرين', en: '2 months ago' },
      location: { ar: 'طريق الملك عبدالله، الرياض', en: 'King Abdullah Rd, Riyadh' },
    },
    {
      id: '4',
      name: { ar: 'د. ريان الشهري', en: 'Dr. Rayan Al-Shehri' },
      role: { ar: 'المدير التنفيذي لمجمع طبي', en: 'Medical Complex CEO' },
      project: { ar: 'أنظمة إنذار وإطفاء ورخصة سلامة للمبنى', en: 'Fire Alarm, Suppression & Commercial Safety License' },
      category: 'safety',
      categoryLabel: { ar: 'سلامة ومخارج طوارئ', en: 'Safety & Emergency Exits' },
      rating: 5,
      text: {
        ar: 'خدمة راقية وسرعة استجابة مذهلة. الفريق الهندسي زار الموقع مباشرة وفحص مسالك الهروب وأنظمة الإنذار المعنونة وأصدروا لنا تقرير الفحص الفني المطلوب لتجديد الرخصة التجارية.',
        en: 'Outstanding service and rapid response. The engineering team surveyed the facility on-site, inspected escape corridors and addressable fire alarms, delivering the certified audit needed for license renewal.'
      },
      date: { ar: 'منذ 3 أسابيع', en: '3 weeks ago' },
      location: { ar: 'حي الياسمين، الرياض', en: 'Al Yasmin, Riyadh' },
    },
    {
      id: '5',
      name: { ar: 'أ. مشاعل العتيبي', en: 'Ms. Mashael Al-Otaibi' },
      role: { ar: 'مالكة مشروع مقهى ومعرض تجاري', en: 'Cafe & Commercial Boutique Owner' },
      project: { ar: 'تصميم داخلي ومعماري ورخصة إشغال', en: 'Interior Architecture, Facade & Occupancy Permit' },
      category: 'arch',
      categoryLabel: { ar: 'تصميم داخلي ومعماري', en: 'Interior & Architecture' },
      rating: 5,
      text: {
        ar: 'إبداع غير عادي في تنسيق الفراغات وتوزيع الإضاءة وتصميم الواجهة. ساعدونا أيضاً في اشتراطات البلدية والسلامة الخاصة بالمطاعم والكافيهات. أنصح بشدة بالتعامل معهم.',
        en: 'Extraordinary creativity in spatial layout, lighting balance, and storefront design. They seamlessly navigated municipal and fire safety compliance for food and beverage establishments. Highly recommended.'
      },
      date: { ar: 'منذ شهر', en: '1 month ago' },
      location: { ar: 'حي الصحافة، الرياض', en: 'Al Sahafa, Riyadh' },
    },
    {
      id: '6',
      name: { ar: 'م. خالد السبيعي', en: 'Eng. Khalid Al-Subaie' },
      role: { ar: 'مقاول إنشاءات وتطوير', en: 'General Contractor' },
      project: { ar: 'فحص التربة والأساسات وتقارير السلامة الإنشائية', en: 'Geotechnical Soil Audit & Structural Health Assessment' },
      category: 'civil',
      categoryLabel: { ar: 'فحص إنشائي وتربة', en: 'Structural & Soil Audit' },
      rating: 5,
      text: {
        ar: 'نتعامل مع شركة ريمان في مختلف مشاريعنا الإنشائية كمكتب استشاري معتمد. احترافية عالية، وتقارير فنية دقيقة مدعومة باختبارات معملية موثوقة تساعد المقاول والمالك معاً.',
        en: 'We collaborate with Reeman across our construction projects as our certified consultant. High professional caliber and rigorous technical reports verified by certified tests that protect both contractor and owner.'
      },
      date: { ar: 'منذ شهرين', en: '2 months ago' },
      location: { ar: 'الرياض', en: 'Riyadh' },
    },
  ];

  const filtered = activeFilter === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === activeFilter);

  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold border border-amber-200">
            <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
            <span>{t('test_badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'ar' ? (
              <>ماذا يقول عملاؤنا عن <span className="text-sky-700">ريمان للإستشارات الهندسية والسلامة</span></>
            ) : (
              <>What Clients Say About <span className="text-sky-700">Reeman Engineering & Safety Consultancy</span></>
            )}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('test_desc')}
          </p>

          {/* Rating Snapshot Pill */}
          <div className="pt-2 inline-flex items-center gap-3 bg-white px-5 py-2 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-slate-800 text-sm font-mono" dir="ltr">4.9 / 5.0</span>
            <span className={`text-xs text-slate-500 ${isRTL ? 'border-r border-slate-200 pr-3 mr-1' : 'border-l border-slate-200 pl-3 ml-1'}`}>
              {language === 'ar' ? 'استناداً إلى أكثر من 180 تقييم معتمد' : 'Based on 180+ verified evaluations'}
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {t('test_tab_all')} ({testimonials.length})
          </button>
          <button
            onClick={() => setActiveFilter('arch')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'arch'
                ? 'bg-sky-700 text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-sky-50'
            }`}
          >
            {t('test_tab_arch')}
          </button>
          <button
            onClick={() => setActiveFilter('civil')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'civil'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-amber-50'
            }`}
          >
            {t('test_tab_civil')}
          </button>
          <button
            onClick={() => setActiveFilter('safety')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'safety'
                ? 'bg-rose-700 text-white shadow-sm'
                : 'bg-white text-rose-700 border border-rose-200 hover:bg-rose-50'
            }`}
          >
            {t('test_tab_safety')}
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative group ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              <div>
                {/* Top Bar: Stars + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    item.category === 'safety'
                      ? 'bg-rose-50 text-rose-700 border border-rose-200'
                      : item.category === 'arch'
                      ? 'bg-sky-50 text-sky-700 border border-sky-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {item.categoryLabel[language]}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <div className="relative mb-5">
                  <Quote className={`w-8 h-8 text-slate-100 absolute -top-3 ${isRTL ? '-right-2' : '-left-2'} -z-0`} />
                  <p className="relative z-10 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    "{item.text[language]}"
                  </p>
                </div>

                {/* Project Tag */}
                <div className="text-[11px] font-semibold text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-4 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span className="truncate">{item.project[language]}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-sm border border-slate-200">
                    {item.name[language].charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-sm text-slate-900 leading-tight">
                        {item.name[language]}
                      </h4>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" title={language === 'ar' ? 'عميل موثق' : 'Verified Client'} />
                    </div>
                    <span className="text-[11px] text-slate-500 block leading-tight">
                      {item.role[language]} • {item.location[language]}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">{item.date[language]}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Callout Strip for New Clients */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className={`space-y-1 ${isRTL ? 'text-center sm:text-right' : 'text-center sm:text-left'}`}>
            <h3 className="text-lg font-bold text-white">
              {t('test_cta_title')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {t('test_cta_sub')}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="https://wa.me/966559113990?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A8%D8%AF%D8%A1%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D9%87%D9%86%D8%AF%D8%B3%D9%8A%20%D9%85%D8%B9%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%B1%D9%8A%D9%85%D8%A7%D9%86%20%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm active:scale-95"
            >
              {t('test_cta_btn')}
            </a>
            <a
              href="tel:0559113990"
              className="bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all border border-slate-700 font-mono"
              dir="ltr"
            >
              0559113990
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

