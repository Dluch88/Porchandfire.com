import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'Porch & Fire affiliate and advertising disclosure.',
};

export default function DisclosurePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <p className="section-label mb-2">Legal</p>
      <h1 className="font-display text-4xl font-bold text-charcoal mb-6">Affiliate Disclosure</h1>
      <div className="font-body text-charcoal/70 space-y-5 leading-relaxed">
        <p>
          PorchandFire.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
          program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
        </p>
        <p>
          When you click on links on this site and make a purchase, we may earn a small commission at no extra cost to you.
          This helps keep the site running and allows us to continue producing free, independent content.
        </p>
        <p>
          We only recommend products we genuinely believe in. Affiliate relationships never influence our reviews or rankings.
        </p>
      </div>
    </div>
  );
}
