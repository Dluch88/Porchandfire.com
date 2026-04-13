import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Wireless Meat Thermometers for Grilling | Porch & Fire",
  description: "The best wireless meat thermometers for grilling in 2026, from the $49 ThermoPro TP-25 to the pro-grade ThermoWorks Signals with four probes.",
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
            Grills &amp; Cooking
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Wireless Meat Thermometers for Grilling
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 24, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A wireless meat thermometer changed how I grill. No more poking, guessing, or slicing into a brisket too early just to check the temp.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The difference between a dry pork loin and a juicy one is often 10 degrees and the confidence to pull it at the right moment. These thermometers give you that confidence without standing over the grill the whole time.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">For a quick weeknight chicken cook or a 12-hour brisket smoke, there&apos;s a setup here that fits your grill, your phone, and your budget.</p>


      {/* Product 1: Best True Wireless for Any Grill */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best True Wireless for Any Grill</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The MEATER Plus is the only probe on this list with zero wires to the grill. You push it into the meat, close the lid, and walk away. It monitors both the internal meat temp and the ambient grill temp using two sensors built into a single stainless probe.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Bluetooth range extends to about 165 feet with the included charging dock acting as a repeater. For most backyard setups, that gets you from the grill to the kitchen and back without losing signal. The companion app is well-designed and walks you through estimated finish times based on carry-over cooking, which is genuinely useful when you&apos;re trying to time dinner for eight guests.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It shines on gas and pellet grills where you don&apos;t want wires passing through a sealed lid. The main limitation is that it&apos;s a single probe, so you can&apos;t monitor two different cuts at once without buying a second one.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/meater-plus-wireless-meat-thermometer.jpg" alt="MEATER Plus Wireless Meat Thermometer" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">MEATER Plus Wireless Meat Thermometer</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$99</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The cleanest wireless option on the market, with dual sensors and a smart app that tells you exactly when to pull your meat.</p>
            <a
              href="https://www.amazon.com/s?k=MEATER%20Plus%20wireless%20meat%20thermometer&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Multi-Probe for Long Smokes */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Multi-Probe for Long Smokes</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you run a smoker for 10 to 14 hours at a stretch, the FireBoard 2 Drive is in a different league. It supports up to six probes simultaneously and connects via both WiFi and Bluetooth, so you get alerts on your phone even when you&apos;re well outside Bluetooth range.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The FireBoard app is dense with features but worth learning. You can log full cook sessions, set multi-stage alarms for different temps, and share cook data with a second person. For a brisket or a full pork shoulder where ambient pit temp matters as much as internal temp, having six probe slots means you can track both the stall and the dome temp at the same time.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $200 it&apos;s a serious investment, but if you&apos;re cooking for a crowd regularly or doing competition-style BBQ, the data and reliability earn their price. The probes are rated to 2,372 degrees and the build quality reflects what you paid.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/fireboard-2-drive-instant-read-and-leave-in-thermometer.jpg" alt="FireBoard 2 Drive Instant Read and Leave-In Thermometer" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">FireBoard 2 Drive Instant Read and Leave-In Thermometer</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$209</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Six-probe WiFi and Bluetooth thermometer built for serious smokers and long overnight cooks where reliability is non-negotiable.</p>
            <a
              href="https://www.amazon.com/s?k=FireBoard%202%20Drive%20thermometer&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Budget Four-Probe Bluetooth */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Four-Probe Bluetooth</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The ThermoPro TP-25 handles four probes over Bluetooth for under $50, which makes it the easiest recommendation for anyone who grills regularly but doesn&apos;t want to spend triple digits. You can monitor four separate cuts, or use a couple probes for meat and one for ambient pit temp at the same time.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Bluetooth range runs to about 300 feet in open air, though walls and interference will cut that down. For most decks and patios, you&apos;ll stay connected from inside the house for most of your cook. The app is basic but functional, with high and low temp alerts you can set per probe.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It&apos;s a great fit for a Weber kettle or a charcoal grill where you&apos;re running multiple racks of ribs or a mix of chicken thighs and sausages. The accuracy holds up well across multiple cooks, and for the price, there&apos;s very little to complain about.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/thermopro-tp-25-wireless-bluetooth-meat-thermometer-with-4-probes.jpg" alt="ThermoPro TP-25 Wireless Bluetooth Meat Thermometer with 4 Probes" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">ThermoPro TP-25 Wireless Bluetooth Meat Thermometer with 4 Probes</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$49.99</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Four probes, solid Bluetooth range, and a functional app at a price that makes it a no-brainer for everyday grillers.</p>
            <a
              href="https://www.amazon.com/s?k=ThermoPro%20TP-25%20Bluetooth%20meat%20thermometer%204%20probe&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Professional-Grade Accuracy */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Professional-Grade Accuracy</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">ThermoWorks makes the Thermapen, which is the gold standard of instant-read thermometers. Their Signals unit brings that same accuracy to a four-probe leave-in setup with both WiFi and Bluetooth connectivity. If you&apos;ve ever had a cheap probe read 15 degrees off and ruined a tri-tip, you understand exactly why accuracy matters here.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Signals connects to ThermoWorks&apos; free app and also works with third-party apps like BBQ Guru. Alarms are loud and adjustable, and the unit itself has a clear backlit display so you don&apos;t need your phone to check temps. The probes are fast and accurate across a wide temperature range, making this the pick for anyone doing competition-style cooking.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It&apos;s not cheap at around $250, and it doesn&apos;t have the wire-free elegance of the MEATER. But if accuracy and long-term reliability are your priorities over convenience, Signals earns its price every single cook.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/thermoworks-signals-4-channel-bbq-alarm-thermometer.jpg" alt="ThermoWorks Signals 4-Channel BBQ Alarm Thermometer" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">ThermoWorks Signals 4-Channel BBQ Alarm Thermometer</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$249</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The most accurate multi-probe option available, with WiFi and Bluetooth and ThermoWorks&apos; industry-leading probe quality.</p>
            <a
              href="https://www.amazon.com/s?k=ThermoWorks%20Signals%204%20channel%20BBQ%20alarm%20thermometer&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best for Guided Step-by-Step Grilling */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Guided Step-by-Step Grilling</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Weber Connect Smart Grilling Hub takes a different approach from every other thermometer on this list. Instead of just sending you data, it walks you through the cook step by step with notifications like &apos;flip your steak in 2 minutes&apos; based on real-time temp readings. It&apos;s built for people who are still developing their grilling instincts.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The hub connects via WiFi and supports up to four probes, though it ships with two. The app integrates with Weber&apos;s library of guided cook programs covering everything from reverse-sear ribeyes to whole spatchcock chicken. On a 10x10 patio where you&apos;re also managing sides and keeping an eye on guests, those push notifications take real pressure off.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It pairs naturally with Weber grills but works with any grill. The guided cook feature is less valuable for experienced grillers who already trust their instincts, but as a teaching tool for someone new to the craft, there&apos;s nothing quite like it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/weber-connect-smart-grilling-hub-gs-5200.jpg" alt="Weber Connect Smart Grilling Hub GS-5200" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Weber Connect Smart Grilling Hub GS-5200</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$129</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Step-by-step guided cook notifications with WiFi connectivity and up to four probes for grillers who want a real coaching experience.</p>
            <a
              href="https://www.amazon.com/s?k=Weber%20Connect%20Smart%20Grilling%20Hub%20GS-5200&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Compact Option for Small Grills and Travel */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Compact Option for Small Grills and Travel</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The INKBIRD IBT-4XS is the most portable thermometer on this list. The probes and the small Bluetooth transmitter pack into a compact case, making it easy to throw in a bag for a camping trip, a tailgate, or a small apartment balcony grill setup. It supports four probes and pairs quickly with the free INKBIRD app.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Range is solid at around 150 feet over Bluetooth, and the app lets you set individual temp alerts for each probe. On a 2-burner gas grill or a small charcoal kettle, four probes is more than enough, and the compact transmitter clips to the grill handle without getting in the way.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Battery life runs around 40 hours on a single charge, which gets you through multiple long cooks before you need to plug in. For the price, the build quality is better than you&apos;d expect, and probe response time is fast enough that you&apos;ll actually trust the readings.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/inkbird-ibt-4xs-bluetooth-wireless-grill-thermometer.jpg" alt="INKBIRD IBT-4XS Bluetooth Wireless Grill Thermometer" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">INKBIRD IBT-4XS Bluetooth Wireless Grill Thermometer</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$39.99</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Compact, portable four-probe Bluetooth thermometer that packs small and delivers reliable accuracy for everyday grilling and travel.</p>
            <a
              href="https://www.amazon.com/s?k=INKBIRD%20IBT-4XS%20Bluetooth%20meat%20thermometer&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Using a Wireless Meat Thermometer</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Probe placement matters more than brand.</strong> Insert the probe into the thickest part of the meat, away from bone and fat. Bone conducts heat faster, so probing near it gives you a falsely high reading.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Calibrate before you trust it.</strong> Drop your probe into boiling water (212 degrees at sea level) or ice water (32 degrees) when you first get it. If it reads off, most apps let you dial in an offset to correct it.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set two alerts, not one.</strong> Set a warning temp about 10 degrees before your target and a separate pull temp. The early warning gives you time to move the meat off direct heat before it overshoots your target.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">WiFi beats Bluetooth for overnight cooks.</strong> Bluetooth needs your phone within range, which means sleeping with your phone nearby or risking a missed alert. WiFi thermometers send push notifications that can wake you from inside the house.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Don&apos;t skip the ambient probe.</strong> Most multi-probe thermometers let you dedicate one probe to grill temp. The built-in lid thermometer on your grill is usually off by 25 to 50 degrees. Knowing your actual cooking temperature is the difference between consistent results and constant guessing.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Let the probe warm up before inserting.</strong> Cold probes inserted into a hot grill can temporarily read low before stabilizing. Give it 30 to 60 seconds after the initial reading settles before trusting the number.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best wireless meat thermometer for smoking brisket?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The FireBoard 2 Drive is the top pick for long brisket smokes. It handles six probes over WiFi so you can track both internal meat temp and pit ambient temp through a 12-hour cook without needing to stay near the smoker.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How far does a Bluetooth meat thermometer reach?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most Bluetooth thermometers advertise 150 to 300 feet in open air, but walls and interference cut that range down significantly. Expect reliable signal of 50 to 100 feet in a typical backyard-to-kitchen setup. For longer range, go with a WiFi model like the FireBoard 2 or Weber Connect.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a wireless meat thermometer on a gas grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, all of the thermometers on this list work on gas grills. The MEATER Plus is the cleanest option for gas since the probe is fully wireless and you never need to route wires through the grill lid.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is the MEATER Plus worth the price over a cheaper probe thermometer?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">If you want a completely wire-free setup and value the guided cook feature, yes. If you want to monitor multiple cuts at once without buying a second probe, the ThermoPro TP-25 at $49 gives you four probes and a solid app for a fraction of the cost.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many probes do I actually need for backyard grilling?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For most grilling, two probes is plenty. One goes in the meat, one clips near the grate to track ambient temp. You only need four or more if you&apos;re running multiple large cuts at the same time, or if you want redundancy on a long smoke.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-charcoal-smokers-backyard-bbq" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Charcoal Smokers Backyard Bbq</p>
          </Link>
          <Link href="/blog/best-gas-grills-under-400" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Gas Grills Under 400</p>
          </Link>
          <Link href="/blog/best-charcoal-grills-under-300" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Charcoal Grills Under 300</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
