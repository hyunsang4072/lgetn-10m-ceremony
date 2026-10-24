import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Utensils, Check, Coffee } from 'lucide-react';

export const MenuCarousel: React.FC = () => {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / el.clientWidth));
  };

  const goTo = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <section className="px-5 py-6">
      {/* Title */}
      <div className="flex items-center gap-2">
        <Utensils className="w-4 h-4 text-lg-red" strokeWidth={2.5} />
        <h2 className="text-[12px] font-extrabold tracking-[0.16em] text-zinc-900 uppercase">
          {t.menu.sectionTitle}
        </h2>
      </div>
      <p className="mt-1 text-[11.5px] text-zinc-600">{t.menu.subtitle}</p>

      {/* Swipeable scroll-snap carousel: the rounded, clipped wrapper owns the shadow so corners stay crisp */}
      <div
        className="mt-4 rounded-3xl overflow-hidden bg-white/90 border border-white shadow-[0_8px_32px_rgba(140,20,40,0.10)]"
        style={{ isolation: 'isolate', transform: 'translateZ(0)' }}
      >
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
      >
        {t.menu.categories.map((cat, idx) => (
          <article
            key={cat.id}
            className="snap-center shrink-0 w-full"
            aria-label={`${t.menu.optionLabel} ${idx + 1}`}
          >
            <div className="relative aspect-[16/10] w-full bg-zinc-100">
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
            </div>

            <div className="p-4">
              <h3 className="text-[18px] font-bold text-zinc-900">{cat.title}</h3>
              <p className="mt-0.5 text-[11.5px] text-zinc-500">{cat.subtitle}</p>

              <ul className="mt-3 space-y-1.5">
                {cat.items.map((food) => (
                  <li key={food} className="flex items-start gap-2 text-[12.5px] text-zinc-700">
                    <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-lg-red" strokeWidth={3} />
                    <span className="leading-snug">{food}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      </div>

      {/* Dots */}
      <div className="mt-3 flex items-center justify-center">
        <div className="flex items-center gap-1.5">
          {t.menu.categories.map((cat, idx) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => goTo(idx)}
              aria-label={`${t.menu.optionLabel} ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                active === idx ? 'w-6 bg-lg-red' : 'w-2 bg-zinc-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Complimentary treat: separate card below the slides */}
      <div className="mt-4 glass-card rounded-3xl p-3.5 flex items-center gap-3.5">
        <img
          src={t.menu.common.image}
          alt={t.menu.common.title}
          className="w-20 h-20 rounded-2xl object-cover shrink-0"
          draggable={false}
        />
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 text-lg-dark-red text-[10px] font-extrabold tracking-[0.14em] uppercase">
            <Coffee className="w-3.5 h-3.5" />
            {t.menu.common.title}
          </div>
          <p className="mt-0.5 text-[11px] text-zinc-500">{t.menu.common.subtitle}</p>
          <ul className="mt-1.5 space-y-0.5">
            {t.menu.common.items.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-[12px] font-medium text-zinc-700">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
