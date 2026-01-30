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
    <section className="relative min-h-[700px] md:min-h-screen flex items-center justify-center hero-gradient-light hero-pattern-light overflow-hidden">
      {/* Ambient Light Effects */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[100px] animate-pulse"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[100px] animate-pulse"
        style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)', animationDelay: '1s' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
        {/* Eyebrow Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.35)',
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: '#d4af37' }}
          />
          <span className="text-sm font-medium" style={{ color: '#ffffff' }}>
            A Personal Journey of Discovery
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 animate-fade-in-up">
          <span style={{ color: '#ffffff' }}>The Truth About</span>
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #f0d060 40%, #ffffff 60%, #f0d060 80%, #d4af37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >Jesus</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animate-delay-200"
          style={{ color: '#ffffff' }}
        >
          What if everything you were taught about Jesus wasn&apos;t the complete picture?{' '}
          <span style={{ color: '#d4af37' }}>Begin a journey from doubt to discovery.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
          {ctaLink.startsWith('#') ? (
            <a
              href={ctaLink}
              onClick={handleScrollClick}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              {ctaText}
              <svg width="20" height="20" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ) : (
            <Link
              href={ctaLink}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              {ctaText}
              <svg width="20" height="20" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
          <Link
            href="/my-story"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            style={{
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: '#ffffff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Read My Story
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#journey"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#journey')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <svg
            width="32"
            height="32"
            className="w-8 h-8 flex-shrink-0"
            fill="none"
            stroke="rgba(255, 255, 255, 0.6)"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
