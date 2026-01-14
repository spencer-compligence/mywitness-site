import Link from 'next/link';
import ScripturePassage from '../components/ScripturePassage';

export const metadata = {
  title: 'Jesus Has Divine Attributes | Who Is Jesus? | MyWitness',
  description:
    'Only God possesses these attributes, yet Scripture ascribes them to Jesus. Explore 8 passages on Christ\'s divine attributes.',
};

export default function DivineAttributesPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fdfdf8' }}>
      {/* Hero Section */}
      <section
        className="py-20 px-5"
        style={{
          background: 'linear-gradient(135deg, #2f3f2f 0%, #1a261a 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/who-is-jesus"
            className="inline-flex items-center gap-2 text-lg mb-6 transition-colors hover:opacity-80"
            style={{ color: '#d4af37' }}
          >
            ← Back to Who Is Jesus?
          </Link>
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
          >
            Part 6 of 12
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: '#ffffff' }}
          >
            Jesus Has Divine Attributes
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{ color: '#d4af37' }}>
            8 Passages Showing Jesus Possesses Attributes Only God Has
          </p>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: '#e8ede8' }}
          >
            Omnipresence, omniscience, immutability, self-existence — these
            attributes belong to God alone, yet Scripture ascribes them to Jesus.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          {/* Omnipresence Section */}
          <h3
            className="text-2xl font-serif font-bold mb-6 mt-8"
            style={{ color: '#2f3f2f' }}
          >
            Omnipresence
          </h3>

          <ScripturePassage
            reference="Matthew 28:20"
            title="'I Am with You Always'"
            text="teaching them to keep all that I commanded you; and behold, I am with you always, even to the end of the age."
            whyItMatters="Jesus promises to be with all believers everywhere, always. Only an omnipresent Being can make this promise."
          />

          <ScripturePassage
            reference="Matthew 18:20"
            title="Where Two or Three Gather"
            text="For where two or three have gathered together in My name, I am there in their midst."
            whyItMatters="Jesus claims to be present wherever believers gather in His name — simultaneously, around the world. This is a claim to omnipresence."
          />

          {/* Omniscience Section */}
          <h3
            className="text-2xl font-serif font-bold mb-6 mt-12"
            style={{ color: '#2f3f2f' }}
          >
            Omniscience
          </h3>

          <ScripturePassage
            reference="John 21:17"
            title="'Lord, You Know All Things'"
            text="He said to him the third time, 'Simon, son of John, do you love Me?' Peter was grieved because He said to him the third time, 'Do you love Me?' And he said to Him, 'Lord, You know all things; You know that I love You.'"
            whyItMatters="Peter affirms that Jesus 'knows all things.' Only God is omniscient."
          />

          <ScripturePassage
            reference="John 2:24-25"
            title="He Knew What Was in Man"
            text="But Jesus, on His part, was not entrusting Himself to them, for He knew all men, and because He did not need anyone to bear witness concerning man, for He Himself knew what was in man."
            whyItMatters="Jesus knew the hearts and thoughts of all people. Only God knows the heart (1 Kings 8:39; Jeremiah 17:10)."
          />

          <ScripturePassage
            reference="John 1:48"
            title="Knowledge of Hidden Things"
            text="Nathanael said to Him, 'From where do You know me?' Jesus answered and said to him, 'Before Philip called you, when you were under the fig tree, I saw you.'"
            whyItMatters="Jesus had supernatural knowledge of Nathanael's private actions. Nathanael recognized this as evidence that Jesus is 'the Son of God' (v. 49)."
          />

          {/* Immutability Section */}
          <h3
            className="text-2xl font-serif font-bold mb-6 mt-12"
            style={{ color: '#2f3f2f' }}
          >
            Immutability (Unchangeableness)
          </h3>

          <ScripturePassage
            reference="Hebrews 13:8"
            title="The Same Yesterday, Today, and Forever"
            text="Jesus Christ is the same yesterday and today and forever."
            whyItMatters="Unchangeableness is a divine attribute (Malachi 3:6). Jesus, unlike created beings, does not change."
          />

          {/* Self-Existence Section */}
          <h3
            className="text-2xl font-serif font-bold mb-6 mt-12"
            style={{ color: '#2f3f2f' }}
          >
            Self-Existence (Aseity)
          </h3>

          <ScripturePassage
            reference="John 5:26"
            title="The Son Has Life in Himself"
            text="For just as the Father has life in Himself, even so He gave to the Son also to have life in Himself;"
            whyItMatters="Self-existence (aseity) is a uniquely divine attribute. God alone has life in Himself — He is not dependent on anything outside Himself for existence. Jesus possesses this same attribute: life in Himself, not derived moment-by-moment but as an intrinsic quality of His being."
          />

          {/* Almighty Section */}
          <h3
            className="text-2xl font-serif font-bold mb-6 mt-12"
            style={{ color: '#2f3f2f' }}
          >
            The Almighty
          </h3>

          <ScripturePassage
            reference="Revelation 1:8"
            title="'The Almighty'"
            text="'I am the Alpha and the Omega,' says the Lord God, 'who is and who was and who is to come, the Almighty.'"
            whyItMatters="Compare with Revelation 1:17-18 and 22:13, where Jesus identifies Himself with these same titles. Jesus is the Almighty."
          />

          {/* Summary Box */}
          <div
            className="rounded-2xl p-8 mt-12"
            style={{
              background: 'linear-gradient(135deg, #2f3f2f 0%, #1a261a 100%)',
            }}
          >
            <h3
              className="text-2xl md:text-3xl font-serif font-bold mb-4"
              style={{ color: '#ffffff' }}
            >
              What These Attributes Prove
            </h3>
            <p
              className="text-lg mb-6"
              style={{ color: '#e8ede8', lineHeight: '1.8' }}
            >
              These attributes define what it means to be God. Only God is everywhere
              present. Only God knows all things. Only God is unchanging. Only God has
              life in Himself. Scripture ascribes every one of these divine attributes
              to Jesus. Either the Bible is wrong, or Jesus is God.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/who-is-jesus/divine-actions"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
              >
                Next: Divine Actions →
              </Link>
              <Link
                href="/who-is-jesus"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                }}
              >
                Back to Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
