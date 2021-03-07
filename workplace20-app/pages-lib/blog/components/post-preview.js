import Link from "next/link";
import Image from "next/image";

export default function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
	read,
}) {
	return (
		<div>
			<div>
				<p class="text-sm text-gray-500">
					<time datetime="2020-03-16">Mar 16, 2020</time>
				</p>

				<Link
					as={`/blog/${slug}`}
					href="/blog/[slug]"
					className="inline-blog"
				>
					<a>
						<p class="text-xl font-semibold text-gray-700">
							{title}
						</p>
						<p class="mt-3 text-base text-gray-500">{excerpt} </p>
					</a>
				</Link>
				<div class="mt-3">
					<Link
						as={`/blog/${slug}`}
						href="/blog/[slug]"
						className="inline-blog"
					>
						<a class="text-base font-semibold text-orange-700 hover:text-orange-500">
							Read full story
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
