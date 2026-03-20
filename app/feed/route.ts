import { readdirSync } from 'fs'
import { join } from 'path'

const SITE_URL = 'https://porchandfire.com'
const SITE_TITLE = 'Porch & Fire'
const SITE_DESCRIPTION = 'Your guide to outdoor living — fire pits, patio furniture, backyard entertaining, and everything in between.'

function getBlogSlugs(): string[] {
  const blogDir = join(process.cwd(), 'app', 'blog')
  try {
    const entries = readdirSync(blogDir, { withFileTypes: true })
    return entries
      .filter((entry) => entry.isDirectory())
      .filter((entry) => !entry.name.includes('batchbuilder'))
      .filter((entry) => entry.name !== 'page.tsx')
      .map((entry) => entry.name)
  } catch {
    return []
  }
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const slugs = getBlogSlugs()
  const now = new Date().toUTCString()

  const items = slugs
    .map((slug) => {
      const title = escapeXml(slugToTitle(slug))
      const url = `${SITE_URL}/blog/${slug}`
      return `    <item>
      <title>${title}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${now}</pubDate>
      <description>${title} - Read more at Porch &amp; Fire</description>
    </item>`
    })
    .join('\n')

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
