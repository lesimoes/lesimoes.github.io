export const languages = {
	en: 'English',
	pt: 'Português',
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'pt';

export const ui = {
	en: {
		'site.title': 'lesimoes',
		'site.description': 'Thoughts about software, technology, and personal projects.',
		'nav.home': 'Home',
		'nav.blog': 'Blog',
		'nav.talks': 'Talks',
		'nav.about': 'About',
		'home.title': 'Welcome to my blog',
		'home.intro': 'I write about software development, technology, and lessons learned while building projects.',
		'home.blogCta': 'Read the latest posts',
		'about.title': 'Hi, I’m Leandro Simões',
		'about.description': 'Software engineer, technical leader, and product builder with over a decade of experience.',
		'about.body': [
			'I’ve been working in software for over a decade, building web and mobile applications, leading teams, and helping companies turn ideas into real products.',
			'I hold a Master’s degree in Computer Science from UFJF, where I specialized in software engineering and recommendation systems. During that time, I contributed to projects such as a recommender system for the Rio 2016 Olympics, funded by Capes, and published papers at both national and international conferences.',
			'Throughout my career, I’ve worked on projects for clients including DPSP, B2W, Vtex, ShopFácil, Yamaha, Record, and others. I co-founded companies, joined leadership teams, and became a partner in a business later acquired by one of the largest payment companies in Latin America.',
			'Currently, I’m working for a New York–based company, TheGuarantors.',
		],
		'about.workTitle': 'How I work',
		'about.principles': [
			{
				title: 'Problem-solving first',
				description: 'I don’t believe in technology for its own sake — I believe in using it to solve real business problems.',
			},
			{
				title: 'Agility as adaptability',
				description: 'For me, agility isn’t just about speed; it’s about responding effectively to change.',
			},
			{
				title: 'Knowledge sharing',
				description: 'I prioritize mentoring teams, establishing practices like automated testing and observability, and ensuring that client teams grow stronger along the way.',
			},
		],
		'blog.title': 'Blog',
		'blog.empty': 'No posts published in this language yet.',
		'post.readMore': 'Read more',
		'home.allPosts': 'All →',
		'post.lastUpdated': 'Last updated on',
		'footer.rights': 'All rights reserved.',
		'social.mastodon': 'Follow Astro on Mastodon',
		'social.twitter': 'Follow Astro on Twitter',
		'social.github': "Go to Astro's GitHub repo",
	},
	pt: {
		'site.title': 'lesimoes',
		'site.description': 'Ideias sobre software, tecnologia e projetos pessoais.',
		'nav.home': 'Início',
		'nav.blog': 'Blog',
		'nav.talks': 'Palestras',
		'nav.about': 'Sobre',
		'home.title': 'Bem-vindo ao meu blog',
		'home.intro': 'Escrevo sobre desenvolvimento de software, tecnologia e aprendizados enquanto construo projetos.',
		'home.blogCta': 'Leia os posts mais recentes',
		'about.title': 'Olá, eu sou Leandro Simões',
		'about.description': 'Engenheiro de software, líder técnico e criador de produtos com mais de uma década de experiência.',
		'about.body': [
			'Trabalho com software há mais de uma década, desenvolvendo aplicações web e mobile, liderando equipes e ajudando empresas a transformar ideias em produtos reais.',
			'Sou mestre em Ciência da Computação pela UFJF, onde me especializei em engenharia de software e sistemas de recomendação. Nesse período, contribuí para projetos como um sistema de recomendação para as Olimpíadas Rio 2016, financiado pela Capes, e publiquei artigos em conferências nacionais e internacionais.',
			'Ao longo da minha carreira, trabalhei em projetos para clientes como DPSP, B2W, Vtex, ShopFácil, Yamaha, Record, entre outros. Cofundei empresas, fiz parte de equipes de liderança e me tornei sócio de uma empresa posteriormente adquirida por uma das maiores companhias de pagamentos da América Latina.',
			'Atualmente, trabalho para a TheGuarantors, uma empresa sediada em Nova York.',
		],
		'about.workTitle': 'Como eu trabalho',
		'about.principles': [
			{
				title: 'Resolução de problemas em primeiro lugar',
				description: 'Não acredito em tecnologia como um fim em si mesma — acredito em usá-la para resolver problemas reais de negócio.',
			},
			{
				title: 'Agilidade como adaptabilidade',
				description: 'Para mim, agilidade não é apenas velocidade; é responder às mudanças de forma eficaz.',
			},
			{
				title: 'Compartilhamento de conhecimento',
				description: 'Priorizo a mentoria de equipes, o estabelecimento de práticas como testes automatizados e observabilidade e a garantia de que as equipes dos clientes se fortaleçam ao longo do caminho.',
			},
		],
		'blog.title': 'Blog',
		'blog.empty': 'Ainda não há posts publicados neste idioma.',
		'post.readMore': 'Leia mais',
		'home.allPosts': 'Todos →',
		'post.lastUpdated': 'Atualizado em',
		'footer.rights': 'Todos os direitos reservados.',
		'social.mastodon': 'Siga o Astro no Mastodon',
		'social.twitter': 'Siga o Astro no Twitter',
		'social.github': 'Acesse o repositório do Astro no GitHub',
	},
} as const;

export function isLanguage(value: string | undefined): value is Language {
	return Boolean(value && value in languages);
}

export function useTranslations(lang: Language) {
	return function t<Key extends keyof (typeof ui)[Language]>(key: Key): (typeof ui)[Language][Key] {
		return ui[lang][key];
	};
}

export function getLangFromPathname(pathname: string): Language {
	const segment = pathname.split('/').filter(Boolean)[0];
	return isLanguage(segment) ? segment : defaultLanguage;
}

export function getLocalizedPath(lang: Language, path = '') {
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	return `/${lang}${normalizedPath === '/' ? '' : normalizedPath}`;
}

export function getBlogPath(lang: Language) {
	return lang === 'pt' ? '/blog/pt/' : '/blog/';
}

export function getPostPath(lang: Language, slug: string) {
	return lang === 'pt' ? `/blog/pt/${slug}/` : `/blog/${slug}/`;
}

export function getAlternateLanguage(lang: Language): Language {
	return lang === 'pt' ? 'en' : 'pt';
}

export function getAlternatePath(pathname: string, currentLang: Language) {
	const alternateLanguage = getAlternateLanguage(currentLang);
	const normalizedPathname = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;

	if (normalizedPathname === `/${currentLang}` || normalizedPathname === '/') {
		return getLocalizedPath(alternateLanguage);
	}

	if (normalizedPathname === '/blog' || normalizedPathname === '/blog/pt') {
		return getBlogPath(alternateLanguage);
	}

	const portuguesePostMatch = normalizedPathname.match(/^\/blog\/pt\/(.+)$/);
	if (portuguesePostMatch) {
		return getPostPath(alternateLanguage, portuguesePostMatch[1]);
	}

	const englishPostMatch = normalizedPathname.match(/^\/blog\/(?!pt(?:\/|$))(.+)$/);
	if (englishPostMatch) {
		return getPostPath(alternateLanguage, englishPostMatch[1]);
	}

	if (normalizedPathname.startsWith(`/${currentLang}/`)) {
		return normalizedPathname.replace(`/${currentLang}`, `/${alternateLanguage}`);
	}

	return getLocalizedPath(alternateLanguage);
}
