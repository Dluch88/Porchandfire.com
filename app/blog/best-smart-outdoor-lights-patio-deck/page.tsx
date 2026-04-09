import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Smart Outdoor Lights for Patio and Deck | Porch & Fire',
  description: 'Top app-controlled smart outdoor lights for patios and decks. From Philips Hue spotlights to Govee rope lights, starting at $35.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-smart-outdoor-lights-patio-deck.jpg"
          alt="Best Smart Outdoor Lights for Patio and Deck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Lighting
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Smart Outdoor Lights for Patio and Deck
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Smart outdoor lighting does something regular lights cannot: it changes the whole feel of your backyard without you leaving the couch. One tap on your phone shifts the patio from a bright dinner setup to something low and warm for a late evening.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The real jump in quality comes from lights that respond to schedules, motion, and scenes. If you are entertaining on a Friday and want the whole deck glowing in a specific color by 7pm, that is a five-second setup in an app.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover every part of a patio or deck, from permanent architectural lights to string kits to smart bulbs you drop into your existing fixtures. Each one works with Alexa or Google Home and has a mobile app that actually makes sense.</p>


      {/* Product 1: Best Outdoor Smart Spotlight for Uplighting */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Smart Spotlight for Uplighting</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Philips Hue Lily Outdoor Spot Light is the one to get if you have trees, garden beds, or architectural features worth showing off at night. Each fixture throws a focused beam you can adjust from a warm white all the way through the full color spectrum. On a 12x15 patio with two ornamental grasses flanking the entrance, two of these make the whole corner look intentional.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Hue lights require the Hue Bridge for full functionality, which is a small box that plugs into your router. Once that is set up, the Zigbee connection is rock solid. You can group these with your indoor bulbs and trigger outdoor scenes from a single shortcut. The IP65 weatherproofing holds up through rain, freezing temps, and months of direct sun without any issues.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/philips-hue-white-color-ambiance-lily-outdoor-spot-light-2-pack.jpg" alt="Philips Hue White &amp; Color Ambiance Lily Outdoor Spot Light 2-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Philips Hue White &amp; Color Ambiance Lily Outdoor Spot Light 2-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$220</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Full-color Zigbee spotlights with IP65 weatherproofing, perfect for uplighting plants or architectural features on any deck or garden path.</p>
            <a
              href="https://www.amazon.com/s?k=Philips%20Hue%20White%20Color%20Ambiance%20Lily%20Outdoor%20Spot%20Light%202%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Smart String Lights for a Pergola or Patio Cover */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Smart String Lights for a Pergola or Patio Cover</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Kasa Smart Outdoor String Lights EP40 runs 48 feet and uses individual G40 globe bulbs that are dimmable through the Kasa app or your voice assistant. These are not the kind of string lights that only go on or off. You can set them to 20 percent for a quiet Tuesday night dinner or crank them up for a party with eight people under a 16x20 covered patio.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">No hub is required. The EP40 connects directly to your 2.4GHz WiFi and shows up in your smart home within a few minutes. Kasa&apos;s scheduling feature is reliable. Set them to come on at dusk and off at midnight, and they just do it without you thinking about it. The shatter-resistant bulbs hold up in weather, and the overall build quality is a step above cheaper import string lights.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kasa-smart-outdoor-string-lights-ep40-48ft-g40.jpg" alt="Kasa Smart Outdoor String Lights EP40 48ft G40" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kasa Smart Outdoor String Lights EP40 48ft G40</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Hub-free WiFi string lights with dimmable G40 globe bulbs, shatter-resistant for all-weather use, works with Alexa and Google Home.</p>
            <a
              href="https://www.amazon.com/s?k=Kasa%20Smart%20Outdoor%20String%20Lights%20EP40%2048ft%20G40&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Color-Changing Rope Light for Deck Rails */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Color-Changing Rope Light for Deck Rails</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Govee&apos;s RGBIC Outdoor Neon Rope Light is what you run along the underside of a deck rail, around a fire pit seating area, or tucked under a step to create a glow effect. The RGBIC design means individual segments can display different colors at the same time, so you get a gradient or flowing effect rather than one flat color across the whole strip.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It is rated IP67, which handles rain without any issues. The Govee Home app has a music sync mode that picks up on sound and shifts the lighting in rhythm, which is a genuinely good feature for outdoor parties. For a 10x12 deck, two 32.8-foot reels give you full perimeter coverage with some left over. These also work with Alexa and Google Home for voice control.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/govee-rgbic-outdoor-neon-rope-light-32-8ft.jpg" alt="Govee RGBIC Outdoor Neon Rope Light 32.8ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Govee RGBIC Outdoor Neon Rope Light 32.8ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$50</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">IP67-rated color rope light with individual segment color control and music sync mode, made for deck rails, fences, and patio edges.</p>
            <a
              href="https://www.amazon.com/s?k=Govee%20RGBIC%20Outdoor%20Neon%20Rope%20Light%2032.8ft%20IP67&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Smart Motion Flood Light for Decks and Side Yards */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Smart Motion Flood Light for Decks and Side Yards</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Ring Smart Lighting Floodlight pairs two bright LED heads with motion detection that feeds directly into the Ring app. Unlike the camera versions, this is just a light, which keeps the price down and removes any privacy complications. Motion zones are adjustable, so you can tell it to respond only to movement on the deck steps and not to every car passing the edge of the property.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It runs on a wired connection, but Ring also makes a battery version if your deck does not have an existing outdoor fixture. The integration with Alexa is tighter than most since Ring is Amazon-owned. You can trigger it manually from an Echo device, set it to activate when another Ring sensor detects motion, or run simple schedules. For a back deck that also serves as a path to the yard, this combination of security and ambient lighting actually works.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ring-smart-lighting-floodlight-wired.jpg" alt="Ring Smart Lighting Floodlight Wired" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ring Smart Lighting Floodlight Wired</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$90</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">16,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Adjustable motion-sensor LED floodlight that connects to the Ring ecosystem, with manual and automated control via the Ring app and Alexa.</p>
            <a
              href="https://www.amazon.com/s?k=Ring%20Smart%20Lighting%20Floodlight%20Wired%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Smart Bulb for Existing Outdoor Sconces and Lanterns */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Smart Bulb for Existing Outdoor Sconces and Lanterns</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you already have outdoor sconces, post lights, or lantern fixtures, the LIFX Color A19 Smart Bulb is the fastest upgrade you can make. Screw it in, download the app, and within five minutes you have a full-color smart bulb that needs no hub and no extra hardware. For a front porch with two flanking lanterns, two of these turn a standard entry light into something you can program for holidays, evening ambiance, or just a consistent warm white.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">LIFX bulbs run on WiFi directly and have always had some of the best color accuracy and brightness of any smart bulb. The A19 hits 1100 lumens at full power, which is a lot for a porch light. Alexa and Google Home both recognize it without issues, and the sunrise/sunset automation works reliably. These cost a bit more per bulb than Wyze or Sengled, but the build quality and color depth are noticeably better.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lifx-color-a19-1100-lumens-smart-led-bulb.jpg" alt="LIFX Color A19 1100 Lumens Smart LED Bulb" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">LIFX Color A19 1100 Lumens Smart LED Bulb</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$35</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">13,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Hub-free WiFi bulb with 1100-lumen output and full color spectrum, drops into any standard E26 outdoor fixture for instant smart control.</p>
            <a
              href="https://www.amazon.com/s?k=LIFX%20Color%20A19%201100%20lumens%20smart%20LED%20bulb%20E26&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Permanent Smart Lights for Under Eaves or Deck Fascia */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Permanent Smart Lights for Under Eaves or Deck Fascia</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Govee Permanent Outdoor Lights are the step up when you want smart lighting built into the house itself, not just hung on it. These mount under your eaves, along deck fascia, or under a pergola beam and stay there year-round. Each node is individually controlled, so you get multi-color gradient effects in a fixture that looks clean and intentional from the street.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Installation takes a couple of hours and some basic electrical knowledge, but once it is done you have a system that responds to preset holiday scenes, custom color patterns, music sync, and full Alexa and Google Home control. The app has prebuilt scenes for Christmas, Halloween, and the Fourth of July that save a lot of setup time. For a house with a large deck, a 100-foot kit covers the full roofline and deck edge. This is the one purchase on this list that changes how your whole property looks at night.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/govee-permanent-outdoor-lights-rgbic-100ft.jpg" alt="Govee Permanent Outdoor Lights RGBIC 100ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Govee Permanent Outdoor Lights RGBIC 100ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$120</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Permanently mounted RGBIC eave lights with individual node control, holiday scene presets, and app or voice control for whole-home outdoor lighting.</p>
            <a
              href="https://www.amazon.com/s?k=Govee%20Permanent%20Outdoor%20Lights%20RGBIC%20100ft%20eave&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Setting Up Smart Outdoor Lights</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the IP rating before you buy.</strong> IP65 handles rain and hose spray. IP67 means the fixture can be submerged briefly. For open decks and patios that get direct rain, IP65 is the minimum you want.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">2.4GHz is the standard for smart lights.</strong> Most outdoor smart lights only support 2.4GHz WiFi, not 5GHz. Make sure your router broadcasts a separate 2.4GHz network and connect to that during setup.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use schedules tied to sunset, not clock time.</strong> Sunset-based automations adjust automatically as the seasons change. A fixed clock time means your lights come on in full daylight in summer.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Group lights by zone in your app.</strong> Put your deck string lights, flood light, and accent spots in the same group so you can control the whole setup with one tap or one voice command.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Test color temperature before settling.</strong> 2700K is warm and residential. 3000K is a bit crisper. Most smart bulbs let you dial this in. Warmer tones work better for relaxed patio settings.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Consider a hub for large setups.</strong> WiFi-based lights are fine for most people. If you have 10 or more outdoor devices, a Zigbee hub like the Philips Hue Bridge keeps things more stable and responsive.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do smart outdoor lights work with Alexa and Google Home?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most of them do. Govee, Kasa, Ring, and LIFX all support both Alexa and Google Home without extra steps. Philips Hue requires the Hue Bridge but then integrates cleanly with both platforms.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need a hub for smart outdoor lights?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most modern smart outdoor lights connect directly to your WiFi and require no hub at all. Philips Hue is the main exception because it uses Zigbee, which needs the Hue Bridge. The tradeoff is that Zigbee tends to be more reliable than WiFi for large setups.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What IP rating do outdoor smart lights need?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a covered porch or pergola, IP44 is the minimum. For open decks and patios that get direct rain, look for IP65 or higher. Anything near a pool or in range of sprinklers should be IP67.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can smart string lights work without WiFi or a phone?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most have a physical button on the controller for basic on and off. Some retain the last saved schedule even if WiFi drops. For full control including color and dimming, you need the app and an active connection.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many lumens do I need for patio string lights?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For ambient string lighting over a 12x16 patio, 150 to 250 total lumens across the string is plenty. Brighter is not always better for outdoor entertaining. You want enough light to see without washing out the warmth.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-accent-lighting-patio-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Lighting Patio Ideas</p>
          </Link>
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
