import { useEffect, useState } from 'react';

export default function ReadingProgress() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const updateProgress = () => {
			const article = document.querySelector('[data-reading-content]');
			if (!article) {
				setProgress(0);
				return;
			}

			const rect = article.getBoundingClientRect();
			const articleTop = window.scrollY + rect.top;
			const articleHeight = article.scrollHeight - window.innerHeight;
			const scrolled = window.scrollY - articleTop;
			const nextProgress = articleHeight <= 0 ? 100 : Math.min(100, Math.max(0, (scrolled / articleHeight) * 100));

			setProgress(Math.round(nextProgress));
		};

		updateProgress();
		window.addEventListener('scroll', updateProgress, { passive: true });
		window.addEventListener('resize', updateProgress);

		return () => {
			window.removeEventListener('scroll', updateProgress);
			window.removeEventListener('resize', updateProgress);
		};
	}, []);

	return (
		<div className="reading-progress" aria-label={`Progresso de leitura: ${progress}%`}>
			<div className="reading-progress__bar" style={{ width: `${progress}%` }} />
		</div>
	);
}
