import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Set Up a Backyard Movie Night | Porch & Fire',
  description: 'The best outdoor projector screens, inflatable loungers, and speakers for a backyard movie night, starting at $34.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-outdoor-movie-night-backyard-setup.jpg"
          alt="How to Set Up a Backyard Movie Night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Living
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Set Up a Backyard Movie Night
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 29, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A backyard movie night sounds simple until you realize you have no idea where to start. The screen needs to actually be visible, the audio needs to carry across an open yard, and your guests need somewhere comfortable to sit that isn&apos;t folding chairs dragged out from the garage.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The good news is you don&apos;t need a huge yard or a big budget to make this work. A 15x20 foot patch of grass is plenty. The right five pieces of gear can make your backyard look and sound genuinely impressive.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Here&apos;s what to buy and how to put it all together, from the screen down to the mood lighting.</p>


      {/* Product 1: Best Outdoor Projector Screen for Backyard Movie Nights */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Projector Screen for Backyard Movie Nights</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Elite Screens Yard Master 2 is the screen that makes everything else come together. It sets up in about 10 minutes, holds its shape in a light breeze, and the wrinkle-free material means your picture looks clean from the moment you unroll it. The 100-inch size is the sweet spot for a group of 8 to 12 people sitting on a 20-foot lawn.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">What separates this from cheap tarp-style screens is the frame tension. The material pulls taut and stays that way, so you&apos;re not constantly adjusting or fighting wind sag. It folds down into a carry bag about the size of a hockey bag, which means setup and teardown don&apos;t eat your whole evening.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/elite-screens-yard-master-2-100-inch-outdoor-projector-screen.jpg" alt="Elite Screens Yard Master 2 100-inch Outdoor Projector Screen" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Elite Screens Yard Master 2 100-inch Outdoor Projector Screen</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$159</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A pop-up frame screen with tensioned, wrinkle-free material that stays put in light wind and sets up in 10 minutes.</p>
            <a
              href="https://www.amazon.com/s?k=Elite%20Screens%20Yard%20Master%202%20100%20inch%20outdoor%20projector%20screen&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Portable Projector for Backyard Movie Nights */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Portable Projector for Backyard Movie Nights</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Anker Nebula Capsule 3 Laser fits in a backpack but puts out 300 ANSI lumens, which is enough to produce a sharp, colorful image once the sun goes down. It connects to your phone or laptop over Wi-Fi, runs Android TV natively, and the battery holds about 2.5 hours on a charge, covering most movies without a power cord. Automatic keystone correction handles minor angle adjustments so you&apos;re not fussing with placement for 20 minutes.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 15x20 foot backyard, position it about 10 to 12 feet back from a 100-inch screen and you&apos;ll fill the whole surface cleanly. It&apos;s not a permanent install, but that&apos;s the point. You bring it out when you want it, and it lives in a drawer the rest of the time.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/anker-nebula-capsule-3-laser-mini-smart-projector.jpg" alt="Anker Nebula Capsule 3 Laser Mini Smart Projector" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Anker Nebula Capsule 3 Laser Mini Smart Projector</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$479</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A genuinely portable laser projector with built-in Android TV that delivers a crisp image in a fully dark backyard.</p>
            <a
              href="https://www.amazon.com/s?k=Anker%20Nebula%20Capsule%203%20Laser%20mini%20smart%20projector&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Inflatable Seating for a Backyard Movie Night */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Inflatable Seating for a Backyard Movie Night</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Wekapo Inflatable Lounger is the product that gets the most questions at any outdoor movie setup. It looks like a hammock crossed with a couch and inflates in about 30 seconds by swinging it through the air, no pump required. Two of them side by side comfortably seat three adults, and they&apos;re stable enough that you can set a drink on the flat armrest area without it tipping.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">They work on grass, on a deck, or on a concrete patio with a blanket underneath. They deflate and stuff into a bag smaller than a sleeping bag, so storage isn&apos;t a problem. For a crowd of 6 to 8 people, grab two or three of these and fill in the rest with outdoor rugs and floor cushions.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/wekapo-inflatable-lounger-air-sofa-hammock.jpg" alt="Wekapo Inflatable Lounger Air Sofa Hammock" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Wekapo Inflatable Lounger Air Sofa Hammock</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$47</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">18,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A no-pump inflatable lounger that sets up in 30 seconds and seats two adults comfortably without tipping.</p>
            <a
              href="https://www.amazon.com/s?k=Wekapo%20Inflatable%20Lounger%20Air%20Sofa%20Hammock&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Outdoor Speaker for Movie Night Audio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Speaker for Movie Night Audio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Movie audio is what separates a real outdoor cinema from someone watching Netflix on a laptop in the backyard. The Bose SoundLink Flex delivers full, clear sound that carries across an open yard without distorting at high volume. It&apos;s IP67 waterproof, so a surprise sprinkle won&apos;t ruin the night, and the battery holds 12 hours on a charge.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a group of 8 to 10 people on a 20-foot lawn, one SoundLink Flex is enough. For a bigger crowd or a longer yard, pair two of them in stereo mode through the Bose Connect app. Position it at the base of your screen stand pointed back toward your guests and the dialogue stays clean even on loud action sequences.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bose-soundlink-flex-bluetooth-portable-speaker.jpg" alt="Bose SoundLink Flex Bluetooth Portable Speaker" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bose SoundLink Flex Bluetooth Portable Speaker</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$149</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">22,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Loud, clear, and weatherproof with 12 hours of battery life, and pairs in stereo for bigger backyards.</p>
            <a
              href="https://www.amazon.com/s?k=Bose%20SoundLink%20Flex%20Bluetooth%20Speaker&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best String Lights for Movie Night Atmosphere */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best String Lights for Movie Night Atmosphere</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">String lights around your setup do two things. They create the right mood while people are finding their seats before the film starts, and they make it easy for guests to move around the yard safely without you having to flip on a porch light that would wash out your screen. The DEWENWILS 50-foot outdoor string lights use G40 globe bulbs on a weatherproof cord, and the warm white color doesn&apos;t compete with your projected image.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Hang them from a pergola, string them between two shepherd&apos;s hooks, or run them along the fence line bordering your screening area. Keep them off to the sides and behind the seating, not directly above the screen. Dimmed to about half brightness, they add exactly the right amount of ambient light without hurting picture quality.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/dewenwils-outdoor-string-lights-50ft-g40-globe-bulbs.jpg" alt="DEWENWILS Outdoor String Lights 50ft G40 Globe Bulbs" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">DEWENWILS Outdoor String Lights 50ft G40 Globe Bulbs</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$34</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Warm globe string lights on a weatherproof cord that set the mood without washing out your projected image.</p>
            <a
              href="https://www.amazon.com/s?k=DEWENWILS%2050ft%20outdoor%20string%20lights%20G40%20globe%20bulbs&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Outdoor Movie Nights</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Wait for full dark.</strong> Even 300-lumen projectors need real darkness to look their best. Start the film 30 to 45 minutes after sunset, not at dusk.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Kill every nearby light source.</strong> Porch lights, pathway lights, and lit pool features all compete with your image. Turn off anything in the direction of the screen before you start.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a projector stand, not a table.</strong> A dedicated stand keeps your throw angle consistent and prevents the image from shifting when someone bumps the table.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set up a snack station off to the side.</strong> A small folding table with drinks, popcorn, and napkins keeps people from walking in front of the projector beam every five minutes.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Have blankets ready before the movie starts.</strong> Summer evenings cool down faster than you expect. Stacking a few throws near the seating area means nobody has to miss part of the movie to go inside.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Deal with bugs before guests arrive.</strong> Mosquitoes show up right at dusk. Citronella torches or a perimeter spray applied an hour before the movie buys you a comfortable evening.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What projector do I need for an outdoor movie night?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">You need at least 200 ANSI lumens for a fully dark backyard. A laser projector like the Anker Nebula Capsule 3 at 300 lumens gives you better color and sharpness than LED models at the same brightness rating. Anything under 100 lumens will look washed out even in good conditions.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How big should an outdoor movie screen be?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a group of 6 to 12 people, 100 inches is the standard. Seat people no closer than 8 feet and no farther than 20 feet from the screen for a comfortable viewing angle. Bigger groups on longer lawns can go up to 120 inches.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you do an outdoor movie night without a projector?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">You can mount a large outdoor TV on a rolling stand, but anything under 75 inches looks small in an open yard with a group. A projector and screen setup almost always delivers a bigger image for less money.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep bugs away during an outdoor movie?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Citronella torches or candles set around the perimeter help, and a personal mosquito repellent spray is the most reliable option. Avoid leaving standing water nearby in the days before your event, since that&apos;s where mosquitoes breed.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          <Link href="/blog/best-outdoor-bluetooth-speakers" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Bluetooth Speakers</p>
          </Link>
          <Link href="/blog/best-outdoor-string-lights-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor String Lights Patio</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
