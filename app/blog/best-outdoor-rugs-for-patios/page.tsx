import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Rugs for Patios: 8 Picks That Handle Sun, Rain & Spills | PorchAndFire',
  description:
    'An outdoor rug ties your patio together and makes it feel like a real room. Here are 8 great options that can handle the elements without fading or molding.',
};

export default function BestOutdoorRugsForPatios() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Best Outdoor Rugs for Patios: 8 Picks That Handle Sun, Rain &amp; Spills
      </h1>

      <p className="text-gray-700 text-lg mb-6">
        An outdoor rug is one of the easiest ways to make your patio feel like a real
        living space. It adds color, defines your seating area, and makes bare feet
        happy on hot concrete. But not all rugs survive outdoors. Here are 8 picks
        that can handle sun, rain, and the occasional spilled drink without fading
        or growing mold.
      </p>

      <p className="text-sm text-gray-500 italic mb-10">
        Affiliate disclosure: Some of the links below are affiliate links, meaning we
        may earn a small commission if you make a purchase &mdash; at no extra cost to you.
        This helps support PorchAndFire so we can keep creating free guides like this one.
      </p>

      {/* What Makes a Good Outdoor Rug */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What Makes a Good Outdoor Rug?
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <span className="font-semibold">Polypropylene material</span> &mdash; This is
            the gold standard for outdoor rugs. It&apos;s UV-resistant, mold-resistant,
            and dries quickly. If a rug doesn&apos;t mention polypropylene (or
            &quot;olefin&quot;), think twice.
          </li>
          <li>
            <span className="font-semibold">Flat weave construction</span> &mdash; Flat-weave
            rugs don&apos;t trap water or debris the way thick, plush rugs do. They dry
            faster, clean easier, and lay flatter on uneven surfaces.
          </li>
          <li>
            <span className="font-semibold">Proper sizing</span> &mdash; Your rug should be
            large enough that all furniture legs sit on it, or at least the front legs.
            A rug that&apos;s too small looks like an afterthought. When in doubt, go
            bigger.
          </li>
        </ul>
      </section>

      {/* The 8 Picks */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          8 Best Outdoor Rugs for Patios
        </h2>

        {/* Pick 1 */}
        <div className="mb-8 border-b border-gray-200 pb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            1. Reversible Plastic Straw Rug (5&apos;x8&apos;)
          </h3>
          <p className="text-orange-500 font-semibold mb-3">Best Overall</p>
          <p className="text-gray-700 mb-3">
            These lightweight, reversible rugs are made from recycled plastic and come
            in dozens of patterns. They&apos;re incredibly easy to clean &mdash; just
            hose them off. The two-sided design means you get two looks from one rug.
            Perfect for patios, decks, camping, and even picnics.
          </p>
          <div className="mb-4 flex justify-center">
            <img src="/images/blog-photos/colorful-reversible-outdoor-rugs-stacked-together.jpg" alt="Colorful reversible outdoor rugs stacked together" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <a
            href="https://www.amazon.com/s?k=outdoor+reversible+plastic+straw+rug+5x8&tag=porchandfire-20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline hover:text-orange-600 font-medium"
          >
            Search on Amazon &rarr;
          </a>
        </div>

        {/* Pick 2 */}
        <div className="mb-8 border-b border-gray-200 pb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            2. Flat-Weave Polypropylene Rug (6&apos;x9&apos;)
          </h3>
          <p className="text-orange-500 font-semibold mb-3">Best for Durability</p>
          <p className="text-gray-700 mb-3">
            If you want something that feels more like a &quot;real&quot; rug, a
            flat-weave polypropylene in 6&apos;x9&apos; is the way to go. It has a
            tighter weave, more pattern options, and a slightly more refined look than
            plastic straw. UV-resistant so colors stay vibrant season after season.
          </p>
          <div className="mb-4 flex justify-center">
            <img src="/images/blog-photos/close-up-of-colorful-woven-flat-weave-rug-texture.jpg" alt="Close-up of colorful woven flat-weave rug texture" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <a
            href="https://www.amazon.com/s?k=outdoor+flat+weave+rug+6x9+polypropylene&tag=porchandfire-20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline hover:text-orange-600 font-medium"
          >
            Search on Amazon &rarr;
          </a>
        </div>

        {/* Pick 3 */}
        <div className="mb-8 border-b border-gray-200 pb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            3. Budget Waterproof Rug (4&apos;x6&apos;)
          </h3>
          <p className="text-orange-500 font-semibold mb-3">Best Budget Pick</p>
          <p className="text-gray-700 mb-3">
            Not ready to spend $100+ on an outdoor rug? A 4&apos;x6&apos; waterproof rug
            is a great entry point. Works well under a bistro set or in front of a bench.
            At this price, you can replace it every couple of seasons without guilt.
          </p>
          <div className="mb-4 flex justify-center">
            <img src="/images/blog-photos/close-up-of-a-budget-friendly-waterproof-outdoor-rug-with-fl.jpg" alt="Close-up of a budget-friendly waterproof outdoor rug with floral pattern" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <a
            href="https://www.amazon.com/s?k=outdoor+area+rug+4x6+waterproof&tag=porchandfire-20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline hover:text-orange-600 font-medium"
          >
            Search on Amazon &rarr;
          </a>
        </div>

        {/* Pick 4 */}
        <div className="mb-8 border-b border-gray-200 pb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            4. Large Patio Rug (9&apos;x12&apos;)
          </h3>
          <p className="text-orange-500 font-semibold mb-3">Best for Large Spaces</p>
          <p className="text-gray-700 mb-3">
            If you have a big patio or a full outdoor living room setup, go big. A
            9&apos;x12&apos; rug anchors your furniture and makes the whole area feel
            intentional. It&apos;s a game-changer for open patios that feel &quot;empty&quot;
            &mdash; suddenly everything has a purpose.
          </p>
          <div className="mb-4 flex justify-center">
            <img src="/images/blog-photos/large-rug-on-a-spacious-decorated-outdoor-patio.jpg" alt="Large rug on a spacious decorated outdoor patio" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <a
            href="https://www.amazon.com/s?k=outdoor+rug+9x12+patio&tag=porchandfire-20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline hover:text-orange-600 font-medium"
          >
            Search on Amazon &rarr;
          </a>
        </div>

        {/* Pick 5 */}
        <div className="mb-8 border-b border-gray-200 pb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            5. Black &amp; White Striped Rug
          </h3>
          <p className="text-orange-500 font-semibold mb-3">Best for Modern Style</p>
          <p className="text-gray-700 mb-3">
            A black and white striped rug is timeless and works with almost any
            furniture style. It adds visual interest without clashing with cushion
            colors or planters. This is the &quot;little black dress&quot; of outdoor
            rugs &mdash; simple, classic, always in style.
          </p>
          <div className="mb-4 flex justify-center">
            <img src="/images/blog-photos/black-and-white-striped-textile-rug-pattern.jpg" alt="Black and white striped textile rug pattern" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <a
            href="https://www.amazon.com/s?k=black+white+striped+outdoor+rug&tag=porchandfire-20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline hover:text-orange-600 font-medium"
          >
            Search on Amazon &rarr;
          </a>
        </div>

        {/* Pick 6 */}
        <div className="mb-8 border-b border-gray-200 pb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            6. Moroccan Bohemian Rug
          </h3>
          <p className="text-orange-500 font-semibold mb-3">Best for Boho Style</p>
          <p className="text-gray-700 mb-3">
            If your patio has macrame, hanging plants, and rattan furniture, a
            Moroccan-inspired boho rug ties it all together. Look for geometric patterns
            in earthy tones &mdash; terracotta, navy, cream. These rugs add warmth and
            personality to any outdoor space.
          </p>
          <div className="mb-4 flex justify-center">
            <img src="/images/blog-photos/traditional-colorful-moroccan-bohemian-rugs-and-carpets.jpg" alt="Traditional colorful Moroccan bohemian rugs and carpets" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <a
            href="https://www.amazon.com/s?k=bohemian+moroccan+outdoor+rug&tag=porchandfire-20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline hover:text-orange-600 font-medium"
          >
            Search on Amazon &rarr;
          </a>
        </div>

        {/* Pick 7 */}
        <div className="mb-8 border-b border-gray-200 pb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            7. Round Outdoor Rug (6&apos;)
          </h3>
          <p className="text-orange-500 font-semibold mb-3">Best for Bistro Sets &amp; Fire Pits</p>
          <p className="text-gray-700 mb-3">
            Round rugs work beautifully under round tables, bistro sets, or as a
            statement piece around a fire pit area. A 6-foot diameter is a versatile
            size. They soften the look of square patios and add unexpected visual
            interest.
          </p>
          <div className="mb-4 flex justify-center">
            <img src="/images/blog-photos/blue-and-white-round-patterned-rug.jpg" alt="Blue and white round patterned rug" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <a
            href="https://www.amazon.com/s?k=round+outdoor+rug+6+feet&tag=porchandfire-20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline hover:text-orange-600 font-medium"
          >
            Search on Amazon &rarr;
          </a>
        </div>

        {/* Pick 8 */}
        <div className="mb-8 pb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            8. Quick-Dry Pool Area Rug
          </h3>
          <p className="text-orange-500 font-semibold mb-3">Best for Pool Decks</p>
          <p className="text-gray-700 mb-3">
            Pool areas need rugs that can handle constant splashing and wet feet. Look
            for quick-dry construction with drainage holes or a mesh backing. These rugs
            are designed to never hold standing water &mdash; they dry in hours, not
            days.
          </p>
          <div className="mb-4 flex justify-center">
            <img src="/images/blog-photos/pool-deck-area-with-lounge-chairs-perfect-for-quick-dry-rugs.jpg" alt="Pool deck area with lounge chairs - perfect for quick-dry rugs" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <a
            href="https://www.amazon.com/s?k=quick+dry+outdoor+rug+pool&tag=porchandfire-20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline hover:text-orange-600 font-medium"
          >
            Search on Amazon &rarr;
          </a>
        </div>
      </section>

      {/* Sizing Guide */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Outdoor Rug Sizing Guide
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="py-2 pr-4 text-gray-900 font-semibold">Space</th>
                <th className="py-2 pr-4 text-gray-900 font-semibold">Recommended Size</th>
                <th className="py-2 text-gray-900 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">Small balcony</td>
                <td className="py-2 pr-4">3&apos;x5&apos; or 4&apos;x6&apos;</td>
                <td className="py-2">Bistro set, single chair</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">Medium patio</td>
                <td className="py-2 pr-4">5&apos;x8&apos; or 6&apos;x9&apos;</td>
                <td className="py-2">4-piece conversation set, small dining</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">Large patio</td>
                <td className="py-2 pr-4">8&apos;x10&apos; or 9&apos;x12&apos;</td>
                <td className="py-2">Sectional, full dining set</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">Fire pit area</td>
                <td className="py-2 pr-4">6&apos; round or 8&apos;x10&apos;</td>
                <td className="py-2">Chairs around a fire pit</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">Entryway / porch</td>
                <td className="py-2 pr-4">2&apos;x3&apos; or 3&apos;x5&apos;</td>
                <td className="py-2">Doormat area, accent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Care Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Outdoor Rug Care Tips
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <span className="font-semibold">Shake and sweep regularly</span> &mdash;
            Flip the rug and shake out dirt and debris at least once a week.
          </li>
          <li>
            <span className="font-semibold">Hose it down monthly</span> &mdash; Spray
            with a garden hose and let it air dry completely before putting it back.
          </li>
          <li>
            <span className="font-semibold">Spot clean stains</span> &mdash; Mild soap
            and water work for most spills. Avoid bleach unless the manufacturer
            recommends it.
          </li>
          <li>
            <span className="font-semibold">Lift periodically</span> &mdash; Peel the rug
            up every few weeks to let the surface underneath dry. This prevents mold
            growth between the rug and the patio.
          </li>
          <li>
            <span className="font-semibold">Store for winter</span> &mdash; If you get
            harsh winters, roll the rug up and store it in a dry place. It&apos;ll last
            significantly longer.
          </li>
        </ul>
      </section>

      {/* Final Thoughts */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Final Thoughts
        </h2>
        <p className="text-gray-700">
          An outdoor rug is one of the lowest-effort, highest-impact upgrades you can
          make to your patio. It instantly makes the space feel more finished and
          inviting. Stick with polypropylene or recycled plastic, size up rather than
          down, and clean it regularly &mdash; your rug will last for years and make
          your outdoor space feel like a true extension of your home.
        </p>
      </section>

      <div className="mt-12 border-t border-gray-200 pt-6">
        <Link href="/blog" className="text-orange-500 hover:text-orange-600 font-medium">
          &larr; Back to all articles
        </Link>
      </div>
    </main>
  );
}
