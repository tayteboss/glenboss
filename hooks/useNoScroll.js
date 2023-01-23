const useNoScroll = (addNoScroll) => {
	const html = document.querySelector('html');

	if (addNoScroll) {
		html.classList.add('no-scroll');
	} else {
		html.classList.remove('no-scroll');
	}
};

export default useNoScroll;
