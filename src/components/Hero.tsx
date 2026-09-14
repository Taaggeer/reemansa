import React from 'react';
import { Phone, MessageCircle, ArrowLeft, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onExploreServices: () => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onRequestQuote }) => {
  const { language, isRTL, t } = useLanguage();

  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-950 via-[#0a1122] to-slate-950 text-white overflow-hidden pt-12 pb-20 md:py-24">
      {/* Top Animated Shimmering Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-400 via-amber-300 to-transparent opacity-80 animate-gradient-flow" />

      {/* Floating Animated Color Mesh Orbs (Hardware-accelerated) */}
      <div className="absolute top-[-10%] left-[15%] w-[520px] h-[520px] bg-sky-500/20 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[-10%] right-[10%] w-[480px] h-[480px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none animate-float-reverse" />
      <div className="absolute top-[40%] right-[25%] w-[380px] h-[380px] bg-rose-600/12 rounded-full blur-[110px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] left-[5%] w-[320px] h-[320px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none animate-float-reverse" />

      {/* Blueprint Dot Matrix & Coordinate Grid Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1.2px,transparent_1.2px)] [background-size:28px_28px]" />
      
      {/* Engineering Drafting Grid */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '84px 84px'
        }}
      />

      {/* Architectural Geometric CAD Watermark & Rotating Compass (SVG) */}
      <div className="absolute -top-16 -right-16 lg:right-4 lg:top-4 w-[460px] h-[460px] pointer-events-none opacity-25 hidden sm:block">
        <svg viewBox="0 0 400 400" className="w-full h-full animate-blueprint-rotate text-sky-400/40" fill="none">
          {/* Outer Compass Dial */}
          <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
          <circle cx="200" cy="200" r="115" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 5" />
          <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.8" />
          
          {/* Crosshair Axes & Quadrants */}
          <line x1="200" y1="5" x2="200" y2="395" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
          <line x1="5" y1="200" x2="395" y2="200" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
          <line x1="60" y1="60" x2="340" y2="340" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
          <line x1="340" y1="60" x2="60" y2="340" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />

          {/* Geometric Triangle / Protractor */}
          <polygon points="200,40 338,280 62,280" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />

          {/* Precision Tick Marks */}
          <circle cx="200" cy="10" r="2.5" fill="currentColor" />
          <circle cx="390" cy="200" r="2.5" fill="currentColor" />
          <circle cx="200" cy="390" r="2.5" fill="currentColor" />
          <circle cx="10" cy="200" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* Subtle CAD Dimension Lines & Engineering Ticks */}
      <div className="absolute bottom-8 left-12 hidden xl:flex items-center gap-2 pointer-events-none opacity-40 font-mono text-[10px] text-sky-300">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
        <span className="border-t border-sky-400/60 w-16 inline-block" />
        <span>SBC 1101 / 801 COMPLIANT</span>
        <span className="border-t border-sky-400/60 w-10 inline-block" />
        <span className="text-amber-300">SEC. 24°46'N 46°46'E</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Column */}
          <div className={`lg:col-span-7 space-y-7 ${isRTL ? 'text-right' : 'text-left'}`}>
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs font-semibold text-sky-300 backdrop-blur-sm shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t('hero_badge')}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.25] text-white">
                {language === 'ar' ? (
                  <>
                    شركة <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-amber-200 via-sky-300 to-sky-400 animate-gradient-flow font-black">ريمان</span> للإستشارات
                    <span className="block text-white mt-1">الهندسية والسلامة</span>
                  </>
                ) : (
                  <>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-amber-200 via-sky-300 to-sky-400 animate-gradient-flow font-black">Reeman</span> Engineering &
                    <span className="block text-white mt-1">Safety Consultancy Co.</span>
                  </>
                )}
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {t('hero_desc')}
              </p>
            </div>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>{t('stats_guarantee_2')}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>{t('stats_guarantee_1')}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>{language === 'ar' ? 'إصدار وتجديد رخص البناء وشهادات الإشغال' : 'Building permits & Certificate of Occupancy'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>{language === 'ar' ? 'إشراف هندسي ميداني صارم وتقارير سلامة دورية' : 'Certified site supervision & structural audit reports'}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://wa.me/966559113990?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9%20%D9%85%D9%86%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%B1%D9%8A%D9%85%D8%A7%D9%86"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg shadow-emerald-950/50 hover:shadow-emerald-600/30 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{language === 'ar' ? 'محادثة واتساب فورية' : 'WhatsApp Consultation'}</span>
              </a>

              <a
                href="tel:0559113990"
                className="flex items-center justify-center gap-2.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all active:scale-95"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span dir="ltr">0559113990</span>
              </a>

              <button
                onClick={onExploreServices}
                className="flex items-center justify-center gap-2 text-slate-300 hover:text-white px-4 py-3.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
              >
                <span>{t('hero_cta_services')}</span>
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>

            {/* Address callout */}
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>{t('hero_address_note')}</span>
            </div>
          </div>

          {/* Right Visual Card Column */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Card Backlight */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 via-amber-500/10 to-rose-500/20 rounded-3xl blur-xl opacity-75 pointer-events-none" />
            
            <div className="relative mx-auto max-w-md bg-slate-900/90 rounded-2xl border border-slate-700/70 p-6 shadow-2xl backdrop-blur-md">
              {/* Card Header with Technical Draft Aesthetic */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-sky-400" />
                  <span className="font-bold text-white text-sm">
                    {language === 'ar' ? 'مجالات الاستشارات الرئيسية' : 'Key Engineering Pillars'}
                  </span>
                </div>
                <span className="text-[11px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
                  RIYADH 13211
                </span>
              </div>

              {/* Service Pillars Mini Dashboard */}
              <div className="mt-5 space-y-3.5">
                {/* 1. Architecture */}
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-sky-500/50 transition-all group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-sm">
                        01
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm group-hover:text-sky-400 transition-colors">
                          {language === 'ar' ? 'الهندسة المعمارية والتصميم' : 'Architectural Design'}
                        </h4>
                        <p className="text-xs text-slate-400">
                          {language === 'ar' 
                            ? 'مخططات تنفيذية، تصميم واجهات، وتصاميم داخلية عصرية' 
                            : 'Execution blueprints, modern facades & interior layouts'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Civil & Structural */}
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-500/50 transition-all group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-sm">
                        02
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm group-hover:text-amber-400 transition-colors">
                          {language === 'ar' ? 'الهندسة المدنية والإنشائية' : 'Civil & Structural Engineering'}
                        </h4>
                        <p className="text-xs text-slate-400">
                          {language === 'ar'
                            ? 'حسابات الأحمال، كود SBC، فحص التربة، والإشراف الهندسي'
                            : 'Load calculations, SBC code, site supervision & foundation'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Safety & Civil Defense */}
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-rose-900/50 hover:border-rose-500 transition-all group bg-gradient-to-l from-rose-950/20 to-transparent">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-sm">
                        03
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-white text-sm group-hover:text-rose-400 transition-colors">
                            {language === 'ar' ? 'استشارات السلامة والوقاية من الحريق' : 'Fire Safety & Civil Defense'}
                          </h4>
                          <span className="text-[10px] bg-rose-500/20 text-rose-300 px-1.5 py-0.2 rounded font-medium">
                            {language === 'ar' ? 'منصة سلامة' : 'Salamah'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">
                          {language === 'ar'
                            ? 'مخططات الدفاع المدني، شبكات الإطفاء والإنذار، ورخص الإشغال'
                            : 'Civil Defense plans, fire alarms, sprinklers & occupancy licensing'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-400">
                    {language === 'ar' ? 'للتواصل السريع والحجز' : 'Direct Booking & Inquiries'}
                  </span>
                  <a href="tel:0559113990" className="text-sm font-bold text-amber-400 hover:underline" dir="ltr">
                    0559113990
                  </a>
                </div>
                <button
                  onClick={onRequestQuote}
                  className="bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  {t('hero_cta_quote')}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
