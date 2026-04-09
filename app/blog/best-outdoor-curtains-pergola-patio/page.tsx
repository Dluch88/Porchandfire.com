import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Curtains for Pergola and Patio | Porch & Fire',
  description: 'The best outdoor curtains for pergolas and patios. UV-resistant picks from $26 per panel for privacy, shade, and wind protection.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-outdoor-curtains-pergola-patio.jpg"
          alt="Best Outdoor Curtains for Pergola and Patio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Decor
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Curtains for Pergola and Patio
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 16, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Outdoor curtains do more work than most people expect. They block afternoon sun on a west-facing pergola, cut wind on a screened porch, and give you a wall of privacy from the neighbors without needing a fence or a tall hedge.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The difference between outdoor curtains that last and ones that fall apart after one season comes down to fabric. Look for solution-dyed acrylic or polyester with a UV-blocking treatment. Grommet tops hold up better in wind than rod pockets, which can tear at the seam when gusts hit repeatedly.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These five picks cover the range from budget-friendly privacy panels to heavy-duty options built for large pergolas. All of them are real products with thousands of reviews and hold up through rain and sun without fading before the summer ends.</p>


      {/* Product 1: Best Waterproof Pick for Most Pergolas */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Waterproof Pick for Most Pergolas</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a standard 10x12 or 10x20 pergola and want panels that actually repel water instead of just tolerating it, H.VERSAILTEX outdoor curtains are the first thing I would tell you to order. These panels use a water-repellent coating over woven polyester, so after a quick rain shower the water beads off instead of soaking in and leaving musty spots on the fabric.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The grommets are reinforced nickel, which matters if you&apos;re running them on a tension cable or a thick curtain rod. Cheaper grommets stretch out of shape within a few months when curtains get pulled open and closed daily. These hold their shape. They come in lengths from 84 to 108 inches, covering most standard pergola posts, and you have over 25 colors to choose from.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/h-versailtex-outdoor-curtains-waterproof-grommet-top.jpg" alt="H.VERSAILTEX Outdoor Curtains Waterproof Grommet Top" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">H.VERSAILTEX Outdoor Curtains Waterproof Grommet Top</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Water-repellent polyester panels with reinforced nickel grommets, available in 25-plus colors and lengths up to 108 inches.</p>
            <a
              href="https://www.amazon.com/s?k=H.VERSAILTEX%20outdoor%20curtains%20waterproof%20grommet&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best for Full Privacy and Blocking Afternoon Sun */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Full Privacy and Blocking Afternoon Sun</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">NICETOWN makes curtains for almost every situation, but their outdoor line specifically addresses the two things people hate most about afternoon sun on a patio: the glare and the heat. These panels have a triple-weave blackout construction, so on a west-facing pergola they cut late afternoon sun dramatically. A covered patio with these up on three sides feels noticeably cooler than one without any coverage.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">They hang on a grommet top and come in 52-inch widths, so plan on two panels per opening if you&apos;re covering a standard 8-foot pergola bay. The fabric is heavier than most outdoor curtain panels, which helps in wind since lighter panels tend to billow and snap against the rod. For an evening setup where you want to feel enclosed and cut off from sight lines, these are the panels to get.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/nicetown-outdoor-waterproof-blackout-curtain-panels.jpg" alt="NICETOWN Outdoor Waterproof Blackout Curtain Panels" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">NICETOWN Outdoor Waterproof Blackout Curtain Panels</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$32</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Triple-weave blackout construction blocks sun and heat on west-facing pergolas, with heavy fabric that stays put in moderate wind.</p>
            <a
              href="https://www.amazon.com/s?k=NICETOWN%20outdoor%20waterproof%20blackout%20curtain%20panels&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Budget Option Under $30 Per Panel */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Option Under $30 Per Panel</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Deconovo&apos;s outdoor curtain panels hit the sweet spot where the price is low enough to commit to a full pergola setup without overthinking it. At around $28 per panel, four panels across a 12-foot opening runs you about $112. The fabric is UV-protected polyester with a water-resistant finish, and they come in enough neutral tones to match most outdoor furniture without clashing.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These use a grommet top that works on standard 1.5-inch outdoor rods, and the sizing includes 84-inch and 96-inch lengths. They&apos;re a good fit for a covered patio where the curtains won&apos;t be in direct rain constantly but need to handle humidity and morning dew without developing mildew. If you&apos;re testing whether curtains suit your space before committing to a bigger investment, these are the low-risk starting point.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/deconovo-outdoor-curtains-uv-protected-grommet-top.jpg" alt="Deconovo Outdoor Curtains UV Protected Grommet Top" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Deconovo Outdoor Curtains UV Protected Grommet Top</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">UV-protected polyester panels with large grommets for standard outdoor rods, available in neutral and bold colors for covered patios.</p>
            <a
              href="https://www.amazon.com/s?k=Deconovo%20outdoor%20curtains%20UV%20protected%20grommet%20waterproof&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best for Large Pergolas and Tall Ceiling Heights */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Large Pergolas and Tall Ceiling Heights</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most curtain panels max out at 108 inches, which works fine for an 8 or 9-foot pergola. But if you&apos;ve got a 10 or 12-foot structure, you need something longer. TWOPAGES makes outdoor curtain panels in extended lengths up to 240 inches and widths up to 100 inches, which means you can cover a large pergola opening without piecing together shorter panels that never quite align at the hem.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The fabric is a heavier solution-dyed polyester that resists UV fading better than most alternatives. Solution-dyed means the color is in the fiber itself rather than printed on top, so it doesn&apos;t bleach out after a summer of direct sun exposure. If you&apos;ve spent a few thousand dollars on a pergola structure, spending a little more on curtains that won&apos;t look washed out by year two is the right call.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/twopages-outdoor-curtains-heavy-duty-extra-long.jpg" alt="TWOPAGES Outdoor Curtains Heavy Duty Extra Long" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">TWOPAGES Outdoor Curtains Heavy Duty Extra Long</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$68</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solution-dyed polyester panels available in lengths up to 240 inches, built for large pergola openings with 10-plus foot clearance.</p>
            <a
              href="https://www.amazon.com/s?k=TWOPAGES%20outdoor%20curtains%20extra%20long%20heavy%20duty%20pergola&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Sheer for Filtered Light Without Full Privacy */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Sheer for Filtered Light Without Full Privacy</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not every patio situation calls for full privacy panels. If you&apos;re in a backyard without close neighbors and just want to soften the afternoon sun while keeping the view open, a sheer outdoor panel is the right call. The Sun Zero Barrow panel is designed specifically for outdoor use with UV-blocking technology woven into a semi-sheer fabric that diffuses light without cutting off your sight lines.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These work especially well on an east-facing pergola where you want morning light to filter in gently. They use a rod-pocket top, which gives them a softer, more gathered look than grommets. At under $30 a panel, they&apos;re easy to try before committing to a full curtain setup. They come in neutral tones that blend with most outdoor furniture without competing for attention.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sun-zero-barrow-energy-efficient-outdoor-curtain-panel.jpg" alt="Sun Zero Barrow Energy Efficient Outdoor Curtain Panel" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sun Zero Barrow Energy Efficient Outdoor Curtain Panel</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$26</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Semi-sheer UV-blocking panels with a rod-pocket top that filters light without cutting your view, ideal for east-facing pergolas.</p>
            <a
              href="https://www.amazon.com/s?k=Sun%20Zero%20Barrow%20outdoor%20curtain%20panel&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Hanging Outdoor Curtains</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Plan for fullness.</strong> Measure your pergola opening width and multiply by 1.5 for a standard look, or 2x for a full gathered look. Curtains that are too narrow look flat and cheap no matter the fabric quality.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use rust-proof hardware.</strong> Standard indoor curtain rods will rust within one season outside. Use stainless steel or powder-coated aluminum rods and brackets made specifically for outdoor use.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add tie-backs for windy days.</strong> A simple rope tie-back or nautical cleat keeps panels from constantly blowing across your patio. Tie-backs also protect the fabric from stress tears at the grommet holes over time.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Try S-hooks on tension cables.</strong> For grommet panels on tension wire, use S-hooks instead of threading the cable through the grommets. Panels slide much more easily and the hardware lasts longer without constant friction.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Wash them once a season.</strong> Cold water, gentle cycle. Letting mildew build up over the off-season is the main reason outdoor curtains get replaced before the fabric actually wears out.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can outdoor curtains stay out in the rain?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Panels labeled waterproof or water-repellent can handle rain, but most manufacturers recommend tying them back or bringing them in during heavy storms. Extended soaking and wind stress shortens their lifespan even with treated fabric.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size outdoor curtains do I need for a pergola?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Measure your opening width and plan for 1.5x to 2x that measurement in total panel width for good fullness. For length, measure from the rod to about one inch above the ground for a clean look that doesn&apos;t drag.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep outdoor curtains from blowing in the wind?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Use tie-backs or add curtain weights sewn into the hem. Heavier fabric panels hold better in moderate wind than lightweight sheers, and grommet panels on tension cable setups give you more control than rod-pocket styles.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do outdoor curtains provide real privacy?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Solid blackout panels provide full privacy from outside view during the day. Sheer panels filter light but don&apos;t block sight lines. At night with interior lights on, even opaque panels offer limited privacy without a liner behind them.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long do outdoor curtains last?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">With UV-resistant fabric and basic care, quality outdoor curtains typically last three to five years. Bringing them in during winter and washing them at the start of each season extends their lifespan significantly.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-accent-lighting-patio-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Lighting Patio Ideas</p>
          </Link>
          <Link href="/blog/best-outdoor-cushions-patio-furniture" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Cushions Patio Furniture</p>
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
