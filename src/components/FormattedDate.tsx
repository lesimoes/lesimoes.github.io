import type { Language } from '../i18n/ui';

interface FormattedDateProps {
	date: Date;
	lang: Language;
}

const locales: Record<Language, string> = {
	en: 'en-US',
	pt: 'pt-BR',
};

export default function FormattedDate({ date, lang }: FormattedDateProps) {
	return (
		<time dateTime={date.toISOString()}>
			{date.toLocaleDateString(locales[lang], {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			})}
		</time>
	);
}
