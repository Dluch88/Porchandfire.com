import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Install Landscape Edging Around a Patio | Porch & Fire",
  description: "Step-by-step guide to metal, plastic, and decorative landscape edging for patios and fire pit areas. Top picks starting at $18.",
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
            How to Install Landscape Edging Around a Patio
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A clean border between your patio and the lawn makes the whole yard look more deliberate. It takes a Saturday afternoon, costs under $50 in most cases, and the results are immediate.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The hard part is picking the right material. Steel holds a crisp straight line and lasts decades. Flexible plastic handles curves around fire pit pads and irregular beds. Decorative stone-look sections add a finished appearance that complements pavers without any digging at all.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers the installation basics for each type and recommends four products that are worth buying. These are real picks for typical backyards, not whatever has the most sponsored placements.</p>


      {/* Product 1: Best Steel Edging for a Permanent, Clean-Cut Border */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Steel Edging for a Permanent, Clean-Cut Border</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want edging that holds for ten-plus years without heaving, warping, or fading, steel is the answer. EverEdge makes a 16-gauge steel strip that drives into the ground with a rubber mallet and locks together section by section. Around a 12x16 concrete patio, you can edge the full perimeter in about two hours with no special tools beyond a flat spade and a mallet.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The top edge sits flush with the soil surface, so your lawn mower rolls right over it without scalping the grass. It holds straight lines on square patios and curves well around rounded borders. After a season, it weathers to a dark charcoal that disappears visually into most landscaping.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Plan to cut a shallow 4-inch trench with a flat spade before driving the stakes. On clay-heavy soil, a second person holding the strip straight while you anchor it saves a lot of frustration. Once it&apos;s in, it genuinely stays put.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/everedge-classic-16-gauge-steel-landscape-edging-4-ft-x-5-sections-20-ft-total.jpg" alt="EverEdge Classic 16-Gauge Steel Landscape Edging (4 ft x 5 sections, 20 ft total)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">EverEdge Classic 16-Gauge Steel Landscape Edging (4 ft x 5 sections, 20 ft total)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$64</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy-gauge steel that drives in cleanly, locks end to end, and holds a straight or curved line for decades without cracking or lifting.</p>
            <a
              href="https://www.amazon.com/s?k=EverEdge%20Classic%20steel%20landscape%20edging%2016%20gauge%2020%20ft&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Flexible Edging for Curved Fire Pit Pads */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Flexible Edging for Curved Fire Pit Pads</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A circular gravel fire pit pad with a clean edge around it looks intentional and keeps the gravel from migrating into the grass over time. The Dimex EasyFlex No-Dig Landscape Edging Kit is built for exactly this kind of job. The flexible black polyethylene strip bends without kinking, and the no-dig stakes pound straight into the ground without any pre-trenching.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">One 20-foot kit borders a 6-foot diameter fire pit circle with material left over for a short connecting path. The top edge has a clean rolled bead that reads neat from any angle. The black color disappears against gravel or dark mulch and stays consistent through several seasons of sun.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Installation is the fastest of any option here. Lay the strip, stake every 18 inches with the included hardware, done. On a Saturday morning you can edge an entire fire pit area and a small adjacent bed before noon.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/dimex-easyflex-no-dig-plastic-landscape-edging-kit-20-ft.jpg" alt="Dimex EasyFlex No-Dig Plastic Landscape Edging Kit, 20 ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Dimex EasyFlex No-Dig Plastic Landscape Edging Kit, 20 ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$27</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Flexible no-dig edging that curves cleanly around fire pits and irregular beds in under an hour, with no trenching required.</p>
            <a
              href="https://www.amazon.com/s?k=Dimex%20EasyFlex%20No-Dig%20landscape%20edging%20kit%2020ft&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Decorative Edging for a Cottage or Natural Aesthetic */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Decorative Edging for a Cottage or Natural Aesthetic</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not every patio calls for a hard industrial border. Around a flagstone patio or a raised herb bed near the back door, a stone-look edge fits the space better visually. Suncast makes interlocking plastic edging sections that mimic stacked natural stone and press into the soil with no tools at all. Each piece is about 18 inches long and connects end to end with a simple tab.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It won&apos;t hold back a heavy mulch slope the way steel will, but for a flat decorative border around a 10x10 paver patio it works perfectly. The gray and tan tones read as convincing stone from ten feet away, and the color holds well through multiple seasons.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is also the easiest edging to reposition later. Pull it up, move it, press it back in. If you like to redesign your yard every couple of years or you&apos;re renting and can&apos;t do permanent installs, this kind of flexibility is genuinely worth trading some rigidity for.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/suncast-decorative-garden-border-edging-18-in-sections-10-pack.jpg" alt="Suncast Decorative Garden Border Edging 18 in. sections (10-pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Suncast Decorative Garden Border Edging 18 in. sections (10-pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Tool-free decorative edging that mimics natural stacked stone and connects in sections, ideal for flat borders around patios and ornamental beds.</p>
            <a
              href="https://www.amazon.com/s?k=Suncast%20decorative%20garden%20border%20edging%20stone%20look%2010%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Budget Edging for Long Runs and Large Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Edging for Long Runs and Large Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;re edging a bed that stretches the full length of a fence line or all the way around a large patio, costs add up quickly with premium steel. Master Mark Plastics Terrace Board is made from recycled materials, holds up well in most climates, and costs a fraction of metal alternatives. A 40-foot roll runs around $18, which is genuinely hard to argue with for larger projects.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It&apos;s a stiffer board style rather than a flexible strip, so it handles straight runs and gradual curves well. It&apos;s not the right pick for tight fire pit circles, but for bordering a 20x30 gravel patio or a long garden bed it works without any drama. The brown color blends into dark mulch better than black alternatives.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Drive the included stakes through the pre-punched holes every 3 feet. In sandy or loose soil, go every 2 feet and the board stays flat and plumb even after heavy rain and freeze-thaw cycles.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/master-mark-plastics-95340-terrace-board-landscape-edging-40-ft-roll.jpg" alt="Master Mark Plastics 95340 Terrace Board Landscape Edging, 40 ft roll" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Master Mark Plastics 95340 Terrace Board Landscape Edging, 40 ft roll</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$18</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Budget-friendly recycled plastic board edging that handles straight runs and gentle curves on large patios and long garden beds without fading or cracking.</p>
            <a
              href="https://www.amazon.com/s?k=Master%20Mark%20Plastics%2095340%20Terrace%20Board%20landscape%20edging%2040%20ft&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Installing Landscape Edging</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Mark your line before you dig.</strong> Lay a garden hose on the ground to trace the border and walk back to the house to check it from a distance. Adjusting a hose is free. Adjusting edging you already drove in is not.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Overlap sections, don&apos;t butt them.</strong> Where two strips meet, overlap by at least 2 inches rather than joining end to end. Soil movement separates butt joints within one frost cycle.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Angle stakes slightly outward.</strong> Driving landscape stakes at about a 10-degree outward angle locks the edging against soil pressure from the bed side and prevents it from lifting over time.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a rubber mallet, not a steel hammer.</strong> Steel hammers crush the tops of plastic strips and deform metal edging on contact. A rubber mallet drives stakes cleanly and protects the strip.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Trench first for metal edging.</strong> Cut a 4-inch trench with a flat spade before installing steel edging. Trying to pound metal into uncut ground bends the strips and makes proper staking almost impossible.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pair edging with weed barrier inside the bed.</strong> Edging keeps the perimeter clean, but a layer of weed fabric under mulch or gravel handles the interior. Install both on the same afternoon and you won&apos;t be pulling weeds along the edge all summer.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the easiest landscape edging to install yourself?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">No-dig flexible edging like the Dimex EasyFlex kit is the most beginner-friendly option. You stake it directly into the ground without pre-trenching, and most patio borders take under an hour from start to finish.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How deep should landscape edging be installed?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most edging works best with 3 to 4 inches below the surface and about 1 to 2 inches above grade. Shallow installation leads to frost heaving in colder climates, so err deeper if you&apos;re in a zone that freezes.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I put landscape edging around a fire pit area?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, and it makes a big difference visually. Flexible plastic edging is best for circular fire pit pads since it bends without cracking. Use it to contain pea gravel or decomposed granite and keep grass from creeping into the pad.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does plastic landscape edging last compared to metal?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Quality steel edging lasts 20 years or more with no maintenance. Recycled plastic like Master Mark Terrace Board holds up for 8 to 10 years in most climates. Thin cheap plastic alternatives tend to crack and fade in 3 to 5 years.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What tools do I need to install landscape edging?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A flat spade or lawn edger to cut the trench, a rubber mallet to drive stakes, and heavy gloves to handle steel strips. A garden hose or marking paint to lay out the line first saves a lot of rework.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-fire-pit-area-on-a-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Fire Pit Area On A Budget</p>
          </Link>
          <Link href="/blog/backyard-herb-kitchen-garden-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Herb Kitchen Garden Setup</p>
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
