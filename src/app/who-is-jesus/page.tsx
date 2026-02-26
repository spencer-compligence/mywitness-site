import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScriptureAccordion from './components/ScriptureAccordion';
import ScripturePassage from './components/ScripturePassage';

export default function WhoIsJesusPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fdfdf8' }}>
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
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Who Is Jesus?
          </h1>
          <p
            className="text-xl md:text-2xl mb-4"
            style={{ color: '#577557', lineHeight: '1.6' }}
          >
            A Comprehensive Collection of Biblical Evidence for the Deity of Christ
          </p>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: '#2f3f2f', lineHeight: '1.6' }}
          >
            71 Scripture passages across 12 categories demonstrating that Jesus is God
          </p>
          <div
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: '#d4af37' }}
          />
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div
          className="rounded-xl p-8 mb-12"
          style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
        >
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
            This page presents the biblical evidence systematically, examining what Scripture actually
            says about Jesus&apos; identity. Each section below presents key passages with analysis.
            Visit the dedicated page for each section to see the complete collection of verses.
          </p>
          <p
            className="text-base italic"
            style={{ color: '#577557' }}
          >
            All Scripture quotations are from the Legacy Standard Bible (LSB) unless otherwise noted.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="mb-12">
          <h2
            className="text-2xl font-serif font-bold mb-6 text-center"
            style={{ color: '#2f3f2f' }}
          >
            Jump to Section
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { num: 1, title: 'OT Prophecies', href: '#part-1' },
              { num: 2, title: 'Direct Statements', href: '#part-2' },
              { num: 3, title: 'Equality Claims', href: '#part-3' },
              { num: 4, title: 'Creator', href: '#part-4' },
              { num: 5, title: 'Worship', href: '#part-5' },
              { num: 6, title: 'Divine Attributes', href: '#part-6' },
              { num: 7, title: 'Divine Actions', href: '#part-7' },
              { num: 8, title: 'Yahweh Passages', href: '#part-8' },
              { num: 9, title: 'Pre-existence', href: '#part-9' },
              { num: 10, title: 'I AM Statements', href: '#part-10' },
              { num: 11, title: 'Alpha & Omega', href: '#part-11' },
              { num: 12, title: 'Parallel Titles', href: '#part-12' },
            ].map((item) => (
              <a
                key={item.num}
                href={item.href}
                className="flex items-center gap-2 p-3 rounded-lg transition-all hover:scale-105"
                style={{ backgroundColor: '#f6f8f6', border: '1px solid #e8ede8' }}
              >
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
                >
                  {item.num}
                </span>
                <span className="text-sm font-medium" style={{ color: '#2f3f2f' }}>
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Part 1: Old Testament Prophecies */}
        <div id="part-1" className="scroll-mt-24">
          <ScriptureAccordion
            partNumber={1}
            title="Old Testament Prophecies"
            description="10 passages written centuries before Jesus' birth that point to a Messiah who would be God Himself"
            subPageLink="/who-is-jesus/old-testament-prophecies"
          >
            <ScripturePassage
              reference="Isaiah 9:6"
              title="The Child Who Is 'Mighty God'"
              text="For a child will be born to us, a son will be given to us; and the government will rest on His shoulders; and His name will be called Wonderful Counselor, Mighty God, Eternal Father, Prince of Peace."
              whyItMatters="The Hebrew term for 'Mighty God' is El Gibbor — the same title used for Yahweh Himself in Isaiah 10:21. A mere created being cannot be called 'Mighty God' or 'Eternal Father.' This prophecy declares that the coming Messiah would be God incarnate."
              nwtNote="The NWT renders this identically, making it difficult for JWs to explain how a created being could bear these divine titles."
            />
            <ScripturePassage
              reference="Micah 5:2"
              title="The Ruler Whose Origin Is 'From the Days of Eternity'"
              text="But as for you, Bethlehem Ephrathah, too little to be among the clans of Judah, from you One will go forth for Me to be ruler in Israel. His goings forth are from long ago, from the days of eternity."
              whyItMatters="The phrase 'from the days of eternity' indicates the Messiah's eternal pre-existence. Only God is eternal. This prophecy was fulfilled in Jesus' birth in Bethlehem (Matthew 2:1-6)."
            />
            <ScripturePassage
              reference="Zechariah 12:10"
              title="Yahweh Says 'They Will Look on Me Whom They Have Pierced'"
              text="And I will pour out on the house of David and on the inhabitants of Jerusalem the Spirit of grace and of supplication, so that they will look on Me whom they have pierced; and they will mourn for Him..."
              whyItMatters="Yahweh Himself is speaking ('I will pour out... they will look on Me'), yet He says He will be pierced. John 19:37 applies this prophecy directly to Jesus' crucifixion. Yahweh was pierced at His death."
            />
          </ScriptureAccordion>
        </div>

        {/* Part 2: Direct Statements */}
        <div id="part-2" className="scroll-mt-24">
          <ScriptureAccordion
            partNumber={2}
            title="Direct Statements That Jesus Is God"
            description="11 New Testament passages that explicitly identify Jesus as God"
            subPageLink="/who-is-jesus/direct-statements"
          >
            <ScripturePassage
              reference="John 1:1"
              title="The Word Was God"
              text="In the beginning was the Word, and the Word was with God, and the Word was God."
              whyItMatters="The Greek clearly states 'the Word was God' — not 'a god.' The absence of the article before theos indicates the Word's nature or essence. John is stating that the Word (Jesus) possessed the nature of God while being personally distinct from the Father."
              nwtNote="The NWT renders this 'the Word was a god,' creating polytheism and contradicting Isaiah 43:10 and 44:6."
            />
            <ScripturePassage
              reference="John 20:28"
              title="Thomas's Declaration: 'My Lord and My God!'"
              text="Thomas answered and said to Him, 'My Lord and my God!'"
              whyItMatters="Thomas directly addresses Jesus as 'my God' (Greek: ho theos mou). This is not an exclamation of surprise but a confession of faith — note 'said to Him.' Jesus does not correct Thomas; instead, He affirms his faith. The Greek includes the definite article, making this an unambiguous declaration of Jesus' full deity."
            />
            <ScripturePassage
              reference="Titus 2:13"
              title="Our Great God and Savior, Jesus Christ"
              text="...looking for the blessed hope and the appearing of the glory of our great God and Savior, Christ Jesus,"
              whyItMatters="Greek grammar (Granville Sharp's Rule) requires that 'God' and 'Savior' refer to the same person when connected by 'and' under one article. Paul explicitly calls Jesus 'our great God and Savior.'"
            />
          </ScriptureAccordion>
        </div>

        {/* Part 3: Equality Claims */}
        <div id="part-3" className="scroll-mt-24">
          <ScriptureAccordion
            partNumber={3}
            title="Jesus' Claims to Equality with God"
            description="8 passages recording Jesus making claims that only God could rightfully make"
            subPageLink="/who-is-jesus/equality-claims"
          >
            <ScripturePassage
              reference="John 8:58"
              title="'Before Abraham Was, I Am'"
              text="Jesus said to them, 'Truly, truly, I say to you, before Abraham was, I am.'"
              whyItMatters="Jesus uses the present tense 'I am' (ego eimi) rather than 'I was,' echoing God's self-revelation in Exodus 3:14. The Jews understood this as a claim to deity — that's why they picked up stones to kill Him for blasphemy."
              nwtNote="The NWT renders this 'I have been' to obscure the connection to Exodus 3:14, but the Greek is clearly present tense."
            />
            <ScripturePassage
              reference="John 10:30"
              title="'I and the Father Are One'"
              text="I and the Father are one."
              whyItMatters="The Jews understood this as a claim to deity and attempted to stone Jesus for 'blasphemy; and because You, being a man, make Yourself out to be God' (v. 33). Jesus did not correct their understanding."
            />
            <ScripturePassage
              reference="John 5:18"
              title="Making Himself Equal with God"
              text="For this reason therefore the Jews were seeking all the more to kill Him, because He not only was breaking the Sabbath, but also was calling God His own Father, making Himself equal with God."
              whyItMatters="The Jews correctly understood Jesus' claim to be making Himself 'equal with God.' Jesus did not deny their understanding; He went on to expand on His equality with the Father."
            />
          </ScriptureAccordion>
        </div>

        {/* Part 4: Creator */}
        <div id="part-4" className="scroll-mt-24">
          <ScriptureAccordion
            partNumber={4}
            title="Jesus as Creator"
            description="4 passages showing that Scripture reserves the work of creation for God alone, yet consistently attributes it to Jesus"
            subPageLink="/who-is-jesus/creator"
          >
            <ScripturePassage
              reference="John 1:3"
              title="All Things Came Into Being Through Him"
              text="All things came into being through Him, and apart from Him nothing came into being that has come into being."
              whyItMatters="'All things' without exception were created through Christ. If all created things came through Him, then He Himself cannot be a created thing. 'Apart from Him nothing came into being' — this is absolute and allows no exceptions."
            />
            <ScripturePassage
              reference="Colossians 1:16-17"
              title="By Him All Things Were Created"
              text="For by Him all things were created, both in the heavens and on earth, visible and invisible, whether thrones or dominions or rulers or authorities—all things have been created through Him and for Him. He is before all things, and in Him all things hold together."
              whyItMatters="All things in heaven and on earth — including angelic thrones and dominions — were created by Him, through Him, and for Him. If Jesus created all angelic beings, He cannot Himself be an angel."
              nwtNote="The NWT inserts '[other]' four times in this passage. This word does not appear in the Greek text."
            />
          </ScriptureAccordion>
        </div>

        {/* Part 5: Worship */}
        <div id="part-5" className="scroll-mt-24">
          <ScriptureAccordion
            partNumber={5}
            title="Jesus Receives Worship"
            description="9 passages showing that God alone is to be worshiped, yet Jesus accepts worship"
            subPageLink="/who-is-jesus/worship"
          >
            <ScripturePassage
              reference="Hebrews 1:6"
              title="Let All the Angels of God Worship Him"
              text="And when He again brings the firstborn into the world, He says, 'AND LET ALL THE ANGELS OF GOD WORSHIP HIM.'"
              whyItMatters="God the Father commands all angels to worship the Son. Angels are not to be worshiped (Revelation 19:10), and angels do not worship other angels. If angels worship Jesus, Jesus must be God."
              nwtNote="Earlier NWT editions used 'worship' here; later editions changed it to 'do obeisance' to obscure Jesus' deity."
            />
            <ScripturePassage
              reference="Acts 7:59-60"
              title="Stephen Prayed to Jesus"
              text="They went on stoning Stephen as he called on the Lord and said, 'Lord Jesus, receive my spirit!' Then falling on his knees, he cried out with a loud voice, 'Lord, do not hold this sin against them!'"
              whyItMatters="Stephen prayed to Jesus as he was dying. He 'called on' (Greek: epikaloumenon) the Lord — the same word used for calling on God in prayer. Prayer is an act of worship directed to God alone."
            />
            <ScripturePassage
              reference="Revelation 5:13-14"
              title="Worship to the Lamb"
              text="And every created thing which is in heaven and on the earth and under the earth and on the sea, and all things in them, I heard saying, 'To Him who sits on the throne, and to the Lamb, be blessing and honor and glory and dominion forever and ever.'"
              whyItMatters="The Lamb (Jesus) receives the same worship as the Father. All creation worships both equally. Note: 'every created thing' worships — Jesus is not among the created things."
            />
          </ScriptureAccordion>
        </div>

        {/* Part 6: Divine Attributes */}
        <div id="part-6" className="scroll-mt-24">
          <ScriptureAccordion
            partNumber={6}
            title="Jesus Has Divine Attributes"
            description="8 passages showing that only God possesses these attributes, yet Scripture ascribes them to Jesus"
            subPageLink="/who-is-jesus/divine-attributes"
          >
            <ScripturePassage
              reference="Matthew 28:20"
              title="Omnipresence"
              text="...and behold, I am with you always, even to the end of the age."
              whyItMatters="Jesus promises to be with all believers everywhere, always. Only an omnipresent Being can make this promise."
            />
            <ScripturePassage
              reference="John 21:17"
              title="Omniscience"
              text="He said to him the third time, 'Simon, son of John, do you love Me?' Peter was grieved because He said to him the third time, 'Do you love Me?' And he said to Him, 'Lord, You know all things; You know that I love You.'"
              whyItMatters="Peter affirms that Jesus 'knows all things.' Only God is omniscient."
            />
            <ScripturePassage
              reference="Hebrews 13:8"
              title="Immutability"
              text="Jesus Christ is the same yesterday and today and forever."
              whyItMatters="Unchangeableness is a divine attribute (Malachi 3:6). Jesus, unlike created beings, does not change."
            />
          </ScriptureAccordion>
        </div>

        {/* Part 7: Divine Actions */}
        <div id="part-7" className="scroll-mt-24">
          <ScriptureAccordion
            partNumber={7}
            title="Jesus Does What Only God Can Do"
            description="5 passages showing Jesus performing acts that only God can perform"
            subPageLink="/who-is-jesus/divine-actions"
          >
            <ScripturePassage
              reference="Mark 2:5-7"
              title="Jesus Forgives Sins"
              text="And Jesus seeing their faith said to the paralytic, 'Son, your sins are forgiven.' But some of the scribes were sitting there and reasoning in their hearts, 'Why does this man speak that way? He is blaspheming; who can forgive sins but God alone?'"
              whyItMatters="The scribes were correct: only God can forgive sins against God. Jesus demonstrated His authority to forgive by healing the paralytic, thus proving His deity."
            />
            <ScripturePassage
              reference="John 5:21"
              title="Jesus Gives Life"
              text="For just as the Father raises the dead and gives them life, even so the Son also gives life to whom He wishes."
              whyItMatters="Giving life is God's prerogative. Jesus gives life 'to whom He wishes' — exercising divine sovereignty."
            />
            <ScripturePassage
              reference="John 10:28"
              title="Jesus Gives Eternal Life"
              text="...and I give eternal life to them, and they will never perish; and no one will snatch them out of My hand."
              whyItMatters="Only God can give eternal life. Jesus claims to give it directly."
            />
          </ScriptureAccordion>
        </div>

        {/* Part 8: Yahweh Passages */}
        <div id="part-8" className="scroll-mt-24">
          <ScriptureAccordion
            partNumber={8}
            title="Old Testament Yahweh Passages Applied to Jesus"
            description="5 passages where NT authors take passages about Yahweh and apply them to Jesus"
            subPageLink="/who-is-jesus/yahweh-passages"
          >
            <ScripturePassage
              reference="Isaiah 40:3 → Matthew 3:3"
              title="Prepare the Way for Yahweh"
              text="A voice is calling, 'Clear the way for Yahweh in the wilderness; make smooth in the desert a highway for our God.'"
              whyItMatters="All four Gospels apply this passage to John the Baptist preparing the way for Jesus. The one whose way John prepared is explicitly identified as 'Yahweh' and 'our God' in the original prophecy. Jesus is Yahweh."
            />
            <ScripturePassage
              reference="Isaiah 45:23 → Philippians 2:10-11"
              title="Every Knee Will Bow"
              text="I have sworn by Myself... that to Me every knee will bow, every tongue will swear allegiance."
              whyItMatters="What Yahweh declared would be done to Him — every knee bowing, every tongue confessing — is applied to Jesus in Philippians. Jesus receives what belongs to Yahweh alone."
            />
            <ScripturePassage
              reference="Isaiah 6:1-10 → John 12:41"
              title="Isaiah Saw His Glory"
              text="In the year of King Uzziah's death I saw the Lord sitting on a throne, lofty and exalted... for my eyes have seen the King, Yahweh of hosts."
              whyItMatters="John 12:41 states that Isaiah 'saw His glory' — referring to Jesus. When Isaiah saw Yahweh of hosts high and lifted up, he was seeing the pre-incarnate Christ."
            />
          </ScriptureAccordion>
        </div>

        {/* Part 9: Pre-existence */}
        <div id="part-9" className="scroll-mt-24">
          <ScriptureAccordion
            partNumber={9}
            title="Christ's Pre-existence and Activity in the Old Testament"
            description="3 passages demonstrating Jesus existed before His incarnation and was active in OT history"
            subPageLink="/who-is-jesus/pre-existence"
          >
            <ScripturePassage
              reference="1 Corinthians 10:4"
              title="The Rock Was Christ"
              text="...and all drank the same spiritual drink, for they were drinking from a spiritual rock which followed them; and the rock was Christ."
              whyItMatters="Paul identifies Christ as the Rock that sustained Israel in the wilderness. Throughout the Old Testament, Yahweh is called 'the Rock.' Paul is identifying Jesus with Yahweh."
            />
            <ScripturePassage
              reference="Jude 5"
              title="Jesus Delivered Israel from Egypt"
              text="Now I want to remind you, although you once fully knew it, that Jesus, who saved a people out of the land of Egypt, afterward destroyed those who did not believe."
              translation="LSB (following earliest manuscripts)"
              whyItMatters="The earliest Greek manuscripts read 'Jesus' rather than 'Lord.' Jesus pre-existed and was the divine agent of Israel's salvation in the Exodus."
            />
          </ScriptureAccordion>
        </div>

        {/* Part 10: I AM Statements */}
        <div id="part-10" className="scroll-mt-24">
          <ScriptureAccordion
            partNumber={10}
            title="The 'I AM' Statements"
            description="5 passages where Jesus' use of 'I AM' echoes God's self-revelation in Exodus 3:14"
            subPageLink="/who-is-jesus/i-am-statements"
          >
            <ScripturePassage
              reference="John 8:24"
              title="'Unless You Believe That I Am'"
              text="Therefore I said to you that you will die in your sins; for unless you believe that I am, you will die in your sins."
              whyItMatters="Jesus makes belief in His 'I AM' identity essential for salvation. This echoes the divine name from Exodus 3:14."
            />
            <ScripturePassage
              reference="John 18:5-6"
              title="'I Am' and They Fell to the Ground"
              text="They answered Him, 'Jesus the Nazarene.' He said to them, 'I am.' ...So when He said to them, 'I am,' they drew back and fell to the ground."
              whyItMatters="When Jesus spoke 'I am,' the soldiers and officials fell backward to the ground. This was a supernatural response to the divine name."
            />
          </ScriptureAccordion>
        </div>

        {/* Part 11: Alpha and Omega */}
        <div id="part-11" className="scroll-mt-24">
          <ScriptureAccordion
            partNumber={11}
            title="The Alpha and Omega"
            description="3 passages where Jesus claims titles that belong exclusively to Yahweh"
            subPageLink="/who-is-jesus/alpha-omega"
          >
            <ScripturePassage
              reference="Revelation 1:17-18"
              title="The First and the Last"
              text="When I saw Him, I fell at His feet like a dead man. And He placed His right hand on me, saying, 'Do not be afraid; I am the first and the last, and the living One; and I was dead, and behold, I am alive forevermore, and I have the keys of death and of Hades.'"
              whyItMatters="Jesus is 'the first and the last' — the same title Yahweh claims in Isaiah 44:6. 'I was dead and am alive' identifies the speaker as the crucified and risen Christ."
            />
            <ScripturePassage
              reference="Revelation 22:12-13"
              title="Alpha and Omega"
              text="'Behold, I am coming quickly, and My reward is with Me, to render to every man according to what he has done. I am the Alpha and the Omega, the first and the last, the beginning and the end.'"
              whyItMatters="The speaker is clearly Jesus (v. 16: 'I, Jesus'). Jesus claims titles that belong to Yahweh alone (Isaiah 44:6; 48:12)."
            />
          </ScriptureAccordion>
        </div>

        {/* Part 12: Parallel Titles */}
        <div id="part-12" className="scroll-mt-24">
          <ScriptureAccordion
            partNumber={12}
            title="Parallel Titles — Yahweh and Jesus"
            description="A comprehensive chart showing how titles exclusive to Yahweh are applied to Jesus"
            subPageLink="/who-is-jesus/parallel-titles"
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr style={{ backgroundColor: '#577557' }}>
                    <th className="p-4 text-white font-semibold">Title/Role</th>
                    <th className="p-4 text-white font-semibold">Yahweh (OT)</th>
                    <th className="p-4 text-white font-semibold">Jesus (NT)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { title: 'Savior', ot: 'Isaiah 43:11', nt: 'John 4:42; Titus 2:13' },
                    { title: 'First and Last', ot: 'Isaiah 44:6; 48:12', nt: 'Revelation 1:17; 22:13' },
                    { title: 'Alpha and Omega', ot: 'Revelation 1:8', nt: 'Revelation 22:13' },
                    { title: 'Creator', ot: 'Genesis 1:1; Isaiah 44:24', nt: 'John 1:3; Colossians 1:16' },
                    { title: 'Judge of all', ot: 'Genesis 18:25; Psalm 50:6', nt: 'John 5:22; 2 Timothy 4:1' },
                    { title: 'Shepherd', ot: 'Psalm 23:1; 100:3', nt: 'John 10:11, 14' },
                    { title: 'Rock', ot: 'Deuteronomy 32:4; Psalm 18:2', nt: '1 Corinthians 10:4' },
                    { title: 'Forgives sin', ot: 'Isaiah 43:25; Jeremiah 31:34', nt: 'Mark 2:5-7; Luke 7:48' },
                  ].map((row, index) => (
                    <tr
                      key={row.title}
                      style={{
                        backgroundColor: index % 2 === 0 ? '#f6f8f6' : '#ffffff',
                      }}
                    >
                      <td className="p-4 font-semibold" style={{ color: '#2f3f2f' }}>
                        {row.title}
                      </td>
                      <td className="p-4" style={{ color: '#577557' }}>
                        {row.ot}
                      </td>
                      <td className="p-4" style={{ color: '#577557' }}>
                        {row.nt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center mt-4 text-base" style={{ color: '#666666' }}>
              Showing 8 of 17 parallel titles. View the full chart on the dedicated page.
            </p>
          </ScriptureAccordion>
        </div>

        {/* Summary Section */}
        <div
          className="rounded-xl p-8 mt-12 mb-12"
          style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #d4af37' }}
        >
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Summary
          </h2>
          <p
            className="text-lg mb-4"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            The biblical evidence for Jesus&apos; deity is comprehensive and overwhelming:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Old Testament prophecies identify the Messiah as God Himself',
              'Direct NT statements call Jesus "God" and "our great God and Savior"',
              'Jesus claimed equality with the Father and accepted worship',
              'Jesus is the Creator of all things',
              'Jesus receives worship from angels, disciples, and all creation',
              'Jesus possesses divine attributes — omnipresence, omniscience, immutability',
              'Jesus does what only God can do — forgives sins, gives life, judges all',
              'OT Yahweh passages are applied directly to Jesus',
              'Jesus uses "I AM" echoing God\'s self-revelation to Moses',
              'Jesus shares titles exclusive to Yahweh — First and Last, Alpha and Omega',
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
                >
                  {index + 1}
                </span>
                <p style={{ color: '#2f3f2f' }}>{point}</p>
              </div>
            ))}
          </div>
          <p
            className="text-lg font-semibold mt-6"
            style={{ color: '#577557' }}
          >
            The question is not whether the Bible teaches that Jesus is God — it does, abundantly
            and clearly. The question is whether we will accept this testimony.
          </p>
        </div>

        {/* Next Step CTA */}
        <div
          className="rounded-xl p-8"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #fff4e6, #f6f8f6)',
            borderLeft: '4px solid #d4af37',
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
              But why? What difference does it make whether Jesus is God or &ldquo;a god&rdquo;?
            </p>
            <div className="text-center pt-4">
              <Link
                href="/why-it-matters"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: '#577557',
                  color: '#ffffff',
                  boxShadow: '0 4px 12px rgba(87, 117, 87, 0.3)',
                }}
              >
                Continue to: Why Does It Matter That Jesus Is God? →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
