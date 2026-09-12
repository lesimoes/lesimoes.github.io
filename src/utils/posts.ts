import type { CollectionEntry } from 'astro:content';
import { getPostPath, type Language } from '../i18n/ui';

type BlogPostEntry = CollectionEntry<'blog'>;

export function getPostLanguage(post: BlogPostEntry): Language {
	if (post.data.lang === 'pt' || post.data.lang === 'en') {
		return post.data.lang;
	}

	return post.id.startsWith('pt/') ? 'pt' : 'en';
}

export function getCanonicalSlug(post: BlogPostEntry) {
	const rawSlug = post.data.translationKey || post.id;
	return rawSlug.replace(/^(en|pt)\//, '');
}

export function getPostUrl(post: BlogPostEntry) {
	return getPostPath(getPostLanguage(post), getCanonicalSlug(post));
}

export function findPostByCanonicalSlug(posts: BlogPostEntry[], lang: Language, slug: string) {
	return posts.find((post) => getPostLanguage(post) === lang && getCanonicalSlug(post) === slug);
}
