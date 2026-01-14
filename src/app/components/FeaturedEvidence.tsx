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
    <section className="py-20 px-5" style={{ backgroundColor: '#fdfdf8' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
            style={{ color: '#2f3f2f' }}
          >
            See the Evidence for Yourself
          </h2>
          <p className="text-lg" style={{ color: '#577557' }}>
            Using the Watchtower&apos;s own Kingdom Interlinear Translation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {evidenceCards.map((card) => (
            <Link
              key={card.title}
              href={`/nwt-problem${card.anchor}`}
              className="block rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #e8ede8',
                minHeight: '350px',
              }}
            >
              {/* Title */}
              <h3
                className="text-2xl font-serif font-semibold mb-2"
                style={{ color: '#2f3f2f' }}
              >
                {card.title}
              </h3>

              {/* Scripture Quote */}
              <p
                className="text-lg font-serif italic mb-4"
                style={{ color: '#577557' }}
              >
                {card.scripture}
              </p>

              {/* Excerpt */}
              <p
                className="text-base mb-6"
                style={{ color: '#666666', lineHeight: '1.6' }}
              >
                {card.excerpt}
              </p>

              {/* Link */}
              <span
                className="inline-block font-semibold transition-colors group-hover:underline"
                style={{ color: '#577557' }}
              >
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
