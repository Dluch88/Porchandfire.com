import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '9 DIY Fire Pit Ideas for Small Backyards and Patios | PorchAndFire',
  description: 'Creative DIY fire pit ideas for tight spaces — portable options, corner placements, and condo-friendly picks.',
};

const ideas = [
  'Portable steel bowl with legs',
  'Corner brick pit with gravel base',
  'Raised stone planter-style fire pit',
  'Tabletop propane fire bowl for balconies',
  'Concrete ring with decorative gravel',
  'Cinder-block bench surround',
  'Small smokeless wood burner',
  'Propane portable pit with safety ring',
  'Fire pit on pavers with heat-proof mat'
];

export default function DiyFirePitIdeasBatch() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span>DIY Fire Pit Ideas (Batch)</span>
      </nav>

      <p className="section-label mb-2">DIY & Ideas</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">9 DIY Fire Pit Ideas for Small Backyards and Patios</h1>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong>Disclosure:</strong> PorchAndFire may earn from affiliate links.
      </div>

      <ul className="list-disc list-inside space-y-2 text-sm">
        {ideas.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </article>
  );
}
