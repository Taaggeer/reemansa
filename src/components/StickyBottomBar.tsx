import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const StickyBottomBar: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const phoneNumber = '0559113990';
  const whatsappUrl = 'https://wa.me/966559113990?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9%20%D9%85%D9%86%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%B1%D9%8A%D9%85%D8%A7%D9%86%20%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9';

  return (
    <>
      {/* Mobile Sticky Bottom Bar (Always docked on small/medium devices) */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          {/* Call Button */}
          <a
            id="mobile-call-btn"
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center gap-2 bg-slate-900 active:bg-slate-800 text-white py-3 px-3 rounded-xl font-bold text-sm shadow-sm transition-transform active:scale-95"
            aria-label={language === 'ar' ? 'اتصل الآن' : 'Call Now'}
          >
            <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className={`flex flex-col leading-none ${isRTL ? 'text-right' : 'text-left'}`}>
              <span className="text-[10px] text-slate-300 font-normal">
                {language === 'ar' ? 'اتصال هاتفي' : 'Phone Call'}
              </span>
              <span className="font-mono text-xs font-bold text-amber-300 mt-0.5" dir="ltr">{phoneNumber}</span>
            </div>
          </a>

          {/* WhatsApp Button */}
          <a
            id="mobile-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-emerald-600 active:bg-emerald-700 text-white py-3 px-3 rounded-xl font-bold text-sm shadow-md shadow-emerald-700/20 transition-transform active:scale-95"
            aria-label={language === 'ar' ? 'محادثة واتساب' : 'WhatsApp'}
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div className={`flex flex-col leading-none ${isRTL ? 'text-right' : 'text-left'}`}>
              <span className="text-[10px] text-emerald-100 font-normal">
                {language === 'ar' ? 'واتساب مباشر' : 'WhatsApp'}
              </span>
              <span className="text-xs font-bold text-white mt-0.5">
                {language === 'ar' ? 'تواصل فوري' : 'Instant Chat'}
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Desktop Floating Action Buttons */}
      <div className={`hidden md:flex fixed bottom-6 z-50 flex-col gap-3 ${
        isRTL ? 'left-6 items-start' : 'right-6 items-end'
      }`}>
        {/* Quick Call Pill */}
        <a
          href={`tel:${phoneNumber}`}
          className="group flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-full shadow-lg border border-slate-700 transition-all hover:scale-105 active:scale-95"
          title={language === 'ar' ? 'اتصل بشركة ريمان' : 'Call Reeman'}
        >
          <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div className={`flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
            <span className="text-[10px] text-slate-400">
              {language === 'ar' ? 'اتصل بنا مباشرة' : 'Direct Call'}
            </span>
            <span className="text-xs font-bold font-mono text-amber-300" dir="ltr">{phoneNumber}</span>
          </div>
        </a>

        {/* WhatsApp Pill */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-full shadow-lg shadow-emerald-900/30 transition-all hover:scale-105 active:scale-95"
          title={language === 'ar' ? 'محادثة واتساب مباشرة' : 'Direct WhatsApp'}
        >
          <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div className={`flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
            <span className="text-[10px] text-emerald-100">
              {language === 'ar' ? 'واتساب المهندس' : 'Consultant WhatsApp'}
            </span>
            <span className="text-xs font-bold">
              {language === 'ar' ? 'محادثة فورية' : 'Instant Chat'}
            </span>
          </div>
        </a>
      </div>
    </>
  );
};

