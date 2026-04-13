import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Stair and Step Lights for Decks | Porch & Fire",
  description: "The 6 best outdoor step lights for decks in 2026, from $22 hardwired surface mounts to solar packs that actually hold charge through cloudy weather.",
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
            Lighting
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Stair and Step Lights for Decks
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Unlit deck stairs are genuinely dangerous, and the fix is cheaper and easier than most people think. A few well-placed step lights turn a tripping hazard into something that actually looks good after dark.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The three main approaches each have a place. Hardwired lights look the cleanest and run forever without maintenance. Solar has gotten much better over the past few years, and battery-powered options let you add light anywhere without touching a single wire.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover recessed riser lights, surface-mount hardwired options, low-voltage landscape installs, and solar alternatives. There is a right answer here for most budgets and installation skill levels.</p>


      {/* Product 1: Best Recessed Riser Light: LEONLITE 3W LED Step Light */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Recessed Riser Light: LEONLITE 3W LED Step Light</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you are building a new deck or doing a serious renovation, recessed riser lights are the cleanest look you can get. The LEONLITE 3W LED Step Light ships in a 4-pack, and the housing cuts into the vertical face of each step riser. You end up with a flush, built-in look that reads as intentional design rather than something bolted on as an afterthought.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Each fixture puts out a soft warm white that illuminates the tread below without blinding anyone walking up. The die-cast aluminum housing and frosted lens hold up to the freeze-thaw cycles that crack cheaper plastic units after a season or two. For a standard 4-step deck entry, one pack handles the whole run, and the hardwire connection is straightforward for anyone comfortable with basic electrical work.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These fit particularly well on composite decks where you want everything to look finished. The 3W draw is low enough that running 8-10 fixtures on a single GFCI-protected circuit is not an issue.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/leonlite-3w-led-step-and-stair-light-4-pack.jpg" alt="LEONLITE 3W LED Step and Stair Light, 4-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">LEONLITE 3W LED Step and Stair Light, 4-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Flush-mount recessed riser lights in die-cast aluminum that give any deck a clean, built-in look with a simple hardwire install.</p>
            <a
              href="https://www.amazon.com/s?k=LEONLITE%20LED%20Step%20and%20Stair%20Light%203W%204-Pack%20recessed%20riser&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Surface-Mount Hardwired Light: Maxxima MLS-12 LED Step Light */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Surface-Mount Hardwired Light: Maxxima MLS-12 LED Step Light</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not every deck riser has depth for a recessed fixture. On older decks with actual dimensional lumber, cutting recesses into structural material is not the right move. The Maxxima MLS-12 mounts directly on the surface, either on the riser face or on the side of the stringer, and it looks deliberate rather than like a compromise.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The housing is a low-profile rectangular unit with a frosted lens that throws light down and across the tread. It hardwires into a standard outdoor junction box, and the fixture sits only about half an inch off the surface. That matters more than you think when you are carrying groceries or a cooler down the stairs in the dark.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The white and bronze finish options blend with most exterior color palettes, and at around $22 per fixture, this is the most cost-effective hardwired option when you need six to eight lights on a longer staircase. Two-pack and four-pack bundles are available if you want to order the whole run at once.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/maxxima-mls-12-led-step-light.jpg" alt="Maxxima MLS-12 LED Step Light" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Maxxima MLS-12 LED Step Light</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Low-profile surface-mount step light that works on any riser or stringer without requiring cuts into structural wood.</p>
            <a
              href="https://www.amazon.com/s?k=Maxxima%20MLS-12%20LED%20Step%20Light%20surface%20mount%20outdoor%20hardwired&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Low-Voltage Landscape Step Light: VOLT Lighting 3W LED Step Light */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Low-Voltage Landscape Step Light: VOLT Lighting 3W LED Step Light</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Low-voltage 12V landscape systems are the right call when your deck stairs lead down into a garden path or yard. You run one wire from a transformer near a standard outlet, then tap multiple fixtures off that single run without any line-voltage work. VOLT Lighting makes purpose-built step lights for exactly this kind of install, and the build quality is noticeably better than the import brands that flood the search results.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The VOLT 3W step light has a solid brass or bronze body designed to be set into a landscape bed or mounted to a timber step edge. If you have railroad tie steps, flagstone landings, or timber garden stairs leading up to your deck, this fixture blends in without calling attention to itself. The beam angle is tight enough to light the step below without washing out the surrounding planting beds.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Running these off a quality 150W transformer lets you add path lights and spotlights to the same system over time. The upfront cost is higher than solar, but the results at 9pm on a summer night are genuinely different from anything battery or solar powered.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/volt-lighting-3w-led-step-light-bronze.jpg" alt="VOLT Lighting 3W LED Step Light Bronze" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">VOLT Lighting 3W LED Step Light Bronze</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">970+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solid brass low-voltage step light built for permanent landscape installs where the plastic options would look cheap and fail in two seasons.</p>
            <a
              href="https://www.amazon.com/s?k=VOLT%20Lighting%203W%20LED%20Step%20Light%20low%20voltage%2012V%20landscape%20bronze&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Battery-Powered Option: Mr. Beams MB523 Wireless LED Stair Light */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Battery-Powered Option: Mr. Beams MB523 Wireless LED Stair Light</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Mr. Beams MB523 is the right call for rental properties, renters, or anyone who does not want to commit to a wiring layout before testing placement. It runs on 3 AA batteries, mounts with two screws, and activates on motion. Battery life is genuinely good, with most users reporting 6-12 months depending on how much foot traffic the stairs see.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The motion sensor picks up movement at about 10 feet and keeps the light on for 30 seconds after activation. That is long enough to get up or down a full flight of stairs without feeling rushed. For a side gate staircase, a basement bulkhead entry, or a seasonal cabin that does not have outdoor wiring, this is the most practical solution on this list.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 2-pack makes sense if you have more than four steps or a wider staircase where one unit leaves a shadow zone. The housing handles rain and cold well, though prolonged direct sun exposure in a hot climate will shorten the plastic life over a few years.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mr-beams-mb523-wireless-battery-powered-led-stair-light.jpg" alt="Mr. Beams MB523 Wireless Battery-Powered LED Stair Light" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Mr. Beams MB523 Wireless Battery-Powered LED Stair Light</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$32</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Motion-activated battery step light that needs zero wiring and runs 6-12 months per battery set with regular foot traffic.</p>
            <a
              href="https://www.amazon.com/s?k=Mr.%20Beams%20MB523%20wireless%20LED%20stair%20light%20battery%20powered%20motion&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Solar Step Light: TomCare Solar Step Lights */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar Step Light: TomCare Solar Step Lights</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Solar step lights have a reputation problem they no longer fully deserve. The early versions barely worked and faded by 10pm. TomCare has spent several product generations improving their deck step lights, and the current version holds a charge through overcast stretches and puts out real, usable light rather than a decorative glow.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 4-pack mounts directly to the face of deck risers with included hardware. Each unit has a small solar panel on top, an auto on-off dusk sensor, and an IP65 waterproof rating that handles rain without any issues. The warm amber LED output is flattering on wood and composite decks, and the profile is low enough that nobody is going to snag a foot on the housing.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 4-step deck entry that gets a few hours of afternoon sun, this pack handles the whole install in under 30 minutes with just a drill. If your stairs face north or sit under a roof overhang most of the day, the solar panel will underperform and hardwired is the better call.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tomcare-solar-step-lights-outdoor-4-pack.jpg" alt="TomCare Solar Step Lights Outdoor, 4-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">TomCare Solar Step Lights Outdoor, 4-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solar deck step lights that hold charge through overcast weather and auto-activate at dusk with no wiring required.</p>
            <a
              href="https://www.amazon.com/s?k=TomCare%20Solar%20Step%20Lights%20Outdoor%204%20Pack%20deck%20riser%20mount&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Solar Stake Alternative for Garden Steps: JACKYLED Solar Step Lights */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar Stake Alternative for Garden Steps: JACKYLED Solar Step Lights</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your deck stairs empty out onto a flagstone path, a tiered garden, or a long backyard walkway, step lights on the risers only solve half the problem. You still need to mark the path edges so people know where to walk once they leave the deck. JACKYLED makes a solar stake light that presses into the soil alongside each step or along the path edge and charges off the panel on top.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 6-pack covers a typical 15-20 foot garden stair run or walkway, placing one stake every two to three feet. The light output is soft white with a gentle spread that marks the path edge without creating harsh bright spots. The housing handles rain and light frost better than you might expect from a stake-style fixture.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These work best as a complement to surface-mount or recessed step lights rather than a replacement. Use them to extend the lit zone from your deck stairs out through the yard, and the whole nighttime approach to your house reads as finished.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/jackyled-solar-step-lights-outdoor-6-pack.jpg" alt="JACKYLED Solar Step Lights Outdoor, 6-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">JACKYLED Solar Step Lights Outdoor, 6-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$40</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solar stake lights that extend illumination from deck stairs along garden paths and walkway edges with no wiring at all.</p>
            <a
              href="https://www.amazon.com/s?k=JACKYLED%20Solar%20Step%20Lights%20Outdoor%206%20Pack%20stake%20garden%20path%20deck&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Outdoor Step Lighting</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Light the tread, not just the riser.</strong> Position fixtures so the beam falls on the horizontal walking surface. Lighting only the vertical riser face looks dramatic but leaves the actual step in shadow where it matters most.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Alternate sides on wide staircases.</strong> On stairs wider than 4 feet, stagger lights on alternating sides rather than lining one side only. This eliminates shadow zones across the middle of each tread.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match your color temperature to your materials.</strong> Warm white (2700K-3000K) looks better on wood and composite decks. Cool white (4000K and above) reads as clinical next to natural materials and attracts more insects.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Solar needs real sun to work.</strong> A step light panel shaded by a roof overhang or large tree all day will underperform regardless of brand. North-facing stairs and shaded entries should use hardwired or battery-powered fixtures.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add a photocell to your hardwired circuit.</strong> A dusk-to-dawn photocell keeps hardwired step lights on automatically without any manual switching. Add a timer on top of that if you want them off by midnight to save on electricity.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Seal every outdoor wire connection.</strong> Any hardwired outdoor connection needs weatherproof wire nuts or heat-shrink connectors. A bare connection inside a standard indoor junction box will corrode within one wet season.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best type of step light for a wood deck?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Recessed riser lights like the LEONLITE 4-pack give the cleanest look on a wood or composite deck. Surface-mount options like the Maxxima MLS-12 work better when you cannot or do not want to cut into the riser. Both hardwired options will outlast any solar fixture by years.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long do solar step lights stay on at night?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Quality solar step lights run 6-10 hours on a full summer charge. In winter or during cloudy stretches, expect 4-6 hours. Brands with larger panels like TomCare hold up better than the very cheap options. If your stairs get limited direct sun, hardwired is more reliable year-round.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I install outdoor step lights myself without an electrician?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Solar and battery-powered options are fully DIY with no electrical knowledge required. Hardwired step lights require connecting to a GFCI-protected circuit, which most confident DIYers can handle. Low-voltage 12V systems are the easiest hardwired path since the transformer simply plugs into a standard outdoor outlet.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many step lights do I need for deck stairs?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">One light per step is the standard for recessed riser lights. For surface-mount or solar options on a deeper tread, you can sometimes skip every other step and still get good coverage. On stairs wider than 4 feet, plan for one light on each side per step.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are outdoor step lights waterproof?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Look for IP65 or higher on any step light that will see rain or sprinklers. IP65 means the fixture is dust-tight and protected against water from any direction. Most quality hardwired and solar step lights on this list meet that standard.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
