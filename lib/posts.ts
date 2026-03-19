import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getMarkdownPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return []
  return fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'))
}

export async function getMarkdownPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const processed = await remark().use(html).process(content)
  const frontmatter: Record<string, string> = {}
  Object.keys(data).forEach(key => {
    frontmatter[key] = String(data[key])
  })
  return { slug, frontmatter, contentHtml: processed.toString() }
}