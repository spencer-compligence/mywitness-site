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
    icon: '📜',
    number: 1,
    headline: 'Why The Bible Matters',
    subtext: 'We share common ground on Biblical authority. But does the Watchtower follow its own standard?',
    ctaText: 'Start Here',
    ctaLink: '/why-the-bible-matters',
  },
  {
    icon: '📖',
    number: 2,
    headline: 'Is the NWT Trustworthy?',
    subtext: "You've been taught it's the most accurate Bible. But what if it's not?",
    ctaText: 'See the Evidence',
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
    <section id="journey" className="py-24 px-5" style={{ backgroundColor: '#fdfdf8' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mb-5"
            style={{ color: '#2f3f2f' }}
          >
            Your Journey Starts Here
          </h2>
          <p className="text-xl md:text-2xl" style={{ color: '#577557' }}>
            Four steps to discovering the truth
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {journeyCards.map((card, index) => (
            <div key={card.number} className="flex items-center">
              {/* Card */}
              <div
                className="flex-1 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #e8ede8',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  minHeight: '420px',
                }}
              >
                {/* Icon */}
                <div className="text-7xl mb-5 text-center">
                  {card.icon}
                </div>

                {/* Number */}
                <div
                  className="text-5xl font-bold mb-5 text-center"
                  style={{ color: '#d4af37' }}
                >
                  {card.number}
                </div>

                {/* Headline */}
                <h3
                  className="text-2xl font-serif font-semibold mb-4 text-center"
                  style={{ color: '#2f3f2f' }}
                >
                  {card.headline}
                </h3>

                {/* Subtext */}
                <p
                  className="text-lg mb-8 text-center"
                  style={{ color: '#666666', minHeight: '70px', lineHeight: '1.6' }}
                >
                  {card.subtext}
                </p>

                {/* CTA Button - Modern Style */}
                <div className="text-center">
                  <Link
                    href={card.ctaLink}
                    className="inline-block w-full px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      backgroundColor: '#577557',
                      color: '#ffffff',
                      boxShadow: '0 4px 12px rgba(87, 117, 87, 0.3)',
                    }}
                  >
                    {card.ctaText}
                  </Link>
                </div>
              </div>

              {/* Arrow between cards (desktop only) */}
              {index < journeyCards.length - 1 && (
                <div
                  className="hidden lg:block text-4xl mx-3"
                  style={{ color: '#d4af37' }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
