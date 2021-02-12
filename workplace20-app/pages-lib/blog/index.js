import { getAllPosts } from 'lib/blog-helper'
import { debug } from 'debug'
import { PostPreview } from 'components/blog'

const Blog = ({ allPosts }) =>{
	return (
	<>

		<div class="z-0 bg-white pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
			<div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
				<div>
					<h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
						Recent publications 4
			</h2>
					<p class="mt-3 text-xl text-gray-500 sm:mt-4">
						Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
			</p>
				</div>
				<div class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
					{!allPosts &&
						<p>No posts!</p>
					}
					{allPosts && allPosts.map((post) => (
						<PostPreview
							key={post.slug}
							title={post.title}
							coverImage={post.coverImage}
							date={post.date}
							author={post.author}
							slug={post.slug}
							excerpt={post.excerpt}
						/>
					))}

				</div>
			</div>
		</div>
	</>
)}


export async function getStaticProps() {
	const logger = debug('blog-post')

	console.log('call me')

	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'author',
		'coverImage',
		'excerpt',
	])

	logger.info(allPosts)

	return {
		props: { allPosts },
	}
}

export default Blog;