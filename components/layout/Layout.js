import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

const Main = styled.main`
	min-height: 150vh;
	padding-top: var(--header-h);
`;

const Layout = ({ children }) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	useEffect(() => {
		const html = document.querySelector('html');

		if (menuIsOpen) {
			html.classList.add('no-scroll');
		} else {
			html.classList.remove('no-scroll');
		}
	}, [menuIsOpen]);

	const router = useRouter();
	const routerEvents = router.events;
	useEffect(() => {
		routerEvents.on('routeChangeComplete', () => setMenuIsOpen(false));

		return () => {
			routerEvents.off('routeChangeComplete', () => setMenuIsOpen(false));
		};
	}, [routerEvents]);

	return (
		<>
			<Header setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen} />
			<Menu isActive={menuIsOpen} />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default Layout;
