'use client';

import Link from 'next/link';

interface JourneyCard {
  icon: string;
  number: number;
  headline: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
}

const journeyCards: JourneyCard[] = [
  {
    icon: '📖',
    number: 1,
    headline: 'Is the NWT Trustworthy?',
    subtext: "You've been taught it's the most accurate Bible. But what if it's not?",
    ctaText: 'See the Evidence',
    ctaLink: '/nwt-problem',
  },
  {
    icon: '🔍',
    number: 2,
    headline: 'The Mistranslations',
    subtext: "Using the Watchtower's own Kingdom Interlinear Translation",
    ctaText: 'Explore Proof',
    ctaLink: '/nwt-problem',
  },
  {
    icon: '✓',
    number: 3,
    headline: 'A Translation You Can Trust',
    subtext: "Modern, accurate, and uses God's name (Yahweh) 6,800+ times",
    ctaText: 'Learn More',
    ctaLink: '/which-bible',
  },
  {
    icon: '⭐',
    number: 4,
    headline: 'Who Is Jesus?',
    subtext: "Discover what Scripture actually says about Jesus's identity",
    ctaText: 'Start Reading',
    ctaLink: '/who-is-jesus',
  },
];

export default function JourneyCards() {
  return (
    <section id="journey" className="py-20 px-5" style={{ backgroundColor: '#fdfdf8' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
            style={{ color: '#2f3f2f' }}
          >
            Your Journey Starts Here
          </h2>
          <p className="text-lg" style={{ color: '#577557' }}>
            Four steps to discovering the truth
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {journeyCards.map((card, index) => (
            <div key={card.number} className="flex items-center">
              {/* Card */}
              <div
                className="flex-1 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #e8ede8',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  minHeight: '380px',
                }}
              >
                {/* Icon */}
                <div className="text-5xl mb-4 text-center" style={{ color: '#577557' }}>
                  {card.icon}
                </div>

                {/* Number */}
                <div
                  className="text-4xl font-bold mb-4 text-center"
                  style={{ color: '#d4af37' }}
                >
                  {card.number}
                </div>

                {/* Headline */}
                <h3
                  className="text-xl font-serif font-semibold mb-3 text-center"
                  style={{ color: '#2f3f2f' }}
                >
                  {card.headline}
                </h3>

                {/* Subtext */}
                <p
                  className="text-base mb-6 text-center"
                  style={{ color: '#666666', minHeight: '60px', lineHeight: '1.6' }}
                >
                  {card.subtext}
                </p>

                {/* CTA Button */}
                <div className="text-center">
                  <Link
                    href={card.ctaLink}
                    className="inline-block px-6 py-3 rounded-md font-semibold transition-all hover:opacity-90"
                    style={{
                      backgroundColor: '#577557',
                      color: '#ffffff',
                    }}
                  >
                    {card.ctaText}
                  </Link>
                </div>
              </div>

              {/* Arrow between cards (desktop only) */}
              {index < journeyCards.length - 1 && (
                <div
                  className="hidden lg:block text-3xl mx-2"
                  style={{ color: '#d4af37' }}
                >
                  →
                </div>
              )}

              {/* Arrow between cards (mobile - vertical) */}
              {index < journeyCards.length - 1 && (
                <div
                  className="lg:hidden text-2xl text-center py-4 w-full absolute left-0"
                  style={{ color: '#d4af37', display: 'none' }}
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
