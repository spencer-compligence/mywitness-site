import Link from 'next/link';

export const metadata = {
  title: 'Who Is the Holy Spirit? Person and God | MyWitness',
  description:
    'The Watchtower teaches the Holy Spirit is an impersonal force like electricity. Scripture reveals He is a Divine Person — the third Person of the Trinity.',
};

export default function WhoIsTheHolySpiritPage() {
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
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: '#ffffff' }}
          >
            Who Is the Holy Spirit?
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{ color: '#d4af37' }}>
            Person and God — Not an Impersonal Force
          </p>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: '#e8ede8' }}
          >
            The Watchtower teaches that the Holy Spirit is an &quot;active force&quot; like
            electricity. But Scripture reveals something far greater: the Holy Spirit
            is a Divine Person — the third Person of the Trinity.
          </p>
        </div>
      </section>

      {/* PART ONE: What the Watchtower Teaches */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: '#d4af37' }}
            >
              Part One
            </p>
            <h2
              className="text-3xl md:text-4xl font-serif font-bold"
              style={{ color: '#2f3f2f' }}
            >
              What the Watchtower Teaches
            </h2>
          </div>

          {/* Summary Box */}
          <div
            className="rounded-xl p-6 md:p-8 mb-10"
            style={{ backgroundColor: '#f6f8f6', border: '2px solid #e8ede8' }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2f3f2f' }}>
              The JW Position on the Holy Spirit
            </h3>
            <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              The Watchtower Bible and Tract Society teaches that the Holy Spirit is:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3" style={{ color: '#2f3f2f' }}>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: '#e8ede8', color: '#577557' }}
                >
                  1
                </span>
                <span>
                  <strong>NOT a person</strong> — but an impersonal &quot;active force&quot;
                </span>
              </li>
              <li className="flex items-start gap-3" style={{ color: '#2f3f2f' }}>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: '#e8ede8', color: '#577557' }}
                >
                  2
                </span>
                <span>
                  <strong>NOT God</strong> — but a tool or power God uses
                </span>
              </li>
              <li className="flex items-start gap-3" style={{ color: '#2f3f2f' }}>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: '#e8ede8', color: '#577557' }}
                >
                  3
                </span>
                <span>
                  <strong>Like electricity</strong> — a force that can be directed and channeled
                </span>
              </li>
              <li className="flex items-start gap-3" style={{ color: '#2f3f2f' }}>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: '#e8ede8', color: '#577557' }}
                >
                  4
                </span>
                <span>
                  <strong>Always lowercase</strong> — &quot;holy spirit&quot; (not &quot;Holy Spirit&quot;) in
                  the NWT
                </span>
              </li>
            </ul>
          </div>

          {/* Watchtower Quote */}
          <div
            className="rounded-xl p-6 md:p-8 mb-10"
            style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #d4af37' }}
          >
            <h4 className="text-lg font-bold mb-3" style={{ color: '#2f3f2f' }}>
              From &quot;What Is the Holy Spirit?&quot; (jw.org):
            </h4>
            <p
              className="text-lg italic"
              style={{ color: '#577557', lineHeight: '1.7' }}
            >
              &quot;The Bible&apos;s use of &apos;holy spirit&apos; indicates that it is a controlled
              force that Jehovah God uses to accomplish a variety of his purposes. To
              a certain extent, it can be likened to electricity, a force that can be
              adapted to perform a great variety of operations.&quot;
            </p>
          </div>

          {/* The 5 Arguments */}
          <h3
            className="text-2xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            The Watchtower&apos;s Five Main Arguments
          </h3>

          {/* Argument 1 */}
          <div
            className="rounded-xl overflow-hidden mb-6"
            style={{ border: '2px solid #e8ede8' }}
          >
            <div className="px-6 py-4" style={{ backgroundColor: '#2f3f2f' }}>
              <h4 className="text-lg font-semibold" style={{ color: '#d4af37' }}>
                Argument 1: &quot;The Holy Spirit has no personal name&quot;
              </h4>
            </div>
            <div className="p-6" style={{ backgroundColor: '#ffffff' }}>
              <p
                className="italic mb-4"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                &quot;The Holy Scriptures tell us the personal name of the Father—Jehovah.
                They inform us that the Son is Jesus Christ. But nowhere in the
                Scriptures is a personal name applied to the holy spirit.&quot;
              </p>
              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#f6f8f6' }}
              >
                <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                  Response:
                </p>
                <ul className="space-y-2" style={{ color: '#2f3f2f' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      God the Father is also called &quot;God,&quot; &quot;Lord,&quot; &quot;Almighty,&quot; &quot;Most
                      High&quot; — names that describe attributes, not personal names in
                      the modern sense
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      The lack of a personal name no more proves the Spirit isn&apos;t a
                      person than it proves the Father isn&apos;t a person
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      The Spirit IS given a personal title: <strong>&quot;Helper&quot;</strong>{' '}
                      or <strong>&quot;Comforter&quot;</strong> (Greek: <em>Parakletos</em>) —
                      John 14:16, 26; 15:26; 16:7
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Argument 2 */}
          <div
            className="rounded-xl overflow-hidden mb-6"
            style={{ border: '2px solid #e8ede8' }}
          >
            <div className="px-6 py-4" style={{ backgroundColor: '#2f3f2f' }}>
              <h4 className="text-lg font-semibold" style={{ color: '#d4af37' }}>
                Argument 2: &quot;The Greek word <em>pneuma</em> is neuter&quot;
              </h4>
            </div>
            <div className="p-6" style={{ backgroundColor: '#ffffff' }}>
              <p
                className="italic mb-4"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                &quot;The Greek word for &apos;Spirit&apos; is neuter, and while we use personal
                pronouns in English (&apos;he,&apos; &apos;his,&apos; &apos;him&apos;), most Greek manuscripts
                employ &apos;it.&apos;&quot;
              </p>
              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#f6f8f6' }}
              >
                <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                  Response:
                </p>
                <ul className="space-y-2" style={{ color: '#2f3f2f' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      Greek grammatical gender does NOT determine personality or nature
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      The Greek word for &quot;child&quot; (<em>teknon</em>) is also neuter —
                      does that mean children aren&apos;t persons?
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      The word for &quot;demon&quot; (<em>daimonion</em>) is neuter — but demons
                      are clearly personal beings
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      <strong>Critical point:</strong> When Jesus refers to the Spirit
                      using the MASCULINE word <em>Parakletos</em> (&quot;Helper&quot;), He uses
                      MASCULINE pronouns (<em>ekeinos</em> = &quot;that one/he&quot;) —
                      deliberately overriding grammatical gender to emphasize
                      personality (John 14:26; 15:26; 16:7-8, 13-14)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Argument 3 */}
          <div
            className="rounded-xl overflow-hidden mb-6"
            style={{ border: '2px solid #e8ede8' }}
          >
            <div className="px-6 py-4" style={{ backgroundColor: '#2f3f2f' }}>
              <h4 className="text-lg font-semibold" style={{ color: '#d4af37' }}>
                Argument 3: &quot;People are &apos;filled&apos; with the Spirit&quot;
              </h4>
            </div>
            <div className="p-6" style={{ backgroundColor: '#ffffff' }}>
              <p
                className="italic mb-4"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                &quot;The Holy Spirit is not a person because it is said to fill multiple
                individuals simultaneously.&quot;
              </p>
              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#f6f8f6' }}
              >
                <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                  Response:
                </p>
                <ul className="space-y-2" style={{ color: '#2f3f2f' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      The same language is used of God Himself: &quot;Is it not the heavens
                      and the earth that I myself fill?&quot; (Jeremiah 23:24, NWT)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      God fills heaven and earth — does that make God an impersonal
                      force?
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      The language of &quot;filling&quot; describes influence, presence, and
                      empowerment — not physical substance
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Argument 4 */}
          <div
            className="rounded-xl overflow-hidden mb-6"
            style={{ border: '2px solid #e8ede8' }}
          >
            <div className="px-6 py-4" style={{ backgroundColor: '#2f3f2f' }}>
              <h4 className="text-lg font-semibold" style={{ color: '#d4af37' }}>
                Argument 4: &quot;The Spirit is compared to impersonal things&quot;
              </h4>
            </div>
            <div className="p-6" style={{ backgroundColor: '#ffffff' }}>
              <p
                className="italic mb-4"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                &quot;Impersonal objects such as wind, water, fire, and oil symbolize the
                Holy Spirit. Some conclude that this means the Holy Spirit Himself is
                impersonal.&quot;
              </p>
              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#f6f8f6' }}
              >
                <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                  Response:
                </p>
                <ul className="space-y-2" style={{ color: '#2f3f2f' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      Jesus is compared to a rock, a door, a vine, bread, and a lamb —
                      none of which proves He is impersonal
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      God the Father is described as a &quot;consuming fire&quot; (Hebrews
                      12:29) — that doesn&apos;t make Him impersonal
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      <strong>Symbols describe FUNCTION, not NATURE</strong> — the
                      Spirit acts like wind (invisible but powerful), like fire
                      (purifying), like water (refreshing)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Argument 5 */}
          <div
            className="rounded-xl overflow-hidden mb-6"
            style={{ border: '2px solid #e8ede8' }}
          >
            <div className="px-6 py-4" style={{ backgroundColor: '#2f3f2f' }}>
              <h4 className="text-lg font-semibold" style={{ color: '#d4af37' }}>
                Argument 5: &quot;The Spirit is &apos;personified&apos; like wisdom or sin&quot;
              </h4>
            </div>
            <div className="p-6" style={{ backgroundColor: '#ffffff' }}>
              <p
                className="italic mb-4"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                &quot;Although the Holy Spirit is not a person, this active force of God
                is often personified in Scripture. This is similar to other things
                personified in Scripture, like Genesis 4:7: &apos;Sin is crouching at the
                door.&apos;&quot;
              </p>
              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#f6f8f6' }}
              >
                <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                  Response:
                </p>
                <ul className="space-y-2" style={{ color: '#2f3f2f' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      There is a VAST difference between occasional poetic
                      personification and the sustained, consistent treatment the Holy
                      Spirit receives throughout Scripture
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      <strong>Sin doesn&apos;t speak in the first person</strong>; the Holy
                      Spirit does: &quot;Set apart for <em>Me</em> Barnabas and Saul for the
                      work to which <em>I</em> have called them&quot; (Acts 13:2)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>Sin doesn&apos;t have a mind; the Holy Spirit does (Romans 8:27)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      Sin doesn&apos;t make decisions; the Holy Spirit does (1 Corinthians
                      12:11)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#d4af37' }}>•</span>
                    <span>
                      Sin cannot be lied to; the Holy Spirit can be lied to (Acts 5:3)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART TWO: The Holy Spirit Is a Person */}
      <section className="py-16 px-5" style={{ backgroundColor: '#f6f8f6' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: '#d4af37' }}
            >
              Part Two
            </p>
            <h2
              className="text-3xl md:text-4xl font-serif font-bold mb-4"
              style={{ color: '#2f3f2f' }}
            >
              The Holy Spirit Is a Person
            </h2>
            <p className="text-lg" style={{ color: '#577557' }}>
              A person is a being with <strong>intellect</strong> (mind),{' '}
              <strong>emotion</strong> (feelings), and <strong>will</strong> (ability
              to choose). The Bible attributes ALL THREE to the Holy Spirit.
            </p>
          </div>

          {/* The Three Marks of Personhood */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Mind */}
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#ffffff', border: '2px solid #e8ede8' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: '#d4af37' }}
              >
                <span className="text-xl font-bold" style={{ color: '#2f3f2f' }}>
                  1
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2f3f2f' }}>
                The Spirit Has a MIND
              </h3>
              <p
                className="text-sm italic mb-3"
                style={{ color: '#577557', lineHeight: '1.6' }}
              >
                &quot;He who searches the hearts knows what <strong>the mind of the
                Spirit</strong> is, because He intercedes for the saints according to
                the will of God.&quot;
              </p>
              <p className="text-sm font-semibold mb-3" style={{ color: '#577557' }}>
                — Romans 8:27
              </p>
              <p className="text-sm" style={{ color: '#2f3f2f' }}>
                The Spirit has a mind (<em>phronēma</em>), searches, and knows. These
                are intellectual activities only a person can perform.
              </p>
            </div>

            {/* Emotions */}
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#ffffff', border: '2px solid #e8ede8' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: '#d4af37' }}
              >
                <span className="text-xl font-bold" style={{ color: '#2f3f2f' }}>
                  2
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2f3f2f' }}>
                The Spirit Has EMOTIONS
              </h3>
              <p
                className="text-sm italic mb-3"
                style={{ color: '#577557', lineHeight: '1.6' }}
              >
                &quot;Do not <strong>grieve</strong> the Holy Spirit of God, by whom you
                were sealed for the day of redemption.&quot;
              </p>
              <p className="text-sm font-semibold mb-3" style={{ color: '#577557' }}>
                — Ephesians 4:30
              </p>
              <p className="text-sm" style={{ color: '#2f3f2f' }}>
                You cannot grieve an impersonal force. You cannot grieve electricity.
                Grief requires a person to experience it.
              </p>
            </div>

            {/* Will */}
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#ffffff', border: '2px solid #e8ede8' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: '#d4af37' }}
              >
                <span className="text-xl font-bold" style={{ color: '#2f3f2f' }}>
                  3
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2f3f2f' }}>
                The Spirit Has a WILL
              </h3>
              <p
                className="text-sm italic mb-3"
                style={{ color: '#577557', lineHeight: '1.6' }}
              >
                &quot;But one and the same Spirit works all these things, distributing to
                each one individually <strong>just as He wills</strong>.&quot;
              </p>
              <p className="text-sm font-semibold mb-3" style={{ color: '#577557' }}>
                — 1 Corinthians 12:11
              </p>
              <p className="text-sm" style={{ color: '#2f3f2f' }}>
                The Spirit distributes gifts &quot;as He wills&quot; — making independent
                decisions. Only persons have a will.
              </p>
            </div>
          </div>

          {/* Personal Actions */}
          <h3
            className="text-2xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            The Spirit Performs Personal Actions
          </h3>
          <p className="mb-6" style={{ color: '#577557' }}>
            The Holy Spirit does things that ONLY a person can do:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { action: 'Speaks', ref: 'Acts 8:29; 13:2', note: 'Forces don\'t speak' },
              { action: 'Teaches', ref: 'John 14:26; Luke 12:12', note: 'Forces don\'t teach' },
              { action: 'Testifies', ref: 'John 15:26; Romans 8:16', note: 'Forces don\'t testify' },
              { action: 'Guides', ref: 'John 16:13; Romans 8:14', note: 'Forces don\'t guide' },
              { action: 'Intercedes (prays)', ref: 'Romans 8:26-27', note: 'Forces don\'t pray' },
              { action: 'Commands', ref: 'Acts 8:29; 13:2', note: 'Forces don\'t command' },
              { action: 'Forbids', ref: 'Acts 16:6-7', note: 'Forces don\'t forbid' },
              { action: 'Appoints', ref: 'Acts 13:4; 20:28', note: 'Forces don\'t appoint' },
              { action: 'Can be lied to', ref: 'Acts 5:3', note: 'You can\'t lie to electricity' },
              { action: 'Can be grieved', ref: 'Ephesians 4:30', note: 'You can\'t grieve gravity' },
              { action: 'Can be insulted', ref: 'Hebrews 10:29', note: 'You can\'t insult a force' },
              { action: 'Can be blasphemed', ref: 'Matthew 12:31', note: 'Blasphemy requires a person' },
            ].map((item) => (
              <div
                key={item.action}
                className="rounded-lg p-4"
                style={{ backgroundColor: '#ffffff', border: '1px solid #e8ede8' }}
              >
                <p className="font-semibold" style={{ color: '#2f3f2f' }}>
                  {item.action}
                </p>
                <p className="text-sm" style={{ color: '#577557' }}>
                  {item.ref}
                </p>
                <p className="text-sm italic mt-1" style={{ color: '#d4af37' }}>
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          {/* Personal Pronouns */}
          <div
            className="rounded-xl p-6 md:p-8 mb-10"
            style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #d4af37' }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2f3f2f' }}>
              The Spirit Uses Personal Pronouns
            </h3>
            <p
              className="text-lg italic mb-4"
              style={{ color: '#577557', lineHeight: '1.7' }}
            >
              &quot;The Holy Spirit said, &apos;Set apart for <strong>Me</strong> Barnabas and
              Saul for the work to which <strong>I</strong> have called them.&apos;&quot;
            </p>
            <p className="text-sm font-semibold mb-4" style={{ color: '#577557' }}>
              — Acts 13:2
            </p>
            <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              The Spirit speaks in the first person singular — &quot;Me,&quot; &quot;I,&quot; &quot;Myself&quot;
              (see also Acts 10:19-20). This is NOT personification. Personified
              concepts do not use first-person pronouns in this direct, commanding
              way.
            </p>
          </div>

          {/* Another Helper */}
          <div
            className="rounded-xl p-6 md:p-8"
            style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #d4af37' }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2f3f2f' }}>
              Jesus Called the Spirit &quot;Another Helper&quot;
            </h3>
            <p
              className="text-lg italic mb-4"
              style={{ color: '#577557', lineHeight: '1.7' }}
            >
              &quot;I will ask the Father, and He will give you <strong>another
              Helper</strong>, that He may be with you forever; that is the Spirit of
              truth.&quot;
            </p>
            <p className="text-sm font-semibold mb-4" style={{ color: '#577557' }}>
              — John 14:16-17
            </p>
            <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              The Greek word for &quot;another&quot; here is <em>allos</em>, meaning{' '}
              <strong>&quot;another of the same kind.&quot;</strong> Jesus (a person) is sending
              ANOTHER Helper of the same kind — i.e., another Person. If the Spirit
              were merely a force, Jesus would have used <em>heteros</em> (&quot;another of
              a different kind&quot;).
            </p>
          </div>
        </div>
      </section>

      {/* PART THREE: The Holy Spirit Is God */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: '#d4af37' }}
            >
              Part Three
            </p>
            <h2
              className="text-3xl md:text-4xl font-serif font-bold"
              style={{ color: '#2f3f2f' }}
            >
              The Holy Spirit Is God
            </h2>
          </div>

          {/* Acts 5:3-4 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-10"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2f3f2f' }}>
              Lying to the Holy Spirit = Lying to God
            </h3>
            <p
              className="text-lg italic mb-4"
              style={{ color: '#577557', lineHeight: '1.7' }}
            >
              &quot;But Peter said, &apos;Ananias, why has Satan filled your heart{' '}
              <strong>to lie to the Holy Spirit</strong>... Why is it that you have
              conceived this thing in your heart?{' '}
              <strong>You have not lied to men but to God</strong>.&apos;&quot;
            </p>
            <p className="text-sm font-semibold mb-4" style={{ color: '#577557' }}>
              — Acts 5:3-4
            </p>
            <div
              className="rounded-lg p-4"
              style={{ backgroundColor: '#ffffff' }}
            >
              <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                The Logic:
              </p>
              <ul className="space-y-1" style={{ color: '#2f3f2f' }}>
                <li>• Verse 3: Ananias lied to the Holy Spirit</li>
                <li>• Verse 4: He lied to God</li>
                <li>
                  • <strong>Conclusion: The Holy Spirit IS God</strong>
                </li>
              </ul>
              <p className="mt-3 text-sm" style={{ color: '#577557' }}>
                This is one of the clearest proofs of the Spirit&apos;s deity in all of
                Scripture.
              </p>
            </div>
          </div>

          {/* Divine Attributes */}
          <h3
            className="text-2xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            The Spirit Possesses Divine Attributes
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                attr: 'Eternal',
                ref: 'Hebrews 9:14',
                quote: '"the eternal Spirit"',
                note: 'Only God is eternal',
              },
              {
                attr: 'Omniscient',
                ref: '1 Corinthians 2:10-11',
                quote: '"searches all things, even the depths of God"',
                note: 'Only God knows all things',
              },
              {
                attr: 'Omnipresent',
                ref: 'Psalm 139:7-10',
                quote: '"Where can I go from Your Spirit?"',
                note: 'Only God is everywhere',
              },
              {
                attr: 'Omnipotent',
                ref: 'Luke 1:35; Job 33:4',
                quote: '"the power of the Most High"',
                note: 'Only God has unlimited power',
              },
              {
                attr: 'Holy',
                ref: '90+ times in Scripture',
                quote: 'Called "Holy Spirit"',
                note: 'Holiness belongs to God',
              },
              {
                attr: 'Life-giving',
                ref: 'Romans 8:2; John 6:63',
                quote: '"The Spirit gives life"',
                note: 'Only God gives life',
              },
            ].map((item) => (
              <div
                key={item.attr}
                className="rounded-xl p-5"
                style={{ backgroundColor: '#f6f8f6', border: '1px solid #e8ede8' }}
              >
                <h4 className="font-bold mb-1" style={{ color: '#2f3f2f' }}>
                  {item.attr}
                </h4>
                <p className="text-sm italic mb-1" style={{ color: '#577557' }}>
                  {item.quote}
                </p>
                <p className="text-sm" style={{ color: '#577557' }}>
                  {item.ref}
                </p>
                <p
                  className="text-sm font-semibold mt-2"
                  style={{ color: '#d4af37' }}
                >
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          {/* Divine Works */}
          <h3
            className="text-2xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            The Spirit Does What Only God Can Do
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { work: 'Creation', ref: 'Genesis 1:2; Job 33:4; Psalm 104:30' },
              { work: 'Regeneration (new birth)', ref: 'John 3:5-8; Titus 3:5' },
              { work: 'Inspiration of Scripture', ref: '2 Peter 1:21; 2 Timothy 3:16' },
              { work: 'Conviction of sin', ref: 'John 16:8-11' },
              { work: 'Resurrection', ref: 'Romans 8:11' },
              { work: 'Sanctification', ref: '2 Thessalonians 2:13; 1 Peter 1:2' },
            ].map((item) => (
              <div
                key={item.work}
                className="rounded-lg p-4"
                style={{ backgroundColor: '#f6f8f6', borderLeft: '3px solid #d4af37' }}
              >
                <p className="font-semibold" style={{ color: '#2f3f2f' }}>
                  {item.work}
                </p>
                <p className="text-sm" style={{ color: '#577557' }}>
                  {item.ref}
                </p>
              </div>
            ))}
          </div>

          {/* OT Yahweh Passages */}
          <div
            className="rounded-xl p-6 md:p-8 mb-10"
            style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #d4af37' }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2f3f2f' }}>
              Old Testament &quot;Yahweh&quot; Passages Applied to the Spirit
            </h3>
            <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              Several passages where &quot;Yahweh&quot; (LORD) speaks in the Old Testament are
              attributed to the Holy Spirit in the New Testament:
            </p>

            <div className="space-y-4">
              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#ffffff' }}
              >
                <p className="font-semibold" style={{ color: '#2f3f2f' }}>
                  Isaiah 6:8-10 → Acts 28:25-27
                </p>
                <p className="text-sm" style={{ color: '#577557' }}>
                  OT: &quot;I heard the voice of <strong>the Lord</strong> [Yahweh]
                  saying...&quot;
                </p>
                <p className="text-sm" style={{ color: '#577557' }}>
                  NT: &quot;<strong>The Holy Spirit</strong> rightly spoke through Isaiah the
                  prophet...&quot;
                </p>
              </div>

              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#ffffff' }}
              >
                <p className="font-semibold" style={{ color: '#2f3f2f' }}>
                  Jeremiah 31:31-34 → Hebrews 10:15-17
                </p>
                <p className="text-sm" style={{ color: '#577557' }}>
                  OT: &quot;Declares <strong>the LORD</strong> [Yahweh]...&quot;
                </p>
                <p className="text-sm" style={{ color: '#577557' }}>
                  NT: &quot;And <strong>the Holy Spirit</strong> also testifies to us...&quot;
                </p>
              </div>

              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#ffffff' }}
              >
                <p className="font-semibold" style={{ color: '#2f3f2f' }}>
                  Exodus 17:7 → Hebrews 3:7-9
                </p>
                <p className="text-sm" style={{ color: '#577557' }}>
                  OT: Israel tested <strong>Yahweh</strong> at Massah
                </p>
                <p className="text-sm" style={{ color: '#577557' }}>
                  NT: &quot;Therefore, just as <strong>the Holy Spirit</strong> says...&quot;
                </p>
              </div>
            </div>

            <p className="mt-4 font-semibold" style={{ color: '#2f3f2f' }}>
              The New Testament writers identified the Holy Spirit with Yahweh —
              proving the Spirit is God.
            </p>
          </div>

          {/* Shares Divine Name & Called Lord */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#f6f8f6', border: '2px solid #e8ede8' }}
            >
              <h4 className="text-lg font-bold mb-3" style={{ color: '#2f3f2f' }}>
                The Spirit Shares the Divine Name
              </h4>
              <p
                className="text-sm italic mb-3"
                style={{ color: '#577557', lineHeight: '1.6' }}
              >
                &quot;Baptizing them in <strong>the name</strong> of the Father and the Son
                and the Holy Spirit.&quot;
              </p>
              <p className="text-sm font-semibold mb-3" style={{ color: '#577557' }}>
                — Matthew 28:19
              </p>
              <p className="text-sm" style={{ color: '#2f3f2f' }}>
                &quot;Name&quot; is SINGULAR — one name shared by three Persons. The Holy Spirit
                is placed on equal footing with the Father and the Son. No creature
                could be placed in this position.
              </p>
            </div>

            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#f6f8f6', border: '2px solid #e8ede8' }}
            >
              <h4 className="text-lg font-bold mb-3" style={{ color: '#2f3f2f' }}>
                The Spirit Is Called &quot;Lord&quot;
              </h4>
              <p
                className="text-sm italic mb-3"
                style={{ color: '#577557', lineHeight: '1.6' }}
              >
                &quot;Now <strong>the Lord is the Spirit</strong>, and where the Spirit of
                the Lord is, there is liberty.&quot;
              </p>
              <p className="text-sm font-semibold mb-3" style={{ color: '#577557' }}>
                — 2 Corinthians 3:17
              </p>
              <p className="text-sm" style={{ color: '#2f3f2f' }}>
                Paul identifies the Spirit as &quot;the Lord&quot; (<em>kyrios</em>) — the same
                title used for Yahweh in the Old Testament and for Jesus in the New
                Testament.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PART FOUR: Answering Objections */}
      <section className="py-16 px-5" style={{ backgroundColor: '#f6f8f6' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: '#d4af37' }}
            >
              Part Four
            </p>
            <h2
              className="text-3xl md:text-4xl font-serif font-bold"
              style={{ color: '#2f3f2f' }}
            >
              Answering Watchtower Objections
            </h2>
          </div>

          {/* Objection 1 */}
          <div
            className="rounded-xl overflow-hidden mb-6"
            style={{ backgroundColor: '#ffffff', border: '2px solid #e8ede8' }}
          >
            <div className="px-6 py-4" style={{ backgroundColor: '#2f3f2f' }}>
              <h4 className="text-lg font-semibold" style={{ color: '#d4af37' }}>
                &quot;Stephen only saw the Father and the Son, not the Spirit&quot;
              </h4>
            </div>
            <div className="p-6">
              <p
                className="italic mb-4"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                &quot;Daniel, Stephen and John in visions saw representations of the
                Father and the Son, but never one of the holy spirit. Why not, if the
                holy spirit is equal to the Father and the Son?&quot;
              </p>
              <ul className="space-y-2" style={{ color: '#2f3f2f' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>•</span>
                  <span>
                    The Father is &quot;spirit&quot; (John 4:24) and thus invisible — yet
                    Stephen &quot;saw&quot; the Father. He saw a REPRESENTATION or
                    MANIFESTATION.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>•</span>
                  <span>
                    The Spirit, by His very nature, points to Christ, not to Himself
                    (John 16:14: &quot;He will glorify Me&quot;)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>•</span>
                  <span>
                    Absence of a visible representation doesn&apos;t disprove personhood or
                    deity
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Objection 2 */}
          <div
            className="rounded-xl overflow-hidden mb-6"
            style={{ backgroundColor: '#ffffff', border: '2px solid #e8ede8' }}
          >
            <div className="px-6 py-4" style={{ backgroundColor: '#2f3f2f' }}>
              <h4 className="text-lg font-semibold" style={{ color: '#d4af37' }}>
                &quot;The Spirit wasn&apos;t mentioned in John 17:3&quot;
              </h4>
            </div>
            <div className="p-6">
              <p
                className="italic mb-4"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                &quot;Jesus, in giving us the rule for life, does not even mention the holy
                spirit: &apos;This means everlasting life, their taking in knowledge of
                you, the only true God, and of the one whom you sent forth, Jesus
                Christ.&apos;&quot;
              </p>
              <ul className="space-y-2" style={{ color: '#2f3f2f' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>•</span>
                  <span>
                    This argument proves too much — the verse also doesn&apos;t mention the
                    angels, faith, or repentance. Are these unimportant?
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>•</span>
                  <span>
                    Jesus is praying TO the Father ABOUT His mission — the context
                    doesn&apos;t require mentioning every Person of the Trinity
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>•</span>
                  <span>
                    The Spirit&apos;s role is to glorify Christ (John 16:14), not to draw
                    attention to Himself
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>•</span>
                  <span>
                    The Spirit IS mentioned extensively in the surrounding chapters
                    (John 14-16)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Objection 3 */}
          <div
            className="rounded-xl overflow-hidden mb-6"
            style={{ backgroundColor: '#ffffff', border: '2px solid #e8ede8' }}
          >
            <div className="px-6 py-4" style={{ backgroundColor: '#2f3f2f' }}>
              <h4 className="text-lg font-semibold" style={{ color: '#d4af37' }}>
                &quot;Water and blood are called &apos;witnesses&apos; too (1 John 5:7-8)&quot;
              </h4>
            </div>
            <div className="p-6">
              <p
                className="italic mb-4"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                &quot;At 1 John 5:6-8 not only the spirit but also &apos;the water, and the
                blood&apos; are said to be &apos;witnesses.&apos; But water and blood are obviously
                not persons, and neither is the holy spirit a person.&quot;
              </p>
              <ul className="space-y-2" style={{ color: '#2f3f2f' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>•</span>
                  <span>
                    Context matters: In a court of law, objects CAN serve as
                    evidence/witnesses — but objects cannot SPEAK as the Spirit does
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>•</span>
                  <span>
                    The Spirit is REPEATEDLY treated as a person throughout Scripture —
                    water and blood are not
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>•</span>
                  <span>
                    Water and blood don&apos;t have a mind, will, emotions, or speak in the
                    first person
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>•</span>
                  <span>
                    This is a classic case of cherry-picking one verse while ignoring
                    the massive weight of contrary evidence
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PART FIVE: Key Scriptures Summary */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: '#d4af37' }}
            >
              Part Five
            </p>
            <h2
              className="text-3xl md:text-4xl font-serif font-bold"
              style={{ color: '#2f3f2f' }}
            >
              Key Scriptures Summary
            </h2>
          </div>

          {/* Personhood Scriptures */}
          <h3
            className="text-2xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Scriptures Proving the Spirit&apos;s Personhood
          </h3>

          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {[
              { ref: 'John 14:16-17, 26', point: 'Called "another Helper"; referred to as "He"' },
              { ref: 'John 15:26', point: '"He will testify"' },
              { ref: 'John 16:7-8, 13-14', point: '"He will convict"; "He will guide"; "He will speak"' },
              { ref: 'Acts 5:3', point: 'Can be lied to' },
              { ref: 'Acts 8:29', point: 'Speaks directly' },
              { ref: 'Acts 10:19-20', point: 'Uses first person: "I have sent them Myself"' },
              { ref: 'Acts 13:2', point: 'Uses first person: "Set apart for Me... I have called"' },
              { ref: 'Acts 16:6-7', point: 'Forbids and permits' },
              { ref: 'Romans 8:26-27', point: 'Intercedes; has a mind' },
              { ref: '1 Corinthians 12:11', point: 'Distributes gifts "as He wills"' },
              { ref: 'Ephesians 4:30', point: 'Can be grieved' },
              { ref: 'Hebrews 10:29', point: 'Can be insulted' },
            ].map((item) => (
              <div
                key={item.ref}
                className="rounded-lg p-3"
                style={{ backgroundColor: '#f6f8f6', borderLeft: '3px solid #577557' }}
              >
                <p className="font-semibold text-sm" style={{ color: '#2f3f2f' }}>
                  {item.ref}
                </p>
                <p className="text-sm" style={{ color: '#577557' }}>
                  {item.point}
                </p>
              </div>
            ))}
          </div>

          {/* Deity Scriptures */}
          <h3
            className="text-2xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Scriptures Proving the Spirit&apos;s Deity
          </h3>

          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {[
              { ref: 'Acts 5:3-4', point: 'Lying to Spirit = lying to God' },
              { ref: '1 Corinthians 3:16 + 6:19', point: "God's temple = Spirit's temple" },
              { ref: '2 Corinthians 3:17-18', point: '"The Lord is the Spirit"' },
              { ref: 'Hebrews 9:14', point: 'The "eternal Spirit"' },
              { ref: 'Psalm 139:7-10', point: "Spirit's omnipresence" },
              { ref: '1 Corinthians 2:10-11', point: "Spirit's omniscience" },
              { ref: 'Matthew 28:19', point: 'Shares the divine name' },
              { ref: '2 Corinthians 13:14', point: 'Equal standing with Father and Son' },
              { ref: 'Isaiah 6 + Acts 28:25-27', point: 'Yahweh passages attributed to Spirit' },
            ].map((item) => (
              <div
                key={item.ref}
                className="rounded-lg p-3"
                style={{ backgroundColor: '#f6f8f6', borderLeft: '3px solid #d4af37' }}
              >
                <p className="font-semibold text-sm" style={{ color: '#2f3f2f' }}>
                  {item.ref}
                </p>
                <p className="text-sm" style={{ color: '#577557' }}>
                  {item.point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PART SIX: Why This Matters */}
      <section className="py-16 px-5" style={{ backgroundColor: '#f6f8f6' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: '#d4af37' }}
            >
              Part Six
            </p>
            <h2
              className="text-3xl md:text-4xl font-serif font-bold"
              style={{ color: '#2f3f2f' }}
            >
              Why This Matters
            </h2>
          </div>

          <div className="space-y-6">
            {/* Reason 1 */}
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#ffffff', border: '2px solid #e8ede8' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#d4af37' }}
                >
                  <span className="font-bold" style={{ color: '#2f3f2f' }}>
                    1
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#2f3f2f' }}>
                    If the Spirit is not a Person, we cannot have a relationship with
                    Him
                  </h4>
                  <p style={{ color: '#577557', lineHeight: '1.7' }}>
                    Scripture commands us to be &quot;filled with the Spirit&quot; (Ephesians
                    5:18), to &quot;walk by the Spirit&quot; (Galatians 5:16), and speaks of
                    &quot;fellowship&quot; with the Spirit (2 Corinthians 13:14; Philippians
                    2:1). Fellowship requires persons — you cannot have fellowship with
                    electricity.
                  </p>
                </div>
              </div>
            </div>

            {/* Reason 2 */}
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#ffffff', border: '2px solid #e8ede8' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#d4af37' }}
                >
                  <span className="font-bold" style={{ color: '#2f3f2f' }}>
                    2
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#2f3f2f' }}>
                    If the Spirit is not God, we cannot trust His work in us
                  </h4>
                  <p style={{ color: '#577557', lineHeight: '1.7' }}>
                    The Spirit regenerates us (John 3:5-8), seals us (Ephesians 1:13-14;
                    4:30), and guarantees our inheritance (Ephesians 1:14). If He is
                    merely a force, these promises have no personal backing.
                  </p>
                </div>
              </div>
            </div>

            {/* Reason 3 */}
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#ffffff', border: '2px solid #e8ede8' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#d4af37' }}
                >
                  <span className="font-bold" style={{ color: '#2f3f2f' }}>
                    3
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#2f3f2f' }}>
                    If the Spirit is not God, Scripture commands idolatry
                  </h4>
                  <p style={{ color: '#577557', lineHeight: '1.7' }}>
                    The Spirit is worshiped alongside the Father and Son in the
                    baptismal formula (Matthew 28:19). The Spirit is invoked alongside
                    the Father and Son in the apostolic blessing (2 Corinthians 13:14).
                    If He is not God, these practices would be blasphemous.
                  </p>
                </div>
              </div>
            </div>

            {/* Reason 4 */}
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#ffffff', border: '2px solid #e8ede8' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#d4af37' }}
                >
                  <span className="font-bold" style={{ color: '#2f3f2f' }}>
                    4
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#2f3f2f' }}>
                    Denying the Spirit&apos;s personhood diminishes the gospel
                  </h4>
                  <p style={{ color: '#577557', lineHeight: '1.7' }}>
                    The Father planned salvation. The Son accomplished salvation. The
                    Spirit applies salvation. If the Spirit is merely a force, the third
                    Person of the Trinity is missing from the work of redemption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion CTA */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: 'linear-gradient(135deg, #2f3f2f 0%, #1a261a 100%)',
            }}
          >
            <h3
              className="text-2xl md:text-3xl font-serif font-bold mb-4"
              style={{ color: '#ffffff' }}
            >
              The Conclusion
            </h3>
            <p
              className="text-lg mb-6"
              style={{ color: '#e8ede8', lineHeight: '1.8' }}
            >
              The Watchtower&apos;s teaching that the Holy Spirit is an impersonal
              &quot;active force&quot; like electricity contradicts Scripture, which attributes
              mind, will, emotions, and personal actions to the Spirit. It contradicts
              logic — forces cannot speak, teach, guide, grieve, or be lied to. It
              diminishes God by reducing one Person of the Trinity to a mere tool. And
              it robs believers of personal relationship and fellowship with the
              Spirit.
            </p>
            <p
              className="text-xl font-semibold mb-8"
              style={{ color: '#d4af37' }}
            >
              The biblical evidence is overwhelming: The Holy Spirit is a Divine
              Person — the third Person of the Trinity, co-equal and co-eternal with
              the Father and the Son.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/who-is-jesus"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
              >
                Explore: Who Is Jesus?
              </Link>
              <Link
                href="/why-it-matters"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                }}
              >
                Why It Matters
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
