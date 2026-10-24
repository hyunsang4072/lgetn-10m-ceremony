import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="px-5 pt-4 pb-10 text-center">
      <div className="mx-auto mb-4 h-px w-16 bg-gradient-to-r from-transparent via-champagne-gold to-transparent" />
      <p className="text-[11.5px] font-semibold tracking-wide text-zinc-700">{t.footer.line}</p>
      <p className="mt-1.5 text-[10px] text-zinc-400">{t.footer.copyright}</p>
    </footer>
  );
};
