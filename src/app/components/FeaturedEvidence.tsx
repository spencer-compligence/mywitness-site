'use client';

import Link from 'next/link';

interface EvidenceCard {
  reference: string;
  title: string;
  preview: string;
  href: string;
}

const evidenceCards: EvidenceCard[] = [
  {
    reference: 'John 8:58',
    title: '"Before Abraham Was, I AM"',
    preview:
      'Jesus claims the divine name — and the Jews understood exactly what He meant. The NWT changes it to obscure the claim.',
    href: '/nwt-problem#part-4-john858',
  },
  {
    reference: 'John 1:1',
    title: '"The Word Was God"',
    preview:
      'Why the NWT\'s "a god" translation fails every Greek grammar test. See the Kingdom Interlinear proof.',
    href: '/nwt-problem#part-5-john11',
  },
  {
    reference: 'John 20:28',
    title: '"My Lord and My God!"',
    preview:
      "Thomas calls Jesus 'my God' directly to His face. Jesus doesn't correct him — He blesses him.",
    href: '/nwt-problem#part-8-thomas',
  },
];

export default function FeaturedEvidence() {
  return (
    <section className="py-24 md:py-32 px-5" style={{ backgroundColor: '#fdfdf8' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Evidence That Changes Everything
          </h2>
          <p className="text-lg" style={{ color: '#577557' }}>
            These passages are at the heart of the debate. See for yourself what Scripture really says.
          </p>
          <div className="glow-line w-48 mx-auto mt-8" />
        </div>

        {/* Evidence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {evidenceCards.map((card) => (
            <Link
              key={card.reference}
              href={card.href}
              className="card-modern group flex flex-col"
              style={{ minHeight: '340px' }}
            >
              {/* Reference Badge */}
              <div
                className="inline-block self-start px-3 py-1 rounded-full text-sm font-medium mb-4"
                style={{
                  backgroundColor: 'rgba(87, 117, 87, 0.1)',
                  border: '1px solid rgba(87, 117, 87, 0.2)',
                  color: '#577557',
                }}
              >
                {card.reference}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-serif font-bold mb-3 transition-colors duration-300 group-hover:text-sage-600"
                style={{ color: '#2f3f2f' }}
              >
                {card.title}
              </h3>

              {/* Preview */}
              <p
                className="text-sm mb-6 leading-relaxed flex-grow"
                style={{ color: '#5a6a5a' }}
              >
                {card.preview}
              </p>

              {/* CTA */}
              <span
                className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 group-hover:gap-3"
                style={{ color: '#d4af37' }}
              >
                Examine the Evidence
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
