import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Porch Swings with Hanging Hardware | Porch & Fire',
  description: 'Six porch swings that come with chains and mounting hardware. Wood, metal, and wicker options from $185, covering 2-seat and 3-seat sizes.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-porch-swings-with-hanging-hardware.jpg"
          alt="Best Porch Swings with Hanging Hardware"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Seating
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Porch Swings with Hanging Hardware
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 31, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A porch swing is one of the few pieces of outdoor furniture you will use every single day, not just on weekends or when company comes over. It changes how you start mornings and end evenings in a way that a chair simply doesn&apos;t.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The frustrating part has always been that most swings ship without chains or hooks, leaving you to piece together hardware on a separate order. Every swing in this list comes with chains, hanging hardware, or both, so you can go from unboxing to actually swinging the same afternoon.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">We&apos;ve covered six options across wood, metal, and wicker in 2-seat and 3-seat widths. Prices run from around $185 to $700, with options for every porch size, budget, and how much maintenance you&apos;re willing to do.</p>


      {/* Product 1: Best Cedar Swing for Classic Front Porches */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cedar Swing for Classic Front Porches</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a traditional covered front porch, the Shine Company Countryside swing is what belongs on it. It&apos;s built from solid cedar in a clean slatted style that looks like it&apos;s been there for decades the day you hang it. At 4 feet wide, it fits two adults without crowding, and it doesn&apos;t dominate a smaller porch the way longer swings tend to.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cedar naturally resists moisture and insects, but the real bonus here is that Shine Company ships it unfinished. You can stain it to match your deck boards, paint it white to match your trim, or let it gray naturally over a season or two. The included chains are heavy-duty and rated well above the listed 500-pound capacity, which you&apos;ll appreciate when two people are rocking back and forth at full momentum.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/shine-company-4516n-countryside-4-foot-cedar-porch-swing.jpg" alt="Shine Company 4516N Countryside 4-Foot Cedar Porch Swing" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Shine Company 4516N Countryside 4-Foot Cedar Porch Swing</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$219</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solid unfinished cedar with heavy-duty chains included, built for covered porches and the kind of thing you pass down.</p>
            <a
              href="https://www.amazon.com/s?k=Shine%20Company%204516N%20Countryside%20Cedar%20Porch%20Swing&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best No-Maintenance Swing for Sun-Exposed Porches */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best No-Maintenance Swing for Sun-Exposed Porches</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;ve spent a weekend sanding and repainting a wooden porch swing, you already know the cycle. The POLYWOOD Traditional Porch Swing ends that. It&apos;s made from recycled plastic lumber that genuinely looks like painted wood, resists fading in direct UV exposure, and cleans up with just a garden hose and mild soap.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At 4 feet wide it seats two people comfortably, and it comes in over a dozen colors including classic white, slate grey, and charcoal. The stainless steel chain system is included and built to outlast the swing itself. This one costs more upfront, but factor in zero refinishing costs over ten to fifteen years and the math gets better fast.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/polywood-traditional-4-foot-porch-swing.jpg" alt="POLYWOOD Traditional 4-Foot Porch Swing" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">POLYWOOD Traditional 4-Foot Porch Swing</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$699</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Recycled plastic lumber that looks like painted wood, resists fading and weather, and comes in 12 colors with stainless chain hardware included.</p>
            <a
              href="https://www.amazon.com/s?k=POLYWOOD%20Traditional%204-Foot%20Porch%20Swing%20recycled%20plastic&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Metal Swing for Budget-Conscious Buyers */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Metal Swing for Budget-Conscious Buyers</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Metal swings are underrated. There&apos;s no warping, no splinters, and powder-coated steel holds up to humidity and morning dew better than most wood options at this price point. The Tangkula 4-Foot Porch Swing has a welded steel frame with a UV-resistant powder coat finish and comes with both a cushion and adjustable hanging chains in the box.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 550-pound weight capacity is higher than most competitors in this range, which matters more than people think when you factor in the dynamic load from two people rocking. At 4 feet wide it&apos;s a genuine 2-seater with armrests on both ends. The adjustable chains let you dial in the hang level so the seat doesn&apos;t tilt forward or back based on where your ceiling hooks land.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-4ft-outdoor-metal-porch-swing-with-cushion-and-hanging-chains.jpg" alt="Tangkula 4FT Outdoor Metal Porch Swing with Cushion and Hanging Chains" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula 4FT Outdoor Metal Porch Swing with Cushion and Hanging Chains</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$189</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Powder-coated steel frame with cushion and adjustable chains included, rated for 550 pounds at under $200.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%204ft%20outdoor%20metal%20porch%20swing%20cushion%20hanging%20chains&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best 3-Person Wood Swing for Family Porches */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best 3-Person Wood Swing for Family Porches</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Moving from a 2-seat to a 3-seat swing changes the whole dynamic of a porch. You can seat a couple with a kid between them, or three adults who actually have room to sit without bumping shoulders. The Sunnydaze Decor 5-Foot 3-Person Porch Swing stretches wide enough to make that work, with a 660-pound weight rating and a slatted pine frame built for the long term.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The natural pine stain looks good fresh out of the box and is easy to refresh with a brush-on coat every couple of years. The included chain hardware accommodates different ceiling heights, which matters if you&apos;re working with a 9-foot or 10-foot porch ceiling instead of a standard 8. Armrests on both ends and a high back make it feel more like furniture than a porch afterthought.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-3-person-5-foot-wooden-outdoor-porch-swing.jpg" alt="Sunnydaze Decor 3-Person 5-Foot Wooden Outdoor Porch Swing" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor 3-Person 5-Foot Wooden Outdoor Porch Swing</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$279</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Five-foot pine swing for three adults, rated for 660 pounds, with armrests and adjustable chains built for taller ceilings.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%203%20person%205%20foot%20wooden%20porch%20swing&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Canopy Swing for Open or South-Facing Porches */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Canopy Swing for Open or South-Facing Porches</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Open porches that get afternoon sun are hard to swing on comfortably without shade. The Outsunny 3-Seat Porch Swing solves that with an attached canopy that pivots to block direct light from different angles. The powder-coated steel frame resists rust, and the included cushions are thick enough that you don&apos;t need an additional seat pad for back support.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At 5 feet wide it seats three people, or two adults who want real lounging room. The canopy fabric is UV-resistant and folds back when you don&apos;t need it. It ships with full ceiling-mount hanging hardware including chains and hooks, and the canopy itself is removable for winter storage while the swing frame stays up year-round.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-3-seat-outdoor-porch-swing-with-canopy-and-cushions.jpg" alt="Outsunny 3-Seat Outdoor Porch Swing with Canopy and Cushions" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny 3-Seat Outdoor Porch Swing with Canopy and Cushions</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$319</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Five-foot steel swing with a pivoting UV canopy, padded cushions, and complete ceiling mount hardware all in the box.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%203%20seat%20porch%20swing%20canopy%20cushions%20ceiling%20mount%20hardware&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Wicker Swing for Year-Round Visual Appeal */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wicker Swing for Year-Round Visual Appeal</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">PE wicker is the material that changed what porch furniture looks like over the past decade. It has the warmth of natural rattan without the weather sensitivity, holding up through wet winters and humid summers without cracking or fading. The Best Choice Products 4-Foot Outdoor Wicker Porch Swing brings that look to a hanging 2-seat swing with an all-weather wicker weave over a powder-coated steel frame.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cushion is included and covered in fade-resistant fabric, which puts you ahead of most wicker swings that ship bare and expect you to source a pad separately. The hanging chains are adjustable and included in the box. At 4 feet wide it&apos;s the right size for a side porch or back porch where a 5-foot swing would feel oversized, and the neutral brown wicker with beige cushion works with almost any exterior color scheme.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/best-choice-products-4-foot-outdoor-pe-wicker-porch-swing-with-cushion.jpg" alt="Best Choice Products 4-Foot Outdoor PE Wicker Porch Swing with Cushion" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Best Choice Products 4-Foot Outdoor PE Wicker Porch Swing with Cushion</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$349</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">All-weather PE wicker over steel frame with cushion and hanging chains included, sized right for smaller covered porches.</p>
            <a
              href="https://www.amazon.com/s?k=Best%20Choice%20Products%20outdoor%20wicker%20porch%20swing%20cushion%20chains%204%20foot&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Hanging a Porch Swing Right</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Find a solid ceiling joist before you drill anything.</strong> Porch ceiling boards and drywall will not hold a swing under load. You need to attach to a structural joist or add a reinforcing beam spanning between two joists.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use lag bolts, not standard wood screws.</strong> Eye bolts should be at least 3/8-inch diameter and threaded a minimum of 3 inches into solid wood for a connection that holds under dynamic load.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add swivel hooks between your chains and the ceiling hardware.</strong> Spring-loaded swivel hooks eliminate the twisting and metal fatigue that wears out chain connections after a full season of regular use.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set the front chains slightly shorter than the back.</strong> A 2 to 3 degree backward tilt creates a natural reclining position that is far more comfortable for long sits than a perfectly level hang.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Leave 14 to 18 inches of clearance behind the swing.</strong> Less than that and you&apos;ll clip the house or a railing on the backswing. Measure the arc before you commit to a mounting position.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Hang the seat 17 to 19 inches from the floor.</strong> This matches standard chair seat height and lets most adults push off without stretching, which makes the swing far more practical for everyday use.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What weight capacity do I need for a porch swing?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For two adults, look for a minimum 400-pound rating. For three adults or regular use with kids, 500 to 600 pounds gives you a comfortable safety margin. Dynamic load from rocking puts more stress on hardware than static weight, so err on the higher side.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How high off the ground should a porch swing hang?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Aim for 17 to 19 inches from the floor to the seat. That lets most people push off comfortably. Chain length from the ceiling hook to the swing typically runs 12 to 16 inches depending on your ceiling height.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do porch swings come with all the hardware needed to hang them?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most budget swings include chains but not the ceiling hardware like eye bolts or lag screws. Every swing in this list includes chains, and several include complete kits. Read the product listing carefully to confirm what is in the box.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can a wood porch swing stay outside year-round?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Cedar and teak handle it with minimal care. Pine swings benefit from a waterproof sealer or stain before the first winter. Bring cushions inside or store them in a deck box whenever extended rain is coming.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a 2-seat and 3-seat porch swing?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 2-seat swing is typically 4 feet wide and works well on porches under 8 feet deep. A 3-seat swing runs 5 to 5.5 feet and is better when two adults want genuine lounging room or when you regularly have three people sitting at once.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/how-to-hang-porch-swing-step-by-step" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">How To Hang Porch Swing Step By Step</p>
          </Link>
          <Link href="/blog/best-outdoor-benches-garden-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Benches Garden Patio</p>
          </Link>
          <Link href="/blog/best-hammock-chairs-with-stands-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Hammock Chairs With Stands Backyard</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
