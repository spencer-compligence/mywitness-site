import ScriptureWarning from './components/ScriptureWarning';
import Hebrews1Evidence from './components/Hebrews1Evidence';
import Isaiah96Evidence from './components/Isaiah96Evidence';
import WorshipEvidence from './components/WorshipEvidence';
import John858Evidence from './components/John858Evidence';
import John11Evidence from './components/John11Evidence';
import Colossians1Evidence from './components/Colossians1Evidence';
import RevelationAlphaOmegaEvidence from './components/RevelationAlphaOmegaEvidence';
import ThomasDeclarationEvidence from './components/ThomasDeclarationEvidence';

export default function WhoIsJesusPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fdfdf8' }}>
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
            className="text-xl md:text-2xl mb-8"
            style={{ color: '#577557', lineHeight: '1.6' }}
          >
            Evidence from Scripture and the Watchtower's Own Publications
          </p>
          <div 
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: '#d4af37' }}
          />
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div 
          className="rounded-xl p-8 mb-12"
          style={{ 
            backgroundColor: '#f6f8f6',
            borderLeft: '4px solid #577557'
          }}
        >
          <h2 
            className="text-3xl font-serif font-semibold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            A Personal Journey
          </h2>
          <div className="space-y-4" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
            <p>
              I was raised as a Jehovah's Witness. For decades, I believed what I was taught: 
              that Jesus was Michael the Archangel, a created being, and definitely not God. 
              I was taught to pray <em>through</em> Jesus to Jehovah — never <em>to</em> Jesus directly.
            </p>
            <p>
              But when I actually started reading the Bible for myself—not through the lens of 
              Watchtower publications—I discovered something that shocked me: the evidence for 
              Jesus's deity is overwhelming and comes from every part of Scripture.
            </p>
            <p>
              The day everything changed, I did something I had never done in my 32 years of life. 
              I prayed <em>to</em> Jesus. Not through Him — <em>to</em> Him. I asked Him to show me 
              if what I had learned was true, to show me that He was real and actually God. 
              I was terrified. I thought I might be committing blasphemy.
            </p>
            <p>
              The instant I said "Amen" in my head, the phone on my desk rang.
            </p>
            <p>
              When I answered, a sound played for about fifteen to twenty seconds — something 
              like music, but as a career IT professional, I knew it wasn't a modem or fax machine. 
              It was otherworldly. Then it hung up.
            </p>
            <p>
              I tried calling the number back and received a recording: "This line is not in service." 
              When I performed a reverse lookup, I discovered that the phone number had been registered 
              with the phone company but never activated — on my 18th birthday, over a decade earlier.
            </p>
            <p className="font-semibold" style={{ color: '#577557' }}>
              Jesus answered. He is real. He is God. And He wants you to know Him.
            </p>
            <p>
              This page presents the evidence I discovered, using the Watchtower's own Kingdom Interlinear 
              Translation and other primary sources. My goal isn't to attack anyone, but to share 
              what I found when I let the Bible speak for itself.
            </p>
          </div>
        </div>

        {/* Scripture Warning Section */}
        <section className="mb-16">
          <ScriptureWarning />
        </section>

        {/* Key Evidence Sections */}
        <div className="space-y-16">
          {/* Section 1: Worship */}
          <section>
            <div className="mb-8">
              <h2 
                className="text-4xl font-serif font-bold mb-4"
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
          <section>
            <div className="mb-8">
              <h2 
                className="text-4xl font-serif font-bold mb-4"
                style={{ color: '#2f3f2f' }}
              >
                Part 2: Hebrews 1
              </h2>
              <p 
                className="text-lg"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                The Father calls the Son "God" and "Lord," applies YHWH's words to Him, 
                and commands angels to worship Him.
              </p>
            </div>
            <Hebrews1Evidence />
          </section>

          {/* Section 3: Isaiah 9:6 */}
          <section>
            <div className="mb-8">
              <h2 
                className="text-4xl font-serif font-bold mb-4"
                style={{ color: '#2f3f2f' }}
              >
                Part 3: Isaiah 9:6
              </h2>
              <p 
                className="text-lg"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                700 years before Jesus was born, Isaiah prophesied that the Messiah 
                would be called "Mighty God" and "Everlasting Father."
              </p>
            </div>
            <Isaiah96Evidence />
          </section>

          {/* Section 4: John 8:58 */}
          <section>
            <div className="mb-8">
              <h2 
                className="text-4xl font-serif font-bold mb-4"
                style={{ color: '#2f3f2f' }}
              >
                Part 4: John 8:58
              </h2>
              <p 
                className="text-lg"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                Jesus claims the divine name "I AM" from Exodus 3:14. 
                The Watchtower's own Kingdom Interlinear exposes their mistranslation.
              </p>
            </div>
            <John858Evidence />
          </section>

          {/* Section 5: John 1:1 */}
          <section>
            <div className="mb-8">
              <h2 
                className="text-4xl font-serif font-bold mb-4"
                style={{ color: '#2f3f2f' }}
              >
                Part 5: John 1:1
              </h2>
              <p 
                className="text-lg"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                The most famous NWT mistranslation — "a god" instead of "God." 
                Their own "article rule" collapses under scrutiny.
              </p>
            </div>
            <John11Evidence />
          </section>

          {/* Section 6: Colossians 1 */}
          <section>
            <div className="mb-8">
              <h2 
                className="text-4xl font-serif font-bold mb-4"
                style={{ color: '#2f3f2f' }}
              >
                Part 6: Colossians 1:15-17
              </h2>
              <p 
                className="text-lg"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                The NWT adds the word "[other]" four times to make Jesus a created being. 
                But it's not in the Greek text.
              </p>
            </div>
            <Colossians1Evidence />
          </section>

          {/* Section 7: Revelation */}
          <section>
            <div className="mb-8">
              <h2 
                className="text-4xl font-serif font-bold mb-4"
                style={{ color: '#2f3f2f' }}
              >
                Part 7: Alpha and Omega
              </h2>
              <p 
                className="text-lg"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                In Revelation, both the Father and Jesus claim the title "Alpha and Omega"—
                a title that belongs to God alone.
              </p>
            </div>
            <RevelationAlphaOmegaEvidence />
          </section>

          {/* Section 8: Thomas's Declaration */}
          <section>
            <div className="mb-8">
              <h2 
                className="text-4xl font-serif font-bold mb-4"
                style={{ color: '#2f3f2f' }}
              >
                Part 8: "My Lord and My God"
              </h2>
              <p 
                className="text-lg"
                style={{ color: '#577557', lineHeight: '1.7' }}
              >
                Thomas calls Jesus "my God" directly to His face. 
                Jesus accepts this declaration and blesses Thomas for believing it.
              </p>
            </div>
            <ThomasDeclarationEvidence />
          </section>
        </div>

        {/* Conclusion */}
        <div 
          className="rounded-xl p-8 mt-16"
          style={{ 
            backgroundImage: 'linear-gradient(to bottom, #fff4e6, #f6f8f6)',
            borderLeft: '4px solid #d4af37'
          }}
        >
          <h2 
            className="text-3xl font-serif font-semibold mb-6 text-center"
            style={{ color: '#2f3f2f' }}
          >
            The Question Before You
          </h2>
          <div className="space-y-4" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
            <p>
              The evidence presented here comes from Scripture itself and from the Watchtower's 
              own publications. This isn't about winning an argument—it's about discovering who 
              Jesus really is.
            </p>
            <p>
              I understand how difficult it is to question what you've been taught your entire life. 
              I've been there. But I encourage you to do what I did: read these passages for yourself. 
              Look up the Greek words. Check the Kingdom Interlinear.
            </p>
            <p className="text-xl font-semibold text-center pt-4" style={{ color: '#577557' }}>
              Who do <em>you</em> say that Jesus is?
            </p>
          </div>
        </div>
      </div>

      {/* Footer Spacing */}
      <div className="h-20" />
    </div>
  );
}