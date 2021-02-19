import { getAllPosts } from 'lib/blog-helper'
import BlogPage from 'pages-lib/blog'

const Blog = ({ allPosts }) => (<BlogPage posts={allPosts}/>)

export async function getStaticProps() {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'author',
		'coverImage',
		'excerpt',
	])

	return {
		props: { allPosts },
	}
}
export default Blog;