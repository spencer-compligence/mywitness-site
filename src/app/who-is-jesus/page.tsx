import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScriptureCard from '../components/ScriptureCard';

export default function WhoIsJesusPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fdfdf8' }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div
        className="py-20 px-4"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #e8ede8, #fdfdf8)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Who Is Jesus?
          </h1>
          <p
            className="text-xl md:text-2xl mb-8"
            style={{ color: '#577557', lineHeight: '1.6' }}
          >
            What Scripture actually says about Jesus&apos;s identity
          </p>
          <div
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: '#d4af37' }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div
          className="rounded-xl p-8 mb-12"
          style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
        >
          <h2
            className="text-2xl font-serif font-semibold mb-4"
            style={{ color: '#2f3f2f' }}
          >
            Introduction
          </h2>
          <p
            className="text-lg mb-4"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Now that you have a Bible you can trust, let&apos;s answer the most important question:
            <strong> Who is Jesus Christ?</strong>
          </p>
          <p
            className="text-lg mb-4"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            This page will walk through Scripture systematically, examining what the Bible actually
            says about Jesus&apos;s identity. We&apos;ll look at both Old Testament prophecies and New
            Testament evidence.
          </p>
          <p
            className="text-base"
            style={{ color: '#577557', fontStyle: 'italic' }}
          >
            Translation Note: The verses below are primarily from the Legacy Standard Bible (LSB)
            and other respected translations. Where relevant, we&apos;ll note how the NWT differs.
          </p>
        </div>

        {/* Old Testament Prophecies */}
        <section className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-8"
            style={{ color: '#2f3f2f' }}
          >
            Old Testament Prophecies
          </h2>

          {/* Isaiah 9:6 */}
          <ScriptureCard
            reference="Isaiah 9:6 — 'Mighty God, Everlasting Father'"
            text="For a child will be born to us, a son will be given to us; and the government will rest on His shoulders; and His name will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace."
            translation="LSB"
            explanation="700 years before Jesus was born, Isaiah prophesied that the Messiah would be called 'Mighty God' (El Gibbor in Hebrew). This is not a title for a created being or an angel—it's a title for God Himself. 'Everlasting Father' (Hebrew: Avi Ad) doesn't mean Jesus IS the Father, but that He possesses the divine attribute of eternality."
          />

          {/* Isaiah 7:14 */}
          <ScriptureCard
            reference="Isaiah 7:14 — 'Immanuel' (God With Us)"
            text="Therefore the Lord Himself will give you a sign: Behold, a virgin will be with child and bear a son, and she will call His name Immanuel."
            translation="LSB"
            explanation="'Immanuel' literally means 'God with us' (El = God, immanu = with us). The Messiah wouldn't just be a representative of God or a messenger from God—He would BE God dwelling among us. Matthew 1:23 explicitly applies this prophecy to Jesus."
          />

          {/* Micah 5:2 */}
          <ScriptureCard
            reference="Micah 5:2 — 'From Everlasting'"
            text="As for you, Bethlehem Ephrathah, too little to be among the clans of Judah, from you One will go forth for Me to be ruler in Israel. His goings forth are from long ago, from the days of eternity."
            translation="LSB"
            explanation="The Messiah's 'goings forth' are from 'the days of eternity' (Hebrew: olam = ancient times, eternity). This isn't talking about a created being who had a beginning—it's describing someone who has always existed."
          />
        </section>

        {/* New Testament Evidence */}
        <section className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-8"
            style={{ color: '#2f3f2f' }}
          >
            New Testament Evidence
          </h2>

          {/* John 1:1 */}
          <ScriptureCard
            reference="John 1:1 — 'The Word Was God'"
            text="In the beginning was the Word, and the Word was with God, and the Word was God."
            translation="LSB"
            explanation="John opens his Gospel by declaring Jesus (the Word) is fully God. The lack of the article before 'theos' (God) in Greek doesn't make it indefinite ('a god')—it's a grammatical necessity because 'theos' is the predicate nominative."
            nwtComparison={{
              nwtText: "the Word was a god",
              issue: "The NWT adds 'a' to make Jesus a lesser god. See the full analysis on the NWT Problem page."
            }}
          />

          {/* John 8:58 */}
          <ScriptureCard
            reference="John 8:58 — 'Before Abraham Was, I AM'"
            text="Jesus said to them, 'Truly, truly, I say to you, before Abraham was born, I am.'"
            translation="LSB"
            explanation="Jesus claims the divine name 'I AM' (ego eimi in Greek)—the same name God gave Moses at the burning bush (Exodus 3:14). The Jews immediately tried to stone Him for blasphemy because they understood He was claiming to be YHWH."
            nwtComparison={{
              nwtText: "Before Abraham came into existence, I have been.",
              issue: "The NWT changes 'I am' to 'I have been' to obscure Jesus's divine claim."
            }}
          />

          {/* John 20:28 */}
          <ScriptureCard
            reference="John 20:28 — 'My Lord and My God'"
            text="Thomas answered and said to Him, 'My Lord and my God!'"
            translation="LSB"
            explanation="Thomas directly calls Jesus 'God' (Greek: ho theos mou = THE God of me). Jesus accepts this worship and pronounces a blessing on those who believe without seeing. If Jesus were merely a created being, He would have immediately corrected Thomas. Instead, He blessed him."
          />

          {/* Hebrews 1:8 */}
          <ScriptureCard
            reference="Hebrews 1:8 — The Father Calls the Son 'God'"
            text="But of the Son He says, 'Your throne, O God, is forever and ever, and the righteous scepter is the scepter of His kingdom.'"
            translation="LSB"
            explanation="God the Father directly addresses the Son as 'God.' This is a quote from Psalm 45:6, where YHWH is being addressed. The Father applies this divine title to Jesus."
          />

          {/* Colossians 1:15-17 */}
          <ScriptureCard
            reference="Colossians 1:15-17 — Creator of All Things"
            text="He is the image of the invisible God, the firstborn of all creation. For by Him all things were created, both in the heavens and on earth, visible and invisible, whether thrones or dominions or rulers or authorities—all things have been created through Him and for Him. He is before all things, and in Him all things hold together."
            translation="LSB"
            explanation="'Firstborn' (prototokos) doesn't mean 'first created'—it means 'preeminent' or 'having the rights of the firstborn.' The passage is clear: ALL things were created by Him and for Him. If Jesus were a created being, He would be one of the 'all things'—but He's the Creator."
            nwtComparison={{
              nwtText: "by means of him all [other] things were created",
              issue: "The NWT adds '[other]' four times—a word that doesn't exist in Greek—to make Jesus a created being."
            }}
          />

          {/* Philippians 2:5-11 */}
          <ScriptureCard
            reference="Philippians 2:5-11 — 'Form of God'"
            text="...who, although He existed in the form of God, did not regard equality with God a thing to be grasped, but emptied Himself, taking the form of a slave... Therefore God highly exalted Him, and bestowed on Him the name which is above every name, so that at the name of Jesus every knee will bow..."
            translation="LSB"
            explanation="Jesus existed 'in the form of God' (morphe theou)—not merely 'in God's image' but in His very nature. He is given 'the name above every name'—that name is YHWH (see Isaiah 45:23). Every knee will bow to Jesus—this is worship reserved for God alone."
          />

          {/* Titus 2:13 */}
          <ScriptureCard
            reference="Titus 2:13 — 'Our Great God and Savior'"
            text="...looking for the blessed hope and appearing of the glory of our great God and Savior, Jesus Christ"
            translation="LSB"
            explanation="Paul explicitly calls Jesus 'our great God and Savior.' The Greek grammar (Granville Sharp rule) makes it clear this is a single person being described with two titles, not two separate beings."
          />

          {/* Revelation 1:8 & 22:13 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-6"
            style={{
              backgroundColor: '#ffffff',
              border: '2px solid #e8ede8',
            }}
          >
            <h3
              className="text-xl md:text-2xl font-serif font-bold mb-4"
              style={{ color: '#2f3f2f' }}
            >
              Revelation 1:8 & 22:13 — &ldquo;Alpha and Omega&rdquo;
            </h3>

            <div
              className="rounded-lg p-4 mb-4"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <p
                className="text-base md:text-lg italic leading-relaxed mb-3"
                style={{ color: '#2f3f2f' }}
              >
                <strong>Revelation 1:8 (God speaking):</strong> &ldquo;I am the Alpha and the Omega,&rdquo;
                says the Lord God, &ldquo;who is and who was and who is to come, the Almighty.&rdquo;
              </p>
              <p
                className="text-base md:text-lg italic leading-relaxed"
                style={{ color: '#2f3f2f' }}
              >
                <strong>Revelation 22:13 (Jesus speaking):</strong> &ldquo;I am the Alpha and the Omega,
                the first and the last, the beginning and the end.&rdquo;
              </p>
              <p
                className="text-sm mt-2 font-semibold"
                style={{ color: '#577557' }}
              >
                — LSB
              </p>
            </div>

            <div className="mt-4">
              <p
                className="text-base leading-relaxed"
                style={{ color: '#2f3f2f', lineHeight: '1.7' }}
              >
                Both the Father and Jesus claim the title &ldquo;Alpha and Omega&rdquo;—the first and last
                letters of the Greek alphabet, symbolizing the eternal, all-encompassing nature of God.
                This title belongs to God alone, yet Jesus claims it.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Conclusion
          </h2>
          <p
            className="text-lg mb-4"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            The evidence from Scripture is overwhelming and consistent:
          </p>
          <div className="space-y-3 mb-6">
            {[
              'Old Testament prophets foretold the Messiah would be "Mighty God" and "Immanuel" (God with us)',
              'Jesus claimed divine names like "I AM"',
              'Jesus\'s disciples worshiped Him as God',
              'The Father Himself calls the Son "God"',
              'Jesus is Creator of all things',
              'Jesus shares titles with YHWH (Alpha and Omega, Lord, Savior)',
            ].map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <span style={{ color: '#d4af37' }}>•</span>
                <p style={{ color: '#2f3f2f' }}>{point}</p>
              </div>
            ))}
          </div>
          <p
            className="text-lg font-semibold"
            style={{ color: '#577557' }}
          >
            This isn&apos;t a doctrine invented by later church councils. This is what Scripture has always said.
          </p>
        </section>

        {/* Next Step CTA */}
        <div
          className="rounded-xl p-8"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #fff4e6, #f6f8f6)',
            borderLeft: '4px solid #d4af37'
          }}
        >
          <h2
            className="text-3xl font-serif font-semibold mb-6 text-center"
            style={{ color: '#2f3f2f' }}
          >
            Why Does This Matter?
          </h2>
          <div className="space-y-4" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
            <p>
              Understanding that Jesus is God isn&apos;t just an interesting theological detail—it&apos;s
              essential for salvation.
            </p>
            <p>
              But why? What difference does it make whether Jesus is God or &ldquo;a god&rdquo;? Why can&apos;t you
              just believe Jesus was God&apos;s first creation and still be saved?
            </p>
            <div className="text-center pt-4">
              <Link
                href="/why-it-matters"
                className="inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: '#577557',
                  color: '#ffffff',
                }}
              >
                Continue to: Why Does It Matter That Jesus Is God? →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
