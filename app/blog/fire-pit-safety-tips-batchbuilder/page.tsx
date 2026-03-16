import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fire Pit Safety: 12 Essential Tips for Backyard Use | PorchAndFire',
  description: 'Placement, spark screens, safe distances, kids and pets — the 12 safety tips every backyard owner should know.',
};

const AMAZON_TAG = 'porchandfire-20';

const tips = [
  'Keep at least 10 feet from structures',
  'Use a spark screen for wood-burning pits',
  'Have a fire extinguisher or hose nearby',
  'Never leave a fire unattended',
  'Watch children and pets closely around flames',
  'Avoid burning trash or treated wood',
  'Check local rules and HOA restrictions',
  'Don\'t use on windy days',
  'Use heat-resistant gloves for adjustments',
  'Fully extinguish with water and stir embers',
  'Use a proper base like gravel or pavers',
  'Store fuel safely off-site'
];

export default function FirePitSafetyBatch() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span>Fire Pit Safety (Batch)</span>
      </nav>

      <p className="section-label mb-2">Fire Pits</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">Fire Pit Safety: 12 Essential Tips for Backyard Use</h1>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong>Disclosure:</strong> PorchAndFire uses Amazon affiliate links and may earn a commission on purchases.
      </div>

      <ul className="list-disc list-inside space-y-2 text-sm">
        {tips.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </article>
  );
}
