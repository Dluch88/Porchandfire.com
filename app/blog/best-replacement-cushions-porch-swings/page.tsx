import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Replacement Cushions for Porch Swings | Porch & Fire',
  description: 'The best porch swing replacement cushions in 2026, from $36 budget picks to Sunbrella options that outlast everything else. Tie-on designs, oversized fits, real outdoor fabrics.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Replacement Cushions for Porch Swings"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Seating
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Replacement Cushions for Porch Swings
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 21, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A worn-out porch swing cushion turns what should be the best seat on the property into something you walk past. Replacing just the cushion is almost always all you need to bring the swing back.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Outdoor cushions fail in predictable ways. The foam collapses. The fabric fades or grows mildew. The ties rot off. Knowing what failed on yours helps you shop smarter the second time.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This list covers six cushions across different price points, fabric types, and sizes, from standard 48-inch fits to oversized 60-inch swings. Every pick uses outdoor-rated materials and most can handle rain without being dragged inside every time clouds roll in.</p>


      {/* Product 1: Best Sunbrella Cushion for Long-Term Use */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Sunbrella Cushion for Long-Term Use</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;ve had a porch swing cushion fail after one season, the fabric was almost certainly the problem. Sunbrella solution-dyed acrylic holds color and resists mildew in a way polyester just cannot match. The Mozaic Sunbrella Indoor/Outdoor Tufted Bench Cushion uses genuine Sunbrella fabric and is worth every dollar if your swing gets daily use or sits in a spot that stays damp.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This cushion comes in a 48-inch length that fits most standard three-person swings, and it runs 4 inches thick, substantial without being so puffy it looks out of place. The tufted design keeps the fill from shifting after a few weeks of use. You can hose it off, let it dry in the sun, and it comes back looking the same.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The color selection runs from navy and red to neutral stripes. If you&apos;re in a humid climate or the swing lives in a spot that doesn&apos;t dry quickly after rain, Sunbrella fabric is the one upgrade that actually pays off over multiple seasons.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mozaic-sunbrella-indoor-outdoor-tufted-bench-cushion-48-inch.jpg" alt="Mozaic Sunbrella Indoor/Outdoor Tufted Bench Cushion 48-Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Mozaic Sunbrella Indoor/Outdoor Tufted Bench Cushion 48-Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$109</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Genuine Sunbrella fabric with 4-inch fill and tufted design, built to stay put and resist mildew through years of outdoor use.</p>
            <a
              href="https://www.amazon.com/s?k=Mozaic%20Sunbrella%20outdoor%20tufted%20bench%20cushion%2048%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Cushion Set Built Specifically for Swings */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cushion Set Built Specifically for Swings</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most bench cushions are designed for garden benches and happen to fit swings, which means no back support and ties positioned for bench legs instead of swing hardware. Greendale Home Fashions makes a cushion set built specifically for porch swings, with both a seat pad and a back pad sold together.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The seat pad is 3.5 inches thick and the back cushion adds real lumbar support, which makes a longer sit-outside-with-coffee morning actually comfortable. It fits standard 60-inch swings and comes in a range of patterns including stripes, solids, and prints that work on painted wood or natural cedar.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the set to pick if you want something that looks intentional rather than retrofitted. The covers are removable and machine washable, which is a bigger deal than it sounds after a full summer of use.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/greendale-home-fashions-outdoor-porch-swing-cushion-set.jpg" alt="Greendale Home Fashions Outdoor Porch Swing Cushion Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Greendale Home Fashions Outdoor Porch Swing Cushion Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$68</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A two-piece swing-specific cushion set with seat and back pads, removable machine-washable covers, and ties positioned for actual swing hardware.</p>
            <a
              href="https://www.amazon.com/s?k=Greendale%20Home%20Fashions%20outdoor%20porch%20swing%20cushion%20set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Water-Resistant Option for Covered Porches */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Water-Resistant Option for Covered Porches</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your swing sits under a roof but still gets splashed or stays damp on humid mornings, you need something more than basic polyester. The Classic Accessories Montlake FadeSafe Water-Resistant Bench Seat Cushion uses a water-resistant fabric that sheds light rain and resists fading without jumping to Sunbrella pricing.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The FadeSafe material holds its color well through a full season in direct sun. The cushion comes in 44x18 and 48x18 inch sizes, covering most standard two and three-person swings. The fill stays firm enough that it doesn&apos;t pancake by midsummer.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Classic Accessories has been making outdoor furniture accessories long enough to get the basics right. This cushion pairs well with natural wood swings and comes in earth tones and neutrals that don&apos;t look like pool furniture.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/classic-accessories-montlake-fadesafe-water-resistant-bench-seat-cushion.jpg" alt="Classic Accessories Montlake FadeSafe Water-Resistant Bench Seat Cushion" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Classic Accessories Montlake FadeSafe Water-Resistant Bench Seat Cushion</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$52</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Water-resistant FadeSafe fabric with firm fill and a clean, neutral look that performs well on covered porches without the premium price tag.</p>
            <a
              href="https://www.amazon.com/s?k=Classic%20Accessories%20Montlake%20FadeSafe%20bench%20seat%20cushion%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Patterned Cushion for Front Porch Curb Appeal */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Patterned Cushion for Front Porch Curb Appeal</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Plain cushions work, but if your porch has a specific color scheme or you want the swing to serve as a visual anchor from the street, pattern matters. Pillow Perfect makes outdoor bench cushions in a wide range of prints, from botanical florals to clean geometrics, using fabrics rated for outdoor exposure.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Pillow Perfect Outdoor Forsyth Tufted Bench Cushion holds its pattern color better than most competitors in this price range. The tufted construction keeps it looking tidy after heavy use, and at 45 inches it fits most standard two-person swings without adjustment.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the pick for front porches where the swing is actually visible from the sidewalk. The patterns read well from a distance and the cushion has enough thickness to look substantial rather than deflated after a few weeks.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/pillow-perfect-outdoor-forsyth-tufted-bench-cushion-45-inch.jpg" alt="Pillow Perfect Outdoor Forsyth Tufted Bench Cushion 45-Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Pillow Perfect Outdoor Forsyth Tufted Bench Cushion 45-Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$48</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Bold outdoor-rated patterns with tufted construction and UV-resistant fabric that holds color through a full outdoor season.</p>
            <a
              href="https://www.amazon.com/s?k=Pillow%20Perfect%20outdoor%20Forsyth%20tufted%20bench%20cushion%2045%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Extra-Thick Cushion for Oversized Swings */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Extra-Thick Cushion for Oversized Swings</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Standard outdoor cushions run 3 to 3.5 inches thick, which is fine for short sessions but gets uncomfortable after an hour. If your swing is where you actually read, nap, or spend extended time outside, an extra inch of fill makes a real difference. Sunnydaze Decor makes a tufted outdoor bench cushion that runs 4.5 inches thick, noticeably more than most options at this price.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The fill uses high-density foam wrapped in fiberfill, which gives it a softer surface feel while keeping the shape over time. It comes in 48, 54, and 60-inch lengths, so you can finally match an oversized swing that standard cushions never quite fit. The fabric is weather-resistant and comes in a solid selection of stripes and solids.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the pick for a swing that sees daily use from late spring through early fall. The extra thickness is what you notice after 30 minutes in the sun with a book, when most cushions have already started to feel thin.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-4-5-inch-thick-tufted-outdoor-bench-cushion.jpg" alt="Sunnydaze Decor 4.5-Inch Thick Tufted Outdoor Bench Cushion" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor 4.5-Inch Thick Tufted Outdoor Bench Cushion</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$79</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">High-density foam with fiberfill wrap delivers 4.5 inches of thickness across 48, 54, and 60-inch sizes for swings that see real daily use.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20Decor%20thick%20tufted%20outdoor%20bench%20cushion%204.5%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Budget Pick That Still Holds Up */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Pick That Still Holds Up</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not every porch swing needs a premium cushion. If you&apos;re outfitting a swing at a rental property, replacing a cushion mid-season after it got ruined in a storm, or just not ready to spend over $60, the Bossima Outdoor High-Density Seat Cushion with Ties is an honest value pick. It runs under $40, uses a durable polyester fabric with a water-repellent coating, and comes with adjustable ties that work on most standard swing hardware.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The fill is 3 inches, which is on the thinner side but still comfortable for a couple of hours outside. The fabric comes in solid colors and basic patterns that look clean without looking cheap. It fits standard 45 to 48-inch seats.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The realistic expectation here is two to three seasons of regular use, maybe four if you bring it in during winter. For the price, that&apos;s a solid return, and replacing it when it eventually wears out doesn&apos;t sting.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bossima-outdoor-high-density-seat-cushion-with-ties.jpg" alt="Bossima Outdoor High-Density Seat Cushion with Ties" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bossima Outdoor High-Density Seat Cushion with Ties</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Water-repellent polyester with adjustable ties and dense foam fill at a price point that makes mid-season replacement a non-issue.</p>
            <a
              href="https://www.amazon.com/s?k=Bossima%20outdoor%20seat%20cushion%20with%20ties%20bench%20porch%20swing&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying Porch Swing Cushions</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure the seat, not the swing frame.</strong> The seat length of your swing is usually 4 to 6 inches shorter than the total frame width. Measure where you actually sit before ordering or you&apos;ll end up with a cushion that overhangs the armrests.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Sunbrella is worth it if you can&apos;t bring cushions in.</strong> If your swing is exposed to rain and you&apos;re not going to drag cushions inside regularly, the mildew resistance and colorfastness of Sunbrella fabric pays for itself within one full season.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Tie placement matters more than tie count.</strong> Look for ties positioned at the back corners and sides of the seat, not just at the front. Swing hardware is different from bench legs and most generic cushions don&apos;t account for that.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Thicker is not always better.</strong> A 4.5-inch cushion on a low-slung swing can put you in an awkward position. Check that your swing has clearance for a thick cushion before going over 4 inches.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Removable covers are essential if you have kids or pets.</strong> Spot cleaning outdoor fabric is a hassle. A zipper cover you can toss in the machine makes seasonal cleanup a ten-minute job instead of an afternoon project.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size cushion fits a standard porch swing?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most three-person porch swings have a seat length of 48 to 52 inches. Two-person swings typically run 42 to 48 inches. Measure the actual seat depth and length before ordering, since the frame size and seat size are not the same number.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can porch swing cushions stay outside in the rain?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Cushions with Sunbrella fabric or a strong water-repellent coating handle rain reasonably well, but prolonged sitting in water will shorten their life. Covered porches are generally fine. Fully exposed swings benefit from cushions you can pull inside quickly, or a nearby storage bench for overnight storage.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep porch swing cushions from sliding off?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Look for cushions with at least four ties, positioned at the back corners and front sides. You can also add a small square of rubber shelf liner under the cushion for extra grip. Cushions with only two front ties shift constantly with any movement.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a bench cushion and a porch swing cushion?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Functionally, many are interchangeable as long as the size fits. Swing-specific cushions typically include tie placement suited for swing hardware and sometimes come with a separate back cushion. Generic bench cushions are often cheaper but may shift around more on a swing.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-porch-swings-with-hanging-hardware" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Porch Swings With Hanging Hardware</p>
          </Link>
          <Link href="/blog/best-porch-rocking-chairs-any-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Porch Rocking Chairs Any Budget</p>
          </Link>
          <Link href="/blog/best-outdoor-benches-garden-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Benches Garden Patio</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
