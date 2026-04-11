import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Wall Sconces for Porch and Patio | Porch & Fire",
  description: "Top outdoor wall sconces for every porch style, from modern black hardwired to plug-in and solar lanterns. Picks start at $38.",
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
            Best Outdoor Wall Sconces for Porch and Patio
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The right wall sconce does two things at once: it makes your porch look finished, and it actually lights the space you use every night.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A lot of people treat porch lighting as an afterthought, slapping up whatever came with the house. But a well-placed sconce can completely change how your front porch or back patio feels after dark. It adds depth, warmth, and a sense that someone put actual thought into the space.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover hardwired fixtures, plug-in options for renters, solar for zero-wiring installs, and motion-sensor lights for the corners where you want security without sacrificing style. All of them are available on Amazon and priced for real people.</p>


      {/* Product 1: Best Modern Black for a Clean, Updated Look */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Modern Black for a Clean, Updated Look</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your house has black window frames, dark hardware on the door, or any modern farmhouse detailing, the Kichler Everly is the sconce that ties it all together. It is a single-light hardwired fixture with an open cage design around a clear seeded glass insert, and the matte black finish holds up to sun and rain without peeling or fading over a few seasons.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This one works especially well flanking a front door or mounted on either side of a covered back porch. The cage-style frame throws light in multiple directions, so you get ambient glow across a 10x12 seating area rather than a harsh spotlight. At around $62, it is significantly cheaper than comparable fixtures at lighting stores, and the quality shows up in the hardware and glass weight.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kichler-everly-1-light-outdoor-wall-sconce-in-matte-black.jpg" alt="Kichler Everly 1-Light Outdoor Wall Sconce in Matte Black" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kichler Everly 1-Light Outdoor Wall Sconce in Matte Black</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$62</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A clean cage-and-glass design that pairs perfectly with modern farmhouse and contemporary exteriors without looking trendy.</p>
            <a
              href="https://www.amazon.com/s?k=Kichler%20Everly%20outdoor%20wall%20sconce%20matte%20black%20cage&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Traditional Lantern for Coastal and Classic Homes */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Traditional Lantern for Coastal and Classic Homes</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Cloudy Bay LED Outdoor Wall Lantern has a slightly tapered silhouette with clear glass panels and your choice of brushed nickel or antique bronze finish. It reads as traditional without being stuffy, which makes it a good fit for craftsman bungalows, coastal cottages, and colonial-style homes that look wrong with ultra-modern fixtures.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">What sets this one apart is the built-in LED module. There is no bulb to replace. The light is warm white at 3000K, which is flattering rather than clinical, and it is dimmable if you pair it with a compatible dimmer switch. It is an especially good choice for a covered porch where you want guests to feel welcome rather than interrogated. The antique bronze version looks particularly good next to natural wood siding and cedar trim.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cloudy-bay-dimmable-led-outdoor-wall-lantern.jpg" alt="Cloudy Bay Dimmable LED Outdoor Wall Lantern" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Cloudy Bay Dimmable LED Outdoor Wall Lantern</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$42</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Built-in dimmable LED, traditional lantern silhouette, and two finish options make this a versatile pick for classic and coastal exteriors.</p>
            <a
              href="https://www.amazon.com/s?k=Cloudy%20Bay%20dimmable%20LED%20outdoor%20wall%20lantern%20antique%20bronze&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Plug-In Option for Renters and Easy Installs */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Plug-In Option for Renters and Easy Installs</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you are renting, or if running new electrical to a porch wall sounds like a weekend you do not want to have, a plug-in outdoor wall sconce is a legitimate solution. LEONLITE makes a plug-in outdoor LED wall sconce that mounts flush to siding or stucco, with a cord that runs down the wall and into a nearby outdoor outlet. The cord is weather-resistant and subtle enough that most people do not even notice it once the fixture is up.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This fixture has a clean rectangular profile in matte black, which makes it feel intentional rather than like a workaround. It comes with a photocell sensor so it turns on at dusk and off at dawn automatically, which is genuinely useful if you are tired of remembering to hit the porch light. Good for apartments with outdoor outlets, garage walls, and back patios where you want light without hiring an electrician.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/leonlite-led-plug-in-outdoor-wall-sconce-with-photocell.jpg" alt="LEONLITE LED Plug-In Outdoor Wall Sconce with Photocell" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">LEONLITE LED Plug-In Outdoor Wall Sconce with Photocell</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A hardwired look with zero wiring required, plus a built-in dusk-to-dawn sensor that handles itself.</p>
            <a
              href="https://www.amazon.com/s?k=LEONLITE%20plug-in%20outdoor%20LED%20wall%20sconce%20dusk%20to%20dawn%20photocell&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Craftsman Style for Bungalows and Arts-and-Crafts Homes */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Craftsman Style for Bungalows and Arts-and-Crafts Homes</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Sea Gull Lighting has been making residential fixtures for a long time, and the Herrington collection is a solid example of why they have the reputation they do. The outdoor wall lantern has a squared-off lantern body with flat panels, a dark oxidized bronze finish, and proportions that look genuinely right on a craftsman porch rather than oversized or too delicate.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It takes a standard medium base bulb, so you can drop in whatever smart bulb or vintage Edison you prefer. The flat-panel glass softens the light nicely, and the fixture is rated for wet locations, meaning it handles direct rain on an exposed porch without issue. If your porch has wood columns, exposed rafter tails, or any arts-and-crafts detailing, this is the sconce that belongs there. It works well in pairs flanking a wide front door on homes with 8 to 10 foot entry walls.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sea-gull-lighting-herrington-1-light-outdoor-wall-lantern.jpg" alt="Sea Gull Lighting Herrington 1-Light Outdoor Wall Lantern" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sea Gull Lighting Herrington 1-Light Outdoor Wall Lantern</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$58</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Craftsman proportions, wet-location rated, and compatible with any standard medium base bulb including smart bulbs.</p>
            <a
              href="https://www.amazon.com/s?k=Sea%20Gull%20Lighting%20Herrington%20outdoor%20wall%20lantern%20dark%20oxidized%20bronze&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Solar for Zero-Wiring Installs */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar for Zero-Wiring Installs</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Gama Sonic Premier Solar Outdoor Wall Lantern is the rare solar fixture that actually performs well enough to use as primary porch lighting. Most solar sconces fade out around 9pm, but the Premier model has a larger solar panel and a bigger battery than the typical budget solar lights, which means it stays consistently bright for 6 to 8 hours after a full day of charging.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The fixture itself looks like a traditional black lantern, and it is hard to tell it is solar unless someone looks closely at the panel on top. It works best on a south or west-facing wall that gets direct afternoon sun. For a porch that gets 5 or more hours of sunlight daily, this eliminates any electrical work at all. It is a great choice for a detached garage, garden wall, or side gate where running power would be a real project.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gama-sonic-premier-solar-powered-led-outdoor-wall-lantern-in-black.jpg" alt="Gama Sonic Premier Solar Powered LED Outdoor Wall Lantern in Black" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Gama Sonic Premier Solar Powered LED Outdoor Wall Lantern in Black</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$68</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">One of the few solar wall sconces with enough battery capacity to stay bright all evening, not just for an hour after sunset.</p>
            <a
              href="https://www.amazon.com/s?k=Gama%20Sonic%20Premier%20solar%20outdoor%20wall%20lantern%20black&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best with Motion Sensor for Stairs and Security Spots */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best with Motion Sensor for Stairs and Security Spots</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Deck stairs, side gates, and the dark corner of a back patio all need a different kind of lighting than your main porch. Heath Zenith has been making motion-activated outdoor lights for decades, and the Saddlebrook model is their best balance of security function and actual curb appeal. It has a traditional lantern body in brushed nickel with a motion sensor built into the upper rim that detects movement up to 70 feet away.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">You can set it to stay on for anywhere from 1 to 12 minutes after triggering, and there is a manual override mode if you want steady-on during a backyard party. The fixture takes a standard medium base bulb and is rated for wet locations. For someone who wants a back porch light that doubles as a deterrent without looking like commercial security equipment, this is the one. It works particularly well mounted at the top of a staircase or beside a gate where you want light triggered by approach rather than left burning all night.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/heath-zenith-saddlebrook-motion-activated-outdoor-wall-lantern.jpg" alt="Heath Zenith Saddlebrook Motion-Activated Outdoor Wall Lantern" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Heath Zenith Saddlebrook Motion-Activated Outdoor Wall Lantern</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$48</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">7,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A traditional lantern design with a 70-foot motion sensor and adjustable timer, rated for wet locations and straightforward to install.</p>
            <a
              href="https://www.amazon.com/s?k=Heath%20Zenith%20Saddlebrook%20motion%20sensor%20outdoor%20wall%20lantern%20brushed%20nickel&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Outdoor Wall Sconce Shopping</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match your finish to your door hardware.</strong> If your door handle and hinges are matte black, go matte black on the sconce. Mixing finishes on a single porch reads as unfinished, not eclectic.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the IP rating before you buy.</strong> IP44 is fine for covered porches and protected spots. IP65 or higher is what you need for a fixture that will get rained on directly, like on an open-air patio wall.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Mount sconces at eye level, not too high.</strong> The center of the fixture should sit around 65 to 72 inches from the floor for most residential applications. Too high and the light misses the space entirely.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pair sconces with string lights for layered lighting.</strong> Sconces handle functional light. String lights above add atmosphere. Using both together is what makes a porch feel like a room rather than an afterthought.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use 2700K to 3000K bulbs.</strong> Warm white in this range looks good on a porch and flatters people during outdoor gatherings. Anything cooler reads as clinical and harsh.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Size the fixture to your door, not your preference.</strong> A small sconce on a wide porch facade looks lost. Aim for a fixture that is at least one-third the height of your door for proper visual scale.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between hardwired and plug-in outdoor wall sconces?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Hardwired sconces connect directly to your home&apos;s electrical wiring and require an existing junction box in the wall. Plug-in sconces mount to the wall but run a cord to a nearby outdoor outlet, making them easier to install and ideal for renters. Both can look nearly identical once installed.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What IP rating do I need for an outdoor wall sconce?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a covered porch or soffit where the fixture stays mostly protected, IP44 is sufficient. For any spot that gets direct rain, look for IP65 or better. Most outdoor-rated sconces list the IP rating in the product specs, usually near the wattage information.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How high should I mount an outdoor wall sconce?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The standard is 65 to 72 inches from the floor to the center of the fixture, roughly eye level for most adults. If you are mounting next to a door, position the center so it lines up with the top third of the door frame for the best visual proportions.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are solar wall sconces bright enough to actually use on a front porch?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Budget solar sconces usually are not. Quality models from brands like Gama Sonic can work as primary porch lighting if your wall gets at least 5 hours of direct sun daily. They work best as supplemental lighting or in spots where running power is not practical.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a smart bulb in an outdoor wall sconce?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, as long as the fixture takes a standard medium base bulb and is rated for outdoor use. Smart bulbs from Philips Hue, LIFX, or Wyze work well in outdoor fixtures. Avoid them in fully enclosed globes where heat can build up and shorten bulb life.</p>
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
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          <Link href="/blog/apartment-balcony-outdoor-oasis" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Apartment Balcony Outdoor Oasis</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
