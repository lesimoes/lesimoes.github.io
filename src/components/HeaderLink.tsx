import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface HeaderLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	currentPath: string;
	children: ReactNode;
}

function normalizePath(path: string) {
	return path.replace(/\/$/, '') || '/';
}

function isBlogActive(href: string, currentPath: string) {
	const normalizedHref = normalizePath(href);
	const normalizedPath = normalizePath(currentPath);

	if (normalizedHref === '/blog/pt') {
		return normalizedPath === '/blog/pt' || normalizedPath.startsWith('/blog/pt/');
	}

	if (normalizedHref === '/blog') {
		return normalizedPath === '/blog' || (normalizedPath.startsWith('/blog/') && !normalizedPath.startsWith('/blog/pt'));
	}

	return false;
}

export default function HeaderLink({ href = '/', currentPath, className, children, ...props }: HeaderLinkProps) {
	const normalizedPath = normalizePath(currentPath);
	const normalizedHref = normalizePath(href);
	const isActive = isBlogActive(href, currentPath) || normalizedPath === normalizedHref || normalizedPath.startsWith(`${normalizedHref}/`);
	const classes = [className, isActive ? 'active' : undefined].filter(Boolean).join(' ');

	return (
		<a href={href} className={classes || undefined} {...props}>
			{children}
		</a>
	);
}
