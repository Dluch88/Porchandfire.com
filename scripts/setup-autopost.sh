#!/bin/bash
# ================================================
# Porch & Fire — Auto-Post System Setup
# Run once: bash setup-autopost.sh
# ================================================

echo ""
echo "===================================="
echo "  Setting Up Nightly Auto-Post"
echo "===================================="
echo ""

PROJECT_DIR="/Users/darlene/Downloads/porchandfire"

# Check we're in the right place
if [ ! -f "$PROJECT_DIR/package.json" ]; then
  echo "ERROR: Cannot find project at $PROJECT_DIR"
  exit 1
fi

# Step 1: Generate 30 blog posts into the queue
echo "1/4  Generating 30 blog posts for the queue..."
cd "$PROJECT_DIR"
node scripts/generate-queue.js
echo "  Done!"

# Step 2: Copy nightly deploy script
echo ""
echo "2/4  Installing nightly deploy script..."
mkdir -p "$PROJECT_DIR/scripts"
cp scripts/nightly-deploy.sh "$PROJECT_DIR/scripts/nightly-deploy.sh"
chmod +x "$PROJECT_DIR/scripts/nightly-deploy.sh"
echo "  Done!"

# Step 3: Install the launchd job
echo ""
echo "3/4  Installing midnight cron job (launchd)..."
PLIST_SRC="scripts/com.porchandfire.nightly-deploy.plist"
PLIST_DEST="$HOME/Library/LaunchAgents/com.porchandfire.nightly-deploy.plist"

# Unload old version if exists
launchctl unload "$PLIST_DEST" 2>/dev/null

cp "$PLIST_SRC" "$PLIST_DEST"
launchctl load "$PLIST_DEST"
echo "  Installed! Will run every night at midnight."

# Step 4: Verify
echo ""
echo "4/4  Verifying setup..."
QUEUE_COUNT=$(ls -d "$PROJECT_DIR/queue"/*/ 2>/dev/null | wc -l | tr -d ' ')
LAUNCHD_STATUS=$(launchctl list | grep porchandfire | wc -l | tr -d ' ')

echo ""
echo "===================================="
echo "  SETUP COMPLETE!"
echo "===================================="
echo ""
echo "  Queue:     $QUEUE_COUNT posts ready (6 nights of 5 posts)"
echo "  Cron job:  $([ $LAUNCHD_STATUS -gt 0 ] && echo 'Active ✅' || echo 'Not detected ⚠️')"
echo "  Schedule:  Every night at midnight"
echo "  Log file:  ~/porchandfire-autopost.log"
echo ""
echo "  HOW IT WORKS:"
echo "  - At midnight, it picks 5 posts from the queue"
echo "  - Downloads product images via Brave"
echo "  - Adds them to the blog listing"
echo "  - Pushes to Vercel (goes live in ~1 min)"
echo "  - RSS feed updates → Pinterest auto-pins"
echo ""
echo "  TO CHECK STATUS:"
echo "  - View log:  cat ~/porchandfire-autopost.log"
echo "  - Queue:     ls queue/"
echo "  - Test run:  bash scripts/nightly-deploy.sh"
echo ""
echo "  TO ADD MORE POSTS:"
echo "  - Ask Claude to write more posts"
echo "  - Put them in the queue/ folder"
echo "  - The nightly job picks them up automatically"
echo "===================================="
echo ""
