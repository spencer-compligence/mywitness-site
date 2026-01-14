import Link from 'next/link';
import ScripturePassage from '../components/ScripturePassage';

export const metadata = {
  title: 'Jesus Is the Alpha and Omega | Who Is Jesus? | MyWitness',
  description:
    'Jesus claims to be the Alpha and Omega, the First and the Last — titles that belong to Yahweh alone.',
};

export default function AlphaOmegaPage() {
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
            Part 11 of 12
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: '#ffffff' }}
          >
            The Alpha and Omega
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{ color: '#d4af37' }}>
            3 Passages Showing Jesus Is the First and the Last
          </p>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: '#e8ede8' }}
          >
            &quot;Alpha and Omega&quot; and &quot;First and Last&quot; are titles that belong
            exclusively to Yahweh — yet Jesus claims them for Himself.
          </p>
        </div>
      </section>

      {/* Background Context */}
      <section className="py-12 px-5" style={{ backgroundColor: '#f6f8f6' }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-xl p-6 md:p-8"
            style={{ backgroundColor: '#ffffff', border: '2px solid #e8ede8' }}
          >
            <h3
              className="text-2xl font-serif font-bold mb-4"
              style={{ color: '#2f3f2f' }}
            >
              The Old Testament Background
            </h3>
            <p
              className="text-lg italic mb-4"
              style={{ color: '#577557', lineHeight: '1.7' }}
            >
              &quot;Thus says Yahweh, the King of Israel and his Redeemer, Yahweh of hosts:
              &apos;I am the first and I am the last, and there is no God besides Me.&apos;&quot;
              <span className="block text-sm mt-2 not-italic">— Isaiah 44:6</span>
            </p>
            <p
              className="text-lg italic mb-4"
              style={{ color: '#577557', lineHeight: '1.7' }}
            >
              &quot;Listen to Me, O Jacob, even Israel whom I called; I am He, I am the
              first, I am also the last.&quot;
              <span className="block text-sm mt-2 not-italic">— Isaiah 48:12</span>
            </p>
            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              In Isaiah, Yahweh declares that He alone is &quot;the first and the last&quot; —
              this title emphasizes His eternal existence and His uniqueness as God. If
              there is &quot;no God besides&quot; Yahweh, then anyone else claiming this title is
              either a blasphemer or is Yahweh Himself.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <ScripturePassage
            reference="Revelation 1:8"
            title="The Lord God, the Almighty"
            text="'I am the Alpha and the Omega,' says the Lord God, 'who is and who was and who is to come, the Almighty.'"
            whyItMatters="This verse establishes that 'Alpha and Omega' is a divine title belonging to the Lord God Almighty. This is the standard by which we evaluate the following passages."
          />

          <ScripturePassage
            reference="Revelation 1:17-18"
            title="The First and the Last Who Died and Lives"
            text="When I saw Him, I fell at His feet like a dead man. And He placed His right hand on me, saying, 'Do not be afraid; I am the first and the last, and the living One; and I was dead, and behold, I am alive forevermore, and I have the keys of death and of Hades.'"
            whyItMatters="Jesus is 'the first and the last' — the same title Yahweh claims in Isaiah 44:6 and 48:12. But this 'first and last' was dead and is now alive — identifying the speaker as the crucified and risen Christ. Jesus claims Yahweh's exclusive title for Himself."
            keyPoints={[
              "'The first and the last' — Yahweh's title from Isaiah",
              "'I was dead' — This identifies the speaker as Jesus, who died on the cross",
              "'I am alive forevermore' — The resurrection",
              "'Keys of death and of Hades' — Divine authority over death",
            ]}
          />

          <ScripturePassage
            reference="Revelation 22:12-13"
            title="Jesus Is the Alpha and Omega"
            text="'Behold, I am coming quickly, and My reward is with Me, to render to every man according to what he has done. I am the Alpha and the Omega, the first and the last, the beginning and the end.'"
            whyItMatters="The speaker is clearly Jesus (see v. 16: 'I, Jesus' and v. 20: 'Come, Lord Jesus'). Jesus claims to be the Alpha and Omega, the first and the last, the beginning and the end — all titles that belong to Yahweh alone in the Old Testament (Isaiah 44:6; 48:12)."
            keyPoints={[
              "Verse 16 confirms the speaker: 'I, Jesus, have sent My angel'",
              "Verse 20: 'Come, Lord Jesus' — the church responds to Jesus as the one who is coming",
              "The Watchtower acknowledged in its October 1, 1978 issue (p. 15) that Revelation 22:12-13 refers to Jesus",
            ]}
          />

          {/* Connecting Box */}
          <div
            className="rounded-xl p-6 my-8"
            style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #d4af37' }}
          >
            <h4 className="text-xl font-bold mb-3" style={{ color: '#2f3f2f' }}>
              The Logic Is Inescapable
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span style={{ color: '#d4af37' }}>1.</span>
                <span style={{ color: '#2f3f2f' }}>
                  Isaiah 44:6 — Yahweh says &quot;I am the first and I am the last, and
                  there is no God besides Me&quot;
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#d4af37' }}>2.</span>
                <span style={{ color: '#2f3f2f' }}>
                  Revelation 1:17-18 — Jesus says &quot;I am the first and the last... I was
                  dead, and behold, I am alive&quot;
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#d4af37' }}>3.</span>
                <span style={{ color: '#2f3f2f' }}>
                  Revelation 22:13 — Jesus says &quot;I am the Alpha and the Omega, the
                  first and the last&quot;
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#d4af37' }}>∴</span>
                <span style={{ color: '#2f3f2f' }}>
                  <strong>
                    If there is &quot;no God besides&quot; the First and the Last (Isaiah 44:6),
                    and Jesus is the First and the Last, then Jesus is Yahweh.
                  </strong>
                </span>
              </li>
            </ul>
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
              &quot;The First and the Last&quot; is not a generic title — it&apos;s Yahweh&apos;s
              exclusive claim to eternal existence and sole deity. When Jesus claims
              this title, He is claiming to be Yahweh. There is no middle ground. Either
              Jesus is a blasphemer for claiming Yahweh&apos;s title, or He is Yahweh
              Himself. The resurrection proves His claim is true.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/who-is-jesus/parallel-titles"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
              >
                Next: Parallel Titles Chart →
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
