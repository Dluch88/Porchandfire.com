import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Stain and Seal a Cedar Pergola | Porch & Fire',
  description: 'Step-by-step spring guide to cleaning, staining, and sealing your cedar pergola. Protect against UV and graying with picks starting at $18.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-how-to-stain-seal-cedar-pergola.jpg"
          alt="How to Stain and Seal a Cedar Pergola"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Maintenance
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Stain and Seal a Cedar Pergola
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 22, 2026</span>
          <span>&middot;</span>
          <span>8 min read</span>
          <span>&middot;</span>
          <span>Last updated: March 2026</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

        {/* Affiliate Disclosure */}
        <div className="bg-cream rounded-xl border border-charcoal/10 px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
          <strong className="text-charcoal/70">Affiliate Disclosure:</strong> This post contains affiliate links. Porch &amp; Fire may earn a small commission on purchases at no extra cost to you. We only recommend products we genuinely believe in.
        </div>

        {/* Intro */}
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A cedar pergola looks sharp the first season. By year two or three, the gray starts creeping in, and if you skip maintenance, you are looking at a full replacement sooner than you would expect.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The good news is that restoring cedar is a weekend job. You clean it, brighten it, apply a solid stain or sealer, and you are back to looking good for another three to five years.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks you through the exact process and the products that actually work, in the order you use them.</p>


      {/* Product 1: Best Wood Cleaner for Pergola Prep */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wood Cleaner for Pergola Prep</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Before any stain goes on, the wood has to be clean. Mildew, algae, dirt, and old sealers all need to come off, or your new finish will peel within a season. Simple Green Oxy Solve Total Outdoor Cleaner is an oxygen-bleach formula that lifts organic stains without the harshness of chlorine bleach, which can actually damage cedar fibers.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">You dilute it with water, apply it with a pump sprayer or brush, let it sit for about 10 minutes, then rinse with a garden hose. On a 12x16 pergola, one gallon of concentrate handles the entire structure with room to spare. It leaves no chemical residue that would interfere with stain adhesion, which is the thing most hardware-store cleaners get wrong.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/simple-green-oxy-solve-total-outdoor-cleaner.jpg" alt="Simple Green Oxy Solve Total Outdoor Cleaner" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Simple Green Oxy Solve Total Outdoor Cleaner</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Oxygen-bleach wood cleaner that removes mildew and algae from cedar without damaging wood fibers or blocking stain absorption.</p>
            <a
              href="https://www.amazon.com/s?k=Simple%20Green%20Oxy%20Solve%20Total%20Outdoor%20Cleaner&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Wood Brightener Before You Stain */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wood Brightener Before You Stain</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">After cleaning, cedar can look dull or blotchy. A wood brightener restores the pH of the wood and opens up the grain so stain penetrates evenly. Defy Wood Brightener is an oxalic acid formula that works fast and is safe for cedar without stripping anything useful.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Apply it right after the cleaner dries, let it sit for five minutes, then rinse. The difference is noticeable. Gray or weathered cedar turns back to a warm honey tone, and the grain looks fresh. Skipping this step is the most common reason stain jobs end up looking uneven or blotchy even when the application was fine.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/defy-wood-brightener.jpg" alt="Defy Wood Brightener" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Defy Wood Brightener</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Oxalic acid formula that neutralizes wood pH and restores cedar&apos;s natural warm tone for consistent stain absorption.</p>
            <a
              href="https://www.amazon.com/s?k=Defy%20Wood%20Brightener%20oxalic%20acid&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Stain and Sealer for a Cedar Pergola */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Stain and Sealer for a Cedar Pergola</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Ready Seal 512 is a penetrating oil-based stain and sealer in one, and it has become a reliable pick for cedar pergolas because it does not lap mark. That means you can stop mid-section, come back an hour later, and the finish still looks consistent. On a pergola with lots of rafters and beams, that flexibility matters more than people realize.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 512 shade (Natural Cedar) lets the wood grain show through while adding UV blockers and mildew inhibitors. One gallon covers roughly 150 to 200 square feet depending on how weathered the wood is. On freshly brightened cedar, a single coat is usually enough, and the finish holds up well through two to three rainy seasons before you need to touch it up.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ready-seal-512-exterior-stain-and-sealer-for-wood.jpg" alt="Ready Seal 512 Exterior Stain and Sealer for Wood" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ready Seal 512 Exterior Stain and Sealer for Wood</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$52</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">No-lap-mark oil-based stain and sealer that penetrates cedar deeply while blocking UV damage and mildew.</p>
            <a
              href="https://www.amazon.com/s?k=Ready%20Seal%20512%20Exterior%20Stain%20Sealer%20Natural%20Cedar%20gallon&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Natural Finish for Lightly Weathered Cedar */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Natural Finish for Lightly Weathered Cedar</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your pergola is only a year or two old and does not have heavy graying yet, Flood CWF-UV5 Cedar Tone Wood Finish is the smarter move. It is a penetrating finish with UV absorbers that feeds the wood and keeps it looking naturally warm without changing the color much. Think of it as a protective conditioner more than a stain.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Cedar Tone formula has just enough pigment to block UV rays without making the wood look painted or coated. It also dries faster than most oil-based stains, which matters in late spring when afternoon thunderstorms are a real possibility. Apply it with a brush, work it into the grain, and the job on an average pergola takes about two hours.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flood-cwf-uv5-cedar-tone-wood-finish.jpg" alt="Flood CWF-UV5 Cedar Tone Wood Finish" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flood CWF-UV5 Cedar Tone Wood Finish</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$42</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Fast-drying penetrating wood finish with UV absorbers that protects lightly weathered cedar without adding heavy color.</p>
            <a
              href="https://www.amazon.com/s?k=Flood%20CWF-UV5%20Cedar%20Tone%20Wood%20Finish%20gallon&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Applicator for Pergola Beams and Rafters */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Applicator for Pergola Beams and Rafters</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A paint roller will not cut it on pergola beams. You need something that wraps around edges, gets into corners, and holds enough product to cover wide surfaces without constant reloading. The Shur-Line 6300C Deck and Fence Finish Applicator is a staining pad on a long handle that applies finish smoothly without the dripping mess of a thick brush.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The replaceable pads are ideal for the long horizontal rafters and wide top rails, and you can switch to a standard brush for detailed cuts around hardware and joints. On a 10x12 pergola, this applicator cuts staining time roughly in half compared to brushing everything by hand. The extended handle also saves your arms on the overhead sections you would otherwise be stretching to reach.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/shur-line-6300c-deck-and-fence-finish-applicator.jpg" alt="Shur-Line 6300C Deck and Fence Finish Applicator" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Shur-Line 6300C Deck and Fence Finish Applicator</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$18</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Long-handle staining pad that covers wide pergola beams quickly and evenly without dripping or leaving brush marks.</p>
            <a
              href="https://www.amazon.com/s?k=Shur-Line%206300C%20Deck%20Fence%20Finish%20Applicator&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

        {/* Tips */}
        <section className="mt-12 bg-sage-50 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Staining a Cedar Pergola</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Wait for dry weather.</strong> Apply stain only when temperatures are between 50 and 90 degrees and no rain is forecast for 24 to 48 hours. Moisture trapped in the wood pushes the finish out and causes peeling.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Do not stain new cedar right away.</strong> Fresh cedar needs 30 to 60 days to dry out before it will accept a stain properly. Staining too early means the finish sits on the surface instead of penetrating and peels within months.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Sand lightly before staining rough spots.</strong> A quick pass with 80-grit sandpaper on splintered or fuzzy areas smooths the grain and helps stain absorb evenly. You do not need to sand the entire structure, just the problem spots.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Work from the top down.</strong> Start with the highest beams and rafters first so any drips fall onto unstained wood below. Finish with the posts and bottom rails last.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Lay down drop cloths before you start.</strong> Stain drips are difficult to remove from concrete and pavers once they dry. Old cardboard or canvas drop cloths protect the patio surface below with minimal setup time.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Plan to reapply every two to three years.</strong> Cedar holds finish well, but UV and moisture eventually break it down. Catching it before heavy graying sets in keeps the job simple and avoids the need for deep cleaning or stripping.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need to strip old stain before restaining a cedar pergola?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Only if the old finish is peeling or flaking off. If it is just faded, a thorough cleaning and brightening is enough to prep the surface. Penetrating oil stains can go over old penetrating stains without stripping.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does stain last on a cedar pergola?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A good oil-based stain or sealer lasts two to four years on a cedar pergola, depending on sun exposure and your climate. South-facing structures in hot regions need reapplication more often than shaded or north-facing ones.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a paint sprayer to stain a cedar pergola?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, and it speeds the job up significantly on larger structures. Use an airless or HVLP sprayer, mask everything below the pergola, and always back-brush right after spraying to work the stain into the grain.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a wood stain and a wood sealer for cedar?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A sealer is primarily a moisture barrier with little or no pigment. A stain adds color and UV protection. Most products sold as stain-sealers do both jobs in one coat, and those combined formulas are the most practical choice for a cedar pergola.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-curtains-pergola-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Curtains Pergola Patio</p>
          </Link>
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          <Link href="/blog/best-outdoor-cushions-patio-furniture" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Cushions Patio Furniture</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
