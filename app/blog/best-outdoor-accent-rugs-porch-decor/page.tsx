import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Accent Rugs for Porch Decor | Porch & Fire",
  description: "The best outdoor accent rugs for porches and entryways, all under 4x6 ft. Fade-resistant, easy-clean picks starting around $26.",
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
            Outdoor Decor
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Accent Rugs for Porch Decor
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
          <span>9 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A small rug does more work than you&apos;d expect. On a front porch, it sets the tone before anyone knocks. On a covered patio, it anchors a seating area and makes the whole space feel intentional instead of empty.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The problem with most outdoor rugs is that they look great in the photo and then fade to a dull ghost of themselves after one summer. The picks below are specifically chosen for UV resistance, their ability to handle rain and foot traffic, and their texture underfoot.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">All of these are under 4x6 ft, which is the sweet spot for a front stoop, a small porch landing, or a corner accent near a chair. They&apos;re also priced to make sense on a porch, not a living room floor.</p>


      {/* Product 1: Best Classic Woven Look for a Front Porch */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Classic Woven Look for a Front Porch</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Couristan Recife Savannah is the outdoor rug that actually looks like it belongs indoors, which is exactly what you want at the front of a house. The flat-woven polypropylene gives it a jute-like texture without absorbing moisture, and the neutral colorways hold up through full seasons without going chalky.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At 3&apos;11&quot; x 5&apos;3&quot;, it fits well on a standard 6-foot wide front porch without crowding the door. The border detail is subtle enough that it works with a lot of different door colors and trim. If you live somewhere with hot afternoon sun hitting the porch directly, this is one of the few rugs where the color still looks intentional after a year.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/couristan-recife-savannah-indoor-outdoor-rug-3-11-x5-3.jpg" alt="Couristan Recife Savannah Indoor/Outdoor Rug 3&apos;11&quot;x5&apos;3&quot;" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Couristan Recife Savannah Indoor/Outdoor Rug 3&apos;11&quot;x5&apos;3&quot;</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Flat-woven polypropylene with a natural texture that reads as elevated, not plastic.</p>
            <a
              href="https://www.amazon.com/s?k=Couristan%20Recife%20Savannah%20indoor%20outdoor%20rug%204x6&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Budget Pick for a Side Door or Back Entry */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Pick for a Side Door or Back Entry</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Maples Rugs Reggie Vintage Accent Rug comes in at under $30 and punches well above that price point. It&apos;s a classic distressed pattern that works with brick, concrete, or painted wood decks, and the 2&apos;6&quot; x 3&apos;10&quot; size is ideal for a side door landing where you don&apos;t want a full rug getting in the way of foot traffic.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It&apos;s machine-made polypropylene, so it&apos;s not going to win any awards for material quality. But it rinses off easily, dries fast, and the vintage pattern hides dirt between cleanings better than a solid color would. For a back door or a spot that sees heavy daily use, it&apos;s the practical call.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/maples-rugs-reggie-vintage-accent-rug-2-6-x3-10.jpg" alt="Maples Rugs Reggie Vintage Accent Rug 2&apos;6&quot;x3&apos;10&quot;" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Maples Rugs Reggie Vintage Accent Rug 2&apos;6&quot;x3&apos;10&quot;</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A distressed vintage pattern that hides tracked-in dirt while looking pulled-together for under $30.</p>
            <a
              href="https://www.amazon.com/s?k=Maples%20Rugs%20Reggie%20Vintage%20accent%20rug%202x4%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Easy-Clean Rug for a Covered Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Easy-Clean Rug for a Covered Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">HEBE makes a reversible outdoor rug woven from flat plastic straw that sounds purely utilitarian but actually looks decent in person. The weave is tighter than most rugs in this category, and the reversible design means when one side gets scuffed or stained you flip it and buy yourself another full season. The 3x5 size works well under two camp chairs or in front of a small loveseat on a covered porch.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The real advantage here is cleanup. Hose it off, let it dry in twenty minutes, done. It doesn&apos;t trap moisture in the weave the way fabric rugs do, so you won&apos;t get the mildew smell that plagues covered patio rugs in humid climates. Worth a serious look if you live somewhere coastal or anywhere that gets heavy summer humidity.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hebe-outdoor-rug-reversible-woven-plastic-rug-3x5.jpg" alt="HEBE Outdoor Rug Reversible Woven Plastic Rug 3x5" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">HEBE Outdoor Rug Reversible Woven Plastic Rug 3x5</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Reversible plastic straw weave that hoses clean in seconds and never holds moisture.</p>
            <a
              href="https://www.amazon.com/s?k=HEBE%20outdoor%20rug%20reversible%20woven%20plastic%20straw%203x5&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Geometric Pattern for a Modern Porch */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Geometric Pattern for a Modern Porch</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Mohawk Home makes a line of outdoor rugs with bold geometric patterns that hold their color better than most. The Wheel and Dot pattern, available in a 2&apos;6&quot; x 3&apos;10&quot; size, has a graphic quality that suits a contemporary house or a freshly painted porch without veering into beach house territory. It reads clean and intentional at a front door.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The print quality is noticeably sharper than cheaper alternatives, and the rug lays flat quickly after unrolling, which matters more than you&apos;d think when it&apos;s in front of a door opened twenty times a day. Low pile makes it easy to vacuum or shake out, and it handles the edge wear that comes from constant foot traffic without fraying.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mohawk-home-wheel-dot-outdoor-accent-rug-2-6-x3-10.jpg" alt="Mohawk Home Wheel &amp; Dot Outdoor Accent Rug 2&apos;6&quot;x3&apos;10&quot;" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Mohawk Home Wheel &amp; Dot Outdoor Accent Rug 2&apos;6&quot;x3&apos;10&quot;</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$42</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Bold geometric print with sharp color definition that holds up in direct sun exposure.</p>
            <a
              href="https://www.amazon.com/s?k=Mohawk%20Home%20Wheel%20Dot%20outdoor%20accent%20rug%202x4&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Solid Color Rug for a Small Balcony */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solid Color Rug for a Small Balcony</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Sometimes you just need a clean solid color that ties a space together without competing with your furniture or planters. Rug Branch makes a straightforward indoor/outdoor polypropylene rug in a range of solid colors, and the 2x3 size is specifically useful for apartment balconies or a narrow front stoop where a larger rug would feel like it&apos;s fighting the space.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The texture is low pile with a slight ribbed weave, so it doesn&apos;t look flat or cheap underfoot. It drains well, which matters on an open balcony where rain hits directly. Color options include deep navy, terracotta, and sage green, all of which look decent after a year of outdoor use without going pale or blotchy.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/rug-branch-classic-solid-color-indoor-outdoor-area-rug-2x3.jpg" alt="Rug Branch Classic Solid Color Indoor/Outdoor Area Rug 2x3" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Rug Branch Classic Solid Color Indoor/Outdoor Area Rug 2x3</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$26</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Clean solid-color rug in useful small sizes that drains fast and doesn&apos;t look cheap.</p>
            <a
              href="https://www.amazon.com/s?k=Rug%20Branch%20Classic%20solid%20color%20indoor%20outdoor%20area%20rug%202x3&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best for a Screened Porch or Tropical Theme */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for a Screened Porch or Tropical Theme</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Gertmenian makes a line of outdoor rugs with botanical leaf motifs that work well on screened porches, Florida rooms, or any porch where you&apos;re leaning into a garden aesthetic. The tropical leaf patterns are printed on a polypropylene pile built to resist fading for multiple seasons, and the 3x5 size is large enough to anchor a pair of rocking chairs without overwhelming a smaller 8x10 porch.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The pile is slightly thicker than a flat-weave option, which makes it more comfortable if you&apos;re spending time barefoot on the porch. The pattern is complex enough that light dust and casual tracking don&apos;t show up between cleanings. A good choice if your porch sees a lot of sit-down time, not just foot traffic past the door.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gertmenian-outdoor-tropical-leaf-patio-rug-3x5.jpg" alt="Gertmenian Outdoor Tropical Leaf Patio Rug 3x5" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Gertmenian Outdoor Tropical Leaf Patio Rug 3x5</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$40</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Botanical leaf print on fade-resistant polypropylene pile, comfortable enough for barefoot outdoor lounging.</p>
            <a
              href="https://www.amazon.com/s?k=Gertmenian%20outdoor%20tropical%20leaf%20patio%20rug%203x5&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Outdoor Accent Rugs</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Size it to the door swing.</strong> If your rug sits in front of a door, make sure the door opens fully without catching the edge. Measure the door swing radius before you order.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a rug pad even outside.</strong> A thin non-slip pad keeps an outdoor rug from creeping on smooth composite decking or painted concrete. Look for one specifically rated for outdoor or wet use.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Rinse before storing for winter.</strong> Before you roll it up for the season, hose it down and let it dry completely in the sun. Storing a damp rug is how you end up with mildew in spring.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Darker backgrounds hide dirt longer.</strong> If your porch gets heavy foot traffic or pets, a dark navy or charcoal rug will look presentable longer between cleanings than a light tan or ivory one.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Look for solution-dyed polypropylene.</strong> This means the color runs all the way through the fiber rather than sitting on the surface. It fades more slowly than surface-printed rugs, especially in direct afternoon sun.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size outdoor rug works best for a front porch?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For most front porches, a 2&apos;6&quot;x4&apos; or 3&apos;x5&apos; rug is the right call. It should be wide enough that both feet land on it when someone stops at the door, but small enough that the door clears it on the swing. Measure the door swing before ordering.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can outdoor rugs stay out in the rain?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most polypropylene outdoor rugs handle rain fine. The key is airflow underneath so they dry quickly. Put them on a surface with drainage rather than flat against a solid deck where water pools under the rug and doesn&apos;t escape.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do you clean an outdoor accent rug?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most outdoor rugs can be hosed off, scrubbed with a brush and mild dish soap if needed, and left to air dry. Avoid leaving them soaking wet against a wood deck for extended periods, as the dye can transfer and moisture can damage the boards.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do outdoor rugs fade in the sun?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">They all fade eventually. Solution-dyed polypropylene holds color the longest. Rugs with lighter backgrounds and pastel tones tend to show fading faster than ones with darker or more saturated colors.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-hanging-planters-porches-pergolas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Hanging Planters Porches Pergolas</p>
          </Link>
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          <Link href="/blog/best-hanging-egg-chairs-porches-patios" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Hanging Egg Chairs Porches Patios</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
