import Link from 'next/link';
import ScripturePassage from '../components/ScripturePassage';

export const metadata = {
  title: "Jesus' Claims to Equality with God | Who Is Jesus? | MyWitness",
  description:
    'Explore 8 passages where Jesus made claims that only God could rightfully make - biblical evidence for the deity of Christ.',
};

export default function EqualityClaimsPage() {
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
            Part 3 of 12
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: '#ffffff' }}
          >
            Jesus&apos; Claims to Equality with God
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{ color: '#d4af37' }}>
            8 Passages Where Jesus Made Claims Only God Could Make
          </p>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: '#e8ede8' }}
          >
            The Jews understood exactly what Jesus was claiming — that&apos;s why they
            tried to stone Him for blasphemy.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <ScripturePassage
            reference="John 8:58"
            title="'Before Abraham Was, I Am'"
            text="Jesus said to them, 'Truly, truly, I say to you, before Abraham was, I am.'"
            whyItMatters="Jesus uses the present tense 'I am' (ego eimi) rather than 'I was,' echoing God's self-revelation in Exodus 3:14 ('I AM WHO I AM'). The Jews understood this as a claim to deity — that's why they picked up stones to kill Him for blasphemy (v. 59)."
            nwtNote="The NWT renders this 'I have been' to obscure the connection to Exodus 3:14, but the Greek is clearly present tense (eimi), not perfect tense."
          />

          <ScripturePassage
            reference="John 10:30"
            title="'I and the Father Are One'"
            text="I and the Father are one."
            whyItMatters="The Jews understood this as a claim to deity and attempted to stone Jesus for 'blasphemy; and because You, being a man, make Yourself out to be God' (v. 33). Jesus did not correct their understanding."
          />

          <ScripturePassage
            reference="John 14:9"
            title="'Whoever Has Seen Me Has Seen the Father'"
            text="Jesus said to him, 'Have I been with you all so long and you have not come to know Me, Philip? He who has seen Me has seen the Father; how can you say, &quot;Show us the Father&quot;?'"
            whyItMatters="To see Jesus is to see God. This is possible only if Jesus shares the divine nature with the Father."
          />

          <ScripturePassage
            reference="John 5:18"
            title="Making Himself Equal with God"
            text="For this reason therefore the Jews were seeking all the more to kill Him, because He not only was breaking the Sabbath, but also was calling God His own Father, making Himself equal with God."
            whyItMatters="The Jews correctly understood Jesus' claim to be making Himself 'equal with God.' Jesus did not deny their understanding; He went on to expand on His equality with the Father (vv. 19-29)."
          />

          <ScripturePassage
            reference="John 5:23"
            title="Honor the Son as You Honor the Father"
            text="so that all will honor the Son even as they honor the Father. He who does not honor the Son does not honor the Father who sent Him."
            whyItMatters="Jesus demands the same honor that is due to God the Father. This would be blasphemous if Jesus were not Himself God."
          />

          <ScripturePassage
            reference="John 17:5"
            title="Glory with the Father Before the World Existed"
            text="Now, Father, glorify Me together with Yourself, with the glory which I had with You before the world was."
            whyItMatters="Jesus claims to have shared glory with the Father before creation. Yet Isaiah 42:8 says, 'I am Yahweh, that is My name; I will not give My glory to another.' Jesus possesses the Father's glory because He shares the Father's divine nature."
          />

          <ScripturePassage
            reference="Philippians 2:5-8"
            title="Existing in the Form of God"
            text="Have this way of thinking in yourselves which was also in Christ Jesus, who, although existing in the form of God, did not regard equality with God a thing to be grasped, but emptied Himself, taking the form of a slave, and being made in the likeness of men. Being found in appearance as a man, He humbled Himself by becoming obedient to the point of death, even death on a cross."
            whyItMatters="This passage (the 'Kenosis Hymn') is one of the most significant statements of Christ's deity. The word morphē ('form') refers to the essential nature, not mere outward appearance. Christ possessed equality with God but did not exploit it for His own advantage. The passage only makes sense if Christ pre-existed in a divine state before His incarnation."
            keyPoints={[
              "'Existing in the form of God' — The word morphē refers to the essential nature",
              "'Did not regard equality with God a thing to be grasped' — You cannot 'not grasp' something you don't already have",
              "'Emptied Himself' — Christ did not empty Himself of deity but of the outward expression of divine prerogatives",
              "'Taking the form of a slave' — The same word morphē is used — just as He truly possessed the nature of God, He truly took on the nature of a servant",
            ]}
          />

          <ScripturePassage
            reference="Mark 14:61-64"
            title="The High Priest's Charge of Blasphemy"
            text="But He kept silent and did not answer. Again the high priest was questioning Him, and saying to Him, 'Are You the Christ, the Son of the Blessed One?' And Jesus said, 'I am; and you shall see THE SON OF MAN SITTING AT THE RIGHT HAND OF POWER, and COMING WITH THE CLOUDS OF HEAVEN.' Tearing his clothes, the high priest said, 'What further need do we have of witnesses? You have heard the blasphemy; how does it seem to you?' And they all condemned Him to be deserving of death."
            whyItMatters="Jesus combined two Old Testament passages in His answer: Daniel 7:13 (the Son of Man coming with the clouds) and Psalm 110:1 (sitting at God's right hand). The high priest understood this as a claim to deity — hence 'blasphemy.' If Jesus were merely claiming to be a human Messiah, there would be no blasphemy. But Jesus was claiming to be the divine Son of Man of Daniel 7 who receives worship from all nations."
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
              What These Claims Prove
            </h3>
            <p
              className="text-lg mb-6"
              style={{ color: '#e8ede8', lineHeight: '1.8' }}
            >
              Jesus didn&apos;t leave His identity ambiguous. He claimed to eternally
              exist as &quot;I AM.&quot; He claimed to be one with the Father. He claimed to
              deserve equal honor with God. He claimed to have shared the Father&apos;s
              glory before creation. The Jewish leaders understood exactly what He was
              claiming — and they tried to kill Him for blasphemy. Either Jesus was
              a liar, a lunatic, or He was telling the truth: He is God.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/who-is-jesus/creator"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
              >
                Next: Jesus as Creator →
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
