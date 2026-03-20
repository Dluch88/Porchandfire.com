# PORCH & FIRE — Blog Batch 1 Deployment Guide
# ================================================
# 4 STEPS TOTAL. Copy-paste each command into your VS Code terminal.
# ================================================


# ================================================
# STEP 1: COPY FILES INTO YOUR PROJECT
# ================================================
# Make sure you're in your PorchAndFire project root (where package.json is).
# Unzip the downloaded file first, then run ALL of these:

mkdir -p public/images/products
mkdir -p public/images/blog/best-outdoor-ceiling-fans
mkdir -p public/images/blog/best-mosquito-repellents-patio
mkdir -p public/images/blog/outdoor-privacy-screen-ideas
mkdir -p public/images/blog/best-solar-path-lights
mkdir -p public/images/blog/best-outdoor-bluetooth-speakers
mkdir -p components

cp -r paf-batch1/best-outdoor-ceiling-fans app/blog/
cp -r paf-batch1/best-mosquito-repellents-patio app/blog/
cp -r paf-batch1/outdoor-privacy-screen-ideas app/blog/
cp -r paf-batch1/best-solar-path-lights app/blog/
cp -r paf-batch1/best-outdoor-bluetooth-speakers app/blog/
cp paf-batch1/ProductImage.tsx components/ProductImage.tsx
cp paf-batch1/download-product-images.js ./
cp paf-batch1/generate-placeholders.js ./


# ================================================
# STEP 2: DOWNLOAD IMAGES AUTOMATICALLY
# ================================================
# This script tries to grab all 25 product images + 5 cover images.
# Just run it and wait — takes about 2-3 minutes.

node download-product-images.js

# If some product images fail (Amazon sometimes blocks requests),
# run this to create clean placeholder cards for any missing ones:

node generate-placeholders.js


# ================================================
# STEP 3: TEST LOCALLY
# ================================================

npm run dev

# Open http://localhost:3000 in your browser
# Check each new blog post:
#   /blog/best-outdoor-ceiling-fans
#   /blog/best-mosquito-repellents-patio
#   /blog/outdoor-privacy-screen-ideas
#   /blog/best-solar-path-lights
#   /blog/best-outdoor-bluetooth-speakers
#
# Product images that couldn't be downloaded will show a
# styled placeholder card (not a broken image). These still
# link to Amazon and look intentional.


# ================================================
# STEP 4: DEPLOY
# ================================================

git add .
git commit -m "Add 5 new blog posts: ceiling fans, mosquito repellents, privacy screens, solar lights, bluetooth speakers"
git push origin main

# Vercel auto-deploys from the push. Done!
# New posts will appear in your RSS feed within minutes.
# Pinterest will auto-pin them within 24 hours.


# ================================================
# TROUBLESHOOTING
# ================================================
# If page 404s: Make sure folder name inside app/blog/ matches the URL slug
# If build fails: Run "npm run build" to see the specific error
# If images still look broken: Run "node generate-placeholders.js" again
# If you want to replace a placeholder later: Save the Amazon product
#   image as public/images/products/{ASIN}.jpg and it overrides the placeholder
