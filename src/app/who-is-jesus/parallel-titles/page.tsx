import Link from 'next/link';

export const metadata = {
  title: 'Parallel Titles: Yahweh and Jesus | Who Is Jesus? | MyWitness',
  description:
    'A comprehensive chart showing how titles exclusive to Yahweh in the Old Testament are applied to Jesus in the New Testament, with full scripture quotations from the LSB.',
};

interface ScriptureRef {
  ref: string;
  text: string;
}

interface ParallelTitle {
  title: string;
  yahwehLabel?: string;
  jesusLabel?: string;
  yahweh: ScriptureRef[];
  jesus: ScriptureRef[];
  note?: string;
}

const parallelTitles: ParallelTitle[] = [
  {
    title: 'Savior',
    yahweh: [
      {
        ref: 'Isaiah 43:11',
        text: 'I, even I, am Yahweh, and there is no savior besides Me.',
      },
      {
        ref: 'Isaiah 45:21',
        text: 'Declare and bring it forth. Indeed, let them consult together. Who has made this heard from ancient times? Who has long since declared it? Is it not I, Yahweh? And there is no other God besides Me, a righteous God and a Savior; there is none except Me.',
      },
      {
        ref: 'Hosea 13:4',
        text: 'Yet I have been Yahweh your God since the land of Egypt; and you were not to know any god except Me, for there is no savior besides Me.',
      },
    ],
    jesus: [
      {
        ref: 'John 4:42',
        text: 'And they were saying to the woman, \u2018It is no longer because of what you said that we believe, for we have heard for ourselves and know that this One is truly the Savior of the world.\u2019',
      },
      {
        ref: 'Titus 2:13',
        text: 'Looking for the blessed hope and the appearing of the glory of our great God and Savior, Christ Jesus.',
      },
      {
        ref: '2 Peter 1:1',
        text: 'Simon Peter, a slave and apostle of Jesus Christ, to those who have received a faith of the same kind as ours, by the righteousness of our God and Savior, Jesus Christ.',
      },
      {
        ref: 'Luke 2:11',
        text: 'For today in the city of David there has been born for you a Savior, who is Christ the Lord.',
      },
    ],
  },
  {
    title: 'Lord of Lords',
    yahweh: [
      {
        ref: 'Deuteronomy 10:17',
        text: 'For Yahweh your God is the God of gods and the Lord of lords, the great, the mighty, and the awesome God who does not show partiality nor take a bribe.',
      },
      {
        ref: 'Psalm 136:3',
        text: 'Give thanks to the Lord of lords, for His lovingkindness is everlasting.',
      },
    ],
    jesus: [
      {
        ref: 'Revelation 17:14',
        text: 'These will wage war against the Lamb, and the Lamb will overcome them, because He is Lord of lords and King of kings, and those who are with Him are the called and chosen and faithful.',
      },
      {
        ref: 'Revelation 19:16',
        text: 'And on His robe and on His thigh He has a name written, \u2018KING OF KINGS, AND LORD OF LORDS.\u2019',
      },
    ],
  },
  {
    title: 'First and Last',
    yahweh: [
      {
        ref: 'Isaiah 44:6',
        text: 'Thus says Yahweh, the King of Israel and his Redeemer, Yahweh of hosts: \u2018I am the first, and I am the last, and there is no God besides Me.\u2019',
      },
      {
        ref: 'Isaiah 48:12',
        text: 'Listen to Me, O Jacob, even Israel whom I called; I am He, I am the first, I am also the last.',
      },
      {
        ref: 'Isaiah 41:4',
        text: 'Who has done this and accomplished it, calling forth the generations from the beginning? I, Yahweh, am the first, and with the last. I am He.',
      },
    ],
    jesus: [
      {
        ref: 'Revelation 1:17\u201318',
        text: 'And when I saw Him, I fell at His feet like a dead man. And He placed His right hand on me, saying, \u2018Do not be afraid; I am the first and the last, and the living One; and I was dead, and behold, I am alive forevermore, and I have the keys of death and of Hades.\u2019',
      },
      {
        ref: 'Revelation 2:8',
        text: 'And to the angel of the church in Smyrna write: The first and the last, who was dead, and has come to life, says this\u2026',
      },
      {
        ref: 'Revelation 22:13',
        text: 'I am the Alpha and the Omega, the first and the last, the beginning and the end.',
      },
    ],
  },
  {
    title: 'Alpha and Omega',
    yahwehLabel: 'Yahweh (Context in Revelation)',
    yahweh: [
      {
        ref: 'Revelation 1:8',
        text: '\u2018I am the Alpha and the Omega,\u2019 says the Lord God, \u2018who is and who was and who is to come, the Almighty.\u2019',
      },
      {
        ref: 'Revelation 21:6',
        text: 'Then He said to me, \u2018It is done. I am the Alpha and the Omega, the beginning and the end. I will give to the one who thirsts from the spring of the water of life without cost.\u2019',
      },
    ],
    jesus: [
      {
        ref: 'Revelation 22:13',
        text: 'I am the Alpha and the Omega, the first and the last, the beginning and the end.',
      },
    ],
    note: 'Context of Revelation 22:12\u201316 makes clear this is Jesus speaking: "Behold, I am coming quickly\u2026 I, Jesus, have sent My angel\u2026"',
  },
  {
    title: 'Judge of All',
    yahweh: [
      {
        ref: 'Genesis 18:25',
        text: 'Far be it from You to do such a thing, to put to death the righteous with the wicked, so that the righteous and the wicked are treated alike. Far be it from You! Shall not the Judge of all the earth do justice?',
      },
      {
        ref: 'Psalm 50:6',
        text: 'And the heavens declare His righteousness, for God Himself is judge. Selah',
      },
      {
        ref: 'Psalm 96:13',
        text: 'Before Yahweh, for He is coming, for He is coming to judge the earth. He will judge the world in righteousness and the peoples in His faithfulness.',
      },
    ],
    jesus: [
      {
        ref: 'John 5:22',
        text: 'For not even the Father judges anyone, but He has given all judgment to the Son.',
      },
      {
        ref: 'John 5:27',
        text: 'And He gave Him authority to execute judgment, because He is the Son of Man.',
      },
      {
        ref: '2 Timothy 4:1',
        text: 'I solemnly charge you in the presence of God and of Christ Jesus, who is to judge the living and the dead, and by His appearing and His kingdom\u2026',
      },
      {
        ref: 'Acts 17:31',
        text: 'Because He has fixed a day in which He will judge the world in righteousness through a Man whom He determined, having furnished proof to all by raising Him from the dead.',
      },
    ],
  },
  {
    title: 'Shepherd',
    yahweh: [
      {
        ref: 'Psalm 23:1',
        text: 'Yahweh is my shepherd, I shall not want.',
      },
      {
        ref: 'Psalm 100:3',
        text: 'Know that Yahweh, He is God; it is He who has made us, and not we ourselves; we are His people and the sheep of His pasture.',
      },
      {
        ref: 'Ezekiel 34:11\u201312',
        text: 'For thus says Lord Yahweh, \u2018Behold, I Myself will search for My sheep and seek them out. As a shepherd cares for his herd in the day when he is among his scattered sheep, so I will care for My sheep\u2026\u2019',
      },
    ],
    jesus: [
      {
        ref: 'John 10:11',
        text: 'I am the good shepherd; the good shepherd lays down His life for the sheep.',
      },
      {
        ref: 'John 10:14',
        text: 'I am the good shepherd, and I know My own and My own know Me.',
      },
      {
        ref: 'Hebrews 13:20',
        text: 'Now the God of peace, who brought up from the dead the great Shepherd of the sheep through the blood of the eternal covenant, even Jesus our Lord\u2026',
      },
      {
        ref: '1 Peter 5:4',
        text: 'And when the Chief Shepherd appears, you will receive the unfading crown of glory.',
      },
    ],
  },
  {
    title: 'Rock',
    yahweh: [
      {
        ref: 'Deuteronomy 32:4',
        text: 'The Rock! His work is perfect, for all His ways are just; a God of faithfulness and without injustice, righteous and upright is He.',
      },
      {
        ref: 'Psalm 18:2',
        text: 'Yahweh is my rock and my fortress and my deliverer, my God, my rock, in whom I take refuge; my shield and the horn of my salvation, my stronghold.',
      },
      {
        ref: 'Isaiah 44:8',
        text: 'Do not be in dread and do not fear; have I not long since made you hear and declared it? And you are My witnesses. Is there any God besides Me, or is there any other Rock? I know of none.',
      },
    ],
    jesus: [
      {
        ref: '1 Corinthians 10:4',
        text: 'And all drank the same spiritual drink, for they were drinking from a spiritual rock which followed them; and the rock was Christ.',
      },
      {
        ref: '1 Peter 2:8',
        text: 'And, \u2018A stone of stumbling and a rock of offense\u2019; for they stumble because they are disobedient to the word, and to this they were also appointed.',
      },
    ],
  },
  {
    title: 'Redeemer',
    yahweh: [
      {
        ref: 'Isaiah 41:14',
        text: '\u2018Do not fear, you worm Jacob, you men of Israel; I will help you,\u2019 declares Yahweh, \u2018and your Redeemer is the Holy One of Israel.\u2019',
      },
      {
        ref: 'Isaiah 44:6',
        text: 'Thus says Yahweh, the King of Israel and his Redeemer, Yahweh of hosts: \u2018I am the first, and I am the last, and there is no God besides Me.\u2019',
      },
      {
        ref: 'Isaiah 44:24',
        text: 'Thus says Yahweh, your Redeemer, and the one who formed you from the womb, \u2018I, Yahweh, am the maker of all things, stretching out the heavens by Myself and spreading out the earth all alone.\u2019',
      },
      {
        ref: 'Isaiah 54:5',
        text: 'For your husband is your Maker, whose name is Yahweh of hosts; and your Redeemer is the Holy One of Israel, who is called the God of all the earth.',
      },
    ],
    jesus: [
      {
        ref: 'Titus 2:14',
        text: 'Who gave Himself for us to redeem us from every lawless deed, and to purify for Himself a people for His own possession, zealous for good works.',
      },
      {
        ref: 'Revelation 5:9',
        text: 'And they sang a new song, saying, \u2018Worthy are You to take the scroll and to open its seals; for You were slain, and purchased for God with Your blood people from every tribe and tongue and people and nation.\u2019',
      },
      {
        ref: 'Galatians 3:13',
        text: 'Christ redeemed us from the curse of the Law, having become a curse for us\u2014for it is written, \u2018Cursed is everyone who hangs on a tree.\u2019',
      },
    ],
  },
  {
    title: 'King of Kings',
    yahwehLabel: 'Yahweh (OT / NT Reference to the Father)',
    yahweh: [
      {
        ref: '1 Timothy 6:15',
        text: 'Which He will bring about at the proper time\u2014He who is the blessed and only Sovereign, the King of kings and Lord of lords.',
      },
      {
        ref: 'Psalm 95:3',
        text: 'For Yahweh is a great God and a great King above all gods.',
      },
    ],
    jesus: [
      {
        ref: 'Revelation 17:14',
        text: 'These will wage war against the Lamb, and the Lamb will overcome them, because He is Lord of lords and King of kings, and those who are with Him are the called and chosen and faithful.',
      },
      {
        ref: 'Revelation 19:16',
        text: 'And on His robe and on His thigh He has a name written, \u2018KING OF KINGS, AND LORD OF LORDS.\u2019',
      },
    ],
  },
  {
    title: 'Light',
    yahweh: [
      {
        ref: 'Psalm 27:1',
        text: 'Yahweh is my light and my salvation; whom shall I fear? Yahweh is the defense of my life; whom shall I dread?',
      },
      {
        ref: 'Isaiah 60:19',
        text: 'No longer will you have the sun for light by day, nor for brightness will the moon give you light; but you will have Yahweh for an everlasting light, and your God for your glory.',
      },
      {
        ref: 'Micah 7:8',
        text: 'Do not rejoice over me, O my enemy. Though I fall I will rise; though I dwell in darkness, Yahweh is a light for me.',
      },
    ],
    jesus: [
      {
        ref: 'John 8:12',
        text: 'Then Jesus again spoke to them, saying, \u2018I am the Light of the world; he who follows Me will not walk in the darkness, but will have the Light of life.\u2019',
      },
      {
        ref: 'John 9:5',
        text: 'While I am in the world, I am the Light of the world.',
      },
      {
        ref: 'John 1:4\u20135, 9',
        text: 'In Him was life, and the life was the Light of men. And the Light shines in the darkness, and the darkness did not overcome it\u2026 There was the true Light which, coming into the world, enlightens every man.',
      },
    ],
  },
  {
    title: 'Creator',
    yahweh: [
      {
        ref: 'Genesis 1:1',
        text: 'In the beginning God created the heavens and the earth.',
      },
      {
        ref: 'Isaiah 44:24',
        text: 'Thus says Yahweh, your Redeemer, and the one who formed you from the womb, \u2018I, Yahweh, am the maker of all things, stretching out the heavens by Myself and spreading out the earth all alone.\u2019',
      },
      {
        ref: 'Isaiah 45:12',
        text: 'It is I who made the earth, and created man upon it. I stretched out the heavens with My hands and I ordained all their host.',
      },
    ],
    jesus: [
      {
        ref: 'John 1:3',
        text: 'All things came into being through Him, and apart from Him nothing came into being that has come into being.',
      },
      {
        ref: 'Colossians 1:16',
        text: 'For by Him all things were created, both in the heavens and on earth, visible and invisible, whether thrones or dominions or rulers or authorities\u2014all things have been created through Him and for Him.',
      },
      {
        ref: 'Hebrews 1:2',
        text: 'In these last days spoke to us in His Son, whom He appointed heir of all things, through whom also He made the world.',
      },
      {
        ref: 'Hebrews 1:10',
        text: 'And, \u2018You, Lord, in the beginning laid the foundation of the earth, and the heavens are the works of Your hands.\u2019',
      },
    ],
  },
  {
    title: 'Unchanging',
    yahweh: [
      {
        ref: 'Malachi 3:6',
        text: 'For I, Yahweh, do not change; therefore you, O sons of Jacob, are not consumed.',
      },
      {
        ref: 'Psalm 102:26\u201327',
        text: 'Even they will perish, but You endure; and all of them will wear out like a garment; like clothing You will change them and they will be changed. But You are the same, and Your years will not come to an end.',
      },
    ],
    jesus: [
      {
        ref: 'Hebrews 13:8',
        text: 'Jesus Christ is the same yesterday and today and forever.',
      },
      {
        ref: 'Hebrews 1:11\u201312',
        text: 'They will perish, but You remain; and they all will wear out like a garment, and like a robe You will roll them up; like a garment they will also be changed. But You are the same, and Your years will not come to an end.',
      },
    ],
  },
  {
    title: 'Receives Worship',
    yahweh: [
      {
        ref: 'Exodus 34:14',
        text: 'For you shall not worship any other god, for Yahweh, whose name is Jealous, is a jealous God.',
      },
      {
        ref: 'Deuteronomy 6:13',
        text: 'You shall fear Yahweh your God and serve Him and shall swear by His name.',
      },
      {
        ref: 'Isaiah 42:8',
        text: 'I am Yahweh, that is My name; I will not give My glory to another, nor My praise to graven images.',
      },
    ],
    jesus: [
      {
        ref: 'Matthew 28:9',
        text: 'And behold, Jesus met them and said, \u2018Rejoice!\u2019 And they came up and took hold of His feet and worshiped Him.',
      },
      {
        ref: 'Matthew 28:17',
        text: 'And when they saw Him, they worshiped Him; but some doubted.',
      },
      {
        ref: 'Hebrews 1:6',
        text: 'And when He again brings the firstborn into the world, He says, \u2018And let all the angels of God worship Him.\u2019',
      },
      {
        ref: 'Revelation 5:13\u201314',
        text: 'And every created thing which is in heaven and on the earth and under the earth and on the sea, and all things in them, I heard saying, \u2018To Him who sits on the throne, and to the Lamb, be blessing and honor and glory and might forever and ever.\u2019 And the four living creatures said, \u2018Amen.\u2019 And the elders fell down and worshiped.',
      },
      {
        ref: 'John 9:38',
        text: 'And he said, \u2018Lord, I believe.\u2019 And he worshiped Him.',
      },
    ],
  },
  {
    title: 'Forgives Sin',
    yahweh: [
      {
        ref: 'Isaiah 43:25',
        text: 'I, even I, am the one who wipes out your transgressions for My own sake, and I will not remember your sins.',
      },
      {
        ref: 'Jeremiah 31:34',
        text: 'And they will not teach again, each man his neighbor and each man his brother, saying, \u2018Know Yahweh,\u2019 for they will all know Me, from the least of them to the greatest of them, declares Yahweh, for I will forgive their iniquity, and their sin I will remember no more.',
      },
    ],
    jesus: [
      {
        ref: 'Mark 2:5\u20137',
        text: 'And Jesus seeing their faith said to the paralytic, \u2018Son, your sins are forgiven.\u2019 But some of the scribes were sitting there and reasoning in their hearts, \u2018Why does this man speak that way? He is blaspheming; who can forgive sins except God alone?\u2019',
      },
      {
        ref: 'Mark 2:10\u201311',
        text: '\u2018But so that you may know that the Son of Man has authority on earth to forgive sins\u2019\u2014He said to the paralytic, \u2018I say to you, get up, pick up your mat and go home.\u2019',
      },
      {
        ref: 'Luke 7:48\u201349',
        text: 'Then He said to her, \u2018Your sins have been forgiven.\u2019 And those who were reclining at the table with Him began to say among themselves, \u2018Who is this who even forgives sins?\u2019',
      },
      {
        ref: 'Colossians 3:13',
        text: 'Bearing with one another, and forgiving each other, whoever has a complaint against anyone; just as the Lord forgave you, so also should you.',
      },
    ],
  },
  {
    title: 'Gives Eternal Life',
    yahweh: [
      {
        ref: 'Psalm 36:9',
        text: 'For with You is the fountain of life; in Your light we see light.',
      },
      {
        ref: 'Deuteronomy 32:39',
        text: 'See now that I, I am He, and there is no god besides Me; it is I who put to death and give life. I have wounded and it is I who heal, and there is no one who can deliver from My hand.',
      },
    ],
    jesus: [
      {
        ref: 'John 10:28',
        text: 'And I give eternal life to them, and they will never perish, and no one will snatch them out of My hand.',
      },
      {
        ref: 'John 11:25\u201326',
        text: 'Jesus said to her, \u2018I am the resurrection and the life; he who believes in Me will live even if he dies, and everyone who lives and believes in Me will never die. Do you believe this?\u2019',
      },
      {
        ref: 'John 17:2',
        text: 'Even as You gave Him authority over all flesh, that to all whom You have given Him, He may give eternal life.',
      },
    ],
  },
  {
    title: 'Yahweh Our Righteousness',
    yahwehLabel: 'The Messianic Title',
    jesusLabel: 'Applied to the Messiah (Jesus)',
    yahweh: [
      {
        ref: 'Jeremiah 23:5\u20136',
        text: 'Behold, the days are coming, declares Yahweh, when I will raise up for David a righteous Branch; and He will reign as king and act wisely and do justice and righteousness in the land. In His days Judah will be saved, and Israel will dwell securely; and this is His name by which He will be called: \u2018Yahweh our Righteousness.\u2019',
      },
      {
        ref: 'Jeremiah 33:16',
        text: 'In those days Judah will be saved and Jerusalem will dwell in security; and this is the name by which she will be called: Yahweh our Righteousness.',
      },
    ],
    jesus: [
      {
        ref: '1 Corinthians 1:30',
        text: 'But by His doing you are in Christ Jesus, who became to us wisdom from God, and righteousness and sanctification, and redemption.',
      },
      {
        ref: '2 Corinthians 5:21',
        text: 'He made Him who knew no sin to be sin on our behalf, so that we might become the righteousness of God in Him.',
      },
    ],
  },
  {
    title: 'Deliverer from Egypt',
    yahweh: [
      {
        ref: 'Exodus 20:2',
        text: 'I am Yahweh your God, who brought you out of the land of Egypt, out of the house of slavery.',
      },
      {
        ref: 'Hosea 11:1',
        text: 'When Israel was a youth I loved him, and out of Egypt I called My son.',
      },
    ],
    jesus: [
      {
        ref: 'Jude 5',
        text: 'Now I desire to remind you, though you know all things once for all, that the Lord, after saving a people out of the land of Egypt, subsequently destroyed those who did not believe.',
      },
      {
        ref: '1 Corinthians 10:4, 9',
        text: 'And all drank the same spiritual drink, for they were drinking from a spiritual rock which followed them; and the rock was Christ\u2026 Nor let us put the Lord to the test, as some of them did and were destroyed by the serpents.',
      },
    ],
    note: 'The earliest and best Greek manuscripts read \u201cJesus\u201d (\u1f38\u03b7\u03c3\u03bf\u1fe6\u03c2) instead of \u201cthe Lord\u201d in Jude 5 \u2014 indicating that Jesus was the one who delivered Israel from Egypt. This reading is found in manuscripts including Codex Alexandrinus (A), Codex Vaticanus (B), and others.',
  },
];

