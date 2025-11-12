import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-sage-800 text-warm-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif font-bold">
            MyWitness<span className="text-gold">.info</span>
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sage-50 to-warm-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-800 mb-6">
            I Was Born a Jehovah's Witness.
            <br />
            <span className="text-sage-600">
              I Lost My Family Because I Left.
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-sage-700 mb-8">
            This Is My Story. This Is The Evidence. This Is The Truth.
          </p>
          
          <p className="text-lg text-sage-600 mb-12 max-w-3xl mx-auto">
            For years I've stood silent, hoping my family would question what they've been taught. 
            But I realize now that silence accomplishes nothing. This website is my voice—documented, 
            factual, and driven by love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/my-story" className="btn-primary">
              Read My Story →
            </Link>
            <Link href="/evidence" className="btn-secondary">
              See The Evidence
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-sage-200 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm mb-2">
            © 2025 MyWitness LLC. All rights reserved.
          </p>
          <p className="text-xs text-sage-300 italic">
            This ministry is 100% self-funded. I accept no donations, 
            receive no commissions, and have no financial interest in this work.
          </p>
        </div>
      </footer>
    </main>
  );
}
