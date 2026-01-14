import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Why Does It Matter That Jesus Is God? | MyWitness',
  description:
    'The deity of Christ is not merely a doctrinal detail—it is the foundation of salvation itself. Without it, the atonement fails and salvation is impossible.',
};

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
            This isn&apos;t just theology—it&apos;s the foundation of salvation itself
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

        {/* Key Summary Box */}
        <div
          className="rounded-xl p-6 mb-12"
          style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #d4af37' }}
        >
          <h3 className="text-xl font-bold mb-4" style={{ color: '#2f3f2f' }}>
            Without the Deity of Christ:
          </h3>
          <ul className="space-y-2" style={{ color: '#2f3f2f' }}>
            <li className="flex items-start gap-2">
              <span style={{ color: '#c62828' }}>✗</span>
              <span><strong>The atonement fails</strong> — a finite being cannot pay an infinite debt</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#c62828' }}>✗</span>
              <span><strong>Salvation is impossible</strong> — only God can save (Isaiah 43:11)</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#c62828' }}>✗</span>
              <span><strong>Worship becomes idolatry</strong> — only God may be worshiped</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#c62828' }}>✗</span>
              <span><strong>Prayer to Jesus is blasphemy</strong> — prayer is worship directed to God alone</span>
            </li>
          </ul>
        </div>

        {/* Section 1: John 8:24 */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            John 8:24 — &ldquo;Unless You Believe That I AM&rdquo;
          </h2>

          <div
            className="rounded-lg p-6 mb-6"
            style={{ backgroundColor: '#f6f8f6' }}
          >
            <p
              className="text-lg italic"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              &ldquo;Therefore I said to you that you will die in your sins; for unless you believe
              that <strong>I am</strong>, you will die in your sins.&rdquo;
            </p>
            <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
              — John 8:24 (LSB)
            </p>
          </div>

          <p
            className="text-lg mb-4"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Jesus Himself declares that believing in His divine identity is required to avoid dying
            in your sins. Notice:
          </p>

          <ul className="space-y-3 mb-6 ml-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
            <li>
              <strong>&ldquo;I am&rdquo; (ἐγώ εἰμι / ego eimi)</strong> — This echoes God&apos;s
              self-revelation to Moses in Exodus 3:14: &ldquo;I AM WHO I AM.&rdquo;
            </li>
            <li>
              <strong>No predicate</strong> — In Greek, Jesus simply says &ldquo;unless you believe
              that I AM&rdquo; — using the divine name.
            </li>
            <li>
              <strong>The consequence is absolute</strong> — &ldquo;You will die in your sins.&rdquo;
              Unforgiven sin and eternal death.
            </li>
          </ul>

          <p
            className="text-lg mb-4"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Jesus repeated this claim throughout John&apos;s Gospel:
          </p>
          <ul className="space-y-2 mb-6 ml-4" style={{ color: '#577557' }}>
            <li>• John 8:28: &ldquo;Then you will know that <strong>I am</strong>&rdquo;</li>
            <li>• John 8:58: &ldquo;Before Abraham was, <strong>I am</strong>&rdquo;</li>
            <li>• John 13:19: &ldquo;So that you may believe that <strong>I am</strong>&rdquo;</li>
          </ul>

          <p
            className="text-xl font-semibold"
            style={{ color: '#577557' }}
          >
            Jesus said believing in His divine identity is required to avoid dying in your sins.
            This isn&apos;t optional theology—it&apos;s the foundation of salvation.
          </p>
        </section>

        {/* Section 2: Romans 10:9 */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Romans 10:9-13 — Confessing Jesus as LORD
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
              in your heart that God raised Him from the dead, you will be saved... for &lsquo;WHOEVER
              WILL CALL ON THE NAME OF THE LORD WILL BE SAVED.&rsquo;&rdquo;
            </p>
            <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
              — Romans 10:9, 13 (LSB)
            </p>
          </div>

          <p
            className="text-lg mb-6"
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
              In the Greek Old Testament (the Septuagint), the translators used <strong>&ldquo;Kyrios&rdquo;</strong> to
              translate the personal name of God (YHWH). Every time you read &ldquo;LORD&rdquo; in small caps
              in an English Old Testament, the Greek Septuagint uses &ldquo;Kyrios.&rdquo;
            </p>
            <p className="font-semibold" style={{ color: '#577557' }}>
              When Paul writes &ldquo;confess... Jesus as Lord&rdquo; (Kyrios), he&apos;s saying:
              &ldquo;confess that Jesus is YHWH.&rdquo;
            </p>
          </div>

          <p
            className="text-lg mb-4"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Notice Paul&apos;s logic in Romans 10:
          </p>
          <ul className="space-y-2 mb-6 ml-4" style={{ color: '#2f3f2f' }}>
            <li>• v. 9: Confess Jesus as <strong>LORD</strong></li>
            <li>• v. 12: &ldquo;The same Lord is Lord of all&rdquo;</li>
            <li>• v. 13: Quotes Joel 2:32 about calling on <strong>Yahweh</strong></li>
            <li>• v. 14: &ldquo;How then will they call on Him in whom they have not believed?&rdquo;</li>
          </ul>

          <p
            className="text-lg"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Paul quotes Joel 2:32, which in the original Hebrew says &ldquo;whoever calls on the name
            of <strong>YHWH</strong> will be saved.&rdquo; Paul applies this to Jesus. Calling on
            Jesus&apos; name IS calling on Yahweh&apos;s name.
          </p>
          <p
            className="text-xl font-semibold mt-4"
            style={{ color: '#577557' }}
          >
            Salvation requires confessing that Jesus is Yahweh—not merely a good teacher, prophet,
            or created being.
          </p>
        </section>

        {/* Section 3: Exclusive Claims */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            There Is No Other Way
          </h2>

          <div className="space-y-6 mb-6">
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <p
                className="text-lg italic"
                style={{ color: '#2f3f2f', lineHeight: '1.7' }}
              >
                &ldquo;And there is salvation in no one else; for there is no other name under heaven
                that has been given among men by which we must be saved.&rdquo;
              </p>
              <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
                — Acts 4:12 (LSB)
              </p>
            </div>

            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <p
                className="text-lg italic"
                style={{ color: '#2f3f2f', lineHeight: '1.7' }}
              >
                &ldquo;Jesus said to him, &lsquo;I am the way, and the truth, and the life; no one comes
                to the Father except through Me.&rsquo;&rdquo;
              </p>
              <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
                — John 14:6 (LSB)
              </p>
            </div>
          </div>

          <p
            className="text-lg mb-4"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Now connect this with Isaiah 43:11:
          </p>

          <div
            className="rounded-lg p-6 mb-6"
            style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #d4af37' }}
          >
            <p
              className="text-lg italic"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              &ldquo;I, even I, am Yahweh, and there is <strong>no savior besides Me</strong>.&rdquo;
            </p>
            <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
              — Isaiah 43:11 (LSB)
            </p>
          </div>

          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: '#e8ede8', borderLeft: '4px solid #577557' }}
          >
            <h3 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              The Logic Is Inescapable:
            </h3>
            <ul className="space-y-2" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <li><strong>Premise 1:</strong> There is no Savior besides Yahweh (Isaiah 43:11)</li>
              <li><strong>Premise 2:</strong> Jesus is the only name by which we can be saved (Acts 4:12)</li>
              <li><strong>Conclusion:</strong> Jesus must be Yahweh</li>
            </ul>
          </div>

          <p
            className="text-xl font-semibold mt-6"
            style={{ color: '#577557' }}
          >
            If there is no savior besides Yahweh, and Jesus is the only name that saves,
            then Jesus IS Yahweh.
          </p>
        </section>

        {/* Section 4: Only God Can Save - The Infinite Problem */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            The Infinite Sin Problem
          </h2>

          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Here&apos;s a fundamental theological problem that the early church wrestled with:
            <strong> How can sinful humanity be reconciled to an infinite, holy God?</strong>
          </p>

          <div
            className="rounded-lg p-6 mb-6"
            style={{ backgroundColor: '#f6f8f6' }}
          >
            <h3 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              The Problem:
            </h3>
            <ul className="space-y-2" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <li>• Sin against an <strong>infinite God</strong> creates an <strong>infinite debt</strong></li>
              <li>• No <strong>finite being</strong> can pay an infinite debt</li>
              <li>• The debt must be paid, or God&apos;s justice is violated</li>
              <li>• Humans owe the debt, but cannot pay it</li>
            </ul>
          </div>

          <div
            className="rounded-lg p-6 mb-6"
            style={{ backgroundColor: '#e8ede8' }}
          >
            <h3 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              The Solution:
            </h3>
            <ul className="space-y-2" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              <li>• Only <strong>God</strong> can pay an infinite debt</li>
              <li>• Only a <strong>human</strong> should pay the debt (since humans sinned)</li>
              <li>• Therefore, the Redeemer must be <strong>both God AND man</strong></li>
            </ul>
          </div>

          <div
            className="rounded-xl p-6 mb-6"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <p className="italic mb-3" style={{ color: '#577557' }}>
              Saint Anselm of Canterbury (1033-1109) articulated this in his classic work
              &ldquo;Cur Deus Homo&rdquo; (Why God Became Man):
            </p>
            <p className="text-lg" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              &ldquo;This debt was so great that, while none but man must solve the debt,
              none but God was able to do it; so that he who does it must be both God and man.&rdquo;
            </p>
          </div>

          <div
            className="rounded-xl p-6 mb-6"
            style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}
          >
            <p className="font-semibold mb-3" style={{ color: '#8b6914' }}>
              If Jesus Is a Created Being...
            </p>
            <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              If Jesus is the archangel Michael, or God&apos;s &ldquo;first creation,&rdquo; then:
            </p>
            <ul className="space-y-2 ml-4" style={{ color: '#2f3f2f' }}>
              <li>• He is a <strong>finite being</strong></li>
              <li>• His sacrifice has <strong>limited value</strong></li>
              <li>• The infinite debt <strong>remains unpaid</strong></li>
            </ul>
            <p className="mt-4 font-semibold" style={{ color: '#c62828' }}>
              A created being—no matter how exalted—cannot pay the infinite debt of sin against
              an infinite God. The mathematics doesn&apos;t work.
            </p>
          </div>

          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <p className="italic mb-3" style={{ color: '#577557' }}>
              T.F. Torrance explained the terrible implications:
            </p>
            <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              &ldquo;If the deity of Christ is denied, then the cross becomes a terrible monstrosity.
              If Jesus Christ is man only and not also God, then we lose faith in God, because how
              could we believe in a God who allows the best man that ever lived to be put to death
              on the cross?&rdquo;
            </p>
          </div>

          <p
            className="text-xl font-semibold mt-6"
            style={{ color: '#577557' }}
          >
            If Jesus is not God, we have no Savior. Our sins remain unpaid. We are still dead
            in our trespasses.
          </p>
        </section>

        {/* Section 5: The Value of the Sacrifice */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Why Both Natures Are Required
          </h2>

          <div
            className="rounded-lg p-6 mb-6"
            style={{ backgroundColor: '#f6f8f6' }}
          >
            <p
              className="text-lg italic"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              &ldquo;For it is impossible for the blood of bulls and goats to take away sins.&rdquo;
            </p>
            <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
              — Hebrews 10:4 (LSB)
            </p>
          </div>

          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Animal sacrifices were insufficient—they could only provide temporary covering,
            not permanent removal of sin. The sacrifice must be of infinite value to satisfy
            the infinite debt of sin against an infinite God.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <h3 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
                Why Jesus Had to Be Fully Man:
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: '#2f3f2f' }}>
                <li>• Represent humanity before God</li>
                <li>• Die in our place (a spirit can&apos;t die)</li>
                <li>• Identify with us in suffering and temptation</li>
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
              <ul className="space-y-2 text-sm" style={{ color: '#2f3f2f' }}>
                <li>• Bear the infinite weight of God&apos;s wrath</li>
                <li>• Provide a sacrifice of infinite value</li>
                <li>• Conquer death by His own power</li>
                <li>• Save completely and eternally</li>
              </ul>
            </div>
          </div>

          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: '#e8ede8', borderLeft: '4px solid #577557' }}
          >
            <p className="italic mb-3" style={{ color: '#577557' }}>
              The Heidelberg Catechism (Q&A 17) asks:
            </p>
            <p className="mb-3 font-semibold" style={{ color: '#2f3f2f' }}>
              &ldquo;Why must the mediator also be true God?&rdquo;
            </p>
            <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              &ldquo;So that, by the power of his divinity, he might bear the weight of God&apos;s
              anger in his humanity and earn for us and restore to us righteousness and life.&rdquo;
            </p>
          </div>
        </section>

        {/* Section 6: Jesus Our High Priest */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Jesus: Our Eternal High Priest
          </h2>

          <div
            className="rounded-lg p-6 mb-6"
            style={{ backgroundColor: '#f6f8f6' }}
          >
            <p
              className="text-lg italic"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              &ldquo;Therefore He is able also to save forever those who draw near to God through Him,
              since He always lives to make intercession for them.&rdquo;
            </p>
            <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
              — Hebrews 7:25 (LSB)
            </p>
          </div>

          <p
            className="text-lg mb-4"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Notice what this verse claims:
          </p>
          <ul className="space-y-2 mb-6 ml-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
            <li><strong>&ldquo;Save forever&rdquo;</strong> — Only God can provide eternal salvation</li>
            <li><strong>&ldquo;Always lives&rdquo;</strong> — Jesus has an eternal, unchanging priesthood</li>
            <li><strong>&ldquo;Make intercession&rdquo;</strong> — Jesus is actively mediating for us right now</li>
          </ul>

          <div
            className="rounded-lg p-6 mb-6"
            style={{ backgroundColor: '#f6f8f6' }}
          >
            <p
              className="text-lg italic"
              style={{ color: '#2f3f2f', lineHeight: '1.7' }}
            >
              &ldquo;For there is one God, and one mediator also between God and men, the man Christ Jesus.&rdquo;
            </p>
            <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
              — 1 Timothy 2:5 (LSB)
            </p>
          </div>

          <p
            className="text-lg"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Jesus can be the mediator between God and man because He IS both God and man.
            He bridges the infinite gap between divine holiness and sinful humanity because
            He partakes of both natures.
          </p>
        </section>

        {/* Section 7: Worship Requires Deity */}
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
            God is absolutely clear: <strong>worship belongs to Him alone.</strong> Angels refuse
            worship (Revelation 19:10; 22:8-9). To worship any created being is idolatry.
          </p>

          <p
            className="text-lg mb-4"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Yet Jesus accepts worship throughout Scripture—and He never refuses it:
          </p>
          <ul className="space-y-2 mb-6 ml-4" style={{ color: '#2f3f2f' }}>
            <li>• <strong>Matthew 14:33</strong> — The disciples worship Him after He walks on water</li>
            <li>• <strong>Matthew 28:9, 17</strong> — Women and disciples worship the risen Jesus</li>
            <li>• <strong>John 9:38</strong> — The healed blind man worships Jesus</li>
            <li>• <strong>Hebrews 1:6</strong> — God commands all angels to worship Jesus</li>
          </ul>

          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}
          >
            <p className="font-semibold mb-3" style={{ color: '#8b6914' }}>
              Revelation Shows Heaven Worshiping Jesus
            </p>
            <p className="italic mb-3" style={{ color: '#2f3f2f' }}>
              &ldquo;And every created thing which is in heaven and on the earth... I heard saying,
              &lsquo;To Him who sits on the throne, <strong>and to the Lamb</strong>, be blessing
              and honor and glory and dominion forever and ever.&rsquo;&rdquo;
              <span className="block text-sm mt-1 not-italic font-semibold" style={{ color: '#577557' }}>
                — Revelation 5:13 (LSB)
              </span>
            </p>
            <p className="font-semibold" style={{ color: '#c62828' }}>
              If Jesus is not God, heaven itself is committing cosmic idolatry.
            </p>
          </div>
        </section>

        {/* Section 8: Prayer Requires Deity */}
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
              &ldquo;They went on stoning Stephen as he called on the Lord and said, &lsquo;Lord Jesus,
              receive my spirit!&rsquo; Then falling on his knees, he cried out with a loud voice,
              &lsquo;Lord, do not hold this sin against them!&rsquo;&rdquo;
            </p>
            <p className="text-sm mt-2 font-semibold" style={{ color: '#577557' }}>
              — Acts 7:59-60 (LSB)
            </p>
          </div>

          <p
            className="text-lg mb-4"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Stephen <strong>prayed to Jesus</strong> as he was dying. Notice:
          </p>
          <ul className="space-y-2 mb-6 ml-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
            <li>• He &ldquo;called on&rdquo; the Lord — the same phrase used for calling on God in prayer</li>
            <li>• He addressed Jesus directly: &ldquo;Lord Jesus, receive my spirit&rdquo;</li>
            <li>• He asked Jesus to forgive sins — a divine prerogative</li>
            <li>• His words parallel Jesus&apos; own prayer to the Father (Luke 23:46)</li>
          </ul>

          <div
            className="rounded-xl p-6 mb-6"
            style={{ backgroundColor: '#e8ede8', borderLeft: '4px solid #577557' }}
          >
            <p className="italic mb-2" style={{ color: '#577557' }}>
              Even the Watchtower acknowledged this:
            </p>
            <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              &ldquo;Obviously, then, Stephen&apos;s words, &lsquo;Lord Jesus, receive my spirit,&rsquo;
              were a prayer.&rdquo;
              <span className="block text-sm mt-1 font-semibold" style={{ color: '#577557' }}>
                — The Watchtower, February 1, 1959, p. 96
              </span>
            </p>
          </div>

          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            Paul also prayed to Jesus (2 Corinthians 12:8-9). John prayed to Jesus
            (&ldquo;Come, Lord Jesus&rdquo; — Revelation 22:20). Christians are defined as those
            who &ldquo;call on the name of our Lord Jesus Christ&rdquo; (1 Corinthians 1:2).
          </p>

          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}
          >
            <h3 className="font-semibold mb-3" style={{ color: '#2f3f2f' }}>
              You Cannot Pray to a Created Being
            </h3>
            <p className="mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              The Jehovah&apos;s Witnesses are right about one thing: you cannot pray to angels or
              created beings. That would be idolatry.
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

        {/* Section 9: Responding to Common Objections */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Common Objections
          </h2>

          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            You may have questions or objections. Here are brief responses to the most common ones:
          </p>

          <div className="space-y-4 mb-6">
            <div
              className="rounded-lg p-5"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                &ldquo;Jesus is &lsquo;a god,&rsquo; not THE God&rdquo;
              </p>
              <p style={{ color: '#577557', lineHeight: '1.6' }}>
                This creates polytheism. Isaiah 43:10 says, &ldquo;Before Me there was no God formed,
                and there will be none after Me.&rdquo; If Jesus is &ldquo;a god&rdquo; but not Yahweh,
                then either the Bible contradicts itself, or Jesus is a false god.
              </p>
            </div>

            <div
              className="rounded-lg p-5"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                &ldquo;The Bible says Jesus is the Son of God, not God&rdquo;
              </p>
              <p style={{ color: '#577557', lineHeight: '1.6' }}>
                In ancient usage, &ldquo;Son of&rdquo; means &ldquo;same nature as.&rdquo; The Jews
                understood this—that&apos;s why they tried to stone Jesus for &ldquo;making Himself
                equal with God&rdquo; when He called God His Father (John 5:18).
              </p>
            </div>

            <div
              className="rounded-lg p-5"
              style={{ backgroundColor: '#f6f8f6' }}
            >
              <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>
                &ldquo;We can pray THROUGH Jesus without praying TO Him&rdquo;
              </p>
              <p style={{ color: '#577557', lineHeight: '1.6' }}>
                Scripture shows both. Yes, we pray through Jesus (John 14:13). But Scripture also
                shows direct prayer TO Jesus: Stephen (Acts 7:59), Paul (2 Cor 12:8), John (Rev 22:20),
                and all Christians who &ldquo;call on the name of our Lord Jesus Christ&rdquo; (1 Cor 1:2).
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/why-it-matters/objections"
              className="inline-block px-6 py-3 rounded-lg text-lg font-semibold transition-all hover:scale-105"
              style={{
                backgroundColor: '#e8ede8',
                color: '#2f3f2f',
              }}
            >
              Read Full Responses to Objections →
            </Link>
          </div>
        </section>

        {/* Section 10: The Lewis Trilemma */}
        <section className="mb-16">
          <h2
            className="text-3xl font-serif font-bold mb-6"
            style={{ color: '#2f3f2f' }}
          >
            Liar, Lunatic, or Lord?
          </h2>

          <p
            className="text-lg mb-6"
            style={{ color: '#2f3f2f', lineHeight: '1.8' }}
          >
            If Jesus is not God, His claims make Him either a deliberate liar or a delusional lunatic.
            There is no middle ground.
          </p>

          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <p className="italic mb-3" style={{ color: '#577557' }}>
              C.S. Lewis put it this way:
            </p>
            <p className="text-lg" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              &ldquo;A man who was merely a man and said the sort of things Jesus said would not be
              a great moral teacher. He would either be a lunatic—on the level with a man who says
              he is a poached egg—or else he would be the Devil of Hell. You must make your choice.
              Either this man was, and is, the Son of God: or else a madman or something worse.&rdquo;
            </p>
          </div>

          <p
            className="text-xl font-semibold mt-6"
            style={{ color: '#577557' }}
          >
            You cannot simply call Jesus a &ldquo;good teacher&rdquo; while denying His deity.
            His claims don&apos;t allow that option.
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
            <li><strong>Believe</strong> that Jesus is &ldquo;I AM&rdquo; — fully divine, equal with the Father (John 8:24)</li>
            <li><strong>Confess</strong> that Jesus is Lord (YHWH) — not just a teacher or created being (Romans 10:9)</li>
            <li><strong>Believe</strong> that God raised Him from the dead (Romans 10:9)</li>
            <li><strong>Call on His name</strong> — pray TO Jesus, asking Him to save you (Romans 10:13)</li>
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
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: '#577557',
                  color: '#ffffff',
                  boxShadow: '0 4px 12px rgba(87, 117, 87, 0.3)',
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
