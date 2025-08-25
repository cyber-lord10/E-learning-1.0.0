import { useEffect } from 'react';

const useIntersectionObserver = (
	ref,
	{
		threshold = 0.2,
		rootMargin = '0px',
		animateClasses = ['animate-slide-in'],
		initialClasses = [],
		reversible = false,
		index = 0, // For staggering
	} = {}
) => {
	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(
							...animateClasses,
							`delay-${index * 100}`
						);
						entry.target.classList.remove(...initialClasses);
						if (!reversible) observer.unobserve(entry.target);
					} else if (reversible) {
						entry.target.classList.remove(
							...animateClasses,
							`delay-${index * 100}`
						);
						entry.target.classList.add(...initialClasses);
					}
				});
			},
			{
				root: null,
				rootMargin,
				threshold,
			}
		);

		observer.observe(ref.current);
		return () => observer.unobserve(ref.current);
	}, [
		ref,
		threshold,
		rootMargin,
		animateClasses,
		initialClasses,
		reversible,
		index,
	]);
};

export default useIntersectionObserver;
