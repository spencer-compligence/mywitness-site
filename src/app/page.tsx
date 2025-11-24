import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fdfdf8' }}>
      {/* Header */}
      <header className="py-6 px-4" style={{ borderBottom: '2px solid #577557' }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif font-bold" style={{ color: '#2f3f2f' }}>
            MyWitness.info
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/my-story" className="hover:underline" style={{ color: '#577557' }}>My Story</Link>
            <Link href="/evidence" className="hover:underline" style={{ color: '#577557' }}>Evidence</Link>
            <Link href="/who-is-jesus" className="hover:underline" style={{ color: '#577557' }}>Who Is Jesus</Link>
            <Link href="/resources" className="hover:underline" style={{ color: '#577557' }}>Resources</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div 
        className="py-20 px-4"
        style={{ 
          backgroundImage: 'linear-gradient(to bottom, #e8ede8, #fdfdf8)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.2' }}
          >
            I Was Born a Jehovah's Witness.<br />
            I Lost My Family Because I Left.
          </h1>
          <p 
            className="text-xl mb-4"
            style={{ color: '#577557' }}
          >
            This Is My Story. This Is The Evidence. This Is The Truth.
          </p>
          <p 
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: '#2f3f2f', lineHeight: '1.7' }}
          >
            For years I've stood silent, hoping my family would question what they've been taught. 
            But I realize now that silence accomplishes nothing. This website is my voice—documented, 
            factual, and driven by love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/my-story"
              className="px-8 py-4 rounded-lg text-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#577557' }}
            >
              Read My Story →
            </Link>
            <Link 
              href="/evidence"
              className="px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: '#fdfdf8', border: '2px solid #577557', color: '#577557' }}
            >
              See The Evidence
            </Link>
          </div>
        </div>
      </div>

      {/* Three Truths Section */}
      <div className="py-16 px-4" style={{ backgroundColor: '#f6f8f6' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12" style={{ color: '#2f3f2f' }}>
            Three Kinds of Truth
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Personal Truth */}
            <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#fdfdf8', border: '1px solid #d4e4d4' }}>
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2f3f2f' }}>Personal Truth</h3>
              <p className="mb-6" style={{ color: '#577557', lineHeight: '1.6' }}>
                I lived this. I lost everything. I'm not your enemy—I'm someone who understands.
              </p>
              <Link 
                href="/my-story" 
                className="font-semibold hover:underline"
                style={{ color: '#577557' }}
              >
                Read My Story →
              </Link>
            </div>

            {/* Documented Truth */}
            <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#fdfdf8', border: '1px solid #d4e4d4' }}>
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2f3f2f' }}>Documented Truth</h3>
              <p className="mb-6" style={{ color: '#577557', lineHeight: '1.6' }}>
                Everything here comes from Watchtower's own publications. No spin. No interpretation.
              </p>
              <Link 
                href="/evidence" 
                className="font-semibold hover:underline"
                style={{ color: '#577557' }}
              >
                See The Evidence →
              </Link>
            </div>

            {/* Biblical Truth */}
            <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#fdfdf8', border: '1px solid #d4e4d4' }}>
              <div className="text-4xl mb-4">✝️</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2f3f2f' }}>Biblical Truth</h3>
              <p className="mb-6" style={{ color: '#577557', lineHeight: '1.6' }}>
                Jesus is exactly who the Bible says He is. See what Scripture actually teaches.
              </p>
              <Link 
                href="/who-is-jesus" 
                className="font-semibold hover:underline"
                style={{ color: '#577557' }}
              >
                Who Is Jesus →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Evidence Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-4" style={{ color: '#2f3f2f' }}>
            Featured Evidence
          </h2>
          <p className="text-center mb-12" style={{ color: '#577557' }}>
            Using the Watchtower's own Kingdom Interlinear Translation
          </p>

          <div className="space-y-6">
            {/* Who Is Jesus Card */}
            <Link 
              href="/who-is-jesus"
              className="block rounded-xl p-6 transition-all hover:shadow-lg"
              style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #d4af37' }}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                Who Is Jesus? — 7 Lines of Evidence
              </h3>
              <p style={{ color: '#577557', lineHeight: '1.6' }}>
                Explore John 8:58, Hebrews 1, Colossians 1, Thomas's declaration, and more. 
                See how the NWT obscures Jesus's deity—and what the Greek actually says.
              </p>
              <span className="inline-block mt-3 font-semibold" style={{ color: '#d4af37' }}>
                Explore the Evidence →
              </span>
            </Link>

            {/* NWT Analysis Card */}
            <Link 
              href="/evidence"
              className="block rounded-xl p-6 transition-all hover:shadow-lg"
              style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                New World Translation Analysis
              </h3>
              <p style={{ color: '#577557', lineHeight: '1.6' }}>
                The Kingdom Interlinear shows the Greek word-for-word. Then the NWT column 
                changes it. See the contradictions for yourself.
              </p>
              <span className="inline-block mt-3 font-semibold" style={{ color: '#577557' }}>
                See the Analysis →
              </span>
            </Link>

            {/* False Prophecies Card */}
            <Link 
              href="/evidence"
              className="block rounded-xl p-6 transition-all hover:shadow-lg"
              style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                False Prophecies: 1914, 1925, 1975
              </h3>
              <p style={{ color: '#577557', lineHeight: '1.6' }}>
                They predicted the end of the world. Multiple times. With absolute certainty. 
                Here's the documentation from their own publications.
              </p>
              <span className="inline-block mt-3 font-semibold" style={{ color: '#577557' }}>
                Coming Soon
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* For Different Audiences */}
      <div className="py-16 px-4" style={{ backgroundColor: '#f6f8f6' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12" style={{ color: '#2f3f2f' }}>
            Where Would You Like to Start?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl p-6" style={{ backgroundColor: '#fdfdf8', border: '1px solid #d4e4d4' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                "I'm Having Doubts"
              </h3>
              <p className="text-sm mb-4" style={{ color: '#577557', lineHeight: '1.6' }}>
                You're not alone. Many have questioned. Start here for a safe place to explore.
              </p>
              <span className="text-sm font-semibold" style={{ color: '#577557' }}>Coming Soon</span>
            </div>

            <div className="rounded-xl p-6" style={{ backgroundColor: '#fdfdf8', border: '1px solid #d4e4d4' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                "I Just Left"
              </h3>
              <p className="text-sm mb-4" style={{ color: '#577557', lineHeight: '1.6' }}>
                The first months are the hardest. Find support and clarity for the road ahead.
              </p>
              <span className="text-sm font-semibold" style={{ color: '#577557' }}>Coming Soon</span>
            </div>

            <div className="rounded-xl p-6" style={{ backgroundColor: '#fdfdf8', border: '1px solid #d4e4d4' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                "I'm a Christian"
              </h3>
              <p className="text-sm mb-4" style={{ color: '#577557', lineHeight: '1.6' }}>
                Want to witness effectively to JWs? Learn what works and what doesn't.
              </p>
              <span className="text-sm font-semibold" style={{ color: '#577557' }}>Coming Soon</span>
            </div>

            <div className="rounded-xl p-6" style={{ backgroundColor: '#fdfdf8', border: '1px solid #d4e4d4' }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                "I Have a JW Loved One"
              </h3>
              <p className="text-sm mb-4" style={{ color: '#577557', lineHeight: '1.6' }}>
                Understanding what they're going through—and how you can help.
              </p>
              <span className="text-sm font-semibold" style={{ color: '#577557' }}>Coming Soon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4" style={{ backgroundColor: '#2f3f2f' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-4" style={{ color: '#d4e4d4' }}>
            © 2025 MyWitness LLC. All rights reserved.
          </p>
          <p className="text-sm mb-6" style={{ color: '#a0b0a0', lineHeight: '1.6' }}>
            This ministry is 100% self-funded. I accept no donations, receive no commissions, 
            and have no financial interest in this work.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/my-story" className="text-sm hover:underline" style={{ color: '#d4e4d4' }}>My Story</Link>
            <Link href="/evidence" className="text-sm hover:underline" style={{ color: '#d4e4d4' }}>Evidence</Link>
            <Link href="/who-is-jesus" className="text-sm hover:underline" style={{ color: '#d4e4d4' }}>Who Is Jesus</Link>
            <Link href="/resources" className="text-sm hover:underline" style={{ color: '#d4e4d4' }}>Resources</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}