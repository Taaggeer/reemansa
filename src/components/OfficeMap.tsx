import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check, 
  Phone, 
  Clock, 
  Compass, 
  Maximize2,
  ShieldCheck
} from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { useLanguage } from '../context/LanguageContext';

// Exact coordinates for Reeman Engineering office in Al-Rawdah, Riyadh
const OFFICE_COORDINATES = {
  lat: 24.7570,
  lng: 46.7780
};

const GOOGLE_MAPS_PLACE_URL = "https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D9%85%D8%AD%D9%85%D8%AF+%D9%87%D8%A7%D8%AF%D9%8A+%D8%B1%D9%8A%D9%85%D8%A7%D9%86+%D9%84%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9+%D9%88%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9%E2%80%AD/data=!4m2!3m1!1s0x0:0xac6fb6836721d8bd?sa=X&ved=1t:2428&ictx=111";
const GOOGLE_MAPS_DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=24.7570,46.7780";
const APPLE_MAPS_URL = "https://maps.apple.com/?daddr=24.7570,46.7780&dirflg=d";

export const OfficeMap: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(16);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const handleCopyAddress = () => {
    const address = language === 'ar'
      ? 'شركة محمد هادي ريمان للإستشارات الهندسية والسلامة، شارع الحسن بن علي، حي الروضة، الرياض 13211، المملكة العربية السعودية (24.7570, 46.7780)'
      : 'Mohammad Hadi Reeman Engineering & Safety Consultancy, Al-Hassan Ibn Ali St., Ar Rawdah, Riyadh 13211, Saudi Arabia (24.7570, 46.7780)';
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Map Header / Navigation Bar */}
      <div className="p-4 sm:p-6 bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <MapPin className="w-4 h-4" />
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white">
              {t('contact_map_title')}
            </h4>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{t('contact_map_status')}</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            {t('contact_map_subtitle')}
          </p>
        </div>

        {/* Action Buttons for Easy Client Navigation */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          {/* Turn-by-Turn Directions */}
          <a
            href={GOOGLE_MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 flex-1 sm:flex-initial"
            title="ابدأ الملاحة عبر خرائط جوجل"
          >
            <Navigation className="w-4 h-4 text-slate-950 flex-shrink-0" />
            <span>{t('contact_map_directions')}</span>
          </a>

          {/* Copy National Address */}
          <button
            onClick={handleCopyAddress}
            className="inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold px-3 py-2.5 rounded-xl transition-all border border-slate-700 cursor-pointer"
            title={t('contact_map_copy')}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-bold">{t('contact_map_copied')}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>{t('contact_map_copy')}</span>
              </>
            )}
          </button>

          {/* Open full place page */}
          <a
            href={GOOGLE_MAPS_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            title={t('contact_map_view_google')}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Interactive Map Canvas Container (Explicit Height for CF2 compliance) */}
      <div className="relative w-full h-[400px] sm:h-[460px] bg-slate-100 overflow-hidden">
        {apiKey ? (
          // Full Maps JavaScript SDK with AdvancedMarkerElement & Official Attribution ID
          <APIProvider apiKey={apiKey} language={language} region="SA">
            <Map
              style={{ width: '100%', height: '100%' }}
              defaultCenter={OFFICE_COORDINATES}
              defaultZoom={zoomLevel}
              gestureHandling="cooperative"
              disableDefaultUI={false}
              mapId="DEMO_MAP_ID"
              internalUsageAttributionIds={["gmp_mcp_codeassist_v1_aistudio"]}
            >
              <AdvancedMarker position={OFFICE_COORDINATES} title="شركة ريمان للإستشارات الهندسية والسلامة">
                <Pin background="#0f172a" glyphColor="#fbbf24" borderColor="#ffffff" scale={1.2} />
              </AdvancedMarker>
            </Map>
          </APIProvider>
        ) : (
          // Interactive Google Maps Embed view centered on exact coordinates in Riyadh
          <iframe
            title="Google Map Office Location - Reeman Engineering Riyadh"
            src={`https://maps.google.com/maps?q=24.7570,46.7780&hl=${language}&z=${zoomLevel}&output=embed`}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}

        {/* Floating Quick Office Card Over Map */}
        <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} z-10 max-w-xs sm:max-w-sm bg-slate-900/95 backdrop-blur-md text-white p-4 rounded-2xl border border-slate-700/80 shadow-xl space-y-3 pointer-events-auto`}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                {language === 'ar' ? 'المقر الرئيسي المعتمد' : 'Headquarters'}
              </span>
              <h5 className="text-xs sm:text-sm font-bold text-white leading-snug">
                {language === 'ar' ? 'شركة محمد هادي ريمان للإستشارات الهندسية والسلامة' : 'Reeman Engineering & Safety Consultancy'}
              </h5>
            </div>
            <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 border border-amber-500/30">
              <ShieldCheck className="w-4 h-4" />
            </span>
          </div>

          <div className="space-y-1.5 text-[11px] text-slate-300 border-t border-slate-800 pt-2.5">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>{t('contact_address_val')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
              <span>{t('contact_hours_val')}</span>
            </div>
            <div className="flex items-center gap-2 font-mono">
              <Compass className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span dir="ltr">24.7570° N, 46.7780° E</span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1 border-t border-slate-800/80">
            <a
              href="tel:0559113990"
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-bold py-2 rounded-lg transition-colors border border-slate-700"
              dir="ltr"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>0559113990</span>
            </a>
            <a
              href={GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold py-2 rounded-lg transition-colors shadow-sm"
            >
              <Navigation className="w-3 h-3" />
              <span>{language === 'ar' ? 'الاتجاهات' : 'Directions'}</span>
            </a>
          </div>
        </div>

        {/* Quick App Link Badges in Top Corner */}
        <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10 hidden sm:flex items-center gap-2`}>
          <a
            href={GOOGLE_MAPS_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-slate-800 hover:text-sky-700 text-xs font-bold shadow-md hover:bg-white transition-all border border-slate-200"
          >
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span>Google Maps</span>
          </a>
          <a
            href={APPLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-slate-800 hover:text-slate-950 text-xs font-bold shadow-md hover:bg-white transition-all border border-slate-200"
          >
            <Navigation className="w-3.5 h-3.5 text-sky-500" />
            <span>Apple Maps</span>
          </a>
        </div>
      </div>

      {/* Map Footer Bar with Landmarks & District Details */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <span className="font-bold text-slate-800">
            {language === 'ar' ? 'معالم قريبة لسهولة الوصول:' : 'Nearby Landmarks:'}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium">
            {language === 'ar' ? 'طريق خريص' : 'Khurais Road'}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium">
            {language === 'ar' ? 'شارع خالد بن الوليد' : 'Khalid Ibn Al Walid St'}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium">
            {language === 'ar' ? 'شارع الحسن بن علي' : 'Al Hassan Ibn Ali St'}
          </span>
        </div>

        <span className="text-[11px] text-slate-500 font-mono" dir="ltr">
          Riyadh 13211 — Ar Rawdah District
        </span>
      </div>
    </div>
  );
};
