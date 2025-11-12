import Link from "next/link";

export default function NWTProblemPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-sage-800 py-6 shadow-md">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-serif font-bold" style={{ color: '#fdfdf8' }}>
              MyWitness<span style={{ color: '#d4af37' }}>.info</span>
            </h1>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-50 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6" style={{ color: '#2f3f2f' }}>
            The New World Translation Problem
          </h2>
          <p className="text-xl md:text-2xl mb-6" style={{ color: '#577557' }}>
            What if everything you believe depends on a Bible translation that changed what God actually said?
          </p>
          <p className="text-lg" style={{ color: '#577557' }}>
            Before we discuss any doctrine, we need to address the foundation: 
            <strong> Can you trust the New World Translation?</strong>
          </p>
        </div>
      </section>

      {/* Critical Question */}
      <section className="py-12" style={{ backgroundColor: '#fdfdf8' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-xl p-8 border-l-4" style={{ backgroundColor: '#f6f8f6', borderColor: '#d4af37' }}>
            <h3 className="text-2xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
              The Question That Changes Everything
            </h3>
            <p className="text-lg mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              I'm not asking you to take my word for anything. I'm not asking you to trust me over the organization.
            </p>
            <p className="text-lg font-semibold" style={{ color: '#577557' }}>
              I'm asking you to do something simple: Compare your Bible to any other translation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" style={{ backgroundColor: '#fdfdf8' }}>
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Section 1: My Grandmother's Bible */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#2f3f2f' }}>
              My Grandmother's Kingdom Interlinear Translation
            </h3>
            
            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              When my grandmother passed away, I inherited her Kingdom Interlinear Translation of the Greek Scriptures. 
              Published by the Watchtower Society in 1969, this book was meant to show Jehovah's Witnesses that the 
              New World Translation was accurate.
            </p>

            <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: '#e8ede8', border: '2px solid #b3c4b3' }}>
              <p className="text-sm font-semibold mb-3" style={{ color: '#435943' }}>
                📖 What is an Interlinear Translation?
              </p>
              <p className="text-sm" style={{ color: '#2f3f2f', lineHeight: '1.6' }}>
                An interlinear Bible shows the original Greek text with an English word-for-word translation 
                directly beneath each Greek word. It's considered one of the most honest ways to show what the 
                original text actually says—because you can see for yourself what each Greek word means.
              </p>
            </div>

            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              The Watchtower published this book to prove their translation was correct. But here's what they 
              didn't expect: The interlinear translation <strong>contradicts the New World Translation</strong> in 
              the most critical verses about who Jesus is.
            </p>

            <div className="rounded-xl p-8 mb-6" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}>
              <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>
                [PHOTO PLACEHOLDER]
              </p>
              <p className="text-sm italic mb-4" style={{ color: '#577557' }}>
                Photo: Cover of the 1969 Kingdom Interlinear Translation, inherited from grandmother
              </p>
              <p className="text-sm" style={{ color: '#2f3f2f' }}>
                Description: This Bible was used in family worship for decades. It sat on the coffee table. 
                It was referenced in countless discussions. And it contains evidence that the organization 
                knew they were mistranslating Scripture.
              </p>
            </div>
          </div>

          {/* Section 2: The John 1:1 Problem */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#2f3f2f' }}>
              John 1:1: The Verse They Had to Change
            </h3>

            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              If you've been a Jehovah's Witness for any length of time, you know John 1:1. It's the verse 
              that supposedly proves Jesus is not God. Let me show you what it says in the NWT:
            </p>

            <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: '#e8ede8' }}>
              <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>
                New World Translation (John 1:1):
              </p>
              <p className="text-lg italic mb-2" style={{ color: '#2f3f2f' }}>
                "In the beginning was the Word, and the Word was with God, and the Word was <strong>a god</strong>."
              </p>
            </div>

            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              Notice: "a god" (lowercase, with the article "a"). This translation is critical to JW theology. 
              If Jesus is God (capital G), then everything the Watchtower teaches about Him being a created being falls apart.
            </p>

            <p className="mb-6 text-xl font-semibold" style={{ color: '#577557' }}>
              But here's the problem: That's not what the Greek says.
            </p>

            {/* Interlinear Comparison */}
            <div className="rounded-xl p-8 mb-6" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #d4af37' }}>
              <p className="text-sm font-semibold mb-4" style={{ color: '#435943' }}>
                [PHOTO PLACEHOLDER: Kingdom Interlinear - John 1:1]
              </p>
              <p className="text-sm italic mb-4" style={{ color: '#577557' }}>
                Side-by-side photo showing:
                - Greek text
                - Word-for-word English beneath Greek
                - NWT translation at bottom (showing the change)
              </p>
              <div className="border-t-2 pt-4 mt-4" style={{ borderColor: '#d1dbd1' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>
                  What the Interlinear Actually Says:
                </p>
                <p className="text-base mb-3" style={{ color: '#2f3f2f' }}>
                  Word-for-word from Greek: "and <strong>God</strong> was the Word"
                </p>
                <p className="text-base font-semibold" style={{ color: '#577557' }}>
                  Not "a god." <strong>GOD.</strong>
                </p>
              </div>
            </div>

            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              The Watchtower's own interlinear translation—the one they published—says "God was the Word." 
              But in the NWT column at the bottom of the page, they changed it to "a god."
            </p>

            <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}>
              <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                ⚠️ Think About This:
              </p>
              <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                Why would they publish an interlinear that shows one thing, but then translate it differently 
                in their own Bible? If the Greek really said "a god," wouldn't the interlinear show that?
              </p>
            </div>
          </div>

          {/* Section 3: Every Other Translation */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#2f3f2f' }}>
              What Do Other Translations Say?
            </h3>

            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              Maybe you're thinking: "Well, other translations are corrupted by Christendom. That's why they 
              say something different."
            </p>

            <p className="mb-6 text-lg font-semibold" style={{ color: '#577557' }}>
              But here's the thing: EVERY major translation—across centuries, languages, and denominations—says 
              the same thing. And they all disagree with the NWT.
            </p>

            <div className="space-y-4 mb-6">
              {/* KJV */}
              <div className="rounded-lg p-4" style={{ backgroundColor: '#f6f8f6' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: '#435943' }}>
                  King James Version (1611):
                </p>
                <p className="italic" style={{ color: '#2f3f2f' }}>
                  "In the beginning was the Word, and the Word was with God, and the Word was <strong>God</strong>."
                </p>
              </div>

              {/* NIV */}
              <div className="rounded-lg p-4" style={{ backgroundColor: '#f6f8f6' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: '#435943' }}>
                  New International Version (1978):
                </p>
                <p className="italic" style={{ color: '#2f3f2f' }}>
                  "In the beginning was the Word, and the Word was with God, and the Word was <strong>God</strong>."
                </p>
              </div>

              {/* ESV */}
              <div className="rounded-lg p-4" style={{ backgroundColor: '#f6f8f6' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: '#435943' }}>
                  English Standard Version (2001):
                </p>
                <p className="italic" style={{ color: '#2f3f2f' }}>
                  "In the beginning was the Word, and the Word was with God, and the Word was <strong>God</strong>."
                </p>
              </div>

              {/* NASB */}
              <div className="rounded-lg p-4" style={{ backgroundColor: '#f6f8f6' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: '#435943' }}>
                  New American Standard Bible (1971):
                </p>
                <p className="italic" style={{ color: '#2f3f2f' }}>
                  "In the beginning was the Word, and the Word was with God, and the Word was <strong>God</strong>."
                </p>
              </div>

              {/* Add more placeholder sections for other translations */}
              <div className="rounded-lg p-4" style={{ backgroundColor: '#e8ede8', borderLeft: '4px solid #6b8e6b' }}>
                <p className="text-sm italic" style={{ color: '#577557' }}>
                  [PLACEHOLDER: Add 5-10 more translations - show the consistency across translations, 
                  time periods, and denominations. Make it undeniable.]
                </p>
              </div>
            </div>

            <div className="rounded-xl p-6" style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}>
              <p className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                Ask Yourself:
              </p>
              <ul className="space-y-2" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                <li>• Why is the NWT the ONLY translation that says "a god"?</li>
                <li>• Are all these other scholars—across centuries—wrong?</li>
                <li>• Or is it possible the Watchtower changed it to fit their theology?</li>
              </ul>
            </div>
          </div>

          {/* Section 4: The Translation Committee */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#2f3f2f' }}>
              Who Translated the New World Translation?
            </h3>

            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              For years, the Watchtower kept the New World Translation committee anonymous. They said it was 
              for humility—to give glory to Jehovah, not men.
            </p>

            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              But we now know who the translators were. And here's what we discovered:
            </p>

            <div className="rounded-xl p-8 mb-6" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}>
              <p className="text-sm font-semibold mb-4" style={{ color: '#435943' }}>
                [PLACEHOLDER: Translation Committee Details]
              </p>
              <ul className="space-y-3 text-sm" style={{ color: '#2f3f2f', lineHeight: '1.6' }}>
                <li>• Names of the committee members (now known)</li>
                <li>• Their qualifications (or lack thereof) in Greek and Hebrew</li>
                <li>• Fred Franz's testimony under oath about his Greek knowledge</li>
                <li>• The court transcripts from the Walsh trial</li>
                <li>• Why they kept it secret for so long</li>
              </ul>
            </div>

            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              [PLACEHOLDER: Detailed breakdown of Fred Franz court testimony - when asked to translate Genesis 2:4 
              from Hebrew, he said he couldn't. Yet he was on the committee that translated the entire Old Testament.]
            </p>
          </div>

          {/* Section 5: Other Critical Changes */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#2f3f2f' }}>
              It's Not Just John 1:1
            </h3>

            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              The Watchtower didn't just change one verse. They systematically altered dozens of scriptures 
              that identify Jesus as God.
            </p>

            {/* Verse Comparison Grid */}
            <div className="space-y-6 mb-6">
              
              {/* Colossians 1:16-17 */}
              <div className="rounded-xl p-6" style={{ backgroundColor: '#f6f8f6' }}>
                <h4 className="text-xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
                  Colossians 1:16-17 - Adding "Other"
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded p-4" style={{ backgroundColor: '#fdfdf8' }}>
                    <p className="text-xs font-semibold mb-2" style={{ color: '#435943' }}>NWT:</p>
                    <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                      "...by means of him all <strong>[other]</strong> things were created..."
                    </p>
                  </div>
                  <div className="rounded p-4" style={{ backgroundColor: '#fdfdf8' }}>
                    <p className="text-xs font-semibold mb-2" style={{ color: '#435943' }}>ESV:</p>
                    <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                      "...by him all things were created..."
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm" style={{ color: '#577557' }}>
                  The word "other" doesn't exist in the Greek. They added it to make Jesus a created being.
                </p>
                <div className="mt-3 p-3 rounded" style={{ backgroundColor: '#e8ede8' }}>
                  <p className="text-xs italic" style={{ color: '#577557' }}>
                    [PLACEHOLDER: Add Greek analysis, show that "panta" means "all things" not "all other things"]
                  </p>
                </div>
              </div>

              {/* Hebrews 1:8 */}
              <div className="rounded-xl p-6" style={{ backgroundColor: '#f6f8f6' }}>
                <h4 className="text-xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
                  Hebrews 1:8 - Changing "God" to "God's throne"
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded p-4" style={{ backgroundColor: '#fdfdf8' }}>
                    <p className="text-xs font-semibold mb-2" style={{ color: '#435943' }}>NWT (2013):</p>
                    <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                      "But about the Son, he says: 'God is your throne forever...'"
                    </p>
                  </div>
                  <div className="rounded p-4" style={{ backgroundColor: '#fdfdf8' }}>
                    <p className="text-xs font-semibold mb-2" style={{ color: '#435943' }}>ESV:</p>
                    <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                      "But of the Son he says, 'Your throne, O God, is forever...'"
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm" style={{ color: '#577557' }}>
                  God the Father is calling the Son "God." The NWT changes it to avoid this.
                </p>
                <div className="mt-3 p-3 rounded" style={{ backgroundColor: '#e8ede8' }}>
                  <p className="text-xs italic" style={{ color: '#577557' }}>
                    [PLACEHOLDER: Show the Greek "ho theos" (O God) in vocative case, proving it's addressing Jesus as God]
                  </p>
                </div>
              </div>

              {/* Thomas's Confession - John 20:28 */}
              <div className="rounded-xl p-6" style={{ backgroundColor: '#f6f8f6' }}>
                <h4 className="text-xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
                  John 20:28 - Thomas's Confession
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded p-4" style={{ backgroundColor: '#fdfdf8' }}>
                    <p className="text-xs font-semibold mb-2" style={{ color: '#435943' }}>NWT:</p>
                    <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                      "...Thomas said to him: 'My Lord and my God!'"
                    </p>
                  </div>
                  <div className="rounded p-4" style={{ backgroundColor: '#fdfdf8' }}>
                    <p className="text-xs font-semibold mb-2" style={{ color: '#435943' }}>Watchtower Explanation:</p>
                    <p className="text-sm" style={{ color: '#2f3f2f' }}>
                      "Thomas was making an exclamation, not addressing Jesus directly."
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm" style={{ color: '#577557' }}>
                  Problem: The Greek grammar shows Thomas was addressing Jesus directly, not making an exclamation.
                </p>
                <div className="mt-3 p-3 rounded" style={{ backgroundColor: '#e8ede8' }}>
                  <p className="text-xs italic" style={{ color: '#577557' }}>
                    [PLACEHOLDER: Show dative case "to him" - proves Thomas was speaking TO Jesus, calling Him "my God"]
                  </p>
                </div>
              </div>

              {/* More Examples Placeholder */}
              <div className="rounded-xl p-6" style={{ backgroundColor: '#e8ede8', borderLeft: '4px solid #6b8e6b' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>
                  [PLACEHOLDER: Additional Examples to Add]
                </p>
                <ul className="text-sm space-y-2" style={{ color: '#577557' }}>
                  <li>• Philippians 2:6 - "form of God"</li>
                  <li>• Titus 2:13 - "our great God and Savior"</li>
                  <li>• Isaiah 9:6 - "Mighty God"</li>
                  <li>• Revelation 1:8 - The Alpha and Omega</li>
                  <li>• John 8:58 - "I am" vs "I have been"</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 6: The Challenge */}
          <div className="mb-16">
            <div className="rounded-xl p-8 text-center" style={{ backgroundImage: 'linear-gradient(to right, #e8ede8, #f6f8f6)', borderLeft: '4px solid #d4af37' }}>
              <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#2f3f2f' }}>
                I'm Going to Ask You to Do Something Dangerous
              </h3>
              
              <p className="text-lg mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                Dangerous according to the Watchtower, anyway. But simple according to Scripture.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6 max-w-2xl mx-auto">
                <p className="text-2xl font-serif font-semibold mb-4" style={{ color: '#577557' }}>
                  Read ANY other Bible translation.
                </p>
                <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                  Not to replace the NWT at first. Just to compare. Put them side by side and see for yourself.
                </p>
                <ul className="text-left space-y-2 mb-4" style={{ color: '#2f3f2f' }}>
                  <li>• King James Version (traditional, trusted for centuries)</li>
                  <li>• English Standard Version (modern, literal translation)</li>
                  <li>• New American Standard Bible (known for accuracy)</li>
                  <li>• New International Version (readable, widely used)</li>
                </ul>
              </div>

              <p className="text-lg font-semibold mb-4" style={{ color: '#2f3f2f' }}>
                If the NWT is accurate, comparing it to other translations won't hurt anything.
              </p>
              <p className="text-lg font-semibold" style={{ color: '#577557' }}>
                But if it's been changed... you need to know.
              </p>
            </div>
          </div>

          {/* Section 7: Free Resources */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#2f3f2f' }}>
              Where to Read Other Translations (Free)
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg p-6" style={{ backgroundColor: '#f6f8f6' }}>
                <h4 className="text-xl font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                  📱 Bible Gateway
                </h4>
                <p className="mb-3 text-sm" style={{ color: '#577557', lineHeight: '1.6' }}>
                  Free website and app with dozens of translations. Compare them side-by-side.
                </p>
                <a 
                  href="https://www.biblegateway.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-semibold inline-block"
                  style={{ color: '#577557' }}
                >
                  Visit BibleGateway.com →
                </a>
              </div>

              <div className="rounded-lg p-6" style={{ backgroundColor: '#f6f8f6' }}>
                <h4 className="text-xl font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                  📖 Blue Letter Bible
                </h4>
                <p className="mb-3 text-sm" style={{ color: '#577557', lineHeight: '1.6' }}>
                  Shows original Greek/Hebrew with lexicons. See what words actually mean.
                </p>
                <a 
                  href="https://www.blueletterbible.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-semibold inline-block"
                  style={{ color: '#577557' }}
                >
                  Visit BlueLetterBible.org →
                </a>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="rounded-xl p-8 text-center" style={{ backgroundImage: 'linear-gradient(to bottom, #f6f8f6, #e8ede8)' }}>
            <h3 className="text-2xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
              Once You See It, You Can't Unsee It
            </h3>
            <p className="mb-8" style={{ color: '#577557', lineHeight: '1.7' }}>
              The NWT has been changed to fit Watchtower theology. Now that you know this, 
              the next question is: Who is Jesus really?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/who-is-jesus" className="btn-primary inline-block">
                Discover Who Jesus Really Is →
              </Link>
              <Link href="/my-story" className="btn-secondary inline-block">
                ← Read My Story
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8" style={{ backgroundColor: '#1b241b', color: '#d1dbd1' }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm mb-2">© 2025 MyWitness LLC. All rights reserved.</p>
          <p className="text-xs italic" style={{ color: '#b3c4b3' }}>
            This ministry is 100% self-funded. No donations, no commissions, no financial interests.
          </p>
        </div>
      </footer>
    </main>
  );
}
