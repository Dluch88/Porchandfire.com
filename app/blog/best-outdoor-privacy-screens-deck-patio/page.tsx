import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Privacy Screens for Decks and Patios | Porch & Fire',
  description: 'Top privacy screens for decks and patios in 2026. Bamboo, metal, and fabric options from $42. Block neighbors without blocking your style.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Outdoor Privacy Screens for Decks and Patios"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Pergolas &amp; Shade
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Privacy Screens for Decks and Patios
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 23, 2026</span>
          <span>&middot;</span>
          <span>9 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">If your neighbor&apos;s deck chair is basically a front-row seat to everything you do outside, a privacy screen is the fastest fix. No fence permits, no landscaping timelines. Just a weekend project.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The best outdoor privacy screens block sightlines and look like they belong. The cheap ones look like job site tarps and start sagging by October. This roundup covers six options across bamboo, metal, and fabric that hold up in real weather and fit real patios.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Prices start around $42 for a reed roll you clip to an existing railing and go up to about $159 for a permanent steel panel. There&apos;s something here for renters with a balcony, homeowners with a side yard, and anyone who just wants to eat dinner without an audience.</p>


      {/* Product 1: Best Natural Reed Screen for Deck Railings */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Natural Reed Screen for Deck Railings</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Reed grass rolls are the workhorse of outdoor privacy. You unroll one along a chain-link fence or deck railing, secure it with zip ties or wire, and in about 20 minutes you have a solid visual barrier. The Naturalyou Natural Reed Grass Privacy Screen comes in sizes up to 13 feet wide by 6 feet tall, which covers most standard deck sections in a single piece.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The texture is what gets people. Reed fences look like something you&apos;d find at a well-designed beach bar, not a job site. The reeds are bound with galvanized wire instead of plain steel, so it holds up better than cheaper cuts and lasts two to three seasons in most climates. At $42 for a 13x5ft roll, it&apos;s the most affordable way to get serious coverage fast.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/naturalyou-natural-reed-grass-privacy-screen-fence-13x5ft.jpg" alt="Naturalyou Natural Reed Grass Privacy Screen Fence 13x5ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Naturalyou Natural Reed Grass Privacy Screen Fence 13x5ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$42</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Natural reed roll with galvanized wire binding that clips to any railing or fence for instant, textured privacy.</p>
            <a
              href="https://www.amazon.com/s?k=Naturalyou%20Natural%20Reed%20Grass%20Privacy%20Screen%20Fence&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Freestanding Bamboo Screen for Renters */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Freestanding Bamboo Screen for Renters</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not everyone can drill into a railing or attach hardware to a fence. The Outsunny 6-Panel Bamboo Privacy Screen is fully freestanding, folds like an accordion, and requires zero tools to set up. It stands about 5.5 feet tall and spans close to 9 feet when fully extended, which is enough to block sightlines between two patio chairs and a neighbor&apos;s fence line.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Bamboo reads as warm and intentional, unlike a plastic divider. This one comes hinged so you can angle it in a V or zigzag shape for a more stable footprint on windy days. It&apos;s not meant to live outside year-round, so bring it in for winter or cover it, but for a rental where you can&apos;t install anything permanent, it&apos;s the cleanest option on this list.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-6-panel-freestanding-bamboo-privacy-screen-room-divider.jpg" alt="Outsunny 6-Panel Freestanding Bamboo Privacy Screen Room Divider" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny 6-Panel Freestanding Bamboo Privacy Screen Room Divider</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Freestanding bamboo panel that folds to any angle, needs no tools or hardware, and works on any flat surface.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%206%20Panel%20Freestanding%20Bamboo%20Privacy%20Screen%20Outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Metal Privacy Screen for a Permanent Side Yard */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Metal Privacy Screen for a Permanent Side Yard</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;re done with temporary fixes and want something that looks like it was designed for your patio, a steel panel is the move. The Sunnydaze 4-Panel Steel Decorative Outdoor Privacy Screen has a laser-cut geometric pattern that casts interesting shadows in afternoon sun. Each panel is about 24 inches wide, so the four-panel set covers roughly 8 feet when connected in a straight line.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Steel screens like this anchor with included stakes you drive into the ground beside your patio or fence line. The powder-coat finish resists rust, though a spray paint touch-up every couple of years keeps it looking sharp. At $159, it&apos;s the priciest option here, and also the one most likely to get a compliment instead of a question about what it is.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-4-panel-steel-decorative-outdoor-privacy-screen.jpg" alt="Sunnydaze 4-Panel Steel Decorative Outdoor Privacy Screen" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze 4-Panel Steel Decorative Outdoor Privacy Screen</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$159</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Powder-coated steel panel with a laser-cut pattern that anchors into the ground and doubles as a landscape accent.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%204%20Panel%20Steel%20Decorative%20Outdoor%20Privacy%20Screen&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Fabric Mesh Screen for Long Fence Lines */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Fabric Mesh Screen for Long Fence Lines</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a chain-link fence, a deck railing, or a pergola frame you want to block, fabric mesh privacy screen is the most cost-effective way to do it. TANG Sunshades Depot makes a 5x16ft privacy screen in a tight-knit polyethylene weave that blocks around 85 percent of the view through it. It comes grommeted along the edges every 18 inches, so you can lace it to any structure with zip ties, rope, or bungee hooks.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 5x16ft panel handles the full length of most mid-size decks in one shot, and you can buy multiple to wrap a corner. TANG makes them in beige, brown, and dark green, so they blend into most yard settings without standing out. It&apos;s not a design statement like the bamboo or metal options, but it&apos;s the right call when sheer coverage area matters more than looks.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tang-sunshades-depot-5ft-x-16ft-privacy-screen-fence.jpg" alt="TANG Sunshades Depot 5ft x 16ft Privacy Screen Fence" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">TANG Sunshades Depot 5ft x 16ft Privacy Screen Fence</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$44</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">High-density polyethylene mesh screen with grommets that laces to any fence, railing, or frame for full-length coverage.</p>
            <a
              href="https://www.amazon.com/s?k=TANG%20Sunshades%20Depot%205x16%20privacy%20screen%20fence&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Roller Shade Privacy Screen for Covered Porches */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Roller Shade Privacy Screen for Covered Porches</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your patio or porch has an overhead structure, a roller shade is one of the most functional privacy tools you can add. The Coolaroo 8x6ft Exterior Roller Shade mounts to the underside of a pergola beam, deck overhang, or porch ceiling and rolls down when you want privacy and rolls back up when you don&apos;t. It blocks both sunlight and sightlines, which is especially useful on a west-facing porch during evening hours.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Coolaroo&apos;s fabric is UV-stabilized high-density polyethylene, so it won&apos;t crack or fade the way vinyl roller shades do. The 8x6ft size covers one full side of a 10x10 patio when extended, and installation is four screws plus a bracket kit that comes in the box. If your porch faces the street or a neighbor&apos;s yard, this is the cleanest way to get on-demand privacy without committing to a permanent install.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/coolaroo-8ft-x-6ft-exterior-roller-shade.jpg" alt="Coolaroo 8ft x 6ft Exterior Roller Shade" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Coolaroo 8ft x 6ft Exterior Roller Shade</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$72</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">UV-stabilized knitted shade fabric that mounts to any overhead structure and rolls up when you want open sightlines again.</p>
            <a
              href="https://www.amazon.com/s?k=Coolaroo%208x6%20exterior%20roller%20shade%20patio&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Wicker Panel Screen for Poolside or Outdoor Bars */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wicker Panel Screen for Poolside or Outdoor Bars</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Around a pool or outdoor bar, you want something that looks like a design choice, not a patch job. The Giantex 5-Panel PE Rattan Outdoor Privacy Screen uses synthetic wicker in a close weave pattern that reads as furniture-grade rather than utilitarian. It stands about 5.6 feet tall and spans 9 feet extended, which is enough to create a defined corner around a lounge chair or bar cart setup.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The synthetic rattan holds up to moisture better than natural bamboo and cleans up with a hose, and the hinged panels shape into an L, U, or flat line depending on what you need to block. It won&apos;t stop wind the way a solid fence would, but for line-of-sight privacy on a 12x16 patio, it does the job. This works best when you already have some surrounding structure and just need to close off one or two open sides.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/giantex-5-panel-pe-rattan-outdoor-privacy-screen-room-divider.jpg" alt="Giantex 5-Panel PE Rattan Outdoor Privacy Screen Room Divider" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Giantex 5-Panel PE Rattan Outdoor Privacy Screen Room Divider</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$94</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Synthetic wicker hinged panel screen that looks furniture-grade and shapes into any configuration for pool or bar areas.</p>
            <a
              href="https://www.amazon.com/s?k=Giantex%205%20panel%20PE%20rattan%20outdoor%20privacy%20screen%20divider&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Outdoor Privacy Screens</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure your coverage gap before ordering.</strong> Figure out exactly how many linear feet you need to cover. Most screens run 6 to 16 feet wide, and a panel that falls 2 feet short is more noticeable than you&apos;d expect.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match material to your situation.</strong> Renters and apartment dwellers should stick with freestanding bamboo or rattan. Homeowners with existing fences or railings have more options with fabric rolls and reed screens.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Height matters more than you think.</strong> A 5-foot screen blocks sightlines when everyone is seated. If your neighbor&apos;s yard is elevated or you&apos;re dealing with a second-story view, go 6 feet or higher.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Anchor freestanding screens on exposed sites.</strong> On decks without windbreaks, even heavy screens can tip in strong gusts. Stake the base panels into the ground or weigh the feet down with large planters.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use plants to soften and reinforce fabric screens.</strong> A row of tall ornamental grasses or potted bamboo in front of a fabric screen takes the utilitarian edge off and adds a second layer of coverage in heavy wind.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Factor in maintenance before buying natural materials.</strong> Reed, bamboo, and untreated wood need seasonal attention or replacement every one to three years. Steel panels and synthetic rattan are essentially maintenance-free.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I attach a privacy screen to a deck railing?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most fabric and reed screens come with grommets or built-in ties. Use zip ties, bungee hooks, or wire to secure them to the railing balusters or top rail. Space fasteners every 18 to 24 inches for a clean, tight result that won&apos;t sag.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What outdoor privacy screen holds up best in wind?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Steel panels anchored into the ground are the most wind-resistant option. For fabric screens on railings, a tighter weave catches less wind load than an open knit. Freestanding bamboo and wicker should be angled into a V or L configuration to stay stable in gusts.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How tall should an outdoor privacy screen be for a patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Five to six feet covers seated and standing sightlines for most adults. If you&apos;re blocking a neighbor with an elevated yard or a second-floor window, look for panels at 6 feet or taller.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do privacy screens block wind as well as views?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Solid metal panels block both wind and views effectively. Open-weave fabric screens block most of the view but let air through, which actually helps them stay upright rather than acting like a sail in strong wind.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a bamboo privacy screen on an apartment balcony?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A freestanding folding bamboo screen is one of the best no-drill options for balconies. Angle it in a V shape against the railing for stability and store it inside during winter to extend its life.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/apartment-balcony-outdoor-oasis" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Apartment Balcony Outdoor Oasis</p>
          </Link>
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          <Link href="/blog/best-outdoor-accent-lighting-patio-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Lighting Patio Ideas</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
