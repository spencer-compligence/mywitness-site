import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/my-story', label: 'My Story' },
    { href: '/nwt-problem', label: 'The NWT Problem' },
    { href: '/which-bible', label: 'Which Bible?' },
    { href: '/who-is-jesus', label: 'Who Is Jesus?' },
    { href: '/why-it-matters', label: 'Why It Matters' },
    { href: '/praying-to-jesus', label: 'Praying to Jesus' },
  ];

  return (
    <footer
      className="py-12 px-4"
      style={{ backgroundColor: '#2f3f2f' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <p
          className="text-2xl font-serif font-bold mb-6"
          style={{ color: '#fdfdf8' }}
        >
          MyWitness<span style={{ color: '#d4af37' }}>.info</span>
        </p>

        {/* Copyright */}
        <p className="text-base mb-4" style={{ color: '#d4e4d4' }}>
          © {new Date().getFullYear()} MyWitness LLC. All rights reserved.
        </p>

        {/* Disclaimer */}
        <p
          className="text-sm mb-8 max-w-2xl mx-auto"
          style={{ color: '#a0b0a0', lineHeight: '1.6' }}
        >
          This ministry is 100% self-funded. I accept no donations, receive no
          commissions, and have no financial interest in this work. My only goal
          is to share the truth about Jesus.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm hover:underline transition-colors"
              style={{ color: '#d4e4d4' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
