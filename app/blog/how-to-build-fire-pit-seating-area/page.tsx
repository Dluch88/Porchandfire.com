import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Build a Backyard Fire Pit Seating Area | Porch & Fire',
  description: 'Build a fire pit seating area right: gravel pad, Solo Stove Yukon 2.0, and seating for 6. Complete guide from edging to lighting.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-how-to-build-fire-pit-seating-area.jpg"
          alt="How to Build a Backyard Fire Pit Seating Area"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Build a Backyard Fire Pit Seating Area
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 25, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A proper fire pit seating area starts with one decision: are you going to do this right, or just drop a pit in the grass and hope for the best? This guide is for people who want to do it right.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You do not need a contractor or a big budget. A 12x12-foot gravel pad, a solid fire pit, four chairs, and some accent lights will get you a setup you will actually use every weekend from April through November.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This is the order things happen: define your space, prep the ground, set the pit, add seating, then light it up. Each step has one product that does the job better than the cheap alternatives.</p>


      {/* Product 1: Define Your Space with Landscape Edging */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Define Your Space with Landscape Edging</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Before you order a single piece of furniture, mark out your circle. A 12-foot diameter gives you comfortable spacing for four chairs around a medium fire pit with room to pull back without feeling crowded. Go 14 feet if you are regularly hosting six people.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Landscape edging creates the boundary between your gravel pad and the lawn. Without it, gravel migrates into the grass within one season and the whole thing looks ragged. Flexible no-dig plastic edging is the right call here because it curves easily into a circle and you can install it in an afternoon with a rubber mallet.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Dimex EasyFlex kit comes in 50 feet, which is exactly right for a 12-foot circle with material left over to adjust. It has stakes every few inches so it does not shift, and the profile is low enough that you will not trip over it in the dark near the fire.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/dimex-easyflex-no-dig-plastic-landscape-edging-kit-50-foot.jpg" alt="Dimex EasyFlex No-Dig Plastic Landscape Edging Kit, 50-Foot" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Dimex EasyFlex No-Dig Plastic Landscape Edging Kit, 50-Foot</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Flexible enough to curve into a clean circle, with stakes that hold through winter frost heave without popping loose.</p>
            <a
              href="https://www.amazon.com/s?k=Dimex%20EasyFlex%20No-Dig%20Plastic%20Landscape%20Edging%20Kit%2050%20foot&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: The Fire Pit: Go Bigger Than You Think */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">The Fire Pit: Go Bigger Than You Think</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most people buy a fire pit that is too small and then wonder why the experience feels underwhelming. For a seating area built for four or more people, you want at least a 27-inch burn diameter. A 30-inch pit puts out enough heat to keep everyone warm on a 50-degree night without people leaning in uncomfortably close.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Solo Stove Yukon 2.0 is the step-up that most people overlook when they are comparing fire pits. It handles full-length logs, and the secondary burn system cuts smoke down to almost nothing. Sitting six feet away from it on a calm evening, you barely smell like smoke when you go inside.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It is a real investment at around $500, but the 304 stainless steel construction outlasts every powder-coated pit in its price range by years. Set it on the gravel at the center of your circle, level it, and you are done with installation.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/solo-stove-yukon-2-0-smokeless-fire-pit.jpg" alt="Solo Stove Yukon 2.0 Smokeless Fire Pit" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Solo Stove Yukon 2.0 Smokeless Fire Pit</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$499</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Large enough for full-size logs, low-smoke design that keeps the whole seating circle comfortable, and built for a decade of use.</p>
            <a
              href="https://www.amazon.com/s?k=Solo%20Stove%20Yukon%202.0%20smokeless%20fire%20pit&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Seating That Handles Real Weather */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Seating That Handles Real Weather</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Around a fire pit, Adirondack chairs are the classic choice for a reason. The reclined angle, wide armrests for drinks, and low profile keep you out of the smoke line. The problem is most wooden Adirondacks require yearly sanding and staining, and a lot of people stop doing that after year two.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Highwood USA makes Adirondack chairs in their proprietary synthetic lumber, which has the look and weight of painted wood without any of the maintenance. No splintering, no warping, no repainting. Leave them out through winter in Minnesota or coastal Maine and they will look the same in spring.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a fire pit circle, four chairs spaced evenly is the standard arrangement. The Lehigh model has a slightly taller back than most Adirondacks, which feels better during longer sessions. It costs more than a basic resin chair, but you will not replace it in three years.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/highwood-usa-lehigh-adirondack-chair.jpg" alt="Highwood USA Lehigh Adirondack Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Highwood USA Lehigh Adirondack Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$229</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">All-weather synthetic lumber that looks like painted wood, holds up in any climate, and requires zero seasonal maintenance.</p>
            <a
              href="https://www.amazon.com/s?k=Highwood%20USA%20Lehigh%20Adirondack%20Chair&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Accent Lighting That Earns Its Place */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Accent Lighting That Earns Its Place</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A fire provides ambient light, but it is directional and inconsistent. Good accent lighting around the perimeter fills in the shadows and makes the space usable after the fire dies down. The wrong choice is cheap solar stake lights that look like a parking lot border.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Solar torch lights on tall stakes hit a different note. They throw a warm flickering glow that complements the fire without competing with it. The Sunnydaze Solar LED Outdoor Torch set comes two per pack and each stake is around 60 inches tall, putting the light right at chair-height level.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Place one on each side of the entry point into your gravel circle and two more spaced around the perimeter. That is two packs for four torches total, the whole setup runs on solar with zero wiring, and the flickering LED mode is genuinely convincing at dusk.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-solar-led-outdoor-torch-lights-set-of-2.jpg" alt="Sunnydaze Decor Solar LED Outdoor Torch Lights, Set of 2" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor Solar LED Outdoor Torch Lights, Set of 2</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$52</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Tall solar torches with a flickering LED flame that complements a real fire without looking like safety cones in the yard.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20Decor%20Solar%20LED%20Outdoor%20Torch%20Lights%20set%20of%202&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Firewood Storage Within Arm&apos;s Reach */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Firewood Storage Within Arm&apos;s Reach</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Nothing kills the vibe of a fire pit night faster than running back to the garage for wood. A dedicated firewood rack within reach of the seating circle keeps the evening moving. The rule is to keep it close enough to grab logs without getting up, but far enough from the fire that sparks are not landing on the pile.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Eight feet from the edge of the pit is the sweet spot. The Sunnydaze 8-Foot Heavy Duty Firewood Log Rack has a lower shelf for kindling and smaller splits, plus a cover that keeps the top layer dry without trapping moisture underneath. It holds enough wood for three or four full evenings before you need to restock.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The steel construction handles outdoor exposure without rusting through in two seasons, which is more than you can say for a lot of racks in this price range. If you have a smaller space, the same brand makes a 4-foot version that tucks into a corner without issue.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-8-foot-heavy-duty-firewood-log-rack-with-kindling-holder.jpg" alt="Sunnydaze 8-Foot Heavy Duty Firewood Log Rack with Kindling Holder" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze 8-Foot Heavy Duty Firewood Log Rack with Kindling Holder</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$84</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Holds enough wood for multiple nights out, includes a kindling shelf and weather cover, and the steel frame stays solid when full.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%208%20foot%20heavy%20duty%20firewood%20log%20rack%20with%20kindling%20holder&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Fire Pit Seating Areas</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use 3 to 4 inches of pea gravel.</strong> Anything less and you get muddy spots after rain. Anything more and chairs rock and people trip. Three to four inches is the number.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Lay landscape fabric before the gravel goes in.</strong> Skip this step and you will be pulling weeds through the rocks two summers from now. Use heavy-duty woven fabric, not the thin paper kind.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Space chairs 5 to 6 feet from the fire pit edge.</strong> Closer than that and the heat is intense on a warm night. Further and you lose warmth on cool evenings. Five feet works for most setups.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Leave one gap in the circle.</strong> Do not close the seating into a complete ring. A 3 to 4 foot opening at the entry point makes the space feel natural and easier to move in and out of.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Store a small fire extinguisher nearby.</strong> A 2.5-lb ABC extinguisher in a weatherproof box at the edge of the seating area takes up almost no space. Most people never need it, but you want it before you do.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check local setback rules before you build.</strong> Most municipalities require fire pits to be at least 10 to 15 feet from structures. A five-minute call to your local fire department saves a lot of hassle later.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How big should a fire pit seating area be?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For four chairs, a 12-foot diameter circle works well. If you regularly host six or more people, go 14 to 16 feet. The key is keeping chairs at least 5 feet from the edge of the fire pit.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How deep should the gravel be for a fire pit area?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Three to four inches is the standard. You want enough depth to stay stable and drain well, but not so deep that chairs wobble or sink. Always put landscape fabric underneath before adding gravel.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What kind of chairs work best around a fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Low-profile chairs like Adirondacks keep you below the smoke line and feel natural around a fire. Avoid chairs with thick fabric cushions right in the fire zone since floating embers can cause damage over time.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How far should a fire pit be from the house?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most fire safety guidelines and local codes call for at least 10 to 15 feet from any structure, including fences and outbuildings. Check your local ordinances since some areas have stricter rules.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I build a fire pit seating area on a slope?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, but you need to grade the area first. Even a slight slope causes gravel to migrate and makes chair placement uneven. Get the surface within about 2 inches of level before any gravel goes down.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
          </Link>
          <Link href="/blog/best-firewood-racks-backyard-fire-pits" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Firewood Racks Backyard Fire Pits</p>
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
