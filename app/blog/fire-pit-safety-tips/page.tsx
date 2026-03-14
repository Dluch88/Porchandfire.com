import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fire Pit Safety: 12 Essential Tips Every Homeowner Needs to Know | PorchAndFire',
  description:
    'Keep your family safe around the fire. These 12 fire pit safety rules cover placement, fuel, kids, pets, and emergency prep.',
};

export default function FirePitSafetyTips() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Fire Pit Safety: 12 Essential Tips Every Homeowner Needs to Know
      </h1>

      <p className="text-gray-700 text-lg mb-6">
        A backyard fire pit is one of the best investments you can make for your
        outdoor space. But fire demands respect. Every year, thousands of home fires
        start outdoors &mdash; and many are preventable. These 12 safety tips will
        help you enjoy your fire pit with confidence, knowing you&apos;re keeping
        your family, pets, and property safe.
      </p>

      <p className="text-sm text-gray-500 italic mb-10">
        Affiliate disclosure: Some of the links below are affiliate links, meaning we
        may earn a small commission if you make a purchase &mdash; at no extra cost to you.
        This helps support PorchAndFire so we can keep creating free guides like this one.
      </p>

      {/* Placement Rules */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Placement Rules
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              <span className="text-orange-500">1.</span> Keep 10&ndash;20 Feet of Clearance
            </h3>
            <p className="text-gray-700">
              Your fire pit should be at least 10 feet from any structure &mdash; your
              house, garage, shed, fence, or neighbor&apos;s property. 20 feet is even
              better. Measure it. Don&apos;t eyeball it.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              <span className="text-orange-500">2.</span> Check Local Fire Codes
            </h3>
            <p className="text-gray-700">
              Many municipalities and HOAs have specific rules about fire pits &mdash;
              including minimum distances, burn bans during dry seasons, and whether
              you need a permit. Call your local fire department or check your city&apos;s
              website before building or buying.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              <span className="text-orange-500">3.</span> Never Place a Fire Pit on a Wood Deck
            </h3>
            <p className="text-gray-700">
              This is a common and dangerous mistake. Even with a fire pit pad, radiant
              heat and stray embers can ignite a wooden deck. Place your fire pit on
              gravel, pavers, concrete, or bare earth only.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              <span className="text-orange-500">4.</span> Watch for Overhead Hazards
            </h3>
            <p className="text-gray-700">
              Look up. Tree branches, patio umbrellas, pergola roofs, string lights, and
              awnings can all catch a spark. Make sure there&apos;s nothing flammable
              directly above your fire pit for at least 15&ndash;20 feet.
            </p>
          </div>
        </div>
      </section>

      {/* Fuel and Fire Management */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Fuel &amp; Fire Management
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              <span className="text-orange-500">5.</span> Use Seasoned Hardwood Only
            </h3>
            <p className="text-gray-700">
              Burn only dry, seasoned hardwood (oak, maple, hickory). Green or wet wood
              creates excessive smoke, pops, and sends more sparks flying. Never burn
              pressure-treated lumber, painted wood, or plywood &mdash; they release
              toxic chemicals. Use{' '}
              <a
                href="https://www.amazon.com/s?k=natural+fire+starters+wood&tag=porchandfire-20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 underline hover:text-orange-600"
              >
                natural fire starters
              </a>{' '}
              to get your fire going safely.
            </p>
            <div className="mb-4 flex justify-center">
              <img src="https://images.pexels.com/photos/5215351/pexels-photo-5215351.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Natural fire starters for wood burning" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              <span className="text-orange-500">6.</span> Never Use Gasoline or Lighter Fluid
            </h3>
            <p className="text-gray-700">
              This cannot be stressed enough. Gasoline, lighter fluid, and other
              accelerants can cause explosive flare-ups that are nearly impossible to
              control. Use newspaper, kindling, or natural fire starters instead.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              <span className="text-orange-500">7.</span> Keep Fires Manageable
            </h3>
            <p className="text-gray-700">
              A fire pit fire should be enjoyable, not terrifying. Keep flames at a
              reasonable height &mdash; no taller than the walls of your pit. Don&apos;t
              overload with wood. A moderate fire is safer, easier to control, and
              actually more pleasant to sit around. Use a{' '}
              <a
                href="https://www.amazon.com/s?k=fire+pit+spark+screen+cover&tag=porchandfire-20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 underline hover:text-orange-600"
              >
                spark screen cover
              </a>{' '}
              to contain embers.
            </p>
            <div className="mb-4 flex justify-center">
              <img src="https://images.pexels.com/photos/5215351/pexels-photo-5215351.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fire pit spark screen cover" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* People and Pets */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          People &amp; Pets
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              <span className="text-orange-500">8.</span> Establish a Kids Safety Zone
            </h3>
            <p className="text-gray-700">
              Set a clear boundary &mdash; at least 3 feet from the fire pit &mdash;
              that children may not cross. Make this rule non-negotiable. Teach kids
              that fire is not a toy. Never leave children unattended around an active
              fire pit, even for a minute.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              <span className="text-orange-500">9.</span> Watch Your Pets
            </h3>
            <p className="text-gray-700">
              Dogs and cats are curious. A wagging tail or an excited jump can lead to
              burns. Keep pets leashed or in a designated area away from the fire. Be
              especially careful with dogs who like to chase sparks or embers.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              <span className="text-orange-500">10.</span> Wear the Right Clothes
            </h3>
            <p className="text-gray-700">
              Avoid loose, flowy clothing around fires. Scarves, wide sleeves, and
              synthetic fabrics like polyester can catch fire quickly. Cotton and wool
              are safer choices. And skip the open-toed shoes &mdash; a stray ember on
              bare skin is no fun.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Prep */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Emergency Prep
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              <span className="text-orange-500">11.</span> Keep a Fire Extinguisher or Water Source Nearby
            </h3>
            <p className="text-gray-700">
              Always have a way to put out a fire quickly. A garden hose within reach, a
              bucket of water, or a fire extinguisher rated for Class A fires. Don&apos;t
              rely on &quot;it&apos;ll be fine&quot; &mdash; have a plan before you light
              the first match.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              <span className="text-orange-500">12.</span> Fully Extinguish Before Leaving
            </h3>
            <p className="text-gray-700">
              Never leave a fire pit unattended, and never go to bed with embers still
              glowing. Douse with water, stir the ashes, and douse again. The ashes
              should be cool to the touch before you walk away. Coals can stay hot for
              hours &mdash; even overnight.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Safety Checklist */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Quick Safety Checklist
        </h2>
        <div className="bg-orange-50 rounded-lg p-6">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-500 font-bold mr-2">&check;</span>
              Fire pit is 10+ feet from structures
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 font-bold mr-2">&check;</span>
              No overhead branches or flammable materials
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 font-bold mr-2">&check;</span>
              Placed on non-combustible surface (gravel, pavers, concrete)
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 font-bold mr-2">&check;</span>
              Using seasoned hardwood or approved fuel only
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 font-bold mr-2">&check;</span>
              Spark screen in place
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 font-bold mr-2">&check;</span>
              Fire extinguisher or water source within reach
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 font-bold mr-2">&check;</span>
              Kids and pets supervised at all times
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 font-bold mr-2">&check;</span>
              Wind conditions are calm (no burn bans in effect)
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 font-bold mr-2">&check;</span>
              Fire fully extinguished and ashes cool before leaving
            </li>
          </ul>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The Bottom Line
        </h2>
        <p className="text-gray-700">
          Fire pits are meant to be enjoyed &mdash; not feared. By following these 12
          rules, you can relax knowing you&apos;ve done your part to keep everyone
          safe. Most fire pit accidents are completely preventable with a little
          planning and common sense. Set up safely, burn responsibly, and put it out
          completely. That&apos;s it. Now go enjoy the fire.
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
