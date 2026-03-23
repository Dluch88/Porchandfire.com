#!/bin/bash
# ================================================
# Deploy 5 New Blog Posts + Download Images
# Run from your porchandfire project root:
#   bash deploy-new-batch.sh
# ================================================

set -e

echo ""
echo "===================================="
echo "  Deploying 5 new blog posts..."
echo "===================================="

# Check we're in the right place
if [ ! -f "package.json" ]; then
  echo "ERROR: Run this from your PorchAndFire project root"
  exit 1
fi

# Copy blog posts
echo ""
echo "1/4 Copying blog posts..."
cp -r paf-new-batch/best-patio-umbrellas app/blog/
cp -r paf-new-batch/best-porch-swings app/blog/
cp -r paf-new-batch/best-outdoor-deck-boxes app/blog/
cp -r paf-new-batch/best-fire-pit-tables app/blog/
cp -r paf-new-batch/best-outdoor-doormats app/blog/
echo "  Done!"

# Add to blog listing page
echo ""
echo "2/4 Adding posts to blog listing..."
# Find the closing bracket of the posts array and insert before it
sed -i '' '/^];$/i\
  {\
    title: '"'"'Best Patio Umbrellas for Sun and Rain Protection'"'"',\
    excerpt: '"'"'Find the best patio umbrella for your deck. Cantilever, market, and tilt styles compared by size and durability.'"'"',\
    category: '"'"'Patio Design'"'"',\
    readTime: '"'"'8 min read'"'"',\
    href: '"'"'/blog/best-patio-umbrellas'"'"',\
  },\
  {\
    title: '"'"'Best Porch Swings for Relaxing Outdoors'"'"',\
    excerpt: '"'"'Wood, wicker, and poly lumber porch swings compared by comfort, durability, and price.'"'"',\
    category: '"'"'Furniture'"'"',\
    readTime: '"'"'8 min read'"'"',\
    href: '"'"'/blog/best-porch-swings'"'"',\
  },\
  {\
    title: '"'"'Best Outdoor Deck Boxes for Patio Storage'"'"',\
    excerpt: '"'"'Keep your patio organized. Waterproof deck boxes compared by size, durability, and double-duty seating.'"'"',\
    category: '"'"'Accessories'"'"',\
    readTime: '"'"'7 min read'"'"',\
    href: '"'"'/blog/best-outdoor-deck-boxes'"'"',\
  },\
  {\
    title: '"'"'Best Fire Pit Tables for Your Patio'"'"',\
    excerpt: '"'"'Combine warmth and function. Propane and gas fire pit tables that double as coffee tables.'"'"',\
    category: '"'"'Fire Pits'"'"',\
    readTime: '"'"'9 min read'"'"',\
    href: '"'"'/blog/best-fire-pit-tables'"'"',\
  },\
  {\
    title: '"'"'Best Outdoor Doormats That Actually Hold Up'"'"',\
    excerpt: '"'"'Stop tracking dirt inside. Doormats tested for durability, dirt-trapping, and style.'"'"',\
    category: '"'"'Accessories'"'"',\
    readTime: '"'"'7 min read'"'"',\
    href: '"'"'/blog/best-outdoor-doormats'"'"',\
  },
' app/blog/page.tsx
echo "  Done!"

# Download images via Brave
echo ""
echo "3/4 Downloading product images via Brave..."
node download-brave-images.js
echo "  Done!"

# Build, commit, push
echo ""
echo "4/4 Building and deploying..."
npm run build 2>&1 | tail -3
git add .
git commit -m "Add 5 new posts: umbrellas, porch swings, deck boxes, fire pit tables, doormats"
git push origin main

echo ""
echo "===================================="
echo "  DEPLOYED! 5 new posts live."
echo "===================================="
echo "  - porchandfire.com/blog/best-patio-umbrellas"
echo "  - porchandfire.com/blog/best-porch-swings"
echo "  - porchandfire.com/blog/best-outdoor-deck-boxes"
echo "  - porchandfire.com/blog/best-fire-pit-tables"
echo "  - porchandfire.com/blog/best-outdoor-doormats"
echo "===================================="
