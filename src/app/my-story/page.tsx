import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'My Story | MyWitness.info',
  description: 'Born into Jehovah\'s Witnesses, I spent 34 years believing Jesus was a created being. This is my journey to discovering who He really is.',
};

export default function MyStoryPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fdfdf8' }}>
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 hero-gradient-light hero-pattern-light"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: '#fdfdf8' }}
          >
            My Story
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: 'rgba(253, 253, 248, 0.9)', lineHeight: '1.8' }}
          >
            I was born into the Jehovah's Witnesses on February 4, 1976. I didn't choose it — I was simply raised in it, the same way you might have been. For 34 years, it was all I knew.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Before I Could Think */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#2f3f2f' }}
            >
              Before I Could Think
            </h2>
            <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              <p>
                The indoctrination began before I could even question it.
              </p>
              <p>
                I learned to read at a very young age using "My Book of Bible Stories" and the accompanying cassette tapes. I would listen to the tapes and follow along in the book, word by word, page by page. By the time I was five or six years old, I was giving my first Bible reading in front of the entire Kingdom Hall.
              </p>

              {/* Photo: Spencer at Kingdom Hall */}
              <figure className="my-10">
                <div
                  className="rounded-xl overflow-hidden shadow-lg"
                  style={{ border: '1px solid #e0e8e0' }}
                >
                  <Image
                    src="/spencer-kingdom-hall.jpg"
                    alt="Young Spencer with his father at the Kingdom Hall podium"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    style={{ filter: 'sepia(15%)' }}
                  />
                </div>
                <figcaption
                  className="mt-3 text-center text-sm italic"
                  style={{ color: '#5a6a5a' }}
                >
                  Me with my father at the Kingdom Hall podium, around age 5 or 6. The scripture behind us reads "Clothe yourselves with love, a perfect bond of union" — Colossians 3:14.
                </figcaption>
              </figure>

              <p>
                I didn't know it then, but the theology was being wired into me before I had any ability to evaluate it.
              </p>

              {/* Photos: Bible Stories Book and Cassettes */}
              <div className="my-10 grid md:grid-cols-2 gap-6">
                <figure>
                  <div
                    className="rounded-xl overflow-hidden shadow-lg"
                    style={{ border: '1px solid #e0e8e0' }}
                  >
                    <Image
                      src="/bible-stories-page1.jpg"
                      alt="My Book of Bible Stories - Page 1 showing highlighted text about Jesus being 'the first angel God made'"
                      width={600}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                  <figcaption
                    className="mt-3 text-center text-sm italic"
                    style={{ color: '#5a6a5a' }}
                  >
                    Page 1 of "My Book of Bible Stories" — the highlighted text teaches children that Jesus was "the first angel God made."
                  </figcaption>
                </figure>
                <figure>
                  <div
                    className="rounded-xl overflow-hidden shadow-lg"
                    style={{ border: '1px solid #e0e8e0' }}
                  >
                    <Image
                      src="/bible-stories-cassettes.jpg"
                      alt="My Book of Bible Stories on Cassette - the audio tapes I learned to read with"
                      width={600}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                  <figcaption
                    className="mt-3 text-center text-sm italic"
                    style={{ color: '#5a6a5a' }}
                  >
                    The cassette tapes I learned to read with — following along word by word, page by page.
                  </figcaption>
                </figure>
              </div>

              <p>
                Look at page one of that book. It teaches children that Jesus was "the first angel God made" who "helped God to make all other things." The scripture reference at the bottom? Colossians 1:15-17 — the same passage the New World Translation alters by inserting the word "[other]" four times to make Jesus appear to be a created being rather than the Creator.
              </p>

              {/* Photo: Holy Spirit page */}
              <figure className="my-10">
                <div
                  className="rounded-xl overflow-hidden shadow-lg max-w-md mx-auto"
                  style={{ border: '1px solid #e0e8e0' }}
                >
                  <Image
                    src="/bible-stories-holy-spirit.jpg"
                    alt="My Book of Bible Stories page describing the Holy Spirit as 'God's active force, like blowing wind'"
                    width={600}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <figcaption
                  className="mt-3 text-center text-sm italic"
                  style={{ color: '#5a6a5a' }}
                >
                  Another page describes the Holy Spirit as "God's active force, like blowing wind."
                </figcaption>
              </figure>

              <p>
                But wind doesn't speak. Wind can't be lied to. Wind doesn't grieve. The Holy Spirit does all of these things in Scripture.
              </p>
              <p>
                I absorbed this before I could read. Before I could think. Before I had any chance to compare it to what Scripture actually says.
              </p>
              <p>
                This is how it works. By the time you're old enough to question anything, the foundation has already been laid so deep that questioning feels like betrayal.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="glow-line w-full my-12" />

          {/* What I Was Taught */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#2f3f2f' }}
            >
              What I Was Taught
            </h2>
            <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              <p>
                I did everything I was supposed to do. I went to meetings. I went out in service. I studied the publications. I believed that the Watchtower was God's organization, that the New World Translation was the most accurate Bible, and that Jesus was God's Son — a created being, the first of God's creations, but definitely not God Himself.
              </p>
              <p>
                And I never once prayed to Jesus. That would have been idolatry.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="glow-line w-full my-12" />

          {/* A Marriage Built on the Wrong Foundation */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#2f3f2f' }}
            >
              A Marriage Built on the Wrong Foundation
            </h2>
            <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              <p>
                At 21, I got married. I won't pretend my motives were entirely pure — if you were raised as a Witness, you understand the pressure. The choice was often marriage or disfellowshipping if you got caught doing what young people do. So I married young, like so many of us did.
              </p>
              <p>
                Within six months, I knew I had made a terrible mistake. We were completely incompatible. I went to my mother in tears and told her I couldn't do this. She talked me out of leaving. "Marriage is hard for everyone at first," she said.
              </p>
              <p>
                I wanted to believe her. My parents have been madly in love my entire life. I thought my marriage would be like theirs. It wasn't.
              </p>
              <p>
                For ten years, my ex-wife and I lived more like roommates than spouses. I retreated to the basement with a bottle of scotch. She retreated to the bedroom. We had two children along the way, and I stayed longer than I would have because of them.
              </p>
              <p>
                I'm not proud of what came next. I broke my vow to be a faithful husband. I cheated. And when I turned 30, it hit me like a freight train that I had wasted my entire twenties being miserable — and I was on track to waste the rest of my life the same way.
              </p>
              <p>
                So I left.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="glow-line w-full my-12" />

          {/* Disfellowshipped */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#2f3f2f' }}
            >
              Disfellowshipped
            </h2>
            <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              <p>
                It didn't take long for my phone to start blowing up. Every elder who had ever known me, every family member — all of them pleading with me not to go. I ignored them all. My mind was made up. I finally saw my chance at freedom, and nobody was going to talk me out of it.
              </p>
              <p>
                I wanted my ex-wife to be able to remarry without consequence. Witnesses believe — as do most Christians — that adultery is the only biblically valid reason for divorce and remarriage. So I voluntarily went before a judicial committee and told them the truth: I had been with other women. My ex was free.
              </p>
              <p>
                They disfellowshipped me. I haven't been back to a Kingdom Hall since — with one exception.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="glow-line w-full my-12" />

          {/* The Years Between */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#2f3f2f' }}
            >
              The Years Between
            </h2>
            <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              <p>
                I won't romanticize what came next. I partied. I drank. I did things I'm not proud of. I was free from the organization, but I wasn't free. I was just running.
              </p>
              <p>
                On February 16, 2008, I met Linda. She would eventually become my wife — and more importantly, she was the reason I was ever exposed to the Gospel at all.
              </p>
              <p>
                Linda didn't try to convert me. She actually avoided religious discussions with me, partly because she didn't feel like she was "living right" herself at the time. But her family would change everything.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="glow-line w-full my-12" />

          {/* A Wedding in Maine */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#2f3f2f' }}
            >
              A Wedding in Maine
            </h2>
            <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              <p>
                In June 2010, Linda's son Joshua got married at Calvary Chapel Bangor in Maine.
              </p>
              <p>
                Joshua had been a heroin addict who nearly died on multiple occasions. By all earthly measures, he should have been dead. But he wasn't. He had graduated from the Bible school at Calvary Chapel and was getting married in the church. He was completely transformed.
              </p>
              <p>
                At that wedding, I heard the Gospel preached by Pastor Ken Graves. I also witnessed something I had never experienced before — not in all my years as a Witness.
              </p>
              <p>
                The people there had a genuine love for each other. Not the performative warmth of a Kingdom Hall, where everyone smiles but watches each other for signs of weakness. This was different. It was <em>real</em>.
              </p>
              <p>
                I didn't think about it too much at the time. But it stayed with me.
              </p>
              <p>
                Since that wedding, Joshua has been ordained as a Calvary Chapel Pastor, founded Calvary Chapel Eldoret in Kenya, and started{' '}
                <a
                  href="https://gcmco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors"
                  style={{ color: '#577557' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#d4af37'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#577557'; }}
                >
                  Great Commission Ministries
                </a>
                {' '}— a global missions organization that is currently building homes for orphans and women in danger. The same man who should have died from heroin is now bringing life to some of the most vulnerable people on earth.
              </p>
              <p className="font-semibold" style={{ color: '#577557' }}>
                That's what Jesus does.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="glow-line w-full my-12" />

          {/* The Crisis */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#2f3f2f' }}
            >
              The Crisis
            </h2>
            <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              <p>
                A few weeks later, we had a suicide in the family.
              </p>
              <p>
                It was the first time I had ever known anyone who took their own life. And something about that death sent me into an existential crisis. I couldn't stop thinking about my own standing with God. Where was I? What happened when you died? What if everything I'd believed was wrong — but what I was starting to hear was also wrong?
              </p>
              <p>
                I had heard Ken Graves preach again at a local Calvary Chapel. I had been reading the Bible — not the New World Translation, but a real Bible that Linda had given me. And what I was finding in Scripture didn't match what I had been taught for 34 years.
              </p>
              <p className="font-semibold">
                The evidence was becoming undeniable: the Bible taught that Jesus was God.
              </p>
              <p>
                But I was terrified. What if I was being deceived? What if praying to Jesus really was idolatry? What if I was about to commit the ultimate blasphemy?
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="glow-line-gold w-full my-12" />

          {/* The First Prayer */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#2f3f2f' }}
            >
              August 20, 2010: The First Prayer
            </h2>
            <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              <p>
                I was at work, sitting at my desk.
              </p>
              <p>
                I had been wrestling with this for weeks. The Scripture was clear. But I couldn't bring myself to do what I knew I needed to do.
              </p>
              <p>
                Finally, I made a decision. I was going to do something I had never done in my entire life: I was going to pray directly to Jesus.
              </p>
              <p>
                Not through Him to the Father. <em>To</em> Him.
              </p>
              <p>
                I bowed my head and prayed silently:
              </p>

              {/* Prayer - Special Styling */}
              <div
                className="my-8 p-6 md:p-8 rounded-xl"
                style={{
                  backgroundColor: 'rgba(87, 117, 87, 0.08)',
                  borderLeft: '4px solid #d4af37',
                }}
              >
                <p
                  className="text-lg md:text-xl italic"
                  style={{ color: '#2f3f2f', lineHeight: '1.9' }}
                >
                  "Jesus, if what I've learned is true... if you really are God... if you really died for my sins and rose from the dead... if I need to believe in you and pray to you to be saved... please show me. Show me that you're real. I'm terrified right now because I think I might be committing blasphemy. But if you are who Scripture says you are, please reveal yourself to me."
                </p>
              </div>

              <p>
                I said "Amen" in my mind.
              </p>
              <p className="font-semibold text-lg">
                The instant I finished — literally, the very second — the phone on my desk rang.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="glow-line-gold w-full my-12" />

          {/* The Phone Call */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#2f3f2f' }}
            >
              The Phone Call
            </h2>
            <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              <p>
                I was startled. I picked up the phone.
              </p>
              <p>
                On the other end, there was no voice. Instead, there was a sound — something like music, but not quite. It was otherworldly. Beautiful. I can't describe it accurately. It played for about 15-20 seconds.
              </p>
              <p>
                Then the line went dead.
              </p>
              <p>
                As a career IT professional, my first instinct was to find a rational explanation. But I knew by the sounds that it wasn't a fax machine or modem — and it wasn't a person either. It was something that defied explanation.
              </p>
              <p>
                I called the number back.
              </p>
              <p>
                I got a recording: <em>"This line is not in service."</em>
              </p>
              <p>
                I did a reverse lookup on the number. And what I found shook me to my core:
              </p>
              <p
                className="text-lg md:text-xl font-semibold p-4 rounded-lg"
                style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', color: '#2f3f2f' }}
              >
                The phone number had been registered with the phone company by a local Christian school but never activated — on my 18th birthday, over a decade earlier.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="glow-line w-full my-12" />

          {/* What Now? */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#2f3f2f' }}
            >
              What Now?
            </h2>
            <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              <p>
                In that moment, I knew Jesus was real. I knew He had heard me. I knew He had answered.
              </p>
              <p>
                But I didn't know what I was supposed to do next.
              </p>
              <p>
                My mind raced. The phone call came from a Christian school. Maybe that was the next clue? Maybe I was supposed to go there and find something — another sign, another message, another piece of the puzzle?
              </p>
              <p>
                I called Linda and told her everything. The prayer. The phone call. The impossible phone number. The Christian school.
              </p>
              <p>
                She asked me to come to her house after work so we could talk about it.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="glow-line-gold w-full my-12" />

          {/* The Second Prayer */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#2f3f2f' }}
            >
              August 20, 2010: The Second Prayer
            </h2>
            <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              <p>
                That evening, I sat on Linda's back deck and explained everything again. I told her about the prayer, the phone ringing the instant I said Amen, the sounds on the line, the reverse lookup, the Christian school, my 18th birthday.
              </p>
              <p>
                And I told her I didn't know what to do next. I was ready to drive to that school and start searching for the next clue.
              </p>
              <p>
                Linda just smiled calmly and said:
              </p>

              {/* Linda's Words - Special Styling */}
              <div
                className="my-8 p-6 md:p-8 rounded-xl"
                style={{
                  backgroundColor: 'rgba(87, 117, 87, 0.08)',
                  borderLeft: '4px solid #577557',
                }}
              >
                <p
                  className="text-lg italic"
                  style={{ color: '#2f3f2f', lineHeight: '1.9' }}
                >
                  "You're overcomplicating this. There are no clues for you to hunt down. The only thing you need to do is believe that He came to Earth, died for your sins, and was raised from the dead. You need to accept and acknowledge that you are a sinner, and that you need His sacrifice on your behalf. You need to tell Him that you believe all of this, and you need to invite Him into your heart and life."
                </p>
              </div>

              <p>
                So I did. Right there on that back deck.
              </p>
              <p>
                And what happened next — I can't even begin to describe it adequately. It was the experience of being welcomed into the family of God. It was overwhelming. Wonderful. Absolutely indescribable.
              </p>
              <p className="text-lg font-semibold" style={{ color: '#577557' }}>
                The closest I can come is this: it felt like being completely loved down to my very core, unlike anything I had ever experienced before.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="glow-line w-full my-12" />

          {/* Jesus Answered — Twice */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#2f3f2f' }}
            >
              Jesus Answered — Twice
            </h2>
            <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              <p>
                Looking back, I see how God orchestrated that entire day.
              </p>
              <p>
                The first prayer was a desperate plea for confirmation: <em>"Show me you're real."</em> And Jesus answered instantly — before I even finished the word "Amen" in my mind. He answered with a sign so undeniable, so impossible to explain naturally, that I couldn't dismiss it.
              </p>
              <p>
                But the sign wasn't salvation. It was confirmation. It gave me the faith to take the next step.
              </p>
              <p>
                The second prayer was surrender: <em>"I believe. I'm a sinner. I need you. Come into my life."</em>
              </p>
              <p>
                And Jesus answered that one too — not with a phone call, but with His presence. With that overwhelming sense of being loved and welcomed. With the Holy Spirit bearing witness to my spirit that I was now a child of God.
              </p>

              <div
                className="my-8 p-6 md:p-8 rounded-xl text-center"
                style={{
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                }}
              >
                <p
                  className="text-lg md:text-xl"
                  style={{ color: '#2f3f2f', lineHeight: '1.8' }}
                >
                  A phone number registered by a Christian school on the day I became an adult, never activated, suddenly called me at the exact moment I prayed to Jesus for the first time in my 34 years of life.
                </p>
              </div>

              <p className="text-lg italic" style={{ color: '#577557' }}>
                He was saying: "I've been here all along. I've been waiting for you to call on My name."
              </p>
              <p>
                And when I finally did — really did — He was faithful.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="glow-line w-full my-12" />

          {/* The Cost */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#2f3f2f' }}
            >
              The Cost
            </h2>
            <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              <p>
                I wish I could tell you that everything got better after that. In many ways, it did. I found a church. I was baptized. I married Linda. I finally had peace with God.
              </p>
              <p>
                But there was a cost.
              </p>
              <p>
                My entire family is still in the organization. My parents. My siblings. My children. My aunts, uncles, cousins. All of them.
              </p>
              <p>
                For a while, my parents bent the rules to stay in contact with me. But when I tried to take my children to the church I was attending, everything changed. In the eyes of the Witnesses, I went from "disfellowshipped" to "apostate."
              </p>
              <p>
                The rules are different for apostates. They are forbidden — under penalty of being disfellowshipped themselves — from having anything to do with me.
              </p>
              <p>
                When my daughter was 16 and my son was 19, they were both baptized as Jehovah's Witnesses. I wept bitterly when I heard. I knew what that meant. They were now bound by the same rules. The wall between us had become permanent.
              </p>
              <p className="font-semibold">
                Today, my family only contacts me when there's a family emergency. Other than that, it's zero contact.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="glow-line w-full my-12" />

          {/* Why I Built This Website */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#2f3f2f' }}
            >
              Why I Built This Website
            </h2>
            <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              <p>
                You might expect me to be bitter. I've lost everyone I love.
              </p>
              <p>
                But bitterness isn't what drives me. Something else does.
              </p>
              <p>
                My favorite chapter in the Bible is Romans 8. It's full of hope and assurance — nothing can separate us from the love of God in Christ Jesus.
              </p>
              <p>
                But it's followed by Romans 9, and that chapter wrecks me every time I read it.
              </p>
              <p>
                Paul writes:
              </p>

              {/* Scripture Quote */}
              <blockquote className="scripture-quote my-8 p-6 rounded-r-xl">
                <p className="text-lg" style={{ lineHeight: '1.9' }}>
                  "I have great sorrow and unceasing grief in my heart. For I could wish that I myself were accursed, separated from Christ for the sake of my brethren, my kinsmen according to the flesh... For I testify about them that they have a zeal for God, but not in accordance with knowledge."
                </p>
                <footer className="mt-4 text-sm font-semibold" style={{ color: '#577557' }}>
                  — Romans 9:2-3, 10:2 (LSB)
                </footer>
              </blockquote>

              <p>
                That's exactly how I feel about my family. About every Jehovah's Witness I've ever known.
              </p>
              <p>
                They have zeal for God. They are sincere. They are trying <em>so hard</em> to earn His favor, to do everything right, to please Him.
              </p>
              <p>
                But they're missing the one thing He actually requires: knowing Jesus — the real Jesus, not a created being, but God in the flesh who died for their sins and rose again.
              </p>
              <p>
                I didn't build this website because I'm angry. I didn't build it because I want to be reconciled to my family — though I would give anything for that.
              </p>
              <p className="font-semibold text-lg" style={{ color: '#577557' }}>
                I built it because I want them to be reconciled to God.
              </p>
              <p>
                I built it because somewhere out there, a Witness is lying awake at 2am with doubts they're afraid to voice. Maybe it's my daughter. Maybe it's my son. Maybe it's my mother or father.
              </p>
              <p>
                And when they finally get brave enough to search for answers, I want this website to be here.
              </p>
              <p>
                Not to attack them. Not to mock what they believe. But to show them — from Scripture, from the Watchtower's own publications, from the evidence — what I wish someone had shown me decades earlier.
              </p>
              <p className="text-lg font-semibold">
                Jesus is God. And He's been waiting for them to call on His name.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="glow-line w-full my-12" />

          {/* One More Thing */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#2f3f2f' }}
            >
              One More Thing
            </h2>
            <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
              <p>
                On February 24, 2024 — I prayed another desperate prayer.
              </p>
              <p>
                For years, I had struggled with alcohol. I drank to cope with the guilt of how I left, the shame of my failures, and the constant anguish over my family's fate. The nightmares about what would happen to them if they never learned the truth.
              </p>
              <p>
                I had asked God for help before, but always on my terms. "Help me moderate." "Help me get this under control."
              </p>
              <p>
                On that day, I finally surrendered completely. I asked Him to remove alcohol from my life entirely.
              </p>
              <p className="font-semibold">
                And He did. Instantly. Completely.
              </p>
              <p>
                I haven't had a craving since. I don't attend meetings. I don't white-knuckle through each day. It's as if a switch was flipped inside me.
              </p>
              <p>
                The same God who answered my prayer about Jesus answered my prayer about alcohol the exact same way — the moment I stopped negotiating and truly surrendered.
              </p>
              <p>
                I share this because it's part of who I am. And because it's one more piece of evidence that the Jesus I prayed to that day at my desk is real, is God, and answers prayer.
              </p>
            </div>
          </section>

          {/* To My Family - Special Section */}
          <section
            className="mt-20 p-8 md:p-12 rounded-2xl"
            style={{
              backgroundColor: 'rgba(87, 117, 87, 0.06)',
              border: '2px solid rgba(87, 117, 87, 0.15)',
            }}
          >
            <h2
              className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center"
              style={{ color: '#2f3f2f' }}
            >
              To My Family
            </h2>
            <div className="space-y-6" style={{ color: '#2f3f2f', lineHeight: '1.9' }}>
              <p>
                If you're reading this — Mom, Dad, my brothers, my children, anyone — please know:
              </p>
              <p className="text-lg font-semibold" style={{ color: '#577557' }}>
                I'm not your enemy. I'm not deceived by Satan. I'm not bitter.
              </p>
              <p className="text-lg font-semibold" style={{ color: '#577557' }}>
                I love you. I have always loved you.
              </p>
              <p>
                And I am desperate — not for you to accept me again, but for you to know the real Jesus.
              </p>
              <p>
                Read the Scriptures on this site. Look at the evidence. Check it against the Watchtower's own Kingdom Interlinear Translation. You may not have a copy — the organization stopped printing it years ago, and many Kingdom Hall libraries have quietly removed theirs. Ask yourself: why would they discontinue and remove their own Greek interlinear Bible? Throughout this site, I've included photographs from my grandmother's copy so you can see for yourself what the Greek actually says.
              </p>
              <p>
                I'm not asking you to believe me.
              </p>
              <p className="text-lg font-semibold">
                I'm asking you to see what God's Word actually says.
              </p>
              <p>
                And if you ever want to talk, I'm here. I've always been here.
              </p>

              {/* Signature */}
              <p
                className="text-2xl font-serif italic text-right mt-10 pt-6"
                style={{ borderTop: '1px solid rgba(87, 117, 87, 0.2)', color: '#577557' }}
              >
                — Spencer
              </p>
            </div>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section
        className="py-20 md:py-28 px-4"
        style={{ backgroundColor: '#f6f8f6' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Begin Your Own Journey
          </h2>
          <p
            className="text-lg mb-10"
            style={{ color: '#5a6a5a', lineHeight: '1.8' }}
          >
            If my story resonates with you, I invite you to explore the evidence for yourself.
            Start with the Scriptures. Let God's Word speak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/why-the-bible-matters"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Start the Journey
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/share-your-story"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Share Your Story
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
