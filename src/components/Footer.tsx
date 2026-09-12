import type { Language } from '../i18n/ui';

interface FooterProps {
	lang: Language;
}

export default function Footer({ lang }: FooterProps) {
	const year = new Date().getFullYear();
	const blogLabel = lang === 'pt' ? 'blog' : 'blog';

	return (
		<footer className="site-footer">
			<nav className="footer-links" aria-label="Social links">
				<a href="https://github.com/lesimoes" target="_blank" rel="noreferrer">
					github
				</a>
				<a href="https://www.youtube.com/channel/UCvdzKt-BgAePAxGQTLz_xjQ" target="_blank" rel="noreferrer">
					youtube
				</a>
				<a href="https://www.linkedin.com/in/lesimoess/" target="_blank" rel="noreferrer">
					linkedin
				</a>
				<a href="https://pixelfed.social/lesimoes" target="_blank" rel="noreferrer">
					pixelfed
				</a>
			</nav>
			<p>Leandro Simões • © {year} • lesimoes {blogLabel}</p>
		</footer>
	);
}
