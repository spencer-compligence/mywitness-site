import Link from 'next/link';
import ScripturePassage from '../components/ScripturePassage';

export const metadata = {
  title: 'Jesus Receives Worship | Who Is Jesus? | MyWitness',
  description:
    'God alone is to be worshiped. Angels refuse worship. Yet Jesus accepts worship. Explore 9 passages showing Jesus receiving worship.',
};

export default function WorshipPage() {
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
            Part 5 of 12
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: '#ffffff' }}
          >
            Jesus Receives Worship
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{ color: '#d4af37' }}>
            9 Passages Showing Worship Given to Jesus
          </p>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: '#e8ede8' }}
          >
            God alone is to be worshiped (Exodus 20:3-5; Matthew 4:10). Angels
            refuse worship (Revelation 19:10; 22:8-9). Yet Jesus accepts worship.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <ScripturePassage
            reference="Matthew 2:11"
            title="The Magi Worshiped Him"
            text="And after coming into the house they saw the Child with Mary His mother; and they fell to the ground and worshiped Him."
            whyItMatters="Even as an infant, Jesus received worship. The Greek word is proskyneō (προσκυνέω), the same word used for worship of God."
          />

          <ScripturePassage
            reference="Matthew 14:33"
            title="Those in the Boat Worshiped Him"
            text="And those who were in the boat worshiped Him, saying, 'You are certainly God's Son!'"
            whyItMatters="After Jesus walked on water and calmed the storm, the disciples worshiped Him. They recognized Him as God's Son and responded with worship."
          />

          <ScripturePassage
            reference="Matthew 28:9"
            title="They Took Hold of His Feet and Worshiped Him"
            text="And behold, Jesus met them and said, 'Rejoice!' And they came up and took hold of His feet and worshiped Him."
            whyItMatters="After the resurrection, the women worshiped Jesus. He did not refuse their worship."
          />

          <ScripturePassage
            reference="Matthew 28:17"
            title="When They Saw Him, They Worshiped Him"
            text="When they saw Him, they worshiped Him; but some were doubtful."
            whyItMatters="The risen Christ received worship from His disciples. This is appropriate only if He is God."
          />

          <ScripturePassage
            reference="Hebrews 1:6"
            title="Let All the Angels of God Worship Him"
            text="And when He again brings the firstborn into the world, He says, 'AND LET ALL THE ANGELS OF GOD WORSHIP HIM.'"
            whyItMatters="God the Father commands all angels to worship the Son. Angels are not to be worshiped (Revelation 19:10), and angels do not worship other angels. If angels worship Jesus, Jesus must be God."
            nwtNote="Earlier editions of the NWT used 'worship' here; later editions changed it to 'do obeisance' to obscure Jesus' deity."
          />

          <ScripturePassage
            reference="John 9:38"
            title="He Worshiped Jesus"
            text="And he said, 'Lord, I believe.' And he worshiped Him."
            whyItMatters="The man born blind, after being healed and learning that Jesus is the Son of Man, worshiped Him. Jesus accepted this worship."
          />

          <ScripturePassage
            reference="Revelation 5:13-14"
            title="Worship to the Lamb"
            text="And every created thing which is in heaven and on the earth and under the earth and on the sea, and all things in them, I heard saying, 'To Him who sits on the throne, and to the Lamb, be blessing and honor and glory and dominion forever and ever.' And the four living creatures kept saying, 'Amen.' And the elders fell down and worshiped."
            whyItMatters="The Lamb (Jesus) receives the same worship, blessing, honor, glory, and dominion as 'Him who sits on the throne' (the Father). All creation worships both equally. Note: 'every created thing' worships — Jesus is not among the created things."
          />

          <ScripturePassage
            reference="Acts 7:59-60"
            title="Stephen Prayed to Jesus"
            text="They went on stoning Stephen as he called on the Lord and said, 'Lord Jesus, receive my spirit!' Then falling on his knees, he cried out with a loud voice, 'Lord, do not hold this sin against them!' Having said this, he fell asleep."
            whyItMatters="Stephen prayed to Jesus as he was dying. This parallels Jesus' own prayer to the Father on the cross: 'Father, into Your hands I commit My spirit' (Luke 23:46). Prayer is an act of worship directed to God alone."
            keyPoints={[
              "Stephen 'called on' (Greek: epikaloumenon) the Lord — the same word used for calling on God in prayer (Romans 10:12-14; Acts 2:21)",
              "He addressed Jesus directly: 'Lord Jesus, receive my spirit'",
              "He asked Jesus to forgive his killers — a divine prerogative",
              "The Watchtower acknowledged this in February 1, 1959 (p. 96): 'Obviously, then, Stephen's words... were a prayer'",
            ]}
          />

          <ScripturePassage
            reference="2 Corinthians 12:8-9"
            title="Paul Prayed to the Lord Jesus"
            text="Concerning this I pleaded with the Lord three times that it might leave me. And He has said to me, 'My grace is sufficient for you, for power is perfected in weakness.'"
            whyItMatters="Paul prayed three times to 'the Lord' about his thorn in the flesh, and the Lord (Jesus) answered him personally. In context, 'the Lord' refers to Jesus (see 2 Corinthians 12:9-10, where Paul speaks of 'the power of Christ' and 'for Christ's sake'). This is another clear example of prayer to Jesus."
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
              What These Passages Prove
            </h3>
            <p
              className="text-lg mb-6"
              style={{ color: '#e8ede8', lineHeight: '1.8' }}
            >
              The Bible is clear: worship belongs to God alone. Angels refuse worship.
              Peter refused worship. Paul and Barnabas refused worship. Yet Jesus
              consistently accepts worship — from the magi, from His disciples, from
              the healed blind man, and from all creation in heaven. If Jesus is not
              God, then He violated the first commandment by accepting worship that
              belongs to God alone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/who-is-jesus/divine-attributes"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
              >
                Next: Divine Attributes →
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
