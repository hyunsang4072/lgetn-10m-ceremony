import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CalendarDays, MapPin, Sparkles } from 'lucide-react';

const EVENT_DATE = '2026-11-13';
const TZ = 'America/Chicago';

/** Current Chicago date (YYYY-MM-DD) and minutes since midnight. */
const chicagoNow = () => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '00';
  return {
    date: `${get('year')}-${get('month')}-${get('day')}`,
    minutes: Number(get('hour')) * 60 + Number(get('minute')),
  };
};

/** Parses "12:20 – 12:50" into [startMin, endMin]. */
const parseRange = (range: string): [number, number] | null => {
  const m = range.match(/(\d{1,2}):(\d{2})\s*[–-]\s*(\d{1,2}):(\d{2})/);
  if (!m) return null;
  return [Number(m[1]) * 60 + Number(m[2]), Number(m[3]) * 60 + Number(m[4])];
};

export const Timeline: React.FC = () => {
  const { t, language } = useLanguage();
  const [now, setNow] = useState(chicagoNow);
  const nowLabel = language === 'ko' ? '진행 중' : 'NOW';

  useEffect(() => {
    const id = setInterval(() => setNow(chicagoNow()), 30_000);
    return () => clearInterval(id);
  }, []);

  const isLive = (time: string) => {
    if (now.date !== EVENT_DATE) return false;
    const r = parseRange(time);
    return !!r && now.minutes >= r[0] && now.minutes < r[1];
  };

  return (
    <section className="px-5 py-6">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-lg-red" />
          <h2 className="text-[12px] font-extrabold tracking-[0.16em] text-zinc-900 uppercase">
            {t.schedule.sectionTitle}
          </h2>
          <span className="text-[11px] text-zinc-500">• {t.schedule.sessionCount}</span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/50 backdrop-blur-sm border border-black/10 text-zinc-800 text-[9px] font-bold tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-lg-red animate-pulse" aria-hidden />
          {t.schedule.liveSync}
        </span>
      </div>

      {/* Stepper */}
      <ol className="relative pl-7">
        <span className="absolute left-[7px] top-6 bottom-6 w-[2px] rounded-full bg-lg-red" aria-hidden />

        {t.schedule.items.map((item) => {
          const live = isLive(item.time);
          return (
          <li key={item.id} className="relative flex items-center mb-3 last:mb-0">
            {/* Node: vertically centered with the card */}
            <span
              aria-hidden
              className={`absolute -left-7 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-lg-red z-10 ${
                live
                  ? 'animate-pulse ring-4 ring-lg-red/30 shadow-[0_0_12px_rgba(230,0,60,0.6)]'
                  : item.isKeynote
                    ? 'ring-4 ring-champagne-gold/30'
                    : ''
              }`}
            />

            <div
              className={`w-full rounded-2xl p-3.5 ${
                item.isKeynote ? 'card-keynote' : 'glass-card'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="inline-flex items-center gap-2">
                  <span className="text-[12px] font-bold text-zinc-800 tabular-nums">{item.time}</span>
                  {live && (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-lg-red/10 border border-lg-red/30 text-lg-red text-[9px] font-extrabold tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-lg-red animate-pulse" aria-hidden />
                      {nowLabel}
                    </span>
                  )}
                </span>
                {item.tag && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-gradient-to-r from-lg-dark-red to-lg-red text-white text-[9px] font-extrabold tracking-wider whitespace-nowrap">
                    <Sparkles className="w-2.5 h-2.5" />
                    {item.tag}
                  </span>
                )}
              </div>

              <h3
                className={`mt-1 font-bold text-zinc-900 ${
                  item.isKeynote ? 'text-[16px] leading-snug' : 'text-[14px]'
                }`}
              >
                {item.title}
              </h3>

              {item.badge && (
                <span className="inline-block mt-1.5 px-2 py-0.5 rounded-md bg-lg-dark-red/10 border border-lg-dark-red/20 text-lg-dark-red text-[9px] font-bold tracking-wider uppercase">
                  {item.badge}
                </span>
              )}

              <div className="mt-1.5 flex items-end justify-between gap-3">
                <p className="text-[11.5px] leading-snug text-zinc-600">{item.subtitle}</p>
                <span className="inline-flex items-center gap-1 text-[10.5px] font-medium text-zinc-500 whitespace-nowrap">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </span>
              </div>
            </div>
          </li>
          );
        })}
      </ol>
    </section>
  );
};
