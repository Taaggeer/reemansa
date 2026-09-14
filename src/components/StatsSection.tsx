import React, { useEffect, useState, useRef } from 'react';
import { Building2, ShieldCheck, Award, Users, CheckCircle2, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  isInView: boolean;
}

const AnimatedCounter: React.FC<CounterProps> = ({
  target,
  duration = 2000,
  suffix = '',
  prefix = '',
  isInView,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutQuad = (t: number) => t * (2 - t);

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, target, duration]);

  return (
    <span className="font-extrabold font-mono tracking-tight" dir="ltr">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const { language, isRTL, t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: 'projects',
      target: 480,
      suffix: '+',
      title: t('stats_completed_projects'),
      description: language === 'ar' 
        ? 'مخططات معمارية وإنشائية وفلل وأبراج بالرياض' 
        : 'Architectural, structural blueprints, villas & towers in Riyadh',
      icon: Building2,
      color: 'from-sky-500 to-blue-600',
      badge: language === 'ar' ? 'إنجاز معتمد' : 'Approved',
    },
    {
      id: 'safety',
      target: 850,
      suffix: '+',
      title: t('stats_safety_licenses'),
      description: language === 'ar' 
        ? 'اعتماد رسمي لدى الدفاع المدني عبر منصة سلامة' 
        : 'Official Civil Defense accreditation via Salamah portal',
      icon: ShieldCheck,
      color: 'from-rose-500 to-red-600',
      badge: language === 'ar' ? 'دفاع مدني' : 'Civil Defense',
    },
    {
      id: 'experience',
      target: 15,
      suffix: '+',
      title: t('stats_years_experience'),
      description: language === 'ar' 
        ? 'نخبة من المهندسين الاستشاريين ذوي الكفاءة العالية' 
        : 'Elite team of highly qualified chartered engineering consultants',
      icon: Award,
      color: 'from-amber-500 to-amber-600',
      badge: language === 'ar' ? 'خبرة عريقة' : 'Heritage',
    },
    {
      id: 'satisfaction',
      target: 99,
      suffix: '%',
      title: t('stats_satisfaction'),
      description: language === 'ar' 
        ? 'التزام كامل بمواعيد التسليم ودقة المخططات الفنية' 
        : 'Total dedication to deadlines and meticulous technical blueprints',
      icon: Users,
      color: 'from-emerald-500 to-teal-600',
      badge: language === 'ar' ? 'ثقة متجددة' : 'High Trust',
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative py-14 bg-slate-900 text-white overflow-hidden border-y border-slate-800"
    >
      {/* Blueprint Grid Texture */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Soft atmospheric gradient blurs */}
      <div className="absolute -top-12 right-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 left-1/4 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          <div className={`space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-sky-400 text-xs font-bold border border-slate-700">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{t('stats_badge')}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {t('stats_heading')}
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/60 px-4 py-2 rounded-xl border border-slate-700/60">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>
              {language === 'ar' 
                ? 'مشاريع جارية ومنجزة في الرياض ومناطق المملكة' 
                : 'Active & completed projects in Riyadh & across KSA'}
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="relative bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-200 group flex flex-col justify-between shadow-sm hover:shadow-lg"
              >
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 shadow-md`}>
                    <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-slate-100" />
                    </div>
                  </div>
                  
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700">
                    {item.badge}
                  </span>
                </div>

                {/* Counter Number */}
                <div className="space-y-1 my-2">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                    <AnimatedCounter
                      target={item.target}
                      suffix={item.suffix}
                      isInView={isInView}
                      duration={2200}
                    />
                  </div>
                  <h3 className="font-bold text-slate-200 text-sm sm:text-base pt-1">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/80 mt-2">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Micro-Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 text-center">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{t('stats_guarantee_1')}</span>
          </div>
          <span className="hidden sm:inline text-slate-700">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>{t('stats_guarantee_2')}</span>
          </div>
          <span className="hidden sm:inline text-slate-700">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>{t('stats_guarantee_3')}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

