import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import milestoneImg from '../assets/images/10m_milestone.png';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  // "Friday, Nov 13, 2026 · 12:00 PM CST · Clarksville, Tennessee" -> [date, time, place]
  const [date, time, place] = t.hero.eventMeta.split(' · ');

  return (
    <section className="relative px-4 pt-5 pb-4">
      {/* Translucent glass panel: stretched to edges with minimal padding */}
      <div className="w-full rounded-[24px] px-5 py-6 text-center bg-white/[0.15] backdrop-blur-xl border border-white/20 shadow-[0_12px_36px_rgba(80,0,20,0.18)] drop-shadow-sm">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm border border-black/10 text-zinc-800 text-[10px] font-bold tracking-[0.18em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold" aria-hidden />
          {t.hero.milestoneBadge}
        </span>

        {/* Transparent PNG: blends straight into the glass */}
        <img
          src={milestoneImg}
          alt="10M Milestone"
          className="mx-auto mt-3 h-[64px] w-auto select-none drop-shadow-[0_2px_10px_rgba(255,255,255,0.7)]"
          draggable={false}
        />

        <h1 className="mt-3 leading-none">
          <span className="block text-[clamp(34px,11vw,48px)] font-black tracking-tight text-zinc-900">
            {t.hero.titleTop}
          </span>
          <span className="block mt-2 text-[17px] font-bold tracking-wide text-zinc-800">
            {t.hero.titleBottom}
          </span>
        </h1>

        <p className="mt-5 text-[14px] font-semibold text-zinc-900 text-glow">{t.hero.keyMessage}</p>
        <p className="mt-0.5 text-[12.5px] italic text-zinc-800 text-glow">{t.hero.slogan}</p>

        {/* Event meta: date + time on one line, place below */}
        <div className="mt-3 flex flex-col items-center gap-1.5 text-[12px] font-medium text-zinc-900 text-glow">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5 text-lg-dark-red" />
              {date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-lg-dark-red" />
              {time}
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-lg-dark-red" />
            {place}
          </span>
        </div>
      </div>
    </section>
  );
};
