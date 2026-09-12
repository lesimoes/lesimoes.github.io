import FormattedDate from './FormattedDate';
import type { Language } from '../i18n/ui';

export interface PostListItem {
	title: string;
	description: string;
	pubDate: Date;
	tags: string[];
	href: string;
}

interface PostListProps {
	lang: Language;
	posts: PostListItem[];
	readMoreLabel: string;
	emptyLabel: string;
	limit?: number;
}

export default function PostList({ lang, posts, readMoreLabel, emptyLabel, limit }: PostListProps) {
	const visiblePosts = typeof limit === 'number' ? posts.slice(0, limit) : posts;

	if (visiblePosts.length === 0) {
		return <p>{emptyLabel}</p>;
	}

	return (
		<ul className="post-list">
			{visiblePosts.map((post) => (
				<li className="post-list-item" key={post.href}>
					<p className="post-date">
						<FormattedDate date={post.pubDate} lang={lang} />
					</p>
					<h3>
						<a href={post.href}>{post.title}</a>
					</h3>
					{post.tags.length > 0 && (
						<ul className="tag-list" aria-label="Tags">
							{post.tags.map((tag) => (
								<li key={tag}>{tag}</li>
							))}
						</ul>
					)}
					<p className="post-description">
						{post.description}
						<a className="read-more" href={post.href}>
							{readMoreLabel}
						</a>
					</p>
				</li>
			))}
		</ul>
	);
}
