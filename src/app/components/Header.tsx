'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/my-story', label: 'My Story' },
    { href: '/why-the-bible-matters', label: 'Why The Bible Matters' },
    { href: '/nwt-problem', label: 'The NWT Problem' },
    { href: '/which-bible', label: 'Which Bible?' },
    { href: '/who-is-jesus', label: 'Who Is Jesus?' },
    { href: '/why-it-matters', label: 'Why It Matters' },
    { href: '/praying-to-jesus', label: 'Praying to Jesus' },
    { href: '/share-your-story', label: 'Share Your Story' },
  ];

  return (
    <header
      className="py-4 px-4 sticky top-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: 'rgba(253, 253, 248, 0.9)',
        borderBottom: '1px solid rgba(224, 232, 224, 0.8)',
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-serif font-bold"
          style={{ color: '#2f3f2f' }}
        >
          MyWitness<span style={{ color: '#d4af37' }}>.info</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            className="w-6 h-6 flex-shrink-0"
            fill="none"
            stroke="#577557"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden mt-4 pb-4 border-t"
          style={{ borderColor: '#e0e8e0' }}
        >
          <nav className="flex flex-col space-y-1 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium px-4 py-3 rounded-lg transition-colors"
                style={{ color: '#577557' }}
                onClick={() => setMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(87, 117, 87, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
