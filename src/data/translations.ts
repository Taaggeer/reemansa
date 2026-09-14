export interface LocalizedService {
  id: string;
  category: 'arch' | 'civil' | 'safety';
  categoryName: { ar: string; en: string };
  title: { ar: string; en: string };
  summary: { ar: string; en: string };
  features: { ar: string[]; en: string[] };
  accentColor: string;
  badge: { ar: string; en: string };
  deliverables?: { ar: string[]; en: string[] };
}

export const localizedServices: LocalizedService[] = [
  // 1. Architecture
  {
    id: 'arch-1',
    category: 'arch',
    categoryName: { ar: 'الهندسة المعمارية', en: 'Architectural Engineering' },
    title: { ar: 'التصميم المعماري الإبداعي ورخص البناء', en: 'Creative Architectural Design & Building Permits' },
    summary: {
      ar: 'تصميم مبانٍ سكنية وتجارية وإدارية حديثة متوافقة مع كود البناء السعودي وكود وادي حنيفة والهوية السلمانية بالرياض.',
      en: 'Modern residential, commercial, and corporate architectural design compliant with the Saudi Building Code (SBC), Wadi Hanifah code, and Salmani Architectural Identity in Riyadh.',
    },
    features: {
      ar: [
        'تصميم الفلل السكنية والقصور والمجمعات السكنية',
        'تصميم المباني التجارية والمكتبية ومراكز الأعمال',
        'استخراج رخص البناء المعتمدة عبر منصة بلدي',
        'مخططات معمارية تنفيذية تفصيلية متكاملة'
      ],
      en: [
        'Luxury residential villas, palaces & housing compounds',
        'Commercial hubs, corporate office buildings & plazas',
        'Certified building permits issuance via Balady platform',
        'Comprehensive full-set execution blueprints & drafting'
      ]
    },
    accentColor: 'text-sky-600',
    badge: { ar: 'منصة بلدي', en: 'Balady Platform' },
    deliverables: {
      ar: [
        'المساقط الأفقية التفصيلية لجميع الأدوار والأسطح',
        'الواجهات الأربعة مع جداول التشطيبات والأبعاد',
        'المقاطع الرأسية المعمارية وتفاصيل السلالم والمصاعد',
        'مناظير ولقطات ثلاثية الأبعاد (3D Renders) واقعية'
      ],
      en: [
        'Detailed floor plans for all levels and roof decks',
        'Four architectural elevations with materials & finishing specs',
        'Vertical sections, staircase details & elevator shaft drawings',
        'High-resolution realistic 3D exterior visualization renders'
      ]
    }
  },
  {
    id: 'arch-2',
    category: 'arch',
    categoryName: { ar: 'الهندسة المعمارية', en: 'Architectural Engineering' },
    title: { ar: 'التصميم الداخلي وتنسيق المواقع (Interior & Landscape)', en: 'Interior Architecture & Landscape Design' },
    summary: {
      ar: 'حلول تصميم داخلي عصرية توظف المساحات بذكاء، مع تناغم فريد بين الإضاءة والخامات والحدائق الخارجية.',
      en: 'Sophisticated interior architecture optimizing spatial flow, paired with bespoke lighting, premium finishes, and outdoor landscape harmony.',
    },
    features: {
      ar: [
        'توزيع الفراغات والأثاث وفق مقاييس مريحة وعصرية',
        'لوحات اختيار المواد والألوان والتشطيبات والخامات',
        'تصميم حدائق وممرات ومسطحات خضراء (Landscape)',
        'مخططات تنفيذية للإضاءة والأسقف الجبسية والديكور'
      ],
      en: [
        'Ergonomic spatial planning and contemporary furniture layouts',
        'Curated material mood boards, color palettes & finishes',
        'Outdoor gardens, pathways & modern landscape architecture',
        'Detailed ceiling gypsum, lighting circuits & joinery drawings'
      ]
    },
    accentColor: 'text-sky-600',
    badge: { ar: 'تصميم عصري', en: 'Modern Design' }
  },
  {
    id: 'arch-3',
    category: 'arch',
    categoryName: { ar: 'الهندسة المعمارية', en: 'Architectural Engineering' },
    title: { ar: 'تطوير وتحديث الواجهات وإعادة التأهيل', en: 'Facade Renovation & Architectural Modernization' },
    summary: {
      ar: 'تحديث الواجهات القديمة للمباني القائمة وتحويلها لواجهات مودرن وفخمة تزيد من القيمة الاستثمارية والجمالية.',
      en: 'Transforming existing older building facades into modern, high-value architectural facades with optimal thermal and solar shading.',
    },
    features: {
      ar: [
        'معالجة الواجهات الخارجية بخامات حديثة وعازلة',
        'دراسات تظليل وحماية من حرارة الشمس بالرياض',
        'تصميم واجهات المحلات والشركات طبقاً لاشتراطات الأمانة',
        'تقديم لقطات ثلاثية الأبعاد (3D Renders) واقعية'
      ],
      en: [
        'Cladding treatment with modern insulated architectural panels',
        'Solar heat-gain reduction and shading studies for Riyadh climate',
        'Commercial storefronts in compliance with Municipality standards',
        'Photorealistic 3D daytime and night illumination simulations'
      ]
    },
    accentColor: 'text-sky-600',
    badge: { ar: '3D واقعي', en: 'Realistic 3D' }
  },

  // 2. Civil & Structural
  {
    id: 'civil-1',
    category: 'civil',
    categoryName: { ar: 'الهندسة المدنية والإنشائية', en: 'Civil & Structural Engineering' },
    title: { ar: 'التصميم الإنشائي وفق كود البناء السعودي (SBC)', en: 'Structural Engineering Compliant with SBC' },
    summary: {
      ar: 'حسابات إنشائية دقيقة تضمن أقصى درجات الأمان الإنشائي للمباني مع تحسين واقتصار تكاليف حديد التسليح والخرسانة.',
      en: 'Rigorous structural engineering computations ensuring absolute building safety while optimizing reinforced concrete and steel consumption.',
    },
    features: {
      ar: [
        'تصميم القواعد والأساسات واللبشة والميد الأرضية',
        'تصميم الأعمدة والجسور والأسقف (هردي، فلات سلاب، مصمت)',
        'تحليل إنشائي للأحمال الحية والميتة والرياح والزلازل',
        'جداول تسليح تفصيلية معتمدة قابلة للتنفيذ السلس'
      ],
      en: [
        'Deep & shallow foundation design, raft foundations & ground beams',
        'Reinforced columns, beams, flat slabs & waffle slabs engineering',
        'Finite element structural analysis for gravity, wind & seismic loads',
        'Certified bar-bending schedules ready for direct site implementation'
      ]
    },
    accentColor: 'text-amber-600',
    badge: { ar: 'كود SBC', en: 'SBC Certified' }
  },
  {
    id: 'civil-2',
    category: 'civil',
    categoryName: { ar: 'الهندسة المدنية والإنشائية', en: 'Civil & Structural Engineering' },
    title: { ar: 'الإشراف الهندسي الميداني واستلام مراحل البناء', en: 'Field Site Supervision & Construction Inspections' },
    summary: {
      ar: 'إشراف مباشر من مهندسين معتمدين لاستلام مراحل البناء من الحفر حتى التشطيب وإصدار تقارير هندسية معتمدة.',
      en: 'Hands-on site supervision by licensed structural engineers, validating all stages from excavation to concrete pouring and milestone sign-offs.',
    },
    features: {
      ar: [
        'استلام حديد التسليح والنجارة قبل صب الخرسانة',
        'فحص واختبار مقاومة الخرسانة ومطابقتها للمواصفات',
        'إصدار محاضر الاستلام الرسمية لكل مرحلة إنشائية',
        'متابعة مقاول التنفيذ لضمان مطابقة المخططات المعتمدة'
      ],
      en: [
        'Rebar placement and formwork inspection prior to each pour',
        'Slump test verification and compressive concrete strength checks',
        'Official engineering inspection sign-off sheets per phase',
        'Continuous contractor oversight ensuring blueprint compliance'
      ]
    },
    accentColor: 'text-amber-600',
    badge: { ar: 'إشراف موقعي', en: 'Site Supervision' }
  },
  {
    id: 'civil-3',
    category: 'civil',
    categoryName: { ar: 'الهندسة المدنية والإنشائية', en: 'Civil & Structural Engineering' },
    title: { ar: 'تقارير السلامة الإنشائية وفحص المباني القائمة', en: 'Structural Integrity Audits & Existing Building Surveys' },
    summary: {
      ar: 'معاينة المباني القائمة وفحص التشققات والشروخ وإصدار تقارير السلامة الإنشائية المعتمدة للبلديات وجهات التمويل.',
      en: 'Thorough structural audit of existing buildings, diagnosing cracks, foundation settlement, and issuing certified condition reports.',
    },
    features: {
      ar: [
        'فحص ومعاينة الشروخ والتصدعات وتحديد أسبابها',
        'إصدار تقرير السلامة الإنشائية المعتمد لإشغال المبنى',
        'مخططات وحلول تدعيم الأعمدة والأساسات المتضررة',
        'تقارير الفحص الفني لشراء العقارات والمباني التجارية'
      ],
      en: [
        'Comprehensive crack inspection & structural vulnerability assessment',
        'Certified structural safety reports for certificate of occupancy',
        'Retrofitting and underpinning engineering remediation designs',
        'Technical due-diligence reports for commercial acquisitions'
      ]
    },
    accentColor: 'text-amber-600',
    badge: { ar: 'تقارير معتمدة', en: 'Certified Reports' }
  },

  // 3. Safety & Civil Defense
  {
    id: 'safety-1',
    category: 'safety',
    categoryName: { ar: 'استشارات السلامة والدفاع المدني', en: 'Safety & Civil Defense Consultancy' },
    title: { ar: 'اعتماد مخططات السلامة عبر منصة سلامة', en: 'Civil Defense Fire Safety Plan Approvals (Salamah Platform)' },
    summary: {
      ar: 'إعداد ومراجعة واعتماد مخططات الوقاية والحماية من الحريق لكافة المنشآت والحصول على موافقة الدفاع المدني الفورية.',
      en: 'Preparation, engineering drafting, and official approval of fire safety plans on the Salamah portal for rapid Civil Defense licensing.',
    },
    features: {
      ar: [
        'اعتماد مخططات المستودعات والهناجر والمصانع بالرياض',
        'اعتماد مخططات المجمعات التجارية والمطاعم والكافيهات',
        'اعتماد مباني المكاتب والمباني السكنية متعددة الأدوار',
        'رفع المخططات وتتبع المعاملة حتى صدور الرخصة'
      ],
      en: [
        'Warehouses, logistics depots & industrial plant approvals in Riyadh',
        'Commercial centers, hospitality, restaurants & cafes compliance',
        'Corporate office towers and multi-story residential properties',
        'Full submission lifecycle management until permit release'
      ]
    },
    accentColor: 'text-rose-600',
    badge: { ar: 'منصة سلامة', en: 'Salamah Platform' }
  },
  {
    id: 'safety-2',
    category: 'safety',
    categoryName: { ar: 'استشارات السلامة والدفاع المدني', en: 'Safety & Civil Defense Consultancy' },
    title: { ar: 'تصميم أنظمة مكافحة الحريق والرش الآلي', en: 'Fire Fighting, Sprinklers & Hydraulic Calculations' },
    summary: {
      ar: 'تصميم شبكات إطفاء متطورة تشمل شبكات الرشاشات المائية وصناديق الحريق ومضخات الإطفاء طبقاً لمعايير NFPA والدفاع المدني.',
      en: 'Advanced fire suppression engineering: automatic wet/dry sprinklers, standpipe cabinets, and fire pumps sized via NFPA & SBC calculations.',
    },
    features: {
      ar: [
        'حسابات هيدروليكية دقيقة لمضخات وخزانات الحريق',
        'تصميم شبكات الرش الآلي (Fire Sprinkler Systems)',
        'تصميم أنظمة إطفاء بالغازات النظيفة (FM200, Novec, CO2)',
        'أنظمة الإطفاء الرغوي للمستودعات والمواد القابلة للاشتعال'
      ],
      en: [
        'Hydraulic pressure loss and water reservoir sizing calculations',
        'Automatic sprinkler system grid designs (wet, dry, pre-action)',
        'Clean agent gas suppression systems (FM200, Novec 1230, CO2)',
        'Foam deluge suppression for hazardous chemical & fuel storage'
      ]
    },
    accentColor: 'text-rose-600',
    badge: { ar: 'معايير NFPA', en: 'NFPA Standards' }
  },
  {
    id: 'safety-3',
    category: 'safety',
    categoryName: { ar: 'استشارات السلامة والدفاع المدني', en: 'Safety & Civil Defense Consultancy' },
    title: { ar: 'أنظمة الإنذار المبكر ومسالك الهروب والطوارئ', en: 'Fire Alarm, Smoke Control & Life Safety Egress' },
    summary: {
      ar: 'تخطيط مسالك الهروب وأبواب الطوارئ وتصميم شبكات الإنذار المعنونة، والإنارة التوجيهية وأنظمة سحب الدخان.',
      en: 'Comprehensive life safety design: emergency exit corridors, certified fire doors, addressable alarms, egress illumination & smoke evacuation.',
    },
    features: {
      ar: [
        'تصميم شبكات الإنذار التلقائي المعنونة (Addressable Fire Alarm)',
        'تحديد مسالك الهروب وعرض المخارج وأبواب الطوارئ المقاومة للحريق',
        'تصميم أنظمة سحب الدخان والتهوية الميكانيكية للمستودعات',
        'مخططات إضاءة الطوارئ واللوحات الإرشادية المضيئة'
      ],
      en: [
        'Addressable intelligent fire detection & voice evacuation alarms',
        'Egress capacity calculations and UL/FM fire-rated emergency doors',
        'Mechanical smoke management, exhaust fans & makeup air design',
        'Photoluminescent exit directional signage and emergency battery units'
      ]
    },
    accentColor: 'text-rose-600',
    badge: { ar: 'حماية الأرواح', en: 'Life Safety' }
  }
];

