'use client';

import Link from 'next/link';

export default function TestimonyTeaser() {
  return (
    <section
      className="py-24 md:py-32 px-5 relative overflow-hidden"
      style={{ backgroundColor: '#f6f8f6' }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 hero-pattern-light opacity-30" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center">
          {/* Quote Icon */}
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8"
            style={{
              backgroundColor: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
            }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="#d4af37"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </div>

          {/* Quote */}
          <blockquote
            className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-8"
            style={{ color: '#2f3f2f' }}
          >
            &ldquo;The instant I said &lsquo;Amen&rsquo;&mdash;literally, the very second&mdash;the
            phone on my desk rang.{' '}
            <span style={{ color: '#577557' }}>Jesus answered.</span>&rdquo;
          </blockquote>

          {/* Attribution */}
          <p className="mb-8" style={{ color: '#5a6a5a' }}>
            &mdash; From a former Jehovah&apos;s Witness who prayed to Jesus for the first time
            after 34 years
          </p>

          {/* CTA */}
          <Link
            href="/my-story"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Read the Full Story
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
