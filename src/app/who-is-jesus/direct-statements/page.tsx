import Link from 'next/link';
import ScripturePassage from '../components/ScripturePassage';

export const metadata = {
  title: 'Direct Statements That Jesus Is God | Who Is Jesus? | MyWitness',
  description:
    'Explore 11 New Testament passages that explicitly identify Jesus as God - clear biblical evidence for the deity of Christ.',
};

export default function DirectStatementsPage() {
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
            Part 2 of 12
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: '#ffffff' }}
          >
            Direct Statements That Jesus Is God
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{ color: '#d4af37' }}>
            11 Passages That Explicitly Identify Jesus as God
          </p>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: '#e8ede8' }}
          >
            These New Testament passages leave no room for ambiguity — they directly
            call Jesus &quot;God,&quot; &quot;the true God,&quot; and &quot;our great God and Savior.&quot;
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <ScripturePassage
            reference="John 1:1"
            title="The Word Was God"
            text="In the beginning was the Word, and the Word was with God, and the Word was God."
            whyItMatters="The Greek (καὶ θεὸς ἦν ὁ λόγος) clearly states 'the Word was God' — not 'a god' as the NWT renders it. The absence of the article before theos does not indicate a lesser deity; it indicates the Word's nature or essence. John is stating that the Word (Jesus) possessed the nature of God while being personally distinct from the Father ('with God')."
            nwtNote="The NWT renders this 'the Word was a god,' creating polytheism and contradicting Isaiah 43:10 ('Before Me there was no God formed, and there will be none after Me') and Isaiah 44:6 ('there is no God besides Me')."
            keyPoints={[
              "John 1:18 in the LSB reads: 'the only begotten God who is in the bosom of the Father' — Jesus is called 'the only begotten God'",
            ]}
          />

          <ScripturePassage
            reference="John 1:14"
            title="The Word Became Flesh"
            text="And the Word became flesh, and dwelt among us, and we beheld His glory, glory as of the only begotten from the Father, full of grace and truth."
            whyItMatters="The Word who 'was God' (v. 1) became flesh. This is the incarnation — God taking on human nature while remaining fully divine."
          />

          <ScripturePassage
            reference="John 20:28"
            title="Thomas's Declaration: 'My Lord and My God!'"
            text="Thomas answered and said to Him, 'My Lord and my God!'"
            whyItMatters="Thomas directly addresses Jesus as 'my God' (Greek: ὁ θεός μου). This is not an exclamation of surprise but a confession of faith — note 'said to Him.' Jesus does not correct Thomas; instead, He affirms his faith (v. 29). The Greek includes the definite article (ho theos), making this an unambiguous declaration of Jesus' full deity."
          />

          <ScripturePassage
            reference="Titus 2:13"
            title="Our Great God and Savior, Jesus Christ"
            text="looking for the blessed hope and the appearing of the glory of our great God and Savior, Christ Jesus,"
            whyItMatters="Greek grammar (Granville Sharp's Rule) requires that 'God' and 'Savior' refer to the same person when connected by 'and' (kai) under one article. Paul explicitly calls Jesus 'our great God and Savior.' This is one of the clearest statements of Jesus' deity in the New Testament."
            keyPoints={[
              "Granville Sharp's Rule: When two singular nouns of the same case are connected by 'and' and only the first noun has the article, both nouns refer to the same person",
              "Here: 'the great God and Savior' = one person = Christ Jesus",
            ]}
          />

          <ScripturePassage
            reference="Romans 9:5"
            title="Christ, Who Is God Over All"
            text="whose are the fathers, and from whom is the Christ according to the flesh, who is over all, God blessed forever. Amen."
            whyItMatters="Paul identifies Christ as 'God blessed forever.' The natural reading of the Greek syntax supports applying 'God over all' to Christ, not as a separate doxology to the Father."
          />

          <ScripturePassage
            reference="Hebrews 1:8"
            title="The Father Calls the Son 'God'"
            text="But of the Son He says, 'YOUR THRONE, O GOD, IS FOREVER AND EVER, AND THE SCEPTER OF UPRIGHTNESS IS THE SCEPTER OF YOUR KINGDOM.'"
            whyItMatters="The Father directly addresses the Son as 'God' (Greek: ὁ θεός). This is quoted from Psalm 45:6. The context of Hebrews 1 is demonstrating the Son's superiority to angels — a strange argument to make if Jesus were merely a created angel."
          />

          <ScripturePassage
            reference="Hebrews 1:3"
            title="The Exact Representation of God's Nature"
            text="And He is the radiance of His glory and the exact representation of His nature, and upholds all things by the word of His power. When He had made purification of sins, He sat down at the right hand of the Majesty on high,"
            whyItMatters="Three divine descriptions are given: (1) 'Radiance of His glory' — Jesus is the outshining of God's glory, not a reflection but the actual emanation of divine glory. (2) 'Exact representation of His nature' — Jesus perfectly represents the very being/substance of God. The word charaktēr refers to an exact imprint. (3) 'Upholds all things by the word of His power' — Jesus sustains the entire universe by His powerful word."
          />

          <ScripturePassage
            reference="2 Peter 1:1"
            title="Our God and Savior Jesus Christ"
            text="Simon Peter, a slave and apostle of Jesus Christ, to those who have received a faith of the same kind as ours, by the righteousness of our God and Savior, Jesus Christ:"
            whyItMatters="Like Titus 2:13, this verse applies both 'God' and 'Savior' to Jesus Christ using the single-article construction (Granville Sharp's Rule)."
          />

          <ScripturePassage
            reference="Colossians 2:9"
            title="The Fullness of Deity Dwells in Christ Bodily"
            text="For in Him all the fullness of Deity dwells in bodily form,"
            whyItMatters="The Greek word for 'Deity' here is theotētos (θεότητος), which means the very essence of God — not merely divine qualities but the fullness of what it means to be God. All that God is dwells in Jesus in bodily form."
          />

          <ScripturePassage
            reference="1 John 5:20"
            title="This One Is the True God"
            text="And we know that the Son of God has come, and has given us understanding so that we may know Him who is true; and we are in Him who is true, in His Son Jesus Christ. This One is the true God and eternal life."
            whyItMatters="The nearest antecedent to 'This One' (houtos) is 'His Son Jesus Christ.' John identifies Jesus as 'the true God and eternal life.'"
          />

          <ScripturePassage
            reference="Acts 20:28"
            title="The Church of God, Purchased with His Own Blood"
            text="Be on guard for yourselves and for all the flock, among which the Holy Spirit has made you overseers, to shepherd the church of God which He purchased with His own blood."
            whyItMatters="Paul speaks of 'the church of God' which was purchased with 'His own blood.' God does not have blood unless God became man. This identifies Jesus — whose blood was shed — as God."
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
              The New Testament authors did not dance around the issue. They directly,
              explicitly, and repeatedly called Jesus &quot;God.&quot; Thomas called Him &quot;my God.&quot;
              Paul called Him &quot;our great God and Savior.&quot; John called Him &quot;the true God.&quot;
              The Father Himself called Him &quot;God.&quot; These are not ambiguous titles that
              require interpretation — they are clear declarations of deity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/who-is-jesus/equality-claims"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
              >
                Next: Equality Claims →
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
