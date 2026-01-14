import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Responding to Objections About Jesus\' Deity | MyWitness',
  description:
    'Biblical answers to common objections about the deity of Christ. Why "a god" creates polytheism, what "Son of God" really means, and more.',
};

export default function ObjectionsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fdfdf8' }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div
        className="py-20 px-4"
        style={{
          background: 'linear-gradient(135deg, #2f3f2f 0%, #1a261a 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/why-it-matters"
            className="inline-flex items-center gap-2 text-lg mb-6 transition-colors hover:opacity-80"
            style={{ color: '#d4af37' }}
          >
            ← Back to Why It Matters
          </Link>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: '#ffffff' }}
          >
            Responding to Objections
          </h1>
          <p
            className="text-xl md:text-2xl"
            style={{ color: '#d4af37' }}
          >
            Biblical Answers to Common Questions About Christ&apos;s Deity
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <p
            className="text-lg"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            If you&apos;ve been taught that Jesus is not God, you likely have questions and objections.
            That&apos;s understandable. Below are detailed responses to the most common objections,
            grounded in Scripture and sound reasoning.
          </p>
        </div>

        {/* Objection 1 */}
        <section className="mb-16">
          <div
            className="rounded-t-xl p-6"
            style={{ backgroundColor: '#2f3f2f' }}
          >
            <h2
              className="text-2xl md:text-3xl font-serif font-bold"
              style={{ color: '#d4af37' }}
            >
              Objection 1: &ldquo;Jesus is &lsquo;a god,&rsquo; not THE God&rdquo;
            </h2>
          </div>
          <div
            className="rounded-b-xl p-6"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #2f3f2f' }}
          >
            <p
              className="text-lg mb-6"
              style={{ color: '#2f3f2f', lineHeight: '1.8' }}
            >
              This objection comes from the NWT rendering of John 1:1: &ldquo;the Word was a god.&rdquo;
              The argument is that Jesus is divine in some lesser sense—a mighty spirit creature,
              but not Yahweh Himself.
            </p>

            <h3 className="text-xl font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              The Problem: This Creates Polytheism
            </h3>
            <p
              className="text-lg mb-4"
              style={{ color: '#2f3f2f', lineHeight: '1.8' }}
            >
              The Old Testament is absolutely clear that there is only ONE God:
            </p>

            <div className="space-y-4 mb-6">
              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#ffffff' }}
              >
                <p className="italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;Before Me there was no God formed, and there will be none after Me.&rdquo;
                </p>
                <p className="text-sm mt-1 font-semibold" style={{ color: '#577557' }}>
                  — Isaiah 43:10 (LSB)
                </p>
              </div>

              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#ffffff' }}
              >
                <p className="italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;I am the first and I am the last, and there is no God besides Me.&rdquo;
                </p>
                <p className="text-sm mt-1 font-semibold" style={{ color: '#577557' }}>
                  — Isaiah 44:6 (LSB)
                </p>
              </div>

              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#ffffff' }}
              >
                <p className="italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;Is there any God besides Me? There is no other Rock; I know of none.&rdquo;
                </p>
                <p className="text-sm mt-1 font-semibold" style={{ color: '#577557' }}>
                  — Isaiah 44:8 (LSB)
                </p>
              </div>
            </div>

            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #d4af37' }}
            >
              <h4 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                The Logical Dilemma:
              </h4>
              <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                If Jesus is &ldquo;a god&rdquo; but not Yahweh, then either:
              </p>
              <ul className="space-y-2 mt-3 ml-4" style={{ color: '#2f3f2f' }}>
                <li>
                  <strong>Option A:</strong> The Bible contradicts itself (there ARE gods besides Yahweh)
                </li>
                <li>
                  <strong>Option B:</strong> Jesus is a <em>false</em> god
                </li>
              </ul>
              <p className="mt-4 font-semibold" style={{ color: '#c62828' }}>
                Neither option is acceptable. The only consistent conclusion is that Jesus IS Yahweh—
                the one true God in human flesh.
              </p>
            </div>
          </div>
        </section>

        {/* Objection 2 */}
        <section className="mb-16">
          <div
            className="rounded-t-xl p-6"
            style={{ backgroundColor: '#2f3f2f' }}
          >
            <h2
              className="text-2xl md:text-3xl font-serif font-bold"
              style={{ color: '#d4af37' }}
            >
              Objection 2: &ldquo;Jesus received His position from the Father&rdquo;
            </h2>
          </div>
          <div
            className="rounded-b-xl p-6"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #2f3f2f' }}
          >
            <p
              className="text-lg mb-6"
              style={{ color: '#2f3f2f', lineHeight: '1.8' }}
            >
              Some argue that Jesus was &ldquo;made&rdquo; Lord or &ldquo;given&rdquo; authority,
              suggesting He wasn&apos;t always God but was elevated to that position.
            </p>

            <h3 className="text-xl font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              The Answer: The Incarnation, Not Creation
            </h3>
            <p
              className="text-lg mb-4"
              style={{ color: '#2f3f2f', lineHeight: '1.8' }}
            >
              Philippians 2:6-8 is key to understanding this:
            </p>

            <div
              className="rounded-lg p-5 mb-6"
              style={{ backgroundColor: '#ffffff' }}
            >
              <p className="italic" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                &ldquo;...who, although <strong>existing in the form of God</strong>, did not regard
                <strong> equality with God</strong> a thing to be grasped, but emptied Himself,
                taking the form of a slave...&rdquo;
              </p>
              <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
                — Philippians 2:6-7 (LSB)
              </p>
            </div>

            <p
              className="text-lg mb-4"
              style={{ color: '#2f3f2f', lineHeight: '1.8' }}
            >
              Notice the order:
            </p>
            <ol className="list-decimal ml-6 space-y-2 mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <li>Jesus <strong>existed in the form of God</strong> — before the incarnation</li>
              <li>He possessed <strong>equality with God</strong> — not something He needed to attain</li>
              <li>He <strong>emptied Himself</strong> — took on human nature</li>
              <li>He was later <strong>highly exalted</strong> (v. 9) — in His humanity</li>
            </ol>

            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#e8ede8', borderLeft: '4px solid #577557' }}
            >
              <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                <strong>Key insight:</strong> The Father didn&apos;t MAKE Jesus God—Jesus eternally
                IS God who took on human nature. The &ldquo;exaltation&rdquo; passages refer to
                Jesus&apos; glorification <em>in His humanity</em> after the resurrection, not to
                Him becoming divine.
              </p>
            </div>
          </div>
        </section>

        {/* Objection 3 */}
        <section className="mb-16">
          <div
            className="rounded-t-xl p-6"
            style={{ backgroundColor: '#2f3f2f' }}
          >
            <h2
              className="text-2xl md:text-3xl font-serif font-bold"
              style={{ color: '#d4af37' }}
            >
              Objection 3: &ldquo;The Bible says Jesus is the Son of God, not God&rdquo;
            </h2>
          </div>
          <div
            className="rounded-b-xl p-6"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #2f3f2f' }}
          >
            <p
              className="text-lg mb-6"
              style={{ color: '#2f3f2f', lineHeight: '1.8' }}
            >
              This objection assumes &ldquo;Son of God&rdquo; means &ldquo;less than God&rdquo; or
              &ldquo;created by God.&rdquo; But that&apos;s not how the phrase was understood in the
              ancient world.
            </p>

            <h3 className="text-xl font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              The Answer: &ldquo;Son of&rdquo; Means &ldquo;Same Nature As&rdquo;
            </h3>
            <p
              className="text-lg mb-4"
              style={{ color: '#2f3f2f', lineHeight: '1.8' }}
            >
              In ancient Semitic usage, &ldquo;son of&rdquo; indicated <em>nature</em> or <em>character</em>,
              not origin or inferiority:
            </p>
            <ul className="space-y-2 mb-6 ml-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <li>• &ldquo;Sons of thunder&rdquo; (Mark 3:17) = men with thunderous temperaments</li>
              <li>• &ldquo;Sons of disobedience&rdquo; (Ephesians 2:2) = people characterized by disobedience</li>
              <li>• &ldquo;Son of God&rdquo; = one who shares God&apos;s nature</li>
            </ul>

            <div
              className="rounded-lg p-5 mb-6"
              style={{ backgroundColor: '#ffffff' }}
            >
              <p className="italic" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                &ldquo;For this reason therefore the Jews were seeking all the more to kill Him,
                because He not only was breaking the Sabbath, but also was calling God His own Father,
                <strong> making Himself equal with God</strong>.&rdquo;
              </p>
              <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
                — John 5:18 (LSB)
              </p>
            </div>

            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #d4af37' }}
            >
              <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                <strong>The Jews understood exactly what Jesus meant.</strong> When He called God
                His Father in a unique sense, they recognized He was claiming equality with God.
                That&apos;s why they tried to stone Him for blasphemy. &ldquo;Son of God&rdquo; IS
                a claim to deity.
              </p>
            </div>
          </div>
        </section>

        {/* Objection 4 */}
        <section className="mb-16">
          <div
            className="rounded-t-xl p-6"
            style={{ backgroundColor: '#2f3f2f' }}
          >
            <h2
              className="text-2xl md:text-3xl font-serif font-bold"
              style={{ color: '#d4af37' }}
            >
              Objection 4: &ldquo;We can pray THROUGH Jesus without praying TO Him&rdquo;
            </h2>
          </div>
          <div
            className="rounded-b-xl p-6"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #2f3f2f' }}
          >
            <p
              className="text-lg mb-6"
              style={{ color: '#2f3f2f', lineHeight: '1.8' }}
            >
              Jehovah&apos;s Witnesses are taught to pray only to Jehovah, through Jesus as mediator.
              They argue that prayer TO Jesus is not found in Scripture.
            </p>

            <h3 className="text-xl font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              The Answer: Scripture Shows Both
            </h3>
            <p
              className="text-lg mb-4"
              style={{ color: '#2f3f2f', lineHeight: '1.8' }}
            >
              Yes, we pray through Jesus (John 14:13-14). But Scripture also shows direct prayer TO Jesus:
            </p>

            <div className="space-y-4 mb-6">
              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#ffffff' }}
              >
                <p className="font-semibold mb-1" style={{ color: '#2f3f2f' }}>
                  Stephen prayed to Jesus (Acts 7:59-60):
                </p>
                <p className="italic" style={{ color: '#577557' }}>
                  &ldquo;Lord Jesus, receive my spirit... Lord, do not hold this sin against them!&rdquo;
                </p>
              </div>

              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#ffffff' }}
              >
                <p className="font-semibold mb-1" style={{ color: '#2f3f2f' }}>
                  Paul prayed to Jesus (2 Corinthians 12:8-9):
                </p>
                <p className="italic" style={{ color: '#577557' }}>
                  &ldquo;Concerning this I pleaded with the Lord three times... And He said to me,
                  &lsquo;My grace is sufficient for you&rsquo;&rdquo;
                </p>
              </div>

              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#ffffff' }}
              >
                <p className="font-semibold mb-1" style={{ color: '#2f3f2f' }}>
                  John prayed to Jesus (Revelation 22:20):
                </p>
                <p className="italic" style={{ color: '#577557' }}>
                  &ldquo;Come, Lord Jesus.&rdquo;
                </p>
              </div>

              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#ffffff' }}
              >
                <p className="font-semibold mb-1" style={{ color: '#2f3f2f' }}>
                  All Christians call on Jesus (1 Corinthians 1:2):
                </p>
                <p className="italic" style={{ color: '#577557' }}>
                  &ldquo;...with all who in every place call on the name of our Lord Jesus Christ&rdquo;
                </p>
              </div>
            </div>

            <div
              className="rounded-xl p-6 mb-6"
              style={{ backgroundColor: '#e8ede8', borderLeft: '4px solid #577557' }}
            >
              <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                Romans 10:13 clinches it:
              </p>
              <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                Paul quotes Joel 2:32 (&ldquo;whoever calls on the name of <strong>Yahweh</strong> will
                be saved&rdquo;) and applies it to Jesus. &ldquo;Calling on the name&rdquo; is prayer
                language. To call on Jesus&apos; name IS to call on Yahweh&apos;s name.
              </p>
            </div>

            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #d4af37' }}
            >
              <p className="italic mb-2" style={{ color: '#577557' }}>
                Even the Watchtower admitted:
              </p>
              <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                &ldquo;Obviously, then, Stephen&apos;s words, &lsquo;Lord Jesus, receive my spirit,&rsquo;
                were a prayer.&rdquo;
                <span className="block text-sm mt-1 font-semibold" style={{ color: '#577557' }}>
                  — The Watchtower, February 1, 1959, p. 96
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'linear-gradient(135deg, #2f3f2f 0%, #1a261a 100%)',
            }}
          >
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#ffffff' }}
            >
              The Bottom Line
            </h2>
            <p
              className="text-lg mb-6"
              style={{ color: '#e8ede8', lineHeight: '1.8' }}
            >
              Each of these objections, when examined carefully, actually reinforces the biblical
              teaching that Jesus is God:
            </p>
            <ul className="space-y-3 mb-6" style={{ color: '#e8ede8' }}>
              <li className="flex items-start gap-2">
                <span style={{ color: '#d4af37' }}>•</span>
                <span>&ldquo;A god&rdquo; creates polytheism — there is no god besides Yahweh</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#d4af37' }}>•</span>
                <span>Jesus was exalted in His humanity — He eternally existed as God</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#d4af37' }}>•</span>
                <span>&ldquo;Son of God&rdquo; means equality with God — the Jews understood this</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#d4af37' }}>•</span>
                <span>Prayer to Jesus is commanded — calling on His name is calling on Yahweh</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/why-it-matters"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
              >
                Back to Why It Matters
              </Link>
              <Link
                href="/praying-to-jesus"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                }}
              >
                Praying to Jesus →
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
