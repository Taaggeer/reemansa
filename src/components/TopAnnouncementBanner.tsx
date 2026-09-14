import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Building2, 
  HardHat, 
  PhoneCall, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface BannerItem {
  id: string;
  icon: React.ElementType;
  badgeAr: string;
  badgeEn: string;
  badgeColor: string;
  titleAr: string;
  titleEn: string;
  actionTextAr: string;
  actionTextEn: string;
  actionUrl: string;
}

const bannerItems: BannerItem[] = [
  {
    id: 'safety',
    icon: ShieldCheck,
    badgeAr: 'اعتماد رسمي',
    badgeEn: 'Official Approval',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    titleAr: 'اعتماد فوري لمخططات السلامة والوقاية من الحريق وتراخيص الدفاع المدني عبر منصة سلامة',
    titleEn: 'Instant fire protection approval & Civil Defense licenses through Salamah portal',
    actionTextAr: 'طلب اعتماد سلامة',
    actionTextEn: 'Request Approval',
    actionUrl: 'https://wa.me/966559113990?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D8%B9%D8%AA%D9%85%D8%A7%D8%AF%20%D9%85%D8%AE%D8%B7%D8%B7%20%D8%B3%D9%84%D8%A7%D9%85%D8%A9%20%D8%B9%D8%A8%D8%B1%20%D9%85%D9%86%D8%B5%D8%A9%20%D8%B3%D9%84%D8%A7%D9%85%D8%A9'
  },
  {
    id: 'sbc',
    icon: Building2,
    badgeAr: 'كود البناء SBC',
    badgeEn: 'Saudi Code SBC',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    titleAr: 'تصميم معماري وإنشائي متكامل مطابق 100% لكود البناء السعودي مع إصدار رخص منصة بلدي',
    titleEn: 'Architectural & structural engineering 100% compliant with Saudi Building Code (SBC)',
    actionTextAr: 'طلب تصميم معماري',
    actionTextEn: 'Request Design',
    actionUrl: 'https://wa.me/966559113990?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D9%85%D8%B9%D9%85%D8%A7%D8%B1%D9%8A%20%D9%88%D8%A5%D9%86%D8%B4%D8%A7%D8%A6%D9%8A%20%D9%88%D9%81%D9%82%20%D9%83%D9%88%D8%AF%20%D8%A7%D9%84%D8%A8%D9%86%D8%A7%D8%A1%20%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A'
  },
  {
    id: 'supervision',
    icon: HardHat,
    badgeAr: 'إشراف معتمد',
    badgeEn: 'Site Supervision',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    titleAr: 'إشراف هندسي ميداني وفحص سلامة المباني القائمة وإصدار شهادات الإنجاز الفنية بالرياض',
    titleEn: 'Field engineering supervision, building structural safety inspections & certificates in Riyadh',
    actionTextAr: 'حجز مهندس إشراف',
    actionTextEn: 'Book Engineer',
    actionUrl: 'https://wa.me/966559113990?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A5%D8%B4%D8%B1%D8%A7%D9%81%20%D9%87%D9%86%D8%AF%D8%B3%D9%8A%20%D9%85%D9%8A%D8%AF%D8%A7%D9%86%D9%8A%20%D8%A3%D9%88%20%D9%81%D8%AD%D8%B5%20%D9%85%D8%A8%D9%86%D9%89'
  },
  {
    id: 'direct-call',
    icon: PhoneCall,
    badgeAr: 'استشارة مباشرة',
    badgeEn: 'Direct Consultation',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    titleAr: 'تواصل مباشر وسريع مع المهندس الاستشاري عبر الواتساب والهاتف: 0559113990',
    titleEn: 'Direct fast inquiry with certified consulting engineers via WhatsApp & phone: 0559113990',
    actionTextAr: '0559113990',
    actionTextEn: 'Call Now',
    actionUrl: 'tel:0559113990'
  }
];

export const TopAnnouncementBanner: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-advance banner every 4.5 seconds when not paused
  useEffect(() => {
    if (isPaused || !isVisible) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerItems.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, isVisible]);

  if (!isVisible) return null;

  const currentItem = bannerItems[currentIndex];
  const IconComponent = currentItem.icon;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % bannerItems.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + bannerItems.length) % bannerItems.length);
  };

  return (
    <div
      id="top-announcement-banner"
      className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border-b border-amber-500/25 shadow-inner overflow-hidden select-none z-40 transition-all"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Important announcements"
    >
      {/* Subtle glowing ambient accent */}
      <div className="absolute top-0 left-1/4 w-96 h-full bg-amber-500/10 blur-2xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-full bg-sky-500/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 relative flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Navigation Arrow: Prev */}
        <button
          onClick={isRTL ? handleNext : handlePrev}
          className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none flex-shrink-0"
          aria-label={isRTL ? 'التالي' : 'Previous announcement'}
          title={isRTL ? 'التالي' : 'Previous'}
        >
          {isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        {/* Dynamic Animated Content */}
        <div className="flex-1 min-w-0 overflow-hidden py-0.5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 flex-wrap sm:flex-nowrap"
            >
              {/* Pulsing Live indicator */}
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-[11px] text-slate-300 font-medium flex-shrink-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{language === 'ar' ? 'مباشر' : 'Live'}</span>
              </span>

              {/* Category Pill */}
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border flex-shrink-0 ${currentItem.badgeColor}`}
              >
                <IconComponent className="w-3 h-3 flex-shrink-0" />
                <span>{language === 'ar' ? currentItem.badgeAr : currentItem.badgeEn}</span>
              </span>

              {/* Text Headline */}
              <p className="text-xs sm:text-sm font-medium text-slate-200 truncate max-w-xl lg:max-w-2xl text-center sm:text-start">
                {language === 'ar' ? currentItem.titleAr : currentItem.titleEn}
              </p>

              {/* Interactive Direct CTA Link */}
              <a
                href={currentItem.actionUrl}
                target={currentItem.actionUrl.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-2.5 py-1 rounded-lg transition-all flex-shrink-0 active:scale-95"
              >
                <span>{language === 'ar' ? currentItem.actionTextAr : currentItem.actionTextEn}</span>
                {isRTL ? (
                  <ArrowLeft className="w-3 h-3" />
                ) : (
                  <ArrowRight className="w-3 h-3" />
                )}
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrow: Next + Indicators + Dismiss */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {/* Indicator Dots */}
          <div className="hidden md:flex items-center gap-1 px-1">
            {bannerItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all rounded-full ${
                  idx === currentIndex
                    ? 'w-4 h-1.5 bg-amber-400'
                    : 'w-1.5 h-1.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={isRTL ? handlePrev : handleNext}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none"
            aria-label={isRTL ? 'السابق' : 'Next announcement'}
            title={isRTL ? 'السابق' : 'Next'}
          >
            {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>

          {/* Close / Dismiss Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-full text-slate-400 hover:text-rose-400 hover:bg-slate-800/80 transition-colors focus:outline-none ml-1"
            aria-label={language === 'ar' ? 'إغلاق الإعلان' : 'Dismiss banner'}
            title={language === 'ar' ? 'إغلاق البنر' : 'Close'}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
