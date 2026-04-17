import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Propane vs Natural Gas Outdoor Fireplace: Which to Buy | Porch & Fire",
  description: "Compare propane vs natural gas outdoor fireplaces on cost, BTU, and flexibility. Top picks starting at $349 to help you decide before you buy.",
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
            Fire Pits
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Propane vs Natural Gas Outdoor Fireplace: Which to Buy
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 15, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The fuel you choose for an outdoor fireplace affects your wallet, your installation timeline, and how often you actually light the thing. Propane and natural gas produce nearly identical flames and heat output, but they work very differently in practice.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Propane gives you flexibility. Fill a tank, connect it, and you&apos;re burning that evening. Natural gas ties you to a permanent line but costs significantly less per hour once that line is in. For most homeowners, the decision comes down to whether you own your space long-term and how often you plan to run the fireplace.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers both options honestly, including what real installation costs look like, how the per-hour math actually works out, and which products make the most sense depending on your setup.</p>


      {/* Product 1: Best Propane Outdoor Fireplace for Flexibility */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Propane Outdoor Fireplace for Flexibility</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Endless Summer GAD1401G is the kind of fireplace you can set up on a Saturday afternoon without calling a plumber. It runs on a standard 20-lb propane tank, puts out 30,000 BTUs, and has a stacked slate surround that reads as permanent even though it&apos;s completely freestanding. If you&apos;re renting, if you move every few years, or if you want to avoid a gas line installation entirely, this is the realistic choice.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The trade-off is tank refills. At full burn, you&apos;re going through a 20-lb tank roughly every 8 to 10 hours. Running it three nights a week through summer means swapping tanks about once a month. That costs more per BTU than natural gas, but the gap is narrower than people assume, particularly if you&apos;re only burning it two to three hours at a time. For anyone who isn&apos;t sure how much they&apos;ll actually use a fireplace, starting with propane is the lower-risk call.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/endless-summer-gad1401g-lp-gas-outdoor-fireplace.jpg" alt="Endless Summer GAD1401G LP Gas Outdoor Fireplace" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Endless Summer GAD1401G LP Gas Outdoor Fireplace</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$549</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A freestanding propane fireplace with a real open flame and stacked slate surround that works on any patio without a gas line.</p>
            <a
              href="https://www.amazon.com/s?k=Endless%20Summer%20GAD1401G%20LP%20Gas%20Outdoor%20Fireplace&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Natural Gas Outdoor Fireplace for Permanent Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Natural Gas Outdoor Fireplace for Permanent Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Napoleon Riverside 42 is designed for homeowners who are building something that stays. It installs against an exterior wall or outdoor fireplace structure and runs on a dedicated natural gas line, producing a deep, wood-fire-style flame in a 42-inch opening. On a covered patio or outdoor living room, the visual weight of this fireplace changes the whole feel of the space in a way a portable unit simply cannot match.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Installation adds cost upfront. Expect to pay $300 to $600 for a gas line extension if one isn&apos;t already close to your patio, plus another $150 to $250 for the connection and pressure testing. After that, you&apos;re running the fireplace for roughly $0.80 to $1.20 per hour at current gas rates compared to $3 to $4 per hour for propane at the same output. Run it 100 hours a season and the installation cost pays back within two to three years. The calculation improves the more you actually use it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/placeholder.jpg" alt="Napoleon Riverside 42 Clean Face Outdoor Gas Fireplace" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Napoleon Riverside 42 Clean Face Outdoor Gas Fireplace</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$949</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 42-inch natural gas outdoor fireplace built for permanent installation with a clean, deep firebox and realistic flame.</p>
            <a
              href="https://www.amazon.com/s?k=Napoleon%20Riverside%2042%20outdoor%20gas%20fireplace&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Propane Fire Column for Smaller Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Propane Fire Column for Smaller Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">On a 10x10 or 12x12 patio, a full mantel-style fireplace can take over the space and leave nowhere to actually sit. The Bond Manufacturing 52543 Fireglow fire column addresses that problem directly. It&apos;s a vertical propane fire feature, roughly 50 inches tall, that puts out 40,000 BTUs through a tempered glass enclosure. You can tuck it into a corner, position it beside a chair grouping, or place it at the edge of a deck without it dominating the layout.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The column format also makes propane more practical here. The 20-lb tank sits inside the base, hidden by the housing, so you&apos;re not looking at a green cylinder on the ground. For patios where a built-in fireplace doesn&apos;t make spatial or financial sense, this format gives you the flame, the warmth, and the ambiance at a fraction of the cost and zero permanent commitment.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bond-manufacturing-52543-fireglow-26-inch-propane-fire-column.jpg" alt="Bond Manufacturing 52543 Fireglow 26-Inch Propane Fire Column" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bond Manufacturing 52543 Fireglow 26-Inch Propane Fire Column</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$349</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A vertical propane fire column with concealed tank storage and a tempered glass enclosure built for compact outdoor spaces.</p>
            <a
              href="https://www.amazon.com/s?k=Bond%20Manufacturing%2052543%20Fireglow%20propane%20fire%20column&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Natural Gas Fire Table When a Fireplace Doesn&apos;t Fit */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Natural Gas Fire Table When a Fireplace Doesn&apos;t Fit</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;re leaning toward natural gas but a full outdoor fireplace exceeds your budget or footprint, the Sunnydaze 42-inch Natural Gas Fire Pit Table deserves a serious look. It runs on a permanent NG connection, produces 50,000 BTUs, and doubles as a functional surface when you drop the lid over the burner. For entertaining 6 to 8 people around a seating arrangement, the table format often works better than a wall-mounted fireplace because the heat and light radiate outward in all directions.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The practical case for natural gas here is identical to any permanent gas appliance. You turn a knob, it lights, and you never think about fuel again. No tank runs mid-dinner, no one asking where the propane is stored in the shed. For a patio that gets real use from spring through fall, that reliability has value that&apos;s hard to quantify until the first time you&apos;re entertaining and it just works.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-42-inch-natural-gas-fire-pit-table-with-lid.jpg" alt="Sunnydaze Decor 42-Inch Natural Gas Fire Pit Table with Lid" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor 42-Inch Natural Gas Fire Pit Table with Lid</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$479</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 50,000-BTU natural gas fire pit table with a convertible lid surface, built for permanent patio use and large gatherings.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%2042%20inch%20natural%20gas%20fire%20pit%20table%20outdoor&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Choosing Outdoor Fireplace Fuel</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Get a gas line quote before assuming propane is cheaper.</strong> A short line extension from an existing exterior connection often runs $300 to $400 total including labor. Many homeowners assume NG installation is expensive and go propane without ever checking.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">BTU ratings are comparable across both fuels.</strong> A 40,000-BTU propane fireplace produces essentially the same heat as a 40,000-BTU natural gas unit. The fuel type doesn&apos;t change the warmth output in any meaningful way.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Propane makes more sense if you move every few years.</strong> Natural gas installations have a payback period that only works if you stay in the home for multiple seasons. Renters and frequent movers are almost always better served by a portable propane setup.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Look for dual-fuel convertible models if you&apos;re undecided.</strong> Some outdoor fireplaces ship with conversion kits that let you switch between propane and natural gas by swapping orifice fittings. This is a reasonable hedge if you&apos;re building a new patio and aren&apos;t sure yet.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check local permit requirements before any gas line work.</strong> Most municipalities require a permit for new gas line installation. A licensed plumber handles the permit, but factor in a few weeks for inspection scheduling when planning your project timeline.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is propane or natural gas cheaper for an outdoor fireplace?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Natural gas is cheaper to run once the line is in place, typically $0.80 to $1.20 per hour versus $3 to $4 per hour for propane at comparable BTU output. The upfront installation cost for a gas line usually pays back within two to three seasons of regular use.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I convert a propane outdoor fireplace to natural gas?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Many models offer a conversion kit that includes different orifice fittings sized for natural gas pressure. Not every propane fireplace is convertible, so check the manufacturer specs before purchasing. The conversion must be performed by a licensed professional to stay within warranty and local code.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does a 20-lb propane tank last on an outdoor fireplace?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">At a typical output of 30,000 to 40,000 BTUs, a 20-lb tank lasts roughly 8 to 12 hours of continuous burn. Running it two to three hours per evening, you&apos;d refill once or twice a month during peak season.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do outdoor propane fireplaces need to be vented?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most freestanding outdoor propane fireplaces are ventless by design since they&apos;re used in open air. They should not be operated in fully enclosed spaces. If your patio is covered and screened on multiple sides, make sure there&apos;s adequate airflow on at least two open sides.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What BTU output do I need for an outdoor fireplace?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For open patios, 30,000 to 50,000 BTUs is the right range for most residential setups. Covered or partially enclosed outdoor rooms can often work well with 20,000 to 30,000 BTUs. Going higher doesn&apos;t necessarily mean more warmth if heat is escaping into open air around you.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-fire-pit-tables" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Tables</p>
          </Link>
          <Link href="/blog/best-decorative-fire-bowls-patio-ambiance" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Decorative Fire Bowls Patio Ambiance</p>
          </Link>
          <Link href="/blog/backyard-fire-pit-area-on-a-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Fire Pit Area On A Budget</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
