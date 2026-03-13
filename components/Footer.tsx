import Link from 'next/link';

const links = [
  { label: 'Fire Pits', href: '/categories/fire-pits' },
  { label: 'Outdoor Furniture', href: '/categories/furniture' },
  { label: 'Pergolas', href: '/categories/pergolas' },
  { label: 'Lighting', href: '/categories/lighting' },
  { label: 'Grills', href: '/categories/grills' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Disclosure', href: '/disclosure' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              <span className="font-display text-xl font-bold text-cream">
                Porch<span className="text-orange-400"> & Fire</span>
              </span>
            </div>
            <p className="font-body text-sm text-cream/50 max-w-xs leading-relaxed">
              Honest reviews and expert guides for outdoor living — fire pits, furniture, pergolas, and more.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-body text-cream/60 hover:text-cream transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 text-xs text-cream/30 font-body text-center">
          © {new Date().getFullYear()} PorchandFire.com · As an Amazon Associate I earn from qualifying purchases.
        </div>
      </div>
    </footer>
  );
}
