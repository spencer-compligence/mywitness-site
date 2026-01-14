import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrayingToJesusPage() {
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
            Praying to Jesus for Salvation
          </h1>
          <p
            className="text-xl md:text-2xl mb-8"
            style={{ color: '#577557', lineHeight: '1.6' }}
          >
            Scripture, testimony, and the prayer that changed everything
          </p>
          <div
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: '#d4af37' }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Section 1: What Scripture Says */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-8"
            style={{ color: '#2f3f2f' }}
          >
            What Scripture Says
          </h2>

          <p
            className="text-lg mb-8"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            The New Testament is clear: followers of Jesus prayed TO Him, not just through Him
            to the Father.
          </p>

          {/* Acts 7:59-60 */}
          <div
            className="rounded-xl p-6 mb-6"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              Acts 7:59-60 — Stephen Prays to Jesus
            </h3>
            <p className="italic mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              &ldquo;And they went on stoning Stephen as <strong>he called on the Lord and said,
              &lsquo;Lord Jesus, receive my spirit!&rsquo;</strong> And falling on his knees, he cried
              out with a loud voice, &lsquo;Lord, do not hold this sin against them!&rsquo;
              Having said this, he fell asleep.&rdquo;
            </p>
            <p className="text-sm font-semibold" style={{ color: '#577557' }}>— LSB</p>
            <p className="mt-3" style={{ color: '#577557' }}>
              Stephen was being martyred. In his final moments, he didn&apos;t pray through Jesus
              to the Father—he prayed directly TO Jesus.
            </p>
          </div>

          {/* 1 Corinthians 1:2 */}
          <div
            className="rounded-xl p-6 mb-6"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              1 Corinthians 1:2 — &ldquo;Call Upon the Name of Jesus&rdquo;
            </h3>
            <p className="italic mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              &ldquo;...to the church of God which is at Corinth, to those who have been sanctified
              in Christ Jesus, saints by calling, with all who in every place <strong>call on the
              name of our Lord Jesus Christ</strong>, their Lord and ours&rdquo;
            </p>
            <p className="text-sm font-semibold" style={{ color: '#577557' }}>— LSB</p>
            <p className="mt-3" style={{ color: '#577557' }}>
              Paul describes Christians as those who &ldquo;call on the name of our Lord Jesus Christ.&rdquo;
              To &ldquo;call on the name&rdquo; of someone is to pray to them.
            </p>
          </div>

          {/* 2 Corinthians 12:8 */}
          <div
            className="rounded-xl p-6 mb-6"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              2 Corinthians 12:8 — Paul Prays to Jesus Three Times
            </h3>
            <p className="italic mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              &ldquo;Concerning this I implored <strong>the Lord</strong> three times that it might
              leave me.&rdquo;
            </p>
            <p className="text-sm font-semibold" style={{ color: '#577557' }}>— LSB</p>
            <p className="mt-3" style={{ color: '#577557' }}>
              Paul had a &ldquo;thorn in the flesh&rdquo; and prayed three times asking for relief.
              Who did he pray to? &ldquo;The Lord&rdquo;—which in context is Jesus (see verse 9:
              &ldquo;And He has said to me, &lsquo;My grace is sufficient for you&rsquo;&rdquo;).
            </p>
          </div>

          {/* John 14:14 */}
          <div
            className="rounded-xl p-6 mb-6"
            style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}
          >
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              John 14:14 — Jesus Says &ldquo;Ask ME&rdquo;
            </h3>
            <p className="italic mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <strong>LSB:</strong> &ldquo;If you ask <strong>Me</strong> anything in My name,
              I will do it.&rdquo;
            </p>
            <p className="italic mb-4" style={{ color: '#c62828', lineHeight: '1.7' }}>
              <strong>NWT:</strong> &ldquo;If you ask anything in my name, I will do it.&rdquo;
            </p>
            <p className="font-semibold" style={{ color: '#8b6914' }}>
              Notice the difference? The NWT removed the word &ldquo;ME&rdquo; from this verse. Why?
              Because it directly contradicts their teaching that you should only pray through Jesus,
              not TO Him.
            </p>
            <p className="mt-3" style={{ color: '#2f3f2f' }}>
              The Greek manuscripts clearly have &ldquo;me&rdquo; (με) in this verse. The NWT removed
              it deliberately.
            </p>
          </div>

          {/* Revelation 22:20 */}
          <div
            className="rounded-xl p-6 mb-6"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              Revelation 22:20 — &ldquo;Come, Lord Jesus&rdquo;
            </h3>
            <p className="italic mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              &ldquo;He who testifies to these things says, &lsquo;Yes, I am coming quickly.&rsquo;
              Amen. <strong>Come, Lord Jesus.</strong>&rdquo;
            </p>
            <p className="text-sm font-semibold" style={{ color: '#577557' }}>— LSB</p>
            <p className="mt-3" style={{ color: '#577557' }}>
              The Bible ends with a prayer directly to Jesus: &ldquo;Come, Lord Jesus.&rdquo;
            </p>
          </div>
        </section>

        {/* Section 2: JW Practice vs Scripture */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            The Witness Practice vs. Scripture
          </h2>

          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Jehovah&apos;s Witnesses are taught to pray this way:
          </p>

          <div
            className="rounded-lg p-6 mb-6"
            style={{ backgroundColor: '#e8ede8' }}
          >
            <p className="italic" style={{ color: '#2f3f2f' }}>
              &ldquo;Jehovah God, we come to you in the name of your son Jesus Christ...&rdquo;
            </p>
            <p className="italic mt-2" style={{ color: '#2f3f2f' }}>
              [Prayer addresses everything to &ldquo;Jehovah&rdquo;]
            </p>
            <p className="italic mt-2" style={{ color: '#2f3f2f' }}>
              &ldquo;...we ask these things in the name of your son Jesus Christ. Amen.&rdquo;
            </p>
          </div>

          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            This is praying <strong>THROUGH</strong> Jesus <strong>TO</strong> the Father.
          </p>
          <p
            className="text-xl font-semibold mb-6"
            style={{ color: '#577557' }}
          >
            But Scripture shows believers praying directly TO Jesus.
          </p>
          <p
            className="text-lg"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Why the difference? Because if Jehovah&apos;s Witnesses prayed TO Jesus, they would have
            to acknowledge He is God. And their entire theology would collapse.
          </p>
        </section>

        {/* Section 3: Personal Testimony */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            My Personal Testimony
          </h2>

          <div
            className="rounded-xl p-8"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #d4af37' }}
          >
            <div className="space-y-4" style={{ color: '#2f3f2f', lineHeight: '1.9' }}>
              <p>
                I was raised as a Jehovah&apos;s Witness. For 32 years, I did what I was taught:
              </p>
              <ul className="ml-6 space-y-2">
                <li>• I prayed through Jesus to Jehovah</li>
                <li>• I never once prayed TO Jesus</li>
                <li>• I believed that praying to Jesus would be wrong—a form of idolatry</li>
              </ul>
              <p>
                But when I started reading the Bible for myself, not through Watchtower publications,
                I discovered something that shook me to my core: Scripture was clear that Jesus is God.
                And if He&apos;s God, I needed to pray TO Him.
              </p>

              <h3 className="text-xl font-semibold pt-4" style={{ color: '#577557' }}>
                The Day Everything Changed
              </h3>
              <p>
                I was 32 years old. I had been studying the evidence for weeks. The Scriptures were
                undeniable. But I was terrified.
              </p>
              <p>
                One day at work, I made a decision. I was going to do something I had never done in
                my entire life: I was going to pray TO Jesus.
              </p>
              <p>
                Not through Him. TO Him.
              </p>
              <p>
                I bowed my head right there at my desk and prayed—silently, in my mind. I said
                something like:
              </p>

              <div
                className="rounded-lg p-6 my-4"
                style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #577557' }}
              >
                <p className="italic">
                  &ldquo;Jesus, if what I&apos;ve learned is true... if you really are God... if you really
                  died for my sins and rose from the dead... if I need to believe in you and pray to
                  you to be saved... please show me. Show me that you&apos;re real. Show me that you&apos;re God.
                  I&apos;m terrified right now because I think I might be committing blasphemy. But if you
                  are who Scripture says you are, please reveal yourself to me.&rdquo;
                </p>
              </div>

              <p>
                I said &ldquo;Amen&rdquo; in my head.
              </p>
              <p className="text-xl font-semibold" style={{ color: '#577557' }}>
                The instant I said &ldquo;Amen&rdquo;—literally, the very second—the phone on my desk rang.
              </p>

              <h3 className="text-xl font-semibold pt-4" style={{ color: '#577557' }}>
                The Phone Call
              </h3>
              <p>
                I was startled. I picked up the phone.
              </p>
              <p>
                On the other end, there was no voice. Instead, there was a sound—something like music,
                but not quite. It was otherworldly. Beautiful. I can&apos;t describe it accurately.
                It played for about 15-20 seconds.
              </p>
              <p>
                Then the line hung up.
              </p>

              <h3 className="text-xl font-semibold pt-4" style={{ color: '#577557' }}>
                What I Discovered
              </h3>
              <p>
                As a career IT professional, my first thought was: &ldquo;That was weird. Probably a fax
                machine or modem or something.&rdquo;
              </p>
              <p>
                But I was curious. I tried calling the number back.
              </p>
              <p>
                I got a recording: <strong>&ldquo;This line is not in service.&rdquo;</strong>
              </p>
              <p>
                I did a reverse lookup on the number. And what I found shocked me to my core:
              </p>
              <p className="text-xl font-semibold" style={{ color: '#d4af37' }}>
                The phone number had been registered with the phone company but never activated—on
                my 18th birthday, over a decade earlier.
              </p>

              <h3 className="text-xl font-semibold pt-4" style={{ color: '#577557' }}>
                Jesus Answered
              </h3>
              <p>
                In that moment, I knew. Jesus had answered. He answered the instant I said
                &ldquo;Amen&rdquo;—before I even finished the word in my mind.
              </p>
              <p className="text-xl font-bold" style={{ color: '#577557' }}>
                He is real.
              </p>
              <p className="text-xl font-bold" style={{ color: '#577557' }}>
                He is God.
              </p>
              <p className="text-xl font-bold" style={{ color: '#577557' }}>
                And He wants you to know Him.
              </p>
              <p>
                He didn&apos;t send an angel. He didn&apos;t send a sign that could be easily dismissed.
                He orchestrated something that defied natural explanation—a phone number that
                shouldn&apos;t exist, calling at the exact moment I finished praying TO Him for the
                first time in my life, on a number that was created on the day I became an adult.
              </p>
              <p className="font-semibold" style={{ color: '#577557' }}>
                He was saying: &ldquo;I&apos;ve been here all along. I&apos;ve been waiting for you to call on My name.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: The Prayer of Confession */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            The Prayer of Confession
          </h2>

          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            If you&apos;re ready to pray TO Jesus—to call on His name for salvation—here&apos;s a simple
            prayer based on Scripture:
          </p>

          <div
            className="rounded-xl p-8"
            style={{
              backgroundImage: 'linear-gradient(to bottom, #e8ede8, #f6f8f6)',
              borderLeft: '4px solid #577557'
            }}
          >
            <p className="text-lg leading-loose" style={{ color: '#2f3f2f' }}>
              <strong>&ldquo;Lord Jesus Christ,</strong>
            </p>
            <p className="text-lg leading-loose" style={{ color: '#2f3f2f' }}>
              <strong>I confess with my mouth that You are Lord—that You are God.</strong>
            </p>
            <p className="text-lg leading-loose" style={{ color: '#2f3f2f' }}>
              <strong>I believe in my heart that You died for my sins and that God raised You
              from the dead.</strong>
            </p>
            <p className="text-lg leading-loose" style={{ color: '#2f3f2f' }}>
              <strong>I have believed lies about You. I have prayed through You instead of TO You.
              I have denied Your deity.</strong>
            </p>
            <p className="text-lg leading-loose" style={{ color: '#2f3f2f' }}>
              <strong>Forgive me.</strong>
            </p>
            <p className="text-lg leading-loose" style={{ color: '#2f3f2f' }}>
              <strong>I receive You now as my Lord and my God. I put my faith in You alone
              for salvation.</strong>
            </p>
            <p className="text-lg leading-loose" style={{ color: '#2f3f2f' }}>
              <strong>Save me, Lord Jesus.</strong>
            </p>
            <p className="text-lg leading-loose" style={{ color: '#2f3f2f' }}>
              <strong>In Your name I pray,</strong>
            </p>
            <p className="text-lg leading-loose" style={{ color: '#2f3f2f' }}>
              <strong>Amen.&rdquo;</strong>
            </p>
          </div>

          <div
            className="rounded-lg p-6 mt-6"
            style={{ backgroundColor: '#f6f8f6' }}
          >
            <p className="italic" style={{ color: '#2f3f2f' }}>
              &ldquo;For whoever calls on the name of the Lord will be saved.&rdquo;
            </p>
            <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
              — Romans 10:13 (LSB)
            </p>
          </div>
        </section>

        {/* Section 5: What Happens Next */}
        <section className="mb-12">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            What Happens Next?
          </h2>

          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            If you just prayed that prayer and meant it from your heart, Scripture says you are saved.
          </p>

          <div
            className="rounded-lg p-6 mb-8"
            style={{ backgroundColor: '#e8f5e8', borderLeft: '4px solid #2e7d32' }}
          >
            <p className="italic" style={{ color: '#2f3f2f' }}>
              &ldquo;...that if you confess with your mouth Jesus as Lord, and believe in your heart
              that God raised Him from the dead, you will be saved&rdquo;
            </p>
            <p className="text-sm mt-2 font-semibold" style={{ color: '#2e7d32' }}>
              — Romans 10:9 (LSB)
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#2f3f2f' }}>
            Assurance of Salvation
          </h3>
          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            You don&apos;t have to wonder if it &ldquo;worked.&rdquo; You don&apos;t have to earn it.
            You don&apos;t have to prove yourself worthy.
          </p>

          <div
            className="rounded-lg p-6 mb-8"
            style={{ backgroundColor: '#f6f8f6' }}
          >
            <p className="italic" style={{ color: '#2f3f2f' }}>
              &ldquo;For by grace you have been saved through faith; and that not of yourselves,
              it is the gift of God; not as a result of works, so that no one may boast.&rdquo;
            </p>
            <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
              — Ephesians 2:8-9 (LSB)
            </p>
          </div>

          <p
            className="text-xl font-semibold mb-8"
            style={{ color: '#577557' }}
          >
            Salvation is a gift. You just received it.
          </p>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#2f3f2f' }}>
            What You Should Do Now:
          </h3>

          <div className="space-y-4 mb-8">
            {[
              {
                title: 'Read Scripture Daily',
                description: 'Start with the Gospel of John (using LSB or another trustworthy translation). Let God\'s Word renew your mind.'
              },
              {
                title: 'Find a Church',
                description: 'Look for a Bible-believing church that teaches that Jesus is God. You need Christian fellowship and teaching.'
              },
              {
                title: 'Tell Someone',
                description: 'Share what happened with a trusted friend or family member. The Bible says we confess with our mouth—tell others what Jesus has done.'
              },
              {
                title: 'Keep Praying',
                description: 'You can now pray TO Jesus anytime. You can also pray to the Father through Jesus. The Holy Spirit will guide you.'
              },
              {
                title: 'Be Patient with Yourself',
                description: 'You\'ve believed lies your whole life. It takes time to unlearn them. Keep reading Scripture. Let God\'s Word transform you.'
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg p-6"
                style={{ backgroundColor: '#f6f8f6' }}
              >
                <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                  {index + 1}. {item.title}
                </p>
                <p style={{ color: '#577557' }}>{item.description}</p>
              </div>
            ))}
          </div>

          {/* About Family */}
          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}
          >
            <h3 className="font-semibold mb-3" style={{ color: '#8b6914' }}>
              A Word About Your JW Friends and Family
            </h3>
            <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              This will be hard. Your friends and family may shun you. They may say you&apos;ve been
              deceived by Satan. They may refuse to speak with you.
            </p>
            <p className="font-semibold mb-4" style={{ color: '#8b6914' }}>
              This is heartbreaking. But it&apos;s not surprising.
            </p>
            <p className="italic mb-4" style={{ color: '#2f3f2f' }}>
              &ldquo;If the world hates you, you know that it has hated Me before it hated you...
              If they persecuted Me, they will also persecute you.&rdquo; — John 15:18-20 (LSB)
            </p>
            <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              Stay gentle. Stay loving. Keep praying for them. And trust that the same Jesus who
              revealed Himself to you can reveal Himself to them.
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <h3 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                Recommended Bible
              </h3>
              <p className="mb-3" style={{ color: '#577557' }}>
                Legacy Standard Bible (LSB) — Free at{' '}
                <a
                  href="https://lsbible.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                  style={{ color: '#577557' }}
                >
                  lsbible.org
                </a>
              </p>
            </div>

            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <h3 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                Finding a Church
              </h3>
              <p style={{ color: '#577557' }}>
                Look for churches that affirm: &ldquo;Jesus Christ is fully God and fully man.&rdquo;
                Avoid churches that deny the Trinity or Jesus&apos;s deity.
              </p>
            </div>

            <div
              className="rounded-lg p-6 md:col-span-2"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <h3 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                Books That Helped Me
              </h3>
              <ul className="space-y-2" style={{ color: '#577557' }}>
                <li>• <em>Reasoning from the Scriptures with Jehovah&apos;s Witnesses</em> by Ron Rhodes</li>
                <li>• <em>Crisis of Conscience</em> by Raymond Franz (former Governing Body member)</li>
                <li>• <em>The Kingdom of the Cults</em> by Walter Martin</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Welcome Message */}
        <div
          className="rounded-xl p-8 text-center"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #e8ede8, #f6f8f6)',
            borderLeft: '4px solid #d4af37'
          }}
        >
          <h2
            className="text-3xl font-serif font-bold mb-4"
            style={{ color: '#2f3f2f' }}
          >
            Welcome to the Family of God
          </h2>
          <p
            className="text-xl"
            style={{ color: '#577557' }}
          >
            You are loved. You are saved. You are His.
          </p>
          <div className="mt-8">
            <Link
              href="/my-story"
              className="inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90 mr-4 mb-4"
              style={{
                backgroundColor: '#577557',
                color: '#ffffff',
              }}
            >
              Read My Full Story
            </Link>
            <Link
              href="/"
              className="inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: 'transparent',
                border: '2px solid #577557',
                color: '#577557',
              }}
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