export const localizedSafetySectors = [
  {
    title: { ar: 'المستودعات والهناجر التخزينية', en: 'Warehouses & Logistics Depots' },
    note: {
      ar: 'تصميم شبكات الإطفاء والرش الآلي والتهوية الميكانيكية وتصريف الدخان',
      en: 'Fire sprinkler networks, high-pile storage protection & smoke ventilation',
    },
  },
  {
    title: { ar: 'المحلات والأنشطة التجارية والمطاعم', en: 'Commercial Stores & Dining Venues' },
    note: {
      ar: 'مخططات السلامة المعتمدة لمنصة سلامة وتراخيص بلدي السريعة',
      en: 'Approved safety blueprints for Salamah platform & rapid commercial permits',
    },
  },
  {
    title: { ar: 'المصانع والمنشآت الصناعية', en: 'Factories & Industrial Plants' },
    note: {
      ar: 'دراسات تقييم المخاطر وأنظمة إطفاء الغازات ونظم إنذار متطورة',
      en: 'Hazard risk assessments, specialized gas suppression & zoned detection',
    },
  },
  {
    title: { ar: 'المباني السكنية والتجارية والمكاتب', en: 'Corporate Towers & Residential Buildings' },
    note: {
      ar: 'مخارج الطوارئ ومسالك الهروب وأبواب مقاومة للحريق وشبكات الرشاشات',
      en: 'Emergency fire exits, smoke-proof stairs, fire doors & sprinkler grids',
    },
  },
];

