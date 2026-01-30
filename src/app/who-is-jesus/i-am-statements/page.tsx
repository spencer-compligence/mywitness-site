import Link from 'next/link';
import ScripturePassage from '../components/ScripturePassage';

export const metadata = {
  title: 'The "I AM" Statements of Jesus | Who Is Jesus? | MyWitness',
  description:
    "Jesus' use of 'I AM' (Greek: ego eimi) echoes God's self-revelation in Exodus 3:14. Explore 5 key passages.",
};

export default function IAmStatementsPage() {
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
            Part 10 of 12
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: '#ffffff' }}
          >
            The &quot;I AM&quot; Statements
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{ color: '#d4af37' }}>
            5 Passages Where Jesus Uses the Divine Name
          </p>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: '#e8ede8' }}
          >
            Jesus&apos; use of &quot;I AM&quot; (Greek: <em>ego eimi</em>) echoes God&apos;s
            self-revelation to Moses in Exodus 3:14.
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
              The Background: Exodus 3:14
            </h3>
            <p
              className="text-lg italic mb-4"
              style={{ color: '#577557', lineHeight: '1.7' }}
            >
              &quot;God said to Moses, &apos;I AM WHO I AM&apos;; and He said, &apos;Thus you shall say
              to the sons of Israel, I AM has sent me to you.&apos;&quot;
            </p>
            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              When God revealed His name to Moses at the burning bush, He used the
              Hebrew phrase <em>ehyeh asher ehyeh</em> — &quot;I AM WHO I AM.&quot; The Greek
              translation of the Old Testament (the Septuagint) renders this as{' '}
              <em>ego eimi ho ōn</em>. When Jesus uses <em>ego eimi</em> (&quot;I AM&quot;) in
              absolute form, without a predicate, He is making a direct connection to
              this divine self-revelation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <ScripturePassage
            reference="John 8:24"
            title="'Unless You Believe That I Am'"
            text="Therefore I said to you that you will die in your sins; for unless you believe that I am, you will die in your sins."
            whyItMatters="Jesus makes belief in His 'I AM' identity a matter of eternal salvation or condemnation. The absolute use of 'I am' (without a predicate) is unusual in Greek and deliberately echoes the divine name."
          />

          <ScripturePassage
            reference="John 8:28"
            title="'You Will Know That I Am'"
            text="So Jesus said, 'When you lift up the Son of Man, then you will know that I am, and I do nothing from Myself, but I speak these things as the Father taught Me.'"
            whyItMatters="Jesus prophesies that His crucifixion ('when you lift up the Son of Man') will reveal His true identity as 'I AM.' His death would prove He is who He claimed to be."
          />

          <ScripturePassage
            reference="John 8:58"
            title="'Before Abraham Was, I Am'"
            text="Jesus said to them, 'Truly, truly, I say to you, before Abraham was, I am.'"
            whyItMatters="This is the climactic 'I AM' statement. Jesus uses the present tense 'I am' (not 'I was') to describe His existence before Abraham. The Jews understood exactly what He was claiming — they picked up stones to kill Him for blasphemy (v. 59)."
            nwtNote="The NWT renders this 'I have been' to obscure the connection to Exodus 3:14, but the Greek is clearly present tense (eimi), not perfect tense."
          />

          <ScripturePassage
            reference="John 13:19"
            title="'So That You May Believe That I Am'"
            text="From now on I am telling you before it comes to pass, so that when it does occur, you may believe that I am."
            whyItMatters="Jesus predicts His betrayal in advance so that when it happens, His disciples will believe that He is 'I AM' — the divine being who knows the future."
          />

          <ScripturePassage
            reference="John 18:5-6"
            title="'I Am' and They Fell to the Ground"
            text="They answered Him, 'Jesus the Nazarene.' He said to them, 'I am.' And Judas also, who was betraying Him, was standing with them. So when He said to them, 'I am,' they drew back and fell to the ground."
            whyItMatters="When Jesus spoke 'I am,' the soldiers and officials fell backward to the ground. This was a supernatural response to the divine name. A simple identification ('I'm Jesus') wouldn't cause armed soldiers to collapse — but the utterance of the divine name carries power."
            keyPoints={[
              "The soldiers asked for 'Jesus the Nazarene'",
              "Jesus responded simply 'I am' (ego eimi)",
              "The entire group — soldiers and officials — fell backward to the ground",
              "This supernatural reaction demonstrates the power of the divine name",
            ]}
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
              What These Statements Prove
            </h3>
            <p
              className="text-lg mb-6"
              style={{ color: '#e8ede8', lineHeight: '1.8' }}
            >
              Jesus&apos; use of &quot;I AM&quot; was not casual or accidental. He deliberately
              invoked the divine name that God revealed to Moses at the burning bush.
              He claimed that eternal salvation depends on believing that He is &quot;I AM.&quot;
              He declared that He exists as &quot;I AM&quot; from before Abraham. When He spoke
              the divine name, soldiers fell to the ground. The Jews understood His
              claim — that&apos;s why they tried to stone Him. Jesus was claiming to be
              Yahweh.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/who-is-jesus/alpha-omega"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
              >
                Next: Alpha and Omega →
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
