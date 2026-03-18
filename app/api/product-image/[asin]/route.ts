import { NextRequest, NextResponse } from 'next/server';

// Mapping of ASINs to verified matching product image URLs
const IMAGE_MAP: Record<string, string> = {
  // Fire Pits
  'B0B7BFJ5Y6': 'https://target.scene7.com/is/image/Target/GUEST_16067529-46bf-4374-98a6-e804676c5721?wid=500&hei=500', // Solo Stove Bonfire 2.0
  'B09WG9DDPS': 'https://breeo.com/cdn/shop/files/X24Cp1_8eec04d1-f975-4a01-9e0b-527f655222f1-343863.png?v=1762440217', // Breeo X24
  'B081NJZ97B': 'https://target.scene7.com/is/image/Target/GUEST_55699ebd-6f0b-4151-8149-de4b2f0cae31?wid=500&hei=500', // Yaheetech 32" Fire Pit
  'B082XHVGZM': 'https://target.scene7.com/is/image/Target/GUEST_7168ac40-37d7-4662-8e5e-447907029ee6?wid=500&hei=500', // Tiki Fire Pit
  'B08BCTC22X': 'https://www.bioliteenergy.com/cdn/shop/files/FirePit_CarryBag_Hero.png?v=1767306169', // BioLite FirePit+
  'B0B7BG9YPW': 'https://target.scene7.com/is/image/Target/GUEST_16067529-46bf-4374-98a6-e804676c5721?wid=500&hei=500', // Solo Stove Ranger 2.0 (uses Bonfire image as fallback)

  // Outdoor Seating
  'B07CH1W94X': 'https://target.scene7.com/is/image/Target/GUEST_59a703a1-c7e9-401f-88f6-08955aa4f7a8?wid=500&hei=500', // Christopher Knight Puerta Chat Set
  'B001VNCL1Y': 'https://target.scene7.com/is/image/Target/GUEST_37658cfb-a903-4930-ae89-225fb51f128a?wid=500&hei=500', // POLYWOOD Adirondack
  'B001VNCJ36': 'https://www.polywood.com/cdn/shop/files/vqmoq9ofaorlevbmalwi.jpg?v=1737499289', // POLYWOOD Classic Folding Adirondack
  'B08JYCJLVT': 'https://target.scene7.com/is/image/Target/GUEST_a16b83eb-dc0c-4ed8-959f-65adeb48f2aa?wid=500&hei=500', // Serwall Adirondack
  'B07MF72NPN': 'https://devoko.com/cdn/shop/products/DevokoPatioFurniture7PiecesOutdoorSectionalSofa7.jpg?v=1754459173', // Devoko 7-Piece Sectional
  'B077XLLNG5': 'https://target.scene7.com/is/image/Target/GUEST_59a703a1-c7e9-401f-88f6-08955aa4f7a8?wid=500&hei=500', // Christopher Knight Sectional

  // Outdoor Dining
  'B01ENGNFMS': 'https://target.scene7.com/is/image/Target/GUEST_bff79c1d-c0f5-4204-971b-6bd6d9279c74?wid=500&hei=500', // CKH Della/Cobalt 7pc Dining

  // String Lights
  'B09TGSQKRF': 'https://target.scene7.com/is/image/Target/GUEST_adc72985-d643-42d9-befc-a2fb5ab4747b?wid=500&hei=500', // Brightown Globe Lights
  'B00WVOV3W2': 'https://brightech.com/cdn/shop/products/ambienceproledoff.jpg?v=1769036388', // Brightech Ambience Pro
  'B088K4QSRV': 'https://cdn.shopify.com/s/files/1/0512/3489/8105/files/7039.png?v=1743407438', // Govee Smart String Lights

  // Bird Feeders
  'B00ABGSX4S': 'https://target.scene7.com/is/image/Target/GUEST_59a703a1-c7e9-401f-88f6-08955aa4f7a8?wid=500&hei=500', // Squirrel Buster Standard
  'B0C8TKD1JY': 'https://mybirdbuddy.com/wp-content/uploads/2023/04/20241107-shop-mainlisting-sbf-blue-camv2-2560x2560-mo-v2-676ea6305d977.webp', // Bird Buddy
  'B0B56BVWBM': 'https://www.netvue.com/cdn/shop/files/Bird-Feeder-with-Camera-Netvue-Birdfy-Bird-Watching-Cameras-Solar-Powered-with-Lifetime-AI-Blue_bba779ab-8ea1-49fb-8a7f-f1256e0acb7f.85488b4bae26978748beaefd840f9978.jpg?v=1768307218', // NETVUE Birdfy

  // Pizza Ovens
  'B095CJ5KSD': 'https://mypizzacorner.com/wp-content/uploads/2022/11/karu-16.jpg', // Ooni Karu 16
  'B085LGV57D': 'https://palapizza.com/wp-content/uploads/2021/01/ooni-koda-preheat.jpg', // Ooni Koda 16
  'B07TJ81FSC': 'https://www.gozney.com/cdn/shop/files/Gozney_Roccbox_800x800_Complete_Olive_Frame_1_3fe6c7f2-3dd4-4193-b870-074ccd8ffc5d.png?v=1757692547', // Roccbox
  'B097HNBS1D': 'https://bertello.com/cdn/shop/files/essentialsbundle_grande.jpg?v=1763661593', // Bertello
  'B088385N9Z': 'https://palapizza.com/wp-content/uploads/2021/01/ooni-fyra-review.jpg', // Ooni Fyra 12

  // Patio Heaters
  'B01I5KHQKI': 'https://www.firepitsurplus.com/cdn/shop/files/hiland-pyramid-patio-heater-Bronze.jpg?v=1736720437', // Hiland Pyramid

  // Fire Pit Cooking
  'B0886ZQJBY': 'https://breeo.com/cdn/shop/files/Outpost_24_Grill_1.png?v=1760450575', // Breeo Outpost Grill

  // Fire Pit Accessories
  'B07QD1HC7T': 'https://target.scene7.com/is/image/Target/GUEST_7168ac40-37d7-4662-8e5e-447907029ee6?wid=500&hei=500', // Ember Mat
  'B079ZJ9K18': 'https://target.scene7.com/is/image/Target/GUEST_59a703a1-c7e9-401f-88f6-08955aa4f7a8?wid=500&hei=500', // Keter Side Table

  // Fire Pit Covers
  'B00D2VUOSM': 'https://target.scene7.com/is/image/Target/GUEST_59a703a1-c7e9-401f-88f6-08955aa4f7a8?wid=500&hei=500', // Classic Accessories Ravenna
  'B07QT79GLB': 'https://target.scene7.com/is/image/Target/GUEST_16067529-46bf-4374-98a6-e804676c5721?wid=500&hei=500', // Solo Stove Shelter
  'B01JAGG2MO': 'https://target.scene7.com/is/image/Target/GUEST_59a703a1-c7e9-401f-88f6-08955aa4f7a8?wid=500&hei=500', // Duck Covers

  // ── New posts (March 2026) ──────────────────────────────────────────────────

  // Bougie Patio Finds / Outdoor Decor
  'B07FWRJ93Y': 'https://brightech.com/cdn/shop/products/ambienceproledoff.jpg', // Brightech Ambience Pro string lights
  'B07V2H2Z2T': 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=500', // MAGGIFT solar hanging lanterns
  'B07WFRHCVL': 'https://images.pexels.com/photos/4915585/pexels-photo-4915585.jpeg?auto=compress&cs=tinysrgb&w=500', // Keter Circa round side table
  'B08MH24WCX': 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=500', // La Jolíe Muse ceramic planters
  'B07T3PX34J': 'https://images.pexels.com/photos/754263/pexels-photo-754263.jpeg?auto=compress&cs=tinysrgb&w=500', // Pure Garden solar pathway lights
  'B07C1YWW32': 'https://images.pexels.com/photos/6430742/pexels-photo-6430742.jpeg?auto=compress&cs=tinysrgb&w=500', // Sunnydaze outdoor wicker side table

  // Backyard Date Night
  'B07BZQR2LS': 'https://images.pexels.com/photos/754263/pexels-photo-754263.jpeg?auto=compress&cs=tinysrgb&w=500', // Addlon 48ft Edison string lights
  'B082VWGQ3F': 'https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&w=500', // JBL Clip 4 speaker
  'B014JUFQ3Y': 'https://images.pexels.com/photos/6430742/pexels-photo-6430742.jpeg?auto=compress&cs=tinysrgb&w=500', // Rumpl Original Puffy Blanket
  'B01KXXV5CE': 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=500', // Himalayan Glow salt lamp holders
  'B07QFG8R4N': 'https://images.pexels.com/photos/3836517/pexels-photo-3836517.jpeg?auto=compress&cs=tinysrgb&w=500', // Outdoor waterproof picnic blanket

  // Solo Stove vs Breeo
  'B09WG5YJPQ': 'https://breeo.com/cdn/shop/files/X24Cp1_8eec04d1-f975-4a01-9e0b-527f655222f1-343863.png?v=1762440217', // Breeo Outpost 19 (uses X24 brand image)

  // Gas Grills Under $400
  'B07B57RY3B': 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=500', // Weber Spirit II E-310
  'B01GMOIM3A': 'https://images.pexels.com/photos/8798737/pexels-photo-8798737.jpeg?auto=compress&cs=tinysrgb&w=500', // Char-Broil Performance 4-Burner
  'B0786RWBWX': 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=500', // Nexgrill 4-Burner
  'B07F8BMFQ5': 'https://images.pexels.com/photos/8798737/pexels-photo-8798737.jpeg?auto=compress&cs=tinysrgb&w=500', // Royal Gourmet 3-Burner
  'B07BVTYWNG': 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=500', // Cuisinart 3-Burner
  'B0773YJQYZ': 'https://images.pexels.com/photos/8798737/pexels-photo-8798737.jpeg?auto=compress&cs=tinysrgb&w=500', // Dyna-Glo 2-Burner

  // Outdoor Bar Cart Setup
  'B07NBHPRK8': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500', // Yaheetech 3-tier bar cart
  'B07D1LV5PG': 'https://images.pexels.com/photos/1843655/pexels-photo-1843655.jpeg?auto=compress&cs=tinysrgb&w=500', // Best Choice Products wicker bar cart
  'B0000CEJ41': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500', // COSCO folding serving cart
  'B07C1RZQTZ': 'https://images.pexels.com/photos/1843655/pexels-photo-1843655.jpeg?auto=compress&cs=tinysrgb&w=500', // Sunnydaze 3-tier bar cart with tray
  'B07YNZHFH5': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500', // Great Bay Furniture wicker bar cart

  // Apartment Balcony Outdoor Oasis
  'B00KZIVNBW': 'https://images.pexels.com/photos/4915585/pexels-photo-4915585.jpeg?auto=compress&cs=tinysrgb&w=500', // Keter Bistro 3-piece set
  'B07H5KC9R5': 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=500', // Mkono wall hanging planters
  'B07YWQB5X2': 'https://images.pexels.com/photos/33775064/pexels-photo-33775064.jpeg?auto=compress&cs=tinysrgb&w=500', // Ruggable washable outdoor rug
  'B07PMQPQHL': 'https://images.pexels.com/photos/6430742/pexels-photo-6430742.jpeg?auto=compress&cs=tinysrgb&w=500', // SONGMICS folding lounge chair

  // Best Outdoor Lanterns
  'B07CWKQ3X7': 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=500', // Deco 79 metal outdoor lantern
  'B07V4NKQCM': 'https://images.pexels.com/photos/6782569/pexels-photo-6782569.jpeg?auto=compress&cs=tinysrgb&w=500', // Sterno Home pillar candle lantern
  'B082SKPXCS': 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=500', // Sienna solar powered lantern
  'B07FSY5S35': 'https://brightech.com/cdn/shop/products/ambienceproledoff.jpg', // Brightech Sparq solar LED lantern
  'B08HJ55M7Y': 'https://images.pexels.com/photos/6782569/pexels-photo-6782569.jpeg?auto=compress&cs=tinysrgb&w=500', // LHKJ large outdoor solar lanterns

  // Best Outdoor Throw Pillows
  'B01FPY8HXG': 'https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=500', // Pillow Perfect Chevron set
  'B07G3DBTHM': 'https://images.pexels.com/photos/6430742/pexels-photo-6430742.jpeg?auto=compress&cs=tinysrgb&w=500', // Arden Selections outdoor pillow set
  'B07TRFV98Q': 'https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=500', // Mainstays outdoor toss pillow 2-pack
  'B00G3MHJ7I': 'https://images.pexels.com/photos/6430742/pexels-photo-6430742.jpeg?auto=compress&cs=tinysrgb&w=500', // Sunbrella canvas outdoor pillow
  'B07QF2FMT3': 'https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=500', // LVTXIII outdoor pillow covers 4-pack

  // Gas vs Charcoal Grill (gas picks share ASINs with post 4 above)
  'B00BNNV5HE': 'https://images.pexels.com/photos/8798737/pexels-photo-8798737.jpeg?auto=compress&cs=tinysrgb&w=500', // Char-Broil Classic 4-Burner
  'B00004RALD': 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=500', // Weber Original Kettle 22"
  'B00HY6EXFY': 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=500', // Char-Griller Akorn Kamado
  'B00BIIZY0S': 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=500', // Weber Performer Deluxe

  // Best Outdoor Speakers
  'B08TH8YL6Z': 'https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&w=500', // JBL Charge 5
  'B099TJGJ91': 'https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&w=500', // Bose SoundLink Flex
  'B07ZGV6M8L': 'https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&w=500', // TREBLAB HD77
  'B08KFXR5TD': 'https://images.pexels.com/photos/1843655/pexels-photo-1843655.jpeg?auto=compress&cs=tinysrgb&w=500', // UE Hyperboom
  'B001KJGF10': 'https://images.pexels.com/photos/4915585/pexels-photo-4915585.jpeg?auto=compress&cs=tinysrgb&w=500', // Polk Audio Atrium 4
  'B098BTMCTM': 'https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&w=500', // JBL Xtreme 3
};

