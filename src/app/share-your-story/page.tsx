'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ShareYourStoryPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fdfdf8' }}>
      <Header />

      {/* Hero Section */}
      <div
        className="py-20 px-4 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #3a5a3a 0%, #4a6e4a 30%, #577557 60%, #6a8f6a 100%)',
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.35)',
            }}
          >
            <span className="text-sm font-medium" style={{ color: '#ffffff' }}>
              Step 7 of 7
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
            style={{ color: '#ffffff' }}
          >
            Share Your Story
          </h1>
          <p
            className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto"
            style={{ color: '#ffffff', lineHeight: '1.6' }}
          >
            You&apos;ve taken the most important step of your life.
            Now you&apos;re part of a family that spans 2,000 years.
          </p>
          <div
            className="w-24 h-1 mx-auto mt-8"
            style={{ background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }}
          />
        </div>
      </div>

      {/* Scripture Opening */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div
          className="rounded-xl p-8 mb-12 text-center"
          style={{
            backgroundColor: '#f6f8f6',
            borderLeft: '4px solid #d4af37',
          }}
        >
          <p
            className="text-xl md:text-2xl italic font-serif mb-3"
            style={{ color: '#2f3f2f', lineHeight: '1.7' }}
          >
            &ldquo;Therefore, if anyone is in Christ, he is a new creation;
            the old things passed away; behold, new things have come.&rdquo;
          </p>
          <p className="text-sm font-semibold" style={{ color: '#577557' }}>
            &mdash; 2 Corinthians 5:17 (LSB)
          </p>
        </div>

        {/* Section 1: Tell Us What Happened */}
        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Tell Us What Happened
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            If you prayed to Jesus for the first time, or if this site helped you
            in your journey, we&apos;d be honored to hear your story.
          </p>

          {/* Contact Form */}
          <div
            className="card-modern p-8 mb-6"
          >
            <h3
              className="text-2xl font-serif font-semibold mb-6"
              style={{ color: '#2f3f2f' }}
            >
              Share Your Experience
            </h3>
            <form
              action="https://formspree.io/f/stories@mywitness.info"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#577557' }}
                  >
                    Name (optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl text-base transition-all duration-300 focus:outline-none"
                    style={{
                      backgroundColor: '#f6f8f6',
                      border: '2px solid #e0e8e0',
                      color: '#2f3f2f',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#577557'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e8e0'; }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#577557' }}
                  >
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl text-base transition-all duration-300 focus:outline-none"
                    style={{
                      backgroundColor: '#f6f8f6',
                      border: '2px solid #e0e8e0',
                      color: '#2f3f2f',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#577557'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e8e0'; }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="story"
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#577557' }}
                >
                  What happened when you prayed to Jesus?
                </label>
                <textarea
                  id="story"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-xl text-base transition-all duration-300 focus:outline-none resize-y"
                  style={{
                    backgroundColor: '#f6f8f6',
                    border: '2px solid #e0e8e0',
                    color: '#2f3f2f',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#577557'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e8e0'; }}
                  placeholder="Share your experience..."
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="share-permission"
                  name="share_permission"
                  className="mt-1 w-5 h-5 rounded"
                  style={{ accentColor: '#577557' }}
                />
                <label
                  htmlFor="share-permission"
                  className="text-sm"
                  style={{ color: '#5a6a5a' }}
                >
                  You may share my story anonymously to encourage others
                </label>
              </div>
              <button
                type="submit"
                className="btn-primary inline-flex items-center gap-2"
              >
                Submit Your Story
                <svg width="20" height="20" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Email Alternative */}
          <div
            className="rounded-xl p-6 text-center"
            style={{ backgroundColor: '#f6f8f6', border: '1px solid #e0e8e0' }}
          >
            <p className="text-sm mb-2" style={{ color: '#5a6a5a' }}>
              Prefer email?
            </p>
            <a
              href="mailto:stories@mywitness.info?subject=My%20Story"
              className="text-lg font-semibold transition-colors"
              style={{ color: '#577557' }}
            >
              stories@mywitness.info
            </a>
          </div>

          {/* Privacy Note */}
          <p
            className="text-sm mt-6 italic"
            style={{ color: '#5a6a5a', lineHeight: '1.6' }}
          >
            Your story is safe with us. We will never share your personal information
            without permission. If you&apos;d like your story shared to encourage others,
            please let us know.
          </p>
        </div>

        {/* Section 2: Resources for New Believers */}
        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
            style={{ color: '#2f3f2f' }}
          >
            Resources for New Believers
          </h2>
          <p className="text-lg mb-8" style={{ color: '#5a6a5a', lineHeight: '1.8' }}>
            Your journey is just beginning. Here are resources to help you grow in your new faith.
          </p>

          {/* Bibles */}
          <div className="mb-8">
            <h3
              className="text-2xl font-serif font-semibold mb-4 flex items-center gap-3"
              style={{ color: '#2f3f2f' }}
            >
              <span className="text-3xl">📖</span> Bibles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Legacy Standard Bible', desc: 'Our recommended translation — faithful, uses "Yahweh"', url: 'https://lsbible.org' },
                { name: 'Bible Gateway', desc: 'Multiple translations online', url: 'https://www.biblegateway.com' },
                { name: 'YouVersion', desc: 'Bible app with reading plans', url: 'https://www.youversion.com' },
                { name: 'LSB App', desc: 'Free mobile app for iOS and Android', url: 'https://lsbible.org' },
              ].map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-modern group flex items-start gap-4 p-5"
                >
                  <div>
                    <p className="font-semibold group-hover:text-sage-600 transition-colors" style={{ color: '#2f3f2f' }}>
                      {resource.name}
                    </p>
                    <p className="text-sm" style={{ color: '#5a6a5a' }}>{resource.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Books */}
          <div className="mb-8">
            <h3
              className="text-2xl font-serif font-semibold mb-4 flex items-center gap-3"
              style={{ color: '#2f3f2f' }}
            >
              <span className="text-3xl">📚</span> Books for Former JWs
            </h3>
            <div className="space-y-3">
              {[
                { title: 'Crisis of Conscience', author: 'Raymond Franz', why: 'Former Governing Body member\'s story' },
                { title: 'Reasoning from the Scriptures with JWs', author: 'Ron Rhodes', why: 'Apologetics resource' },
                { title: 'The Kingdom of the Cults', author: 'Walter Martin', why: 'Comprehensive cult analysis' },
                { title: 'Captives of a Concept', author: 'Don Cameron', why: 'Understanding the organization' },
                { title: 'In Search of Christian Freedom', author: 'Raymond Franz', why: 'Follow-up to Crisis of Conscience' },
              ].map((book) => (
                <div
                  key={book.title}
                  className="rounded-xl p-5 flex items-start gap-4"
                  style={{ backgroundColor: '#f6f8f6', border: '1px solid #e0e8e0' }}
                >
                  <div>
                    <p className="font-semibold" style={{ color: '#2f3f2f' }}>
                      <em>{book.title}</em>
                    </p>
                    <p className="text-sm" style={{ color: '#577557' }}>by {book.author}</p>
                    <p className="text-sm" style={{ color: '#5a6a5a' }}>{book.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Websites */}
          <div className="mb-8">
            <h3
              className="text-2xl font-serif font-semibold mb-4 flex items-center gap-3"
              style={{ color: '#2f3f2f' }}
            >
              <span className="text-3xl">🌐</span> Websites
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'JWFacts.com', desc: 'Documentation of Watchtower issues', url: 'https://jwfacts.com' },
                { name: 'CARM.org', desc: 'Christian Apologetics & Research Ministry', url: 'https://carm.org' },
                { name: 'GotQuestions.org', desc: 'Biblical answers to common questions', url: 'https://gotquestions.org' },
              ].map((site) => (
                <a
                  key={site.name}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-modern group p-5"
                >
                  <p className="font-semibold group-hover:text-sage-600 transition-colors" style={{ color: '#2f3f2f' }}>
                    {site.name}
                  </p>
                  <p className="text-sm" style={{ color: '#5a6a5a' }}>{site.desc}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Support Communities */}
          <div>
            <h3
              className="text-2xl font-serif font-semibold mb-4 flex items-center gap-3"
              style={{ color: '#2f3f2f' }}
            >
              <span className="text-3xl">📱</span> Support Communities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'r/exjw', platform: 'Reddit', desc: 'Large support community' },
                { name: 'Ex-JW Support Groups', platform: 'Facebook', desc: 'Various groups available' },
              ].map((community) => (
                <div
                  key={community.name}
                  className="rounded-xl p-5"
                  style={{ backgroundColor: '#f6f8f6', border: '1px solid #e0e8e0' }}
                >
                  <p className="font-semibold" style={{ color: '#2f3f2f' }}>{community.name}</p>
                  <p className="text-sm" style={{ color: '#577557' }}>{community.platform}</p>
                  <p className="text-sm" style={{ color: '#5a6a5a' }}>{community.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Finding a Church */}
        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
            style={{ color: '#2f3f2f' }}
          >
            Finding a Church
          </h2>
          <p className="text-lg mb-8" style={{ color: '#5a6a5a', lineHeight: '1.8' }}>
            You need Christian community. The Bible says we are not to forsake assembling
            together (Hebrews 10:25). Here&apos;s how to find a good church.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* What to Look For */}
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
            >
              <h3 className="text-xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
                What to Look For
              </h3>
              <ul className="space-y-3" style={{ color: '#2f3f2f' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#577557' }}>✓</span>
                  <span><strong>Affirms Jesus is God</strong> &mdash; This is non-negotiable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#577557' }}>✓</span>
                  <span><strong>Teaches from the Bible</strong> &mdash; Not from organizational publications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#577557' }}>✓</span>
                  <span><strong>Welcomes questions</strong> &mdash; Healthy churches encourage learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#577557' }}>✓</span>
                  <span><strong>Practices grace</strong> &mdash; Not performance-based acceptance</span>
                </li>
              </ul>
            </div>

            {/* Red Flags */}
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#fef2f2', borderLeft: '4px solid #b45555' }}
            >
              <h3 className="text-xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
                Red Flags
              </h3>
              <ul className="space-y-3" style={{ color: '#2f3f2f' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#b45555' }}>✗</span>
                  <span>Claims to be the &ldquo;only true church&rdquo;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#b45555' }}>✗</span>
                  <span>Discourages reading other translations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#b45555' }}>✗</span>
                  <span>Leaders cannot be questioned</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#b45555' }}>✗</span>
                  <span>Salvation requires membership or works</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: '#f6f8f6', border: '1px solid #e0e8e0' }}
          >
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              A Note on Denominations
            </h3>
            <p className="text-sm" style={{ color: '#5a6a5a', lineHeight: '1.7' }}>
              There are many solid denominations: Baptist, Presbyterian, non-denominational
              Bible churches, and others. The key is that they teach Jesus is God and
              salvation is by grace through faith. Don&apos;t worry about getting the
              &ldquo;perfect&rdquo; church &mdash; just find one that teaches the Bible faithfully.
              Many churches livestream &mdash; you can watch first if you&apos;re nervous.
            </p>
          </div>
        </div>

        {/* Section 4: What's Coming */}
        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
            style={{ color: '#2f3f2f' }}
          >
            What&apos;s Coming
          </h2>
          <p className="text-lg mb-8" style={{ color: '#5a6a5a', lineHeight: '1.8' }}>
            We&apos;re building more resources to support you on your journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: '💬', title: 'Community Forum', desc: 'Connect with others on the same journey' },
              { icon: '🙏', title: 'Prayer Support', desc: 'Request prayer from fellow believers' },
              { icon: '🤝', title: 'Mentorship Program', desc: 'Be paired with someone who understands' },
              { icon: '📝', title: 'Study Guides', desc: 'Downloadable materials for deeper study' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-5 flex items-start gap-4"
                style={{
                  backgroundColor: '#f6f8f6',
                  border: '1px solid #e0e8e0',
                }}
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="font-semibold" style={{ color: '#2f3f2f' }}>{item.title}</p>
                  <p className="text-sm" style={{ color: '#5a6a5a' }}>{item.desc}</p>
                  <p className="text-xs mt-1 font-medium" style={{ color: '#d4af37' }}>Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Final Encouragement */}
        <div
          className="rounded-xl p-8 md:p-12 text-center mb-12"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #f6f8f6, #fdfdf8)',
            borderLeft: '4px solid #d4af37',
          }}
        >
          <div
            className="rounded-xl p-6 mb-8"
            style={{ backgroundColor: '#fff8e6' }}
          >
            <p
              className="text-xl md:text-2xl italic font-serif mb-3"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              &ldquo;For I am confident of this very thing, that He who began a good work
              in you will perfect it until the day of Christ Jesus.&rdquo;
            </p>
            <p className="text-sm font-semibold" style={{ color: '#577557' }}>
              &mdash; Philippians 1:6 (LSB)
            </p>
          </div>

          <div className="space-y-2 mb-8">
            <p className="text-2xl md:text-3xl font-serif font-bold" style={{ color: '#2f3f2f' }}>
              You are loved.
            </p>
            <p className="text-2xl md:text-3xl font-serif font-bold" style={{ color: '#577557' }}>
              You are saved.
            </p>
            <p className="text-2xl md:text-3xl font-serif font-bold" style={{ color: '#d4af37' }}>
              You are His.
            </p>
          </div>

          <p className="text-lg mb-2" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
            The same Jesus who answered my prayer is now <strong>YOUR</strong> Lord.
          </p>
          <p className="text-lg mb-8" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
            He will never leave you nor forsake you.
          </p>
          <p
            className="text-3xl font-serif font-bold"
            style={{ color: '#577557' }}
          >
            Welcome to the family.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Link
            href="/praying-to-jesus"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <svg width="20" height="20" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Praying to Jesus
          </Link>
          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2"
          >
            Return to Home
            <svg width="20" height="20" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
