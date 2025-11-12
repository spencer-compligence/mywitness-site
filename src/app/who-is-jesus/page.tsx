import Link from "next/link";

export default function WhoIsJesusPage() {
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
            Who Is Jesus Christ?
          </h2>
          <p className="text-xl md:text-2xl mb-6" style={{ color: '#577557' }}>
            Not who the Watchtower says He is. Who the Bible—the real Bible—says He is.
          </p>
          <p className="text-lg" style={{ color: '#577557' }}>
            You've been taught He's Michael the Archangel, a created being, "a god."
            <br />
            <strong>Scripture tells a completely different story.</strong>
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12" style={{ backgroundColor: '#fdfdf8' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-xl p-8 border-l-4" style={{ backgroundColor: '#f6f8f6', borderColor: '#d4af37' }}>
            <h3 className="text-2xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
              Before We Begin: Use Any Translation But the NWT
            </h3>
            <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              If you haven't read the previous page about the New World Translation problems, please do that first. 
              Because what you're about to read will only make sense if you're reading an accurate Bible.
            </p>
            <p className="font-semibold" style={{ color: '#577557' }}>
              Everything on this page uses the English Standard Version (ESV), but you can verify it in 
              ANY translation—KJV, NIV, NASB, or dozens of others. They all say the same thing.
            </p>
            <Link href="/nwt-problem" className="inline-block mt-4 text-sm font-semibold" style={{ color: '#577557' }}>
              ← Read About the NWT Problem First
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" style={{ backgroundColor: '#fdfdf8' }}>
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Section 1: What You Were Taught */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#2f3f2f' }}>
              What the Watchtower Taught You
            </h3>
            
            <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: '#e8ede8' }}>
              <p className="text-sm font-semibold mb-3" style={{ color: '#435943' }}>
                The JW Doctrine of Jesus:
              </p>
              <ul className="space-y-2" style={{ color: '#2f3f2f', lineHeight: '1.6' }}>
                <li>✓ Jesus is a created being</li>
                <li>✓ He is Michael the Archangel</li>
                <li>✓ He is "a god" (lowercase)</li>
                <li>✓ He was the first thing Jehovah created</li>
                <li>✓ He is not equal to Jehovah</li>
                <li>✓ He is not to be worshiped</li>
                <li>✓ The Trinity is a pagan doctrine</li>
              </ul>
            </div>

            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              I believed this for years. It's what I was taught from birth. But when I started reading the Bible 
              without the Watchtower's interpretations, I discovered something that shook me to my core:
            </p>

            <p className="text-2xl font-serif font-semibold text-center my-8" style={{ color: '#577557' }}>
              The Bible never says any of this.
            </p>

            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              In fact, Scripture repeatedly, explicitly, undeniably identifies Jesus as God Himself—not a god, 
              not a created being, but the eternal God in human flesh.
            </p>
          </div>

          {/* Section 2: Jesus Claims to Be God */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#2f3f2f' }}>
              Jesus Claimed to Be God
            </h3>

            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              The Watchtower teaches that Jesus never claimed to be God. Let's see what He actually said.
            </p>

            {/* John 8:58 - I AM */}
            <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}>
              <h4 className="text-xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
                John 8:58 - "Before Abraham Was, I AM"
              </h4>
              
              <div className="rounded p-4 mb-4" style={{ backgroundColor: '#fdfdf8' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>ESV:</p>
                <p className="text-lg italic" style={{ color: '#2f3f2f' }}>
                  "Jesus said to them, 'Truly, truly, I say to you, before Abraham was, <strong>I am</strong>.'"
                </p>
              </div>

              <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                Notice the response from the Jews who heard Him say this:
              </p>

              <div className="rounded p-4 mb-4" style={{ backgroundColor: '#fdfdf8' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>John 8:59 (ESV):</p>
                <p className="italic" style={{ color: '#2f3f2f' }}>
                  "So they picked up stones to throw at him..."
                </p>
              </div>

              <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                <strong>Why did they try to stone Him?</strong> Because they knew exactly what He was claiming. 
                "I AM" (Greek: ego eimi) is the divine name God gave Moses at the burning bush:
              </p>

              <div className="rounded p-4 mb-4" style={{ backgroundColor: '#e8ede8' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>Exodus 3:14 (ESV):</p>
                <p className="italic" style={{ color: '#2f3f2f' }}>
                  "God said to Moses, '<strong>I AM WHO I AM</strong>.' And he said, 'Say this to the people 
                  of Israel: "I AM has sent me to you."'"
                </p>
              </div>

              <div className="rounded p-4" style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}>
                <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                  What Jesus Was Claiming:
                </p>
                <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                  By calling Himself "I AM," Jesus was identifying Himself as YHWH—Jehovah Himself. 
                  The Jews understood this claim perfectly. That's why they picked up stones. Claiming to be 
                  God was blasphemy punishable by death (Leviticus 24:16)—unless it was true.
                </p>
              </div>

              <div className="mt-4 p-4 rounded" style={{ backgroundColor: '#e8ede8' }}>
                <p className="text-sm italic" style={{ color: '#577557' }}>
                  [PLACEHOLDER: Add NWT comparison showing how they changed "I am" to "I have been" to avoid 
                  the connection to Exodus 3:14. Show the Greek "ego eimi" in present tense, not past tense.]
                </p>
              </div>
            </div>

            {/* John 10:30-33 - I and the Father are One */}
            <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}>
              <h4 className="text-xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
                John 10:30-33 - "I and the Father Are One"
              </h4>

              <div className="rounded p-4 mb-4" style={{ backgroundColor: '#fdfdf8' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>ESV:</p>
                <p className="text-lg italic mb-4" style={{ color: '#2f3f2f' }}>
                  "I and the Father are one."
                </p>
                <p className="text-sm italic" style={{ color: '#577557' }}>
                  The Jews picked up stones again to stone him. Jesus answered them, "I have shown you many 
                  good works from the Father; for which of them are you going to stone me?"
                </p>
                <p className="text-sm italic" style={{ color: '#577557' }}>
                  The Jews answered him, "It is not for a good work that we are going to stone you but for 
                  <strong> blasphemy, because you, being a man, make yourself God</strong>."
                </p>
              </div>

              <div className="rounded p-4" style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}>
                <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                  Notice What the Jews Understood:
                </p>
                <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                  They didn't say, "You're claiming to be <em>a</em> god." They said, "You make yourself 
                  <strong>God</strong>." They understood His claim perfectly. And notice: Jesus didn't correct them. 
                  He didn't say, "No, no, you misunderstood—I'm just an angel." He let the claim stand because it was true.
                </p>
              </div>

              <div className="mt-4 p-4 rounded" style={{ backgroundColor: '#e8ede8' }}>
                <p className="text-sm italic" style={{ color: '#577557' }}>
                  [PLACEHOLDER: Address the Watchtower's explanation that "one" means unity of purpose. 
                  Show Greek "hen" (neuter one) indicates nature/essence, not just agreement. Point out that if 
                  it only meant unity of purpose, why did the Jews try to stone Him for blasphemy?]
                </p>
              </div>
            </div>

            {/* More Claims Placeholder */}
            <div className="rounded-xl p-6" style={{ backgroundColor: '#e8ede8', borderLeft: '4px solid #6b8e6b' }}>
              <p className="text-sm font-semibold mb-3" style={{ color: '#435943' }}>
                [PLACEHOLDER: Additional Claims to Add]
              </p>
              <ul className="space-y-2 text-sm" style={{ color: '#577557' }}>
                <li>• John 14:9 - "Whoever has seen me has seen the Father"</li>
                <li>• John 5:18 - "Making himself equal with God"</li>
                <li>• John 5:23 - "That all may honor the Son, just as they honor the Father"</li>
                <li>• Revelation 1:17-18 - "I am the first and the last"</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Others Called Jesus God */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#2f3f2f' }}>
              Others Called Jesus God—And He Accepted It
            </h3>

            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              It's not just Jesus claiming to be God. Others recognized who He was and worshiped Him as God. 
              And He never once corrected them.
            </p>

            {/* Thomas's Confession */}
            <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}>
              <h4 className="text-xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
                John 20:28 - Thomas Calls Jesus "My God"
              </h4>

              <div className="rounded p-4 mb-4" style={{ backgroundColor: '#fdfdf8' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>ESV:</p>
                <p className="text-lg italic" style={{ color: '#2f3f2f' }}>
                  "Thomas answered him, '<strong>My Lord and my God!</strong>'"
                </p>
              </div>

              <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                Thomas—the disciple who doubted the resurrection—sees Jesus alive and declares Him to be God. 
                Not "a god." Not an angel. <strong>God.</strong>
              </p>

              <div className="rounded p-4 mb-4" style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}>
                <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                  What Did Jesus Do?
                </p>
                <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                  He accepted the worship. He didn't rebuke Thomas. He didn't say, "Don't call me God—only 
                  worship Jehovah!" In fact, He affirmed Thomas's declaration and blessed those who would 
                  believe without seeing.
                </p>
              </div>

              <div className="mt-4 p-4 rounded" style={{ backgroundColor: '#e8ede8' }}>
                <p className="text-sm italic" style={{ color: '#577557' }}>
                  [PLACEHOLDER: Address Watchtower's claim that Thomas was making an exclamation, not 
                  addressing Jesus. Show the Greek grammar—dative case "pros auton" (to him) proves Thomas 
                  was speaking TO Jesus, calling Him "ho theos mou" (the God of me).]
                </p>
              </div>
            </div>

            {/* Hebrews 1:8 - Father Calls Son God */}
            <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}>
              <h4 className="text-xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
                Hebrews 1:8 - The Father Calls the Son "God"
              </h4>

              <div className="rounded p-4 mb-4" style={{ backgroundColor: '#fdfdf8' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>ESV:</p>
                <p className="text-lg italic" style={{ color: '#2f3f2f' }}>
                  "But of the Son he says, '<strong>Your throne, O God, is forever and ever</strong>, 
                  the scepter of uprightness is the scepter of your kingdom.'"
                </p>
              </div>

              <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                This is stunning. God the Father is speaking about the Son, and He calls Him "God." 
                The Father Himself testifies that the Son is God.
              </p>

              <div className="rounded p-4" style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}>
                <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                  If Jesus Isn't God:
                </p>
                <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                  Then why does the Father call Him "O God"? Why does the Father say His throne is "forever and ever"? 
                  Only God has an eternal throne. Only God is to be addressed as "O God."
                </p>
              </div>

              <div className="mt-4 p-4 rounded" style={{ backgroundColor: '#e8ede8' }}>
                <p className="text-sm italic" style={{ color: '#577557' }}>
                  [PLACEHOLDER: Show how NWT changed this verse to "God is your throne" to avoid calling 
                  Jesus "God." Show the Greek vocative case "ho theos" proves it's addressing Jesus as God, 
                  not saying God is His throne. Compare multiple translations.]
                </p>
              </div>
            </div>

            {/* More Examples Placeholder */}
            <div className="rounded-xl p-6" style={{ backgroundColor: '#e8ede8', borderLeft: '4px solid #6b8e6b' }}>
              <p className="text-sm font-semibold mb-3" style={{ color: '#435943' }}>
                [PLACEHOLDER: Additional Examples to Add]
              </p>
              <ul className="space-y-2 text-sm" style={{ color: '#577557' }}>
                <li>• Titus 2:13 - "our great God and Savior Jesus Christ"</li>
                <li>• 2 Peter 1:1 - "our God and Savior Jesus Christ"</li>
                <li>• Colossians 2:9 - "the whole fullness of deity dwells bodily"</li>
                <li>• Isaiah 9:6 - "Mighty God, Everlasting Father"</li>
              </ul>
            </div>
          </div>

          {/* Section 4: Jesus Has Attributes Only God Has */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#2f3f2f' }}>
              Jesus Has Attributes That Only God Possesses
            </h3>

            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              If Jesus were a created being—even the first and greatest creation—He would still be limited. 
              But Scripture attributes to Jesus characteristics that belong to God alone.
            </p>

            {/* Eternal */}
            <div className="rounded-lg p-6 mb-4" style={{ backgroundColor: '#f6f8f6' }}>
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                1. Jesus Is Eternal (No Beginning)
              </h4>
              <div className="rounded p-4 mb-3" style={{ backgroundColor: '#fdfdf8' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: '#435943' }}>Micah 5:2 (ESV):</p>
                <p className="italic text-sm" style={{ color: '#2f3f2f' }}>
                  "But you, O Bethlehem Ephrathah, who are too little to be among the clans of Judah, 
                  from you shall come forth for me one who is to be ruler in Israel, <strong>whose coming 
                  forth is from of old, from ancient days</strong>."
                </p>
              </div>
              <p className="text-sm" style={{ color: '#577557' }}>
                The Messiah's origins are "from ancient days"—literally "from eternity." He has no beginning.
              </p>
            </div>

            {/* Omnipresent */}
            <div className="rounded-lg p-6 mb-4" style={{ backgroundColor: '#f6f8f6' }}>
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                2. Jesus Is Omnipresent (Everywhere at Once)
              </h4>
              <div className="rounded p-4 mb-3" style={{ backgroundColor: '#fdfdf8' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: '#435943' }}>Matthew 28:20 (ESV):</p>
                <p className="italic text-sm" style={{ color: '#2f3f2f' }}>
                  "And behold, <strong>I am with you always</strong>, to the end of the age."
                </p>
              </div>
              <p className="text-sm" style={{ color: '#577557' }}>
                Jesus promises to be with all His followers, everywhere, at all times. Only God can do this.
              </p>
            </div>

            {/* Omniscient */}
            <div className="rounded-lg p-6 mb-4" style={{ backgroundColor: '#f6f8f6' }}>
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                3. Jesus Is Omniscient (Knows Everything)
              </h4>
              <div className="rounded p-4 mb-3" style={{ backgroundColor: '#fdfdf8' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: '#435943' }}>John 16:30 (ESV):</p>
                <p className="italic text-sm" style={{ color: '#2f3f2f' }}>
                  "Now we know that <strong>you know all things</strong>..."
                </p>
              </div>
              <p className="text-sm" style={{ color: '#577557' }}>
                The disciples recognized Jesus's omniscience. He knew their thoughts, their questions, 
                everything about them.
              </p>
            </div>

            {/* Creator */}
            <div className="rounded-lg p-6 mb-4" style={{ backgroundColor: '#f6f8f6' }}>
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                4. Jesus Created Everything
              </h4>
              <div className="rounded p-4 mb-3" style={{ backgroundColor: '#fdfdf8' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: '#435943' }}>John 1:3 (ESV):</p>
                <p className="italic text-sm" style={{ color: '#2f3f2f' }}>
                  "All things were made through him, and <strong>without him was not any thing made that was made</strong>."
                </p>
              </div>
              <p className="text-sm mb-3" style={{ color: '#577557' }}>
                Everything that exists was created by Jesus. If Jesus were created, this verse would be saying 
                He created Himself—which is impossible.
              </p>
              <div className="rounded p-3" style={{ backgroundColor: '#e8ede8' }}>
                <p className="text-xs italic" style={{ color: '#577557' }}>
                  [PLACEHOLDER: Show Colossians 1:16 in real translations vs NWT. NWT adds "[other]" four 
                  times to make Jesus a created being. The word "other" doesn't exist in the Greek.]
                </p>
              </div>
            </div>

            {/* Forgives Sins */}
            <div className="rounded-lg p-6 mb-4" style={{ backgroundColor: '#f6f8f6' }}>
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                5. Jesus Forgives Sins (Only God Can Do This)
              </h4>
              <div className="rounded p-4 mb-3" style={{ backgroundColor: '#fdfdf8' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: '#435943' }}>Mark 2:5-7 (ESV):</p>
                <p className="italic text-sm mb-2" style={{ color: '#2f3f2f' }}>
                  "And when Jesus saw their faith, he said to the paralytic, 'Son, your sins are forgiven.' 
                  Now some of the scribes were sitting there, questioning in their hearts, 'Why does this 
                  man speak like that? <strong>He is blaspheming! Who can forgive sins but God alone?</strong>'"
                </p>
              </div>
              <p className="text-sm" style={{ color: '#577557' }}>
                The scribes were right: Only God can forgive sins. But Jesus didn't say, "You're right, 
                I can't forgive sins." He proved He could—and then healed the paralytic to demonstrate His authority.
              </p>
            </div>

            {/* Worshiped */}
            <div className="rounded-lg p-6" style={{ backgroundColor: '#f6f8f6' }}>
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                6. Jesus Received Worship (Only God Should Be Worshiped)
              </h4>
              <div className="rounded p-4 mb-3" style={{ backgroundColor: '#fdfdf8' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: '#435943' }}>Matthew 14:33 (ESV):</p>
                <p className="italic text-sm" style={{ color: '#2f3f2f' }}>
                  "And those in the boat <strong>worshiped him</strong>, saying, 'Truly you are the Son of God.'"
                </p>
              </div>
              <p className="text-sm mb-3" style={{ color: '#577557' }}>
                When angels or men receive worship in Scripture, they immediately rebuke it (Acts 10:25-26, 
                Revelation 22:8-9). Jesus never did. He accepted worship because He is God.
              </p>
              <div className="rounded p-3" style={{ backgroundColor: '#e8ede8' }}>
                <p className="text-xs italic" style={{ color: '#577557' }}>
                  [PLACEHOLDER: Show multiple examples of Jesus being worshiped - Matthew 2:11, 28:9, 28:17, 
                  John 9:38, Hebrews 1:6. Compare Greek word "proskuneo" (worship) vs "obeisance" in NWT.]
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Old Testament Prophecies */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#2f3f2f' }}>
              The Old Testament Prophesied That God Would Come in the Flesh
            </h3>

            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              The Messiah wasn't just prophesied as a man. He was prophesied as God Himself coming to save His people.
            </p>

            {/* Isaiah 9:6 */}
            <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}>
              <h4 className="text-xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
                Isaiah 9:6 - The Child Will Be Called "Mighty God"
              </h4>

              <div className="rounded p-4 mb-4" style={{ backgroundColor: '#fdfdf8' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>ESV:</p>
                <p className="text-lg italic" style={{ color: '#2f3f2f' }}>
                  "For to us a child is born, to us a son is given; and the government shall be upon his 
                  shoulder, and his name shall be called Wonderful Counselor, <strong>Mighty God, 
                  Everlasting Father</strong>, Prince of Peace."
                </p>
              </div>

              <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                This prophecy about the Messiah calls Him "Mighty God" and "Everlasting Father." Not "a mighty god." 
                Not "a representative of God." <strong>Mighty God.</strong>
              </p>

              <div className="rounded p-4" style={{ backgroundColor: '#e8ede8' }}>
                <p className="text-sm italic" style={{ color: '#577557' }}>
                  [PLACEHOLDER: Address Watchtower's claim that "mighty god" (lowercase) is different from 
                  "Almighty God." Show that Hebrew "El Gibbor" (Mighty God) is used exclusively of Jehovah 
                  elsewhere. Compare Isaiah 10:21 where same term refers to YHWH.]
                </p>
              </div>
            </div>

            {/* Isaiah 7:14 - Emmanuel */}
            <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}>
              <h4 className="text-xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
                Isaiah 7:14 & Matthew 1:23 - "God With Us"
              </h4>

              <div className="rounded p-4 mb-4" style={{ backgroundColor: '#fdfdf8' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>Matthew 1:23 (ESV):</p>
                <p className="text-lg italic" style={{ color: '#2f3f2f' }}>
                  "Behold, the virgin shall conceive and bear a son, and they shall call his name 
                  <strong>Immanuel</strong> (which means, <strong>God with us</strong>)."
                </p>
              </div>

              <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                Jesus's name literally means "God with us." Not "a god with us." Not "a representative of God 
                with us." <strong>GOD with us</strong>.
              </p>
            </div>

            {/* More OT Prophecies Placeholder */}
            <div className="rounded-xl p-6" style={{ backgroundColor: '#e8ede8', borderLeft: '4px solid #6b8e6b' }}>
              <p className="text-sm font-semibold mb-3" style={{ color: '#435943' }}>
                [PLACEHOLDER: Additional OT Prophecies to Add]
              </p>
              <ul className="space-y-2 text-sm" style={{ color: '#577557' }}>
                <li>• Isaiah 40:3 - "Prepare the way of the LORD" applied to Jesus</li>
                <li>• Psalm 45:6-7 - "Your throne, O God" quoted in Hebrews 1:8</li>
                <li>• Zechariah 12:10 - "They will look on me whom they have pierced"</li>
                <li>• Malachi 3:1 - "The Lord whom you seek will suddenly come to his temple"</li>
              </ul>
            </div>
          </div>

          {/* Section 6: What About... (Common Objections) */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#2f3f2f' }}>
              Common Objections (And Biblical Answers)
            </h3>

            <p className="mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              I know the objections. I used them myself for years. Let me address the most common ones.
            </p>

            {/* Objection 1: Father is Greater */}
            <div className="rounded-lg p-6 mb-4" style={{ backgroundColor: '#f6f8f6' }}>
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#577557' }}>
                "But Jesus said 'the Father is greater than I' (John 14:28)"
              </h4>
              <p className="mb-3 text-sm" style={{ color: '#2f3f2f', lineHeight: '1.6' }}>
                <strong>Answer:</strong> Greater in position during His earthly ministry, not greater in nature. 
                Jesus had voluntarily taken the form of a servant (Philippians 2:6-7). During His incarnation, 
                He was fully God but also fully man, and in His human state, the Father was greater in position. 
                But that doesn't mean Jesus isn't God by nature.
              </p>
              <div className="rounded p-3" style={{ backgroundColor: '#e8ede8' }}>
                <p className="text-xs italic" style={{ color: '#577557' }}>
                  [PLACEHOLDER: Expand with Philippians 2:5-11 showing Jesus's voluntary humiliation. 
                  Show context of John 14 - Jesus is about to return to His glory. Compare positional 
                  difference vs. nature difference.]
                </p>
              </div>
            </div>

            {/* Objection 2: Only Begotten */}
            <div className="rounded-lg p-6 mb-4" style={{ backgroundColor: '#f6f8f6' }}>
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#577557' }}>
                "But Jesus is the 'only-begotten' Son (John 3:16)"
              </h4>
              <p className="mb-3 text-sm" style={{ color: '#2f3f2f', lineHeight: '1.6' }}>
                <strong>Answer:</strong> "Only-begotten" (Greek: monogenes) means "unique" or "one of a kind," 
                not "first created." It refers to Jesus's unique relationship with the Father, not to Him being 
                created. The term emphasizes His uniqueness, not His origin.
              </p>
              <div className="rounded p-3" style={{ backgroundColor: '#e8ede8' }}>
                <p className="text-xs italic" style={{ color: '#577557' }}>
                  [PLACEHOLDER: Show Greek word "monogenes" means unique/one-of-a-kind, not created. 
                  Show Hebrews 11:17 where Isaac is called Abraham's "only-begotten" even though Abraham 
                  had other sons. Compare "prototokos" (firstborn) in Colossians 1:15 meaning preeminent, 
                  not first created.]
                </p>
              </div>
            </div>

            {/* Objection 3: Didn't Know the Day */}
            <div className="rounded-lg p-6 mb-4" style={{ backgroundColor: '#f6f8f6' }}>
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#577557' }}>
                "But Jesus didn't know the day or hour (Matthew 24:36)"
              </h4>
              <p className="mb-3 text-sm" style={{ color: '#2f3f2f', lineHeight: '1.6' }}>
                <strong>Answer:</strong> During His incarnation, Jesus voluntarily limited some of His divine 
                attributes while remaining fully God. This is called the "kenosis" (emptying) described in 
                Philippians 2:7. Jesus could be fully God while voluntarily not exercising certain divine 
                prerogatives during His earthly ministry.
              </p>
            </div>

            {/* Objection 4: God Cannot Die */}
            <div className="rounded-lg p-6 mb-4" style={{ backgroundColor: '#f6f8f6' }}>
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#577557' }}>
                "But God cannot die, and Jesus died"
              </h4>
              <p className="mb-3 text-sm" style={{ color: '#2f3f2f', lineHeight: '1.6' }}>
                <strong>Answer:</strong> God in His divine nature cannot die. But Jesus had two natures—fully 
                God and fully man. It was His human nature that died on the cross, while His divine nature 
                remained. This is the mystery and beauty of the incarnation: God took on human flesh so He 
                could die in our place.
              </p>
            </div>

            {/* More Objections Placeholder */}
            <div className="rounded-lg p-6" style={{ backgroundColor: '#e8ede8', borderLeft: '4px solid #6b8e6b' }}>
              <p className="text-sm font-semibold mb-3" style={{ color: '#435943' }}>
                [PLACEHOLDER: Additional Objections to Address]
              </p>
              <ul className="space-y-1 text-sm" style={{ color: '#577557' }}>
                <li>• "Trinity is a pagan doctrine/not in the Bible"</li>
                <li>• "No one has ever seen God" (John 1:18)</li>
                <li>• "Jesus prayed to God - God can't pray to Himself"</li>
                <li>• "Revelation 3:14 - Jesus is 'the beginning of God's creation'"</li>
              </ul>
            </div>
          </div>

          {/* Section 7: Why This Matters */}
          <div className="mb-16">
            <div className="rounded-xl p-8" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #d4af37' }}>
              <h3 className="text-2xl font-serif font-bold mb-6" style={{ color: '#2f3f2f' }}>
                Why Does This Matter So Much?
              </h3>

              <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                You might be thinking: "Why does it matter if Jesus is God or 'a god'? Can't we just focus on 
                following His teachings?"
              </p>

              <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                Here's why it matters:
              </p>

              <div className="space-y-4 mb-6">
                <div className="rounded p-4" style={{ backgroundColor: '#fdfdf8' }}>
                  <p className="font-semibold mb-2" style={{ color: '#435943' }}>
                    1. Your Salvation Depends on Who Jesus Is
                  </p>
                  <p className="text-sm" style={{ color: '#2f3f2f', lineHeight: '1.6' }}>
                    If Jesus is just a created being, His death couldn't pay for the sins of all humanity. 
                    Only an infinite sacrifice could pay for infinite sin. Only God Himself could accomplish 
                    this.
                  </p>
                </div>

                <div className="rounded p-4" style={{ backgroundColor: '#fdfdf8' }}>
                  <p className="font-semibold mb-2" style={{ color: '#435943' }}>
                    2. You're Either Worshiping God or Committing Idolatry
                  </p>
                  <p className="text-sm" style={{ color: '#2f3f2f', lineHeight: '1.6' }}>
                    If Jesus isn't God, then everyone who worships Him is committing idolatry—including the 
                    disciples who bowed before Him. But if He is God, then refusing to worship Him is rejecting God.
                  </p>
                </div>

                <div className="rounded p-4" style={{ backgroundColor: '#fdfdf8' }}>
                  <p className="font-semibold mb-2" style={{ color: '#435943' }}>
                    3. It Changes Everything About Your Relationship With God
                  </p>
                  <p className="text-sm" style={{ color: '#2f3f2f', lineHeight: '1.6' }}>
                    If Jesus is God, then when He says "Come to me" (Matthew 11:28), He's inviting you into 
                    direct relationship with God Himself. You don't need an organization as a mediator. Jesus 
                    Himself is the way (John 14:6).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="rounded-xl p-8 text-center" style={{ backgroundImage: 'linear-gradient(to bottom, #f6f8f6, #e8ede8)' }}>
            <h3 className="text-2xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
              Now You Know Who Jesus Really Is
            </h3>
            <p className="mb-8" style={{ color: '#577557', lineHeight: '1.7' }}>
              Not Michael the Archangel. Not "a god." Not a created being.<br />
              <strong>He is God in the flesh, who came to save you.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/holy-spirit" className="btn-primary inline-block">
                Next: The Holy Spirit Is a Person →
              </Link>
              <Link href="/nwt-problem" className="btn-secondary inline-block">
                ← Back to NWT Problem
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
