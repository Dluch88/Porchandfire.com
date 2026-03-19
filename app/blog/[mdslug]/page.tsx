import { getMarkdownPost, getMarkdownPostSlugs } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = getMarkdownPostSlugs()
  return slugs.map(slug => ({ mdslug: slug.replace('.md', '') }))
}

export default async function MarkdownBlogPost({ params }: { params: { mdslug: string } }) {
  const post = await getMarkdownPost(params.mdslug)
  if (!post) return notFound()

  const title = post.frontmatter.title as string
  const date = post.frontmatter.date as string

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-500 mb-8">{date}</p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </main>
  )
}
