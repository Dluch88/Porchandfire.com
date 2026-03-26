#!/bin/bash
# ================================================
# Nightly Auto-Deploy — Runs via launchd at midnight
# Picks 5 posts from the queue, downloads images, deploys
# ================================================

LOG_FILE="$HOME/porchandfire-autopost.log"
PROJECT_DIR="/Users/darlene/Downloads/porchandfire"
QUEUE_DIR="$PROJECT_DIR/queue"
BLOG_DIR="$PROJECT_DIR/app/blog"
LISTING_FILE="$PROJECT_DIR/app/blog/page.tsx"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

echo "[$DATE] Starting nightly deploy..." >> "$LOG_FILE"

# Check queue has posts
POSTS=$(ls -d "$QUEUE_DIR"/*/ 2>/dev/null | head -5)
POST_COUNT=$(echo "$POSTS" | grep -c .)

if [ "$POST_COUNT" -eq 0 ]; then
  echo "[$DATE] Queue empty — nothing to deploy" >> "$LOG_FILE"
  exit 0
fi

echo "[$DATE] Found $POST_COUNT posts to deploy" >> "$LOG_FILE"

cd "$PROJECT_DIR" || exit 1

# Copy posts from queue to blog
DEPLOYED_SLUGS=""
for POST_DIR in $POSTS; do
  SLUG=$(basename "$POST_DIR")
  cp -r "$POST_DIR" "$BLOG_DIR/$SLUG"
  DEPLOYED_SLUGS="$DEPLOYED_SLUGS $SLUG"
  echo "[$DATE]   Copied $SLUG" >> "$LOG_FILE"
done

# Download images via Brave for new posts
if [ -f "$PROJECT_DIR/download-brave-images.js" ]; then
  echo "[$DATE] Downloading images..." >> "$LOG_FILE"
  node "$PROJECT_DIR/download-brave-images.js" >> "$LOG_FILE" 2>&1
fi

# Add new posts to the blog listing page
for POST_DIR in $POSTS; do
  SLUG=$(basename "$POST_DIR")
  # Extract title from the page.tsx metadata
  TITLE=$(grep "title:" "$BLOG_DIR/$SLUG/page.tsx" | head -1 | sed "s/.*title: '//;s/ | Porch.*//;s/',//")
  DESC=$(grep "description:" "$BLOG_DIR/$SLUG/page.tsx" | head -1 | sed "s/.*description: '//;s/',//")
  
  # Add to blog listing if not already there
  if ! grep -q "$SLUG" "$LISTING_FILE"; then
    sed -i '' "/^];$/i\\
  {\\
    title: '$TITLE',\\
    excerpt: '$DESC',\\
    category: 'Outdoor Living',\\
    readTime: '8 min read',\\
    href: '/blog/$SLUG',\\
  },
" "$LISTING_FILE"
    echo "[$DATE]   Added $SLUG to listing" >> "$LOG_FILE"
  fi
done

# Build and deploy
echo "[$DATE] Building..." >> "$LOG_FILE"
npm run build >> "$LOG_FILE" 2>&1

if [ $? -ne 0 ]; then
  echo "[$DATE] BUILD FAILED — not pushing" >> "$LOG_FILE"
  # Revert the changes
  git checkout -- .
  exit 1
fi

echo "[$DATE] Pushing to Vercel..." >> "$LOG_FILE"
git add .
git commit -m "Auto-deploy: $POST_COUNT new posts $(date '+%Y-%m-%d')" >> "$LOG_FILE" 2>&1
git push origin main >> "$LOG_FILE" 2>&1

# Remove deployed posts from queue
for POST_DIR in $POSTS; do
  rm -rf "$POST_DIR"
done

REMAINING=$(ls -d "$QUEUE_DIR"/*/ 2>/dev/null | wc -l | tr -d ' ')
echo "[$DATE] DONE — $POST_COUNT posts deployed, $REMAINING remaining in queue" >> "$LOG_FILE"
echo "[$DATE] Deployed:$DEPLOYED_SLUGS" >> "$LOG_FILE"
echo "" >> "$LOG_FILE"
