import Link from 'next/link';
import ScripturePassage from '../components/ScripturePassage';

export const metadata = {
  title: "Christ's Pre-existence and Activity in the Old Testament | Who Is Jesus? | MyWitness",
  description:
    'Jesus existed before His incarnation and was active in Old Testament history. Explore 3 key passages.',
};

export default function PreExistencePage() {
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
            Part 9 of 12
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: '#ffffff' }}
          >
            Christ&apos;s Pre-existence
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{ color: '#d4af37' }}>
            3 Passages Showing Jesus Was Active in the Old Testament
          </p>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: '#e8ede8' }}
          >
            Jesus didn&apos;t begin to exist at His birth in Bethlehem. He was present
            and active throughout Old Testament history.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <ScripturePassage
            reference="1 Corinthians 10:4"
            title="The Rock Was Christ"
            text="and all drank the same spiritual drink, for they were drinking from a spiritual rock which followed them; and the rock was Christ."
            whyItMatters="Paul identifies Christ as the Rock that sustained Israel in the wilderness. Throughout the Old Testament, Yahweh is called 'the Rock' (Deuteronomy 32:4, 15, 18, 30-31; Psalm 18:2, 31; Isaiah 44:8). Paul is identifying Jesus with Yahweh."
            keyPoints={[
              "Israel drank from a 'spiritual rock' in the wilderness",
              "Paul explicitly states: 'the rock was Christ'",
              "'The Rock' is a divine title used for Yahweh throughout the Old Testament",
              "Jesus was present with Israel during the Exodus",
            ]}
          />

          <ScripturePassage
            reference="1 Corinthians 10:9"
            title="They Tempted Christ"
            text="Nor let us try the Lord, as some of them tried Him, and were destroyed by the serpents."
            whyItMatters="Many manuscripts read 'Christ' instead of 'Lord' (supported by early manuscripts and the context of v. 4). Paul states that the Israelites in the wilderness tempted Christ — affirming that Jesus existed and was present with Israel during the Exodus. This is another identification of Jesus with the Yahweh who led Israel."
          />

          <ScripturePassage
            reference="Jude 5"
            title="Jesus Delivered Israel from Egypt"
            text="Now I want to remind you, although you once fully knew it, that Jesus, who saved a people out of the land of Egypt, afterward destroyed those who did not believe."
            translation="LSB (following earliest manuscripts)"
            whyItMatters="The earliest and best Greek manuscripts (א A B 33 81 1739) read 'Jesus' (Ἰησοῦς) rather than 'Lord.' Later scribes changed it because 'Jesus' was theologically difficult — how could Jesus have delivered Israel from Egypt? But that's precisely the point: Jesus pre-existed and was the divine agent of Israel's salvation in the Exodus."
            keyPoints={[
              "The ESV, NET, and NASB 2020 follow this reading",
              "The principle of 'the more difficult reading' supports 'Jesus' as original — scribes were more likely to change 'Jesus' to 'Lord' than vice versa",
              "Combined with 1 Corinthians 10:4, 9 and John 12:41, this establishes that Jesus was active throughout Old Testament redemptive history",
            ]}
          />

          {/* Key Point Box */}
          <div
            className="rounded-xl p-6 my-8"
            style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #d4af37' }}
          >
            <h4 className="text-xl font-bold mb-3" style={{ color: '#2f3f2f' }}>
              The Pattern of Pre-existence
            </h4>
            <p className="text-lg" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              These passages reveal a consistent pattern: Jesus was not merely
              prophesied in the Old Testament — He was <em>present</em> in the Old
              Testament. He was the Rock in the wilderness. He was the one Israel
              tempted. He was the one who delivered them from Egypt. He was the Lord
              Isaiah saw high and lifted up (John 12:41). The Jesus who walked the
              roads of Galilee is the same God who led Israel out of Egypt.
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
              Jesus didn&apos;t come into existence 2,000 years ago. He has always existed.
              He was there with Israel in the wilderness. He was the Rock who sustained
              them. He was the Lord they tempted. He was the one who brought them out of
              Egypt. The New Testament writers understood that Jesus was the Yahweh of
              the Old Testament — present and active in redemptive history from the
              beginning.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/who-is-jesus/i-am-statements"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
              >
                Next: &quot;I AM&quot; Statements →
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
