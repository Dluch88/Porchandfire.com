import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Retractable Awnings for Decks and Patios | Porch & Fire',
  description: 'Top retractable awnings for decks in 2026, from motorized cassette models to manual crank picks. Coverage from 10 to 18 feet wide, starting at $219.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-retractable-awnings-deck-patio.jpg"
          alt="Best Retractable Awnings for Decks and Patios"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Pergolas &amp; Shade
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Retractable Awnings for Decks and Patios
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 29, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A retractable awning gives you something a pergola can&apos;t: the ability to close it up when you want full sun and roll it out the moment the afternoon heat arrives. For most decks and patios, that flexibility is worth more than a permanent structure.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The market breaks down pretty cleanly. Motorized awnings are more convenient and worth it if you entertain regularly or have kids running in and out. Manual crank models cost less and are easier to install, but you have to walk over and crank them each time. Both styles work well if you buy the right size for your space.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These five picks cover everything from a tight apartment balcony to a sprawling 18-foot deck. Installation is DIY-friendly on all of them, though you will want a second person for the heavy lifting.</p>


      {/* Product 1: Best Premium Motorized Awning Overall */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Motorized Awning Overall</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Advaning A-Series is the one to get if you want a motorized awning that looks like it belongs on your house, not like a rental property afterthought. The semi-cassette design wraps the fabric and arms when retracted, protecting everything from UV damage and keeping the whole setup looking clean year-round. On a 13-foot-wide deck, it covers roughly 10 feet of projection, which means real shade for a dining table with room left over for a couple of loungers.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The motor is quiet and the remote works from inside through a sliding glass door, which is genuinely useful when you&apos;re already seated with a drink. It holds up to moderate wind without rattling or billowing, and the powder-coated aluminum frame does not show rust after a few seasons the way cheaper options do. If you use your outdoor space daily from May through September, this is the awning to buy.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/advaning-a13-series-semi-cassette-motorized-retractable-awning-13x10ft.jpg" alt="Advaning A13 Series Semi-Cassette Motorized Retractable Awning 13x10ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Advaning A13 Series Semi-Cassette Motorized Retractable Awning 13x10ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,199</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Premium semi-cassette motorized awning with a quiet motor, remote control, and powder-coated aluminum frame that actually looks like it was built for the house.</p>
            <a
              href="https://www.amazon.com/s?k=Advaning%20A-Series%20motorized%20retractable%20awning%20semi-cassette%2013ft&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Motorized Awning Under $800 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Motorized Awning Under $800</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">ALEKO has been making retractable awnings for years and the motorized line is where they earn their reputation. The 13x8-foot model covers a standard 12-foot deck section well, giving you shade from roughly noon to 4pm depending on your orientation. The fabric is a thick acrylic-coated polyester that blocks UV without making the space feel dark, and it comes in enough solid colors to match most exterior paint choices.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Setup takes about two hours for two people. The mount goes into the fascia or wall studs and ALEKO includes all the hardware. The motor is a bit louder than higher-end options, but it is not distracting from a conversation. This is the right call for people who want motorized convenience without spending pergola money.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/aleko-motorized-retractable-awning-13x8ft.jpg" alt="ALEKO Motorized Retractable Awning 13x8ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">ALEKO Motorized Retractable Awning 13x8ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$749</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Motorized retractable awning with UV-blocking acrylic fabric, remote control, and a straightforward two-person installation at a price that makes sense for most homeowners.</p>
            <a
              href="https://www.amazon.com/s?k=ALEKO%20motorized%20retractable%20awning%2013x8&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Manual Crank Awning for Mid-Size Decks */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Manual Crank Awning for Mid-Size Decks</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not everyone needs a motor. If you use your deck mostly on weekends and do not mind a quick crank, the Artpuch 13x8-foot manual awning does exactly what a retractable awning should do without added mechanical complexity. The crank mechanism is smooth and takes about 20 turns to fully extend 8 feet of projection, which covers a good portion of a 10x12 deck and shades a standard outdoor dining table completely.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The aluminum frame is light enough to manage during installation, though you will still want a helper getting it up on the wall. Artpuch uses 280gsm polyester fabric with a UV-blocking coating that holds up across seasons without fading badly in the first summer. For a covered side porch or a deck with brutal western exposure, this gets the job done at a fraction of what the motorized options cost.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/artpuch-retractable-awning-13x8ft-manual-crank.jpg" alt="Artpuch Retractable Awning 13x8ft Manual Crank" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Artpuch Retractable Awning 13x8ft Manual Crank</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$279</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Manual crank retractable awning with smooth operation, UV-blocking polyester fabric, and simple wall-mount installation sized for standard mid-range decks.</p>
            <a
              href="https://www.amazon.com/s?k=Artpuch%20retractable%20awning%2013x8%20manual%20crank&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Motorized Awning for Wide Decks */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Motorized Awning for Wide Decks</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Covering a deck wider than 14 feet is where most awnings fall short. The Awntech Beauty-Mark motorized line goes up to 18 feet wide, which is uncommon at this price range. If you have a wraparound deck or a long rectangular patio that seats 10 to 12 people, the extra width makes a meaningful difference. At 16 feet across, you get enough coverage to shade a full dining table and a pair of lounge chairs at the same time.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The motor on the Awntech includes a manual override, which is a practical backup if a circuit trips during a storm when you actually need it retracted. The frame is heavy, so plan on two people and at least two hours for installation. Fabric quality is solid and the color options skew neutral, which makes it easier to match the exterior of most houses without it looking like an add-on.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/awntech-beauty-mark-motorized-retractable-awning-16x10ft.jpg" alt="Awntech Beauty-Mark Motorized Retractable Awning 16x10ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Awntech Beauty-Mark Motorized Retractable Awning 16x10ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,099</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">890+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Wide-format motorized awning scaling up to 18 feet with a manual override motor and durable fabric built for large decks where narrower options fall short.</p>
            <a
              href="https://www.amazon.com/s?k=Awntech%20Beauty-Mark%20motorized%20retractable%20awning%2016ft&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Budget Manual Awning for Small Patios and Balconies */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Manual Awning for Small Patios and Balconies</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 10-foot-wide manual awning is the right move for an apartment balcony, a small townhouse patio, or a side porch where you just need to knock out the afternoon sun without spending serious money. The Kamplux 10x8-foot model does this well. It extends 8 feet and creates a solid shade zone for a bistro table and two chairs on a 10x10-foot space, which covers most balcony footprints completely.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The crank is side-mounted and turns without resistance, and the locking straps hold the arms in place when the awning is retracted. The aluminum frame is thinner than premium options, but for a sheltered balcony or a partially covered porch it is more than adequate. At this price it is also a reasonable way to test whether a retractable awning fits your lifestyle before committing to a motorized setup down the road.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kamplux-retractable-awning-10x8ft-manual-crank.jpg" alt="Kamplux Retractable Awning 10x8ft Manual Crank" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kamplux Retractable Awning 10x8ft Manual Crank</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$219</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Compact manual retractable awning for small patios and apartment balconies, with a smooth side-mount crank and lightweight aluminum frame at a genuinely affordable price.</p>
            <a
              href="https://www.amazon.com/s?k=Kamplux%20retractable%20awning%2010x8%20manual&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying a Retractable Awning</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure your mounting surface first.</strong> The awning width should be 2 to 3 feet shorter than the wall section you are mounting to. You need solid studs or a ledger board to hold the weight, not just siding.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the wind rating before you buy.</strong> Most residential awnings are rated for Beaufort 4 or 5, around 13 to 24 mph. Retract the awning when sustained winds climb above that threshold to avoid bent arms.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">South and west-facing decks benefit most.</strong> A south-facing deck bakes from noon onward. West-facing decks get brutal late-afternoon sun. East-facing decks rarely need an awning at all.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">A semi-cassette or full cassette protects the fabric.</strong> An open design leaves the rolled fabric exposed to bird droppings, debris, and UV when retracted. A cassette adds real years to the fabric lifespan.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Projection matters as much as width.</strong> Width determines how many people you can seat side by side. Projection, how far the awning extends outward, determines how much direct sun you actually block during peak hours.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much does a retractable awning cost?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Manual retractable awnings start around $200 to $300 for smaller sizes and top out near $500 for larger models. Motorized versions typically run $700 to $1,500 depending on width and features like cassette protection and remote control.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I install a retractable awning myself?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, most homeowners can DIY a retractable awning with one helper. You need to locate wall studs or a ledger board and get the mount level before committing. Budget two to three hours for a 13-foot model.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What wind speed can a retractable awning handle?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most residential retractable awnings are rated for winds up to 22 to 26 mph. Above that, retract it. Wind sensor accessories are available for motorized models and will auto-retract when wind picks up.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does a retractable awning last?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A quality awning should last 10 to 15 years with basic care. The fabric usually needs replacement at 8 to 12 years. Retracting during heavy rain and storing it in winter adds meaningful life to both the fabric and the motor.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size retractable awning do I need?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Take your deck width and subtract about 2 feet to get your awning width. For projection depth, a standard outdoor dining table needs at least 7 to 8 feet of outward extension to stay fully shaded during peak afternoon hours.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-pergolas-shade-style" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Pergolas Shade Style</p>
          </Link>
          <Link href="/blog/best-patio-umbrellas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Patio Umbrellas</p>
          </Link>
          <Link href="/blog/best-outdoor-ceiling-fans" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Ceiling Fans</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
