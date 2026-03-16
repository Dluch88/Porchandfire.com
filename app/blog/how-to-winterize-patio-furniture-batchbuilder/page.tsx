import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Winterize Your Patio Furniture (Step-by-Step) | PorchAndFire',
  description: 'Clean, cover, and store patio furniture by material — step-by-step winterizing tips and product recommendations.',
};

const AMAZON_TAG = 'porchandfire-20';

const steps = [
  'Clean thoroughly with manufacturer-approved cleaner',
  'Dry completely to prevent mold',
  'Apply protective oil or finish for wood',
  'Store cushions indoors or in sealed bins',
  'Cover with breathable furniture covers',
  'Elevate pieces off damp ground'
];

export default function WinterizePatioFurnitureBatch() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span>How to Winterize Patio Furniture (Batch)</span>
      </nav>

      <p className="section-label mb-2">Maintenance</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">How to Winterize Your Patio Furniture (Step-by-Step)</h1>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong>Disclosure:</strong> PorchAndFire may earn commissions when you buy through our links.
      </div>

      <ol className="list-decimal list-inside space-y-2 text-sm">
        {steps.map((s) => <li key={s}>{s}</li>)}
      </ol>
    </article>
  );
}
