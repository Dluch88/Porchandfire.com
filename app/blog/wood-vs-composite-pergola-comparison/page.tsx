import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Wood vs Composite Pergola: Which Is Better? | Porch & Fire",
  description: "Wood or composite pergola? We compare cost, maintenance, and durability across four real kits, starting at $549, to help you choose the right one.",
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-sage-700 via-sage-600 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Pergolas &amp; Shade
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Wood vs Composite Pergola: Which Is Better?
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 7, 2026</span>
          <span>&middot;</span>
          <span>7 min read</span>
          <span>&middot;</span>
          <span>Last updated: April 2026</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

        {/* Affiliate Disclosure */}
        <div className="bg-cream rounded-xl border border-charcoal/10 px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
          <strong className="text-charcoal/70">Affiliate Disclosure:</strong> This post contains affiliate links. Porch &amp; Fire may earn a small commission on purchases at no extra cost to you. We only recommend products we genuinely believe in.
        </div>

        {/* Intro */}
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Picking between a wood and composite pergola is one of those decisions that shapes your backyard for the next 10 to 25 years. Both materials look great in catalog photos, but they behave completely differently once your summers get humid and your winters push into freezing.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Wood pergolas cost less upfront and deliver a warm, natural look that stains and weathers beautifully over time. Composite and vinyl pergolas cost more to start but eliminate the annual maintenance cycle entirely. The right choice depends on your climate, how much time you actually want to spend on upkeep, and whether you plan to stay in this house long enough to recoup the investment.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This comparison covers four real pergola kits you can buy today, two in natural wood and two in low-maintenance materials, across a range of price points. None of them require a contractor if you&apos;re reasonably handy and can recruit a helper for a weekend.</p>


      {/* Product 1: Best Budget Wood Pergola for a Mid-Size Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Wood Pergola for a Mid-Size Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a 10x12 or 10x14 patio and want a pergola without breaking $600, the Outsunny fir wood model is where most people start. It arrives as a flat-pack kit, goes together in a weekend with two people, and the built-in retractable shade canopy means you get real sun protection without paying extra for a separate sail shade.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The fir construction is pressure-treated, which buys you some time before the first seal coat, but plan to stain or seal it within the first season. Left untreated in a rainy climate, fir will gray and crack faster than cedar. On a covered patio in a dry region, this thing can look genuinely good for years with minimal effort. It&apos;s a strong starter pergola for someone who wants the look now and can commit to keeping up with it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-10-x-13-ft-wood-outdoor-pergola-with-retractable-canopy.jpg" alt="Outsunny 10 x 13 Ft Wood Outdoor Pergola with Retractable Canopy" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny 10 x 13 Ft Wood Outdoor Pergola with Retractable Canopy</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$549</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solid entry-level wood pergola with a built-in retractable canopy that gives you real shade without a separate purchase.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%2010x13%20wood%20pergola%20retractable%20canopy%20shade&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Cedar Pergola for Long-Term Value */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cedar Pergola for Long-Term Value</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cedar is the upgrade that makes sense if you&apos;re planting roots in your home. It contains natural oils that resist rot, repel insects, and slow moisture absorption without any chemical treatment. A well-maintained cedar pergola in a temperate or dry climate will outlast any composite product in the $1,000 range by years.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sunjoy cedar kit fits a standard 10x12 footprint and works well as a dining cover for 6 to 8 people with a table underneath. The posts are thick enough to handle hanging string lights, a damp-rated ceiling fan, or even a small pendant chandelier without flexing. First staining takes about half a day and after that you&apos;re looking at a touch-up every two to three years. That&apos;s the real cost of wood ownership, and cedar makes it as manageable as wood gets.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunjoy-10-x-12-cedar-wood-outdoor-pergola-kit-with-steel-base-plates.jpg" alt="Sunjoy 10 x 12 Cedar Wood Outdoor Pergola Kit with Steel Base Plates" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunjoy 10 x 12 Cedar Wood Outdoor Pergola Kit with Steel Base Plates</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$929</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Real cedar construction that holds up to humidity and accepts stain beautifully for a long-term backyard investment.</p>
            <a
              href="https://www.amazon.com/s?k=Sunjoy%20cedar%20wood%20pergola%20kit%2010x12%20steel%20base&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Vinyl Pergola for Zero-Maintenance Backyards */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Vinyl Pergola for Zero-Maintenance Backyards</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The honest case for vinyl comes down to time. If the idea of sanding, staining, and sealing every couple of years sounds like a chore you will never actually do, a vinyl pergola will stay looking clean with nothing more than an occasional hose-down. New England Arbors has been making vinyl outdoor structures for years, and their Bordeaux model is a widely trusted option for traditional-style homes in the mid-Atlantic and Southeast.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This pergola holds up particularly well in coastal and rainy climates where wood maintenance becomes a genuine problem. The vinyl doesn&apos;t fade, crack, or peel under UV exposure the way untreated fir does. The tradeoff is worth acknowledging directly: vinyl can look slightly plasticky up close, and it doesn&apos;t hold stain or paint if you ever want to change the color. What you see is what you get, for a long time. That&apos;s either a feature or a drawback depending on your personality.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/new-england-arbors-bordeaux-vinyl-pergola-kit.jpg" alt="New England Arbors Bordeaux Vinyl Pergola Kit" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">New England Arbors Bordeaux Vinyl Pergola Kit</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,949</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">890+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Maintenance-free vinyl construction that holds its color and shape for decades without sanding, staining, or sealing.</p>
            <a
              href="https://www.amazon.com/s?k=New%20England%20Arbors%20Bordeaux%20vinyl%20pergola%20kit&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Aluminum Louvered Pergola for Modern Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Aluminum Louvered Pergola for Modern Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Aluminum louvered pergolas are a newer category and genuinely worth considering if you want something more functional than a fixed-roof pergola. The adjustable slats let you tilt the roof from fully open to nearly closed, so you&apos;re not stuck with a permanent shade setup or scrambling to pull a canopy when it rains. VEIKOUS makes a 10x13 model that fits mid-size patios and assembles without concrete footings if you use the included ground anchors.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The powder-coated aluminum frame won&apos;t rot, rust, or fade. You can host a dinner under it during a light rain or open it fully for a clear night outside. It solves the maintenance problem without the visual downside of vinyl, and the adjustable roof puts it in a different class for year-round use in climates that get all four seasons. On a 12x16 deck entertaining 8 to 10 people, this is the pergola that gets the most use out of any weather window.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/veikous-10-x-13-ft-outdoor-aluminum-pergola-with-adjustable-louvered-roof.jpg" alt="VEIKOUS 10 x 13 ft Outdoor Aluminum Pergola with Adjustable Louvered Roof" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">VEIKOUS 10 x 13 ft Outdoor Aluminum Pergola with Adjustable Louvered Roof</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$769</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Powder-coated aluminum frame with a fully adjustable louvered roof that handles rain, UV, and year-round use with zero maintenance.</p>
            <a
              href="https://www.amazon.com/s?k=VEIKOUS%2010x13%20aluminum%20pergola%20adjustable%20louvered%20roof&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Choosing Your Pergola Material</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check your climate before anything else.</strong> Wood holds up fine in dry climates but needs consistent maintenance in humid or rainy regions. Vinyl and aluminum are smarter fits for the Southeast, Pacific Northwest, and coastal areas.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Factor in the total cost over time.</strong> A $549 wood pergola plus 10 years of stain, sealant, and occasional board replacement can cost more than a $1,500 vinyl pergola over the same period. Do the math for your situation before defaulting to the cheaper upfront price.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Think about your timeline in the home.</strong> If you&apos;re selling in the next three to five years, a clean vinyl or aluminum pergola photographs better and tends to require less buyer negotiation over maintenance history during inspection.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match the material to your house style.</strong> Cedar and rough-sawn wood complement craftsman, farmhouse, and cottage-style homes. Vinyl and aluminum fit better with modern, contemporary, or homes with painted trim and clean lines.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Size it for the furniture, not just the patio.</strong> Measure your outdoor table and chairs first, then add at least 2 feet on each side for clearance. Most 8-person dining sets need at least a 12x14 pergola overhead to feel open rather than cramped.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use ground anchors before committing to concrete.</strong> Most kit pergolas can be anchored without pouring footings, which matters if you rent, plan to move it, or want to reposition it in a few years. Concrete is permanent; anchor stakes give you options.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does a wood pergola last?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A cedar or redwood pergola with proper sealing typically lasts 15 to 25 years. Pressure-treated pine runs 10 to 15 years with consistent upkeep. Fir is the shortest-lived option and works best in dry climates where moisture exposure is limited.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Does a composite pergola look as good as wood?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">From 10 feet away, quality vinyl and composite pergolas are hard to distinguish from painted wood. Up close, the texture difference is noticeable. In a backyard with lots of natural materials around it, the grain and warmth of real wood reads better. In a clean, modern setting, vinyl holds its own.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the maintenance difference between wood and composite pergola?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Wood pergolas need cleaning, sanding, and restaining every 2 to 3 years depending on your climate and sun exposure. Composite and vinyl pergolas need nothing beyond an annual wash with soap and water. Aluminum louvered models require even less, just a wipe-down when it looks dusty.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Does a pergola add value to your home?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A well-built pergola adds functional outdoor living space that buyers notice during showings. Wood pergolas can raise questions about current condition during inspections. Vinyl and aluminum structures tend to close cleaner because there&apos;s no maintenance backlog for buyers to negotiate around.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I install a pergola kit myself?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, most pergola kits are designed for two-person DIY installation over a weekend. Wood kits are generally easier to cut and modify in the field if something is off. Vinyl and aluminum kits require closer attention to the instructions because those materials don&apos;t allow for easy field adjustments.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          <Link href="/blog/apartment-balcony-outdoor-oasis" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Apartment Balcony Outdoor Oasis</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
