import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 48,
  showText = true,
  lightMode = false,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Exact Circular Emblem from user uploaded image */}
      <div 
        className="relative flex-shrink-0 flex items-center justify-center rounded-full bg-slate-100 shadow-sm border border-slate-300 overflow-hidden"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="emblemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
          </defs>

          {/* Background circle */}
          <circle cx="60" cy="60" r="58" fill="url(#emblemGrad)" />
          <circle cx="60" cy="60" r="54" stroke="#CBD5E1" strokeWidth="2.5" />
          <circle cx="60" cy="60" r="50" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

          {/* Left Architectural Square & Axis Column */}
          <g transform="translate(26, 44)">
            {/* Box */}
            <rect
              x="0"
              y="0"
              width="28"
              height="28"
              rx="2.5"
              fill="#FFFFFF"
              fillOpacity="0.8"
              stroke="#0F172A"
              strokeWidth="3.2"
              strokeLinejoin="round"
            />
            {/* Structural vertical beam line */}
            <line
              x1="14"
              y1="-6"
              x2="14"
              y2="34"
              stroke="#0284C7"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Center tick */}
            <line
              x1="8"
              y1="14"
              x2="20"
              y2="14"
              stroke="#0284C7"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* Stylized 'R' Mark */}
          <g transform="translate(42, 30)">
            {/* Vertical stem */}
            <path
              d="M 14 10 L 14 44"
              stroke="#0F172A"
              strokeWidth="4.8"
              strokeLinecap="round"
            />
            {/* Curved upper bowl */}
            <path
              d="M 14 10 C 28 10, 38 12, 38 24 C 38 34, 28 36, 14 36"
              stroke="#0F172A"
              strokeWidth="4.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Architectural diagonal leg extending down and out */}
            <path
              d="M 25 35 L 48 59"
              stroke="#0F172A"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Safety ruby/amber accent node */}
            <circle cx="48" cy="59" r="2.8" fill="#DC2626" />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-right">
          <span
            className={`font-bold tracking-tight text-lg leading-tight ${
              lightMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            ريمان للإستشارات الهندسية
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-1.5 py-0.2 rounded border border-rose-200">
              والسلامة
            </span>
            <span
              className={`text-[10px] tracking-wider uppercase font-medium ${
                lightMode ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              REEMAN ENGINEERING & SAFETY
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
