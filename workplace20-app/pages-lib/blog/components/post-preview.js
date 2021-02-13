import Link from 'next/link'
import Image from 'next/image'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  read
}) {
  return (
    <div>
      <div class="block mt-4">
        <p class="text-xl font-semibold text-gray-900">
          <Link as={`/blog/${slug}`} href="/blog/[slug]" className="inline-blog">
            <a className="hover:underline">{title}</a>
          </Link>
        </p>
        <p class="mt-3 text-base text-gray-500">
          {excerpt}
        </p>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
            <span class="sr-only">{author?.name}</span>
            <Image
            src={author?.picture} // Route of the image file
            height={40} // Desired size with correct aspect ratio
            width={40} // Desired size with correct aspect ratio
            alt={author?.name}
          />
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">
            {author?.name}
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <time date={date}>
              {date} {read}
            </time>
            <span aria-hidden="true">
              &middot;
					</span>
            <span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
