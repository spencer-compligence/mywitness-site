'use client';

import Link from 'next/link';

export default function TestimonyTeaser() {
  return (
    <section className="py-24 px-5" style={{ backgroundColor: '#f6f8f6' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-serif font-bold mb-10 text-center"
          style={{ color: '#2f3f2f' }}
        >
          A Personal Journey
        </h2>

        <div
          className="rounded-2xl p-10 md:p-14"
          style={{
            backgroundColor: '#ffffff',
            borderLeft: '6px solid #577557',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          }}
        >
          <div
            className="text-xl md:text-2xl leading-relaxed space-y-5"
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
            <p className="font-semibold text-2xl md:text-3xl" style={{ fontStyle: 'normal' }}>
              The instant I said &lsquo;Amen&rsquo; in my head, the phone on my desk rang.
            </p>
            <p>
              When I performed a reverse lookup on the number, I discovered it
              had been registered with the phone company but never activated—on
              my 18th birthday, over a decade earlier.
            </p>
            <p
              className="font-semibold pt-4 text-2xl"
              style={{ color: '#577557', fontStyle: 'normal' }}
            >
              Jesus answered. He is real. He is God. And He wants you to know
              Him.&rdquo;
            </p>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/my-story"
              className="inline-block px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: '#577557',
                color: '#ffffff',
                boxShadow: '0 4px 12px rgba(87, 117, 87, 0.3)',
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
