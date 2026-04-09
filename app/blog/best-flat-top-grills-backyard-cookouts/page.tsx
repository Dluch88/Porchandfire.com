import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Flat Top Grills for Backyard Cookouts | Porch & Fire',
  description: 'Top flat top grills reviewed for 2026, from the Blackstone 36" at $399 to the Traeger Flatrock. Find the right griddle for your backyard.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-flat-top-grills-backyard-cookouts.jpg"
          alt="Best Flat Top Grills for Backyard Cookouts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Grills &amp; Cooking
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Flat Top Grills for Backyard Cookouts
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 3, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A flat top griddle opens up a completely different style of outdoor cooking. Smash burgers, breakfast for a crowd, stir fry, fried rice, quesadillas. A traditional grate cannot do any of that.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The market has gotten genuinely competitive in the last few years. Blackstone built this category almost from scratch, but Camp Chef, Traeger, Weber, and Pit Boss now all have serious options worth comparing. The differences between them matter more than the marketing suggests.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks range from a $119 tabletop unit that fits on an apartment balcony to an $849 premium griddle with three independent heat zones. Pick the one that matches how you actually cook outdoors.</p>


      {/* Product 1: Best Overall for Backyard Entertaining */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall for Backyard Entertaining</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Blackstone 36-inch has become the default backyard flat top for good reason. Four independently controlled burners push 60,000 BTU across 720 square inches of cooking surface. That is enough room to cook burgers for 10 people at the same time while keeping a corner of the griddle low and slow for caramelized onions and peppers.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Setup takes about 15 minutes out of the box. The folding side shelves are genuinely useful for staging food, and the built-in grease management channel keeps cleanup from being a disaster. The hood model adds wind protection and helps hold heat when temperatures drop later in the evening.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the model that ends up on every block with a serious outdoor cook. If you entertain regularly or have a family that actually uses the backyard through spring and summer, the 36-inch is the right starting point.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/blackstone-36-inch-4-burner-flat-top-gas-griddle-station-with-hood.jpg" alt="Blackstone 36 inch 4-Burner Flat Top Gas Griddle Station with Hood" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Blackstone 36 inch 4-Burner Flat Top Gas Griddle Station with Hood</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$399</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">18,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">720 square inches of cooking space and four independent burners make this the workhorse choice for anyone cooking for a crowd.</p>
            <a
              href="https://www.amazon.com/s?k=Blackstone%2036%20inch%204-Burner%20Flat%20Top%20Gas%20Griddle%20Station%20with%20Hood&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best for Serious Outdoor Cooks */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Serious Outdoor Cooks</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Camp Chef Flat Top 600 is built for people who treat their backyard like a second kitchen. Four burners push 60,000 BTU across 604 square inches, and the build quality is noticeably heavier than most competitors. The legs are sturdy enough that the unit does not shift when you are pressing down hard with a metal spatula.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">What makes it stand out is the cooking surface. It holds heat more evenly than thinner plates, which matters a lot when you are doing smash burgers or searing fish that needs a consistent crust across the whole surface. The grease management system drains into a catch cup that is actually easy to remove and empty mid-cook.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Camp Chef designed this for frequent use. The ignition is reliable across seasons, and the whole unit breaks down easily for storage or moving it to a shed. If you are cooking on a flat top more than twice a week through summer, you will appreciate the extra build quality over time.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/camp-chef-flat-top-600-4-burner-propane-griddle-ftg600.jpg" alt="Camp Chef Flat Top 600 4-Burner Propane Griddle FTG600" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Camp Chef Flat Top 600 4-Burner Propane Griddle FTG600</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$579</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavier gauge steel and four independent burners make this the most durable full-size flat top in its price range.</p>
            <a
              href="https://www.amazon.com/s?k=Camp%20Chef%20Flat%20Top%20600%20FTG600%204-Burner%20Propane%20Griddle&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Premium Flat Top with Three Heat Zones */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Flat Top with Three Heat Zones</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Traeger Flatrock is what happens when a company that knows high-end outdoor cooking builds a flat top from scratch. Three independent burner zones let you run a hot sear zone, a medium cook zone, and a warm hold zone all at once. On a busy cookout day with proteins, vegetables, and tortillas all in play at the same time, that setup earns its price.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cast iron griddle surface retains heat better than rolled steel competitors, which translates to a better crust on proteins and more consistent cooking across the surface. The built-in grease management is cleaner than most. This is not a beginner griddle, and it is not trying to be.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At $849 you are paying for build quality and cooking performance. The Flatrock has a smaller footprint than the Blackstone 36-inch but delivers comparable output thanks to efficient burner placement. It fits on a 10x10 deck without dominating the space, and it will still be cooking perfectly in ten years if you treat it right.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/traeger-flatrock-flat-top-grill.jpg" alt="Traeger Flatrock Flat Top Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Traeger Flatrock Flat Top Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$849</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Three independent heat zones and a cast iron surface make this the most capable flat top for serious outdoor cooks.</p>
            <a
              href="https://www.amazon.com/s?k=Traeger%20Flatrock%20Flat%20Top%20Grill&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Value Full-Size Griddle */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Value Full-Size Griddle</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Pit Boss 4-Burner Ultimate Lift-Off Flat Top Griddle hits a sweet spot that most competitors miss. Four burners across a 36-inch cooking surface at a price that runs $50 to $100 less than comparable models from other brands. The lift-off design lets you remove the griddle top for easier transport and storage, which matters if you are working with a smaller patio or a one-car garage.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cooking surface is thick cold-rolled steel and holds a seasoning well after the first few uses. Controls are straightforward. Burner output is consistent across all four zones, which is not a given at this price point on lesser-known brands.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is a strong choice if you want full-size flat top performance without pushing toward $500. The build quality is not as heavy as Camp Chef, but it is solidly above average for the price. A good first flat top if you are not yet sure how much you will use it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/pit-boss-4-burner-ultimate-lift-off-flat-top-griddle.jpg" alt="Pit Boss 4-Burner Ultimate Lift-Off Flat Top Griddle" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Pit Boss 4-Burner Ultimate Lift-Off Flat Top Griddle</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$449</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A removable griddle top and four independent burners give you full-size performance at a price that leaves room in the budget for accessories.</p>
            <a
              href="https://www.amazon.com/s?k=Pit%20Boss%204-Burner%20Ultimate%20Lift-Off%20Flat%20Top%20Griddle&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Tabletop Flat Top for Small Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Tabletop Flat Top for Small Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not everyone has room for a full standing griddle, and the Blackstone 22-inch Tabletop Griddle solves that problem well. It fits on a standard patio table or a folding utility table, takes up roughly the footprint of a large cutting board, and still delivers two burners and 339 square inches of cooking surface.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">That is enough room for four burgers, a full package of bacon, or a quick stir fry for three or four people. It runs on standard 1-pound propane canisters, so there is no hose to manage. For apartment balconies or smaller deck setups where a standing unit is just too much, this is a practical and genuinely capable option.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 22-inch also travels well. It goes to a campsite, a tailgate, or a friend&apos;s place without much hassle. The whole unit weighs under 20 pounds and the legs fold flat for storage. At $119, you get a lot of functionality for the investment.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/blackstone-22-inch-tabletop-griddle-with-hood.jpg" alt="Blackstone 22 inch Tabletop Griddle with Hood" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Blackstone 22 inch Tabletop Griddle with Hood</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$119</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">22,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Two burners and 339 square inches of cooking surface in a portable format that works on any outdoor table.</p>
            <a
              href="https://www.amazon.com/s?k=Blackstone%2022%20inch%20Tabletop%20Griddle%20with%20Hood&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best for Easy Cleanup After Weekend Cookouts */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Easy Cleanup After Weekend Cookouts</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Weber entered the flat top market with the Slate and brought their usual attention to detail. The 30-inch version has two burner zones and a 560 square inch hardened steel cooking surface designed specifically to be low-maintenance. The grease management system channels into a removable tray that slides out from the front, rather than requiring you to tilt the entire unit over a trash can.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The hardened steel surface gets to a well-seasoned state faster than traditional cold-rolled steel and is more forgiving of the occasional wipe-down with a damp cloth when you are cleaning up quickly after a Saturday lunch. That matters for anyone who wants great griddle food without a full commitment to cast iron maintenance rituals.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the flat top for people who love the idea of griddle cooking but know they will not want to spend 20 minutes on cleanup after every session. The build quality is vintage Weber. It will last. It sits comfortably on a 12-foot deck without overwhelming the rest of the outdoor setup.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/weber-slate-30-inch-griddle.jpg" alt="Weber Slate 30 inch Griddle" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Weber Slate 30 inch Griddle</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$549</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">890+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Weber&apos;s hardened steel surface and front-drain grease system make this the easiest full-size flat top to maintain after a cookout.</p>
            <a
              href="https://www.amazon.com/s?k=Weber%20Slate%2030%20inch%20Griddle&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Flat Top Griddle Cooking</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Season before you cook anything.</strong> Coat the surface with a thin layer of high smoke-point oil, heat it until it smokes, wipe it down, and repeat three or four times before your first real cook. A properly seasoned surface is the difference between food releasing cleanly and food welding itself to the plate.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use temperature zones from the start.</strong> Set one side high and one side medium the moment you turn it on. You will use that cooler zone to hold cooked food, slow down thicker proteins, or keep tortillas warm while you finish everything else.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep a squirt bottle of water nearby.</strong> A quick spritz loosens stuck food and helps steam vegetables while they cook. It also makes mid-cook surface cleaning faster so you are not scraping a fully carbonized mess at the end of the session.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Empty the grease trap after every cook.</strong> Letting grease accumulate in the catch tray is a fire hazard and makes your griddle harder to keep seasoned over time. Two minutes at the end of every cook beats a deep cleaning after ignoring it for a month.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a metal scraper, not soap.</strong> Soap strips the seasoning you have built up. While the surface is still warm but not burning hot, scrape it clean, wipe with a paper towel, and apply a very thin coat of oil before it cools completely.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Preheat for at least 10 minutes.</strong> Flat tops need longer preheat times than traditional grills to bring the whole surface to a consistent temperature. Rushing the preheat creates hot spots that burn food in one area while leaving it undercooked in another.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do you clean a flat top grill after cooking?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">While the surface is still warm, scrape all food debris toward the grease channel using a metal scraper. Wipe down with paper towels, then apply a very thin coat of cooking oil and let it cool. Avoid soap and water, which strip the seasoning you have built up.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is a flat top grill worth buying if I already have a gas grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">They do very different things, so yes, if you cook variety. A flat top lets you do eggs, pancakes, smash burgers, fried rice, and stir fry outdoors in a way a traditional grate never can. Most people who buy a flat top end up using it more than their regular grill once they get comfortable with the cooking style.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many BTUs do I need in a flat top grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a full-size 36-inch griddle, 60,000 BTU total across four burners is the standard and works well for most backyard cooking. Smaller 22-inch tabletop models at 24,000 BTU are plenty for 2 to 4 people. Even heat distribution across the surface matters more than raw BTU numbers.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you use a flat top grill in the rain?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Light rain is manageable as long as you keep the flame going and protect the surface. Heavy rain creates temperature swings that are hard to control and can damage an unseasoned or newly seasoned surface over time. Most people position the griddle under a pergola or awning and use a fitted cover between cooks.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a flat top grill and a griddle?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The terms are used interchangeably and refer to the same cooking surface. The distinction some people draw is that a griddle attachment sits on top of a traditional grill grate, while a flat top grill is a standalone unit with its own dedicated burner system. The standalone flat top grills in this guide are the latter.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-charcoal-grills-under-300" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Charcoal Grills Under 300</p>
          </Link>
          <Link href="/blog/best-gas-grills-under-400" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Gas Grills Under 400</p>
          </Link>
          <Link href="/blog/best-charcoal-smokers-backyard-bbq" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Charcoal Smokers Backyard Bbq</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
