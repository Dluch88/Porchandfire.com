import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Charcoal Grills Under $300 (2026) | Porch & Fire',
  description: 'Six charcoal grills under $300 that actually deliver, from the classic Weber kettle at $169 to a steel kamado and a full offset smoker.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-charcoal-grills-under-300.jpg"
          alt="Best Charcoal Grills Under $300 (2026)"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Grills &amp; Cooking
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Charcoal Grills Under $300 (2026)
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 1, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Charcoal grilling hits different. There&apos;s a reason pitmasters and weekend warriors both swear by it, and none of them needed to spend $600 to get there.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The grills in this roundup top out at $300. Some are closer to $80. All of them will cook a better burger than any gas grill twice the price, because charcoal does something gas simply can&apos;t: it gives food actual smoke flavor.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This list covers six grills that fit different budgets and cooking styles, from a compact 18-inch kettle perfect for a small balcony to a full offset smoker built for feeding a crowd.</p>


      {/* Product 1: Best Overall Kettle Grill: Weber Original Kettle Premium 22&quot; */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall Kettle Grill: Weber Original Kettle Premium 22&quot;</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you only buy one charcoal grill in your life, this is probably it. The Weber Original Kettle Premium has been around for decades, and it hasn&apos;t changed much because it doesn&apos;t need to. The 22-inch cooking grate gives you 363 square inches of space, enough to cook eight burgers or a whole spatchcocked chicken without crowding.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The One-Touch cleaning system is the real quality-of-life feature here. A set of three blades sweeps ash into a removable catcher, so you&apos;re not poking around with a stick after every cook. The hinged cooking grate also lets you add charcoal mid-cook without lifting your food off. On a 10x10 patio, this grill takes up minimal space and still handles everything from direct searing to two-zone indirect cooking for ribs.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/weber-original-kettle-premium-22-inch-charcoal-grill.jpg" alt="Weber Original Kettle Premium 22-Inch Charcoal Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Weber Original Kettle Premium 22-Inch Charcoal Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$169</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">15,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The gold standard kettle grill, with a hinged grate, One-Touch ash cleaning, and enough surface area for feeding six people comfortably.</p>
            <a
              href="https://www.amazon.com/s?k=Weber%20Original%20Kettle%20Premium%2022%20inch%20charcoal%20grill&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Kamado-Style Grill Under $300: Char-Griller AKORN 20&quot; */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Kamado-Style Grill Under $300: Char-Griller AKORN 20&quot;</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A real ceramic kamado like a Big Green Egg will run you $800 or more. The Char-Griller AKORN gets you 90% of that experience for a fraction of the price, using triple-wall insulated steel instead of ceramic. It holds temperature remarkably well, and once you dial in the vents, it&apos;ll sit at 225°F for hours without you touching it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The AKORN shines for low-and-slow cooks. Brisket, pork shoulder, whole chickens. The 314 square inches of cooking space is tight if you&apos;re feeding more than four people, but for a family cookout it&apos;s perfect. It also sears beautifully at high heat, so it&apos;s not just a smoker. Many people who own both a kettle and a kamado say the kamado wins for anything over 90 minutes of cook time.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/char-griller-akorn-20-inch-kamado-charcoal-grill.jpg" alt="Char-Griller AKORN 20-Inch Kamado Charcoal Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Char-Griller AKORN 20-Inch Kamado Charcoal Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$249</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A steel kamado that holds temperature like the expensive ceramic versions, great for long slow cooks and high-heat searing alike.</p>
            <a
              href="https://www.amazon.com/s?k=Char-Griller%20AKORN%2020%20inch%20kamado%20charcoal%20grill&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Offset Smoker Under $300: Oklahoma Joe&apos;s Highland */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Offset Smoker Under $300: Oklahoma Joe&apos;s Highland</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want to run a proper offset smoke, the Oklahoma Joe&apos;s Highland is the entry point that serious backyard cooks actually recommend. The firebox sits to the side of the main chamber, and you load it with wood chunks or charcoal to generate indirect heat and smoke that flows through to the food. It sounds complicated, but after two or three cooks you have a feel for it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Highland has 619 square inches of primary cooking space plus 281 square inches in the firebox chamber, so you can smoke a full rack of ribs or a pork butt alongside some sausage links. It&apos;s heavier than a kettle and takes up more room on your patio, but if you&apos;ve been wanting to make pulled pork that people talk about for weeks, this is where you start.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/oklahoma-joe-s-highland-offset-charcoal-smoker.jpg" alt="Oklahoma Joe&apos;s Highland Offset Charcoal Smoker" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Oklahoma Joe&apos;s Highland Offset Charcoal Smoker</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$279</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">12,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A full-size offset smoker with 619 square inches of cooking space, built for long slow cooks that produce genuine smoke-ring results.</p>
            <a
              href="https://www.amazon.com/s?k=Oklahoma%20Joe's%20Highland%20offset%20charcoal%20smoker&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Budget Barrel Grill: Royal Gourmet CC1830S */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Barrel Grill: Royal Gourmet CC1830S</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Royal Gourmet CC1830S punches above its weight for a grill that costs around $149. You get a 30-inch barrel grill with a small offset firebox attached, which means you can cook direct over the main chamber or use the firebox to run a long indirect smoke. It&apos;s a genuine two-in-one setup at a price that leaves money in your pocket for a chimney starter and a bag of lump charcoal.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The build quality won&apos;t blow you away, but it&apos;s solid enough for two or three seasons of regular use if you keep it covered. The 811 square inches of total cooking space is legitimately large, enough to cook a full meal for eight people at once. This grill is a favorite at tailgates and campsites, but it earns its place in a backyard setup too.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/royal-gourmet-cc1830s-30-inch-charcoal-grill-with-offset-smoker.jpg" alt="Royal Gourmet CC1830S 30-Inch Charcoal Grill with Offset Smoker" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Royal Gourmet CC1830S 30-Inch Charcoal Grill with Offset Smoker</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$149</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A full-size barrel grill with an attached offset firebox, delivering over 800 square inches of cooking space for under $150.</p>
            <a
              href="https://www.amazon.com/s?k=Royal%20Gourmet%20CC1830S%20charcoal%20grill%20offset%20smoker&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Vertical Charcoal Smoker: Dyna-Glo Signature Series */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Vertical Charcoal Smoker: Dyna-Glo Signature Series</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Vertical smokers work differently than offset or kettle setups. Heat and smoke rise from the firebox at the bottom through multiple cooking grates stacked above, letting you smoke a lot of food at once from a small footprint. The Dyna-Glo DGO1176BDC-D gives you six height-adjustable grates and 1,176 square inches of total cooking space, enough to hang a dozen sausage links, smoke two pork shoulders, and still have room for a batch of ribs.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the grill for someone who wants to smoke for a crowd without learning offset fire management. You load the charcoal drawer at the bottom, add your wood chunks, and let the tower do its thing. Temperature management is easier than an offset because the heat source is directly below the food. For a narrow side yard or a tight patio where a barrel grill won&apos;t fit, the vertical footprint is a real advantage.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/dyna-glo-dgo1176bdc-d-vertical-offset-charcoal-smoker.jpg" alt="Dyna-Glo DGO1176BDC-D Vertical Offset Charcoal Smoker" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Dyna-Glo DGO1176BDC-D Vertical Offset Charcoal Smoker</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$199</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A vertical charcoal smoker with six cooking grates and over 1,100 square inches of capacity, ideal for smoking large quantities from a compact footprint.</p>
            <a
              href="https://www.amazon.com/s?k=Dyna-Glo%20DGO1176BDC-D%20vertical%20offset%20charcoal%20smoker&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Compact Charcoal Grill: Cuisinart 18-Inch Kettle */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Compact Charcoal Grill: Cuisinart 18-Inch Kettle</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not everyone needs to cook for a crowd. If you&apos;re grilling for two or three people on a balcony or a small deck, the Cuisinart 18-inch Kettle gives you a proper charcoal cooking experience in a package that fits almost anywhere. The 18-inch grate handles four burgers or two chicken breasts with room to spare, and the whole thing weighs about 14 pounds.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The lid vent and bowl vent work together to give you real temperature control, which is more than you can say for most grills in this price range. It&apos;s a legitimate grill, not a camping toy. If your outdoor space is 6x8 feet or smaller, this is the charcoal grill that makes sense without sacrificing the smoke and char flavor you&apos;re after.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cuisinart-18-inch-kettle-charcoal-grill.jpg" alt="Cuisinart 18-Inch Kettle Charcoal Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Cuisinart 18-Inch Kettle Charcoal Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$79</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact 18-inch kettle that delivers real charcoal flavor on a small balcony or tight deck without taking up the space of a full-size grill.</p>
            <a
              href="https://www.amazon.com/s?k=Cuisinart%2018%20inch%20kettle%20charcoal%20grill&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Getting the Most from a Charcoal Grill</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a chimney starter every time.</strong> Lighter fluid changes the flavor of your food. A chimney starter gets your coals ready in 15 minutes with just a piece of newspaper and no chemical taste.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Let the grill preheat for 10 minutes after the coals are ready.</strong> A hot grate sears meat instead of steaming it. This single step is responsible for more good crust than any seasoning or marinade.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set up a two-zone fire.</strong> Pile coals on one side and leave the other side empty. Direct heat for searing, indirect heat for finishing thicker cuts without burning the outside.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Invest in a good instant-read thermometer.</strong> Charcoal grills run hotter and less consistently than gas. A thermometer tells you when food is actually done, not just when it looks done.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep the lid closed while cooking.</strong> Closing the lid turns your grill into an oven, trapping smoke and heat around the food. Most people who grill with the lid open are missing half the flavor.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Clean the grates while the grill is still warm.</strong> A wire brush on a hot grate takes five seconds. Waiting until the next day means scrubbing hardened carbon.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size charcoal grill do I need for a family of four?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 22-inch kettle grill is the standard answer, and it&apos;s right. You get enough space to cook a full meal without the grill taking over your patio. If you plan to smoke larger cuts, step up to a barrel or kamado style.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is charcoal grilling better than gas?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For flavor, yes. Charcoal produces more complex smoke and allows for higher searing temperatures than most backyard gas grills. Gas wins on convenience and quick startups. Most serious backyard cooks end up with both.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does charcoal last in a grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A standard chimney of briquettes gives you about 45 to 60 minutes of good cooking heat. Lump charcoal burns hotter and faster, usually 30 to 45 minutes. For long smokes, you&apos;ll add fresh coals every hour or use a slow-burning setup like the minion method.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use wood chunks in a charcoal grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, and you should. Adding one or two fist-sized wood chunks to your charcoal adds real smoke flavor without overwhelming the food. Hickory and apple wood are the most forgiving starting points.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between an offset smoker and a kamado grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">An offset smoker uses a separate firebox to generate indirect heat and smoke that flows through a large main chamber. A kamado uses a single insulated chamber with tight-fitting vents for precise temperature control. Offsets are better for smoking large quantities. Kamados are more versatile and fuel-efficient.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-gas-grills-under-400" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Gas Grills Under 400</p>
          </Link>
          <Link href="/blog/best-fire-pit-cooking-accessories" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Cooking Accessories</p>
          </Link>
          <Link href="/blog/best-portable-grills-small-spaces" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Portable Grills Small Spaces</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
