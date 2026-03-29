#!/bin/bash
# ================================================
# Porch & Fire — Nightly Generate + Deploy
# Generates 20 new blog posts via Claude CLI,
# downloads product images via Brave, builds,
# and deploys to Vercel production.
# Runs nightly via crontab at midnight.
# ================================================

# Ensure cron can find node, claude, npx, git
export PATH="/usr/local/bin:/usr/bin:/bin:/opt/homebrew/bin:$HOME/.nvm/versions/node/$(ls $HOME/.nvm/versions/node/ 2>/dev/null | tail -1)/bin:$PATH"
export HOME="/Users/darlene"

LOG_FILE="$HOME/porchandfire-autopost.log"
PROJECT_DIR="/Users/darlene/Downloads/porchandfire"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

echo "" >> "$LOG_FILE"
echo "[$DATE] ========================================" >> "$LOG_FILE"
echo "[$DATE] Starting nightly generate + deploy" >> "$LOG_FILE"

cd "$PROJECT_DIR" || exit 1

# Step 1: Generate new blog posts
POSTS_TO_GEN="${POST_COUNT:-20}"
echo "[$DATE] [1/4] Generating $POSTS_TO_GEN new blog posts..." >> "$LOG_FILE"
POST_COUNT="$POSTS_TO_GEN" node scripts/generate-nightly-posts.js >> "$LOG_FILE" 2>&1
GEN_EXIT=$?

if [ $GEN_EXIT -ne 0 ]; then
  echo "[$DATE] GENERATION FAILED (exit $GEN_EXIT) — aborting" >> "$LOG_FILE"
  exit 1
fi

# Count what was generated (new directories in app/blog since script start)
NEW_COUNT=$(git status --porcelain app/blog/ 2>/dev/null | grep '??' | grep 'page.tsx' | wc -l | tr -d ' ')
echo "[$DATE] Generated $NEW_COUNT new posts" >> "$LOG_FILE"

if [ "$NEW_COUNT" -eq 0 ]; then
  echo "[$DATE] No new posts generated — nothing to deploy" >> "$LOG_FILE"
  exit 0
fi

# Step 2: Build
echo "[$DATE] [2/4] Building..." >> "$LOG_FILE"
npm run build >> "$LOG_FILE" 2>&1

if [ $? -ne 0 ]; then
  echo "[$DATE] BUILD FAILED — reverting changes" >> "$LOG_FILE"
  git checkout -- .
  git clean -fd app/blog/ >> "$LOG_FILE" 2>&1
  exit 1
fi

# Step 3: Git commit
echo "[$DATE] [3/4] Committing..." >> "$LOG_FILE"
git add app/blog/ public/images/products/ >> "$LOG_FILE" 2>&1
git commit -m "nightly: add $NEW_COUNT new blog posts $(date '+%Y-%m-%d')" >> "$LOG_FILE" 2>&1
git push origin main >> "$LOG_FILE" 2>&1

# Step 4: Deploy to Vercel production
echo "[$DATE] [4/4] Deploying to Vercel..." >> "$LOG_FILE"
npx vercel --prod --yes >> "$LOG_FILE" 2>&1

if [ $? -ne 0 ]; then
  echo "[$DATE] VERCEL DEPLOY FAILED" >> "$LOG_FILE"
  exit 1
fi

TOTAL_POSTS=$(ls -d "$PROJECT_DIR/app/blog"/*/ 2>/dev/null | wc -l | tr -d ' ')
echo "[$DATE] DONE — $NEW_COUNT new posts deployed ($TOTAL_POSTS total on site)" >> "$LOG_FILE"
echo "[$DATE] RSS feed updated — Pinterest will auto-pin new posts" >> "$LOG_FILE"
echo "[$DATE] ========================================" >> "$LOG_FILE"
