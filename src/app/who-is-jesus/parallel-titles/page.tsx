import Link from 'next/link';

export const metadata = {
  title: 'Parallel Titles: Yahweh and Jesus | Who Is Jesus? | MyWitness',
  description:
    'A comprehensive chart showing how titles exclusive to Yahweh in the Old Testament are applied to Jesus in the New Testament.',
};

const parallelTitles = [
  {
    title: 'Savior',
    yahweh: 'Isaiah 43:11 — "I, even I, am Yahweh, and there is no savior besides Me"',
    jesus: 'John 4:42; Titus 2:13',
  },
  {
    title: 'Lord of lords',
    yahweh: 'Deuteronomy 10:17',
    jesus: 'Revelation 17:14; 19:16',
  },
  {
    title: 'First and Last',
    yahweh: 'Isaiah 44:6; 48:12',
    jesus: 'Revelation 1:17; 22:13',
  },
  {
    title: 'Alpha and Omega',
    yahweh: 'Revelation 1:8',
    jesus: 'Revelation 22:13',
  },
  {
    title: 'Judge of all',
    yahweh: 'Genesis 18:25; Psalm 50:6',
    jesus: 'John 5:22; 2 Timothy 4:1',
  },
  {
    title: 'Shepherd',
    yahweh: 'Psalm 23:1; 100:3',
    jesus: 'John 10:11, 14',
  },
  {
    title: 'Rock',
    yahweh: 'Deuteronomy 32:4; Psalm 18:2',
    jesus: '1 Corinthians 10:4',
  },
  {
    title: 'Redeemer',
    yahweh: 'Isaiah 41:14; 44:6',
    jesus: 'Titus 2:14; Revelation 5:9',
  },
  {
    title: 'King of kings',
    yahweh: '1 Timothy 6:15',
    jesus: 'Revelation 17:14; 19:16',
  },
  {
    title: 'Light',
    yahweh: 'Psalm 27:1; Isaiah 60:19',
    jesus: 'John 8:12; 9:5',
  },
  {
    title: 'Creator',
    yahweh: 'Genesis 1:1; Isaiah 44:24',
    jesus: 'John 1:3; Colossians 1:16',
  },
  {
    title: 'Unchanging',
    yahweh: 'Malachi 3:6',
    jesus: 'Hebrews 13:8',
  },
  {
    title: 'Receives worship',
    yahweh: 'Exodus 34:14',
    jesus: 'Matthew 28:9; Hebrews 1:6',
  },
  {
    title: 'Forgives sin',
    yahweh: 'Isaiah 43:25; Jeremiah 31:34',
    jesus: 'Mark 2:5-7; Luke 7:48',
  },
  {
    title: 'Gives eternal life',
    yahweh: 'Psalm 36:9',
    jesus: 'John 10:28',
  },
  {
    title: 'Yahweh Our Righteousness',
    yahweh: 'Jeremiah 23:6',
    jesus: 'Applied to the Messiah',
  },
  {
    title: 'Deliverer from Egypt',
    yahweh: 'Exodus 20:2',
    jesus: 'Jude 5 (earliest manuscripts)',
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
            ← Back to Who Is Jesus?
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
            in the New Testament — demonstrating they are one and the same God.
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
              How to Read This Chart
            </h3>
            <p className="text-base" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
              The left column shows titles and roles attributed to Yahweh in the Old
              Testament. The right column shows the same titles applied to Jesus in the
              New Testament. This isn&apos;t coincidence — it&apos;s intentional identification.
              The New Testament authors understood that Jesus is Yahweh.
            </p>
          </div>

          {/* Desktop Table */}
          <div
            className="hidden md:block rounded-2xl overflow-hidden mb-10"
            style={{ border: '2px solid #e8ede8' }}
          >
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: '#2f3f2f' }}>
                  <th
                    className="px-6 py-4 text-left text-lg font-semibold"
                    style={{ color: '#d4af37', width: '20%' }}
                  >
                    Title/Role
                  </th>
                  <th
                    className="px-6 py-4 text-left text-lg font-semibold"
                    style={{ color: '#d4af37', width: '40%' }}
                  >
                    Yahweh (Old Testament)
                  </th>
                  <th
                    className="px-6 py-4 text-left text-lg font-semibold"
                    style={{ color: '#d4af37', width: '40%' }}
                  >
                    Jesus (New Testament)
                  </th>
                </tr>
              </thead>
              <tbody>
                {parallelTitles.map((row, index) => (
                  <tr
                    key={row.title}
                    style={{
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#f6f8f6',
                    }}
                  >
                    <td
                      className="px-6 py-4 font-semibold"
                      style={{ color: '#2f3f2f' }}
                    >
                      {row.title}
                    </td>
                    <td className="px-6 py-4" style={{ color: '#577557' }}>
                      {row.yahweh}
                    </td>
                    <td className="px-6 py-4" style={{ color: '#577557' }}>
                      {row.jesus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {parallelTitles.map((row) => (
              <div
                key={row.title}
                className="rounded-xl overflow-hidden"
                style={{ border: '2px solid #e8ede8' }}
              >
                <div
                  className="px-4 py-3"
                  style={{ backgroundColor: '#2f3f2f' }}
                >
                  <h4 className="font-semibold text-lg" style={{ color: '#d4af37' }}>
                    {row.title}
                  </h4>
                </div>
                <div className="p-4" style={{ backgroundColor: '#ffffff' }}>
                  <div className="mb-3">
                    <p
                      className="text-sm font-semibold mb-1"
                      style={{ color: '#2f3f2f' }}
                    >
                      Yahweh (OT):
                    </p>
                    <p className="text-base" style={{ color: '#577557' }}>
                      {row.yahweh}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold mb-1"
                      style={{ color: '#2f3f2f' }}
                    >
                      Jesus (NT):
                    </p>
                    <p className="text-base" style={{ color: '#577557' }}>
                      {row.jesus}
                    </p>
                  </div>
                </div>
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
              Notice the pattern: these aren&apos;t general titles that anyone could have.
              These are titles that Scripture explicitly reserves for Yahweh alone:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2" style={{ color: '#2f3f2f' }}>
                <span style={{ color: '#d4af37' }}>•</span>
                <span>
                  <strong>&quot;There is no savior besides Me&quot;</strong> (Isaiah 43:11) —
                  yet Jesus is called Savior
                </span>
              </li>
              <li className="flex items-start gap-2" style={{ color: '#2f3f2f' }}>
                <span style={{ color: '#d4af37' }}>•</span>
                <span>
                  <strong>&quot;I am the first and I am the last, and there is no God besides Me&quot;</strong>{' '}
                  (Isaiah 44:6) — yet Jesus claims this title
                </span>
              </li>
              <li className="flex items-start gap-2" style={{ color: '#2f3f2f' }}>
                <span style={{ color: '#d4af37' }}>•</span>
                <span>
                  <strong>&quot;I, Yahweh, am the maker of all things... all alone&quot;</strong>{' '}
                  (Isaiah 44:24) — yet Jesus created all things
                </span>
              </li>
              <li className="flex items-start gap-2" style={{ color: '#2f3f2f' }}>
                <span style={{ color: '#d4af37' }}>•</span>
                <span>
                  <strong>&quot;You shall worship no other god&quot;</strong> (Exodus 34:14) —
                  yet Jesus receives worship
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
              This chart represents one of the most powerful arguments for Christ&apos;s
              deity. If Jesus shares every title and role that belongs exclusively to
              Yahweh, then Jesus must be Yahweh. There is no other logical conclusion.
              The New Testament writers were not confused — they deliberately, repeatedly,
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
