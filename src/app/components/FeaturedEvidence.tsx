'use client';

import Link from 'next/link';

interface EvidenceCard {
  title: string;
  scripture: string;
  excerpt: string;
  anchor: string;
}

const evidenceCards: EvidenceCard[] = [
  {
    title: 'John 8:58',
    scripture: '"Before Abraham was, I am"',
    excerpt:
      'NWT changes "I am" to "I have been"—but the Greek clearly says "ego eimi" (I AM), the same divine name from Exodus 3:14. The Jews tried to stone Him for claiming to be YHWH.',
    anchor: '#part-4-john858',
  },
  {
    title: 'John 1:1',
    scripture: '"The Word was a god"?',
    excerpt:
      'The NWT is the only major translation that says "a god." Their "article rule" to justify this falls apart when applied consistently. See the Kingdom Interlinear proof.',
    anchor: '#part-5-john11',
  },
  {
    title: "Thomas's Declaration",
    scripture: '"My Lord and my God!"',
    excerpt:
      'Thomas calls Jesus "my God" directly to His face. Jesus doesn\'t correct him—He blesses him. The Greek grammar proves Thomas was addressing Jesus, not exclaiming.',
    anchor: '#part-8-thomas',
  },
];

export default function FeaturedEvidence() {
  return (
    <section className="py-24 px-5" style={{ backgroundColor: '#fdfdf8' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mb-5"
            style={{ color: '#2f3f2f' }}
          >
            See the Evidence for Yourself
          </h2>
          <p className="text-xl md:text-2xl" style={{ color: '#577557' }}>
            Using the Watchtower&apos;s own Kingdom Interlinear Translation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {evidenceCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #e8ede8',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                minHeight: '420px',
              }}
            >
              {/* Title */}
              <h3
                className="text-3xl font-serif font-semibold mb-3"
                style={{ color: '#2f3f2f' }}
              >
                {card.title}
              </h3>

              {/* Scripture Quote */}
              <p
                className="text-xl font-serif italic mb-5"
                style={{ color: '#577557' }}
              >
                {card.scripture}
              </p>

              {/* Excerpt */}
              <p
                className="text-lg mb-8 flex-grow"
                style={{ color: '#666666', lineHeight: '1.7' }}
              >
                {card.excerpt}
              </p>

              {/* Button */}
              <Link
                href={`/nwt-problem${card.anchor}`}
                className="inline-block w-full px-8 py-4 rounded-xl text-lg font-semibold text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: '#577557',
                  color: '#ffffff',
                  boxShadow: '0 4px 12px rgba(87, 117, 87, 0.3)',
                }}
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
