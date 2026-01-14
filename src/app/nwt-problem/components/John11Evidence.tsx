'use client';

import { useState } from 'react';

export default function John11Evidence() {
  const [showArticleRule, setShowArticleRule] = useState(false);
  const [showWestcott, setShowWestcott] = useState(false);

  return (
    <div className="space-y-8">
      {/* Main Comparison */}
      <div 
        className="rounded-xl p-6 md:p-8"
        style={{ backgroundColor: '#f6f8f6' }}
      >
        <h3 
          className="text-2xl font-serif font-semibold mb-6"
          style={{ color: '#2f3f2f' }}
        >
          John 1:1 — "The Word Was God" vs "The Word Was a god"
        </h3>

        {/* The Greek Text */}
        <div 
          className="rounded-lg p-4 mb-6"
          style={{ backgroundColor: '#e8ede8' }}
        >
          <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>
            Greek Text (from the Kingdom Interlinear):
          </p>
          <p 
            className="text-lg font-medium mb-2"
            style={{ color: '#2f3f2f', fontFamily: 'serif' }}
          >
            Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ <span className="font-bold" style={{ color: '#d4af37' }}>θεὸς</span> ἦν ὁ λόγος.
          </p>
          <p className="text-sm italic" style={{ color: '#577557' }}>
            En archē ēn ho logos, kai ho logos ēn pros ton theon, kai <span className="font-bold">theos</span> ēn ho logos.
          </p>
        </div>

        {/* Side by side comparison */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* KIT Word-for-Word */}
          <div 
            className="rounded-lg p-4"
            style={{ backgroundColor: '#fff', border: '2px solid #577557' }}
          >
            <p className="text-sm font-semibold mb-2" style={{ color: '#577557' }}>
              Kingdom Interlinear — Word-for-Word:
            </p>
            <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              "In beginning was the Word, and the Word was toward the God, and{' '}
              <span className="font-bold" style={{ color: '#577557' }}>god was the Word</span>."
            </p>
          </div>

          {/* NWT */}
          <div 
            className="rounded-lg p-4"
            style={{ backgroundColor: '#fff', border: '2px solid #c9302c' }}
          >
            <p className="text-sm font-semibold mb-2" style={{ color: '#c9302c' }}>
              New World Translation:
            </p>
            <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              "In [the] beginning the Word was, and the Word was with God, and the Word was{' '}
              <span className="font-bold" style={{ color: '#c9302c' }}>a god</span>."
            </p>
          </div>
        </div>

        {/* The Watchtower's Argument */}
        <div 
          className="rounded-lg p-4 mb-6"
          style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}
        >
          <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>
            The Watchtower's Argument:
          </p>
          <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
            The Watchtower claims that because there is no definite article ("the") before 
            "theos" (God) in the third clause, it should be translated as "a god" — 
            an indefinite noun referring to a lesser divine being.
          </p>
          <p className="mt-2 font-semibold" style={{ color: '#2f3f2f' }}>
            But does the Watchtower apply this rule consistently?
          </p>
        </div>
      </div>

      {/* The Article Rule Demolition */}
      <div 
        className="rounded-xl p-6 md:p-8"
        style={{ backgroundColor: '#fff4e6', border: '2px solid #d4af37' }}
      >
        <button
          onClick={() => setShowArticleRule(!showArticleRule)}
          className="w-full text-left"
        >
          <h3 
            className="text-2xl font-serif font-semibold mb-2 flex items-center justify-between"
            style={{ color: '#2f3f2f' }}
          >
            <span>The "Article Rule" — Exposed by Their Own Translation</span>
            <span className="text-xl">{showArticleRule ? '−' : '+'}</span>
          </h3>
          <p style={{ color: '#577557' }}>
            Click to see how the NWT itself demolishes the Watchtower's grammatical argument
          </p>
        </button>

        {showArticleRule && (
          <div className="mt-6 space-y-4">
            <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              If the Watchtower's rule were valid — that a noun without the definite article 
              must be translated as indefinite ("a god" instead of "God") — then they would 
              need to apply it consistently throughout Scripture.
            </p>
            <p className="font-semibold" style={{ color: '#c9302c' }}>
              They don't. Here's the proof from their own New World Translation:
            </p>

            {/* Evidence Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ color: '#2f3f2f' }}>
                <thead>
                  <tr style={{ backgroundColor: '#e8ede8' }}>
                    <th className="p-3 text-left font-semibold">Verse</th>
                    <th className="p-3 text-left font-semibold">Article Present?</th>
                    <th className="p-3 text-left font-semibold">NWT Translation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: '#fff' }}>
                    <td className="p-3 border-b">John 1:1c</td>
                    <td className="p-3 border-b font-bold" style={{ color: '#c9302c' }}>NO</td>
                    <td className="p-3 border-b">"a god" (lowercase)</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f6f8f6' }}>
                    <td className="p-3 border-b">John 1:6</td>
                    <td className="p-3 border-b font-bold" style={{ color: '#c9302c' }}>NO</td>
                    <td className="p-3 border-b">"God" (capital G!) ✓</td>
                  </tr>
                  <tr style={{ backgroundColor: '#fff' }}>
                    <td className="p-3 border-b">John 1:12</td>
                    <td className="p-3 border-b font-bold" style={{ color: '#c9302c' }}>NO</td>
                    <td className="p-3 border-b">"God" (capital G!) ✓</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f6f8f6' }}>
                    <td className="p-3 border-b">John 1:13</td>
                    <td className="p-3 border-b font-bold" style={{ color: '#c9302c' }}>NO</td>
                    <td className="p-3 border-b">"God" (capital G!) ✓</td>
                  </tr>
                  <tr style={{ backgroundColor: '#fff' }}>
                    <td className="p-3 border-b">John 1:18a</td>
                    <td className="p-3 border-b font-bold" style={{ color: '#c9302c' }}>NO</td>
                    <td className="p-3 border-b">"God" (capital G!) ✓</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f6f8f6' }}>
                    <td className="p-3 border-b">John 1:18b (Jesus)</td>
                    <td className="p-3 border-b font-bold" style={{ color: '#c9302c' }}>NO</td>
                    <td className="p-3 border-b">"god" (lowercase)</td>
                  </tr>
                  <tr style={{ backgroundColor: '#fff' }}>
                    <td className="p-3 border-b">John 3:2</td>
                    <td className="p-3 border-b font-bold" style={{ color: '#c9302c' }}>NO</td>
                    <td className="p-3 border-b">"God" (capital G!) ✓</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f6f8f6' }}>
                    <td className="p-3 border-b">John 13:3</td>
                    <td className="p-3 border-b font-bold" style={{ color: '#c9302c' }}>NO</td>
                    <td className="p-3 border-b">"God" (capital G!) ✓</td>
                  </tr>
                  <tr style={{ backgroundColor: '#fff' }}>
                    <td className="p-3 border-b">Hebrews 9:14</td>
                    <td className="p-3 border-b font-bold" style={{ color: '#c9302c' }}>NO</td>
                    <td className="p-3 border-b">"[the] living God" — article ADDED!</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* John 1:6 Deep Dive */}
            <div 
              className="rounded-lg p-4 mt-4"
              style={{ backgroundColor: '#fff', border: '2px solid #577557' }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: '#577557' }}>
                Just 5 Verses Later — John 1:6:
              </p>
              <p className="italic mb-2" style={{ color: '#2f3f2f' }}>
                "There arose a man that was sent forth as a representative of <span className="font-bold">God</span>: 
                his name was John." — NWT
              </p>
              <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                There is <span className="font-bold">no definite article</span> before "theos" in John 1:6, 
                yet the NWT correctly translates it as "God" with a capital G. 
              </p>
              <p className="mt-2 font-semibold" style={{ color: '#c9302c' }}>
                Why the inconsistency? Because John 1:6 isn't talking about Jesus.
              </p>
            </div>

            {/* The Pattern */}
            <div 
              className="rounded-lg p-4"
              style={{ backgroundColor: '#c9302c', color: '#fff' }}
            >
              <p className="font-semibold text-lg mb-2">The Pattern Is Clear:</p>
              <p>
                The "article rule" is applied <em>only</em> when the passage identifies Jesus as God. 
                When the same grammatical construction refers to Jehovah, the rule is ignored and 
                "God" is capitalized. This is not translation — it is theological manipulation.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* John 1:18 — The Double Standard */}
      <div 
        className="rounded-xl p-6 md:p-8"
        style={{ backgroundColor: '#f6f8f6' }}
      >
        <h3 
          className="text-2xl font-serif font-semibold mb-4"
          style={{ color: '#2f3f2f' }}
        >
          John 1:18 — The Double Standard in One Verse
        </h3>
        
        <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
          John 1:18 contains the word "theos" (God) twice. Neither occurrence has the definite article. 
          Watch what the NWT does:
        </p>

        <div 
          className="rounded-lg p-4 mb-4"
          style={{ backgroundColor: '#fff', border: '2px solid #c9302c' }}
        >
          <p className="text-sm font-semibold mb-2" style={{ color: '#c9302c' }}>
            NWT John 1:18:
          </p>
          <p className="italic" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
            "No man has seen <span className="font-bold" style={{ color: '#577557' }}>God</span> at any time; 
            the only-begotten <span className="font-bold" style={{ color: '#c9302c' }}>god</span> who is in 
            the bosom [position] with the Father is the one that has explained him."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-lg p-4" style={{ backgroundColor: '#e8ede8' }}>
            <p className="font-semibold" style={{ color: '#577557' }}>First "theos":</p>
            <p style={{ color: '#2f3f2f' }}>No article → translated "God" (capital)</p>
            <p className="text-sm mt-1" style={{ color: '#577557' }}>Refers to the Father</p>
          </div>
          <div className="rounded-lg p-4" style={{ backgroundColor: '#fff4e6' }}>
            <p className="font-semibold" style={{ color: '#c9302c' }}>Second "theos":</p>
            <p style={{ color: '#2f3f2f' }}>No article → translated "god" (lowercase)</p>
            <p className="text-sm mt-1" style={{ color: '#c9302c' }}>Refers to Jesus</p>
          </div>
        </div>

        <p className="mt-4 font-semibold" style={{ color: '#2f3f2f' }}>
          Same word. Same grammatical construction. Different translation. The only difference? 
          One refers to Jesus.
        </p>
      </div>

      {/* What Greek Scholars Actually Say */}
      <div 
        className="rounded-xl p-6 md:p-8"
        style={{ backgroundColor: '#e8ede8' }}
      >
        <button
          onClick={() => setShowWestcott(!showWestcott)}
          className="w-full text-left"
        >
          <h3 
            className="text-2xl font-serif font-semibold mb-2 flex items-center justify-between"
            style={{ color: '#2f3f2f' }}
          >
            <span>What Greek Scholars Actually Say</span>
            <span className="text-xl">{showWestcott ? '−' : '+'}</span>
          </h3>
          <p style={{ color: '#577557' }}>
            Including the very scholars the Watchtower claims to follow
          </p>
        </button>

        {showWestcott && (
          <div className="mt-6 space-y-4">
            <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              The Watchtower claims to follow the Westcott and Hort Greek text. 
              But what did Dr. B.F. Westcott himself say about John 1:1?
            </p>

            <div 
              className="rounded-lg p-4"
              style={{ backgroundColor: '#fff', borderLeft: '4px solid #d4af37' }}
            >
              <p className="italic" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                "The predicate (God) stands emphatically first, as in iv. 24. It is necessarily 
                without the article... <span className="font-bold">No idea of inferiority of nature is 
                suggested by the form of expression, which simply affirms the true deity of the 
                Word</span>... In the third clause 'the Word' is declared to be 'God' and so 
                included in the unity of the Godhead."
              </p>
              <p className="text-sm mt-2" style={{ color: '#577557' }}>
                — Dr. B.F. Westcott, Commentary on John's Gospel
              </p>
            </div>

            <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              Westcott explains that in Greek grammar, when a predicate nominative precedes the verb 
              (as "theos" does here), it is naturally anarthrous (without the article) for emphasis. 
              This does <em>not</em> make it indefinite — it makes it <em>emphatic</em>.
            </p>

            <p className="font-semibold" style={{ color: '#2f3f2f' }}>
              The very scholar whose Greek text the Watchtower uses says John 1:1 
              "affirms the true deity of the Word."
            </p>

            {/* Additional Scholar Quotes */}
            <div 
              className="rounded-lg p-4"
              style={{ backgroundColor: '#fff', borderLeft: '4px solid #577557' }}
            >
              <p className="font-semibold mb-2" style={{ color: '#435943' }}>
                Dr. Julius Mantey (co-author of A Manual Grammar of the Greek New Testament):
              </p>
              <p className="italic" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                "I have never read any New Testament so badly (mis)translated... 
                'A god' is a particularly monstrous mistranslation... 
                It is neither scholarly nor reasonable to translate John 1:1 'The word was a god.'"
              </p>
            </div>
          </div>
        )}
      </div>

      {/* The Colossians Connection */}
      <div 
        className="rounded-xl p-6 md:p-8"
        style={{ backgroundColor: '#fff', border: '2px solid #577557' }}
      >
        <h3 
          className="text-2xl font-serif font-semibold mb-4"
          style={{ color: '#2f3f2f' }}
        >
          Why They Didn't Add "[Other]" Here
        </h3>
        
        <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
          Remember how the NWT adds "[other]" four times in Colossians 1:16-17 to make Jesus 
          a created being? They didn't dare do that in John 1:3:
        </p>

        <div 
          className="rounded-lg p-4 mb-4"
          style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
        >
          <p className="text-sm font-semibold mb-2" style={{ color: '#577557' }}>
            NWT John 1:3:
          </p>
          <p className="italic" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
            "All things came into existence through him, and <span className="font-bold">apart from him 
            not even one thing came into existence</span>."
          </p>
        </div>

        <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
          If Jesus is a created being, He would be one of the "things" that came into existence. 
          But John says "not even one thing" came into existence apart from Him.
        </p>

        <p className="mt-4 font-semibold" style={{ color: '#577557' }}>
          Jesus is not one of the "things" created. He is the Creator Himself.
        </p>
      </div>

      {/* Questions for Reflection */}
      <div 
        className="rounded-xl p-6 md:p-8"
        style={{ 
          backgroundImage: 'linear-gradient(to bottom, #fff4e6, #f6f8f6)',
          borderLeft: '4px solid #d4af37'
        }}
      >
        <h3 
          className="text-2xl font-serif font-semibold mb-4"
          style={{ color: '#2f3f2f' }}
        >
          Questions to Consider
        </h3>
        <ul className="space-y-3" style={{ color: '#2f3f2f' }}>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: '#d4af37' }}>•</span>
            <span>If the "article rule" is a valid principle of Greek grammar, why doesn't the NWT apply it consistently?</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: '#d4af37' }}>•</span>
            <span>Why does John 1:6 use "God" (capital) without the article, but John 1:1 uses "god" (lowercase) also without the article?</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: '#d4af37' }}>•</span>
            <span>Why would the Watchtower use Dr. Westcott's Greek text but ignore his interpretation of it?</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: '#d4af37' }}>•</span>
            <span>If "not even one thing" came into existence apart from Jesus, how can Jesus Himself be a created thing?</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: '#d4af37' }}>•</span>
            <span>The Watchtower promised "one meaning per word." Why does "theos" get translated "God" or "god" depending on whether it refers to Jesus?</span>
          </li>
        </ul>
      </div>

      {/* The Promise Callback */}
      <div 
        className="rounded-xl p-6"
        style={{ backgroundColor: '#c9302c', color: '#fff' }}
      >
        <h3 className="text-xl font-serif font-semibold mb-3">
          Remember the Watchtower's Promise:
        </h3>
        <p className="italic mb-3">
          "To each major word we have assigned one meaning and have held to that meaning."
        </p>
        <p className="text-sm opacity-90">
          — Kingdom Interlinear Translation, 1985 Edition, Page 9
        </p>
        <p className="mt-4 font-semibold">
          The word "theos" is translated "God" when referring to the Father, but "god" when 
          referring to Jesus. Same word. Different meanings. Broken promise.
        </p>
      </div>
    </div>
  );
}