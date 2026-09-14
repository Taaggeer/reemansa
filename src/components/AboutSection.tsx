import React from 'react';
import { ShieldCheck, Compass, Target, Award, Users, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { language, isRTL, t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Profile Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative p-7 rounded-3xl bg-slate-900 text-white shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-rose-500/10 rounded-full blur-2xl" />

              {/* Company Logo Header in Card */}
              <div className="relative pb-6 border-b border-slate-800">
                <Logo size={56} lightMode={true} />
              </div>

              {/* Office Details */}
              <div className="relative mt-6 space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold text-sm">
                      {language === 'ar' ? 'المقر الرئيسي:' : 'Headquarters:'}
                    </strong>
                    <span>{t('contact_address_val')}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold text-sm">
                      {language === 'ar' ? 'التخصص والاعتماد:' : 'Specialization & Accreditation:'}
                    </strong>
                    <span>
                      {language === 'ar' 
                        ? 'استشارات هندسية معمارية ومدنية معتمدة + اعتماد الدفاع المدني (سلامة)'
                        : 'Certified Architectural & Civil Consultancy + Civil Defense (Salamah) Accreditation'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Highlights */}
              <div className="relative mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 gap-4 text-center">
                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                  <div className="text-2xl font-black text-amber-400">100%</div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    {language === 'ar' ? 'مطابقة كود SBC' : 'SBC Code Compliant'}
                  </div>
                </div>
                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                  <div className="text-2xl font-black text-emerald-400">
                    {language === 'ar' ? 'معتمد' : 'Accredited'}
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    {language === 'ar' ? 'دفاع مدني & بلدي' : 'Civil Defense & Balady'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Philosophy Column */}
          <div className={`lg:col-span-7 space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-sky-700" />
              <span>{t('about_badge')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {t('about_heading')}
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              {t('about_p1')}
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              {t('about_p2')}
            </p>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
                  <Target className="w-4 h-4 text-sky-600" />
                  <span>{t('about_val1_title')}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t('about_val1_desc')}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-rose-600" />
                  <span>{t('about_val2_title')}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t('about_val2_desc')}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                  <Compass className="w-4 h-4 text-amber-600" />
                  <span>{t('about_val3_title')}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t('about_val3_desc')}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span>{t('about_val4_title')}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t('about_val4_desc')}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

