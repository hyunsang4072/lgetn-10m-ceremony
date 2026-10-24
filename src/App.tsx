import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { MenuCarousel } from './components/MenuCarousel';
import { Footer } from './components/Footer';
import swirlBg from './assets/images/bg_swirl.jpg';

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center bg-[#EDE6E4] font-sans">
      <div className="relative w-full max-w-[430px] min-h-screen bg-[#FBF8F7] overflow-x-hidden shadow-2xl">
        {/* Abstract red/gold silk backdrop that fades into the page */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[760px] bg-cover bg-top pointer-events-none"
          style={{
            backgroundImage: `url(${swirlBg})`,
            filter: 'saturate(1.35) contrast(1.1)',
            WebkitMaskImage: 'linear-gradient(to bottom, #000 55%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, #000 55%, transparent 100%)',
          }}
        />
        {/* Subtle dark overlay so reds and golds pop; fades out toward the page */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[760px] bg-gradient-to-b from-black/10 via-black/10 to-transparent pointer-events-none"
        />
        {/* Soft red glow mid-page for the schedule area */}
        <div
          aria-hidden
          className="absolute top-[820px] -left-24 w-72 h-72 rounded-full bg-lg-red/10 blur-3xl pointer-events-none"
        />

        <div className="relative z-10 flex flex-col">
          <Header />
          <main>
            <Hero />
            <Timeline />
            <MenuCarousel />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
