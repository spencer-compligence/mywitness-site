import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Why The Bible Matters | MyWitness.info',
  description:
    'Establishing the foundation we share: Biblical authority, inspiration, and the critical question every Jehovah\u2019s Witness must answer.',
};

export default function WhyTheBibleMattersPage() {
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
            Why The Bible Matters
          </h1>
          <p
            className="text-xl md:text-2xl mb-4"
            style={{ color: '#577557', lineHeight: '1.6' }}
          >
            The Foundation We Share
          </p>
          <p
            className="text-lg max-w-2xl mx-auto mb-8"
            style={{ color: '#2f3f2f', lineHeight: '1.6' }}
          >
            Before we can discuss what the Bible says about Jesus, we need to establish
            why the Bible&apos;s testimony matters. Here&apos;s the good news: we already agree on this.
          </p>
          <div
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: '#d4af37' }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* ============================================ */}
        {/* SECTION 1: The Foundation We Share           */}
        {/* ============================================ */}
        <section className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-8"
            style={{ color: '#2f3f2f' }}
          >
            The Foundation We Share
          </h2>

          <div
            className="space-y-4 mb-10"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            <p>
              Jehovah&apos;s Witnesses and Christians share something important: a deep respect
              for the Bible as God&apos;s Word. This page isn&apos;t an attack on your faith &mdash;
              it&apos;s an acknowledgment that we stand on common ground.
            </p>
            <p>
              In fact, the Watchtower organization itself has set a remarkably high standard
              for Biblical authority. Consider their own words:
            </p>
          </div>

          {/* Watchtower Quote 1 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-6"
            style={{
              backgroundColor: '#fff8e6',
              borderLeft: '5px solid #d4af37',
            }}
          >
            <blockquote
              className="text-lg md:text-xl italic mb-3"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              &ldquo;Jehovah&apos;s Witnesses believe that the entire Bible is the inspired Word of God,
              and instead of adhering to a creed based on human tradition, they hold to the Bible
              as the standard for all their beliefs.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: '#8b7532' }}>
              &mdash; Watchtower Online Library
            </p>
          </div>

          {/* Watchtower Quote 2 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-6"
            style={{
              backgroundColor: '#fff8e6',
              borderLeft: '5px solid #d4af37',
            }}
          >
            <blockquote
              className="text-lg md:text-xl italic mb-3"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              &ldquo;The religion that is approved by God must agree in all its details
              with the Bible.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: '#8b7532' }}>
              &mdash; <em>The Truth That Leads to Eternal Life</em>
            </p>
          </div>

          {/* Watchtower Quote 3 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-6"
            style={{
              backgroundColor: '#fff8e6',
              borderLeft: '5px solid #d4af37',
            }}
          >
            <blockquote
              className="text-lg md:text-xl italic mb-3"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              &ldquo;If a religion really accepts the Bible as God&apos;s Word, it is not going
              to use certain parts of it and reject other parts.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: '#8b7532' }}>
              &mdash; <em>Why It Is Wise to Examine Your Religion</em>
            </p>
          </div>

          {/* Watchtower Quote 4 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-8"
            style={{
              backgroundColor: '#fff8e6',
              borderLeft: '5px solid #d4af37',
            }}
          >
            <blockquote
              className="text-lg md:text-xl italic mb-3"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              &ldquo;Sincere Bible students want to grasp and act upon the message that God
              inspired. If you are such a person, you need an accurate Bible translation.
              Really, you deserve nothing less.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: '#8b7532' }}>
              &mdash; Watchtower, &ldquo;How Can You Choose a Good Bible Translation?&rdquo;
            </p>
          </div>

          <div
            className="rounded-xl p-6 md:p-8"
            style={{
              backgroundColor: '#f6f8f6',
              borderLeft: '4px solid #577557',
            }}
          >
            <p
              className="text-lg font-semibold"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              These are powerful statements. The Watchtower has set the standard:
              the Bible is God&apos;s inspired Word, religion must agree with it in all
              its details, no part can be rejected, and an accurate translation is
              essential. We couldn&apos;t agree more.
            </p>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 2: What the Bible Says About Itself  */}
        {/* ============================================ */}
        <section className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-8"
            style={{ color: '#2f3f2f' }}
          >
            What the Bible Says About Itself
          </h2>

          <p
            className="text-lg mb-10"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            The Watchtower&apos;s claims about Scripture are rooted in what the Bible itself teaches.
            Let&apos;s see what God&apos;s Word says about its own authority, inspiration, and sufficiency.
          </p>

          {/* On Inspiration */}
          <div className="mb-10">
            <h3
              className="text-2xl font-serif font-bold mb-5"
              style={{ color: '#2f3f2f' }}
            >
              On Inspiration
            </h3>
            <div className="space-y-4">
              <div
                className="rounded-xl p-5 md:p-6"
                style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: '#577557' }}>
                  2 Timothy 3:16&ndash;17 (LSB)
                </p>
                <blockquote
                  className="text-base italic"
                  style={{ color: '#2f3f2f', lineHeight: '1.7' }}
                >
                  &ldquo;All Scripture is God-breathed and profitable for teaching, for reproof,
                  for correction, for training in righteousness; so that the man of God may be
                  equipped, having been thoroughly equipped for every good work.&rdquo;
                </blockquote>
              </div>
              <div
                className="rounded-xl p-5 md:p-6"
                style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: '#577557' }}>
                  2 Peter 1:20&ndash;21 (LSB)
                </p>
                <blockquote
                  className="text-base italic"
                  style={{ color: '#2f3f2f', lineHeight: '1.7' }}
                >
                  &ldquo;But know this first of all, that no prophecy of Scripture comes by one&apos;s
                  own interpretation, for no prophecy was ever made by the will of man, but men
                  being moved by the Holy Spirit spoke from God.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>

          {/* On Authority */}
          <div className="mb-10">
            <h3
              className="text-2xl font-serif font-bold mb-5"
              style={{ color: '#2f3f2f' }}
            >
              On Authority
            </h3>
            <div className="space-y-4">
              <div
                className="rounded-xl p-5 md:p-6"
                style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: '#577557' }}>
                  John 10:35 (LSB)
                </p>
                <blockquote
                  className="text-base italic"
                  style={{ color: '#2f3f2f', lineHeight: '1.7' }}
                >
                  &ldquo;If he called them gods, to whom the word of God came &mdash; and the
                  Scripture cannot be broken &mdash;&rdquo;
                </blockquote>
              </div>
              <div
                className="rounded-xl p-5 md:p-6"
                style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: '#577557' }}>
                  Matthew 4:4 (LSB)
                </p>
                <blockquote
                  className="text-base italic"
                  style={{ color: '#2f3f2f', lineHeight: '1.7' }}
                >
                  &ldquo;But He answered and said, &lsquo;It is written: Man shall not live on bread
                  alone, but on every word that proceeds out of the mouth of God.&rsquo;&rdquo;
                </blockquote>
              </div>
              <div
                className="rounded-xl p-5 md:p-6"
                style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: '#577557' }}>
                  Isaiah 40:8 (LSB)
                </p>
                <blockquote
                  className="text-base italic"
                  style={{ color: '#2f3f2f', lineHeight: '1.7' }}
                >
                  &ldquo;The grass withers, the flower fades, but the word of our God stands forever.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>

          {/* On Not Adding or Subtracting */}
          <div className="mb-10">
            <h3
              className="text-2xl font-serif font-bold mb-5"
              style={{ color: '#2f3f2f' }}
            >
              On Not Adding or Subtracting
            </h3>
            <div className="space-y-4">
              <div
                className="rounded-xl p-5 md:p-6"
                style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: '#577557' }}>
                  Deuteronomy 4:2 (LSB)
                </p>
                <blockquote
                  className="text-base italic"
                  style={{ color: '#2f3f2f', lineHeight: '1.7' }}
                >
                  &ldquo;You shall not add to the word which I am commanding you, nor take away
                  from it, that you may keep the commandments of Yahweh your God which I am
                  commanding you.&rdquo;
                </blockquote>
              </div>
              <div
                className="rounded-xl p-5 md:p-6"
                style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: '#577557' }}>
                  Proverbs 30:5&ndash;6 (LSB)
                </p>
                <blockquote
                  className="text-base italic"
                  style={{ color: '#2f3f2f', lineHeight: '1.7' }}
                >
                  &ldquo;Every word of God is tested; He is a shield to those who take refuge in Him.
                  Do not add to His words lest He reprove you, and you be proved a liar.&rdquo;
                </blockquote>
              </div>
              <div
                className="rounded-xl p-5 md:p-6"
                style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: '#577557' }}>
                  Revelation 22:18&ndash;19 (LSB)
                </p>
                <blockquote
                  className="text-base italic"
                  style={{ color: '#2f3f2f', lineHeight: '1.7' }}
                >
                  &ldquo;I testify to everyone who hears the words of the prophecy of this book: if
                  anyone adds to them, God will add to him the plagues which are written in this
                  book; and if anyone takes away from the words of the book of this prophecy, God
                  will take away his part from the tree of life and from the holy city, which are
                  written in this book.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>

          {/* On Testing by Scripture */}
          <div className="mb-4">
            <h3
              className="text-2xl font-serif font-bold mb-5"
              style={{ color: '#2f3f2f' }}
            >
              On Testing by Scripture
            </h3>
            <div
              className="rounded-xl p-5 md:p-6"
              style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
            >
              <p className="text-sm font-bold mb-2" style={{ color: '#577557' }}>
                Acts 17:11 (LSB)
              </p>
              <blockquote
                className="text-base italic"
                style={{ color: '#2f3f2f', lineHeight: '1.7' }}
              >
                &ldquo;Now these were more noble-minded than those in Thessalonica, for they
                received the word with great eagerness, examining the Scriptures daily to see
                whether these things were so.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 3: The Critical Question              */}
        {/* ============================================ */}
        <section className="mb-16">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: 'linear-gradient(135deg, #2f3f2f 0%, #1a261a 100%)',
            }}
          >
            <h2
              className="text-3xl md:text-4xl font-serif font-bold mb-6"
              style={{ color: '#d4af37' }}
            >
              The Critical Question
            </h2>
            <div className="space-y-5" style={{ lineHeight: '1.8' }}>
              <p className="text-lg" style={{ color: '#e8ede8' }}>
                If we agree the Bible is God&apos;s authoritative Word&hellip;
              </p>
              <p className="text-lg" style={{ color: '#e8ede8' }}>
                And if we agree that what God said matters &mdash; in all its details&hellip;
              </p>
              <p className="text-lg" style={{ color: '#e8ede8' }}>
                And if we agree that an accurate translation is essential&hellip;
              </p>
              <p
                className="text-xl md:text-2xl font-serif font-bold pt-2"
                style={{ color: '#d4af37' }}
              >
                Then doesn&apos;t it matter that we read what God actually said?
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 4: The Contradiction                  */}
        {/* ============================================ */}
        <section className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            The Contradiction
          </h2>

          <div
            className="space-y-4 mb-10"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            <p>
              The Watchtower says the Bible is the ultimate authority. But they also
              teach something that directly contradicts this claim &mdash; that you cannot
              understand the Bible without their organization.
            </p>
            <p>
              Compare the quotes above to what the Watchtower has also published:
            </p>
          </div>

          {/* Contradictory Watchtower Quote 1 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-6"
            style={{
              backgroundColor: '#fef2f2',
              borderLeft: '5px solid #b45555',
            }}
          >
            <blockquote
              className="text-lg md:text-xl italic mb-3"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              &ldquo;The Bible is an organizational book and belongs to the Christian
              congregation as an organization, not to individuals, regardless of how sincerely
              they may believe that they can interpret the Bible&hellip; the Bible cannot be
              properly understood without Jehovah&apos;s visible organization in mind.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: '#8b3535' }}>
              &mdash; Watchtower, October 1, 1967
            </p>
          </div>

          {/* Contradictory Watchtower Quote 2 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-6"
            style={{
              backgroundColor: '#fef2f2',
              borderLeft: '5px solid #b45555',
            }}
          >
            <blockquote
              className="text-lg md:text-xl italic mb-3"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              &ldquo;Unless we are in touch with this channel of communication that God is using,
              we will not progress along the road to life, no matter how much Bible reading we do.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: '#8b3535' }}>
              &mdash; Watchtower, December 1, 1981
            </p>
          </div>

          {/* Contradictory Watchtower Quote 3 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-8"
            style={{
              backgroundColor: '#fef2f2',
              borderLeft: '5px solid #b45555',
            }}
          >
            <blockquote
              className="text-lg md:text-xl italic mb-3"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              &ldquo;Let us face the fact that no matter how much Bible reading we have done,
              we would never have learned the truth on our own.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: '#8b3535' }}>
              &mdash; Watchtower, December 1, 1990
            </p>
          </div>

          {/* The Insight */}
          <div
            className="rounded-xl p-6 md:p-8 mb-8"
            style={{
              backgroundColor: '#f6f8f6',
              borderLeft: '4px solid #577557',
            }}
          >
            <p
              className="text-lg font-semibold mb-4"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              Do you see the contradiction?
            </p>
            <p className="text-base mb-4" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              On one hand: <em>&ldquo;The Bible is the standard for all beliefs&rdquo;</em>
              and <em>&ldquo;religion must agree in all its details with the Bible.&rdquo;</em>
            </p>
            <p className="text-base mb-4" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              On the other hand: <em>&ldquo;The Bible cannot be properly understood&rdquo;</em> without
              the Watchtower, and <em>&ldquo;no matter how much Bible reading we have done, we would
              never have learned the truth on our own.&rdquo;</em>
            </p>
            <p
              className="text-lg font-bold"
              style={{ color: '#577557', lineHeight: '1.7' }}
            >
              If the Bible alone is God&apos;s authoritative Word, but you need the Watchtower
              to understand it, then effectively the Watchtower becomes the real authority
              &mdash; not the Bible.
            </p>
          </div>

          {/* What Jesus Said */}
          <div
            className="rounded-xl p-6 md:p-8"
            style={{
              backgroundColor: '#fff8e6',
              borderLeft: '5px solid #d4af37',
            }}
          >
            <p className="text-sm font-bold mb-3" style={{ color: '#577557' }}>
              Jesus addressed this exact pattern:
            </p>
            <p className="text-sm font-bold mb-2" style={{ color: '#577557' }}>
              Matthew 15:6, 9 (LSB)
            </p>
            <blockquote
              className="text-lg italic mb-4"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              &ldquo;You invalidated the word of God for the sake of your tradition&hellip;
              But in vain do they worship Me, teaching as doctrines the commandments of men.&rdquo;
            </blockquote>
            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              When any organization places itself between you and the Word of God &mdash;
              claiming you cannot understand Scripture without them &mdash; they have made
              themselves the authority. Jesus warned against exactly this.
            </p>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 5: The Invitation / Next Step         */}
        {/* ============================================ */}
        <div
          className="rounded-xl p-8 mt-16"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #fff4e6, #f6f8f6)',
            borderLeft: '4px solid #d4af37',
          }}
        >
          <h2
            className="text-3xl font-serif font-semibold mb-6 text-center"
            style={{ color: '#2f3f2f' }}
          >
            The Invitation
          </h2>
          <div className="space-y-4" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
            <p>
              We&apos;re not asking you to abandon your faith. We&apos;re inviting you to do
              exactly what the Watchtower recommends: examine whether your religion agrees
              in all its details with the Bible.
            </p>
            <p>
              The Bereans were called &ldquo;noble-minded&rdquo; because they didn&apos;t just accept
              what they were told &mdash; they examined the Scriptures for themselves. We&apos;re
              inviting you to do the same.
            </p>
            <p className="font-semibold" style={{ color: '#577557' }}>
              And that begins with one question: Does your Bible translation faithfully
              represent what God actually said?
            </p>
            <div className="text-center pt-6">
              <Link
                href="/nwt-problem"
                className="inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90 hover:scale-105"
                style={{
                  backgroundColor: '#577557',
                  color: '#ffffff',
                  boxShadow: '0 4px 12px rgba(87, 117, 87, 0.3)',
                }}
              >
                Examine the NWT &rarr;
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
