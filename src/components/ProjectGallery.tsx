import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Layers, 
  Calendar, 
  Maximize2, 
  X, 
  MessageCircle, 
  Phone, 
  ArrowRight, 
  ArrowLeft,
  Filter,
  ExternalLink,
  Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface ProjectItem {
  id: string;
  titleAr: string;
  titleEn: string;
  category: 'arch' | 'civil' | 'safety' | 'commercial';
  categoryLabelAr: string;
  categoryLabelEn: string;
  locationAr: string;
  locationEn: string;
  areaAr: string;
  areaEn: string;
  year: string;
  image: string;
  shortDescAr: string;
  shortDescEn: string;
  fullDescAr: string;
  fullDescEn: string;
  clientTypeAr: string;
  clientTypeEn: string;
  scopeAr: string[];
  scopeEn: string[];
  standards: string[];
  highlightsAr: { label: string; value: string }[];
  highlightsEn: { label: string; value: string }[];
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'modern-villa-narjis',
    titleAr: 'فيلا سكنية فاخرة بنظام المودرن الحديث',
    titleEn: 'Luxury Contemporary Residence',
    category: 'arch',
    categoryLabelAr: 'تصميم معماري وفلل',
    categoryLabelEn: 'Architecture & Villas',
    locationAr: 'حي النرجس، شمال الرياض',
    locationEn: 'An Narjis Dist., North Riyadh',
    areaAr: '850 م²',
    areaEn: '850 sq.m',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    shortDescAr: 'تصميم معماري وإنشائي متكامل لفيلا عصرية تعتمد على الإضاءة الطبيعية والارتدادات الخضراء وفق اشتراطات كود البناء السعودي.',
    shortDescEn: 'Complete architectural & structural design for a luxury modern villa maximizing natural light and green setbacks under the Saudi Building Code.',
    fullDescAr: 'تم إعداد المخططات المعمارية التنفيذية مع دراسة الفراغات وتكامل الإضاءة الطبيعية واستغلال مساحات الأفنية الداخلية. شمل العمل إعداد المخطط الإنشائي الدقيق للبحور المفتوحة، وحسابات العزل الحراري المعتمدة، وإصدار رخصة البناء الفورية عبر منصة بلدي ومتابعة الإشراف الهندسي الميداني لكافة مراحل الصب.',
    fullDescEn: 'Comprehensive executive architectural blueprints optimizing interior spatial flow, open-span living areas, and passive solar shading. The engineering scope included SBC-compliant structural engineering calculations, thermal insulation approval, automated Balady building permit issuance, and periodic site inspection.',
    clientTypeAr: 'مالك خاص (سكني)',
    clientTypeEn: 'Private Client (Residential)',
    scopeAr: [
      'التصميم المعماري ثلاثي الأبعاد والمخططات التنفيذية',
      'التصميم الإنشائي المعتمد طبقاً لكود SBC 1101',
      'إصدار رخصة البناء عبر منصة بلدي التابعة لأمانة الرياض',
      'الإشراف الهندسي الميداني واستلام صبات القواعد والأسقف'
    ],
    scopeEn: [
      '3D Architectural concepts & full executive blueprints',
      'Structural calculations certified to Saudi Code SBC 1101',
      'Instant building permit issuance via Balady platform',
      'On-site structural stage inspection & pour sign-offs'
    ],
    standards: ['كود البناء السعودي SBC', 'منصة بلدي', 'عزل كفاءة الطاقة'],
    highlightsAr: [
      { label: 'المساحة المبنية', value: '850 م²' },
      { label: 'عدد الأدوار', value: 'أرضي + أول + ملحق' },
      { label: 'زمن الترخيص', value: 'أقل من 48 ساعة' }
    ],
    highlightsEn: [
      { label: 'Built Area', value: '850 sq.m' },
      { label: 'Floors', value: 'G + 1 + Penthouse' },
      { label: 'Permit Duration', value: '< 48 Hours' }
    ]
  },
  {
    id: 'commercial-business-plaza',
    titleAr: 'مجمع واحة الأعمال والمكاتب التجارية',
    titleEn: 'Al-Waha Commercial & Business Plaza',
    category: 'commercial',
    categoryLabelAr: 'مجمعات تجارية وإدارية',
    categoryLabelEn: 'Commercial & Corporate',
    locationAr: 'طريق الملك سلمان، الرياض',
    locationEn: 'King Salman Road, Riyadh',
    areaAr: '4,200 م²',
    areaEn: '4,200 sq.m',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    shortDescAr: 'تصميم معماري بواجهات زجاجية مزدوجة متطورة وحسابات أحمال إنشائية مع اعتماد مخططات سلامة الدفاع المدني.',
    shortDescEn: 'High-performance commercial plaza featuring structural double-glazed facades, wind load analysis, and Civil Defense fire safety permits.',
    fullDescAr: 'مشروع مجمع مكتبي وتجاري متعدد المعارض على واجهة طريق الملك سلمان الحيوية. تم تصميم الواجهات الزجاجية المقاومة للحرارة لتوفير كفاءة استهلاك الطاقة، مع تصميم الهيكل الإنشائي الخرساني بأحدث برامج النمذجة (ETABS). وتم اعتماد منظومة السلامة والوقاية من الحريق وتحديد مسالك الهروب عبر منصة سلامة المعتمدة.',
    fullDescEn: 'Landmark multi-tenant retail and corporate plaza fronting King Salman Road. Engineered for energy efficiency with high-performance curtain walls, finite element structural analysis, and complete Civil Defense emergency egress plan approval via the Salamah platform.',
    clientTypeAr: 'مطور عقاري تجاري',
    clientTypeEn: 'Commercial Real Estate Developer',
    scopeAr: [
      'تصميم الواجهات الخارجية والحلول البيئية المستدامة',
      'تصميم الهيكل الخرساني ومقاومة الأحمال الجانبية والرياح',
      'اعتماد مخططات السلامة ومكافحة الحريق (الدفاع المدني)',
      'دراسة مخارج ومسالك الهروب وفق كود NFPA 101'
    ],
    scopeEn: [
      'Architectural facade engineering & energy-saving envelope',
      'Structural design for dynamic wind & seismic load criteria',
      'Civil Defense fire protection certification via Salamah',
      'Life safety code NFPA 101 egress analysis'
    ],
    standards: ['كود SBC 201', 'منصة سلامة', 'NFPA 101 Life Safety'],
    highlightsAr: [
      { label: 'إجمالي المساحة', value: '4,200 م²' },
      { label: 'عدد المعارض', value: '18 معرض ومكتب' },
      { label: 'حالة المشروع', value: 'مرخص ومكتمل' }
    ],
    highlightsEn: [
      { label: 'Gross Area', value: '4,200 sq.m' },
      { label: 'Retail Units', value: '18 Offices & Showrooms' },
      { label: 'Status', value: 'Licensed & Delivered' }
    ]
  },
  {
    id: 'logistics-safety-warehouse',
    titleAr: 'مستودع لوجستي وتخزين بضائع عالي الخطورة',
    titleEn: 'High-Hazard Logistics & Cold Storage Facility',
    category: 'safety',
    categoryLabelAr: 'سلامة ودفاع مدني',
    categoryLabelEn: 'Fire Safety & Civil Defense',
    locationAr: 'المنطقة الصناعية (السلي)، الرياض',
    locationEn: 'Al-Sulay Logistics District, Riyadh',
    areaAr: '6,500 م²',
    areaEn: '6,500 sq.m',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    shortDescAr: 'تصميم واعتماد مخططات شبكات إطفاء الحريق بالمرشات التلقائية (ESFR) وتصريف الدخان للدفاع المدني.',
    shortDescEn: 'Hydraulic design and Civil Defense accreditation of high-density ESFR fire sprinkler networks and mechanical smoke venting.',
    fullDescAr: 'تم إعداد المخطط الهندسي المتخصص لشبكة مرشات الحريق من نوع ESFR المناسبة للمستودعات ذات الارتفاعات العالية والتخزين الرأسي. شملت الدراسة الحسابات الهيدروليكية لشبكة الأنابيب، حساب حجم خزان مياه الإطفاء، محطة المضخات (كهرباء + ديزل)، وتوزيع فتحات تصريف الدخان الطبيعية والميكانيكية مع استخراج ترخيص السلامة الفوري عبر منصة سلامة.',
    fullDescEn: 'Engineered high-hazard fire protection system utilizing Early Suppression Fast Response (ESFR) sprinkler arrays designed for tall ceiling storage. Includes full hydraulic calculations, dedicated fire water reservoir sizing, dual UL/FM fire pump stations, and automated smoke dampers.',
    clientTypeAr: 'شركة سلاسل إمداد ومستودعات',
    clientTypeEn: 'Supply Chain & Logistics Corporation',
    scopeAr: [
      'تصميم شبكة المرشات المائية الأوتوماتيكية بنظام ESFR',
      'الحسابات الهيدروليكية وخزان مياه الحريق والمضخات',
      'نظام الإنذار المبكر وكواشف اللهب والدخان الحساسة',
      'إصدار شهادة سلامة التركيبات المعتمدة للدفاع المدني'
    ],
    scopeEn: [
      'Complete ESFR ceiling-level sprinkler network engineering',
      'Hydraulic calculations, water storage tank & fire pumps',
      'Early warning beam smoke detectors & alarm interfaces',
      'Official Civil Defense installation certification issuance'
    ],
    standards: ['كود NFPA 13', 'كود NFPA 20', 'منصة سلامة للدفاع المدني'],
    highlightsAr: [
      { label: 'مساحة التخزين', value: '6,500 م²' },
      { label: 'سعة خزان الإطفاء', value: '250,000 لتر' },
      { label: 'الاعتماد', value: 'دفاع مدني فوري' }
    ],
    highlightsEn: [
      { label: 'Storage Footprint', value: '6,500 sq.m' },
      { label: 'Fire Water Tank', value: '250,000 Liters' },
      { label: 'Certification', value: 'Instant Civil Defense' }
    ]
  },
  {
    id: 'structural-supervision-rawdah',
    titleAr: 'إشراف هندسي وفحص سلامة إنشائية لمبنى سكني',
    titleEn: 'Structural Site Supervision & Concrete Quality Assurance',
    category: 'civil',
    categoryLabelAr: 'إنشائي وإشراف ميداني',
    categoryLabelEn: 'Structural & Site Supervision',
    locationAr: 'حي الروضة، شرق الرياض',
    locationEn: 'Ar Rawdah Dist., East Riyadh',
    areaAr: '1,650 م²',
    areaEn: '1,650 sq.m',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    shortDescAr: 'إشراف ميداني كامل لاستلام حديد التسليح والصبات الخرسانية وإصدار تقارير السلامة الإنشائية الدورية.',
    shortDescEn: 'Comprehensive on-site engineering supervision, reinforcement verification, concrete slump testing, and certified structural reports.',
    fullDescAr: 'قام مهندسو شركة ريمان بإجراء الزيارات الميدانية الإلزامية والاختيارية لكافة مراحل التنفيذ الإنشائي: استلام أبعاد الحفر وتأكيد تربة التأسيس، استلام تسليح القواعد والرقاب والميدات، فحص أوزان وشبكات تسليح الأسقف الهوردي والكمرات، ومتابعة اختبارات تكسير المكعبات الخرسانية في المختبر المعتمد بعد 7 و 28 يوماً لضمان أعلى متانة.',
    fullDescEn: 'Reeman field structural engineers executed rigorous inspection rounds across all construction milestones: foundation excavation verification, footing rebar schedules, post-tensioned / ribbed slab inspections, and monitoring laboratory cylinder compression tests after 7 and 28 curing days.',
    clientTypeAr: 'مستثمر عقاري محلي',
    clientTypeEn: 'Local Real Estate Investor',
    scopeAr: [
      'استلام حديد التسليح والنجارة للقواعد والميد والأعمدة',
      'فحص واختبار قوام الخرسانة وهبوط العينات بالموقع',
      'إعداد محاضر الاستلام الهندسية لكل مرحلة صب',
      'إصدار تقرير السلامة الإنشائية وشهادة إشغال المبنى'
    ],
    scopeEn: [
      'Rebar placement & formwork approval prior to pouring',
      'On-site concrete slump testing & temperature monitoring',
      'Detailed engineering inspection log sheets for each pour',
      'Structural safety compliance sign-off for occupancy'
    ],
    standards: ['كود البناء السعودي SBC 301-304', 'ASTM International', 'هيئة المهندسين'],
    highlightsAr: [
      { label: 'عدد مراحل الاستلام', value: '14 مرحلة صب' },
      { label: 'مقاومة الخرسانة', value: 'مطابقة 100%' },
      { label: 'الاعتماد', value: 'تقرير سلامة معتمد' }
    ],
    highlightsEn: [
      { label: 'Inspection Phases', value: '14 Pour Sign-Offs' },
      { label: 'Concrete Strength', value: '100% Passed' },
      { label: 'Accreditation', value: 'Certified Safety Report' }
    ]
  },
  {
    id: 'medical-specialty-clinic',
    titleAr: 'اعتماد سلامة ومخارج طوارئ مجمع عيادات تخصصية',
    titleEn: 'Specialty Healthcare Center Life Safety Compliance',
    category: 'safety',
    categoryLabelAr: 'سلامة ودفاع مدني',
    categoryLabelEn: 'Fire Safety & Civil Defense',
    locationAr: 'حي الصحافة، شمال الرياض',
    locationEn: 'As Sahafah Dist., North Riyadh',
    areaAr: '2,100 م²',
    areaEn: '2,100 sq.m',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    shortDescAr: 'مخططات إنذار وإطفاء حريق ودراسة مسالك الهروب والأبواب المقاومة للهب للمنشآت الطبية والصحية.',
    shortDescEn: 'Integrated healthcare life safety engineering, addressable fire alarm network, fire-rated doors, and barrier-free evacuation routes.',
    fullDescAr: 'يتطلب ترخيص المنشآت الطبية والصحية متطلبات دقيقة في تقسيم قطاعات الحريق (Fire Compartmentation) لحماية غرف المرضى والعمليات الصغرى. صممت شركة ريمان نظام إنذار الحريق الذكي المعنون المرتبط بغرفة التحكم المركزية، مع توفير أجهزة الإخلاء الصوتي، إنارة الطوارئ المضيئة، ومسارات خروج آمنة تتوافق تماماً مع كود الدفاع المدني.',
    fullDescEn: 'Medical facilities require stringent fire compartmentation to safeguard treatment and recovery suites. Reeman delivered an advanced addressable fire alarm system tied to emergency central monitoring, voice evacuation horns, photoluminescent egress markers, and fire-rated barrier assemblies fully approved by Civil Defense.',
    clientTypeAr: 'مجموعة طبية استثمارية',
    clientTypeEn: 'Healthcare Investment Group',
    scopeAr: [
      'تصميم نظام الإنذار الذكي المعنون والإخلاء الصوتي',
      'توزيع أبواب الحريق المقاومة للهب 90-120 دقيقة',
      'حساب أعداد ومسافات مسالك الهروب للمرضى والزوار',
      'استخراج ترخيص الدفاع المدني لمزاولة النشاط الطبي'
    ],
    scopeEn: [
      'Intelligent addressable fire alarm & voice evacuation matrix',
      '90-120 minute fire-rated door assemblies & hardware',
      'Travel distance calculations & accessible patient egress paths',
      'Civil Defense operational license approval for clinic opening'
    ],
    standards: ['كود SBC 801', 'كود NFPA 99 للمنشآت الطبية', 'منصة سلامة'],
    highlightsAr: [
      { label: 'المساحة الإجمالية', value: '2,100 م²' },
      { label: 'سعة المبنى', value: '280 شخصاً' },
      { label: 'زمن الإخلاء المحسوب', value: 'أقل من دقيقتين' }
    ],
    highlightsEn: [
      { label: 'Total Area', value: '2,100 sq.m' },
      { label: 'Occupancy Cap', value: '280 Persons' },
      { label: 'Evacuation Time', value: '< 2 Minutes' }
    ]
  },
  {
    id: 'corporate-office-headquarters',
    titleAr: 'مبنى إداري ومقر شركات استشارية واستثمارية',
    titleEn: 'Corporate Administrative HQ & Modern Offices',
    category: 'commercial',
    categoryLabelAr: 'مجمعات تجارية وإدارية',
    categoryLabelEn: 'Commercial & Corporate',
    locationAr: 'حي العليا، وسط الرياض',
    locationEn: 'Al Olaya Dist., Central Riyadh',
    areaAr: '3,800 م²',
    areaEn: '3,800 sq.m',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    shortDescAr: 'تصميم معماري للمساحات الإدارية المفتوحة ونظام إطفاء الغاز النظيف FM-200 لغرف الاتصالات والخوادم.',
    shortDescEn: 'Executive architectural space planning, acoustic engineering, and clean-agent FM-200 fire suppression for data server centers.',
    fullDescAr: 'مشروع إداري متطور لشركة استثمارية بالعليا؛ تضمن التصميم المعماري الداخلي والخارجي استغلال الإضاءة الطبيعية مع عزل صوتي متقدم. وتم تزويد مركز البيانات وغرف الخوادم بشبكة إطفاء غاز نظيف FM-200 بدون مياه لحماية الأجهزة الحساسة، مع توثيق كافة المخططات عبر كود البناء والدفاع المدني.',
    fullDescEn: 'A high-spec corporate headquarters project in the Olaya business corridor. The scope encompassed executive floor layouts, acoustic optimization, and a dedicated FM-200 waterless clean agent fire suppression system protecting mission-critical server environments, stamped and approved by Civil Defense.',
    clientTypeAr: 'شركة استثمارات قابضة',
    clientTypeEn: 'Holding & Investment Enterprise',
    scopeAr: [
      'التصميم المعماري للمكاتب التنفيذية وقاعات الاجتماعات',
      'نظام إطفاء الغاز النظيف FM-200 لغرف السيرفرات',
      'مخططات التكييف المركزي ومسارات الهواء ومكافحة الدخان',
      'اعتمادات الدفاع المدني ورخصة إشغال بلدية'
    ],
    scopeEn: [
      'Architectural space planning & executive conference halls',
      'FM-200 total flooding fire suppression for server rooms',
      'Central HVAC smoke damper integration & exhaust',
      'Civil Defense compliance & municipal occupancy license'
    ],
    standards: ['كود NFPA 2001', 'كود البناء السعودي SBC', 'منصة بلدي'],
    highlightsAr: [
      { label: 'المساحة الإجمالية', value: '3,800 م²' },
      { label: 'غرف السيرفرات', value: 'نظام FM-200 مستقل' },
      { label: 'الاعتماد', value: 'معتمد دفاع مدني وبلدي' }
    ],
    highlightsEn: [
      { label: 'Total Area', value: '3,800 sq.m' },
      { label: 'Server Rooms', value: 'FM-200 Clean Agent' },
      { label: 'Approval', value: 'Balady & Civil Defense' }
    ]
  },
  {
    id: 'central-fire-pump-network',
    titleAr: 'محطة مضخات الحريق وشبكة الإطفاء الهيدروليكية',
    titleEn: 'Central Fire Water Pumping Station & Hydrant Network',
    category: 'safety',
    categoryLabelAr: 'سلامة ودفاع مدني',
    categoryLabelEn: 'Fire Safety & Civil Defense',
    locationAr: 'مجمع مستودعات جنوب الرياض',
    locationEn: 'South Riyadh Logistics Hub',
    areaAr: 'شبكة تغطي 12,000 م²',
    areaEn: '12,000 sq.m Network',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    shortDescAr: 'تصميم غرفة مضخات حريق UL/FM (كهرباء + ديزل + جوكي) مع شبكة هيدرانت وصناديق إطفاء خارجية.',
    shortDescEn: 'Turnkey hydraulic design for UL/FM-listed dual fire pump station, external perimeter fire hydrants, and standpipe networks.',
    fullDescAr: 'تم تصميم محطة مضخات الحريق الرئيسية لتأمين مجمع مستودعات تجارية كبرى. اشتمل التصميم على مضخة ديزل احتياطية ومضخة كهربائية رئيسية مع مضخة تعويض ضغط (Jockey Pump)، مرتبطة بخزان مياه إطفاء بسعة 400 متر مكعب. تم اختبار الضغط الهيدروستاتيكي وتدفق المياه بالتعاون مع مندوبي الدفاع المدني وإصدار شهادة الفحص.',
    fullDescEn: 'Full-scale design and hydraulic sizing of a master fire pump room safeguarding a major warehouse park. Features electric duty and diesel standby centrifugal pumps paired with a jockey pump, supplied by a 400 m³ dedicated water tank, with witnessed hydrostatic flow test certificates signed by Civil Defense.',
    clientTypeAr: 'إدارة المدينة اللوجستية',
    clientTypeEn: 'Industrial Park Management',
    scopeAr: [
      'حسابات تدفق المياه وضغوط الشبكة الهيدروليكية',
      'تصميم غرفة المضخات ولوحات التحكم التلقائية (UL/FM)',
      'توزيع محابس عزل وصمامات عدم رجوع وشبكة هيدرانت',
      'فحص واختبار الضغط الهيدروستاتيكي المعتمد'
    ],
    scopeEn: [
      'Hydraulic flow rate and pipe friction loss calculations',
      'UL/FM certified electric & diesel fire pump station layout',
      'External fire hydrant loops and indicator post valves',
      'Witnessed hydrostatic pressure test certification'
    ],
    standards: ['كود NFPA 20', 'كود NFPA 24', 'منصة سلامة للدفاع المدني'],
    highlightsAr: [
      { label: 'سعة المضخة', value: '1,000 جالون/دقيقة' },
      { label: 'سعة الخزان', value: '400,000 لتر' },
      { label: 'المطابقة', value: 'معايير UL/FM العالمية' }
    ],
    highlightsEn: [
      { label: 'Pump Flow', value: '1,000 GPM' },
      { label: 'Tank Volume', value: '400,000 Liters' },
      { label: 'Standard', value: 'Global UL/FM Rated' }
    ]
  },
  {
    id: 'residential-commercial-tower',
    titleAr: 'عمارة سكنية وتجارية متعددة الاستخدامات',
    titleEn: 'Mixed-Use Commercial & Residential Building',
    category: 'arch',
    categoryLabelAr: 'تصميم معماري وفلل',
    categoryLabelEn: 'Architecture & Villas',
    locationAr: 'حي الروضة / شارع خريص، الرياض',
    locationEn: 'Ar Rawdah / Khurais Road, Riyadh',
    areaAr: '2,800 م²',
    areaEn: '2,800 sq.m',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    shortDescAr: 'تصميم معماري وإنشائي لعمارة تضم معارض تجارية أرضية وشقق سكنية عصرية مع مواقف سفلية منظمة.',
    shortDescEn: 'Architectural & structural engineering for a mixed-use development featuring street-level retail showrooms, luxury apartments, and basement parking.',
    fullDescAr: 'مشروع متميز في قلب حي الروضة بالرياض، يدمج النشاط التجاري الحيوي في الدور الأرضي مع شقق سكنية عائلية هادئة في الأدوار العليا. شمل دور شركة ريمان إعداد التصاميم المعمارية والإنشائية، وحسابات تصريف مياه الأمطار والتهوية الميكانيكية للمواقف السفلية، واستخراج رخص البناء والفرز العقاري عبر منصة بلدي.',
    fullDescEn: 'Urban mixed-use building in the vibrant Ar Rawdah district, integrating street-level commercial storefronts with quiet residential suites above. Reeman delivered structural foundation designs, basement mechanical ventilation and rainwater sump systems, along with automated Balady permits and unit subdivision deeds.',
    clientTypeAr: 'مستثمر عقاري محلي',
    clientTypeEn: 'Local Property Developer',
    scopeAr: [
      'التصميم المعماري لواجهات المبنى والمحلات والشقق',
      'التصميم الإنشائي للبحور الواسعة وجدران استنادية للبدروم',
      'إصدار رخصة البناء والفرز العقاري عبر منصة بلدي',
      'مخطط السلامة وأنظمة مكافحة الحريق المعتمدة'
    ],
    scopeEn: [
      'Architectural elevation design, retail fronts & residential units',
      'Basement retaining wall structural engineering & load transfers',
      'Balady building permits & property deed subdivision',
      'Civil Defense certified fire detection & sprinkler coverage'
    ],
    standards: ['كود البناء السعودي SBC', 'منصة بلدي', 'منصة سلامة'],
    highlightsAr: [
      { label: 'عدد الوحدات', value: '14 شقة + 4 معارض' },
      { label: 'المواقف', value: 'بدروم سفلي متكامل' },
      { label: 'الترخيص', value: 'بلدي ودفاع مدني' }
    ],
    highlightsEn: [
      { label: 'Units', value: '14 Suites + 4 Retail' },
      { label: 'Parking', value: 'Full Underground Basement' },
      { label: 'Licensing', value: 'Balady & Civil Defense' }
    ]
  }
];

