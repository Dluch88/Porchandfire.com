import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Solar Flood Lights for Backyard Security | Porch & Fire",
  description: "Six solar flood lights for backyard security and ambiance. Motion-sensor picks and always-on landscape options, starting around $26.",
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
            Best Solar Flood Lights for Backyard Security
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 13, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good solar flood light can do two things at once: keep the sketchy corner of your yard lit when someone walks past, and make your patio perimeter look intentional after dark.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The market for solar security lights has gotten genuinely good. You can pull 2,000-plus lumens off a sunny charge and get motion detection that triggers before someone reaches your door, not after. No wiring, no electrician, no ongoing electricity cost.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover the full range. Some are hard-core motion-activated security lights built for driveways and garage walls. Others are lower-key floods meant to uplight a tree or wash a fence with soft light all night. All of them are real products you can find on Amazon right now.</p>


      {/* Product 1: Best Overall Motion Security Light */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall Motion Security Light</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Aootek 182 LED has become the go-to recommendation for backyard motion lighting for good reason. It runs three independently adjustable heads, pulls 2,500 lumens at peak output, and the motion sensor has a 270-degree sweep that makes it genuinely hard to sneak past. Mount one on your garage corner and it covers both the driveway and the side path from a single fixture.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Setup is a screwdriver job. The panel sits on a short arm above the light body, so you angle it toward the sun once and forget it. On a full charge after a sunny day, motion-trigger mode runs reliably through two or three nights before needing sun again. For a two-car driveway or a 20x30 backyard, one of these handles the perimeter coverage you actually need.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/aootek-182-led-solar-outdoor-motion-sensor-lights-2-pack.jpg" alt="Aootek 182 LED Solar Outdoor Motion Sensor Lights (2-Pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Aootek 182 LED Solar Outdoor Motion Sensor Lights (2-Pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$40</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">47,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Three adjustable heads and a 270-degree sensor make this the most coverage per dollar in solar security lighting.</p>
            <a
              href="https://www.amazon.com/s?k=Aootek%20182%20LED%20Solar%20Outdoor%20Motion%20Sensor%20Security%20Lights%202-pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Three-Head Light for Deck and Patio Corners */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Three-Head Light for Deck and Patio Corners</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The LEPOWER 2500LM is the one to get if you want to mount a light in a corner and wash an entire deck or patio seating area. The three heads rotate independently, which matters when you need to cover a 10x14 deck plus the gate opening at the same time. Point one head at the seating area, one toward the steps, one at the yard beyond.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It runs in three modes: motion-only for strict security use, a dim always-on baseline that shifts to full brightness when triggered, and full-brightness always-on for nights when you just want the whole area lit. Most people land on the dim baseline mode. It gives you enough light to move around safely without draining the battery before sunrise.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lepower-2500lm-solar-motion-sensor-outdoor-security-light.jpg" alt="LEPOWER 2500LM Solar Motion Sensor Outdoor Security Light" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">LEPOWER 2500LM Solar Motion Sensor Outdoor Security Light</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$35</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">28,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Three independently adjustable heads let you cover a full patio corner from a single mount point.</p>
            <a
              href="https://www.amazon.com/s?k=LEPOWER%202500LM%20Solar%20Motion%20Sensor%20Outdoor%20Security%20Light%203%20head&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Low-Profile Light for Fences and Sheds */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Low-Profile Light for Fences and Sheds</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Baxia Technology BX-SL-101 is a flat, rectangular fixture that sits close to the wall and does not look like a security light from across the yard. That matters if your fence runs along a neighbor&apos;s property line and you want coverage without a bulky apparatus sticking out. The sensor range hits about 15 feet, which is right for detecting someone moving along a fence line or approaching a shed door.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It comes in a two-pack, so you can run one on each side of a detached garage or space them along a 30-foot fence run. The light output is more modest than the Aootek or LEPOWER, around 800 lumens, but for fence-line duty or a shed entrance that is exactly the right amount. It is not trying to light a parking lot, and the battery runtime reflects that.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/baxia-technology-bx-sl-101-solar-security-lights-motion-sensor-2-pack.jpg" alt="Baxia Technology BX-SL-101 Solar Security Lights Motion Sensor (2-Pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Baxia Technology BX-SL-101 Solar Security Lights Motion Sensor (2-Pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">31,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Low-profile design and 800-lumen output make these the right fit for fence lines, shed doors, and narrow side yards.</p>
            <a
              href="https://www.amazon.com/s?k=Baxia%20Technology%20BX-SL-101%20Solar%20Security%20Lights%20Motion%20Sensor%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Solar Flood for Uplighting Trees and Shrubs */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar Flood for Uplighting Trees and Shrubs</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most solar security lights are not designed for landscape duty. They blast full white light in every direction, which is great for motion detection and terrible for making your garden look good. The Nekteck 20W Solar Flood Light solves that by running as a dedicated, always-on spot. It throws a focused beam you can aim at a tree trunk, a large shrub, or the base of a pergola to create the uplit look you see in professionally landscaped yards.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 20-watt panel is larger than the compact security lights, which means it stores enough charge for 6 to 8 hours of continuous output. That covers dusk to around 1 or 2 in the morning on most nights. Stake it about 6 feet from whatever you are lighting and angle the head up at roughly 45 degrees. One fixture handles a single specimen tree up to about 15 feet tall.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/nekteck-20w-solar-powered-led-flood-light-outdoor.jpg" alt="Nekteck 20W Solar Powered LED Flood Light Outdoor" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Nekteck 20W Solar Powered LED Flood Light Outdoor</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$48</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A focused, steerable beam makes this the best solar option for uplighting trees, shrubs, and garden features.</p>
            <a
              href="https://www.amazon.com/s?k=Nekteck%2020W%20Solar%20Powered%20LED%20Flood%20Light%20Outdoor%20adjustable&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Wide-Angle Option for Paths and Steps */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wide-Angle Option for Paths and Steps</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Litom 30 LED is a slim, pill-shaped fixture that mounts flat against a wall or post and throws a wide, even wash of light across the ground in front of it. Where the three-head lights pile up the lumens in one zone, this one spreads light across a broader, shallower area. It is the right call for a path that runs 8 to 10 feet wide, a set of deck steps, or a back-door landing.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The two-pack price is low enough that most people run one at the top of the steps and one near the gate, which is exactly the right setup. The motion sensor activates at about 20 feet and stays on for a configurable 30 seconds after the last movement. That is enough time to get from the gate to the door without the light cutting out on you mid-path.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/litom-30-led-solar-motion-sensor-outdoor-lights-2-pack.jpg" alt="Litom 30 LED Solar Motion Sensor Outdoor Lights (2-Pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Litom 30 LED Solar Motion Sensor Outdoor Lights (2-Pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$26</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">22,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A wide, flat beam pattern covers paths and steps evenly without the hot spots you get from directional heads.</p>
            <a
              href="https://www.amazon.com/s?k=Litom%2030%20LED%20Solar%20Motion%20Sensor%20Outdoor%20Lights%202%20pack%20wide%20angle&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best High-Output Option for Large Yards */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best High-Output Option for Large Yards</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Maxsa Innovations 44449 runs two large LED heads on a single solar panel and pushes enough light to cover a 40-foot perimeter arc. If you have a quarter-acre lot with a dark back corner and a detached garage, this is the fixture that actually handles it. The dual heads aim separately, so you can cover the garage wall and the yard beyond it from a single mount point.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It is heavier and more substantial-looking than the compact options, but the build quality shows. The panel is large enough to charge even in partly cloudy conditions, and the motion range extends to 30 feet. At just over $50, it costs more than two budget two-packs, but for a large yard that needs genuine nighttime visibility it is a better investment than doubling up on weaker lights.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/maxsa-innovations-44449-dp-solar-security-lighting-dual-head.jpg" alt="Maxsa Innovations 44449-DP Solar Security Lighting Dual Head" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Maxsa Innovations 44449-DP Solar Security Lighting Dual Head</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$54</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Dual independently aimed heads and a 30-foot sensor range make this the right pick for large backyards and detached garages.</p>
            <a
              href="https://www.amazon.com/s?k=Maxsa%20Innovations%2044449%20Solar%20Security%20Lighting%20Dual%20Head%20outdoor&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Solar Flood Light Installation</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Angle the panel south.</strong> Solar lights charge fastest when the panel faces true south at roughly a 30 to 45 degree tilt. Even a quarter-turn off south can cut daily charge by 20 percent.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check for shade before you commit to a location.</strong> A light mounted under a roof overhang or tree canopy will underperform no matter how sunny your yard is. Walk the spot at noon and watch for shadows before drilling.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match lumen output to the task.</strong> Path and step lighting needs 400 to 800 lumens. Driveways and garage walls need 1,500 to 2,500. Buying more lumens than you need just drains the battery faster.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Switch to motion-only mode in winter.</strong> In months with fewer daylight hours, always-on mode can drain the battery before midnight. Motion-trigger mode from November through February extends reliable run time significantly.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Wipe the panel twice a year.</strong> Dust, pollen, and bird droppings can cut solar panel efficiency by 15 to 25 percent over a season. A damp cloth in spring and fall keeps charge rates consistent.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do solar flood lights work in cloudy climates?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">They do, but with reduced run time. Most modern solar security lights charge off diffuse light and will run motion-trigger mode through one night after a partly cloudy day. Always-on mode requires more direct sun to run reliably past midnight.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many lumens do I need for backyard security lighting?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a typical residential backyard, 1,500 to 2,500 lumens per fixture handles the security job well. Landscape uplighting needs far less, around 400 to 800 lumens. Path lighting sits in between at 600 to 1,000 lumens.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave solar flood lights out all winter?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most are rated for temperatures down to negative 4 degrees Fahrenheit, so cold is not the issue. Snow covering the panel is. If you get regular snowfall, clear the panel after storms or the light simply will not charge.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between motion-sensor mode and always-on mode on solar lights?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Motion mode keeps the light off until triggered, which conserves battery for multiple nights of use. Always-on runs continuously from dusk until the battery depletes, typically 6 to 10 hours depending on panel size. Most fixtures offer both, plus a hybrid dim-always-on mode.</p>
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