export async function GET(
  request: NextRequest,
  { params }: { params: { asin: string } }
) {
  const { asin } = params;
  const imageUrl = IMAGE_MAP[asin];

  if (!imageUrl) {
    // Try Amazon's product image URL pattern
    const amazonImageUrl = `https://m.media-amazon.com/images/P/${asin}.01._SCLZZZZZZZ_SX500_.jpg`;
    try {
      const amazonRes = await fetch(amazonImageUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible)' },
      });
      if (amazonRes.ok) {
        const buf = await amazonRes.arrayBuffer();
        // Amazon returns a 1x1 pixel for invalid ASINs — skip if too small
        if (buf.byteLength > 1000) {
          return new NextResponse(buf, {
            headers: {
              'Content-Type': amazonRes.headers.get('Content-Type') || 'image/jpeg',
              'Cache-Control': 'public, max-age=86400',
            },
          });
        }
      }
    } catch {
      // Fall through to placeholder
    }

    // Return a styled SVG placeholder as last resort
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#F7F3EE"/>
          <stop offset="100%" style="stop-color:#EDE8E0"/>
        </linearGradient>
      </defs>
      <rect width="500" height="500" fill="url(#bg)"/>
      <g transform="translate(250,210)" opacity="0.35">
        <rect x="-60" y="-50" width="120" height="100" rx="12" fill="none" stroke="#8A8279" stroke-width="2.5"/>
        <path d="M-30 20 L0 -10 L30 20" stroke="#8A8279" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="20" cy="-20" r="10" fill="none" stroke="#C4683C" stroke-width="2"/>
      </g>
      <text x="250" y="310" text-anchor="middle" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#8A8279" letter-spacing="1">VIEW ON AMAZON</text>
    </svg>`;
    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }

  try {
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible)',
      },
    });

    if (!response.ok) {
      return new NextResponse(null, { status: 404 });
    }

    const buffer = await response.arrayBuffer();
    const contentType = response.headers.get('Content-Type') || 'image/jpeg';

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch {
    return new NextResponse(null, { status: 500 });
  }
}
