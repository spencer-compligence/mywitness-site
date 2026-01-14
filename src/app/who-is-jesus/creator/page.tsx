import Link from 'next/link';
import ScripturePassage from '../components/ScripturePassage';

export const metadata = {
  title: 'Jesus as Creator | Who Is Jesus? | MyWitness',
  description:
    'Scripture reserves the work of creation for God alone, yet consistently attributes it to Jesus. Explore 4 key passages.',
};

export default function CreatorPage() {
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
            Part 4 of 12
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: '#ffffff' }}
          >
            Jesus as Creator
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{ color: '#d4af37' }}>
            4 Passages Showing Jesus Created All Things
          </p>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: '#e8ede8' }}
          >
            Scripture reserves the work of creation for God alone — yet it
            consistently attributes this work to Jesus.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <ScripturePassage
            reference="John 1:3"
            title="All Things Came Into Being Through Him"
            text="All things came into being through Him, and apart from Him nothing came into being that has come into being."
            whyItMatters="'All things' without exception were created through Christ. If all created things came through Him, then He Himself cannot be a created thing. 'Apart from Him nothing came into being' — this is absolute and allows no exceptions."
          />

          <ScripturePassage
            reference="Colossians 1:16-17"
            title="By Him All Things Were Created"
            text="For by Him all things were created, both in the heavens and on earth, visible and invisible, whether thrones or dominions or rulers or authorities—all things have been created through Him and for Him. He is before all things, and in Him all things hold together."
            whyItMatters="All things in heaven and on earth — including angelic thrones and dominions — were created by Him, through Him, and for Him. If Jesus created all angelic beings, He cannot Himself be an angel. He is also 'before all things' — He has priority over all creation."
            nwtNote="The NWT inserts the word '[other]' four times in this passage to suggest Jesus is part of creation. This word does not appear in the Greek text and fundamentally alters the meaning."
            keyPoints={[
              "'By Him all things were created' — Jesus is the source",
              "'Through Him all things were created' — Jesus is the agent",
              "'For Him all things were created' — Jesus is the purpose",
              "'He is before all things' — Jesus has eternal priority",
              "'In Him all things hold together' — Jesus sustains the universe",
            ]}
          />

          <ScripturePassage
            reference="Hebrews 1:2"
            title="Through Whom He Made the World"
            text="in these last days has spoken to us in His Son, whom He appointed heir of all things, through whom also He made the world."
            whyItMatters="The Father made the world through the Son. The Son is not a created being but the divine agent of creation itself."
          />

          <ScripturePassage
            reference="Hebrews 1:10"
            title="'You, Lord, in the Beginning Laid the Foundation of the Earth'"
            text="And, 'YOU, LORD, IN THE BEGINNING LAID THE FOUNDATION OF THE EARTH, AND THE HEAVENS ARE THE WORKS OF YOUR HANDS;'"
            whyItMatters="This is a quotation of Psalm 102:25, which is addressed to Yahweh. Yet Hebrews applies it directly to the Son. The Son laid the foundation of the earth; the heavens are the works of His hands. This is the work of God alone."
          />

          {/* Key Point Box */}
          <div
            className="rounded-xl p-6 my-8"
            style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #d4af37' }}
          >
            <h4 className="text-xl font-bold mb-3" style={{ color: '#2f3f2f' }}>
              Why This Matters
            </h4>
            <p className="text-lg" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              Isaiah 44:24 declares: &quot;Thus says Yahweh, your Redeemer, and the one who
              formed you from the womb, &apos;I, Yahweh, am the maker of all things,
              stretching out the heavens <strong>by Myself</strong> and spreading out
              the earth <strong>all alone</strong>.&apos;&quot; If Yahweh created everything
              &quot;by Myself&quot; and &quot;all alone,&quot; and Jesus also created &quot;all things&quot; —
              then Jesus must be Yahweh.
            </p>
          </div>

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
              What These Passages Prove
            </h3>
            <p
              className="text-lg mb-6"
              style={{ color: '#e8ede8', lineHeight: '1.8' }}
            >
              The Bible is clear: all things were created through Jesus, for Jesus,
              and are sustained by Jesus. Nothing exists that He did not create. The
              heavens are the work of His hands. If Jesus is the Creator of all things,
              He cannot be a created thing. Jesus is the eternal Creator God.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/who-is-jesus/worship"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
              >
                Next: Jesus Receives Worship →
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
