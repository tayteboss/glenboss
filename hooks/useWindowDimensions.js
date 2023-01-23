import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

/**
 * Get Window Dimensions
 * @returns Object
 *
 * USE:
 * const { height } = useWindowDimensions();
 * const [unit, setUnit] = useState(height / width * 0.01)
 *
 * useEffect(() => {
 * 	setUnit(height * 0.01);
 * }, [height]);
 */

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;

	return {
		width,
		height,
	};
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		setWindowDimensions(getWindowDimensions());

		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		const throttledHandleResize = throttle(handleResize, 64, {
			leading: true,
			trailing: true,
		});

		window.addEventListener('resize', throttledHandleResize);
		return () =>
			window.removeEventListener('resize', throttledHandleResize);
	}, []);

	return windowDimensions;
}
