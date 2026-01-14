import Link from 'next/link';
import ScripturePassage from '../components/ScripturePassage';

export const metadata = {
  title: 'Jesus Does What Only God Can Do | Who Is Jesus? | MyWitness',
  description:
    'Forgiving sins, giving life, judging all humanity — these are things only God can do, yet Jesus does them all.',
};

export default function DivineActionsPage() {
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
            Part 7 of 12
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: '#ffffff' }}
          >
            Jesus Does What Only God Can Do
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{ color: '#d4af37' }}>
            5 Divine Actions Performed by Jesus
          </p>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: '#e8ede8' }}
          >
            Forgiving sins, giving life, judging humanity, granting eternal life —
            these are things only God can do.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <ScripturePassage
            reference="Mark 2:5-7"
            title="Jesus Forgives Sins"
            text="And Jesus seeing their faith said to the paralytic, 'Son, your sins are forgiven.' But some of the scribes were sitting there and reasoning in their hearts, 'Why does this man speak that way? He is blaspheming; who can forgive sins but God alone?'"
            whyItMatters="The scribes were correct: only God can forgive sins against God. Jesus demonstrated His authority to forgive by healing the paralytic (v. 10-11), thus proving His deity."
            keyPoints={[
              "The scribes understood the implications: forgiving sins is God's prerogative",
              "Jesus didn't say 'God forgives your sins' — He said 'Your sins are forgiven' on His own authority",
              "Jesus proved His authority by the miracle: 'so that you may know that the Son of Man has authority on earth to forgive sins'",
            ]}
          />

          <ScripturePassage
            reference="John 5:21"
            title="Jesus Gives Life"
            text="For just as the Father raises the dead and gives them life, even so the Son also gives life to whom He wishes."
            whyItMatters="Giving life is God's prerogative. Jesus gives life 'to whom He wishes' — exercising divine sovereignty."
          />

          <ScripturePassage
            reference="John 5:22"
            title="Jesus Is the Judge"
            text="For not even the Father judges anyone, but He has given all judgment to the Son,"
            whyItMatters="Throughout the Old Testament, Yahweh is the Judge of all the earth (Genesis 18:25; Psalm 50:6). The Father has given this divine prerogative to the Son."
          />

          <ScripturePassage
            reference="John 10:28"
            title="Jesus Gives Eternal Life"
            text="and I give eternal life to them, and they will never perish; and no one will snatch them out of My hand."
            whyItMatters="Only God can give eternal life. Jesus claims to give it directly."
          />

          <ScripturePassage
            reference="John 11:25"
            title="'I Am the Resurrection and the Life'"
            text="Jesus said to her, 'I am the resurrection and the life; he who believes in Me will live even if he dies,'"
            whyItMatters="Jesus doesn't just give resurrection; He is the resurrection. Life itself resides in Him."
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
              What These Actions Prove
            </h3>
            <p
              className="text-lg mb-6"
              style={{ color: '#e8ede8', lineHeight: '1.8' }}
            >
              The scribes had it right: only God can forgive sins. Only God can give
              life. Only God can judge all humanity. Only God can grant eternal life.
              Yet Jesus does all of these things — not as an agent relaying God&apos;s
              actions, but on His own authority. &quot;The Son gives life to whom He wishes.&quot;
              &quot;I give eternal life to them.&quot; &quot;I am the resurrection and the life.&quot;
              These are claims that only God can make.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/who-is-jesus/yahweh-passages"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
              >
                Next: Yahweh Passages →
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