export const localizedSafetySteps = [
  {
    num: '01',
    title: { ar: 'دراسة الموقع ومراجعة المخططات', en: 'Site Survey & Requirement Audit' },
    desc: {
      ar: 'معاينة المنشأة وتحليل المتطلبات طبقاً لنوع النشاط واشتراطات الدفاع المدني.',
      en: 'Comprehensive facility audit checking occupancy class and Civil Defense criteria.',
    },
  },
  {
    num: '02',
    title: { ar: 'إعداد وتصميم المخططات الفنية', en: 'Engineering Drafting & Hydraulic Calculations' },
    desc: {
      ar: 'رسم مخططات أنظمة الإنذار والإطفاء ومسالك الهروب وحسابات هيدروليكية دقيقة.',
      en: 'Drafting fire alarm, sprinkler layout, smoke control, and hydraulic calculations.',
    },
  },
  {
    num: '03',
    title: { ar: 'الاعتماد الفوري عبر منصة سلامة', en: 'Instant Salamah Platform Approval' },
    desc: {
      ar: 'رفع المعاملة كجهة استشارية معتمدة للحصول على الموافقة الرسمية بسرعة وبدون تأخير.',
      en: 'Submitting dossiers via certified consultant credentials for prompt official sign-off.',
    },
  },
  {
    num: '04',
    title: { ar: 'شهادات الإنجاز والتقارير الفنية', en: 'Completion Certificates & Inspection Reports' },
    desc: {
      ar: 'إصدار التقرير الفني النهائي وشهادة تركيب وتفتيش الأنظمة لإصدار رخصة التشغيل.',
      en: 'Issuing the final inspection certificate and compliance dossier for operation permits.',
    },
  },
];
