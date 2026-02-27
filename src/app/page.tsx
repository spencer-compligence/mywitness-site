import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import Hero from './components/Hero';
import JourneyCards from './components/JourneyCards';
import TestimonyTeaser from './components/TestimonyTeaser';
import FeaturedEvidence from './components/FeaturedEvidence';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fdfdf8' }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero
        title="The Truth About Jesus"
        subtitle="A journey from doubt to discovery"
        ctaText="Begin Your Journey"
        ctaLink="#journey"
      />

      {/* Bible Comparison Image */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: '#f6f8f6' }}
      >
        <div className="max-w-4xl mx-auto">
          <figure>
            <div
              className="rounded-xl overflow-hidden shadow-xl"
              style={{ border: '2px solid #e0e8e0' }}
            >
              <Image
                src="/nwt-vs-real-bibles.jpg"
                alt="Comparison of 8 Bible translations showing the New World Translation stands alone in its rendering"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
            <figcaption
              className="mt-4 text-center text-lg italic"
              style={{ color: '#2f3f2f', lineHeight: '1.6' }}
            >
              &ldquo;Every major Bible translation agrees — including the Watchtower&apos;s own Kingdom Interlinear.
              Only the New World Translation disagrees.&rdquo;
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 7-Step Journey Cards */}
      <JourneyCards />

      {/* Personal Testimony Teaser */}
      <TestimonyTeaser />

      {/* Featured Evidence Section */}
      <FeaturedEvidence />

      {/* Final CTA Section */}
      <section
        className="py-24 md:py-32 px-5 relative overflow-hidden"
        style={{ backgroundColor: '#f6f8f6' }}
      >
        {/* Top glow line */}
        <div className="glow-line w-full absolute top-0 left-0" />
        {/* Bottom glow line */}
        <div className="glow-line w-full absolute bottom-0 left-0" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Ready to Discover the Truth?
          </h2>
          <p
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: '#5a6a5a', lineHeight: '1.8' }}
          >
            The journey begins with a single step. Examine the evidence.
            Let Scripture speak for itself. You have nothing to fear from truth.
          </p>
          <Link
            href="/why-the-bible-matters"
            className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-5"
          >
            Start With Step 1
            <svg width="20" height="20" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