export const ProjectGallery: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'arch' | 'civil' | 'safety' | 'commercial'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter projects
  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const filterButtons = [
    { id: 'all', label: t('gallery_filter_all'), count: PROJECTS_DATA.length },
    { id: 'arch', label: t('gallery_filter_arch'), count: PROJECTS_DATA.filter(p => p.category === 'arch').length },
    { id: 'safety', label: t('gallery_filter_safety'), count: PROJECTS_DATA.filter(p => p.category === 'safety').length },
    { id: 'civil', label: t('gallery_filter_civil'), count: PROJECTS_DATA.filter(p => p.category === 'civil').length },
    { id: 'commercial', label: t('gallery_filter_commercial'), count: PROJECTS_DATA.filter(p => p.category === 'commercial').length },
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-100/70 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-900 text-xs font-bold border border-sky-200">
            <Building2 className="w-3.5 h-3.5 text-sky-700" />
            <span>{t('gallery_badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === 'ar' ? (
              <>
                نماذج من مشاريعنا <span className="text-sky-700">المعمارية</span> واستشارات <span className="text-rose-700">السلامة</span> بالرياض
              </>
            ) : (
              <>
                Showcase of Our <span className="text-sky-700">Architectural</span> & <span className="text-rose-700">Safety</span> Projects in Riyadh
              </>
            )}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('gallery_desc')}
          </p>

          {/* Trust strip */}
          <div className="pt-2 inline-flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 font-semibold">
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              {language === 'ar' ? 'معتمد بكود البناء السعودي SBC' : 'Saudi Building Code (SBC) Certified'}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
              {language === 'ar' ? 'اعتمادات الدفاع المدني عبر منصة سلامة' : 'Civil Defense Accredited via Salamah'}
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          {filterButtons.map((btn) => {
            const isActive = activeCategory === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setActiveCategory(btn.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span>{btn.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive ? 'bg-slate-700 text-amber-300' : 'bg-slate-100 text-slate-500'
                }`}>
                  {btn.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => {
            const title = language === 'ar' ? project.titleAr : project.titleEn;
            const categoryLabel = language === 'ar' ? project.categoryLabelAr : project.categoryLabelEn;
            const location = language === 'ar' ? project.locationAr : project.locationEn;
            const shortDesc = language === 'ar' ? project.shortDescAr : project.shortDescEn;
            const area = language === 'ar' ? project.areaAr : project.areaEn;

            const categoryTheme = 
              project.category === 'safety'
                ? { badge: 'bg-rose-50 text-rose-700 border-rose-200', dot: 'bg-rose-500' }
                : project.category === 'commercial'
                ? { badge: 'bg-indigo-50 text-indigo-700 border-indigo-200', dot: 'bg-indigo-500' }
                : project.category === 'civil'
                ? { badge: 'bg-amber-50 text-amber-800 border-amber-200', dot: 'bg-amber-500' }
                : { badge: 'bg-sky-50 text-sky-800 border-sky-200', dot: 'bg-sky-500' };

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Image Container with Zoom hover effect */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                    <img
                      src={project.image}
                      alt={title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

                    {/* Top Badges */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border shadow-xs backdrop-blur-md ${categoryTheme.badge}`}>
                        {categoryLabel}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-md">
                        {project.year}
                      </span>
                    </div>

                    {/* Bottom overlay with location & area */}
                    <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-1 font-medium truncate drop-shadow-sm">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span className="truncate">{location}</span>
                      </div>
                      <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md font-mono text-[11px] flex-shrink-0">
                        {area}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-1">
                      {title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {shortDesc}
                    </p>

                    {/* Standards Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.standards.slice(0, 2).map((std, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                        >
                          {std}
                        </span>
                      ))}
                      {project.standards.length > 2 && (
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-slate-50 text-slate-400">
                          +{project.standards.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-700 group-hover:text-sky-800 flex items-center gap-1">
                    <span>{t('gallery_view_project')}</span>
                    {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-sky-50 group-hover:border-sky-300 group-hover:text-sky-700 transition-all shadow-2xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Custom Project Consultations */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
          <div className="space-y-2 text-center md:text-right max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>
                {language === 'ar' ? 'فريق هندسي استشاري معتمد بالرياض' : 'Certified Engineering Consultants in Riyadh'}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {language === 'ar' ? 'هل لديك مشروع سكني أو تجاري أو مخطط سلامة بالرياض؟' : 'Have a Residential, Commercial or Safety Project in Riyadh?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {language === 'ar' 
                ? 'فريق شركة ريمان جاهز لزيارة موقعك أو استقبالك في مكتبنا بحي الروضة لتقديم استشارة أولية مجانية ودراسة متطلبات كود البناء والدفاع المدني.'
                : 'Reeman’s engineering team is ready to visit your site or welcome you at our Ar Rawdah office to discuss your project requirements and building code compliance.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full md:w-auto">
            <a
              href="https://wa.me/966559113990?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9%20%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%AC%D8%AF%D9%8A%D8%AF%20%D9%85%D8%B9%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%B1%D9%8A%D9%85%D8%A7%D9%86"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{language === 'ar' ? 'استشر المهندس عبر الواتساب' : 'Chat with Consultant on WhatsApp'}</span>
            </a>

            <a
              href="tel:0559113990"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all border border-slate-700"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>0559113990</span>
            </a>
          </div>
        </div>

      </div>

      {/* Project Details Modal / Lightbox */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {/* Modal Header Bar with Close Button */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  selectedProject.category === 'safety'
                    ? 'bg-rose-50 text-rose-700 border-rose-200'
                    : selectedProject.category === 'civil'
                    ? 'bg-amber-50 text-amber-800 border-amber-200'
                    : selectedProject.category === 'commercial'
                    ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                    : 'bg-sky-50 text-sky-800 border-sky-200'
                }`}>
                  {language === 'ar' ? selectedProject.categoryLabelAr : selectedProject.categoryLabelEn}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {selectedProject.year}
                </span>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                title={t('gallery_close_modal')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Image Showcase */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-slate-900 border border-slate-200">
                <img
                  src={selectedProject.image}
                  alt={language === 'ar' ? selectedProject.titleAr : selectedProject.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>{language === 'ar' ? selectedProject.locationAr : selectedProject.locationEn}</span>
                  </div>
                  <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-mono">
                    {language === 'ar' ? selectedProject.areaAr : selectedProject.areaEn}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {language === 'ar' ? selectedProject.titleAr : selectedProject.titleEn}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {language === 'ar' ? selectedProject.fullDescAr : selectedProject.fullDescEn}
                </p>
              </div>

              {/* Quick Specs Bento Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div>
                  <span className="text-[11px] text-slate-500 block">
                    {language === 'ar' ? 'فئة العميل' : 'Client Profile'}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {language === 'ar' ? selectedProject.clientTypeAr : selectedProject.clientTypeEn}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">
                    {language === 'ar' ? 'المساحة الإجمالية' : 'Total Area'}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono">
                    {language === 'ar' ? selectedProject.areaAr : selectedProject.areaEn}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">
                    {language === 'ar' ? 'موقع المشروع' : 'Location'}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 truncate block">
                    {language === 'ar' ? selectedProject.locationAr : selectedProject.locationEn}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">
                    {language === 'ar' ? 'سنة الإنجاز' : 'Year'}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono">
                    {selectedProject.year}
                  </span>
                </div>
              </div>

              {/* Engineering Scope Delivered */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-700" />
                  <span>
                    {language === 'ar' ? 'نطاق الخدمات الهندسية المنفذة في المشروع:' : 'Engineering Scope Delivered by Reeman:'}
                  </span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(language === 'ar' ? selectedProject.scopeAr : selectedProject.scopeEn).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights & Standards */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500">
                  {language === 'ar' ? 'الأكواد والاعتمادات الرسمية:' : 'Accreditations & Standard Codes:'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.standards.map((std, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-sky-50 text-sky-800 text-xs font-bold border border-sky-200"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons in Modal */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`https://wa.me/966559113990?text=${encodeURIComponent(
                    language === 'ar'
                      ? `السلام عليكم، أود الاستفسار وطلب استشارة هندسية لمشروع مماثل لـ "${selectedProject.titleAr}" الموضح في معرض أعمالكم.`
                      : `Hello, I would like to inquire about an engineering consultation for a project similar to "${selectedProject.titleEn}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('gallery_request_similar')}</span>
                </a>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <a
                    href="tel:0559113990"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-300 text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all"
                    dir="ltr"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>0559113990</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    {t('gallery_close_modal')}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
