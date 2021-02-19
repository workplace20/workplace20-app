import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import withMarketingLayout from 'pages-lib/_layouts/MarketingLayout/withMarketingLayout';
import { getPostBySlug, getAllPosts } from 'lib/blog-helper'
import Head from 'next/head'
import markdownToHtml from 'lib/markdownToHtml'
import PostBody from 'pages-lib/blog/components/post-body'
import MoreStories from 'pages-lib/blog/components/more-stories'

function Post({ post, allPosts }) {
	const router = useRouter()
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}

	const morePosts = allPosts.filter(p => p.slug != post.slug)
	console.log(morePosts)
	debugger

	return (
		<div>
			<Head>
				<title>
					{post.title}
				</title>
			</Head>

			<div class="relative py-16 bg-white overflow-hidden">
				<div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
					<div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
						<svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
							<defs>
								<pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
									<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
								</pattern>
							</defs>
							<rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
						</svg>
						<svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
							<defs>
								<pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
									<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
								</pattern>
							</defs>
							<rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
						</svg>
						<svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
							<defs>
								<pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
									<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
								</pattern>
							</defs>
							<rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
						</svg>
					</div>
				</div>
				<div class="relative px-4 sm:px-6 lg:px-8">
					<div class="text-lg max-w-prose mx-auto">
						<h1>
							<span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
								{post.title}</span>
						</h1>
						<p class="mt-8 text-xl text-gray-500 leading-8">
							{post.excerpt}
						</p>
					</div>
					<div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
						<PostBody content={post.content} />
						<a href="/blog" class="flex font-medium text-indigo-600">
							Back to blog
		 		 	</a>
					</div>
				</div>
			</div>
			<div class="max-w-2xl mx-auto">
				<MoreStories posts={morePosts} />
			</div>
		</div>
	)
}

export default withMarketingLayout(Post)

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage',
	])
	const content = await markdownToHtml(post.content || '')
	const posts = getAllPosts([
		'title',
		'slug',
	])

	return {
		props: {
			post: {
				...post,
				content,
			},
			allPosts: posts
		},
	}
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug'])

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			}
		}),
		fallback: false,
	}
}
