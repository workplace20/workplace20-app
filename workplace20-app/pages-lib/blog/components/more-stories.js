import PostPreview from './post-preview'
import Link from 'next/link'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-4xl md:text-4xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
            <Link as={`/blog/${post.slug}`} href="/blog/[slug]" className="inline-blog">
            <a className="hover:underline">{post.title}</a>
          </Link>
        ))}
      </div>
    </section>
  )
}
