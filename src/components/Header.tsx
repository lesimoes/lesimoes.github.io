import { getAlternateLanguage, getAlternatePath, getBlogPath, getLocalizedPath, type Language } from '../i18n/ui';
import HeaderLink from './HeaderLink';

interface HeaderProps {
	lang: Language;
	currentPath: string;
	siteTitle: string;
}

export default function Header({ lang, currentPath, siteTitle }: HeaderProps) {
	const alternateLanguage = getAlternateLanguage(lang);
	const alternatePath = getAlternatePath(currentPath, lang);

	return (
		<header className="site-header navbar">
			<nav aria-label="Main navigation">
				<div className="navbar-start">
					<a className="site-brand text-2xl" href={getLocalizedPath(lang)}>
						{siteTitle}
					</a>
				</div>
				<div className="navbar-end header-links">
					<HeaderLink href={getBlogPath(lang)} currentPath={currentPath}>
						Blog
					</HeaderLink>
					<HeaderLink href={getLocalizedPath(lang, '/about')} currentPath={currentPath}>
						Sobre
					</HeaderLink>
					<HeaderLink href={getLocalizedPath(lang, '/palestras')} currentPath={currentPath}>
						Palestras
					</HeaderLink>
					{/*<HeaderLink href={getLocalizedPath(lang, '/curriculo')} currentPath={currentPath}>
						Curriculo
					</HeaderLink>*/}
					<a className="language-toggle" href={alternatePath} hrefLang={alternateLanguage} aria-label="Trocar idioma">
						<span className={lang === 'pt' ? 'active' : undefined}>🇧🇷</span>
						<span className={lang === 'en' ? 'active' : undefined}>🇺🇸</span>
					</a>
				</div>
			</nav>
		</header>
	);
}
