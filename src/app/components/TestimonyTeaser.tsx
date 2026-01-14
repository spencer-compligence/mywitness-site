'use client';

import Link from 'next/link';

export default function TestimonyTeaser() {
  return (
    <section className="py-20 px-5" style={{ backgroundColor: '#f6f8f6' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center"
          style={{ color: '#2f3f2f' }}
        >
          A Personal Journey
        </h2>

        <div
          className="rounded-xl p-8 md:p-12"
          style={{
            backgroundColor: '#ffffff',
            borderLeft: '4px solid #577557',
          }}
        >
          <div
            className="text-lg md:text-xl leading-relaxed space-y-4"
            style={{ color: '#2f3f2f', fontStyle: 'italic' }}
          >
            <p>
              &ldquo;I was raised as a Jehovah&apos;s Witness. For 32 years, I believed what I was
              taught: that Jesus was Michael the Archangel, a created being, and
              definitely not God. I was taught to pray <em>through</em> Jesus to
              Jehovah—never <em>to</em> Jesus directly.
            </p>
            <p>
              But when I started reading the Bible for myself—not through
              Watchtower publications—I discovered something that shocked me: the
              evidence for Jesus&apos;s deity is overwhelming.
            </p>
            <p>
              The day everything changed, I did something I had never done in my
              32 years of life. I prayed <em>to</em> Jesus. Not through Him—
              <em>to</em> Him. I asked Him to show me if what I had learned was
              true, to show me that He was real and actually God. I was
              terrified. I thought I might be committing blasphemy.
            </p>
            <p className="font-semibold" style={{ fontStyle: 'normal' }}>
              The instant I said &lsquo;Amen&rsquo; in my head, the phone on my desk rang.
            </p>
            <p>
              When I performed a reverse lookup on the number, I discovered it
              had been registered with the phone company but never activated—on
              my 18th birthday, over a decade earlier.
            </p>
            <p
              className="font-semibold pt-4"
              style={{ color: '#577557', fontStyle: 'normal' }}
            >
              Jesus answered. He is real. He is God. And He wants you to know
              Him.&rdquo;
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/my-story"
              className="inline-block px-8 py-3 rounded-md font-semibold transition-all"
              style={{
                backgroundColor: 'transparent',
                border: '2px solid #577557',
                color: '#577557',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#577557';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#577557';
              }}
            >
              Read My Full Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
