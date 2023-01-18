import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const useScrolled = (amount = 100) => {
	const [hasScrolled, setHasScrolled] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > amount) {
			setHasScrolled(true);
		} else {
			setHasScrolled(false);
		}
	};

	useEffect(() => {
		const throttledHandleScroll = throttle(handleScroll, 100);
		window.addEventListener('scroll', throttledHandleScroll);
		return () => window.removeEventListener('scroll', throttledHandleScroll);
	}, []);

	return hasScrolled;
};

export default useScrolled;
