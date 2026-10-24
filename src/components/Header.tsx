import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import lgLogo from '../assets/images/lg_logo.webp';
import { Sparkles } from 'lucide-react';

const EVENT_DATE = new Date(2026, 10, 13); // Nov 13, 2026

const getDaysLeft = (): number => {
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.max(0, Math.round((EVENT_DATE.getTime() - start.getTime()) / 86400000));
};

export const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full glass-header">
      <div className="flex items-center justify-between pl-2 pr-4">
        {/* Left: official LG logo with strict clear space (p-4 = 16px on all sides) */}
        <div className="p-4">
          <img
            src={lgLogo}
            alt="LG Electronics"
            className="h-4 w-auto select-none"
            draggable={false}
          />
        </div>

        {/* Right: VIP badge, D-day capsule, ENG/KOR capsule toggle */}
        <div className="flex items-center gap-1.5">
          <span className="hidden min-[400px]:inline-flex items-center gap-1 px-2.5 py-1 rounded-full badge-gold text-[10px] font-bold tracking-wider whitespace-nowrap">
            <Sparkles className="w-3 h-3" />
            {t.header.vipAccess}
          </span>

          <span className="px-2.5 py-1 rounded-full bg-white/70 border border-zinc-300 text-[11px] font-semibold text-zinc-600 whitespace-nowrap">
            {t.header.dayPrefix}{getDaysLeft()}
          </span>

          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Toggle language ENG / KOR"
            className="flex items-center p-0.5 rounded-full bg-stone-200/60 border border-stone-300/70 text-[11px] font-semibold cursor-pointer select-none active:scale-95 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
          >
            <span
              className={`px-2 py-1 rounded-full transition-all duration-200 ${
                language === 'en'
                  ? 'bg-white text-zinc-900 shadow-sm'
                  : 'text-stone-500'
              }`}
            >
              ENG
            </span>
            <span
              className={`px-2 py-1 rounded-full transition-all duration-200 ${
                language === 'ko'
                  ? 'bg-white text-zinc-900 shadow-sm'
                  : 'text-stone-500'
              }`}
            >
              KOR
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
