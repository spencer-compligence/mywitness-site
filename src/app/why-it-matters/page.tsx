import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WhyItMattersPage() {
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
            Why Does It Matter That Jesus Is God?
          </h1>
          <p
            className="text-xl md:text-2xl mb-8"
            style={{ color: '#577557', lineHeight: '1.6' }}
          >
            This isn&apos;t just theology—it&apos;s essential for salvation
          </p>
          <div
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: '#d4af37' }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            You might be thinking: &ldquo;Okay, I see the evidence that Scripture presents Jesus as God.
            But why is this so important? Can&apos;t I just believe Jesus was God&apos;s first creation,
            His &lsquo;master worker,&rsquo; and still be saved?&rdquo;
          </p>
          <p
            className="text-xl font-semibold"
            style={{ color: '#577557' }}
          >
            The answer is no. And here&apos;s why.
          </p>
        </div>

        {/* Section 1: Romans 10:9 */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Romans 10:9 — &ldquo;The Lord Jesus&rdquo;
          </h2>

          <div
            className="rounded-lg p-6 mb-6"
            style={{ backgroundColor: '#f6f8f6' }}
          >
            <p
              className="text-lg italic"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              &ldquo;...that if you confess with your mouth Jesus as <strong>Lord</strong>, and believe
              in your heart that God raised Him from the dead, you will be saved&rdquo;
            </p>
            <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
              — LSB
            </p>
          </div>

          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Paul says salvation requires:
          </p>
          <ol className="list-decimal ml-6 space-y-2 mb-6" style={{ color: '#2f3f2f' }}>
            <li><strong>Confessing with your mouth</strong> — Jesus is Lord (Kyrios)</li>
            <li><strong>Believing in your heart</strong> — God raised Him from the dead</li>
          </ol>

          <p
            className="text-lg mb-4"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Let&apos;s focus on that word <strong>&ldquo;Lord&rdquo;</strong> (Greek: Kyrios / κύριος).
          </p>

          <div
            className="rounded-xl p-6 mb-6"
            style={{ backgroundColor: '#e8ede8', borderLeft: '4px solid #577557' }}
          >
            <h3 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              What &ldquo;Lord&rdquo; Actually Means
            </h3>
            <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              In the Greek Old Testament (the Septuagint), the translators had a problem: how do you
              translate the personal name of God (YHWH) into Greek?
            </p>
            <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              They chose the word <strong>&ldquo;Kyrios&rdquo;</strong> (Lord).
            </p>
            <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              Every time you read &ldquo;LORD&rdquo; in small caps in an Old Testament English Bible,
              the Greek Septuagint uses &ldquo;Kyrios.&rdquo; And the Septuagint is what Paul and the
              early Christians used.
            </p>
            <p className="font-semibold" style={{ color: '#577557' }}>
              So when Paul writes &ldquo;confess... Jesus as Lord&rdquo; (Kyrios), he&apos;s saying:
              &ldquo;confess that Jesus is YHWH.&rdquo;
            </p>
          </div>

          <p
            className="text-lg"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            This isn&apos;t about acknowledging Jesus as a &ldquo;lord&rdquo; in the sense of a master or
            authority figure. This is about confessing that Jesus IS God.
          </p>
          <p
            className="text-xl font-semibold mt-4"
            style={{ color: '#577557' }}
          >
            That&apos;s what you must believe and confess to be saved.
          </p>
        </section>

        {/* Section 2: Only God Can Save */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Only God Can Save
          </h2>

          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Here&apos;s a fundamental theological problem: <strong>Only God can save us from our sins.</strong>
          </p>

          <div
            className="rounded-lg p-6 mb-6"
            style={{ backgroundColor: '#f6f8f6' }}
          >
            <h3 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              The Problem of Sin
            </h3>
            <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              Sin isn&apos;t just breaking rules—it&apos;s cosmic treason against an infinite, eternal,
              holy God. The offense of sin is infinite because the one we sin against is infinite.
            </p>
            <p className="font-semibold" style={{ color: '#577557' }}>
              Question: How can a finite being pay an infinite debt?
            </p>
            <p className="font-semibold mt-2" style={{ color: '#577557' }}>
              Answer: They can&apos;t.
            </p>
          </div>

          <div
            className="rounded-xl p-6 mb-6"
            style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}
          >
            <h3 className="font-semibold mb-3" style={{ color: '#8b6914' }}>
              If Jesus Is a Created Being...
            </h3>
            <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              If Jesus is the archangel Michael, or God&apos;s &ldquo;first creation,&rdquo; then:
            </p>
            <ul className="space-y-2 ml-4" style={{ color: '#2f3f2f' }}>
              <li>• He is a <strong>finite being</strong></li>
              <li>• He has a <strong>beginning</strong></li>
              <li>• His sacrifice has <strong>limited value</strong></li>
            </ul>
            <p className="mt-4 font-semibold" style={{ color: '#c62828' }}>
              A created being—no matter how exalted—cannot pay the infinite debt of sin against
              an infinite God. The mathematics doesn&apos;t work. The finite can never equal the infinite.
            </p>
          </div>

          <p
            className="text-lg font-semibold"
            style={{ color: '#577557' }}
          >
            If Jesus is not God, we have no Savior. Our sins remain unpaid. We are still dead
            in our trespasses.
          </p>
        </section>

        {/* Section 3: The Atonement Requires Deity */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            The Atonement Requires Deity
          </h2>

          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            The cross only makes sense if Jesus is both fully God and fully man.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <h3 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                Why Jesus Had to Be Fully Man:
              </h3>
              <p className="mb-4 text-sm italic" style={{ color: '#577557' }}>
                Hebrews 2:17 (LSB): &ldquo;Therefore, He had to be made like His brothers in all things,
                so that He might become a merciful and faithful high priest...&rdquo;
              </p>
              <ul className="space-y-2 text-sm" style={{ color: '#2f3f2f' }}>
                <li>• Represent humanity before God</li>
                <li>• Die in our place (a spirit being can&apos;t die)</li>
                <li>• Serve as our High Priest</li>
              </ul>
            </div>

            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <h3 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                Why Jesus Had to Be Fully God:
              </h3>
              <p className="mb-3 text-sm font-semibold" style={{ color: '#577557' }}>
                Only God can:
              </p>
              <ul className="space-y-2 text-sm" style={{ color: '#2f3f2f' }}>
                <li>• Satisfy God&apos;s perfect justice</li>
                <li>• Bear the full weight of infinite sin</li>
                <li>• Rise from the dead by His own power</li>
                <li>• Grant eternal life</li>
              </ul>
            </div>
          </div>

          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: '#e8ede8', borderLeft: '4px solid #577557' }}
          >
            <p className="italic mb-3" style={{ color: '#2f3f2f' }}>
              Wayne Grudem explains it this way in his Systematic Theology:
            </p>
            <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              &ldquo;Christ&apos;s divine nature was necessary for the atonement. If Christ had been merely
              a man, his death would have paid for the sins of no one except himself. If Christ
              had been a man who had lived a life of sin like all other humans, he could not have
              saved us from sin.&rdquo;
            </p>
            <p className="italic mb-3" style={{ color: '#2f3f2f' }}>
              R.C. Sproul adds:
            </p>
            <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              &ldquo;God&apos;s justice demands perfection. God&apos;s mercy provides the substitute. The perfection
              of Christ&apos;s sacrifice depends on His deity.&rdquo;
            </p>
          </div>

          <p
            className="text-lg font-semibold mt-6"
            style={{ color: '#577557' }}
          >
            If Jesus is not God, the atonement doesn&apos;t work. The cross becomes meaningless.
            We&apos;re still in our sins.
          </p>
        </section>

        {/* Section 4: Worship Requires Deity */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Worship Requires Deity
          </h2>

          <div
            className="rounded-lg p-6 mb-6"
            style={{ backgroundColor: '#f6f8f6' }}
          >
            <p className="text-lg italic" style={{ color: '#2f3f2f' }}>
              &ldquo;You shall have no other gods before Me. You shall not make for yourself an idol...
              You shall not worship them or serve them&rdquo;
            </p>
            <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
              — Exodus 20:3-5 (LSB)
            </p>
          </div>

          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            God is absolutely clear: <strong>worship belongs to Him alone.</strong> To worship
            any created being is idolatry—one of the worst sins in Scripture.
          </p>

          <h3 className="text-xl font-semibold mb-4" style={{ color: '#2f3f2f' }}>
            Yet Jesus Accepts Worship
          </h3>
          <p
            className="text-lg mb-4"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Throughout the Gospels, people worship Jesus (Greek: proskuneo)—and He never refuses it:
          </p>
          <ul className="space-y-2 mb-6 ml-4" style={{ color: '#2f3f2f' }}>
            <li>• <strong>Matthew 14:33</strong> — The disciples worship Him after He walks on water</li>
            <li>• <strong>Matthew 28:9</strong> — Women worship the risen Jesus</li>
            <li>• <strong>Matthew 28:17</strong> — All the disciples worship Him on the mountain</li>
            <li>• <strong>John 9:38</strong> — The blind man worships Jesus</li>
          </ul>

          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}
          >
            <p className="font-semibold mb-3" style={{ color: '#8b6914' }}>
              Revelation Shows Heaven Worshiping Jesus
            </p>
            <p className="italic mb-3" style={{ color: '#2f3f2f' }}>
              Revelation 5:13-14 (LSB): &ldquo;And every created thing which is in heaven and on the earth
              and under the earth and on the sea, and all things in them, I heard saying, &lsquo;To Him
              who sits on the throne, <strong>and to the Lamb</strong>, be blessing and honor and glory
              and dominion forever and ever.&rsquo;&rdquo;
            </p>
            <p className="font-semibold" style={{ color: '#c62828' }}>
              If Jesus is not God, heaven itself is committing cosmic idolatry.
            </p>
          </div>
        </section>

        {/* Section 5: Prayer Requires Deity */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Prayer Requires Deity
          </h2>

          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Finally, and most importantly for your journey: <strong>you must pray TO Jesus,
            not just through Him.</strong>
          </p>

          <div
            className="rounded-lg p-6 mb-6"
            style={{ backgroundColor: '#f6f8f6' }}
          >
            <p className="text-lg italic" style={{ color: '#2f3f2f' }}>
              &ldquo;...for &lsquo;whoever calls on the name of <strong>the Lord</strong> will be saved.&rsquo;&rdquo;
            </p>
            <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
              — Romans 10:13 (LSB)
            </p>
          </div>

          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            This is a quote from Joel 2:32, which in the Hebrew says &ldquo;whoever calls on the name
            of <strong>YHWH</strong>.&rdquo; Paul applies this directly to Jesus.
          </p>
          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            To &ldquo;call on the name&rdquo; of someone is to pray to them. Paul is saying: <strong>pray
            to Jesus = call on YHWH = be saved.</strong>
          </p>

          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: '#e8ede8', borderLeft: '4px solid #577557' }}
          >
            <h3 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              You Cannot Pray to a Created Being
            </h3>
            <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              The Jehovah&apos;s Witnesses are right about one thing: you cannot pray to angels or
              created beings. That would be wrong.
            </p>
            <p className="font-semibold" style={{ color: '#577557' }}>
              But if Jesus is God, then praying to Him isn&apos;t just permitted—it&apos;s required
              for salvation.
            </p>
          </div>

          <p
            className="text-lg mt-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            The Watchtower teaches you to pray <strong>through</strong> Jesus <strong>to</strong> Jehovah.
            But Scripture teaches you to pray <strong>TO</strong> Jesus.
          </p>
          <p
            className="text-xl font-semibold mt-4"
            style={{ color: '#577557' }}
          >
            This isn&apos;t a small difference. This is the difference between salvation and being lost.
          </p>
        </section>

        {/* What You Must Do */}
        <section className="mb-12">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            What You Must Do
          </h2>
          <p
            className="text-lg mb-4 font-semibold"
            style={{ color: '#577557' }}
          >
            To be saved, you must:
          </p>
          <ol className="list-decimal ml-6 space-y-3 mb-6" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
            <li><strong>Believe in your heart</strong> that Jesus is God—fully divine, equal with the Father</li>
            <li><strong>Confess with your mouth</strong> that Jesus is Lord (YHWH)</li>
            <li><strong>Believe</strong> that God raised Him from the dead</li>
            <li><strong>Call on His name</strong>—pray TO Jesus, asking Him to save you</li>
          </ol>

          <div
            className="rounded-lg p-6"
            style={{ backgroundColor: '#f6f8f6' }}
          >
            <p className="text-lg italic" style={{ color: '#2f3f2f' }}>
              &ldquo;But as many as received Him, to them He gave the right to become children of God,
              even to those who believe in His name&rdquo;
            </p>
            <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
              — John 1:12 (LSB)
            </p>
          </div>

          <p
            className="text-lg mt-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            You must receive Jesus—not just as teacher, prophet, or &ldquo;master worker,&rdquo; but as
            God Himself come in the flesh to save you.
          </p>
        </section>

        {/* Next Step CTA */}
        <div
          className="rounded-xl p-8"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #fff4e6, #f6f8f6)',
            borderLeft: '4px solid #d4af37'
          }}
        >
          <h2
            className="text-3xl font-serif font-semibold mb-6 text-center"
            style={{ color: '#2f3f2f' }}
          >
            Next Step: Praying to Jesus
          </h2>
          <div className="space-y-4" style={{ color: '#2f3f2f', lineHeight: '1.8' }}>
            <p>
              I know this might feel like a huge step. You&apos;ve been taught your entire life that
              praying to Jesus is wrong, that it&apos;s a form of idolatry.
            </p>
            <p>
              But what if everything you&apos;ve been taught was backwards? What if <em>not</em> praying
              to Jesus is what cuts you off from salvation?
            </p>
            <p>
              Let me share my story of the first time I prayed to Jesus—and what happened.
            </p>
            <div className="text-center pt-4">
              <Link
                href="/praying-to-jesus"
                className="inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: '#577557',
                  color: '#ffffff',
                }}
              >
                Continue to: Praying to Jesus for Salvation →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
