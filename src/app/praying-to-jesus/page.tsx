import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Praying to Jesus for Salvation | MyWitness',
  description:
    'Scripture shows believers praying directly TO Jesus, not just through Him. Learn what the Bible teaches and read a personal testimony of answered prayer.',
};

export default function PrayingToJesusPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fdfdf8' }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div
        className="py-20 px-4"
        style={{
          background: 'linear-gradient(135deg, #2f3f2f 0%, #1a261a 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: '#ffffff' }}
          >
            Praying to Jesus for Salvation
          </h1>
          <p
            className="text-xl md:text-2xl mb-4"
            style={{ color: '#d4af37' }}
          >
            Scripture, Testimony, and the Prayer That Changed Everything
          </p>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: '#e8ede8' }}
          >
            The New Testament is clear: followers of Jesus prayed TO Him, not just through Him.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Section 1: What Scripture Says */}
        <section className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-8"
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
            className="rounded-xl p-6 md:p-8 mb-6"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: '#2f3f2f' }}>
              Acts 7:59-60 — Stephen Prays to Jesus
            </h3>
            <div
              className="rounded-lg p-4 mb-4"
              style={{ backgroundColor: '#ffffff' }}
            >
              <p className="text-lg italic" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                &ldquo;And they went on stoning Stephen as <strong>he called on the Lord and said,
                &lsquo;Lord Jesus, receive my spirit!&rsquo;</strong> And falling on his knees, he cried
                out with a loud voice, &lsquo;Lord, do not hold this sin against them!&rsquo;
                Having said this, he fell asleep.&rdquo;
              </p>
              <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>— LSB</p>
            </div>
            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              Stephen was being martyred. In his final moments, he didn&apos;t pray through Jesus
              to the Father—he prayed directly TO Jesus. His words parallel Jesus&apos; own prayer
              on the cross: &ldquo;Father, into Your hands I commit My spirit&rdquo; (Luke 23:46).
            </p>
          </div>

          {/* 1 Corinthians 1:2 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-6"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: '#2f3f2f' }}>
              1 Corinthians 1:2 — Christians &ldquo;Call on the Name of Jesus&rdquo;
            </h3>
            <div
              className="rounded-lg p-4 mb-4"
              style={{ backgroundColor: '#ffffff' }}
            >
              <p className="text-lg italic" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                &ldquo;...to the church of God which is at Corinth, to those who have been sanctified
                in Christ Jesus, saints by calling, with all who in every place <strong>call on the
                name of our Lord Jesus Christ</strong>, their Lord and ours&rdquo;
              </p>
              <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>— LSB</p>
            </div>
            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              Paul describes Christians as those who &ldquo;call on the name of our Lord Jesus Christ.&rdquo;
              To &ldquo;call on the name&rdquo; of someone is prayer language—the same phrase used in
              Joel 2:32 about calling on Yahweh.
            </p>
          </div>

          {/* 2 Corinthians 12:8 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-6"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: '#2f3f2f' }}>
              2 Corinthians 12:8-9 — Paul Prays to Jesus Three Times
            </h3>
            <div
              className="rounded-lg p-4 mb-4"
              style={{ backgroundColor: '#ffffff' }}
            >
              <p className="text-lg italic" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                &ldquo;Concerning this I pleaded with <strong>the Lord</strong> three times that it might
                leave me. And He has said to me, &lsquo;My grace is sufficient for you, for power is
                perfected in weakness.&rsquo;&rdquo;
              </p>
              <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>— LSB</p>
            </div>
            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              Paul had a &ldquo;thorn in the flesh&rdquo; and prayed three times asking for relief.
              Who did he pray to? &ldquo;The Lord&rdquo;—which in context is Jesus (note v. 9:
              &ldquo;the power of <strong>Christ</strong>&rdquo; and v. 10: &ldquo;for <strong>Christ&apos;s</strong> sake&rdquo;).
              Jesus answered directly.
            </p>
          </div>

          {/* John 14:14 - NWT Comparison */}
          <div
            className="rounded-xl p-6 md:p-8 mb-6"
            style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #d4af37' }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: '#2f3f2f' }}>
              John 14:14 — Jesus Says &ldquo;Ask ME&rdquo;
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#ffffff' }}
              >
                <p className="text-sm font-semibold mb-2" style={{ color: '#577557' }}>
                  LSB (and most translations):
                </p>
                <p className="text-lg italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;If you ask <strong>Me</strong> anything in My name, I will do it.&rdquo;
                </p>
              </div>
              <div
                className="rounded-lg p-4"
                style={{ backgroundColor: '#fff0f0' }}
              >
                <p className="text-sm font-semibold mb-2" style={{ color: '#c62828' }}>
                  NWT:
                </p>
                <p className="text-lg italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;If you ask anything in my name, I will do it.&rdquo;
                </p>
              </div>
            </div>
            <p className="text-base font-semibold mb-3" style={{ color: '#8b6914' }}>
              Notice the difference? The NWT removed the word &ldquo;ME&rdquo; from this verse.
            </p>
            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              The Greek manuscripts clearly have &ldquo;me&rdquo; (με) in this verse. The NWT removed
              it deliberately because it directly contradicts their teaching that you should only
              pray through Jesus, not TO Him.
            </p>
          </div>

          {/* Revelation 22:20 */}
          <div
            className="rounded-xl p-6 md:p-8 mb-6"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: '#2f3f2f' }}>
              Revelation 22:20 — &ldquo;Come, Lord Jesus&rdquo;
            </h3>
            <div
              className="rounded-lg p-4 mb-4"
              style={{ backgroundColor: '#ffffff' }}
            >
              <p className="text-lg italic" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
                &ldquo;He who testifies to these things says, &lsquo;Yes, I am coming quickly.&rsquo;
                Amen. <strong>Come, Lord Jesus.</strong>&rdquo;
              </p>
              <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>— LSB</p>
            </div>
            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              The Bible ends with a prayer directly to Jesus: &ldquo;Come, Lord Jesus.&rdquo;
              This is a petition—a request—addressed to Jesus Himself.
            </p>
          </div>
        </section>

        {/* Section 2: JW Practice vs Scripture */}
        <section className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
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
            className="rounded-xl p-6 mb-6"
            style={{ backgroundColor: '#e8ede8' }}
          >
            <p className="text-lg italic" style={{ color: '#2f3f2f' }}>
              &ldquo;Jehovah God, we come to you in the name of your son Jesus Christ...&rdquo;
            </p>
            <p className="text-lg italic mt-2" style={{ color: '#577557' }}>
              [Prayer addresses everything to &ldquo;Jehovah&rdquo;]
            </p>
            <p className="text-lg italic mt-2" style={{ color: '#2f3f2f' }}>
              &ldquo;...we ask these things in the name of your son Jesus Christ. Amen.&rdquo;
            </p>
          </div>

          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            This is praying <strong>THROUGH</strong> Jesus <strong>TO</strong> the Father.
          </p>

          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #d4af37' }}
          >
            <p
              className="text-xl font-semibold mb-4"
              style={{ color: '#2f3f2f' }}
            >
              But Scripture shows believers praying directly TO Jesus.
            </p>
            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              Why the difference? Because if Jehovah&apos;s Witnesses prayed TO Jesus, they would have
              to acknowledge He is God. And their entire theology would collapse.
            </p>
          </div>
        </section>

        {/* Section 3: Personal Testimony */}
        <section className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            My Personal Testimony
          </h2>

          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: 'linear-gradient(135deg, #f6f8f6 0%, #e8ede8 100%)',
              borderLeft: '4px solid #d4af37',
            }}
          >
            <div className="space-y-5" style={{ color: '#2f3f2f', lineHeight: '1.9' }}>
              <p className="text-lg">
                I was raised as a Jehovah&apos;s Witness. For 32 years, I did what I was taught:
              </p>
              <ul className="ml-6 space-y-2 text-lg">
                <li>• I prayed through Jesus to Jehovah</li>
                <li>• I never once prayed TO Jesus</li>
                <li>• I believed that praying to Jesus would be wrong—a form of idolatry</li>
              </ul>
              <p className="text-lg">
                But when I started reading the Bible for myself, not through Watchtower publications,
                I discovered something that shook me to my core: Scripture was clear that Jesus is God.
                And if He&apos;s God, I needed to pray TO Him.
              </p>

              <h3
                className="text-2xl font-serif font-bold pt-4"
                style={{ color: '#577557' }}
              >
                The Day Everything Changed
              </h3>
              <p className="text-lg">
                I was 32 years old. I had been studying the evidence for weeks. The Scriptures were
                undeniable. But I was terrified.
              </p>
              <p className="text-lg">
                One day at work, I made a decision. I was going to do something I had never done in
                my entire life: I was going to pray TO Jesus.
              </p>
              <p className="text-lg font-semibold" style={{ color: '#577557' }}>
                Not through Him. TO Him.
              </p>
              <p className="text-lg">
                I bowed my head right there at my desk and prayed—silently, in my mind:
              </p>

              <div
                className="rounded-xl p-6 my-4"
                style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #577557' }}
              >
                <p className="text-lg italic" style={{ lineHeight: '1.8' }}>
                  &ldquo;Jesus, if what I&apos;ve learned is true... if you really are God... if you really
                  died for my sins and rose from the dead... if I need to believe in you and pray to
                  you to be saved... please show me. Show me that you&apos;re real. Show me that you&apos;re God.
                  I&apos;m terrified right now because I think I might be committing blasphemy. But if you
                  are who Scripture says you are, please reveal yourself to me.&rdquo;
                </p>
              </div>

              <p className="text-lg">
                I said &ldquo;Amen&rdquo; in my head.
              </p>
              <p className="text-xl font-bold" style={{ color: '#d4af37' }}>
                The instant I said &ldquo;Amen&rdquo;—literally, the very second—the phone on my desk rang.
              </p>

              <h3
                className="text-2xl font-serif font-bold pt-4"
                style={{ color: '#577557' }}
              >
                The Phone Call
              </h3>
              <p className="text-lg">
                I was startled. I picked up the phone.
              </p>
              <p className="text-lg">
                On the other end, there was no voice. Instead, there was a sound—something like music,
                but not quite. It was otherworldly. Beautiful. I can&apos;t describe it accurately.
                It played for about 15-20 seconds.
              </p>
              <p className="text-lg">
                Then the line hung up.
              </p>

              <h3
                className="text-2xl font-serif font-bold pt-4"
                style={{ color: '#577557' }}
              >
                What I Discovered
              </h3>
              <p className="text-lg">
                As a career IT professional, my first thought was: &ldquo;That was weird. Probably a fax
                machine or modem or something.&rdquo;
              </p>
              <p className="text-lg">
                But I was curious. I tried calling the number back.
              </p>
              <p className="text-lg">
                I got a recording: <strong>&ldquo;This line is not in service.&rdquo;</strong>
              </p>
              <p className="text-lg">
                I did a reverse lookup on the number. And what I found shocked me to my core:
              </p>
              <p className="text-xl font-bold" style={{ color: '#d4af37' }}>
                The phone number had been registered with the phone company but never activated—on
                my 18th birthday, over a decade earlier.
              </p>

              <h3
                className="text-2xl font-serif font-bold pt-4"
                style={{ color: '#577557' }}
              >
                Jesus Answered
              </h3>
              <p className="text-lg">
                In that moment, I knew. Jesus had answered. He answered the instant I said
                &ldquo;Amen&rdquo;—before I even finished the word in my mind.
              </p>
              <div className="space-y-1 py-4">
                <p className="text-2xl font-bold" style={{ color: '#577557' }}>
                  He is real.
                </p>
                <p className="text-2xl font-bold" style={{ color: '#577557' }}>
                  He is God.
                </p>
                <p className="text-2xl font-bold" style={{ color: '#577557' }}>
                  And He wants you to know Him.
                </p>
              </div>
              <p className="text-lg">
                He didn&apos;t send an angel. He didn&apos;t send a sign that could be easily dismissed.
                He orchestrated something that defied natural explanation—a phone number that
                shouldn&apos;t exist, calling at the exact moment I finished praying TO Him for the
                first time in my life, on a number that was created on the day I became an adult.
              </p>
              <p className="text-lg font-semibold" style={{ color: '#577557' }}>
                He was saying: &ldquo;I&apos;ve been here all along. I&apos;ve been waiting for you to call on My name.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: The Prayer of Confession */}
        <section className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
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
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: 'linear-gradient(135deg, #2f3f2f 0%, #1a261a 100%)',
            }}
          >
            <div className="space-y-4">
              <p className="text-xl leading-relaxed" style={{ color: '#ffffff' }}>
                <strong>&ldquo;Lord Jesus Christ,</strong>
              </p>
              <p className="text-xl leading-relaxed" style={{ color: '#ffffff' }}>
                <strong>I confess with my mouth that You are Lord—that You are God.</strong>
              </p>
              <p className="text-xl leading-relaxed" style={{ color: '#ffffff' }}>
                <strong>I believe in my heart that You died for my sins and that God raised You
                from the dead.</strong>
              </p>
              <p className="text-xl leading-relaxed" style={{ color: '#ffffff' }}>
                <strong>I have believed lies about You. I have prayed through You instead of TO You.
                I have denied Your deity.</strong>
              </p>
              <p className="text-xl leading-relaxed" style={{ color: '#d4af37' }}>
                <strong>Forgive me.</strong>
              </p>
              <p className="text-xl leading-relaxed" style={{ color: '#ffffff' }}>
                <strong>I receive You now as my Lord and my God. I put my faith in You alone
                for salvation.</strong>
              </p>
              <p className="text-xl leading-relaxed" style={{ color: '#d4af37' }}>
                <strong>Save me, Lord Jesus.</strong>
              </p>
              <p className="text-xl leading-relaxed" style={{ color: '#ffffff' }}>
                <strong>In Your name I pray,</strong>
              </p>
              <p className="text-xl leading-relaxed" style={{ color: '#ffffff' }}>
                <strong>Amen.&rdquo;</strong>
              </p>
            </div>
          </div>

          <div
            className="rounded-xl p-6 mt-6"
            style={{ backgroundColor: '#f6f8f6' }}
          >
            <p className="text-lg italic" style={{ color: '#2f3f2f' }}>
              &ldquo;For whoever calls on the name of the Lord will be saved.&rdquo;
            </p>
            <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
              — Romans 10:13 (LSB)
            </p>
          </div>
        </section>

        {/* Section 5: What Happens Next */}
        <section className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
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
            className="rounded-xl p-6 mb-8"
            style={{ backgroundColor: '#e8f5e8', borderLeft: '4px solid #2e7d32' }}
          >
            <p className="text-lg italic" style={{ color: '#2f3f2f' }}>
              &ldquo;...that if you confess with your mouth Jesus as Lord, and believe in your heart
              that God raised Him from the dead, you will be saved&rdquo;
            </p>
            <p className="text-sm mt-2 font-semibold" style={{ color: '#2e7d32' }}>
              — Romans 10:9 (LSB)
            </p>
          </div>

          <h3 className="text-2xl font-serif font-semibold mb-4" style={{ color: '#2f3f2f' }}>
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
            className="rounded-xl p-6 mb-8"
            style={{ backgroundColor: '#f6f8f6' }}
          >
            <p className="text-lg italic" style={{ color: '#2f3f2f' }}>
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

          <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: '#2f3f2f' }}>
            What You Should Do Now:
          </h3>

          <div className="space-y-4 mb-8">
            {[
              {
                number: 1,
                title: 'Read Scripture Daily',
                description: 'Start with the Gospel of John (using LSB or another trustworthy translation). Let God\'s Word renew your mind.',
              },
              {
                number: 2,
                title: 'Find a Church',
                description: 'Look for a Bible-believing church that teaches that Jesus is God. You need Christian fellowship and teaching.',
              },
              {
                number: 3,
                title: 'Tell Someone',
                description: 'Share what happened with a trusted friend or family member. The Bible says we confess with our mouth—tell others what Jesus has done.',
              },
              {
                number: 4,
                title: 'Keep Praying',
                description: 'You can now pray TO Jesus anytime. You can also pray to the Father through Jesus. The Holy Spirit will guide you.',
              },
              {
                number: 5,
                title: 'Be Patient with Yourself',
                description: 'You\'ve believed lies your whole life. It takes time to unlearn them. Keep reading Scripture. Let God\'s Word transform you.',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-xl p-6 flex gap-4"
                style={{ backgroundColor: '#f6f8f6' }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
                  style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
                >
                  {item.number}
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1" style={{ color: '#2f3f2f' }}>
                    {item.title}
                  </p>
                  <p style={{ color: '#577557', lineHeight: '1.6' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* About Family */}
          <div
            className="rounded-xl p-6 md:p-8"
            style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #d4af37' }}
          >
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#8b6914' }}>
              A Word About Your JW Friends and Family
            </h3>
            <p className="text-base mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              This will be hard. Your friends and family may shun you. They may say you&apos;ve been
              deceived by Satan. They may refuse to speak with you.
            </p>
            <p className="text-base font-semibold mb-4" style={{ color: '#8b6914' }}>
              This is heartbreaking. But it&apos;s not surprising.
            </p>
            <div
              className="rounded-lg p-4 mb-4"
              style={{ backgroundColor: '#ffffff' }}
            >
              <p className="italic" style={{ color: '#2f3f2f' }}>
                &ldquo;If the world hates you, you know that it has hated Me before it hated you...
                If they persecuted Me, they will also persecute you.&rdquo;
              </p>
              <p className="text-sm mt-1 font-semibold" style={{ color: '#577557' }}>
                — John 15:18, 20 (LSB)
              </p>
            </div>
            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              Stay gentle. Stay loving. Keep praying for them. And trust that the same Jesus who
              revealed Himself to you can reveal Himself to them.
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                Recommended Bible
              </h3>
              <p className="mb-3" style={{ color: '#577557', lineHeight: '1.6' }}>
                Legacy Standard Bible (LSB) — Free at{' '}
                <a
                  href="https://lsbible.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold hover:opacity-80"
                  style={{ color: '#577557' }}
                >
                  lsbible.org
                </a>
              </p>
            </div>

            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                Finding a Church
              </h3>
              <p style={{ color: '#577557', lineHeight: '1.6' }}>
                Look for churches that affirm: &ldquo;Jesus Christ is fully God and fully man.&rdquo;
                Avoid churches that deny the Trinity or Jesus&apos;s deity.
              </p>
            </div>

            <div
              className="rounded-xl p-6 md:col-span-2"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#2f3f2f' }}>
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
          className="rounded-2xl p-8 md:p-10 text-center"
          style={{
            background: 'linear-gradient(135deg, #2f3f2f 0%, #1a261a 100%)',
          }}
        >
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
            style={{ color: '#ffffff' }}
          >
            Welcome to the Family of God
          </h2>
          <p
            className="text-xl mb-8"
            style={{ color: '#d4af37' }}
          >
            You are loved. You are saved. You are His.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: '#d4af37',
                color: '#2f3f2f',
              }}
            >
              Return Home
            </Link>
            <Link
              href="/who-is-jesus"
              className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'transparent',
                border: '2px solid #ffffff',
                color: '#ffffff',
              }}
            >
              Explore More Evidence
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
