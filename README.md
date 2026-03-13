# 🪴 Porch & Fire

Smart living guides and product reviews for small spaces and apartment dwellers.

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Deployed on Vercel

---

## 🚀 Getting Started Locally

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/porchandfire.git
cd porchandfire
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

---

## 📦 Project Structure

```
porchandfire/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout (Navbar + Footer)
│   ├── globals.css           # Global styles
│   ├── blog/
│   │   ├── page.tsx          # Blog index
│   │   └── [slug]/page.tsx   # Individual articles
│   ├── categories/
│   │   └── [category]/page.tsx
│   ├── about/page.tsx
│   └── disclosure/page.tsx   # Required by Amazon Associates
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/                      # Utilities, data helpers
└── public/                   # Static assets
```

---

## 🔗 Amazon Associates Setup

1. Sign up at [affiliate-program.amazon.com](https://affiliate-program.amazon.com)
2. Get your Associates tag (format: `yourname-20`)
3. In each article file, update `AMAZON_TAG`:
   ```ts
   const AMAZON_TAG = 'yourname-20'; // Replace this
   ```

> ⚠️ **Required:** Keep the affiliate disclosure link in your footer and on every article page. Amazon requires this.

---

## 🐙 Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit — Porch & Fire site"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/porchandfire.git
git branch -M main
git push -u origin main
```

---

## ▲ Deploy to Vercel

### Option A — Vercel Dashboard (easiest)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `porchandfire` repository
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **Deploy** 🎉

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel
# Follow the prompts
```

### Add your custom domain
1. In Vercel dashboard → your project → **Settings → Domains**
2. Add `porchandfire.com`
3. Copy the DNS records shown and add them in Namecheap:
   - Add an **A record** pointing to Vercel's IP
   - Or use Vercel's nameservers (easier)
4. SSL is automatic ✅

---

## ✍️ Adding New Articles

Create a new folder under `app/blog/`:

```bash
mkdir app/blog/your-article-slug
touch app/blog/your-article-slug/page.tsx
```

Copy the structure from `app/blog/best-bed-frames-with-storage/page.tsx` as a template.

**SEO checklist for every article:**
- [ ] Unique `metadata.title` and `metadata.description`
- [ ] `section-label` category tag
- [ ] Affiliate disclosure block at the top
- [ ] Amazon links with your tag using `rel="noopener noreferrer nofollow"`
- [ ] Buying guide / FAQ section at the bottom

---

## 📈 Next Steps After Launch

1. **Apply for Amazon Associates** — you need a live site with content
2. **Google Search Console** — submit your sitemap at `/sitemap.xml`
3. **Write consistently** — aim for 2 articles/week for the first 3 months
4. **Build internal links** — link between related articles
5. **Add a sitemap** — install `next-sitemap` package

```bash
npm install next-sitemap
```

---

## 📄 License

MIT — build on it freely.