export default function ParallelTitlesPage() {
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
            &larr; Back to Who Is Jesus?
          </Link>
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
          >
            Part 12 of 12
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: '#ffffff' }}
          >
            Parallel Titles
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{ color: '#d4af37' }}>
            17 Titles Shared by Yahweh and Jesus
          </p>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: '#e8ede8' }}
          >
            Titles exclusive to Yahweh in the Old Testament are applied to Jesus
            in the New Testament &mdash; demonstrating they are one and the same God.
          </p>
          <p
            className="text-sm mt-6 italic"
            style={{ color: '#a8b8a8' }}
          >
            All quotations from the Legacy Standard Bible (LSB)
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-5">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div
            className="rounded-xl p-6 md:p-8 mb-10"
            style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #d4af37' }}
          >
            <h3 className="text-xl font-bold mb-3" style={{ color: '#2f3f2f' }}>
              How to Read This Page
            </h3>
            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              Each section below presents a title or role that Scripture attributes to
              Yahweh in the Old Testament, alongside the same title applied to Jesus in the
              New Testament. Full quotations are provided so you can see the context for
              yourself. This isn&apos;t coincidence &mdash; it&apos;s intentional identification.
              The New Testament authors understood that Jesus is Yahweh.
            </p>
          </div>

          {/* Parallel Title Cards */}
          <div className="space-y-8">
            {parallelTitles.map((entry, index) => (
              <div
                key={entry.title}
                className="rounded-2xl overflow-hidden"
                style={{ border: '2px solid #e8ede8' }}
              >
                {/* Title Header */}
                <div
                  className="px-6 py-4 flex items-center gap-3"
                  style={{ backgroundColor: '#2f3f2f' }}
                >
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
                  >
                    {index + 1}
                  </span>
                  <h2
                    className="text-xl md:text-2xl font-serif font-bold"
                    style={{ color: '#d4af37' }}
                  >
                    {entry.title}
                  </h2>
                </div>

                {/* Two-Column Content */}
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: '#e8ede8' }}>
                  {/* Yahweh Column */}
                  <div className="p-5 md:p-6" style={{ backgroundColor: '#ffffff' }}>
                    <h3
                      className="text-sm font-bold uppercase tracking-wider mb-4 pb-2"
                      style={{ color: '#2f3f2f', borderBottom: '2px solid #d4af37' }}
                    >
                      {entry.yahwehLabel || 'Yahweh (Old Testament)'}
                    </h3>
                    <div className="space-y-4">
                      {entry.yahweh.map((scripture) => (
                        <div key={scripture.ref}>
                          <p
                            className="text-sm font-semibold mb-1"
                            style={{ color: '#2f3f2f' }}
                          >
                            {scripture.ref} (LSB)
                          </p>
                          <blockquote
                            className="text-base italic pl-4"
                            style={{
                              color: '#577557',
                              lineHeight: '1.7',
                              borderLeft: '3px solid #d4af37',
                            }}
                          >
                            &ldquo;{scripture.text}&rdquo;
                          </blockquote>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Jesus Column */}
                  <div className="p-5 md:p-6" style={{ backgroundColor: '#f9faf9' }}>
                    <h3
                      className="text-sm font-bold uppercase tracking-wider mb-4 pb-2"
                      style={{ color: '#2f3f2f', borderBottom: '2px solid #577557' }}
                    >
                      {entry.jesusLabel || 'Jesus (New Testament)'}
                    </h3>
                    <div className="space-y-4">
                      {entry.jesus.map((scripture) => (
                        <div key={scripture.ref}>
                          <p
                            className="text-sm font-semibold mb-1"
                            style={{ color: '#2f3f2f' }}
                          >
                            {scripture.ref} (LSB)
                          </p>
                          <blockquote
                            className="text-base italic pl-4"
                            style={{
                              color: '#577557',
                              lineHeight: '1.7',
                              borderLeft: '3px solid #577557',
                            }}
                          >
                            &ldquo;{scripture.text}&rdquo;
                          </blockquote>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Note (if present) */}
                {entry.note && (
                  <div
                    className="px-6 py-4"
                    style={{ backgroundColor: '#fff8e6', borderTop: '1px solid #e8ede8' }}
                  >
                    <p className="text-sm italic" style={{ color: '#6b5c2e', lineHeight: '1.6' }}>
                      <strong>Note:</strong> {entry.note}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Key Observation */}
          <div
            className="rounded-xl p-6 md:p-8 my-10"
            style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
          >
            <h3 className="text-xl font-bold mb-3" style={{ color: '#2f3f2f' }}>
              The Significance
            </h3>
            <p className="text-base mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              These are not general titles that anyone could claim. Scripture explicitly
              reserves these titles for Yahweh alone:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2" style={{ color: '#2f3f2f' }}>
                <span style={{ color: '#d4af37' }}>&bull;</span>
                <span>
                  <strong>&ldquo;There is no savior besides Me&rdquo;</strong> (Isaiah 43:11) &mdash;
                  yet Jesus is called Savior
                </span>
              </li>
              <li className="flex items-start gap-2" style={{ color: '#2f3f2f' }}>
                <span style={{ color: '#d4af37' }}>&bull;</span>
                <span>
                  <strong>&ldquo;I am the first and I am the last, and there is no God besides Me&rdquo;</strong>{' '}
                  (Isaiah 44:6) &mdash; yet Jesus claims this exact title
                </span>
              </li>
              <li className="flex items-start gap-2" style={{ color: '#2f3f2f' }}>
                <span style={{ color: '#d4af37' }}>&bull;</span>
                <span>
                  <strong>&ldquo;I, Yahweh, am the maker of all things... all alone&rdquo;</strong>{' '}
                  (Isaiah 44:24) &mdash; yet all things were created through Jesus
                </span>
              </li>
              <li className="flex items-start gap-2" style={{ color: '#2f3f2f' }}>
                <span style={{ color: '#d4af37' }}>&bull;</span>
                <span>
                  <strong>&ldquo;You shall worship no other god&rdquo;</strong> (Exodus 34:14) &mdash;
                  yet Jesus receives and accepts worship
                </span>
              </li>
            </ul>
          </div>

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
              The Conclusion
            </h3>
            <p
              className="text-lg mb-6"
              style={{ color: '#e8ede8', lineHeight: '1.8' }}
            >
              If Jesus shares every title and role that belongs exclusively to
              Yahweh, then Jesus must be Yahweh. There is no other logical conclusion.
              The New Testament writers were not confused &mdash; they deliberately, repeatedly,
              and consistently identified Jesus with the Yahweh of the Old Testament.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/who-is-jesus"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
              >
                Back to Overview
              </Link>
              <Link
                href="/why-it-matters"
                className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                }}
              >
                Why It Matters
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
