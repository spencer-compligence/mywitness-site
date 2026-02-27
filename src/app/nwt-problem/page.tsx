import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScriptureWarning from './components/ScriptureWarning';
import Hebrews1Evidence from './components/Hebrews1Evidence';
import Isaiah96Evidence from './components/Isaiah96Evidence';
import WorshipEvidence from './components/WorshipEvidence';
import John858Evidence from './components/John858Evidence';
import John11Evidence from './components/John11Evidence';
import Colossians1Evidence from './components/Colossians1Evidence';
import RevelationAlphaOmegaEvidence from './components/RevelationAlphaOmegaEvidence';
import ThomasDeclarationEvidence from './components/ThomasDeclarationEvidence';
import TableOfContents from './components/TableOfContents';

export default function NWTProblemPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fdfdf8' }}>
      {/* Header */}
      <Header />

      {/* Table of Contents Navigation */}
      <TableOfContents />

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
            The NWT Problem
          </h1>
          <p
            className="text-xl md:text-2xl mb-4"
            style={{ color: '#577557', lineHeight: '1.6' }}
          >
            Translation or Mistranslation?
          </p>
          <p
            className="text-lg max-w-2xl mx-auto mb-8"
            style={{ color: '#2f3f2f', lineHeight: '1.6' }}
          >
            Using the Watchtower&apos;s own Kingdom Interlinear Translation to expose
            systematic changes that hide who Jesus really is
          </p>
          <div
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: '#d4af37' }}
          />
        </div>
      </div>

      {/* Bible Comparison Image */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <figure>
          <div
            className="rounded-xl overflow-hidden shadow-xl"
            style={{ border: '2px solid #e0e8e0' }}
          >
            <Image
              src="/nwt-vs-real-bibles.jpg"
              alt="Comparison of 8 Bible translations showing the New World Translation stands alone in its rendering"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
          <figcaption
            className="mt-4 text-center text-lg italic"
            style={{ color: '#2f3f2f', lineHeight: '1.6' }}
          >
            &ldquo;Every major Bible translation agrees — including the Watchtower&apos;s own Kingdom Interlinear.
            Only the New World Translation disagrees.&rdquo;
          </figcaption>
        </figure>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div
          id="introduction"
          className="rounded-xl p-8 mb-12 scroll-mt-24"
          style={{
            backgroundColor: '#f6f8f6',
            borderLeft: '4px solid #577557'
          }}
        >
          <h2
            className="text-3xl font-serif font-semibold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Why This Matters
          </h2>
          <div className="space-y-4" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
            <p>
              In the <Link href="/why-the-bible-matters" style={{ color: '#577557', textDecoration: 'underline' }}>previous section</Link>,
              we established that we agree: the Bible is God&apos;s inspired Word, and an accurate
              translation is essential. The Watchtower itself has said you &ldquo;deserve nothing less.&rdquo;
              Now let&apos;s examine whether the NWT meets that standard.
            </p>
            <p>
              The New World Translation is the foundation of Jehovah&apos;s Witness theology.
              Every doctrine, every teaching, every belief depends on this translation being accurate.
            </p>
            <p>
              But what if it isn&apos;t? What if the translators systematically changed key verses
              to hide the truth about Jesus&apos; identity?
            </p>
            <p>
              This page presents evidence from the Watchtower&apos;s <strong>own</strong> Kingdom
              Interlinear Translation—the word-for-word Greek-to-English translation they published
              themselves. When you compare what the Greek actually says to how the NWT translates it,
              a disturbing pattern emerges.
            </p>
            <p className="font-semibold" style={{ color: '#577557' }}>
              I&apos;m not asking you to trust me. I&apos;m asking you to look at the evidence yourself.
            </p>
          </div>
        </div>

        {/* Kingdom Interlinear Photos Section */}
        <div
          id="kit-evidence"
          className="rounded-xl p-8 mb-12 scroll-mt-24"
          style={{
            backgroundColor: '#f6f8f6',
            borderLeft: '4px solid #d4af37'
          }}
        >
          <h2
            className="text-3xl font-serif font-semibold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            The Evidence: My Grandmother&apos;s Kingdom Interlinear
          </h2>
          <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
            <p className="italic" style={{ color: '#577557' }}>
              Throughout this page, you&apos;ll see photographs from my grandmother&apos;s copy of the Kingdom
              Interlinear Translation — published by the Watchtower Bible and Tract Society in 1969.
              This book was designed to show readers &ldquo;what the original koiné Greek basically or
              literally says.&rdquo; What you&apos;ll discover is that the Watchtower&apos;s own interlinear Greek
              text repeatedly contradicts their New World Translation. These aren&apos;t claims from
              &ldquo;apostate&rdquo; sources. This is the Watchtower&apos;s own publication exposing the
              Watchtower&apos;s own translation.
            </p>

            {/* KIT Cover Photo */}
            <figure className="my-8">
              <div
                className="rounded-xl overflow-hidden shadow-lg max-w-md mx-auto"
                style={{ border: '1px solid #e0e8e0' }}
              >
                <Image
                  src="/kit-cover.jpg"
                  alt="The Kingdom Interlinear Translation of the Greek Scriptures - Cover"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <figcaption
                className="mt-3 text-center text-sm italic"
                style={{ color: '#5a6a5a' }}
              >
                The Kingdom Interlinear Translation of the Greek Scriptures — published by the
                Watchtower Bible and Tract Society. This copy belonged to my grandmother.
              </figcaption>
            </figure>

            {/* KIT Purpose Statement Photo */}
            <figure className="my-8">
              <div
                className="rounded-xl overflow-hidden shadow-lg"
                style={{ border: '1px solid #e0e8e0' }}
              >
                <Image
                  src="/kit-purpose-statement.jpg"
                  alt="Kingdom Interlinear Purpose Statement - showing the Watchtower's own stated goal"
                  width={900}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <figcaption
                className="mt-3 text-center text-sm italic"
                style={{ color: '#5a6a5a' }}
              >
                From the Watchtower&apos;s own introduction: The interlinear shows &ldquo;what the original
                koiné Greek basically or literally says, without any sectarian religious coloration.&rdquo;
                They admit the interlinear often differs from the NWT — and that the interlinear reveals
                &ldquo;what the Greek text actually, basically says.&rdquo;
              </figcaption>
            </figure>

            <div
              className="rounded-lg p-4"
              style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}
            >
              <p className="font-semibold" style={{ color: '#2f3f2f' }}>
                Key Quote from the Introduction:
              </p>
              <p className="italic mt-2">
                &ldquo;Its literal interlinear English translation is specially designed to open up to the
                student of the Sacred Scriptures what the original koiné Greek basically or literally
                says, without any sectarian religious coloration.&rdquo;
              </p>
              <p className="mt-3 text-sm" style={{ color: '#577557' }}>
                Now let&apos;s see if the NWT lives up to this promise...
              </p>
            </div>
          </div>
        </div>

        {/* Scripture Warning Section */}
        <section id="scripture-warning" className="mb-16 scroll-mt-24">
          <ScriptureWarning />
        </section>

        {/* Key Evidence Sections */}
        <div className="space-y-16">
          {/* Section 1: Worship */}
          <section id="part-1-worship" className="scroll-mt-24">
            <div className="mb-8">
              <h2
                className="text-3xl md:text-4xl font-serif font-bold mb-4"
                style={{ color: '#2f3f2f' }}
              >
                Part 1: Worship
              </h2>
              <p
                className="text-lg"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                The Greek word <em>proskuneo</em> appears 60 times in the New Testament.
                Jesus receives this worship throughout the Gospels—and never refuses it.
              </p>
            </div>
            <WorshipEvidence />
          </section>

          {/* Section 2: Hebrews 1 */}
          <section id="part-2-hebrews" className="scroll-mt-24">
            <div className="mb-8">
              <h2
                className="text-3xl md:text-4xl font-serif font-bold mb-4"
                style={{ color: '#2f3f2f' }}
              >
                Part 2: Hebrews 1
              </h2>
              <p
                className="text-lg"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                The Father calls the Son &ldquo;God&rdquo; and &ldquo;Lord,&rdquo; applies YHWH&apos;s words to Him,
                and commands angels to worship Him.
              </p>
            </div>
            <Hebrews1Evidence />
          </section>

          {/* Section 3: Isaiah 9:6 */}
          <section id="part-3-isaiah" className="scroll-mt-24">
            <div className="mb-8">
              <h2
                className="text-3xl md:text-4xl font-serif font-bold mb-4"
                style={{ color: '#2f3f2f' }}
              >
                Part 3: Isaiah 9:6
              </h2>
              <p
                className="text-lg"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                700 years before Jesus was born, Isaiah prophesied that the Messiah
                would be called &ldquo;Mighty God&rdquo; and &ldquo;Everlasting Father.&rdquo;
              </p>
            </div>
            <Isaiah96Evidence />
          </section>

          {/* Section 4: John 8:58 */}
          <section id="part-4-john858" className="scroll-mt-24">
            <div className="mb-8">
              <h2
                className="text-3xl md:text-4xl font-serif font-bold mb-4"
                style={{ color: '#2f3f2f' }}
              >
                Part 4: John 8:58
              </h2>
              <p
                className="text-lg"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                Jesus claims the divine name &ldquo;I AM&rdquo; from Exodus 3:14.
                The Watchtower&apos;s own Kingdom Interlinear exposes their mistranslation.
              </p>
            </div>
            <John858Evidence />
          </section>

          {/* Section 5: John 1:1 */}
          <section id="part-5-john11" className="scroll-mt-24">
            <div className="mb-8">
              <h2
                className="text-3xl md:text-4xl font-serif font-bold mb-4"
                style={{ color: '#2f3f2f' }}
              >
                Part 5: John 1:1
              </h2>
              <p
                className="text-lg"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                The most famous NWT mistranslation — &ldquo;a god&rdquo; instead of &ldquo;God.&rdquo;
                Their own &ldquo;article rule&rdquo; collapses under scrutiny.
              </p>
            </div>
            <John11Evidence />
          </section>

          {/* Section 6: Colossians 1 */}
          <section id="part-6-colossians" className="scroll-mt-24">
            <div className="mb-8">
              <h2
                className="text-3xl md:text-4xl font-serif font-bold mb-4"
                style={{ color: '#2f3f2f' }}
              >
                Part 6: Colossians 1:15-17
              </h2>
              <p
                className="text-lg"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                The NWT adds the word &ldquo;[other]&rdquo; four times to make Jesus a created being.
                But it&apos;s not in the Greek text.
              </p>
            </div>
            <Colossians1Evidence />
          </section>

          {/* Section 7: Revelation */}
          <section id="part-7-revelation" className="scroll-mt-24">
            <div className="mb-8">
              <h2
                className="text-3xl md:text-4xl font-serif font-bold mb-4"
                style={{ color: '#2f3f2f' }}
              >
                Part 7: Alpha and Omega
              </h2>
              <p
                className="text-lg"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                In Revelation, both the Father and Jesus claim the title &ldquo;Alpha and Omega&rdquo;—
                a title that belongs to God alone.
              </p>
            </div>
            <RevelationAlphaOmegaEvidence />
          </section>

          {/* Section 8: Thomas's Declaration */}
          <section id="part-8-thomas" className="scroll-mt-24">
            <div className="mb-8">
              <h2
                className="text-3xl md:text-4xl font-serif font-bold mb-4"
                style={{ color: '#2f3f2f' }}
              >
                Part 8: &ldquo;My Lord and My God&rdquo;
              </h2>
              <p
                className="text-lg"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                Thomas calls Jesus &ldquo;my God&rdquo; directly to His face.
                Jesus accepts this declaration and blesses Thomas for believing it.
              </p>
            </div>
            <ThomasDeclarationEvidence />
          </section>
        </div>

        {/* Transition to Which Bible */}
        <div
          id="next-step"
          className="rounded-xl p-8 mt-16 scroll-mt-24"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #fff4e6, #f6f8f6)',
            borderLeft: '4px solid #d4af37'
          }}
        >
          <h2
            className="text-3xl font-serif font-semibold mb-6 text-center"
            style={{ color: '#2f3f2f' }}
          >
            Now That You&apos;ve Seen the Evidence...
          </h2>
          <div className="space-y-4" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
            <p>
              The NWT has been systematically altered to hide Jesus&apos; deity. The evidence is
              right there in the Watchtower&apos;s own Kingdom Interlinear Translation.
            </p>
            <p>
              You might be wondering: &ldquo;If I can&apos;t trust the NWT, which Bible <em>can</em> I trust?&rdquo;
            </p>
            <p>
              That&apos;s a fair question. You&apos;ve been taught that most translations remove God&apos;s name
              and can&apos;t be trusted. But there&apos;s good news: there&apos;s a modern, scholarly translation
              that uses God&apos;s name (Yahweh) over 6,800 times <em>and</em> doesn&apos;t hide Jesus&apos; deity.
            </p>
            <div className="text-center pt-6">
              <Link
                href="/which-bible"
                className="inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: '#577557',
                  color: '#ffffff',
                }}
              >
                Which Bible Can I Trust? →
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
