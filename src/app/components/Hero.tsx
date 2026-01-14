'use client';

import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (ctaLink.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(ctaLink);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      className="min-h-[650px] md:min-h-[700px] flex flex-col items-center justify-center px-5 py-24 text-center"
      style={{
        background: 'linear-gradient(135deg, #577557 0%, #6a8f6a 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
          style={{ color: '#ffffff' }}
        >
          {title}
        </h1>
        <p
          className="text-xl md:text-2xl lg:text-3xl mb-12"
          style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.4' }}
        >
          {subtitle}
        </p>

        {ctaLink.startsWith('#') ? (
          <a
            href={ctaLink}
            onClick={handleScrollClick}
            className="inline-block px-14 py-5 text-xl font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundColor: '#d4af37',
              color: '#2f3f2f',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
            }}
          >
            {ctaText}
          </a>
        ) : (
          <Link
            href={ctaLink}
            className="inline-block px-14 py-5 text-xl font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundColor: '#d4af37',
              color: '#2f3f2f',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
            }}
          >
            {ctaText}
          </Link>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="mt-16 animate-bounce">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="rgba(255, 255, 255, 0.7)"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
