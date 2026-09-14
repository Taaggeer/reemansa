import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MessageCircle, Menu, X, ShieldCheck, MapPin, Clock, Globe, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TopAnnouncementBanner } from './TopAnnouncementBanner';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, isRTL, t } = useLanguage();
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          setIsScrolled(currentScrollY > 20);

          // If mobile menu is open and user scrolls significantly, close it
          if (mobileMenuOpen) {
            if (Math.abs(currentScrollY - lastScrollY.current) > 50) {
              setMobileMenuOpen(false);
            }
            setIsVisible(true);
            lastScrollY.current = currentScrollY;
            ticking = false;
            return;
          }

          // Always visible near the top of the page
          if (currentScrollY <= 80) {
            setIsVisible(true);
          } else {
            const diff = currentScrollY - lastScrollY.current;
            // Scrolling down by more than 10px -> hide navbar while browsing
            if (diff > 10) {
              setIsVisible(false);
            }
            // Scrolling up by more than 10px -> reveal navbar
            else if (diff < -10) {
              setIsVisible(true);
            }
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setIsVisible(true);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      {/* Dynamic Animated Engineering Announcement Banner */}
      <TopAnnouncementBanner />

      {/* Top micro bar with contact info & address for trust */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D9%85%D8%AD%D9%85%D8%AF+%D9%87%D8%A7%D8%AF%D9%8A+%D8%B1%D9%8A%D9%85%D8%A7%D9%86+%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9+%D9%88%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9%E2%80%AD/data=!4m2!3m1!1s0x0:0xac6fb6836721d8bd?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              title="موقع الشركة على خرائط Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>{t('nav_address_bar')}</span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>{t('nav_hours')}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t('nav_accredited')}</span>
            </div>
            <a
              href="tel:0559113990"
              className="flex items-center gap-1 hover:text-amber-400 transition-colors font-semibold"
              dir="ltr"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>0559113990</span>
            </a>
            {/* Quick Language switch button in top micro bar */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 text-sky-300 hover:text-white border border-slate-700 transition-colors cursor-pointer text-[11px] font-medium"
              title={language === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              <Globe className="w-3 h-3 text-sky-400" />
              <span>{language === 'ar' ? 'English' : 'عربي'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`bg-white/95 backdrop-blur-md transition-shadow duration-200 ${
          isScrolled ? 'shadow-md py-3' : 'shadow-sm py-4'
        } border-b border-slate-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="focus:outline-none"
          >
            <Logo size={46} />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-sky-700 transition-colors cursor-pointer py-1"
            >
              {t('nav_home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-sky-700 transition-colors cursor-pointer py-1"
            >
              {t('nav_about')}
            </button>
            <button
              onClick={() => scrollToSection('services-arch')}
              className="hover:text-sky-700 transition-colors cursor-pointer py-1"
            >
              {language === 'ar' ? 'الهندسة المعمارية' : 'Architecture'}
            </button>
            <button
              onClick={() => scrollToSection('services-civil')}
              className="hover:text-sky-700 transition-colors cursor-pointer py-1"
            >
              {language === 'ar' ? 'الهندسة المدنية' : 'Civil & Structural'}
            </button>
            <button
              onClick={() => scrollToSection('services-safety')}
              className="hover:text-sky-700 transition-colors cursor-pointer py-1 flex items-center gap-1 text-rose-700"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              <span>{language === 'ar' ? 'استشارات السلامة' : 'Safety & Civil Defense'}</span>
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="hover:text-sky-700 transition-colors cursor-pointer py-1"
            >
              {t('nav_gallery')}
            </button>
            <button
              onClick={() => scrollToSection('company-profile')}
              className="hover:text-amber-800 transition-all cursor-pointer py-1 flex items-center gap-1.5 font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 px-2.5 rounded-lg border border-amber-300 shadow-2xs"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-700" />
              <span>{t('nav_profile')}</span>
            </button>
            <button
              onClick={() => scrollToSection('estimator')}
              className="hover:text-sky-700 transition-colors cursor-pointer py-1"
            >
              {t('nav_estimator')}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="hover:text-sky-700 transition-colors cursor-pointer py-1"
            >
              {t('nav_testimonials')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-sky-700 transition-colors cursor-pointer py-1"
            >
              {t('nav_contact')}
            </button>
          </div>

          {/* Direct CTA Buttons & Language Switcher */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Prominent Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              id="lang-toggle-desktop"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 bg-slate-50 hover:bg-sky-50 hover:border-sky-300 text-slate-700 hover:text-sky-700 transition-all cursor-pointer active:scale-95 shadow-2xs"
              title={language === 'ar' ? 'Switch to English' : 'التحويل إلى اللغة العربية'}
            >
              <Globe className="w-3.5 h-3.5 text-sky-600" />
              <span>{language === 'ar' ? 'EN / English' : 'عربي / Arabic'}</span>
            </button>

            <a
              href="https://wa.me/966559113990?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%B1%D9%8A%D9%85%D8%A7%D9%86%20%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm shadow-emerald-200 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('nav_whatsapp')}</span>
            </a>

            <a
              href="tel:0559113990"
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span dir="ltr">0559113990</span>
            </a>
          </div>

          {/* Mobile Menu Button & Mobile Quick Language Switch */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              id="lang-toggle-mobile-header"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200"
              title={language === 'ar' ? 'English' : 'عربي'}
            >
              <Globe className="w-3.5 h-3.5 text-sky-600" />
              <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
            <a
              href="tel:0559113990"
              className="p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200"
              aria-label={t('nav_call_now')}
            >
              <Phone className="w-5 h-5 text-sky-700" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 focus:outline-none"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
            {/* Language Switch Bar in Mobile Menu */}
            <div className="mb-3 pb-3 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                {language === 'ar' ? 'لغة الموقع / Language:' : 'Website Language / اللغة:'}
              </span>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 border border-sky-200 text-xs font-bold"
              >
                <Globe className="w-3.5 h-3.5 text-sky-600" />
                <span>{language === 'ar' ? 'English (تبديل للإنجليزية)' : 'العربية (Switch to Arabic)'}</span>
              </button>
            </div>

            <div className={`flex flex-col space-y-3 font-semibold text-slate-800 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
              <button
                onClick={() => scrollToSection('home')}
                className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {t('nav_home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {t('nav_about')}
              </button>
              <button
                onClick={() => scrollToSection('services-arch')}
                className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {language === 'ar' ? 'خدمات الهندسة المعمارية' : 'Architectural Engineering Services'}
              </button>
              <button
                onClick={() => scrollToSection('services-civil')}
                className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {language === 'ar' ? 'خدمات الهندسة المدنية والإنشائية' : 'Civil & Structural Engineering Services'}
              </button>
              <button
                onClick={() => scrollToSection('services-safety')}
                className={`py-2 px-3 rounded-lg hover:bg-rose-50 text-rose-700 transition-colors flex items-center justify-between ${isRTL ? 'text-right' : 'text-left'}`}
              >
                <span>{language === 'ar' ? 'استشارات السلامة والوقاية من الحريق' : 'Fire Safety & Civil Defense Consultancy'}</span>
                <span className="text-[11px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">
                  {language === 'ar' ? 'معتمد للدفاع المدني' : 'Civil Defense Accredited'}
                </span>
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {t('nav_gallery')}
              </button>
              <button
                onClick={() => scrollToSection('company-profile')}
                className={`py-2.5 px-3 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 font-bold flex items-center justify-between ${isRTL ? 'text-right' : 'text-left'}`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-700" />
                  <span>{t('nav_profile')}</span>
                </div>
                <span className="text-[11px] bg-amber-200/90 text-amber-950 font-semibold px-2 py-0.5 rounded-full">
                  {language === 'ar' ? 'تفاعلي' : 'Interactive'}
                </span>
              </button>
              <button
                onClick={() => scrollToSection('estimator')}
                className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {t('nav_estimator')}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {t('nav_testimonials')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {t('nav_contact')}
              </button>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
              <a
                href="tel:0559113990"
                className="flex items-center justify-center gap-2 bg-slate-900 text-white py-2.5 rounded-xl font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{t('nav_call_now')}</span>
              </a>
              <a
                href="https://wa.me/966559113990?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9%20%D9%85%D9%86%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%B1%D9%8A%D9%85%D8%A7%D9%86"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-xl font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('nav_whatsapp')}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

