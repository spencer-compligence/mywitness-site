import Link from "next/link";

export default function MyStoryPage() {
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
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#2f3f2f' }}>
            My Story: Born Into a Lie
          </h2>
          <p className="text-lg md:text-xl mb-6" style={{ color: '#577557' }}>
            Four generations. One organization. A lifetime of questions that led to devastating answers.
          </p>
        </div>
      </section>

      {/* Video Placeholder */}
      <section className="py-12" style={{ backgroundColor: '#fdfdf8' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-xl p-12 text-center" style={{ backgroundColor: '#e8ede8', border: '2px solid #b3c4b3' }}>
            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ backgroundColor: '#d1dbd1' }}>
              <span className="text-4xl">▶️</span>
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              Video Testimony Coming Soon
            </h3>
            <p style={{ color: '#577557' }}>
              My full story on camera - unedited, unfiltered, and from the heart.
            </p>
          </div>
        </div>
      </section>

      {/* Story Content with Placeholders */}
      <section className="py-16" style={{ backgroundColor: '#fdfdf8' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Section 1 */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: '#2f3f2f' }}>
              The Beginning: A Multi-Generational Legacy
            </h3>
            <div className="space-y-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <p>
                I was born into the Jehovah's Witnesses. Not just me—my parents, my grandparents, 
                and my great-grandparents. Four generations of devoted believers.
              </p>
              <p style={{ padding: '1rem', backgroundColor: '#f6f8f6', borderLeft: '4px solid #6b8e6b', fontStyle: 'italic' }}>
                [Placeholder: Describe earliest memories of the Kingdom Hall, going door-to-door as a child, 
                the pride of being part of "God's organization."]
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12 rounded-xl p-8" style={{ backgroundColor: '#f6f8f6' }}>
            <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: '#2f3f2f' }}>
              Growing Up Different
            </h3>
            <div className="space-y-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <p>
                Birthdays. Holidays. The Pledge of Allegiance. These weren't options—they were tests of faith.
              </p>
              <p style={{ padding: '1rem', backgroundColor: '#fdfdf8', borderLeft: '4px solid #6b8e6b', fontStyle: 'italic' }}>
                [Placeholder: Specific memories of feeling isolated at school, sitting out at parties, 
                explaining to classmates why you couldn't celebrate.]
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: '#2f3f2f' }}>
              The First Cracks: Questions I Wasn't Supposed to Ask
            </h3>
            <div className="space-y-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <p style={{ padding: '1rem', backgroundColor: '#f6f8f6', borderLeft: '4px solid #6b8e6b', fontStyle: 'italic' }}>
                [Placeholder: When did the first doubt creep in? Was it a specific teaching? A contradiction? 
                Something that shook your confidence?]
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-12 rounded-xl p-8" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #6b8e6b' }}>
            <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: '#2f3f2f' }}>
              The Breaking Point
            </h3>
            <div className="space-y-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <p style={{ padding: '1rem', backgroundColor: '#fdfdf8', borderLeft: '4px solid #577557', fontStyle: 'italic' }}>
                [Placeholder: The catalyst moment - Crisis of Conscience? False prophecies? Child abuse cover-ups? 
                The Kingdom Interlinear? What made it impossible to ignore?]
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: '#2f3f2f' }}>
              Finding Jesus: The Real One
            </h3>
            <div className="space-y-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <p style={{ padding: '1rem', backgroundColor: '#f6f8f6', borderLeft: '4px solid #6b8e6b', fontStyle: 'italic' }}>
                [Placeholder: Discovering who Jesus really is - God in the flesh, not a created being. 
                Which scripture broke through? John 1:1? Thomas's confession? The I AM statements?]
              </p>
            </div>
          </div>

          {/* Section 6 - The Cost */}
          <div className="mb-12 rounded-xl p-8" style={{ backgroundColor: '#f6f8f6' }}>
            <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: '#2f3f2f' }}>
              The Cost: What Truth Took From Me
            </h3>
            <div className="space-y-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <p className="text-xl font-semibold" style={{ color: '#577557' }}>
                I lost everyone.
              </p>
              <p style={{ padding: '1rem', backgroundColor: '#fdfdf8', borderLeft: '4px solid #577557', fontStyle: 'italic' }}>
                [Placeholder: The shunning - parents, siblings, extended family. The label "apostate." 
                The ongoing grief of major life events they'll never know about.]
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="rounded-xl p-8 text-center" style={{ backgroundImage: 'linear-gradient(to right, #e8ede8, #f6f8f6)' }}>
            <h3 className="text-2xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
              If You're Reading This and Questioning...
            </h3>
            <p className="mb-8" style={{ color: '#577557' }}>
              You're not crazy. Your doubts are valid. The evidence is real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/evidence" className="btn-primary inline-block">
                See The Evidence →
              </Link>
              <Link href="/biblical-truth" className="btn-secondary inline-block">
                Discover True Christianity
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 mt-16" style={{ backgroundColor: '#1b241b', color: '#d1dbd1' }}>
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
