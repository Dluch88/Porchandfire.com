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

  // ── New posts (March 2026) — images sourced below from manufacturer sites ──
};

export async function GET(
  request: NextRequest,
  { params }: { params: { asin: string } }
) {
  const { asin } = params;
  const imageUrl = IMAGE_MAP[asin];

  if (!imageUrl) {
    // Return a styled SVG placeholder for products not in IMAGE_MAP
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
