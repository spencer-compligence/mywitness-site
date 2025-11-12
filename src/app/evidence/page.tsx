import Link from "next/link";

export default function EvidencePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-sage-800 py-6 shadow-md">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-serif font-bold" style={{ color: '#fdfdf8' }}>
              MyWitness<span style={{ color: '#d4af37' }}>.info</span>
            </h1>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-50 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#2f3f2f' }}>
            The Evidence: Using Their Own Words
          </h2>
          <p className="text-lg md:text-xl mb-6" style={{ color: '#577557' }}>
            Everything here comes directly from Watchtower publications. No spin. No interpretation. Just documented facts.
          </p>
        </div>
      </section>

      {/* Evidence Categories */}
      <section className="py-16" style={{ backgroundColor: '#fdfdf8' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* False Prophecies Card */}
          <div className="mb-8 rounded-xl p-8 border-2" style={{ backgroundColor: '#fdfdf8', borderColor: '#d1dbd1' }}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-3xl" style={{ backgroundColor: '#f6f8f6' }}>
                📅
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                  False Prophecies: 1914, 1925, 1975
                </h3>
                <p className="mb-4" style={{ color: '#577557', lineHeight: '1.7' }}>
                  They predicted the end of the world. Multiple times. With absolute certainty. And every time, 
                  they were wrong. Here's the documentation.
                </p>
                <div className="rounded p-4 mb-4" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #6b8e6b' }}>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>Coming Soon:</p>
                  <ul className="text-sm space-y-1" style={{ color: '#577557' }}>
                    <li>• Scanned Watchtower pages with original predictions</li>
                    <li>• Timeline of date-setting and failures</li>
                    <li>• Later denials and rewrites of history</li>
                    <li>• Impact on believers who gave up everything</li>
                  </ul>
                </div>
                <Link 
                  href="/evidence/false-prophecies" 
                  className="inline-block font-semibold"
                  style={{ color: '#577557' }}
                >
                  Read More (Coming Soon) →
                </Link>
              </div>
            </div>
          </div>

          {/* Kingdom Interlinear Card */}
          <div className="mb-8 rounded-xl p-8 border-2" style={{ backgroundColor: '#fdfdf8', borderColor: '#d1dbd1' }}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-3xl" style={{ backgroundColor: '#f6f8f6' }}>
                📖
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                  My Grandmother's Kingdom Interlinear Translation
                </h3>
                <p className="mb-4" style={{ color: '#577557', lineHeight: '1.7' }}>
                  The Watchtower published their own interlinear Bible with Greek and English side-by-side. 
                  Then they ignored what it actually said.
                </p>
                <div className="rounded p-4 mb-4" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #6b8e6b' }}>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>Featured Evidence:</p>
                  <ul className="text-sm space-y-1" style={{ color: '#577557' }}>
                    <li>• John 1:1 - What the Greek actually says</li>
                    <li>• Photos of the inherited Bible from my grandmother</li>
                    <li>• Comparison: Interlinear vs. New World Translation</li>
                    <li>• Why they changed their own translation</li>
                  </ul>
                </div>
                <Link 
                  href="/evidence/kingdom-interlinear" 
                  className="inline-block font-semibold"
                  style={{ color: '#577557' }}
                >
                  See The Comparison (Coming Soon) →
                </Link>
              </div>
            </div>
          </div>

          {/* Doctrine Changes Card */}
          <div className="mb-8 rounded-xl p-8 border-2" style={{ backgroundColor: '#fdfdf8', borderColor: '#d1dbd1' }}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-3xl" style={{ backgroundColor: '#f6f8f6' }}>
                🔄
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                  Doctrine Changes: "New Light" or Changed Story?
                </h3>
                <p className="mb-4" style={{ color: '#577557', lineHeight: '1.7' }}>
                  Blood transfusions. Organ transplants. The generation teaching. Doctrines flip-flopped as 
                  "new light" while claiming to be God's channel.
                </p>
                <div className="rounded p-4 mb-4" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #6b8e6b' }}>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>Documentation Includes:</p>
                  <ul className="text-sm space-y-1" style={{ color: '#577557' }}>
                    <li>• Teachings that were truth, then heresy, then truth again</li>
                    <li>• People who died following "old light" doctrine</li>
                    <li>• Pattern of rewriting history in later publications</li>
                    <li>• Why "new light" doesn't excuse being wrong</li>
                  </ul>
                </div>
                <Link 
                  href="/evidence/doctrine-changes" 
                  className="inline-block font-semibold"
                  style={{ color: '#577557' }}
                >
                  View Timeline (Coming Soon) →
                </Link>
              </div>
            </div>
          </div>

          {/* Child Abuse Card */}
          <div className="mb-8 rounded-xl p-8 border-2" style={{ backgroundColor: '#fdfdf8', borderColor: '#d1dbd1' }}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-3xl" style={{ backgroundColor: '#f6f8f6' }}>
                ⚖️
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                  The Two-Witness Rule & Child Protection Failures
                </h3>
                <p className="mb-4" style={{ color: '#577557', lineHeight: '1.7' }}>
                  Why the organization's policies systematically protected abusers and silenced victims. 
                  Court cases. Testimonies. Documented cover-ups.
                </p>
                <div className="rounded p-4 mb-4" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #6b8e6b' }}>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>Coming Documentation:</p>
                  <ul className="text-sm space-y-1" style={{ color: '#577557' }}>
                    <li>• The two-witness rule from their own publications</li>
                    <li>• Australian Royal Commission findings</li>
                    <li>• Court cases and settlements</li>
                    <li>• Why the policies enable abuse</li>
                  </ul>
                </div>
                <Link 
                  href="/evidence/child-protection" 
                  className="inline-block font-semibold"
                  style={{ color: '#577557' }}
                >
                  Read The Evidence (Coming Soon) →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16" style={{ backgroundColor: '#f6f8f6' }}>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-2xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
            This Is Just the Beginning
          </h3>
          <p className="mb-8" style={{ color: '#577557' }}>
            More evidence is being compiled and will be published soon. This site will grow as documentation is added.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/my-story" className="btn-secondary inline-block">
              ← Read My Story
            </Link>
            <Link href="/biblical-truth" className="btn-primary inline-block">
              Discover Biblical Truth →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8" style={{ backgroundColor: '#1b241b', color: '#d1dbd1' }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm mb-2">© 2025 MyWitness LLC. All rights reserved.</p>
          <p className="text-xs italic" style={{ color: '#b3c4b3' }}>
            This ministry is 100% self-funded. No donations, no commissions, no financial interests.
          </p>
        </div>
      </footer>
    </main>
  );
}
