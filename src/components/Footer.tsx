import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, MessageCircle, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, isRTL, t } = useLanguage();

  const scrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800 ${
          isRTL ? 'text-right' : 'text-left'
        }`}>
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size={48} lightMode={true} />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
              {t('footer_desc')}
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>{t('footer_badge_cert')}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">{t('footer_links_title')}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ChevronIcon className="w-3 h-3 text-sky-400 flex-shrink-0" />
                  <span>{t('nav_home')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ChevronIcon className="w-3 h-3 text-sky-400 flex-shrink-0" />
                  <span>{t('nav_about')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ChevronIcon className="w-3 h-3 text-sky-400 flex-shrink-0" />
                  <span>{t('nav_services')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('gallery')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ChevronIcon className="w-3 h-3 text-sky-400 flex-shrink-0" />
                  <span>{t('nav_gallery')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('estimator')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ChevronIcon className="w-3 h-3 text-sky-400 flex-shrink-0" />
                  <span>{t('nav_estimator')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('testimonials')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ChevronIcon className="w-3 h-3 text-sky-400 flex-shrink-0" />
                  <span>{t('nav_testimonials')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ChevronIcon className="w-3 h-3 text-sky-400 flex-shrink-0" />
                  <span>{t('nav_contact')}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">{t('footer_services_title')}</h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-300">
                • {language === 'ar' ? 'التصميم المعماري ورخص البناء (بلدي)' : 'Architectural Design & Balady Permits'}
              </li>
              <li className="text-slate-300">
                • {language === 'ar' ? 'التصميم الإنشائي وفق كود البناء السعودي (SBC)' : 'Structural Design per Saudi Building Code (SBC)'}
              </li>
              <li className="text-rose-400 font-medium">
                • {language === 'ar' ? 'مخططات السلامة والوقاية من الحريق (سلامة)' : 'Fire Safety Plans & Civil Defense (Salamah)'}
              </li>
              <li className="text-slate-300">
                • {language === 'ar' ? 'الإشراف الهندسي واستلام حديد التسليح والصب' : 'Site Supervision & Concrete Inspection'}
              </li>
              <li className="text-slate-300">
                • {language === 'ar' ? 'تقارير السلامة الإنشائية وفحص المباني القائمة' : 'Structural Safety & Building Audits'}
              </li>
              <li className="text-slate-300">
                • {language === 'ar' ? 'تصميم أنظمة إطفاء وإنذار وتصريف دخان' : 'Fire Alarm, Suppression & Smoke Control'}
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">{t('footer_contact_title')}</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href="https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D9%85%D8%AD%D9%85%D8%AF+%D9%87%D8%A7%D8%AF%D9%8A+%D8%B1%D9%8A%D9%85%D8%A7%D9%86+%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9+%D9%88%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9%E2%80%AD/data=!4m2!3m1!1s0x0:0xac6fb6836721d8bd?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-amber-300 transition-colors group"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>{t('contact_address_val')}, {language === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:0559113990" className="hover:text-white font-mono text-sm font-bold" dir="ltr">
                  0559113990
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/966559113990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-mono text-sm font-bold"
                  dir="ltr"
                >
                  +966 55 911 3990
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar with copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {language === 'ar' ? 'شركة ريمان للإستشارات الهندسية والسلامة' : 'Reeman Engineering & Safety Consultancy Co.'}. {t('footer_rights')}</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>{t('footer_location_tag')}</span>
            <span>•</span>
            <span>{t('footer_certified_tag')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

