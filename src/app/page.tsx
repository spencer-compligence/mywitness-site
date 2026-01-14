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

      {/* 4-Step Journey Cards */}
      <JourneyCards />

      {/* Personal Testimony Teaser */}
      <TestimonyTeaser />

      {/* Featured Evidence Section */}
      <FeaturedEvidence />

      {/* Footer */}
      <Footer />
    </div>
  );
}
