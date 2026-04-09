import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Create an Overhead String Light Canopy | Porch & Fire',
  description: 'Step-by-step guide to building a backyard string light canopy using poles, guide wire, and the right hooks. Includes picks starting at $16.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="How to Create an Overhead String Light Canopy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Lighting
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Create an Overhead String Light Canopy
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 28, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A string light canopy is the single fastest upgrade you can make to a backyard. The right setup transforms a plain concrete patio into something that feels like a restaurant courtyard, and you can pull it off in an afternoon.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The key is getting the structure right before you buy a single bulb. Lights that sag in the middle or pull loose after one rainstorm are the result of skipping the planning step, not spending too little on the lights themselves.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks you through the whole process, from choosing your anchor points to picking the right bulb shape for the look you want. The five products below cover every part of the build.</p>


      {/* Product 1: Best Poles for Open Patios Without Existing Structures */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Poles for Open Patios Without Existing Structures</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you do not have a pergola, fence, or structure to attach lights to, you need poles. The challenge is finding poles that stay put in wind without requiring you to dig post holes or rent equipment. Fillable base poles are the answer, and the FLSNT 10ft poles are the ones most people end up buying after trying cheaper versions first.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Each pole comes with a weighted base you fill with sand or water, which gives you enough stability for a 20x20 foot grid without anchoring into the ground. The poles stand 10 feet tall, which puts your lights at a height that clears most patio furniture and creates that soft overhead glow instead of lights strung too low and right in your eyeline.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a standard 12x16 patio, four poles cover all four corners and give you a clean rectangular canopy. You can also stagger them diagonally for a zigzag pattern if you want something less rigid and more layered.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flsnt-10ft-heavy-duty-string-light-poles-with-fillable-base-4-pack.jpg" alt="FLSNT 10ft Heavy Duty String Light Poles with Fillable Base (4-Pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">FLSNT 10ft Heavy Duty String Light Poles with Fillable Base (4-Pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$65</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Steel poles with fillable weighted bases that handle wind without ground anchoring, ideal for patios where digging is not an option.</p>
            <a
              href="https://www.amazon.com/s?k=FLSNT%2010ft%20heavy%20duty%20string%20light%20poles%20fillable%20base%204%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Guide Wire for Spanning Long Distances */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Guide Wire for Spanning Long Distances</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">String lights are not designed to support their own weight across a 20-foot span. Without a guide wire underneath, you will end up with a dramatic sag in the middle that looks unintentional and puts real stress on the light sockets over time. A stainless steel cable run between your anchor points fixes this completely.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Muzata 1/8 inch wire rope kit gives you everything you need to run a tight support line between two poles, two fence posts, or across to the house. The cable is coated so it does not scratch or rust, and the kit includes ferrule loops and a tension turnbuckle so you can tighten the line after installation.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Run the guide wire first, then loop or clip your string lights along it. This is the step most DIY tutorials skip, and it is the difference between a canopy that holds its shape all summer and one that looks tired by late July.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/muzata-1-8-inch-stainless-steel-wire-rope-cable-kit.jpg" alt="Muzata 1/8 inch Stainless Steel Wire Rope Cable Kit" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Muzata 1/8 inch Stainless Steel Wire Rope Cable Kit</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Coated stainless cable with a turnbuckle tensioner for creating a taut support line between anchor points before you hang the lights.</p>
            <a
              href="https://www.amazon.com/s?k=Muzata%201%2F8%20inch%20stainless%20steel%20wire%20rope%20cable%20kit%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best No-Drill Clips for Pergolas and Wood Fences */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best No-Drill Clips for Pergolas and Wood Fences</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a pergola, a wood fence, or stucco siding as your anchor points, 3M Command Outdoor Light Clips let you attach lights without drilling a single hole. This matters if you are renting, if you have a finished pergola you do not want to put screws into, or if you want a reversible setup you can take down cleanly each fall.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The outdoor version of these clips is rated to hold in temperatures from negative 20 to 125 degrees Fahrenheit, which means they handle summer heat without the adhesive letting go. Each clip holds up to one pound, which is more than enough for standard globe or Edison strand lights.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Space them every 18 to 24 inches along the beam and press firmly for 30 seconds when applying. For a 48-foot strand, a value pack gives you enough clips to attach cleanly without any drooping between attachment points.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/3m-command-outdoor-light-clips-value-pack.jpg" alt="3M Command Outdoor Light Clips Value Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">3M Command Outdoor Light Clips Value Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$16</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">28,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Weatherproof adhesive clips that hold string lights to wood, vinyl, and stucco without damage, rated for outdoor temperature swings.</p>
            <a
              href="https://www.amazon.com/s?k=3M%20Command%20outdoor%20string%20light%20clips%20value%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Classic Edison Style Lights for a Cafe Look */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Classic Edison Style Lights for a Cafe Look</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Enbrighten 48ft Vintage LED Cafe String Lights by GE give you the warm Edison bulb look with actual LED efficiency. Each bulb has a filament-style design that reads as vintage incandescent from across the yard, but the whole 48-foot strand draws less power than a single old-school bulb. That adds up fast when you are running lights for four or five hours every evening.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These are the lights to pick if you are entertaining on a covered patio or pergola where the bulbs themselves are part of the aesthetic. The G30 globe shape is smaller and more refined than big G40 bulbs, which makes the overall effect feel more like a Parisian cafe and less like a backyard decoration.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At 48 feet, one strand covers a 12x12 space in a zigzag pattern. For larger patios up to 20x20, two strands connected end to end handle it without needing a mid-run extension cord.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/enbrighten-48ft-vintage-led-cafe-string-lights-by-ge.jpg" alt="Enbrighten 48ft Vintage LED Cafe String Lights by GE" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Enbrighten 48ft Vintage LED Cafe String Lights by GE</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$52</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Filament-style G30 LED bulbs on a 48-foot strand that look like vintage incandescent but run cool and efficient all season long.</p>
            <a
              href="https://www.amazon.com/s?k=Enbrighten%2048ft%20vintage%20LED%20cafe%20string%20lights%20GE&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Smart Globe Lights for Dimmable Evening Ambiance */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Smart Globe Lights for Dimmable Evening Ambiance</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want to control your canopy from your phone or tie the lights into a schedule, the Kasa Smart Outdoor String Lights EP40 are worth the upgrade. They connect to your home wifi without a separate hub, and the Kasa app lets you dim them, set timers, or group them with other smart lights in your yard.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The G40 globe bulbs are larger and rounder than Edison styles, which spreads light in a softer, more diffuse way. This works especially well on a covered patio where you want even illumination across a dining table or seating area rather than the dramatic point-source glow of filament bulbs.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 48-foot strand covers the same ground as most competitors, and the bulbs are shatter-resistant. For anyone who forgets to turn off lights before bed, the scheduling feature alone is worth the extra cost over a basic strand.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kasa-smart-outdoor-string-lights-ep40-48ft-g40.jpg" alt="Kasa Smart Outdoor String Lights EP40, 48ft G40" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kasa Smart Outdoor String Lights EP40, 48ft G40</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$58</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">App-controlled G40 globe string lights with dimming and scheduling built in, no hub required, and shatter-resistant bulbs rated for outdoor use.</p>
            <a
              href="https://www.amazon.com/s?k=Kasa%20Smart%20outdoor%20string%20lights%20EP40%2048ft%20G40%20wifi&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Installing a String Light Canopy</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure before you buy anything.</strong> Sketch your patio dimensions and the exact path your lights will travel. Add 10 percent to your total length estimate to account for droop and the distance from the outlet to the first anchor point.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Install the guide wire before the lights.</strong> A support cable between anchor points keeps spans over 15 feet from sagging. Tension it tight with a turnbuckle so there is minimal flex when the lights are loaded.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep your outlet in mind from the start.</strong> Plan your layout so the first bulb is within reach of an outdoor GFCI outlet. A cord running across the yard defeats the whole effect and is a tripping hazard.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use clear zip ties to secure lights to guide wire.</strong> Small clear zip ties every 18 inches keep the strand from shifting in wind. Trim the tails flush so they disappear against the cable.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Choose warm white over daylight bulbs.</strong> Bulbs labeled 2200K to 2700K give you that golden hour glow. Daylight bulbs at 5000K or higher feel harsh and clinical in an outdoor evening setting.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Unplug during heavy storms.</strong> Even weatherproof strands hold up better when not swaying in high wind for hours. Smart light timers can be set to cut off automatically as a failsafe if you forget.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I hang string lights in my backyard without trees or a pergola?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Freestanding poles with weighted fillable bases are the most practical option. Set them at the corners of your patio, fill the bases with sand, and run your guide wire and lights between them. No digging required.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How far apart should string light poles be?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">8 to 12 feet between poles is the standard range. Beyond 15 feet, you need a support wire underneath the strand or the lights will sag noticeably in the middle.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do outdoor string lights need to be plugged into a GFCI outlet?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. Any outdoor electrical connection should be on a GFCI-protected outlet. Most modern homes have these on the exterior already. If yours does not, an electrician can add one for under $200.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can outdoor string lights stay up year-round?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">LED string lights rated for outdoor use handle most climates year-round. In areas with heavy snow or ice storms, taking them down for winter prevents damage from ice buildup on the bulbs and sockets.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many string lights do I need for a 20x20 patio canopy?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 20x20 foot canopy in a zigzag pattern typically needs 80 to 100 feet of lights. Two 48-foot strands connected end to end cover it with a little left over for the run from your outlet.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          <Link href="/blog/best-outdoor-accent-lighting-patio-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Lighting Patio Ideas</p>
          </Link>
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
