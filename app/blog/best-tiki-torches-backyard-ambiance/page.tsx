import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Tiki Torches for Backyard Ambiance | Porch & Fire',
  description: 'Top tiki torches for backyard and poolside ambiance in 2026, from classic bamboo to solar LED. Includes citronella picks starting at $17.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-tiki-torches-backyard-ambiance.jpg"
          alt="Best Tiki Torches for Backyard Ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Lighting
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Tiki Torches for Backyard Ambiance
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 23, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A row of lit tiki torches transforms an ordinary backyard into something that feels intentional. The warm flicker does more atmospheric work than almost any other outdoor lighting, and it costs far less than string lights or landscape fixtures.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The category has gotten more interesting over the past few years. You can still grab a pack of classic bamboo torches for under $50, but there are now solid solar options that skip the fuel entirely, heavy-duty metal designs built to last more than one season, and citronella-specific fuels that actually pull double duty as bug deterrents.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This list covers six distinct picks, from a classic four-pack for a large backyard to compact options for a 10x12 patio. Whatever your setup, one of these will fit.</p>


      {/* Product 1: Best Classic Bamboo Torch: TIKI Brand 72-Inch Bamboo Torch */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Classic Bamboo Torch: TIKI Brand 72-Inch Bamboo Torch</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want the genuine tiki torch look, the 72-inch bamboo option from TIKI Brand is the one most people end up with, and for good reason. The height clears most patio furniture so the flame sits at eye level when you&apos;re standing. A four-pack covers a 20-foot run of fence line or lines a 15x15 patio nicely when placed at the corners and midpoints.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The wick lighting is reliable. You get a snuffer cap on each torch so you&apos;re not blowing out an open flame, and the bamboo holds up through a full summer season without cracking if you store them properly over winter. These work with any standard torch fuel, including citronella blends, which makes them versatile if bug pressure is a concern in your yard.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $42 for the four-pack, they&apos;re the most cost-effective way to add serious ambiance fast. Line them along a garden path or cluster two near an outdoor dining table for a focused pool of warm light that candles can&apos;t match.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tiki-brand-1118072-72-inch-bamboo-torch-with-easy-lighting-wick-4-pack.jpg" alt="TIKI Brand 1118072 72-Inch Bamboo Torch with Easy-Lighting Wick, 4-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">TIKI Brand 1118072 72-Inch Bamboo Torch with Easy-Lighting Wick, 4-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$42</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The benchmark bamboo torch at a price that lets you buy enough to actually fill a backyard.</p>
            <a
              href="https://www.amazon.com/s?k=TIKI%20Brand%2072%20inch%20bamboo%20torch%204%20pack%20easy%20lighting%20wick&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Metal Torch for Longevity: Sunnydaze Heavy-Duty Galvanized Steel Torch */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Metal Torch for Longevity: Sunnydaze Heavy-Duty Galvanized Steel Torch</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Bamboo is traditional, but if you&apos;ve watched a bamboo torch warp or crack after one wet season, a galvanized steel option starts making a lot of sense. The Sunnydaze heavy-duty metal torch is built around a steel canister and pole that handles rain, humidity, and sun without degrading. It&apos;s a torch you&apos;re not replacing every year.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The canister is larger than most bamboo torch reservoirs, which means longer burn times. You get around five hours on a full canister versus the two to three you&apos;d expect from a standard bamboo torch. For an evening that stretches from dinner into late-night conversation, that difference matters.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These come in a two-pack, which works well for framing a seating area or flanking a fire pit. The adjustable stake works in both lawn and loose gravel, and the overall look is more refined than bamboo if you&apos;re going for a cleaner backyard aesthetic.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-heavy-duty-galvanized-steel-garden-torch-55-inch-set-of-2.jpg" alt="Sunnydaze Heavy-Duty Galvanized Steel Garden Torch, 55-Inch, Set of 2" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Heavy-Duty Galvanized Steel Garden Torch, 55-Inch, Set of 2</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A metal torch built to outlast several summers without rusting or warping.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20heavy%20duty%20galvanized%20steel%20garden%20torch%2055%20inch%20set%20of%202&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Solar Torch: Brightown Solar Tiki Torch with Flickering Flame */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar Torch: Brightown Solar Tiki Torch with Flickering Flame</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For anyone who wants the visual effect without dealing with fuel, refills, or open flames near a wood deck, the Brightown solar tiki torch is a genuinely good solution. The LED flame effect mimics a real flicker convincingly enough that most guests do a double take the first time they see it. It charges during the day and runs automatically at dusk.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These are the right pick for a pool deck where you&apos;re nervous about open flames near children, or for a rental property where you can&apos;t always be there to monitor things. The four-pack gives you enough to line a 25-foot run of fencing or border a patio completely.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Run time is typically six to eight hours on a full charge, which covers most evenings. They&apos;re not as dramatic as a real flame from a distance, but up close the flicker is convincing. The stakes push into lawn easily, and you can reposition them each season without any tools.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/brightown-solar-tiki-torch-with-flickering-flame-effect-4-pack.jpg" alt="Brightown Solar Tiki Torch with Flickering Flame Effect, 4-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Brightown Solar Tiki Torch with Flickering Flame Effect, 4-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$48</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The closest thing to real tiki torch ambiance without any fuel or open flame.</p>
            <a
              href="https://www.amazon.com/s?k=Brightown%20solar%20tiki%20torch%20flickering%20flame%204%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Citronella Fuel for Bug Deterrence: TIKI Brand BiteFighter Torch Fuel */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Citronella Fuel for Bug Deterrence: TIKI Brand BiteFighter Torch Fuel</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The torch itself matters less than what&apos;s burning in it if mosquitoes are your main problem. TIKI Brand BiteFighter torch fuel is specifically formulated to repel mosquitoes while it burns, combining citronella with eucalyptus oil. It works in any standard wick torch and burns cleaner than basic citronella fuel without the sooty residue on the canister.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 64-ounce bottle fills multiple torch canisters and gives you 40 to 50 total burn hours depending on wick size. If you&apos;re entertaining during peak mosquito season, running four torches with BiteFighter fuel creates a reasonably effective deterrent zone within about a 15-foot radius. It&apos;s not a complete solution, but it cuts down the annoyance significantly.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is also worth keeping on hand even if you already own torches, because most standard torch fuels don&apos;t have meaningful insect-repelling properties. The citronella scent is present but not overwhelming outdoors, unlike candles that can smell like a spa if you&apos;re sitting close.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tiki-brand-bitefighter-torch-fuel-64-oz.jpg" alt="TIKI Brand BiteFighter Torch Fuel, 64 oz" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">TIKI Brand BiteFighter Torch Fuel, 64 oz</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$17</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">12,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Citronella and eucalyptus torch fuel that actually helps keep mosquitoes out of your space.</p>
            <a
              href="https://www.amazon.com/s?k=TIKI%20Brand%20BiteFighter%20torch%20fuel%2064%20oz%20citronella%20eucalyptus&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best for a Small Patio: Bond Manufacturing Fiesta Torch, 5-Pack */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for a Small Patio: Bond Manufacturing Fiesta Torch, 5-Pack</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not every backyard has room for a row of 70-inch torches. On a 10x10 patio or a narrow side yard, a shorter torch at 48 inches keeps the flame visible without towering over your furniture or guests. Bond Manufacturing&apos;s Fiesta pack gives you five of them in a mix of colors that leans more festive than formal.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Each one has a decorative metal cap that gives it a slightly more finished look than plain bamboo. The snuffer is integrated into the cap, so you&apos;re not fishing around for a separate piece when the evening ends. The five-pack is genuinely useful because odd-numbered sets are harder to arrange awkwardly than pairs.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These are solid for a poolside border or a small garden party where you want a ring of light without committing to a big installation. They use standard wick torch fuel, so you can run citronella in them during summer and switch to standard fuel in the fall when bugs aren&apos;t a factor.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bond-manufacturing-60476-fiesta-garden-torch-5-pack.jpg" alt="Bond Manufacturing 60476 Fiesta Garden Torch, 5-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bond Manufacturing 60476 Fiesta Garden Torch, 5-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A five-pack of 48-inch torches that fit a small patio without overwhelming it.</p>
            <a
              href="https://www.amazon.com/s?k=Bond%20Manufacturing%20Fiesta%20garden%20torch%205%20pack%2048%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Decorative Metal Torch: Lamplight Farms Aristocrat Torch */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Decorative Metal Torch: Lamplight Farms Aristocrat Torch</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most tiki torches are purely functional. The Lamplight Farms Aristocrat torch is one that actually looks like a design decision rather than an afterthought. The copper-finish canister and scroll metalwork at the top give it a lantern-like quality that reads as intentional even in a polished backyard. If you have teak furniture or a more curated patio setup, plain bamboo can look out of place.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The canister holds enough fuel for around four hours of burn time, and the wick is replaceable, which matters for a torch at this price point. You&apos;re not throwing it away after a season. The stake is heavy gauge steel with a rubber grip at the top so you&apos;re not fighting with it when you push it into compacted soil.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This works best as an accent piece rather than primary lighting. Two of these flanking a seating area or a garden gate add visual interest that a plain bamboo torch just doesn&apos;t deliver. It runs on standard torch fuel and accepts citronella fuel without issue.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lamplight-farms-aristocrat-outdoor-torch-with-scroll-top.jpg" alt="Lamplight Farms Aristocrat Outdoor Torch with Scroll Top" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lamplight Farms Aristocrat Outdoor Torch with Scroll Top</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$32</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A copper-finish decorative torch that looks like a considered design choice rather than a hardware store pickup.</p>
            <a
              href="https://www.amazon.com/s?k=Lamplight%20Farms%20Aristocrat%20outdoor%20torch%20copper%20scroll%20top%20decorative&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Using Tiki Torches Safely and Effectively</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Space torches 6 to 8 feet apart.</strong> Closer than that and you get too much heat in one zone. Farther and the lighting feels scattered rather than intentional.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Let the wick soak before the first lighting.</strong> Pour in your fuel and wait 5 minutes before lighting a new torch. Trying to light a dry wick burns it unevenly and shortens its life.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Store torches upright and capped when not in use.</strong> Fuel evaporates quickly through an open canister, and leaving fuel sitting in a tipped-over torch is a spill risk you don&apos;t need.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Replace wicks when they get below half an inch.</strong> A worn-down wick produces a weak, unsteady flame and smokes more. Replacement wicks for most torch brands cost under $5 for a multi-pack.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep a bucket of sand nearby, not water.</strong> Sand smothers a torch fire quickly if something tips. Water can splash burning fuel and spread the problem instead of containing it.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long do tiki torches burn on a full canister?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most standard bamboo torches burn for 2 to 3 hours on a full canister. Larger metal torch canisters can stretch to 4 to 5 hours. Wind speeds up burn time considerably, so a breezy evening will burn through fuel faster than a calm one.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do citronella tiki torches actually repel mosquitoes?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">They help within a roughly 10 to 15 foot radius, but they&apos;re not a complete solution on their own. Running four or more torches with citronella or eucalyptus-based fuel creates a meaningful deterrent zone. Combining torches with a separate mosquito repellent for people works better than torches alone.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use any torch fuel in a bamboo tiki torch?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. Standard lamp oil, citronella torch fuel, and specialty formulas like TIKI BiteFighter all work in bamboo torches with a standard wick. Avoid using gasoline, kerosene, or any fuel not rated for outdoor torch use.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep tiki torches from blowing out in wind?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most standard tiki torches will struggle in sustained wind above 15 mph. Positioning them near a fence, wall, or hedge helps block gusts. Snuffer caps also prevent the fuel from getting agitated by wind when the torch is lit.</p>
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
          <Link href="/blog/best-mosquito-repellents-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Mosquito Repellents Patio</p>
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
