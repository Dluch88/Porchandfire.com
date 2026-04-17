import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Backyard Tropical Oasis on a Budget | Porch & Fire",
  description: "Transform your backyard into a lush tropical retreat for under $500. Real product picks, planting tips, and layout ideas that actually work.",
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
            Backyard Tropical Oasis on a Budget
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 14, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You do not need a contractor or a landscaping budget to make your backyard feel like a place you actually want to spend time in. A bamboo screen here, a string of warm globe lights there, and a few large-leafed plants in good pots can shift the whole mood of an outdoor space.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The goal with a tropical oasis is not perfection. It is layering. You want shade overhead, green around the edges, water somewhere in earshot, and light that flatters after 6pm. This guide focuses on six specific products that do the heavy lifting without a heavy price tag.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Most of these pieces cost under $75 individually. Bought together, they can turn a flat rectangle of grass or concrete into something your neighbors will ask about.</p>


      {/* Product 1: Best Bamboo Privacy Screen for a Tropical Backdrop */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Bamboo Privacy Screen for a Tropical Backdrop</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The single fastest way to make a backyard feel like a different world is to block out the fence line you share with your neighbors. A roll of natural bamboo fencing along one or two sides of your yard immediately reads as tropical, even before you plant anything.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The GOJOOASIS Bamboo Fence Roll comes in a 4-foot by 16-foot section that covers a full fence panel or frames a corner patio area. It attaches with zip ties or wire to any existing fence or post, and the natural tan color weathers beautifully. Two rolls can border a 12x16 patio on two sides for around $75 total.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It also doubles as a windbreak for candles and lanterns, which is genuinely useful on breezy evenings. The bamboo is not structural, but it does not need to be. It is doing visual work, and it does it well.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gojooasis-bamboo-fence-roll-4ft-x-16ft.jpg" alt="GOJOOASIS Bamboo Fence Roll 4ft x 16ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">GOJOOASIS Bamboo Fence Roll 4ft x 16ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Natural bamboo rolls that transform a standard fence line into a tropical backdrop in under an hour.</p>
            <a
              href="https://www.amazon.com/s?k=GOJOOASIS%20bamboo%20fence%20roll%204ft%2016ft%20natural&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Large Planter for Tropical Statement Plants */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Large Planter for Tropical Statement Plants</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A tropical oasis lives and dies by its plants. Bird of paradise, elephant ear, dwarf banana, and canna lily all need a large container if you&apos;re growing them on a patio or deck. The planter is not a detail. It is part of the design.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Bloem Ariana Self-Watering Planter in the 20-inch size is one of the best deals in this category. The built-in water reservoir means tropical plants that drink heavily, like elephant ear, stay happy between waterings. It holds a significant root ball and comes in several neutral tones that read well against bamboo and greenery.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 10x12 patio, two of these anchoring the corners with large-leafed tropicals create an immediate sense of enclosure and lushness. The pots weigh almost nothing empty, so you can rearrange as the season changes.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bloem-ariana-self-watering-planter-20-inch.jpg" alt="Bloem Ariana Self-Watering Planter 20-Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bloem Ariana Self-Watering Planter 20-Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$26</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A large, lightweight self-watering planter that keeps thirsty tropical plants hydrated between waterings.</p>
            <a
              href="https://www.amazon.com/s?k=Bloem%20Ariana%20self-watering%20planter%2020%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best String Lights for Tropical Ambiance After Dark */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best String Lights for Tropical Ambiance After Dark</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Tropical spaces feel completely different at night, and the right string lights are what make that happen. You want warm white bulbs, not cool white. Cool white reads as a parking lot. Warm white reads as a resort.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The DEWENWILS 48-foot outdoor string lights use G40 globe bulbs spaced every 18 inches, which gives you good coverage across a 12x20 patio when you run two strands in a loose grid. They are heavy-gauge enough to hang without sagging, and the cord is black, which disappears against dark fence or bamboo backing.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The sweet spot for a tropical oasis is to run these just above head height, roughly 7 to 8 feet up, so the light falls down rather than blinding anyone seated. If you have a pergola, drape them loosely overhead. If you are working with fence posts, simple screw-in cup hooks are all you need.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/dewenwils-48ft-outdoor-string-lights-g40-globe-bulbs.jpg" alt="DEWENWILS 48ft Outdoor String Lights G40 Globe Bulbs" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">DEWENWILS 48ft Outdoor String Lights G40 Globe Bulbs</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$44</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Warm globe string lights with heavy-gauge cord that hangs without sagging across a full patio span.</p>
            <a
              href="https://www.amazon.com/s?k=DEWENWILS%2048ft%20outdoor%20string%20lights%20G40%20globe%20bulbs&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Outdoor Rug to Ground the Whole Space */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Rug to Ground the Whole Space</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A rug defines a room, and outside is no different. On a patio or deck, a large outdoor rug pulls the furniture grouping together and signals to your eye that this is a destination, not just an empty concrete pad.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Gertmenian Coastal Outdoor Patio Rug in an 8x10 works well for tropical themes because the patterns complement greenery without fighting it. The flat-weave construction is easy to hose off after a rain, and it handles heavy foot traffic without fraying. It lays flat quickly and does not curl at the corners.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Size matters more than people expect. A rug that is too small looks like a doormat dropped in the middle of a patio. If you are furnishing a seating group of four to six chairs around a coffee table, the 8x10 is the minimum. The rug should extend at least 18 inches past the edge of your furniture on all sides.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gertmenian-coastal-outdoor-patio-rug-8x10.jpg" alt="Gertmenian Coastal Outdoor Patio Rug 8x10" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Gertmenian Coastal Outdoor Patio Rug 8x10</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$68</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A flat-weave outdoor rug in coastal-friendly patterns that grounds a patio seating group without fading in sun or rain.</p>
            <a
              href="https://www.amazon.com/s?k=Gertmenian%20coastal%20outdoor%20patio%20rug%208x10&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Hanging Chair for a True Resort Feeling */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Hanging Chair for a True Resort Feeling</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Nothing says tropical retreat quite like a hanging chair. It is not just a look. Sitting suspended slightly off the ground, surrounded by large-leafed plants and warm string lights, genuinely changes how you feel about spending time outside.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Christopher Knight Home Kahlo Outdoor Wicker Hanging Chair has the right combination of style and airflow for this application. The open-weave construction keeps air circulating in summer heat, and it holds up to 265 pounds. You can hang it from a ceiling beam on a covered porch, a pergola cross-member, or a freestanding stand sold separately.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Pair it with a small side table and a weather-resistant cushion and you have a reading spot, a cocktail perch, or just a place to sit and do nothing in the best possible way. This is the piece that guests will immediately walk toward when they step outside.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/christopher-knight-home-kahlo-outdoor-wicker-hanging-chair.jpg" alt="Christopher Knight Home Kahlo Outdoor Wicker Hanging Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Christopher Knight Home Kahlo Outdoor Wicker Hanging Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$189</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An open-weave wicker hanging chair that delivers genuine resort comfort on any covered porch or pergola.</p>
            <a
              href="https://www.amazon.com/s?k=Christopher%20Knight%20Home%20Kahlo%20outdoor%20wicker%20hanging%20chair&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Solar Fountain to Add the Sound of Water */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar Fountain to Add the Sound of Water</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Running water in a backyard does something to your nervous system. The sound covers street noise, masks neighbors, and creates a sense of calm that no amount of furniture or plants can fully replicate on its own.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sunnydaze Decor 3-Tier Solar-on-Demand Garden Fountain handles this without any wiring or an outlet. The battery stores charge during the day so the fountain continues running even after the sun passes behind a cloud or goes down for the evening. At 30 inches tall, it is substantial enough to anchor a corner of the yard without looking like a miniature toy.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Place it near your hanging chair or at the entrance to your tropical patio where the sound carries into the seating zone. The tiered stone-look design fits naturally with tropical and garden themes, and the whole thing assembles in under 20 minutes.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-3-tier-solar-on-demand-garden-fountain.jpg" alt="Sunnydaze Decor 3-Tier Solar-on-Demand Garden Fountain" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor 3-Tier Solar-on-Demand Garden Fountain</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$68</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A battery-backed solar fountain that runs at night and in shade, bringing the sound of moving water without any wiring.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20Decor%203%20tier%20solar%20on%20demand%20garden%20fountain&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Building a Tropical Oasis</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Layer your heights.</strong> Tall bamboo screening at the fence line, medium-height plants in large pots, low ground cover in smaller containers closer to the ground. That depth is what makes a space feel lush rather than flat.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Stick to three colors.</strong> Green, warm white light, and one accent color like terracotta or deep blue. More than that starts looking chaotic. Tropical spaces feel calm despite the density.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Buy plants smaller, plan for full size.</strong> Elephant ear, canna lily, and dwarf banana can triple in size in a single season in the right conditions. Buy at a smaller size to save money, but space your containers as if the plants are already fully grown.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use the inside of your fence for vertical green.</strong> Hang small wall-mount planters along the fence line at varying heights. This adds vertical green without taking up floor space, which matters a lot on smaller patios.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Light the plants, not just the space.</strong> Aim a small solar spotlight up into a large-leafed plant after dark to create a dramatic shadow effect on the bamboo behind it. This is a free upgrade if you already have solar garden stakes.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Water plants before a party, not after.</strong> Freshly watered tropical plants look visibly more lush. The leaves perk up and the color deepens noticeably. Give everything a good drink about an hour before guests arrive.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What tropical plants grow well in containers on a patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Elephant ear, bird of paradise, canna lily, and dwarf banana all thrive in large containers. Give them full to partial sun and water heavily. Most go dormant in winter but come back strong the following year if you bring the containers inside before a hard freeze.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I make a small backyard feel tropical without spending a lot?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Focus on two things first: tall bamboo screening and large-leafed plants in oversized pots. These two elements do more visual work than any furniture or decor you can add. String lights finish the effect after dark without adding any bulk to the space.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can bamboo fence rolls survive harsh winters?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Natural bamboo fencing holds up through light winters but can become brittle after repeated freeze-thaw cycles. Roll it up and store it in a garage or shed from November through March if you get hard freezes. Most rolls last three to five years with that care.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need a permit to install bamboo fencing in my backyard?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Generally no, since bamboo rolls attach to an existing fence rather than serving as a structural fence themselves. That said, HOA rules vary. Check your community guidelines before installing anything along a shared property line.</p>
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
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          <Link href="/blog/best-backyard-fountains-water-features" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Backyard Fountains Water Features</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
