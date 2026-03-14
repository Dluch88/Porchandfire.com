import sharp from 'sharp';

// Square logo for Pinterest profile photo (165x165)
// RH / Pottery Barn style: clean, warm neutral, minimal
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165 165" width="165" height="165">
  <rect width="165" height="165" fill="#F5F0EB"/>
  <!-- Simple flame mark only — no porch illustration -->
  <path d="M82,42 C70,58 62,70 62,82 C62,93 71,102 82,102 C93,102 102,93 102,82 C102,70 94,58 82,42Z" fill="none" stroke="#2C2C2C" stroke-width="1.8"/>
  <path d="M82,62 C77,70 74,76 74,82 C74,86.5 77.5,90 82,90 C86.5,90 90,86.5 90,82 C90,76 87,70 82,62Z" fill="#C4946A" opacity="0.6"/>
  <!-- Brand name -->
  <text x="82" y="126" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-weight="400" fill="#2C2C2C" text-anchor="middle" letter-spacing="3.5">PORCH</text>
  <text x="82" y="144" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-weight="400" fill="#2C2C2C" text-anchor="middle" letter-spacing="3.5">&amp; FIRE</text>
</svg>`;

// Cover image (800x450)
// Minimal, editorial — like an RH catalog header
const coverSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
  <rect width="800" height="450" fill="#F5F0EB"/>
  <!-- Thin top rule -->
  <line x1="300" y1="130" x2="500" y2="130" stroke="#C4946A" stroke-width="0.75" opacity="0.5"/>
  <!-- Flame mark -->
  <path d="M400,148 C391,160 386,168 386,176 C386,184 392,190 400,190 C408,190 414,184 414,176 C414,168 409,160 400,148Z" fill="none" stroke="#2C2C2C" stroke-width="1.5"/>
  <path d="M400,161 C396,167 394,172 394,176 C394,179.5 396.5,182 400,182 C403.5,182 406,179.5 406,176 C406,172 404,167 400,161Z" fill="#C4946A" opacity="0.5"/>
  <!-- Brand name -->
  <text x="400" y="230" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-weight="400" fill="#2C2C2C" text-anchor="middle" letter-spacing="8">PORCH</text>
  <text x="400" y="272" font-family="Georgia, 'Times New Roman', serif" font-size="20" font-weight="400" fill="#2C2C2C" text-anchor="middle" letter-spacing="6">&amp; FIRE</text>
  <!-- Tagline -->
  <text x="400" y="310" font-family="Georgia, 'Times New Roman', serif" font-size="11" fill="#8C7B6B" text-anchor="middle" letter-spacing="4" font-style="italic">The Art of Outdoor Living</text>
  <!-- Thin bottom rule -->
  <line x1="300" y1="335" x2="500" y2="335" stroke="#C4946A" stroke-width="0.75" opacity="0.5"/>
</svg>`;

await sharp(Buffer.from(logoSvg)).png().toFile('public/pinterest-logo.png');
console.log('Created public/pinterest-logo.png (165x165)');

await sharp(Buffer.from(coverSvg)).png().toFile('public/pinterest-cover.png');
console.log('Created public/pinterest-cover.png (800x450)');
