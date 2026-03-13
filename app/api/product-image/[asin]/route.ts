import { NextRequest, NextResponse } from 'next/server';

// Mapping of ASINs to verified matching product image URLs
const IMAGE_MAP: Record<string, string> = {
  // Fire Pits
  'B0B7BFJ5Y6': 'https://target.scene7.com/is/image/Target/GUEST_16067529-46bf-4374-98a6-e804676c5721?wid=500&hei=500', // Solo Stove Bonfire
  'B09WG9DDPS': 'https://breeo.com/cdn/shop/files/X24Cp1_8eec04d1-f975-4a01-9e0b-527f655222f1-343863.png?v=1762440217', // Breeo X24
  'B081NJZ97B': 'https://target.scene7.com/is/image/Target/GUEST_55699ebd-6f0b-4151-8149-de4b2f0cae31?wid=500&hei=500', // Yaheetech 32" Fire Pit
  'B082XHVGZM': 'https://target.scene7.com/is/image/Target/GUEST_7168ac40-37d7-4662-8e5e-447907029ee6?wid=500&hei=500', // Tiki Fire Pit
  'B07NC5LFJN': 'https://target.scene7.com/is/image/Target/GUEST_0e27d61b-ef82-4e8c-85d8-37e230523396?wid=500&hei=500', // Modeno Aurora (concrete gas fire bowl)
  'B081Z8N4VV': 'https://target.scene7.com/is/image/Target/GUEST_b47748e7-bda9-41d9-9a50-b7dd0d8636f7?wid=500&hei=500', // COSIEST Propane Fire Table

  // Outdoor Seating
  'B007FG79L0': 'https://target.scene7.com/is/image/Target/GUEST_59a703a1-c7e9-401f-88f6-08955aa4f7a8?wid=500&hei=500', // Christopher Knight Puerta
  'B001VNCL1Y': 'https://target.scene7.com/is/image/Target/GUEST_37658cfb-a903-4930-ae89-225fb51f128a?wid=500&hei=500', // POLYWOOD Adirondack
  'B07BFNG5C5': 'https://target.scene7.com/is/image/Target/GUEST_05c84e7d-3fa4-4178-bf95-40afdfc349bd?wid=500&hei=500', // Best Choice Wicker Rocker

  // Outdoor Dining
  'B01ENGNFMS': 'https://target.scene7.com/is/image/Target/GUEST_bff79c1d-c0f5-4204-971b-6bd6d9279c74?wid=500&hei=500', // CKH Della/Cobalt 7pc Dining
  'B00T3HSODY': 'https://target.scene7.com/is/image/Target/GUEST_f6805da0-94f6-4849-a37e-5d6dc7ba9f19?wid=500&hei=500', // Flash Furniture Bistro

  // Porch & Patio
  'B09TGSQKRF': 'https://target.scene7.com/is/image/Target/GUEST_adc72985-d643-42d9-befc-a2fb5ab4747b?wid=500&hei=500', // Outdoor String Lights (Itopfox similar)
  'B083K3NM1H': 'https://target.scene7.com/is/image/Target/GUEST_102c4056-1527-4e59-9c8c-226aa68f040a?wid=500&hei=500', // TomCare Solar Lanterns
  'B01M1KM5D4': 'https://target.scene7.com/is/image/Target/GUEST_03b3000a-a006-453e-9ecd-121fdff68c01?wid=500&hei=500', // Nourison Aloha Rug
  'B07XLBZNSG': 'https://target.scene7.com/is/image/Target/GUEST_5aeae906-8ef6-4cae-af28-75eafe1339f8?wid=500&hei=500', // La Jolie Muse Planters
  'B0BHBS9Q81': 'https://target.scene7.com/is/image/Target/GUEST_f2cd9b27-b258-466a-a99c-31cd994b8a62?wid=500&hei=500', // Arden Outdoor Throw Pillows
};

export async function GET(
  request: NextRequest,
  { params }: { params: { asin: string } }
) {
  const { asin } = params;
  const imageUrl = IMAGE_MAP[asin];

  if (!imageUrl) {
    // Return a styled SVG placeholder for products without matched images
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
