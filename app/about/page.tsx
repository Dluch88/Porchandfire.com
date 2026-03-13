import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Porch & Fire',
  description: "Learn who's behind Porch & Fire and why we're passionate about outdoor living.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <p className="section-label mb-2">Our Story</p>
      <h1 className="font-display text-4xl font-bold text-charcoal mb-6">About Porch & Fire</h1>
      <div className="font-body text-charcoal/70 space-y-5 leading-relaxed">
        <p>
          Porch & Fire was started by people who believe the backyard is the most underrated room in the house. 
          Whether it's a fire pit on a cool evening or a pergola that turns a bare slab into a real outdoor room — 
          the right products make all the difference.
        </p>
        <p>
          Every guide on this site is written with real outdoor living in mind. We focus on products that are 
          durable enough to handle the elements, worth their price, and actually available to buy — not just 
          whatever earns the highest commission.
        </p>
        <p>
          We research extensively, compare alternatives, and only recommend products we'd put in our own backyards.
        </p>
        <p className="pt-2">
          <Link href="/blog" className="btn-primary inline-block">Browse Our Guides →</Link>
        </p>
      </div>
    </div>
  );
}
