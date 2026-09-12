// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { ui, type Language } from './i18n/ui';

export const SITE_TITLE = ui.pt['site.title'];
export const SITE_DESCRIPTION = ui.pt['site.description'];

export function getSiteTitle(lang: Language) {
	return ui[lang]['site.title'];
}

export function getSiteDescription(lang: Language) {
	return ui[lang]['site.description'];
}
