import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  BookOpen, 
  ChevronRight, 
  ChevronLeft, 
  Maximize2, 
  Minimize2, 
  Download, 
  Share2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  List, 
  X, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Compass, 
  FileCheck, 
  Sparkles, 
  ExternalLink,
  MapPin,
  Layers,
  Award,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Profile Page Type
export interface ProfilePage {
  pageNumber: number;
  sectionId: string;
  categoryAr: string;
  categoryEn: string;
  titleAr: string;
  titleEn: string;
  subtitleAr?: string;
  subtitleEn?: string;
  theme: 'dark' | 'gold' | 'light' | 'blueprint';
  content: React.ReactNode;
}

export const CompanyProfileViewer: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showToc, setShowToc] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const viewerContainerRef = useRef<HTMLDivElement>(null);

  const totalPages = 29;

  // Jump to specific page
  const goToPage = (num: number) => {
    if (num >= 1 && num <= totalPages) {
      setCurrentPage(num);
      setShowToc(false);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (isRTL) prevPage();
        else nextPage();
      } else if (e.key === 'ArrowLeft') {
        if (isRTL) nextPage();
        else prevPage();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isFullscreen, isRTL]);

  // Share handler
  const handleShare = () => {
    const url = window.location.origin + '#company-profile';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Print handler
  const handlePrint = () => {
    window.print();
  };

  // Quick Chapters / Table of Contents entries
  const chapters = [
    { page: 1, titleAr: 'الغلاف الرسمي للشركة', titleEn: 'Official Front Cover', icon: BookOpen },
    { page: 2, titleAr: 'رؤية المملكة 2030 والمقدمة', titleEn: 'Vision 2030 & Intro', icon: Award },
    { page: 3, titleAr: 'فهرس المحتويات', titleEn: 'Table of Contents', icon: List },
    { page: 4, titleAr: 'الرؤية، الرسالة، والأهداف', titleEn: 'Vision, Mission & Goals', icon: Compass },
    { page: 5, titleAr: 'خدماتنا الاستشارية المتكاملة', titleEn: 'Comprehensive Services', icon: Layers },
    { page: 6, titleAr: 'قسم التصميم المعماري والإنشائي', titleEn: 'Architectural & Engineering Design', icon: Building2 },
    { page: 7, titleAr: 'قسم التصميم الداخلي والديكور', titleEn: 'Interior Design & Decore', icon: Sparkles },
    { page: 8, titleAr: 'قسم التخطيط والتطوير العمراني', titleEn: 'Urban Planning', icon: MapPin },
    { page: 9, titleAr: 'الأعمال المساحية ونظم GIS', titleEn: 'Surveying Works & GIS', icon: Compass },
    { page: 10, titleAr: 'الإشراف وإدارة المشاريع', titleEn: 'Supervision & Project Management', icon: ShieldCheck },
    { page: 11, titleAr: 'تنسيق المواقع والحدائق (لاندسكيب)', titleEn: 'Landscaping & Gardens', icon: Sparkles },
    { page: 12, titleAr: 'حساب وحصر الكميات', titleEn: 'Account of Amounts (BOQ)', icon: FileCheck },
    { page: 13, titleAr: 'الرخص الفنية وتراخيص البناء', titleEn: 'Artistic Licenses & Permits', icon: FileCheck },
    { page: 14, titleAr: 'مشاريعنا: فيلا 01 المودرن', titleEn: 'Projects: Modern Villa 01', icon: Building2 },
    { page: 15, titleAr: 'مشاريعنا: الديكور والمطابخ والماستر', titleEn: 'Projects: Luxury Decore & Kitchens', icon: Sparkles },
    { page: 16, titleAr: 'مشاريعنا: اللاندسكيب والمدافئ المائية', titleEn: 'Projects: Landscape & Firepits', icon: Sparkles },
    { page: 17, titleAr: 'مشاريعنا: المجمعات والمولات التجارية', titleEn: 'Projects: Commercial Shopping Plaza', icon: Building2 },
    { page: 18, titleAr: 'مشاريعنا: المعارض والمحلات التجارية', titleEn: 'Projects: Commercial Showrooms', icon: Building2 },
    { page: 19, titleAr: 'الدفاع المدني: فندق دبل تري المصيف', titleEn: 'Civil Defense: DoubleTree Hotel', icon: ShieldCheck },
    { page: 20, titleAr: 'الدفاع المدني: فندق نوفوتيل والرومانسية', titleEn: 'Civil Defense: Novotel & Al Romansiah', icon: ShieldCheck },
    { page: 21, titleAr: 'قسم الرخص: أبراج الملك خالد', titleEn: 'Licensing: King Khalid Towers', icon: Building2 },
    { page: 22, titleAr: 'الأعمال المعمارية: مستودعات ومصانع', titleEn: 'Architectural: Warehouses & Factories', icon: Building2 },
    { page: 23, titleAr: 'مستودعات وهناجر صناعية كبرى', titleEn: 'Industrial Warehouses & Hangars', icon: Building2 },
    { page: 24, titleAr: 'الإشراف على التنفيذ: المباني السكنية', titleEn: 'Supervision: Residential Buildings', icon: ShieldCheck },
    { page: 25, titleAr: 'الإشراف على التنفيذ: شقق التمليك', titleEn: 'Supervision: Ownership Apartments', icon: Building2 },
    { page: 26, titleAr: 'الفلل: كود وادي حنيفة وحي اشبيليا', titleEn: 'Villas: Wadi Hanifa & Ishbiliya', icon: Building2 },
    { page: 27, titleAr: 'الفلل: فيلا حي الندى شمال الرياض', titleEn: 'Villas: Al Nada Luxury Residence', icon: Building2 },
    { page: 28, titleAr: 'مستندات التسجيل والاعتمادات الرسمية', titleEn: 'Official Registration & Accreditations', icon: Award },
    { page: 29, titleAr: 'تواصل معنا وشبكة الفروع بالمملكة', titleEn: 'Contact Us & Kingdom Branch Network', icon: Phone },
  ];

  // Render content per page
  const renderPageContent = (page: number) => {
    switch(page) {
      // PAGE 1: Front Cover
      case 1:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden bg-gradient-to-br from-[#2a2b2e] via-[#333438] to-[#1e1f22] text-white select-none border border-[#4a4b50] rounded-xl shadow-2xl">
            {/* Architectural Grid Lines & Gold Frame */}
            <div className="absolute inset-3 sm:inset-6 border border-[#c5a880]/30 pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />
            
            {/* Fluid Wave Lines Graphic (as in original PDF) */}
            <div className="absolute bottom-0 left-0 w-80 sm:w-96 h-48 opacity-20 pointer-events-none">
              <svg viewBox="0 0 400 200" className="w-full h-full text-[#c5a880]" fill="none" stroke="currentColor">
                <path d="M0,150 C100,50 200,180 400,90" strokeWidth="1" />
                <path d="M0,160 C120,60 220,190 400,100" strokeWidth="0.8" />
                <path d="M0,170 C140,70 240,200 400,110" strokeWidth="0.6" />
                <path d="M0,180 C160,80 260,210 400,120" strokeWidth="0.4" />
              </svg>
            </div>

            {/* Top Bar / Category */}
            <div className="relative z-10 flex justify-between items-center text-xs tracking-widest text-[#c5a880] font-mono border-b border-white/10 pb-4">
              <span>COMPANY PROFILE</span>
              <span>ملف الشركة التعريفي</span>
            </div>

            {/* Center Logo & Brand Identity */}
            <div className="relative z-10 my-auto py-8 text-center sm:text-start flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#c5a880]/20 border border-[#c5a880]/40 text-[#c5a880] text-xs font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  <span>اعتماد مهني ورسمي بالمملكة العربية السعودية</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-black tracking-wide text-white leading-tight">
                  شركة <span className="text-[#c5a880]">ريمان</span><br />
                  للإستشارات الهندسية
                </h1>
                <p className="text-sm sm:text-base text-slate-300 font-mono tracking-widest uppercase">
                  REEMAN ENGINEERING CONSULTANCY
                </p>
                <div className="w-20 h-1 bg-[#c5a880] rounded-full" />
              </div>

              {/* Large Monogram Logo Symbol */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 border-2 border-[#c5a880] rounded-2xl flex flex-col items-center justify-center p-4 bg-black/30 backdrop-blur-md shadow-2xl relative group">
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#c5a880]" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#c5a880]" />
                <span className="text-5xl sm:text-6xl font-black text-[#c5a880] font-serif">R</span>
                <span className="text-[10px] tracking-widest text-slate-300 uppercase mt-1 font-mono">REEMAN</span>
              </div>
            </div>

            {/* Bottom Contact Pill & Footnote */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap justify-between items-center text-xs text-slate-400 gap-3">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span dir="ltr">0503360309</span>
                </span>
                <span className="text-slate-500">|</span>
                <span className="text-[#c5a880]">@REEMAN_ENG</span>
              </div>
              <span className="font-mono tracking-wider text-slate-300">WWW.REEMAN-ENG.COM</span>
            </div>
          </div>
        );

      // PAGE 2: Vision 2030 & Introduction
      case 2:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden bg-gradient-to-b from-[#2a2b2e] to-[#202124] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-[#c5a880] tracking-widest">VISION 2030 & COMMITMENT</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 02</span>
            </div>

            <div className="my-auto space-y-8 max-w-2xl mx-auto text-center">
              {/* Vision 2030 Badge */}
              <div className="inline-block p-6 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#c5a880] tracking-wider font-sans">
                  VISION 2030
                </div>
                <div className="text-sm tracking-widest text-slate-300 mt-1 uppercase">
                  المملكة العربية السعودية • KINGDOM OF SAUDI ARABIA
                </div>
              </div>

              {/* Arabic Quote */}
              <blockquote className="text-base sm:text-xl font-medium text-slate-100 leading-relaxed bg-[#333438]/80 p-6 rounded-2xl border-r-4 border-[#c5a880] text-start shadow-md">
                "الخدمات الإستشارية في المجال الهندسي متعددة والتحدي يكمن في تطوير وتأهيل الكادر الهندسي ودعمه بالخبرات المحلية والعالمية لتحقيق الثقة التنافسية وفقاً لمعايير وأخلاقيات ممارسة المهنة، والمشاركة برفع مستوى مهنة الهندسة في المملكة العربية السعودية."
              </blockquote>

              {/* English Translation */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-start font-sans italic">
                "Consulting services in the field of engineering are multiple and challenging in the development and qualification of engineering staff and support local and international expertise to achieve competitive confidence in accordance with the standards and ethics of practicing the profession, and participation in raising the level of engineering profession in the Kingdom of Saudi Arabia."
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs text-slate-400">
              <span>شركة ريمان للإستشارات الهندسية</span>
              <span className="font-mono text-[#c5a880]">1 • 2</span>
            </div>
          </div>
        );

      // PAGE 3: Table of Contents
      case 3:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#252629] to-[#1e1f21] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <List className="w-4 h-4 text-[#c5a880]" />
                <span className="text-sm font-bold tracking-wider text-[#c5a880]">المحتوى • CONTENT</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">PAGE 03</span>
            </div>

            {/* Two Column Table of Contents Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 my-auto overflow-y-auto max-h-[70vh] py-2 pr-1">
              {[
                { no: '01', titleAr: 'المقدمة', titleEn: 'INTRODUCTION', target: 2 },
                { no: '03', titleAr: 'المحتوى', titleEn: 'CONTENT', target: 3 },
                { no: '05', titleAr: 'الرؤية والرسالة والأهداف', titleEn: 'VISION, MISSION AND GOALS', target: 4 },
                { no: '07', titleAr: 'خدماتنا', titleEn: 'OUR SERVICES', target: 5 },
                { no: '09', titleAr: 'التصميم المعماري والإنشائي', titleEn: 'DESIGNING', target: 6 },
                { no: '11', titleAr: 'التصميم الداخلي', titleEn: 'INTERIOR DESIGN', target: 7 },
                { no: '13', titleAr: 'التخطيط العمراني', titleEn: 'URBAN PLANNING', target: 8 },
                { no: '15', titleAr: 'الأعمال المساحية', titleEn: 'SURVEYING WORKS', target: 9 },
                { no: '17', titleAr: 'الإشراف وإدارة المشاريع', titleEn: 'SUPERVISION & PROJECT MANAGEMENT', target: 10 },
                { no: '19', titleAr: 'تنسيق الموقع والحدائق', titleEn: 'GARDENS AND LANDSCAPING', target: 11 },
                { no: '21', titleAr: 'حساب الكميات', titleEn: 'ACCOUNT OF AMOUNTS', target: 12 },
                { no: '23', titleAr: 'الرخص الفنية', titleEn: 'ARTISTIC LICENSES', target: 13 },
                { no: '25', titleAr: 'مشاريعنا (فلل، ديكور، لاندسكيب، تجاري)', titleEn: 'OUR PROJECTS', target: 14 },
                { no: '36', titleAr: 'قسم السلامة والوقاية من الحريق (الدفاع المدني)', titleEn: 'SAFETY AND FIRE DEPARTMENT', target: 19 },
                { no: '40', titleAr: 'قسم الرخص (أبراج الملك خالد)', titleEn: 'LICENSING DEPARTMENT', target: 21 },
                { no: '42', titleAr: 'قسم التصميم والإشراف (المستودعات والمباني)', titleEn: 'SUPERVISION DEPARTMENT', target: 22 },
                { no: '53', titleAr: 'مستندات التسجيل والاعتمادات الرسمية', titleEn: 'REGISTRATION DOCUMENTS', target: 28 },
                { no: '55', titleAr: 'تواصل معنا وفروع المملكة', titleEn: 'CONTACT US', target: 29 },
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => goToPage(item.target)}
                  className="flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-[#c5a880]/20 border border-white/5 hover:border-[#c5a880]/40 transition-all text-start group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-md bg-[#c5a880]/20 text-[#c5a880] text-xs font-mono font-bold flex items-center justify-center group-hover:bg-[#c5a880] group-hover:text-black transition-colors">
                      {item.no}
                    </span>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#c5a880] transition-colors">{item.titleAr}</div>
                      <div className="text-[10px] text-slate-400 font-mono tracking-tight">{item.titleEn}</div>
                    </div>
                  </div>
                  <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:text-[#c5a880] transition-colors" />
                </button>
              ))}
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>فهرس تفاعلي - انقر على أي بند للانتقال المباشر</span>
              <span className="font-mono text-[#c5a880]">3 • 4</span>
            </div>
          </div>
        );

      // PAGE 4: Vision, Mission & Goals
      case 4:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#2b2c2f] to-[#212225] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">الرؤية والرسالة والأهداف • VISION, MISSION & GOALS</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 04</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto">
              {/* Vision Card */}
              <div className="bg-[#34353a]/90 p-5 rounded-xl border border-white/10 shadow-lg space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#c5a880]/20 text-[#c5a880] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white border-b border-white/10 pb-2">رؤيتنا • Our Vision</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  أن الخدمات الاستشارية في المجال الهندسي متعددة والتحدي يكمن في تطوير وتأهيل الكادر الهندسي ودعمه بالخبرات المحلية والعالمية لتحقيق الثقة التنافسية وفقاً لمعايير وأخلاقيات ممارسة المهنة والمشاركة برفع مستوى مهنة الهندسة في المملكة العربية السعودية.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-[#34353a]/90 p-5 rounded-xl border border-[#c5a880]/40 shadow-lg space-y-3 relative">
                <div className="absolute top-3 left-3 text-[10px] bg-[#c5a880]/30 text-[#c5a880] px-2 py-0.5 rounded font-mono">CORE</div>
                <div className="w-10 h-10 rounded-lg bg-[#c5a880] text-black flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#c5a880] border-b border-white/10 pb-2">رسالتنا • Our Mission</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  تقديم أفضل الخدمات في مجالات الاستشارات الهندسية المختلفة بكفاءة مهنية عالية تنال رضا عملائنا ونقدم لهم أفضل الخيارات الممكنة لتلبية رغباتهم مع خفض التكلفة الكلية لمشروعاتهم بأعلى درجات الإتقان والموثوقية.
                </p>
              </div>

              {/* Objectives Card */}
              <div className="bg-[#34353a]/90 p-5 rounded-xl border border-white/10 shadow-lg space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#c5a880]/20 text-[#c5a880] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white border-b border-white/10 pb-2">أهدافنا • Our Objectives</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  تصميم مشروعات متميزة على مستويات عالية من الجودة وخفض التكلفة الابتدائية والمستمرة مع سرعة الإنجاز وتحقيق بيئة مستديمة وفاعلة، وتقديم الخدمات الاستشارية والفنية بأفضل مستوى بالاعتماد على الكفاءات المتخصصة ومواكبة كل حديث.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>شركة ريمان للإستشارات الهندسية</span>
              <span className="font-mono text-[#c5a880]">5 • 6</span>
            </div>
          </div>
        );

      // PAGE 5: Our Services
      case 5:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#2a2b2e] to-[#1f2023] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">خـدمـاتـنــا • OUR SERVICES</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 05</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto">
              {[
                { titleAr: 'التصميم المعماري والإنشائي', titleEn: 'Designing', desc: 'مخططات كاملة وفق كود البناء السعودي (SBC)' },
                { titleAr: 'التصميم الداخلي والديكور', titleEn: 'Internal Designing', desc: 'مناظير 3D ومخططات تنفيذية كلاسيك ومودرن' },
                { titleAr: 'التخطيط العمراني والحضري', titleEn: 'Physical & Urban Planning', desc: 'دراسات الطبوغرافيا وخطوط الكنتور والمخططات الشاملة' },
                { titleAr: 'الأعمال المساحية ونظم GIS', titleEn: 'Survey Works', desc: 'تحديث الصكوك والتجزئة والدمج والميزانية الشبكية' },
                { titleAr: 'الإشراف وإدارة المشاريع', titleEn: 'Supervising & Project Management', desc: 'إشراف هندسي ميداني وفحص مواد وتقارير دورية' },
                { titleAr: 'تنسيق المواقع والحدائق (لاندسكيب)', titleEn: 'Gardens & Landscaping', desc: 'جلسات خارجية، مسطحات مائية، مساحات خضراء' },
                { titleAr: 'حساب وحصر الكميات', titleEn: 'Account of Amounts', desc: 'جداول كميات ومقاييس تقديرية دقيقة للمشاريع' },
                { titleAr: 'الرخص الفنية وتراخيص البناء', titleEn: 'Artistic Licenses', desc: 'سكني، تجاري، ملحق، إضافة دور، ترميم، وهدم' },
                { titleAr: 'تصميم مخططات أنظمة الوقاية من الحريق', titleEn: 'Fire Protection Plans', desc: 'شبكات الرش الآلي ومضخات الحريق والإنذار المبكر' },
                { titleAr: 'تسليم واستلام أنظمة الدفاع المدني', titleEn: 'Delivering Systems to Civil Defense', desc: 'اعتماد رسمي ومباشر عبر منصة سلامة' },
              ].map((serv, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#c5a880]/30 transition-all">
                  <div className="w-7 h-7 rounded-lg bg-[#c5a880]/20 text-[#c5a880] flex items-center justify-center flex-shrink-0 font-bold text-xs font-mono">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{serv.titleAr}</h4>
                    <span className="text-[10px] text-[#c5a880] font-mono block">{serv.titleEn}</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">{serv.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>تغطية هندسية استشارية متكاملة لجميع المشاريع</span>
              <span className="font-mono text-[#c5a880]">7 • 8</span>
            </div>
          </div>
        );

      // PAGE 6: Designing Division
      case 6:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#2b2c2f] to-[#1e1f22] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">قسم التصميم • DESIGNING DIVISION</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 06</span>
            </div>

            <div className="my-auto space-y-6">
              <div className="bg-[#35363b] p-5 rounded-xl border border-white/10 shadow-md">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  يقوم مكتب ريمان للإستشارات الهندسية بمنح العميل فرصة المشاركة في التصميم خطوة بخطوة لمشروعه المستقبلي، حيث نقوم بإعداد الأفكار التصميمية التي تراعي التجديد والابتكار وتغيير النمط التقليدي مع الحفاظ على العلاقة الثلاثية الهامة بين (الوظيفة، الشكل، والتكلفة)، وبما يخدم حاجة العميل ويلبي رغباته بأفضل شكل وأقل تكلفة ممكنة بخبرات كادر هندسي متميز وبرامج تصميم حديثة ومخرجات عالية الجودة.
                </p>
              </div>

              {/* Schemes Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'المخططات المعمارية', sub: 'Architectural Scheme' },
                  { name: 'المخططات الإنشائية', sub: 'Structural Scheme' },
                  { name: 'المخططات الميكانيكية', sub: 'Mechanical Scheme' },
                  { name: 'المخططات الكهربائية', sub: 'Electrical Scheme' },
                  { name: 'مخططات الأمن والسلامة', sub: 'Security & Safety Scheme' },
                  { name: 'مخططات الشبكات وتقنية المعلومات', sub: 'IT & Network Scheme' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-white/5 rounded-xl border border-[#c5a880]/20 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">{item.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/30 text-xs text-amber-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                <span>التقيد التام بالاشتراطات الفنية والأنظمة الحكومية وإجراءات كود البناء السعودي (SBC)</span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>شركة ريمان للإستشارات الهندسية</span>
              <span className="font-mono text-[#c5a880]">9 • 10</span>
            </div>
          </div>
        );

      // PAGE 7: Interior Design & Decore
      case 7:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#2b2c2f] to-[#1e1f22] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">التصميم الداخلي • INTERIOR DESIGN</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 07</span>
            </div>

            <div className="my-auto space-y-6">
              <div className="bg-[#35363b] p-5 rounded-xl border border-white/10">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  حرص مكتب ريمان للإستشارات الهندسية على تلبية رغبات العملاء وتقديم رؤية جديدة للتصميم الداخلي بجميع أنماطه (الكلاسيكية، الأندلسية، والحديثة Modern) من خلال تقديم عدة أفكار ترقى إلى مستوى المشاريع وتحاكي الوظيفة والنشاط الداخلي للمشروع بأيدي كوادر فنية محترفة.
                </p>
              </div>

              {/* Execution Details Showcase */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { title: 'مناظير ثلاثية الأبعاد', desc: '3D Perspectives & VR' },
                  { title: 'توزيع الأثاث والمساقط', desc: 'Furniture Allocation' },
                  { title: 'دراسة وتوزيع الإنارة', desc: 'Lighting Simulation' },
                  { title: 'الأسقف والأرضيات والقطاعات', desc: 'Ceilings & Floors Details' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-white/5 rounded-xl border border-[#c5a880]/20 text-center space-y-1">
                    <Sparkles className="w-4 h-4 text-[#c5a880] mx-auto" />
                    <div className="text-xs font-bold text-white">{item.title}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>أفكار إبداعية وحلول تلبي أدق التفاصيل الجمالية</span>
              <span className="font-mono text-[#c5a880]">11 • 12</span>
            </div>
          </div>
        );

      // PAGE 8: Urban Planning
      case 8:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#2b2c2f] to-[#1e1f22] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">التخطيط العمراني • URBAN PLANNING</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 08</span>
            </div>

            <div className="my-auto space-y-6">
              <div className="bg-[#35363b] p-5 rounded-xl border border-white/10">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  يتميز قسم التخطيط والتطوير العمراني لدى مكتب ريمان بإعداد الدراسات والتصاميم اللازمة للتخطيط الحضري والعمراني للأحياء السكنية وغيرها، انطلاقاً من التجديد والابتكار ومراعاة اكتمال وشمولية الخدمات العامة والمرافق وتطبيق الاشتراطات الفنية وسهولة انسيابية الحركة.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'الرفع المساحي للموقع قبل البدء في التخطيط',
                  'الدراسة الشاملة وتحديد طبوغرافية الموقع وخطوط الكنتور',
                  'المخططات التنظيمية بكامل المرافق والتفاصيل حسب الشروط',
                  'المخططات الحضرية الشاملة واستعمالات الأراضي',
                  'التقيد بالتعليمات والأنظمة الحكومية والبلدية الخاصة بإجراءات التخطيط',
                ].map((txt, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                    <span>{txt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>تخطيط حضري عصري يواكب مستهدفات رؤية 2030</span>
              <span className="font-mono text-[#c5a880]">13 • 14</span>
            </div>
          </div>
        );

      // PAGE 9: Survey Works & GIS
      case 9:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#2b2c2f] to-[#1e1f22] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">الأعمال المساحية • SURVEY WORKS</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 09</span>
            </div>

            <div className="my-auto space-y-6">
              <div className="bg-[#35363b] p-5 rounded-xl border border-white/10">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  يمتلك مكتب ريمان للإستشارات الهندسية كوادر فنية متخصصة في أعمال الرفع المساحي ونظم المعلومات الجغرافية (GIS) وإعداد الخرائط المساحية بكافة أنواعها بخبرات علمية عالية المستوى، وتتوفر لدى الشركة أحدث أجهزة الرفع المساحي ونظم الأقمار الصناعية (GPS / Total Station).
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { title: 'تحديث الصكوك', en: 'Updating Deeds' },
                  { title: 'التجزئة والدمج', en: 'Retailing & Merging' },
                  { title: 'قرارات مساحية لشركة المياه', en: 'Water Authority Surveys' },
                  { title: 'عمل الميزانية الشبكية', en: 'Network Budgeting / Grid Leveling' },
                  { title: 'الرفع المساحي للمباني القائمة', en: 'As-Built Survey' },
                  { title: 'نظم المعلومات الجغرافية', en: 'GIS & Coordinate Mapping' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-white/5 rounded-xl border border-[#c5a880]/20 text-center space-y-1">
                    <Compass className="w-5 h-5 text-[#c5a880] mx-auto" />
                    <div className="text-xs font-bold text-white">{item.title}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{item.en}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>أجهزة رفع مساحي حديثة وتقارير معتمدة لدى كافة الجهات</span>
              <span className="font-mono text-[#c5a880]">15 • 16</span>
            </div>
          </div>
        );

      // PAGE 10: Supervision & Project Management
      case 10:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#2b2c2f] to-[#1e1f22] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">الإشراف وإدارة المشاريع • SUPERVISION</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 10</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="bg-[#35363b] p-4 rounded-xl border border-white/10">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  يقوم مكتب ريمان بإدارة المشاريع التنفيذية باحترافية متميزة ودراسة شاملة ودقيقة بخبرات كوادر هندسية متخصصة تعمل على أحدث برامج إدارة المشاريع وإمكانيات متطورة للوصول إلى الهدف بأفضل جودة وأقل تكلفة وأقصر فترة زمنية.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'دراسة المخططات ومطابقتها قبل البدء في التنفيذ',
                  'إعداد العقود ووضع الشروط والمواصفات الفنية الدقيقة',
                  'إعداد الجداول الزمنية للمشاريع باستخدام أحدث البرامج (Primavera / MS Project)',
                  'متابعة تأمين المواد اللازمة وفحصها واختبارها ثم استلامها بالموقع',
                  'المتابعة الإدارية لتنسيق العمل بين المقاولين',
                  'الإشراف الهندسي الميداني وإعداد التقارير الأسبوعية والدورية',
                  'مراجعة واعتماد المستخلصات المالية للمشروع',
                ].map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>إشراف ميداني صارم يضمن أعلى معايير الجودة التنفيذية</span>
              <span className="font-mono text-[#c5a880]">17 • 18</span>
            </div>
          </div>
        );

      // PAGE 11: Gardens & Landscaping
      case 11:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#2b2c2f] to-[#1e1f22] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">تنسيق المواقع والحدائق • LANDSCAPING</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 11</span>
            </div>

            <div className="my-auto space-y-6">
              <div className="bg-[#35363b] p-5 rounded-xl border border-white/10">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  تنسيق المواقع والحدائق أحد أهم الأقسام لدى مكتب ريمان حيث تفردت الشركة بطاقم هندسي متخصص في تصميم المواقع والحدائق وإعداد المخططات التنفيذية اللازمة باحترافية، وجعلها غنية بالعناصر الطبيعية الخلابة من مسطحات خضراء، ممرات، أماكن جلوس، مسطحات مائية، ونوافير وملاعب أطفال.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-white/5 border border-[#c5a880]/20">
                  <div className="text-sm font-bold text-[#c5a880]">الحدائق المنزلية</div>
                  <div className="text-xs text-slate-300 mt-1">فلل وقصور واستراحات</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-[#c5a880]/20">
                  <div className="text-sm font-bold text-[#c5a880]">الحدائق العامة</div>
                  <div className="text-xs text-slate-300 mt-1">منتزهات ومجمعات ترفيهية</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-[#c5a880]/20">
                  <div className="text-sm font-bold text-[#c5a880]">الميادين العامة</div>
                  <div className="text-xs text-slate-300 mt-1">ساحات بلدية وتطوير حضري</div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>جمال معماري طبيعي وبيئة مستدامة ومريحة</span>
              <span className="font-mono text-[#c5a880]">19 • 20</span>
            </div>
          </div>
        );

      // PAGE 12: Account of Amounts (BOQ)
      case 12:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#2b2c2f] to-[#1e1f22] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">حساب الكميات • ACCOUNT OF AMOUNTS</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 12</span>
            </div>

            <div className="my-auto space-y-6 text-center max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-[#c5a880]/20 text-[#c5a880] flex items-center justify-center mx-auto">
                <FileCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">حصر كميات احترافي وجداول دقيقة</h3>
              <p className="text-sm text-slate-300 leading-relaxed bg-[#35363b] p-6 rounded-2xl border border-white/10">
                يتمتع مكتب ريمان للإستشارات الهندسية بخبرة عالية في مجال حصر الكميات وعمل مقاييس تقديرية لمختلف المشاريع الحكومية أو الأهلية باستخدام أحدث البرامج والتقنيات عالية الدقة لضبط التكاليف بدقة بالغة.
              </p>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>جداول مواصفات ومقايسات تحمي استثمارك</span>
              <span className="font-mono text-[#c5a880]">21 • 22</span>
            </div>
          </div>
        );

      // PAGE 13: Artistic Licenses
      case 13:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#2b2c2f] to-[#1e1f22] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">الرخص الفنية وتراخيص البناء • ARTISTIC LICENSES</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 13</span>
            </div>

            <div className="my-auto space-y-6">
              <div className="bg-[#35363b] p-5 rounded-xl border border-white/10">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  يقوم مكتب ريمان بمتابعة واستخراج الرخص الفنية عن طريق طاقم خبير ومتخصص معتمد من الجهات الرسمية بالعمل على إعداد المستندات وإدخال ورفع البيانات ومتابعة إجراءاتها في الجهات المختصة وإنجازها بأسرع ما يمكن.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  'رخصة بناء سكني',
                  'رخصة بناء تجاري',
                  'رخصة ملحق إضافي',
                  'رخصة إضافة دور',
                  'نقل ملكية رخصة',
                  'إصدار بدل فاقد',
                  'تجديد الرخص الفنية',
                  'رخص الترميم والتعديل',
                  'رخص الهدم والإزالة',
                ].map((lic, idx) => (
                  <div key={idx} className="p-3 bg-white/5 rounded-xl border border-[#c5a880]/20 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                    <span className="text-xs font-bold text-white">{lic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>اعتماد رسمي عبر منصة بلدي ومختلف الأمانات</span>
              <span className="font-mono text-[#c5a880]">23 • 24</span>
            </div>
          </div>
        );

      // PAGE 14: Projects - VILLA 01
      case 14:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#252629] to-[#1c1d1f] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#c5a880]" />
                <span className="text-sm font-bold text-[#c5a880]">مشاريعنا • VILLA 01</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">PAGE 14</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950/80 p-4 sm:p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <div>
                    <span className="text-xs font-mono text-[#c5a880] tracking-widest">RESIDENTIAL LUXURY ARCHITECTURE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">تصميم فيلا سكنية مودرن فاخرة (VILLA 01)</h2>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#c5a880]/20 border border-[#c5a880]/40 text-[#c5a880] text-xs font-bold">
                    معتمد وفق كود SBC
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-xs text-[#c5a880] font-bold block">الواجهات الخارجية</span>
                    <span className="text-[11px] text-slate-300">تكسيات حجرية طبيعية مع شرائح خشب معالج وإنارة مسارية مخفية</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-xs text-[#c5a880] font-bold block">التوزيع الفراغي</span>
                    <span className="text-[11px] text-slate-300">استغلال أمثل لمسارات الحركة والارتدادات مع فناء داخلي رحب</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-xs text-[#c5a880] font-bold block">الخصوصية والانفتاح</span>
                    <span className="text-[11px] text-slate-300">زجاج عازل حراري مضاعف مع شاشات تظليل معمارية ذكية</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>شركة ريمان للإستشارات الهندسية</span>
              <span className="font-mono text-[#c5a880]">25 • 26</span>
            </div>
          </div>
        );

      // PAGE 15: Projects - DECORE
      case 15:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#252629] to-[#1c1d1f] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">مشاريعنا: الديكور والتصميم الداخلي • DECORE</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 15</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-[#c5a880]">MODERN KITCHEN DESIGN</div>
                  <h4 className="text-base font-bold text-white">تصميم مطابخ عصرية متكاملة</h4>
                  <p className="text-xs text-slate-300">
                    أسطح رخامية فاخرة وجزيرة وسطية مع إنارة معلقة متناسقة وتوظيف مريح للأجهزة المدمجة لتسهيل الحركة اليومية.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-[#c5a880]">MASTER BEDROOM SUITE</div>
                  <h4 className="text-base font-bold text-white">تصميم غرف النوم الماستر المودرن</h4>
                  <p className="text-xs text-slate-300">
                    تكسيات جدارية خشبية هندسية مع إضاءة دافئة وزجاج بانورامي يطل على شرفة خارجية بتصميم يمنح أعلى درجات الهدوء.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>تفاصيل داخلية مخصصة تعكس ذوق العميل الرفيع</span>
              <span className="font-mono text-[#c5a880]">27 • 28</span>
            </div>
          </div>
        );

      // PAGE 16: Projects - LANDSCAPE
      case 16:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#252629] to-[#1c1d1f] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">مشاريعنا: اللاندسكيب والمساحات الخارجية • LANDSCAPE</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 16</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="p-6 rounded-2xl bg-[#333438] border border-white/10 space-y-4">
                <span className="text-xs font-mono text-[#c5a880] tracking-wider">OUTDOOR OASIS & WATER FEATURES</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">جلسات خارجية غاطسة مع شلال مائي ومدفأة حجرية</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  ابتكار جلسات خارجية هابطة (Sunken Lounge) تلتف حول مدفأة حجرية مركزية ومحاطة بشلال مائي حائري مائل، مع ممرات حجرية ممتدة ومسطحات خضراء متناسقة تمنح إطلالة متكاملة تزيد من قيمة وجمالية العقار.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>شركة ريمان للإستشارات الهندسية</span>
              <span className="font-mono text-[#c5a880]">29 • 30</span>
            </div>
          </div>
        );

      // PAGE 17: Projects - Commercial SHOP
      case 17:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#252629] to-[#1c1d1f] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">مشاريعنا: المراكز والمجمعات التجارية • SHOP</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 17</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="p-6 rounded-2xl bg-[#333438] border border-white/10 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-[#c5a880]">COMMERCIAL PLAZA COMPLEX</span>
                  <span className="text-xs bg-[#c5a880]/20 text-[#c5a880] px-2.5 py-0.5 rounded font-bold">مجمع استثماري</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">تصميم مجمع تجاري مع قبة زجاجية سماوية وتراسات كافيهات</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  مبنى تجاري واستثماري مميز يتضمن تكسيات معدنية ألمنيوم مع واجهات زجاجية واسعة، وتراسات خارجية مظللة بإطلالات على الساحة المفتوحة، مع قبة زجاجية علوية توفر إضاءة نهارية طبيعية ساحرة للردهة الداخلية.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>تصاميم تجارية تجذب الزوار وتعظم العوائد الاستثمارية</span>
              <span className="font-mono text-[#c5a880]">31 • 32</span>
            </div>
          </div>
        );

      // PAGE 18: Projects - Commercial SHOPS
      case 18:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#252629] to-[#1c1d1f] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">مشاريعنا: المعارض والمحلات التجارية • SHOPS</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 18</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="p-6 rounded-2xl bg-[#333438] border border-white/10 space-y-4">
                <span className="text-xs font-mono text-[#c5a880]">COMMERCIAL STRIP & SHOWROOMS</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">معارض تجارية بواجهات زجاجية وتكسيات هندسية ذهبية</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  تطوير واجهات معارض تجارية بشارع رئيسي بتصميم ممتد ذو ارتفاع مضاعف مع مشربيات زخرفية هندسية مذهبة وأماكن مخصصة للوحات الإعلانية الموحدة ومواقف سيارات منظمة وفق أحدث معايير الأمانة.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>شركة ريمان للإستشارات الهندسية</span>
              <span className="font-mono text-[#c5a880]">33 • 34</span>
            </div>
          </div>
        );

      // PAGE 19: Safety - DoubleTree Hotel
      case 19:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#27282b] to-[#1e1f22] text-white border border-rose-900/40 rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-rose-500" />
                <span className="text-sm font-bold text-rose-400">قسم السلامة وأنظمة الوقاية من الحريق • FIRE SYSTEMS</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">PAGE 19</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-800/40 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-rose-400">HOTEL FIRE SAFETY DELIVERED</span>
                  <span className="text-xs bg-rose-600 text-white px-2.5 py-0.5 rounded font-bold">تسليم معتمد</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">فندق دبل تري باي هيلتون - حي المصيف (الرياض)</h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  تسليم أنظمة الوقاية من الحريق وشبكات الإطفاء والإنذار المبكر للدفاع المدني وفق أعلى معايير السلامة الفندقية العالمية واشتراطات كود البناء السعودي.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-xs text-rose-200">
                  <div className="p-2 rounded bg-black/40 border border-rose-500/20">مضخات إطفاء رئيسية</div>
                  <div className="p-2 rounded bg-black/40 border border-rose-500/20">شبكات رش آلي</div>
                  <div className="p-2 rounded bg-black/40 border border-rose-500/20">إنذار وتحكم دخان</div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>اعتماد رسمي وسرعة في الإنجاز الميداني</span>
              <span className="font-mono text-[#c5a880]">35 • 36</span>
            </div>
          </div>
        );

      // PAGE 20: Safety - Novotel & Al Romansiah
      case 20:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#27282b] to-[#1e1f22] text-white border border-rose-900/40 rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-rose-400">قسم السلامة: مشاريع كبرى • MAJOR SAFETY PROJECTS</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 20</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-sky-400">HIGH-RISE HOSPITALITY TOWER</div>
                  <h4 className="text-base font-bold text-white">برج فندق نوفوتيل العليا</h4>
                  <p className="text-xs text-slate-300">
                    تسليم أنظمة الدفاع المدني للأبراج الفندقية الشاهقة واعتماد مخططات وأنظمة الوقاية من الحريق.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-amber-400">COMMERCIAL FOOD CHAIN</div>
                  <h4 className="text-base font-bold text-white">شركة الرومانسية المحدودة</h4>
                  <p className="text-xs text-slate-300">
                    تصميم وتسليم أنظمة السلامة والوقاية من الحريق لفروع متعددة: (السعادة - الشفاء - لبن - النسيم).
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>ثقة كبرى العلامات التجارية والمجموعات الفندقية</span>
              <span className="font-mono text-[#c5a880]">37 • 38</span>
            </div>
          </div>
        );

      // PAGE 21: Licensing - King Khalid Towers
      case 21:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#252629] to-[#1c1d1f] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">قسم الرخص • LICENSING DEPARTMENT</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 21</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="p-6 rounded-2xl bg-[#333438] border border-white/10 space-y-3">
                <span className="text-xs font-mono text-[#c5a880]">LANDMARK RESIDENTIAL & COMMERCIAL LICENSING</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">إصدار تراخيص أبراج الملك خالد (الرياض)</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  متابعة وإصدار الرخص الهندسية والفنية لأبراج الملك خالد البارزة بالعاصمة، شملت مراجعة الاشتراطات المعمارية والإنشائية، ونظم السلامة وموافقات الأمانة والدفاع المدني.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>شركة ريمان للإستشارات الهندسية</span>
              <span className="font-mono text-[#c5a880]">39 • 40</span>
            </div>
          </div>
        );

      // PAGE 22: Architectural - Warehouses & Factories
      case 22:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#252629] to-[#1c1d1f] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">من أعمال القسم المعماري • ARCHITECTURAL</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 22</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="p-6 rounded-2xl bg-[#333438] border border-white/10 space-y-3">
                <span className="text-xs font-mono text-[#c5a880]">WAREHOUSES • WORKSHOPS • FACTORIES</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">تصميم وإشراف: مستودعات - ورش - مصانع</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  دراسات وتصاميم معمارية وإنشائية متطورة للمجمعات اللوجستية ومستودعات التخزين الجاف والمبرد والورش الصناعية، مع توفير أرصفة تفريغ شاحنات حديثة ومكاتب إدارية ملحقة.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>حلول صناعية ولوجستية متوافقة مع اشتراطات مدن والأمانة</span>
              <span className="font-mono text-[#c5a880]">41 • 42</span>
            </div>
          </div>
        );

      // PAGE 23: Industrial Hangars & Steel Structures
      case 23:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#252629] to-[#1c1d1f] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">الهياكل المعدنية والمستودعات • STEEL STRUCTURES</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 23</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="p-6 rounded-2xl bg-[#333438] border border-white/10 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white">تنفيذ وإشراف الهناجر والمستودعات العملاقة</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  تصاميم إنشائية للهياكل الحديدية خفيفة وثقيلة الوزن مع أنظمة عزل حراري ومقاومة حريق متطورة، وشبكات إطفاء سقفية وأرضيات إيبوكسية مقاومة للأوزان العالية.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>شركة ريمان للإستشارات الهندسية</span>
              <span className="font-mono text-[#c5a880]">43 • 44</span>
            </div>
          </div>
        );

      // PAGE 24: Supervision - Residential
      case 24:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#252629] to-[#1c1d1f] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">قسم الإشراف على التنفيذ • RESIDENTIAL SUPERVISION</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 24</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="p-6 rounded-2xl bg-[#333438] border border-white/10 space-y-3">
                <span className="text-xs font-mono text-[#c5a880]">SITE AUDITING & QUALITY CONTROL</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">الإشراف على تنفيذ المباني السكنية</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  حضور ميداني في كافة مراحل المشروع: استلام أعمال الحفر والتربة، فحص حديد تسليح القواعد والأعمدة والأسقف، الإشراف على صب الخرسانة الجاهزة واختبارات القوة، واستلام أعمال العظم والتشطيبات.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>حماية كاملة لجودة المبنى وسلامته الإنشائية</span>
              <span className="font-mono text-[#c5a880]">45 • 46</span>
            </div>
          </div>
        );

      // PAGE 25: Supervision - Ownership Apartments
      case 25:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#252629] to-[#1c1d1f] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">قسم الإشراف: شقق التمليك • APARTMENTS SUPERVISION</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 25</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="p-6 rounded-2xl bg-[#333438] border border-white/10 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white">الإشراف على مشاريع شقق التمليك والمطورين</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  تقديم خدمات الإشراف الهندسي المعتمد لعمائر وشقق التمليك السكنية بمدينة الرياض، ومتابعة لوحات المشروع والتقارير الدورية واستخراج شهادات إتمام البناء والإشغال للمطورين العقاريين.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>شركة ريمان للإستشارات الهندسية</span>
              <span className="font-mono text-[#c5a880]">47 • 48</span>
            </div>
          </div>
        );

      // PAGE 26: Villas - Wadi Hanifa & Ishbiliya
      case 26:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#252629] to-[#1c1d1f] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">مشاريع الفلل السكنية • VILLA PROJECTS</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 26</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-[#c5a880]">WADI HANIFA SPECIAL CODE</div>
                  <h4 className="text-base font-bold text-white">تصميم فلل حسب كود وادي حنيفة</h4>
                  <p className="text-xs text-slate-300">
                    مراعاة التوافق البيئي والطبيعي واستخدام المواد المحلية المتناغمة مع محددات واشتراطات وادي حنيفة البيئية بالرياض.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-[#c5a880]">ISHBILIYA DISTRICT - RIYADH</div>
                  <h4 className="text-base font-bold text-white">تصميم فيلا سكنية - حي اشبيليا</h4>
                  <p className="text-xs text-slate-300">
                    فيلا خاصة ذات طابع مودرن هادئ مع أسوار عصرية وإنارة معمارية دافئة وتوزيع داخلي عائلي مريح.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>تطابق تام مع أكواد البناء والاشتراطات الخاصة</span>
              <span className="font-mono text-[#c5a880]">49 • 50</span>
            </div>
          </div>
        );

      // PAGE 27: Villas - Al Nada District
      case 27:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#252629] to-[#1c1d1f] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">مشاريع الفلل: حي الندى • AL NADA VILLA</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 27</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="p-6 rounded-2xl bg-[#333438] border border-white/10 space-y-3">
                <span className="text-xs font-mono text-[#c5a880]">NORTH RIYADH RESIDENTIAL LANDMARK</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">تصميم فيلا سكنية - حي الندى شمال الرياض</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  أيقونة معمارية تجمع بين الواجهات الحجرية البيضاء وتكسيات التيراكوتا الخشبية، مع فناء خلفي فسيح يضم مسبحاً خاصاً وجلسات مكشوفة بإطلالات زجاجية كاملة تعزز الراحة والفخامة.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>شركة ريمان للإستشارات الهندسية</span>
              <span className="font-mono text-[#c5a880]">51 • 52</span>
            </div>
          </div>
        );

      // PAGE 28: Registration Documents & Accreditations
      case 28:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#2b2c2f] to-[#1e1f22] text-white border border-[#404146] rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#c5a880]" />
                <span className="text-sm font-bold text-[#c5a880]">مستندات التسجيل والاعتمادات الرسمية • REGISTRATION</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">PAGE 28</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-xs text-[#c5a880] font-mono">COMMERCIAL REGISTRATION & LICENSING</div>
                  <div className="text-sm font-bold text-white">ترخيص مكتب استشارات هندسية</div>
                  <div className="text-xs text-slate-300">رقم الترخيص: <span className="font-mono text-[#c5a880]">5110305505</span></div>
                  <div className="text-[11px] text-slate-400">باسم: محمد بن هادي بن مانع آل قراد (هندسة معمارية)</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-xs text-[#c5a880] font-mono">BALADY & MOMRAH ACCREDITATION</div>
                  <div className="text-sm font-bold text-white">رخصة نشاط تجاري - منصة بلدي</div>
                  <div className="text-xs text-slate-300">اعتماد بلدي لإصدار رخص البناء والشهادات الفنية</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-xs text-[#c5a880] font-mono">SAUDI COUNCIL OF ENGINEERS</div>
                  <div className="text-sm font-bold text-white">الهيئة السعودية للمهندسين (SCE)</div>
                  <div className="text-xs text-slate-300">شهادة اعتماد مهني وترخيص استشاري معتمد</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-xs text-[#c5a880] font-mono">SALAMAH & CIVIL DEFENSE</div>
                  <div className="text-sm font-bold text-white">اعتماد منصة سلامة والدفاع المدني</div>
                  <div className="text-xs text-slate-300">اعتماد رسمي لمخططات الوقاية والسلامة من الحريق</div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span>تراخيص نظامية مكتملة وموثقة لدى كافة الوزارات والهيئات</span>
              <span className="font-mono text-[#c5a880]">53 • 54</span>
            </div>
          </div>
        );

      // PAGE 29: Contact Us & Branch Network
      case 29:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-[#2a2b2e] via-[#333438] to-[#1e1f22] text-white border border-[#c5a880]/40 rounded-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-bold text-[#c5a880]">تواصل معنا وشبكة فروعنا بالمملكة • CONTACT US</span>
              <span className="text-xs text-slate-400 font-mono">PAGE 29</span>
            </div>

            <div className="my-auto space-y-6">
              <div className="text-center space-y-1">
                <h3 className="text-2xl font-bold text-white">شركة ريمان للإستشارات الهندسية والسلامة</h3>
                <p className="text-xs text-[#c5a880] font-mono tracking-wider">REEMAN ENGINEERING CONSULTANCY</p>
              </div>

              {/* Branches Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Branch 1: Riyadh */}
                <div className="p-4 rounded-xl bg-white/5 border border-[#c5a880]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#c5a880]">
                    <MapPin className="w-4 h-4" />
                    <span>فرع الرياض (المقر الرئيسي)</span>
                  </div>
                  <p className="text-xs text-slate-300">حي الروضة - شارع الحسن بن علي</p>
                  <a href="tel:0503360309" className="inline-flex items-center gap-1.5 text-xs text-white hover:text-[#c5a880] font-mono font-bold pt-1">
                    <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span dir="ltr">0503360309</span>
                  </a>
                </div>

                {/* Branch 2: Najran */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-400">
                    <MapPin className="w-4 h-4" />
                    <span>فرع نجران</span>
                  </div>
                  <p className="text-xs text-slate-300">شمال الفهد - شارع الحسين بن علي بن أبي طالب</p>
                  <a href="tel:0531140019" className="inline-flex items-center gap-1.5 text-xs text-white hover:text-sky-300 font-mono font-bold pt-1">
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span dir="ltr">0531140019</span>
                  </a>
                </div>

                {/* Branch 3: Jazan */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <MapPin className="w-4 h-4" />
                    <span>فرع جيزان</span>
                  </div>
                  <p className="text-xs text-slate-300">حي الروضة - طريق الأمير سلطان</p>
                  <a href="tel:0536951257" className="inline-flex items-center gap-1.5 text-xs text-white hover:text-emerald-300 font-mono font-bold pt-1">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span dir="ltr">0536951257</span>
                  </a>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
                <a
                  href="https://wa.me/966559113990?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A7%D8%B7%D9%84%D8%B9%D8%AA%20%D8%B9%D9%84%D9%89%20%D8%A8%D8%B1%D9%88%D9%81%D8%A7%D9%8A%D9%84%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%B1%D9%8A%D9%85%D8%A7%D9%86%20%D9%88%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>تواصل واتساب مع المهندس</span>
                </a>
                <a
                  href="tel:0559113990"
                  className="flex items-center gap-2 bg-[#c5a880] hover:bg-[#b09268] text-black px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>اتصال مباشر: 0559113990</span>
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-slate-400">
              <span className="font-mono">WWW.REEMAN-ENG.COM • @REEMAN_ENG</span>
              <span className="font-mono text-[#c5a880]">55 • 56</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section 
      id="company-profile" 
      ref={viewerContainerRef}
      className={`relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-[#1e2024] to-slate-950 text-white overflow-hidden transition-all ${
        isFullscreen ? 'fixed inset-0 z-50 py-4 px-2 sm:px-6 bg-black flex flex-col justify-between' : ''
      }`}
    >
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#c5a880_1.5px,transparent_1.5px)] [background-size:32px_32px]" />

      <div className={`${isFullscreen ? 'w-full h-full flex flex-col justify-between' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8'}`}>
        
        {/* Section Header (Hidden in Fullscreen for immersive experience) */}
        {!isFullscreen && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#c5a880] text-xs font-semibold mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'البروفايل الرقمي التفاعلي للشركة' : 'Interactive Digital Company Profile'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {language === 'ar' ? (
                  <>
                    تصفح <span className="text-[#c5a880]">بروفايل شركة ريمان</span> للإستشارات الهندسية
                  </>
                ) : (
                  <>
                    Browse <span className="text-[#c5a880]">Reeman Company Profile</span> & Portfolio
                  </>
                )}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
                {language === 'ar' 
                  ? 'بروفايل تفاعلي شامل يضم الرؤية، الخدمات الاستشارية، تصاميم الفلل والمجمعات التجارية، مشاريع الدفاع المدني (فندق دبل تري ونوفوتيل)، مستندات الاعتماد، وشبكة فروعنا.'
                  : 'Complete interactive flipbook featuring services, villas, commercial complexes, civil defense approvals, official certifications, and branches.'}
              </p>
            </div>

            {/* Quick Actions / Share / Fullscreen */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setShowToc(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
                title="فهرس المحتويات"
              >
                <List className="w-4 h-4 text-[#c5a880]" />
                <span>{language === 'ar' ? 'الفهرس' : 'Index'}</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
                title="مشاركة رابط البروفايل"
              >
                <Share2 className="w-4 h-4 text-sky-400" />
                <span>{copiedLink ? (language === 'ar' ? 'تم النسخ!' : 'Copied!') : (language === 'ar' ? 'مشاركة' : 'Share')}</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
                title="طباعة أو تصدير PDF"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>{language === 'ar' ? 'طباعة / PDF' : 'Print / PDF'}</span>
              </button>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#c5a880] hover:bg-[#b09268] text-black text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
                <span>{language === 'ar' ? 'ملء الشاشة' : 'Fullscreen'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Top Mini Control Bar (visible in fullscreen or standard) */}
        <div className="flex items-center justify-between gap-2 bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-2xl backdrop-blur-md shadow-lg">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowToc(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 cursor-pointer"
            >
              <List className="w-3.5 h-3.5 text-[#c5a880]" />
              <span className="hidden sm:inline">{language === 'ar' ? 'فهرس الصفحات' : 'Table of Contents'}</span>
            </button>
            
            {/* Quick Page Info */}
            <span className="text-xs text-slate-400 font-mono">
              {language === 'ar' ? `صفحة ${currentPage} من ${totalPages}` : `Page ${currentPage} of ${totalPages}`}
            </span>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setZoomLevel(prev => Math.min(prev + 0.15, 1.4))}
              disabled={zoomLevel >= 1.4}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 cursor-pointer"
              title="تكبير"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-400 font-mono w-10 text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel(prev => Math.max(prev - 0.15, 0.85))}
              disabled={zoomLevel <= 0.85}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 cursor-pointer"
              title="تصغير"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            {zoomLevel !== 1 && (
              <button
                onClick={() => setZoomLevel(1)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[#c5a880] cursor-pointer"
                title="إعادة الضبط"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}

            {isFullscreen && (
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white mr-2 cursor-pointer"
                title="إنهاء ملء الشاشة"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* The Interactive Book Viewer Container */}
        <div className="relative w-full flex items-center justify-center select-none py-2">
          {/* Previous Page Floating Button */}
          <button
            onClick={prevPage}
            disabled={currentPage <= 1}
            className={`absolute ${isRTL ? 'right-1 sm:right-4' : 'left-1 sm:left-4'} z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-900/90 border border-slate-700 text-white hover:text-[#c5a880] hover:border-[#c5a880] flex items-center justify-center shadow-2xl transition-all disabled:opacity-20 disabled:cursor-not-allowed hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md`}
            aria-label="Previous Page"
          >
            {isRTL ? <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" /> : <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />}
          </button>

          {/* Active Profile Page Display with Motion Transition & Zoom */}
          <div className="w-full max-w-4xl overflow-hidden flex justify-center items-center">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: isRTL ? 40 : -40, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: zoomLevel }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="w-full min-h-[500px] sm:min-h-[560px] md:min-h-[600px] max-w-3xl transform transition-transform"
            >
              {renderPageContent(currentPage)}
            </motion.div>
          </div>

          {/* Next Page Floating Button */}
          <button
            onClick={nextPage}
            disabled={currentPage >= totalPages}
            className={`absolute ${isRTL ? 'left-1 sm:left-4' : 'right-1 sm:right-4'} z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-900/90 border border-slate-700 text-white hover:text-[#c5a880] hover:border-[#c5a880] flex items-center justify-center shadow-2xl transition-all disabled:opacity-20 disabled:cursor-not-allowed hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md`}
            aria-label="Next Page"
          >
            {isRTL ? <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" /> : <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />}
          </button>
        </div>

        {/* Bottom Pagination Scrub Bar & Thumbnails Drawer */}
        <div className="space-y-4">
          {/* Progress Slider */}
          <div className="max-w-xl mx-auto flex items-center gap-3">
            <button
              onClick={() => goToPage(1)}
              className="text-[11px] font-mono text-slate-400 hover:text-white transition-colors"
            >
              1
            </button>
            <input
              type="range"
              min="1"
              max={totalPages}
              value={currentPage}
              onChange={(e) => goToPage(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#c5a880]"
            />
            <button
              onClick={() => goToPage(totalPages)}
              className="text-[11px] font-mono text-slate-400 hover:text-white transition-colors"
            >
              {totalPages}
            </button>
          </div>

          {/* Horizontal Thumbnails Strip for Smooth Jumping */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-2 px-1 scrollbar-thin">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`flex-shrink-0 w-8 h-10 sm:w-9 sm:h-12 rounded-md flex flex-col items-center justify-center text-xs font-mono font-bold transition-all border cursor-pointer ${
                  currentPage === p
                    ? 'bg-[#c5a880] text-black border-[#c5a880] shadow-lg scale-105'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-white'
                }`}
              >
                <span>{p}</span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Table of Contents Drawer Modal */}
      <AnimatePresence>
        {showToc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white"
            >
              {/* Drawer Header */}
              <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <List className="w-5 h-5 text-[#c5a880]" />
                  <h3 className="font-bold text-base sm:text-lg">
                    {language === 'ar' ? 'فهرس صفحات بروفايل الشركة' : 'Company Profile Chapters'}
                  </h3>
                </div>
                <button
                  onClick={() => setShowToc(false)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chapters List */}
              <div className="p-4 sm:p-5 overflow-y-auto space-y-2 max-h-[60vh]">
                {chapters.map((ch, idx) => {
                  const Icon = ch.icon;
                  const isActive = currentPage === ch.page;
                  return (
                    <button
                      key={idx}
                      onClick={() => goToPage(ch.page)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all text-start cursor-pointer ${
                        isActive
                          ? 'bg-[#c5a880]/20 border-[#c5a880] text-white'
                          : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                          isActive ? 'bg-[#c5a880] text-black' : 'bg-slate-700 text-slate-300'
                        }`}>
                          {ch.page}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold">{ch.titleAr}</div>
                          <div className="text-[10px] text-slate-400 font-mono">{ch.titleEn}</div>
                        </div>
                      </div>
                      <Icon className="w-4 h-4 text-slate-500" />
                    </button>
                  );
                })}
              </div>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 bg-slate-950">
                <span>اختر أي صفحة للانتقال الفوري</span>
                <span className="font-mono text-[#c5a880]">29 PAGES</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
