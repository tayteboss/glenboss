import { createContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Cursor from '../elements/Cursor';
import useScrolled from '../../hooks/useScrolled';

export const CursorContext = createContext();

const Main = styled.main`
	min-height: 150vh;
	padding-top: var(--header-h);
`;

const Layout = ({ children }) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [cursorRefresh, setCursorRefresh] = useState(1);

	const hasScrolled = useScrolled(100);

	useEffect(() => {
		setCursorRefresh(cursorRefresh + 1);
	}, [hasScrolled]);

	useEffect(() => {
		const html = document.querySelector('html');

		if (menuIsOpen) {
			html.classList.add('no-scroll');
		} else {
			html.classList.remove('no-scroll');
		}

		setCursorRefresh(cursorRefresh + 1);
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
		<CursorContext.Provider value={{ cursorRefresh, setCursorRefresh }}>
			<Header setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen} />
			<Menu isActive={menuIsOpen} />
			<Main>{children}</Main>
			<Footer />
			<Cursor cursorRefresh={cursorRefresh} />
		</CursorContext.Provider>
	);
};

export default Layout;
