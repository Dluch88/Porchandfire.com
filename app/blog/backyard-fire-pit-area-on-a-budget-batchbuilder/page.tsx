import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Build a Backyard Fire Pit Area on a Budget | PorchAndFire',
  description: 'Step-by-step backyard fire pit area on a budget — materials, layout, and real cost breakdowns under $500.',
};

const steps = [
  'Pick a location with proper clearance',
  'Use compacted gravel as a base',
  'Install a simple metal or stone pit',
  'Add low-cost seating like cinder-block benches',
  'Light with string lights and solar stakes'
];

export default function BackyardFirePitAreaBatch() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span>Backyard Fire Pit Area on a Budget (Batch)</span>
      </nav>

      <p className="section-label mb-2">DIY & Ideas</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">How to Build a Backyard Fire Pit Area on a Budget</h1>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong>Disclosure:</strong> PorchAndFire may receive commissions from affiliate links.
      </div>

      <ol className="list-decimal list-inside space-y-2 text-sm">
        {steps.map((s) => <li key={s}>{s}</li>)}
      </ol>
    </article>
  );
}
