'use client';
import { useState } from 'react';
import Link from 'next/link';

const categories = [
  { label: 'Fire Pits', href: '/categories/fire-pits' },
  { label: 'Furniture', href: '/categories/furniture' },
  { label: 'Pergolas', href: '/categories/pergolas' },
  { label: 'Lighting', href: '/categories/lighting' },
  { label: 'Grills', href: '/categories/grills' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-sage-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🔥</span>
          <span className="font-display text-xl font-bold text-charcoal">
            Porch<span className="text-orange-500"> & Fire</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {categories.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="text-sm font-body text-charcoal/70 hover:text-sage-600 transition-colors"
            >
              {c.label}
            </Link>
          ))}
          <Link href="/blog" className="text-sm font-body text-charcoal/70 hover:text-sage-600 transition-colors">
            Blog
          </Link>
          <Link href="/about" className="btn-primary text-sm py-2 px-4">
            About
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-charcoal transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-charcoal transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-charcoal transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-sage-100 px-4 py-4 space-y-3">
          {categories.map((c) => (
            <Link key={c.href} href={c.href} className="block text-sm font-body text-charcoal/70 hover:text-sage-600 py-1">
              {c.label}
            </Link>
          ))}
          <Link href="/blog" className="block text-sm font-body text-charcoal/70 hover:text-sage-600 py-1">Blog</Link>
          <Link href="/about" className="block text-sm font-body text-sage-600 font-semibold py-1">About</Link>
        </div>
      )}
    </header>
  );
}
