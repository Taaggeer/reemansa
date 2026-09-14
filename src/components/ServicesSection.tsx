import React, { useState } from 'react';
import { 
  Building, 
  Compass, 
  Flame, 
  ShieldAlert, 
  Check, 
  Layers, 
  HardHat, 
  Ruler, 
  Palette, 
  Activity, 
  Zap, 
  PhoneCall,
  MessageCircle,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'arch' | 'civil' | 'safety'>('all');
  const { language, isRTL, t } = useLanguage();

  const servicesData = [
    // 1. Architecture
    {
      id: 'arch-1',
      category: 'arch',
      categoryName: language === 'ar' ? 'الهندسة المعمارية' : 'Architecture',
      title: language === 'ar' ? 'التصميم المعماري الإبداعي ورخص البناء' : 'Creative Architectural Design & Building Permits',
      summary: language === 'ar' 
        ? 'تصميم مبانٍ سكنية وتجارية وإدارية حديثة متوافقة مع كود البناء السعودي وكود وادي حنيفة والهوية السلمانية بالرياض.'
        : 'Modern residential, commercial, and corporate architectural design adhering to SBC code and Salmani architectural style.',
      features: language === 'ar' ? [
        'تصميم الفلل السكنية والقصور والمجمعات السكنية',
        'تصميم المباني التجارية والمكتبية ومراكز الأعمال',
        'استخراج رخص البناء المعتمدة عبر منصة بلدي',
        'مخططات معمارية تنفيذية تفصيلية متكاملة'
      ] : [
        'Design of luxury villas, palaces, and residential compounds',
        'Commercial towers, business parks, and mixed-use complexes',
        'Certified building permit issuance through the Balady platform',
        'Comprehensive, detailed architectural execution drawings'
      ],
      icon: Building,
      accentColor: 'text-sky-600',
      badge: language === 'ar' ? 'منصة بلدي' : 'Balady Certified'
    },
    {
      id: 'arch-2',
      category: 'arch',
      categoryName: language === 'ar' ? 'الهندسة المعمارية' : 'Architecture',
      title: language === 'ar' ? 'التصميم الداخلي وتنسيق المواقع (Interior & Landscape)' : 'Interior Design & Landscape Architecture',
      summary: language === 'ar'
        ? 'حلول تصميم داخلي عصرية توظف المساحات بذكاء، مع تناغم فريد بين الإضاءة والخامات والحدائق الخارجية.'
        : 'Modern interior design maximizing spatial flow with thoughtful lighting, bespoke materials, and landscaped courtyards.',
      features: language === 'ar' ? [
        'توزيع الفراغات والأثاث وفق مقاييس مريحة وعصرية',
        'لوحات اختيار المواد والألوان والتشطيبات والخامات',
        'تصميم حدائق وممرات ومسطحات خضراء (Landscape)',
        'مخططات تنفيذية للإضاءة والأسقف الجبسية والديكور'
      ] : [
        'Ergonomic spatial planning and interior furniture layout',
        'Mood boards, premium materials, and tactile finishes palette',
        'Outdoor gardens, pathways, and green landscape architecture',
        'Detailed electrical lighting, false ceilings, and decor drawings'
      ],
      icon: Palette,
      accentColor: 'text-sky-600',
      badge: language === 'ar' ? 'تصميم عصري' : 'Modern Luxury'
    },
    {
      id: 'arch-3',
      category: 'arch',
      categoryName: language === 'ar' ? 'الهندسة المعمارية' : 'Architecture',
      title: language === 'ar' ? 'تطوير وتحديث الواجهات وإعادة التأهيل' : 'Facade Modernization & Building Renovation',
      summary: language === 'ar'
        ? 'تحديث الواجهات القديمة للمباني القائمة وتحويلها لواجهات مودرن وفخمة تزيد من القيمة الاستثمارية والجمالية.'
        : 'Upgrading existing facades into striking, contemporary exteriors that enhance commercial value and street appeal.',
      features: language === 'ar' ? [
        'معالجة الواجهات الخارجية بخامات حديثة وعازلة',
        'دراسات تظليل وحماية من حرارة الشمس بالرياض',
        'تصميم واجهات المحلات والشركات طبقاً لاشتراطات الأمانة',
        'تقديم لقطات ثلاثية الأبعاد (3D Renders) واقعية'
      ] : [
        'Exterior cladding with thermal insulation and modern materials',
        'Solar shading analysis and climate-responsive facade engineering',
        'Retail storefronts and corporate facades compliant with municipal regulations',
        'Photorealistic 3D rendering and architectural walkthroughs'
      ],
      icon: Layers,
      accentColor: 'text-sky-600',
      badge: language === 'ar' ? '3D واقعي' : '3D Renders'
    },

    // 2. Civil & Structural
    {
      id: 'civil-1',
      category: 'civil',
      categoryName: language === 'ar' ? 'الهندسة المدنية والإنشائية' : 'Civil & Structural',
      title: language === 'ar' ? 'التصميم الإنشائي وفق كود البناء السعودي (SBC)' : 'Structural Engineering & SBC Code Compliance',
      summary: language === 'ar'
        ? 'تصميم وتحليل إنشائي دقيق للمنشآت الخرسانية والمعدنية يضمن أعلى درجات المتانة والأمان مع ترشيد تكاليف المواد.'
        : 'Rigorous structural modeling and calculations for reinforced concrete and steel structures, balancing integrity with cost efficiency.',
      features: language === 'ar' ? [
        'حسابات الأحمال الحية والميتة وأحمال الرياح والزلازل',
        'تصميم المنشآت الخرسانية المسلحة والجسور والأعمدة والأسقف',
        'تصميم الهياكل المعدنية (Steel Structures) والمستودعات والهناجر',
        'مخططات تفريد حديد التسليح وتفاصيل الوصلات الإنشائية'
      ] : [
        'Live, dead, wind, and seismic structural load calculations',
        'Reinforced concrete foundations, beams, columns, and slabs design',
        'Steel structures, warehouses, industrial hangers, and truss design',
        'Rebar bending schedules and structural connection detailing'
      ],
      icon: Ruler,
      accentColor: 'text-amber-600',
      badge: language === 'ar' ? 'كود SBC المعتمد' : 'SBC Code'
    },
    {
      id: 'civil-2',
      category: 'civil',
      categoryName: language === 'ar' ? 'الهندسة المدنية والإنشائية' : 'Civil & Structural',
      title: language === 'ar' ? 'الإشراف الهندسي الميداني وإدارة التنفيذ' : 'Site Supervision & Construction Management',
      summary: language === 'ar'
        ? 'إشراف هندسي صارم ومباشر في الموقع على كافة مراحل البناء لضمان التنفيذ المطابق للمخططات والمواصفات القياسية.'
        : 'Strict on-site engineering oversight across all construction phases ensuring precision execution aligned with approved drawings.',
      features: language === 'ar' ? [
        'استلام حديد التسليح والنجارة قبل صب الخرسانة وتوثيق المحاضر',
        'متابعة ومطابقة اختبارات تكسير مكعبات الخرسانة',
        'حل وتعديل التعارضات الإنشائية والمعمارية ميدانياً',
        'إصدار تقارير دورية وشهادات إتمام المراحل للمالك والجهات الرسمية'
      ] : [
        'Pre-pour inspection of formwork, reinforcement, and structural milestones',
        'Concrete cube compressive strength testing verification',
        'Resolving structural and MEP clashes directly on the job site',
        'Phase completion certificates and formal progress reports for municipalities'
      ],
      icon: HardHat,
      accentColor: 'text-amber-600',
      badge: language === 'ar' ? 'إشراف معتمد' : 'Chartered Supervision'
    },
    {
      id: 'civil-3',
      category: 'civil',
      categoryName: language === 'ar' ? 'الهندسة المدنية والإنشائية' : 'Civil & Structural',
      title: language === 'ar' ? 'تقارير السلامة الإنشائية وفحص المباني' : 'Structural Health Assessment & Building Audits',
      summary: language === 'ar'
        ? 'فحص فني متكامل للمباني القائمة، ورصد التصدعات والتشققات، وإعداد تقارير تدعيم هندسية رسمية معتمدة.'
        : 'Comprehensive structural diagnosis of existing structures, crack monitoring, soil stability analysis, and retrofit engineering.',
      features: language === 'ar' ? [
        'فحص واختبار متانة الأعمدة والأسقف والأساسات',
        'تقارير السلامة الإنشائية المطلوبة للرخص والأنشطة التجارية',
        'خطط تدعيم وترميم العناصر الخرسانية المتضررة',
        'دراسات التربة والأساسات والنزح المائي'
      ] : [
        'Structural integrity inspection for columns, slabs, and footings',
        'Certified structural soundness reports required for commercial licensing',
        'Engineering retrofitting and structural reinforcement schemes',
        'Soil bearing capacity and geotechnical groundwater dewatering reviews'
      ],
      icon: Activity,
      accentColor: 'text-amber-600',
      badge: language === 'ar' ? 'فحص فني' : 'Structural Audit'
    },

    // 3. Safety & Civil Defense
    {
      id: 'safety-1',
      category: 'safety',
      categoryName: language === 'ar' ? 'استشارات السلامة والدفاع المدني' : 'Fire Safety & Civil Defense',
      title: language === 'ar' ? 'تصميم واعتماد مخططات السلامة (منصة سلامة)' : 'Civil Defense Fire Safety Blueprint Approval',
      summary: language === 'ar'
        ? 'إعداد وتصميم واعتماد مخططات الوقاية والحماية من الحريق المعتمدة لدى المديرية العامة للدفاع المدني بالمملكة.'
        : 'Official fire protection and life safety design and approval through the Civil Defense Salamah portal for all commercial facilities.',
      features: language === 'ar' ? [
        'اعتماد مخططات السلامة عبر منصة سلامة الرسمية للمنشآت والمحلات',
        'تصميم مسالك الهروب ومخارج الطوارئ ومسافات الانتقال الآمنة',
        'تحديد أبواب الحريق المقاومة للهب ومناطق التجمع الآمنة',
        'مطابقة كافة الاشتراطات للأنشطة التجارية والصناعية والتخزينية'
      ] : [
        'Official approval of fire safety plans via Salamah portal',
        'Emergency egress, escape routes, and safe travel distance modeling',
        'Fire-rated doors, assembly areas, and emergency signage specifications',
        'Compliance across commercial, warehousing, healthcare, and educational facilities'
      ],
      icon: ShieldAlert,
      accentColor: 'text-rose-600',
      badge: language === 'ar' ? 'معتمد دفاع مدني' : 'Civil Defense Approved'
    },
    {
      id: 'safety-2',
      category: 'safety',
      categoryName: language === 'ar' ? 'استشارات السلامة والدفاع المدني' : 'Fire Safety & Civil Defense',
      title: language === 'ar' ? 'أنظمة الإطفاء الآلي ومكافحة الحريق (Fire Fighting)' : 'Fire Suppression & Hydraulic Systems (NFPA)',
      summary: language === 'ar'
        ? 'تصميم هيدروليكي متطور لشبكات الإطفاء بالماء والغاز وفق المعايير العالمية (NFPA) واشتراطات الدفاع المدني السعودي.'
        : 'Advanced hydraulic engineering of water and gas fire extinguishing networks adhering to NFPA standards and Saudi regulations.',
      features: language === 'ar' ? [
        'تصميم شبكات رشاشات الحريق الآلية (Sprinklers) وتحديد أقطار الأنابيب',
        'تصميم محطات مضخات الحريق (مضخة رئيسية، جوكي، ديزل) وخزانات الإطفاء',
        'أنظمة الإطفاء النظيفة بالغازات (FM200 / CO2 / Novec) لغرف السيرفرات والكهرباء',
        'تصميم شبكات صناديق الحريق الرطبة والجافة ومآخذ عساكر الحريق'
      ] : [
        'Automatic fire sprinkler system hydraulic calculations and piping design',
        'Fire pump stations (duty, jockey, diesel) and dedicated reserve water storage',
        'Clean agent gas suppression systems (FM200, CO2, Novec 1230) for server rooms',
        'Wet and dry standpipe systems, landing valves, and external fire hydrants'
      ],
      icon: Flame,
      accentColor: 'text-rose-600',
      badge: language === 'ar' ? 'معايير NFPA' : 'NFPA Standards'
    },
    {
      id: 'safety-3',
      category: 'safety',
      categoryName: language === 'ar' ? 'استشارات السلامة والدفاع المدني' : 'Fire Safety & Civil Defense',
      title: language === 'ar' ? 'أنظمة الإنذار وتصريف الدخان وشهادات التركيب' : 'Fire Alarm, Smoke Control & Certification',
      summary: language === 'ar'
        ? 'أنظمة إنذار مبكر ذكية وتصريف دخان تضمن الإنذار الفوري وحماية الأرواح والمنشآت مع إصدار شهادات الإنجاز المعتمدة.'
        : 'Smart addressable fire detection, engineered smoke evacuation, and issuing certified completion documentation for licensing.',
      features: language === 'ar' ? [
        'تصميم أنظمة الإنذار المعنونة (Addressable Fire Alarm Systems)',
        'أنظمة سحب وتصريف الدخان والتهوية الميكانيكية للمستودعات والسراديب',
        'إصدار تقارير فنية وشهادات تركيب أنظمة السلامة لتجديد التراخيص',
        'دراسات تقييم المخاطر وخطط الإخلاء الميداني وتدريب كوادر المنشأة'
      ] : [
        'Addressable fire alarm and intelligent multi-sensor detector networks',
        'Engineered smoke control, extraction, and staircase pressurization fans',
        'Official technical certificates and safety installation verification for licenses',
        'Fire hazard risk assessments, evacuation route diagrams, and emergency training'
      ],
      icon: Zap,
      accentColor: 'text-rose-600',
      badge: language === 'ar' ? 'شهادات رسمية' : 'Official Certificates'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
            <Compass className="w-3.5 h-3.5 text-sky-600" />
            <span>{t('services_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'ar' ? (
              <>
                خدمات متخصصة في <span className="text-sky-700">المعمارية</span>، <span className="text-amber-600">المدنية</span>، و<span className="text-rose-600">السلامة</span>
              </>
            ) : (
              <>
                Specialized Services in <span className="text-sky-700">Architecture</span>, <span className="text-amber-600">Civil</span> & <span className="text-rose-600">Safety</span>
              </>
            )}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('services_desc')}
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {t('services_tab_all')} ({servicesData.length})
          </button>

          <button
            id="services-arch-btn"
            onClick={() => setActiveTab('arch')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'arch'
                ? 'bg-sky-700 text-white shadow-md shadow-sky-200'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-sky-50 hover:text-sky-700'
            }`}
          >
            <Building className="w-4 h-4" />
            <span>{t('services_tab_arch')}</span>
          </button>

          <button
            id="services-civil-btn"
            onClick={() => setActiveTab('civil')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'civil'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-200'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-amber-50 hover:text-amber-700'
            }`}
          >
            <Ruler className="w-4 h-4" />
            <span>{t('services_tab_civil')}</span>
          </button>

          <button
            id="services-safety-btn"
            onClick={() => setActiveTab('safety')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'safety'
                ? 'bg-rose-700 text-white shadow-md shadow-rose-200'
                : 'bg-white text-rose-700 border border-rose-200 hover:bg-rose-50'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>{t('services_tab_safety')}</span>
          </button>
        </div>

        {/* Anchors for direct navbar linking */}
        <div id="services-arch" className="relative -top-24" />
        <div id="services-civil" className="relative -top-24" />
        <div id="services-safety" className="relative -top-24" />

        {/* Services Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md ${
                  service.category === 'safety'
                    ? 'border-rose-100 hover:border-rose-300'
                    : service.category === 'arch'
                    ? 'border-sky-100 hover:border-sky-300'
                    : 'border-amber-100 hover:border-amber-300'
                }`}
              >
                {/* Card Top / Header */}
                <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        service.category === 'safety'
                          ? 'bg-rose-50 text-rose-600'
                          : service.category === 'arch'
                          ? 'bg-sky-50 text-sky-600'
                          : 'bg-amber-50 text-amber-600'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {service.categoryName}
                      </span>
                      {service.badge && (
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                            service.category === 'safety'
                              ? 'bg-rose-100 text-rose-800'
                              : service.category === 'arch'
                              ? 'bg-sky-100 text-sky-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {service.summary}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            service.category === 'safety'
                              ? 'text-rose-600'
                              : service.category === 'arch'
                              ? 'text-sky-600'
                              : 'text-amber-600'
                          }`}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={`https://wa.me/966559113990?text=${encodeURIComponent(
                      language === 'ar'
                        ? `السلام عليكم، أود الاستفسار وطلب خدمة: (${service.title}) من شركة ريمان للإستشارات الهندسية والسلامة.`
                        : `Hello, I would like to inquire about and request the service: (${service.title}) from Reeman Engineering & Safety Consultancy.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-xs font-bold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{t('services_order_btn')}</span>
                  </a>

                  <a
                    href="tel:0559113990"
                    className="p-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 transition-colors"
                    title={language === 'ar' ? 'اتصال هاتفي مباشر' : 'Direct Phone Call'}
                  >
                    <PhoneCall className="w-4 h-4 text-slate-800" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official platforms banner */}
        <div className="mt-14 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-100">
            <div className="p-3">
              <div className="text-sky-700 font-extrabold text-lg mb-1">
                {language === 'ar' ? 'منصة بلدي' : 'Balady Platform'}
              </div>
              <p className="text-xs text-slate-500">
                {language === 'ar' 
                  ? 'إصدار وتعديل رخص البناء والقرارات المساحية الفورية'
                  : 'Instant issuance of building permits and cadastral decisions'}
              </p>
            </div>
            <div className="p-3">
              <div className="text-rose-700 font-extrabold text-lg mb-1">
                {language === 'ar' ? 'منصة سلامة' : 'Salamah Platform'}
              </div>
              <p className="text-xs text-slate-500">
                {language === 'ar'
                  ? 'اعتماد مخططات وتراخيص السلامة لدى الدفاع المدني'
                  : 'Official Civil Defense safety plans approval and certification'}
              </p>
            </div>
            <div className="p-3">
              <div className="text-amber-700 font-extrabold text-lg mb-1">
                {language === 'ar' ? 'كود البناء السعودي (SBC)' : 'Saudi Building Code (SBC)'}
              </div>
              <p className="text-xs text-slate-500">
                {language === 'ar'
                  ? 'مطابقة هندسية وإنشائية ومعمارية شاملة للكود الوطني'
                  : 'Comprehensive architectural and structural SBC code compliance'}
              </p>
            </div>
            <div className="p-3">
              <div className="text-slate-800 font-extrabold text-lg mb-1">
                {language === 'ar' ? 'الهيئة السعودية للمهندسين' : 'Saudi Council of Engineers'}
              </div>
              <p className="text-xs text-slate-500">
                {language === 'ar'
                  ? 'كوادر استشارية وهندسية مرخصة وذات خبرة طويلة'
                  : 'Licensed chartered engineering consultants with decades of practice'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

