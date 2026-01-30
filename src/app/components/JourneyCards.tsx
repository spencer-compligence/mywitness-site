'use client';

import Link from 'next/link';

interface JourneyStep {
  number: string;
  icon: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const journeySteps: JourneyStep[] = [
  {
    number: '01',
    icon: '📜',
    title: 'Why The Bible Matters',
    description: 'Establish the foundation: God\'s Word is the authority we both agree on.',
    ctaText: 'Begin Here',
    ctaLink: '/why-the-bible-matters',
  },
  {
    number: '02',
    icon: '📖',
    title: 'The NWT Problem',
    description: 'See the evidence of mistranslation using the Watchtower\'s own sources.',
    ctaText: 'See Evidence',
    ctaLink: '/nwt-problem',
  },
  {
    number: '03',
    icon: '✓',
    title: 'Which Bible?',
    description: "Find a translation you can trust — modern, accurate, uses God's name 6,800+ times.",
    ctaText: 'Learn More',
    ctaLink: '/which-bible',
  },
  {
    number: '04',
    icon: '⭐',
    title: 'Who Is Jesus?',
    description: '71 Scripture passages across 12 categories reveal the truth about His identity.',
    ctaText: 'Explore',
    ctaLink: '/who-is-jesus',
  },
  {
    number: '05',
    icon: '💡',
    title: 'Why It Matters',
    description: 'Understanding why the deity of Christ matters for your salvation.',
    ctaText: 'Discover',
    ctaLink: '/why-it-matters',
  },
  {
    number: '06',
    icon: '🙏',
    title: 'Praying to Jesus',
    description: 'Take the step that changes everything — pray to Jesus directly.',
    ctaText: 'Read More',
    ctaLink: '/praying-to-jesus',
  },
  {
    number: '07',
    icon: '🤝',
    title: 'Share Your Story',
    description: 'Join the community, find resources, and share what God has done.',
    ctaText: 'Connect',
    ctaLink: '/share-your-story',
  },
];

export default function JourneyCards() {
  return (
    <section id="journey" className="py-24 md:py-32 px-5" style={{ backgroundColor: '#fdfdf8' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Your Journey Starts Here
          </h2>
          <p className="text-lg" style={{ color: '#577557' }}>
            Seven steps to discovering the truth. Each step builds on the last,
            guiding you toward what Scripture actually says.
          </p>
          {/* Decorative glow line */}
          <div className="glow-line-gold w-48 mx-auto mt-8" />
        </div>

        {/* Journey Steps Grid — Row 1: 4 cards, Row 2: 3 cards centered */}
        <div className="stagger-children">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {journeySteps.slice(0, 4).map((step) => (
              <JourneyCard key={step.number} step={step} />
            ))}
          </div>

          {/* Row 2 — centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {journeySteps.slice(4).map((step) => (
              <JourneyCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyCard({ step }: { step: JourneyStep }) {
  return (
    <Link
      href={step.ctaLink}
      className="card-glow group relative flex flex-col"
      style={{ minHeight: '320px' }}
    >
      {/* Step Number — Large watermark */}
      <div
        className="absolute top-4 right-4 text-6xl font-serif font-bold transition-colors duration-300"
        style={{ color: 'rgba(87, 117, 87, 0.08)' }}
      >
        {step.number}
      </div>

      {/* Icon */}
      <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
        {step.icon}
      </div>

      {/* Title */}
      <h3
        className="text-xl font-serif font-bold mb-3 transition-colors duration-300"
        style={{ color: '#2f3f2f' }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm mb-6 leading-relaxed flex-grow"
        style={{ color: '#5a6a5a' }}
      >
        {step.description}
      </p>

      {/* CTA */}
      <span
        className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 group-hover:gap-3"
        style={{ color: '#d4af37' }}
      >
        {step.ctaText}
        <svg width="16" height="16" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  );
}
