import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Build a Hot Tub Deck Surround for Less | Porch & Fire",
  description: "DIY a hot tub deck surround for $800–$1,800 in materials. Composite boards, post base hardware, bamboo privacy screens, and a spa step that handles 300 lbs.",
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
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Build a Hot Tub Deck Surround for Less
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 5, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A bare hot tub sitting on a concrete pad looks like an appliance. A hot tub with a proper deck surround looks like a backyard destination. The difference is a weekend of work and roughly $800 to $1,500 in materials.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Most contractors quote $3,000 to $8,000 for a basic hot tub deck. A lot of that is labor on a project that is genuinely manageable for a confident DIYer. The framing is straightforward, the material choices are forgiving, and the tricky parts can be sidestepped with smart planning.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks through four decisions: what to use for decking, how to handle the framing hardware, how to add a privacy screen without building a full fence, and how to give yourself a proper step entry. None of these require a contractor.</p>


      {/* Product 1: Best Decking Material for a Budget Hot Tub Surround */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Decking Material for a Budget Hot Tub Surround</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Pressure-treated lumber is the classic choice and it works fine, but composite decking boards have gotten cheap enough that the math has shifted. You avoid the annual staining, the splintering, and the warping that comes from boards sitting next to a wet, steaming hot tub for years. For a standard 10x12 platform surround, you are looking at roughly 12 to 15 packs of composite boards depending on your layout.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">VEVOR makes a WPC composite decking board that hits a price point most people do not expect from composite. Each board has a hollow-core construction that keeps weight down and installs with hidden fasteners for a clean finished look. The textured surface holds up well around water, which matters a lot when people are stepping out of a hot tub with wet feet. These come in multiple colors so you can match an existing deck or patio without painting anything.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/vevor-wpc-composite-decking-boards-6-pack.jpg" alt="VEVOR WPC Composite Decking Boards 6-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">VEVOR WPC Composite Decking Boards 6-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$74</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Hollow-core composite boards with hidden fastener grooves and a slip-resistant texture built for wet-area use around pools and spas.</p>
            <a
              href="https://www.amazon.com/s?k=VEVOR%20WPC%20composite%20decking%20boards%20hollow%20core%20hidden%20fastener&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Framing Hardware for a Freestanding Hot Tub Platform */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Framing Hardware for a Freestanding Hot Tub Platform</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The frame under your deck is what determines whether this project lasts five years or twenty-five. Most DIY deck failures come from skimping on post bases and letting wood sit directly on concrete or soil. Simpson Strong-Tie post bases are what professional framers use, and they are available on Amazon without the contractor markup.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The ABA44Z adjustable post base is the one to get for a hot tub surround. It keeps your 4x4 posts elevated off the concrete pad so moisture cannot wick up into the end grain. Adjustable means you can compensate for a pad that is not perfectly level, which most pads are not. A hot tub full of water and people adds a lot of concentrated weight to your framing. Getting this part right protects everything above it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/simpson-strong-tie-aba44z-adjustable-post-base-4-pack.jpg" alt="Simpson Strong-Tie ABA44Z Adjustable Post Base 4-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Simpson Strong-Tie ABA44Z Adjustable Post Base 4-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Galvanized adjustable post bases that keep framing lumber off concrete surfaces and handle slight grade variations in the pad.</p>
            <a
              href="https://www.amazon.com/s?k=Simpson%20Strong-Tie%20ABA44Z%20adjustable%20post%20base%204x4%204-pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Privacy Screen for a Hot Tub Deck */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Privacy Screen for a Hot Tub Deck</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Privacy is not optional on a hot tub. Even with a decent fence line, a neighbor&apos;s elevated yard or a second-floor window kills the experience fast. A bamboo fencing roll attached to a simple 4x4 post frame gives you six to eight feet of screening in an afternoon and costs a fraction of what a built lattice or cedar privacy wall would run.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Backyard X-Scapes makes a natural bamboo roll that comes in 6-foot height options and lengths up to 16 feet. One roll handles one full side of a typical surround, so plan on two to three rolls depending on how many sides need screening. The rolls attach with zip ties or wire to whatever post structure you have already built for the deck frame. Left natural, the bamboo weathers to a silver-gray over time. Seal it with tung oil if you want to hold that warm honey color longer.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/backyard-x-scapes-6-ft-h-x-16-ft-w-bamboo-fencing-roll.jpg" alt="Backyard X-Scapes 6 ft. H x 16 ft. W Bamboo Fencing Roll" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Backyard X-Scapes 6 ft. H x 16 ft. W Bamboo Fencing Roll</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$54</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Natural bamboo privacy fencing that mounts to existing post structures and provides 6 feet of solid screening for hot tub surrounds.</p>
            <a
              href="https://www.amazon.com/s?k=Backyard%20X-Scapes%20bamboo%20fencing%20roll%206%20foot%2016%20foot&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Step Entry for a Raised Hot Tub Deck */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Step Entry for a Raised Hot Tub Deck</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most hot tub surrounds raise the tub 12 to 18 inches off the ground for drainage clearance and equipment panel access. That means you need a dedicated entry step, and the cheapest practical fix is a molded plastic spa step that requires zero carpentry. The Confer Plastics Step-1 is the one you will see at nearly every above-ground pool and spa installation because it is overbuilt for what it costs.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It supports up to 300 pounds, has a non-slip textured surface, and the 24-inch width is wide enough to feel stable when you are stepping out wet. You can use it as a standalone entry or anchor it to the deck framing for a permanent install. For a budget build, this saves you from framing a built-in step box, which adds complexity and material cost to a project you are trying to keep manageable.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/confer-plastics-step-1-heavy-duty-above-ground-spa-step.jpg" alt="Confer Plastics Step-1 Heavy-Duty Above-Ground Spa Step" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Confer Plastics Step-1 Heavy-Duty Above-Ground Spa Step</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Molded spa step rated for 300 lbs with non-slip texture and a 24-inch width that anchors to deck framing or works standalone.</p>
            <a
              href="https://www.amazon.com/s?k=Confer%20Plastics%20Step-1%20heavy%20duty%20spa%20above%20ground%20pool%20step&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Building a Hot Tub Deck Surround</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Leave a service access panel.</strong> Build one section of decking with removable boards secured by screws instead of hidden fasteners. You will need to reach the equipment panel and plumbing at some point, and you do not want to pry up a finished deck to do it.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Slope the surface slightly.</strong> A 1/8 inch per foot slope away from the tub keeps water from pooling on the deck and reduces slip hazards after people climb out.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check permit requirements before you frame.</strong> Many municipalities require a permit for attached deck structures over 30 inches high or 200 square feet. A freestanding hot tub surround often falls below that threshold, but confirm with your local building department first.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use stainless or hot-dipped galvanized fasteners.</strong> Standard deck screws corrode fast in a high-humidity hot tub environment. Budget the extra $15 for the right fasteners at the start rather than dealing with rust stains and failing connections two years in.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure equipment clearance before you frame.</strong> Your hot tub manual specifies minimum clearance around the unit for the cover lift, equipment panel, and filter access. Frame around those specs, not around what looks proportional.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much does it cost to build a hot tub deck surround yourself?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most DIY hot tub surrounds run $800 to $1,800 in materials depending on deck size and whether you add a privacy screen. That compares to $3,000 to $8,000 for contractor installation. The biggest variable is your decking material choice.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need a permit to build a deck around my hot tub?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">It depends on your municipality and the structure size. Freestanding platforms under 30 inches high and under 200 square feet often do not require a permit. Call your local building department before you start framing to avoid a stop-work order.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best decking material to use around a hot tub?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Composite decking outperforms pressure-treated wood in wet environments. It does not warp, splinter, or require annual sealing. Budget composite boards have dropped in price significantly and are a better long-term value for a hot tub surround.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I add a step to a raised hot tub deck?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A molded plastic spa step like the Confer Step-1 is the simplest solution. It bolts to the deck framing, handles 300 pounds, and costs under $100. Building a framed wood step box adds cost and complexity without a meaningful performance benefit.</p>
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
          <Link href="/blog/backyard-fire-pit-area-on-a-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Fire Pit Area On A Budget</p>
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
