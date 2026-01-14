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
      className="min-h-[600px] md:min-h-[600px] flex flex-col items-center justify-center px-5 py-20 text-center"
      style={{
        background: 'linear-gradient(135deg, #577557 0%, #6a8f6a 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-5xl lg:text-[56px] font-serif font-bold mb-4 leading-tight"
          style={{ color: '#ffffff' }}
        >
          {title}
        </h1>
        <p
          className="text-lg md:text-xl lg:text-2xl mb-10"
          style={{ color: 'rgba(255, 255, 255, 0.9)' }}
        >
          {subtitle}
        </p>

        {ctaLink.startsWith('#') ? (
          <a
            href={ctaLink}
            onClick={handleScrollClick}
            className="inline-block px-12 py-4 text-lg font-semibold rounded-lg transition-all hover:opacity-90"
            style={{
              backgroundColor: '#d4af37',
              color: '#2f3f2f',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            }}
          >
            {ctaText}
          </a>
        ) : (
          <Link
            href={ctaLink}
            className="inline-block px-12 py-4 text-lg font-semibold rounded-lg transition-all hover:opacity-90"
            style={{
              backgroundColor: '#d4af37',
              color: '#2f3f2f',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            }}
          >
            {ctaText}
          </Link>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="mt-12 animate-bounce">
        <svg
          className="w-6 h-6"
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
