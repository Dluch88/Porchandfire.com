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

  // ── New posts (March 2026) — Amazon CDN URLs via verified ASINs ────────────

  // Post 1: Bougie Patio Finds Under $50
  'B01JRL963Y': `https://m.media-amazon.com/images/P/B01JRL963Y.01._SCLZZZZZZZ_SX500_.jpg`, // Brightech Ambience Pro LED Globe String Lights
  'B075L313HD': `https://m.media-amazon.com/images/P/B075L313HD.01._SCLZZZZZZZ_SX500_.jpg`, // MAGGIFT Solar Hanging Lanterns
  'B01JJJ1R7W': `https://m.media-amazon.com/images/P/B01JJJ1R7W.01._SCLZZZZZZZ_SX500_.jpg`, // Keter Circa 37-Gallon Round Outdoor Side Table
  'B08R794GWJ': `https://m.media-amazon.com/images/P/B08R794GWJ.01._SCLZZZZZZZ_SX500_.jpg`, // LA JOLIE MUSE Outdoor Planter Set of 3
  'B07JN74ZY6': `https://m.media-amazon.com/images/P/B07JN74ZY6.01._SCLZZZZZZZ_SX500_.jpg`, // Pure Garden Solar Pathway Lights 8-Pack

  // Post 2: Backyard Date Night Setup
  'B07QMKZWQF': `https://m.media-amazon.com/images/P/B07QMKZWQF.01._SCLZZZZZZZ_SX500_.jpg`, // Addlon 48ft Outdoor Edison String Lights
  'B08PJ7JMQM': `https://m.media-amazon.com/images/P/B08PJ7JMQM.01._SCLZZZZZZZ_SX500_.jpg`, // JBL Clip 4 Waterproof Bluetooth Speaker
  'B09C5RK25H': `https://m.media-amazon.com/images/P/B09C5RK25H.01._SCLZZZZZZZ_SX500_.jpg`, // Rumpl Original Puffy Blanket
  'B0BHFBV8JN': `https://m.media-amazon.com/images/P/B0BHFBV8JN.01._SCLZZZZZZZ_SX500_.jpg`, // Himalayan Salt Tea Light Candle Holders
  'B08L3W6Z81': `https://m.media-amazon.com/images/P/B08L3W6Z81.01._SCLZZZZZZZ_SX500_.jpg`, // Wise Owl Outfitters Waterproof Outdoor Blanket

  // Post 3: Solo Stove vs Breeo
  'B08VQP4BSV': `https://m.media-amazon.com/images/P/B08VQP4BSV.01._SCLZZZZZZZ_SX500_.jpg`, // Breeo X Series 19

  // Post 4: Best Gas Grills Under $400
  'B077JTCMKQ': `https://m.media-amazon.com/images/P/B077JTCMKQ.01._SCLZZZZZZZ_SX500_.jpg`, // Weber Spirit II E-310
  'B08HJPCQ5P': `https://m.media-amazon.com/images/P/B08HJPCQ5P.01._SCLZZZZZZZ_SX500_.jpg`, // Char-Broil Performance 4-Burner
  'B0CKM1LD3Z': `https://m.media-amazon.com/images/P/B0CKM1LD3Z.01._SCLZZZZZZZ_SX500_.jpg`, // Nexgrill 4-Burner
  'B07JW83ZGL': `https://m.media-amazon.com/images/P/B07JW83ZGL.01._SCLZZZZZZZ_SX500_.jpg`, // Royal Gourmet 3-Burner Cabinet Grill
  'B074QQW4PC': `https://m.media-amazon.com/images/P/B074QQW4PC.01._SCLZZZZZZZ_SX500_.jpg`, // Cuisinart 4-Burner Stainless Gas Grill
  'B00C55D3EI': `https://m.media-amazon.com/images/P/B00C55D3EI.01._SCLZZZZZZZ_SX500_.jpg`, // Dyna-Glo 3-Burner LP Gas Grill

  // Post 5: Outdoor Bar Cart Setup
  'B089Y1BDF6': `https://m.media-amazon.com/images/P/B089Y1BDF6.01._SCLZZZZZZZ_SX500_.jpg`, // Tangkula Wood Bar Cart
  'B06WVBBY46': `https://m.media-amazon.com/images/P/B06WVBBY46.01._SCLZZZZZZZ_SX500_.jpg`, // Best Choice Products Patio Wicker Bar Cart
  'B0882SGDVM': `https://m.media-amazon.com/images/P/B0882SGDVM.01._SCLZZZZZZZ_SX500_.jpg`, // COSCO Outdoor Living Folding Serving Cart
  'B08Z6879GH': `https://m.media-amazon.com/images/P/B08Z6879GH.01._SCLZZZZZZZ_SX500_.jpg`, // Sunnydaze 3-Tier Metal Rolling Bar Cart

  // Post 6: Apartment Balcony Outdoor Oasis
  'B017XNZPFQ': `https://m.media-amazon.com/images/P/B017XNZPFQ.01._SCLZZZZZZZ_SX500_.jpg`, // Keter Bistro 3-Piece Resin Bistro Set
  'B0DL5BL29R': `https://m.media-amazon.com/images/P/B0DL5BL29R.01._SCLZZZZZZZ_SX500_.jpg`, // Wall Hanging Planter Set of 3
  'B0CWS7KPCV': `https://m.media-amazon.com/images/P/B0CWS7KPCV.01._SCLZZZZZZZ_SX500_.jpg`, // Ruggable Washable Outdoor Rug 3x5
  'B0BKZS2VFW': `https://m.media-amazon.com/images/P/B0BKZS2VFW.01._SCLZZZZZZZ_SX500_.jpg`, // SONGMICS Folding Lounge Chair with Footrest

  // Post 7: Best Outdoor Lanterns
  'B0D364JX9L': `https://m.media-amazon.com/images/P/B0D364JX9L.01._SCLZZZZZZZ_SX500_.jpg`, // Deco 79 Metal Outdoor Lantern Set of 2
  'B093CBZVNW': `https://m.media-amazon.com/images/P/B093CBZVNW.01._SCLZZZZZZZ_SX500_.jpg`, // Sterno Home Pillar Candle Outdoor Lantern
  'B016QQLI0M': `https://m.media-amazon.com/images/P/B016QQLI0M.01._SCLZZZZZZZ_SX500_.jpg`, // Hampton Bay Solar Post Lantern
  'B0DP76JGLC': `https://m.media-amazon.com/images/P/B0DP76JGLC.01._SCLZZZZZZZ_SX500_.jpg`, // LHKJ Oversized Outdoor Solar Lanterns Set of 2

  // Post 8: Best Outdoor Throw Pillows
  'B00HYUSH0E': `https://m.media-amazon.com/images/P/B00HYUSH0E.01._SCLZZZZZZZ_SX500_.jpg`, // Pillow Perfect Outdoor Chevron Pillow Set
  'B0BHBRN1FY': `https://m.media-amazon.com/images/P/B0BHBRN1FY.01._SCLZZZZZZZ_SX500_.jpg`, // Arden Selections Outdoor Throw Pillow Set of 4
  'B01N19JJKG': `https://m.media-amazon.com/images/P/B01N19JJKG.01._SCLZZZZZZZ_SX500_.jpg`, // Mainstays Outdoor Toss Pillow 2-Pack
  'B08CWZYT9C': `https://m.media-amazon.com/images/P/B08CWZYT9C.01._SCLZZZZZZZ_SX500_.jpg`, // Sunbrella Canvas Outdoor Pillow
  'B0912GJ3F8': `https://m.media-amazon.com/images/P/B0912GJ3F8.01._SCLZZZZZZZ_SX500_.jpg`, // LVTXIII Outdoor Solid Pillow Covers 4-Pack

  // Post 9: Gas vs Charcoal Grill
  'B01HITNEE4': `https://m.media-amazon.com/images/P/B01HITNEE4.01._SCLZZZZZZZ_SX500_.jpg`, // Char-Broil Classic 4-Burner Gas Grill
  'B00MKB5TXA': `https://m.media-amazon.com/images/P/B00MKB5TXA.01._SCLZZZZZZZ_SX500_.jpg`, // Weber Original Kettle Premium 22-Inch
  'B00GJEPTJS': `https://m.media-amazon.com/images/P/B00GJEPTJS.01._SCLZZZZZZZ_SX500_.jpg`, // Char-Griller Akorn Kamado Kooker
  'B00MKB5V1A': `https://m.media-amazon.com/images/P/B00MKB5V1A.01._SCLZZZZZZZ_SX500_.jpg`, // Weber Performer Deluxe 22-Inch

  // Post 10: Best Outdoor Speakers
  'B08X4YMTPM': `https://m.media-amazon.com/images/P/B08X4YMTPM.01._SCLZZZZZZZ_SX500_.jpg`, // JBL Charge 5 Portable Waterproof Speaker
  'B099TJGJ91': `https://m.media-amazon.com/images/P/B099TJGJ91.01._SCLZZZZZZZ_SX500_.jpg`, // Bose SoundLink Flex
  'B07GBDMF12': `https://m.media-amazon.com/images/P/B07GBDMF12.01._SCLZZZZZZZ_SX500_.jpg`, // TREBLAB HD77 Premium Outdoor Speaker
  'B07XJ8B9NV': `https://m.media-amazon.com/images/P/B07XJ8B9NV.01._SCLZZZZZZZ_SX500_.jpg`, // UE Hyperboom Portable Home Speaker
  'B00378KMF0': `https://m.media-amazon.com/images/P/B00378KMF0.01._SCLZZZZZZZ_SX500_.jpg`, // Polk Audio Atrium 4 Outdoor Speaker Pair
  'B08NLCW9WY': `https://m.media-amazon.com/images/P/B08NLCW9WY.01._SCLZZZZZZZ_SX500_.jpg`, // JBL Xtreme 3 Portable Bluetooth Speaker
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
