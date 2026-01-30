'use client';

import Link from 'next/link';

export default function Footer() {
  const journeyLinks = [
    { href: '/why-the-bible-matters', label: 'Why The Bible Matters' },
    { href: '/nwt-problem', label: 'The NWT Problem' },
    { href: '/which-bible', label: 'Which Bible?' },
    { href: '/who-is-jesus', label: 'Who Is Jesus?' },
    { href: '/why-it-matters', label: 'Why It Matters' },
    { href: '/praying-to-jesus', label: 'Praying to Jesus' },
    { href: '/share-your-story', label: 'Share Your Story' },
  ];

  const aboutLinks = [
    { href: '/', label: 'Home' },
    { href: '/my-story', label: 'My Story' },
  ];

  return (
    <footer
      className="py-16 px-4 relative"
      style={{ backgroundColor: '#2f3f2f' }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p
              className="text-2xl font-serif font-bold mb-4"
              style={{ color: '#fdfdf8' }}
            >
              MyWitness<span style={{ color: '#d4af37' }}>.info</span>
            </p>
            <p className="text-sm" style={{ color: '#a0b0a0', lineHeight: '1.6' }}>
              A personal journey from doubt to discovery.
              Examining what Scripture actually says about Jesus.
            </p>
          </div>

          {/* Journey Steps */}
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: '#d4af37' }}
            >
              The Journey
            </p>
            <nav className="flex flex-col space-y-2">
              {journeyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors"
                  style={{ color: '#a0b0a0' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#d4e4d4'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#a0b0a0'; }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* About */}
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: '#d4af37' }}
            >
              About
            </p>
            <nav className="flex flex-col space-y-2 mb-6">
              {aboutLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors"
                  style={{ color: '#a0b0a0' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#d4e4d4'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#a0b0a0'; }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-sm" style={{ color: '#a0b0a0', lineHeight: '1.6' }}>
              This ministry is 100% self-funded. I accept no donations, receive no
              commissions, and have no financial interest in this work.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(160, 176, 160, 0.3), transparent)' }}
        />

        {/* Copyright */}
        <p className="text-center text-sm" style={{ color: '#a0b0a0' }}>
          &copy; {new Date().getFullYear()} MyWitness LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
