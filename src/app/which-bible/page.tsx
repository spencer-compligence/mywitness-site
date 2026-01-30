import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WhichBiblePage() {
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
            Which Bible Translation Should I Trust?
          </h1>
          <p
            className="text-xl md:text-2xl mb-8"
            style={{ color: '#577557', lineHeight: '1.6' }}
          >
            Finding a translation that uses God&apos;s name AND doesn&apos;t hide Jesus&apos; deity
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
        <div className="mb-16">
          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            For your entire life, you&apos;ve been taught that the New World Translation is the most
            accurate Bible available. You&apos;ve been told that other translations are corrupted,
            that they remove God&apos;s name and distort His message.
          </p>
          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            What if I told you that the Watchtower was right about <strong>one</strong> thing:
            using God&apos;s name is important. But they were wrong about everything else?
          </p>
        </div>

        {/* Section 1: Why the Watchtower Created the NWT */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Why the Watchtower Created the NWT
          </h2>
          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            The Watchtower Society gives two main reasons for creating the New World Translation:
          </p>
          <div className="space-y-4 mb-6">
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                1. Easy-to-read, modern English
              </p>
              <p style={{ color: '#577557' }}>
                Unlike older translations with &ldquo;thee&rdquo; and &ldquo;thou&rdquo;, the NWT uses contemporary language
              </p>
            </div>
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                2. Faithfully uses God&apos;s name
              </p>
              <p style={{ color: '#577557' }}>
                The NWT renders the divine name as &ldquo;Jehovah&rdquo; over 7,000 times in the Old Testament
              </p>
            </div>
          </div>
          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            These sound like good reasons. And on the surface, they are. Modern English IS easier
            to read. God&apos;s name SHOULD be used.
          </p>
          <div
            className="rounded-xl p-6 mb-6"
            style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}
          >
            <p className="font-semibold" style={{ color: '#8b6914' }}>
              But here&apos;s the problem: These legitimate concerns were used as cover to introduce
              intentional mistranslations.
            </p>
          </div>
        </section>

        {/* Section 2: The Problem with Other Translations */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            The Problem with Other Translations
          </h2>
          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            The Watchtower is right about one thing: most English Bibles do NOT use God&apos;s personal name.
          </p>
          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Instead of &ldquo;Yahweh&rdquo; or &ldquo;Jehovah,&rdquo; most translations use &ldquo;LORD&rdquo; (in small caps)
            wherever the Hebrew name YHWH appears. This happens over 6,800 times in the Old Testament.
          </p>
          <p
            className="text-lg mb-6 font-semibold"
            style={{ color: '#577557' }}
          >
            This is a valid concern. God revealed His personal name to Moses. He didn&apos;t say
            &ldquo;I am LORD,&rdquo; He said &ldquo;I am YAHWEH&rdquo; (Exodus 3:14-15).
          </p>
          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            So the Watchtower asks a fair question: &ldquo;How can you trust a translation that removes
            God&apos;s name 6,800 times?&rdquo;
          </p>
          <p
            className="text-xl font-semibold"
            style={{ color: '#577557' }}
          >
            That&apos;s actually a great question. And there IS an answer.
          </p>
        </section>

        {/* Section 3: The Solution - LSB */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            The Solution: Legacy Standard Bible (LSB)
          </h2>
          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            There exists a Bible translation that:
          </p>
          <div className="space-y-3 mb-8">
            {[
              'Uses God\'s personal name ("Yahweh") consistently - 6,800+ times in the Old Testament',
              'Uses modern, readable English (published 2021)',
              'Is extremely accurate (word-for-word, formal equivalence)',
              'Is respected by scholars worldwide',
              'Has NO theological agenda to hide Jesus\' deity',
              'Is available FREE online at lsbible.org',
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <span style={{ color: '#577557' }}>✓</span>
                <p style={{ color: '#2f3f2f' }}>{item}</p>
              </div>
            ))}
          </div>
          <p
            className="text-xl font-semibold mb-8"
            style={{ color: '#577557' }}
          >
            This translation is called the Legacy Standard Bible (LSB).
          </p>

          {/* LSB Details */}
          <div
            className="rounded-xl p-8 mb-8"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <h3
              className="text-2xl font-serif font-semibold mb-4"
              style={{ color: '#2f3f2f' }}
            >
              What Makes the LSB Trustworthy?
            </h3>

            <div className="space-y-6">
              <div>
                <p className="font-semibold mb-2" style={{ color: '#577557' }}>
                  Scholarly Credentials:
                </p>
                <ul className="space-y-1 ml-4" style={{ color: '#2f3f2f' }}>
                  <li>• Created by Master&apos;s Seminary faculty</li>
                  <li>• Reviewed by 70+ international scholars</li>
                  <li>• Based on the latest Hebrew and Greek manuscripts</li>
                  <li>• Endorsed by John MacArthur, James White, and other respected theologians</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2" style={{ color: '#577557' }}>
                  Translation Philosophy:
                </p>
                <ul className="space-y-1 ml-4" style={{ color: '#2f3f2f' }}>
                  <li>• Formal equivalence (word-for-word translation)</li>
                  <li>• Translates each Hebrew/Greek word consistently</li>
                  <li>• Preserves the grammar and structure of the original languages</li>
                  <li>• Opens a &ldquo;window&rdquo; into the original text</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2" style={{ color: '#577557' }}>
                  Modern and Readable:
                </p>
                <ul className="space-y-1 ml-4" style={{ color: '#2f3f2f' }}>
                  <li>• Published 2021 (very recent)</li>
                  <li>• Contemporary English (not archaic like King James)</li>
                  <li>• Clear, understandable language</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Yahweh vs Jehovah */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Why &ldquo;Yahweh&rdquo; Instead of &ldquo;Jehovah&rdquo;?
          </h2>
          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            You might be wondering: &ldquo;Why does the LSB use &lsquo;Yahweh&rsquo; instead of &lsquo;Jehovah&rsquo; if
            they&apos;re so similar?&rdquo;
          </p>
          <p
            className="text-lg mb-6 font-semibold"
            style={{ color: '#577557' }}
          >
            Short answer: They&apos;re the same name, just different pronunciations.
          </p>

          <div className="space-y-6 mb-8">
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <h4 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                The Hebrew Name:
              </h4>
              <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                In Hebrew, God&apos;s name is written with four letters: <strong>יהוה (YHWH)</strong>
              </p>
              <p className="mt-2" style={{ color: '#577557' }}>
                Ancient Hebrew was written without vowels. So we know the consonants (Y-H-W-H),
                but the original vowel sounds were passed down orally.
              </p>
            </div>

            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <h4 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                How We Got &ldquo;Jehovah&rdquo;:
              </h4>
              <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                Around 1000 AD, Jewish scholars called the Masoretes added vowel markings to the
                Hebrew text. But they didn&apos;t want anyone to accidentally say God&apos;s name out loud
                (they believed it was too holy to pronounce), so they put the vowels from the word
                &ldquo;Adonai&rdquo; (meaning &ldquo;Lord&rdquo;) under the letters YHWH as a reminder to say &ldquo;Adonai&rdquo; instead.
              </p>
              <p className="mt-2 font-semibold" style={{ color: '#577557' }}>
                Jehovah = Y(e)H(o)W(a)H — a hybrid that was never actually pronounced in ancient times.
              </p>
            </div>

            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <h4 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                How We Got &ldquo;Yahweh&rdquo;:
              </h4>
              <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                Through linguistic study, comparison with ancient texts, and analysis of how the name
                appears in other languages, scholars believe the original pronunciation was closer to
                &ldquo;Yahweh&rdquo; (Yah-weh).
              </p>
            </div>
          </div>

          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: '#e8ede8', borderLeft: '4px solid #577557' }}
          >
            <p className="font-semibold" style={{ color: '#2f3f2f' }}>
              Both &ldquo;Yahweh&rdquo; and &ldquo;Jehovah&rdquo; refer to the same God. It&apos;s the same as how &ldquo;Jesus&rdquo;
              (English) and &ldquo;Yeshua&rdquo; (Hebrew) are the same person.
            </p>
            <p className="mt-2" style={{ color: '#577557' }}>
              The LSB uses &ldquo;Yahweh&rdquo; because it&apos;s likely closer to the original pronunciation.
              But the important thing is that the NAME is there—not replaced with &ldquo;LORD.&rdquo;
            </p>
          </div>
        </section>

        {/* Section 5: Comparison Table */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Comparison Table
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr style={{ backgroundColor: '#577557', color: '#ffffff' }}>
                  <th className="p-3 text-left font-semibold">Translation</th>
                  <th className="p-3 text-left font-semibold">Divine Name</th>
                  <th className="p-3 text-left font-semibold">Modern English</th>
                  <th className="p-3 text-left font-semibold">Accuracy</th>
                  <th className="p-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: '#e8f5e8' }}>
                  <td className="p-3 font-semibold border-b" style={{ borderColor: '#d1dbd1' }}>
                    Legacy Standard Bible (LSB)
                  </td>
                  <td className="p-3 border-b" style={{ borderColor: '#d1dbd1' }}>Yahweh (6,800x)</td>
                  <td className="p-3 border-b" style={{ borderColor: '#d1dbd1', color: '#2e7d32' }}>✓ Yes (2021)</td>
                  <td className="p-3 border-b" style={{ borderColor: '#d1dbd1', color: '#2e7d32' }}>⭐⭐⭐⭐⭐ Excellent</td>
                  <td className="p-3 border-b font-semibold" style={{ borderColor: '#d1dbd1', color: '#2e7d32' }}>
                    RECOMMENDED
                  </td>
                </tr>
                <tr style={{ backgroundColor: '#fff4e6' }}>
                  <td className="p-3 font-semibold border-b" style={{ borderColor: '#d1dbd1' }}>
                    New World Translation (NWT)
                  </td>
                  <td className="p-3 border-b" style={{ borderColor: '#d1dbd1' }}>Jehovah (7,000x)</td>
                  <td className="p-3 border-b" style={{ borderColor: '#d1dbd1' }}>✓ Yes</td>
                  <td className="p-3 border-b" style={{ borderColor: '#d1dbd1', color: '#c62828' }}>
                    ❌ Mistranslations
                  </td>
                  <td className="p-3 border-b" style={{ borderColor: '#d1dbd1', color: '#c62828' }}>
                    Hides Jesus&apos; deity
                  </td>
                </tr>
                <tr style={{ backgroundColor: '#fdfdf8' }}>
                  <td className="p-3 font-semibold border-b" style={{ borderColor: '#d1dbd1' }}>
                    American Standard Version
                  </td>
                  <td className="p-3 border-b" style={{ borderColor: '#d1dbd1' }}>Jehovah (6,800x)</td>
                  <td className="p-3 border-b" style={{ borderColor: '#d1dbd1', color: '#c62828' }}>❌ No (1901)</td>
                  <td className="p-3 border-b" style={{ borderColor: '#d1dbd1', color: '#2e7d32' }}>⭐⭐⭐⭐ Good</td>
                  <td className="p-3 border-b" style={{ borderColor: '#d1dbd1' }}>Archaic English</td>
                </tr>
                <tr style={{ backgroundColor: '#f6f8f6' }}>
                  <td className="p-3 font-semibold border-b" style={{ borderColor: '#d1dbd1' }}>
                    English Standard Version
                  </td>
                  <td className="p-3 border-b" style={{ borderColor: '#d1dbd1' }}>LORD</td>
                  <td className="p-3 border-b" style={{ borderColor: '#d1dbd1', color: '#2e7d32' }}>✓ Yes</td>
                  <td className="p-3 border-b" style={{ borderColor: '#d1dbd1', color: '#2e7d32' }}>⭐⭐⭐⭐ Good</td>
                  <td className="p-3 border-b" style={{ borderColor: '#d1dbd1' }}>No divine name</td>
                </tr>
                <tr style={{ backgroundColor: '#fdfdf8' }}>
                  <td className="p-3 font-semibold" style={{ borderColor: '#d1dbd1' }}>
                    New International Version
                  </td>
                  <td className="p-3" style={{ borderColor: '#d1dbd1' }}>LORD</td>
                  <td className="p-3" style={{ borderColor: '#d1dbd1', color: '#2e7d32' }}>✓ Yes</td>
                  <td className="p-3" style={{ borderColor: '#d1dbd1', color: '#2e7d32' }}>⭐⭐⭐ Good</td>
                  <td className="p-3" style={{ borderColor: '#d1dbd1' }}>More dynamic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: How to Get Started */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            How to Get Started
          </h2>
          <div className="space-y-4 mb-8">
            <div
              className="rounded-lg p-6 flex items-start gap-4"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <span
                className="text-2xl font-bold"
                style={{ color: '#d4af37' }}
              >
                1
              </span>
              <div>
                <p className="font-semibold mb-1" style={{ color: '#2f3f2f' }}>
                  Visit <a href="https://www.lsbible.org" target="_blank" rel="noopener noreferrer" style={{ color: '#d4af37', textDecoration: 'underline' }}>lsbible.org</a>
                </p>
                <p style={{ color: '#577557' }}>
                  The entire Bible is available free online
                </p>
              </div>
            </div>
            <div
              className="rounded-lg p-6 flex items-start gap-4"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <span
                className="text-2xl font-bold"
                style={{ color: '#d4af37' }}
              >
                2
              </span>
              <div>
                <p className="font-semibold mb-1" style={{ color: '#2f3f2f' }}>
                  Start with the Gospel of John
                </p>
                <p style={{ color: '#577557' }}>
                  See how Jesus is presented when the text hasn&apos;t been altered
                </p>
              </div>
            </div>
            <div
              className="rounded-lg p-6 flex items-start gap-4"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <span
                className="text-2xl font-bold"
                style={{ color: '#d4af37' }}
              >
                3
              </span>
              <div>
                <p className="font-semibold mb-1" style={{ color: '#2f3f2f' }}>
                  Compare with your NWT
                </p>
                <p style={{ color: '#577557' }}>
                  You&apos;ll immediately notice differences
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: '#e8ede8', borderLeft: '4px solid #577557' }}
          >
            <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <strong>Important:</strong> The LSB will feel different at first because you&apos;re used
              to the NWT&apos;s wording. That&apos;s okay. Give yourself time to adjust to reading God&apos;s
              actual words instead of the Watchtower&apos;s version.
            </p>
          </div>
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
            Next Step: Who Is Jesus?
          </h2>
          <div className="space-y-4" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
            <p>
              Now that you have a Bible translation you can trust—one that uses God&apos;s name
              AND doesn&apos;t hide Jesus&apos; deity—you&apos;re ready to discover who Jesus actually is
              according to Scripture.
            </p>
            <div className="text-center pt-4">
              <Link
                href="/who-is-jesus"
                className="inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: '#577557',
                  color: '#ffffff',
                }}
              >
                Continue to: Who Is Jesus? →
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
