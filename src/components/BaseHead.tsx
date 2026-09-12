import type { ImageMetadata } from 'astro';
import FallbackImage from '../assets/blog-placeholder-1.jpg';
import Favicon16 from '../assets/favicons/favicon-16x16.png';
import Favicon32 from '../assets/favicons/favicon-32x32.png';
import FaviconIco from '../assets/favicons/favicon.ico?url';
import { SITE_TITLE } from '../consts';
import type { Language } from '../i18n/ui';
import '../styles/global.css';

interface BaseHeadProps {
	title: string;
	description: string;
	lang: Language;
	currentUrl: string;
	pathname: string;
	siteUrl: string;
	generator: string;
	image?: ImageMetadata;
}

export default function BaseHead({
	title,
	description,
	lang,
	currentUrl,
	pathname,
	siteUrl,
	generator,
	image = FallbackImage,
}: BaseHeadProps) {
	const canonicalUrl = new URL(pathname, siteUrl).toString();
	const rssUrl = new URL('rss.xml', siteUrl).toString();
	const imageUrl = new URL(image.src, currentUrl).toString();

	return (
		<>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width,initial-scale=1" />
			<link rel="icon" type="image/png" sizes="32x32" href={Favicon32.src} />
			<link rel="icon" type="image/png" sizes="16x16" href={Favicon16.src} />
			<link rel="icon" type="image/x-icon" href={FaviconIco} />
			<link rel="sitemap" href="/sitemap-index.xml" />
			<link rel="alternate" type="application/rss+xml" title={SITE_TITLE} href={rssUrl} />
			<meta name="generator" content={generator} />

			<link rel="canonical" href={canonicalUrl} />
			<title>{title}</title>
			<meta name="description" content={description} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={currentUrl} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:locale" content={lang === 'pt' ? 'pt_BR' : 'en_US'} />

			<meta name="twitter:card" content="summary_large_image" />
		</>
	);
}
