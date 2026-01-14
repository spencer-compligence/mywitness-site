import Link from 'next/link';
import ScripturePassage from '../components/ScripturePassage';

export const metadata = {
  title: 'Old Testament Yahweh Passages Applied to Jesus | Who Is Jesus? | MyWitness',
  description:
    'The New Testament authors repeatedly take passages about Yahweh and apply them to Jesus. Explore 5 key examples.',
};

export default function YahwehPassagesPage() {
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
            Part 8 of 12
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: '#ffffff' }}
          >
            Yahweh Passages Applied to Jesus
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{ color: '#d4af37' }}>
            5 Old Testament Passages About Yahweh That the New Testament Applies to Jesus
          </p>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: '#e8ede8' }}
          >
            The New Testament authors repeatedly take passages that clearly refer to
            Yahweh and apply them directly to Jesus.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          {/* Passage 1 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-8"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <h4
              className="text-xl md:text-2xl font-serif font-bold mb-4"
              style={{ color: '#2f3f2f' }}
            >
              Isaiah 40:3 → Matthew 3:3
            </h4>

            <div className="mb-4">
              <p className="text-sm font-semibold mb-1" style={{ color: '#577557' }}>
                Old Testament (Isaiah 40:3):
              </p>
              <p
                className="text-lg italic p-4 rounded-lg"
                style={{ backgroundColor: '#ffffff', color: '#2f3f2f' }}
              >
                &quot;A voice is calling, &apos;Clear the way for <strong>Yahweh</strong> in the
                wilderness; make smooth in the desert a highway for <strong>our God</strong>.&apos;&quot;
              </p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold mb-1" style={{ color: '#577557' }}>
                New Testament (Matthew 3:3):
              </p>
              <p
                className="text-lg italic p-4 rounded-lg"
                style={{ backgroundColor: '#ffffff', color: '#2f3f2f' }}
              >
                &quot;For this is the one referred to by Isaiah the prophet when he said,
                &apos;THE VOICE OF ONE CRYING IN THE WILDERNESS, MAKE READY THE WAY OF THE LORD,
                MAKE HIS PATHS STRAIGHT!&apos;&quot;
              </p>
            </div>

            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <strong>Why It Matters:</strong> John prepared the way for Jesus. The one
              whose way John prepared is called &quot;Yahweh&quot; in Isaiah. Jesus is Yahweh.
            </p>
          </div>

          {/* Passage 2 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-8"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <h4
              className="text-xl md:text-2xl font-serif font-bold mb-4"
              style={{ color: '#2f3f2f' }}
            >
              Isaiah 45:23 → Philippians 2:10-11
            </h4>

            <div className="mb-4">
              <p className="text-sm font-semibold mb-1" style={{ color: '#577557' }}>
                Old Testament (Isaiah 45:23):
              </p>
              <p
                className="text-lg italic p-4 rounded-lg"
                style={{ backgroundColor: '#ffffff', color: '#2f3f2f' }}
              >
                &quot;I have sworn by Myself, the word has gone forth from My mouth in
                righteousness and will not turn back, that to <strong>Me</strong> every
                knee will bow, every tongue will swear allegiance.&quot;
              </p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold mb-1" style={{ color: '#577557' }}>
                New Testament (Philippians 2:10-11):
              </p>
              <p
                className="text-lg italic p-4 rounded-lg"
                style={{ backgroundColor: '#ffffff', color: '#2f3f2f' }}
              >
                &quot;so that at the name of <strong>Jesus</strong> EVERY KNEE WILL BOW, of
                those who are in heaven and on earth and under the earth, and that every
                tongue will confess that Jesus Christ is Lord, to the glory of God the
                Father.&quot;
              </p>
            </div>

            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <strong>Why It Matters:</strong> What Yahweh declared would be done to Him
              — every knee bowing, every tongue confessing — is applied to Jesus. Jesus
              receives what belongs to Yahweh alone.
            </p>
          </div>

          {/* Passage 3 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-8"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <h4
              className="text-xl md:text-2xl font-serif font-bold mb-4"
              style={{ color: '#2f3f2f' }}
            >
              Joel 2:32 → Romans 10:13
            </h4>

            <div className="mb-4">
              <p className="text-sm font-semibold mb-1" style={{ color: '#577557' }}>
                Old Testament (Joel 2:32):
              </p>
              <p
                className="text-lg italic p-4 rounded-lg"
                style={{ backgroundColor: '#ffffff', color: '#2f3f2f' }}
              >
                &quot;And it will come about that everyone who calls on the name of{' '}
                <strong>Yahweh</strong> will be saved.&quot;
              </p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold mb-1" style={{ color: '#577557' }}>
                New Testament (Romans 10:13):
              </p>
              <p
                className="text-lg italic p-4 rounded-lg"
                style={{ backgroundColor: '#ffffff', color: '#2f3f2f' }}
              >
                &quot;for &apos;WHOEVER WILL CALL ON THE NAME OF THE LORD WILL BE SAVED.&apos;&quot;
              </p>
            </div>

            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <strong>Why It Matters:</strong> Paul quotes Joel 2:32 in the context of
              calling on the name of Jesus for salvation (Romans 10:9-14). Calling on
              Jesus&apos; name is calling on Yahweh&apos;s name.
            </p>
          </div>

          {/* Passage 4 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-8"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <h4
              className="text-xl md:text-2xl font-serif font-bold mb-4"
              style={{ color: '#2f3f2f' }}
            >
              Psalm 102:25-27 → Hebrews 1:10-12
            </h4>

            <div className="mb-4">
              <p className="text-sm font-semibold mb-1" style={{ color: '#577557' }}>
                Old Testament (Psalm 102:25-27):
              </p>
              <p
                className="text-lg italic p-4 rounded-lg"
                style={{ backgroundColor: '#ffffff', color: '#2f3f2f' }}
              >
                Addressed to <strong>Yahweh</strong> (see v. 1, 12), describing Him as
                the eternal Creator whose years will not end.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold mb-1" style={{ color: '#577557' }}>
                New Testament (Hebrews 1:10-12):
              </p>
              <p
                className="text-lg italic p-4 rounded-lg"
                style={{ backgroundColor: '#ffffff', color: '#2f3f2f' }}
              >
                Applied directly to <strong>the Son</strong>.
              </p>
            </div>

            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <strong>Why It Matters:</strong> The writer of Hebrews identifies Jesus
              with the eternal, unchanging Yahweh who created the heavens and earth.
            </p>
          </div>

          {/* Passage 5 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-8"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <h4
              className="text-xl md:text-2xl font-serif font-bold mb-4"
              style={{ color: '#2f3f2f' }}
            >
              Isaiah 6:1-10 → John 12:41
            </h4>

            <div className="mb-4">
              <p className="text-sm font-semibold mb-1" style={{ color: '#577557' }}>
                Old Testament (Isaiah 6:1, 5):
              </p>
              <p
                className="text-lg italic p-4 rounded-lg"
                style={{ backgroundColor: '#ffffff', color: '#2f3f2f' }}
              >
                &quot;In the year of King Uzziah&apos;s death I saw the Lord sitting on a throne,
                lofty and exalted, with the train of His robe filling the temple... Then
                I said, &apos;Woe is me, for I am ruined! Because I am a man of unclean lips,
                and I live among a people of unclean lips; for my eyes have seen the
                King, <strong>Yahweh of hosts</strong>.&apos;&quot;
              </p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold mb-1" style={{ color: '#577557' }}>
                New Testament (John 12:41):
              </p>
              <p
                className="text-lg italic p-4 rounded-lg"
                style={{ backgroundColor: '#ffffff', color: '#2f3f2f' }}
              >
                &quot;These things Isaiah said because he saw <strong>His glory</strong>,
                and he spoke about <strong>Him</strong>.&quot;
              </p>
            </div>

            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <strong>Why It Matters:</strong> In context, John has just quoted Isaiah
              6:10 and then states that Isaiah spoke these things because &quot;he saw His
              glory&quot; — referring to Jesus (v. 37-40 are about people not believing in
              Jesus). John explicitly identifies the Yahweh of Isaiah&apos;s throne room
              vision with Jesus. When Isaiah saw Yahweh of hosts high and lifted up, he
              was seeing the pre-incarnate Christ.
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
              The New Testament authors didn&apos;t see Jesus as a lesser deity or a created
              being. They identified Him with the Yahweh of the Old Testament. Isaiah&apos;s
              vision of Yahweh? That was Jesus. The one who deserves every knee to bow?
              Jesus. The one whose name brings salvation? Jesus. The eternal Creator of
              Psalm 102? Jesus. This wasn&apos;t confusion — it was intentional theological
              identification. Jesus is Yahweh.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/who-is-jesus/pre-existence"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
              >
                Next: Pre-existence →
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
