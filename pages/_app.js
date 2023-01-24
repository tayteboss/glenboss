import { useEffect, useState } from 'react';
import '../styles/fonts.css';
import Cookies from 'js-cookie';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import use1vh from '../hooks/use1vh';

function App({ Component, pageProps }) {
	const [siteReady, setSiteReady] = useState(false);
	const [hasVisited, setHasVisited] = useState(false);
	const [appCursorRefresh, setAppCursorRefresh] = useState(0);

	const router = useRouter();

	const handleExitComplete = () => {
		window.scrollTo(0, 0);
	};

	use1vh();

	useEffect(() => {
		const hasCookies = Cookies.get('visited');
		const html = document.querySelector('html');

		if (hasCookies) {
			setHasVisited(true);
			setSiteReady(true);
		} else {
			html.classList.add('no-scroll');

			const timer1 = setTimeout(() => {
				html.classList.remove('no-scroll');

				const onPageLoad = () => {
					setSiteReady(true);
				};

				if (document.readyState === 'complete') {
					onPageLoad();
				} else {
					window.addEventListener('load', onPageLoad);
					return () => window.removeEventListener('load', onPageLoad);
				}
			}, 2000);

			const timer2 = setTimeout(() => {
				setHasVisited(true);
				Cookies.set('visited', 'true', { expires: 1, path: '' });
			}, 5000);

			return () => {
				clearTimeout(timer1);
				clearTimeout(timer2);
			};
		}
	}, []);

	const handleCursorRefresh = () => {
		setAppCursorRefresh(appCursorRefresh + 1);
	};

	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<Layout
					siteReady={siteReady}
					hasVisited={hasVisited}
					appCursorRefresh={appCursorRefresh}
				>
					<AnimatePresence
						onExitComplete={() => handleExitComplete()}
					>
						<Component
							{...pageProps}
							key={router.asPath}
							handleCursorRefresh={() => handleCursorRefresh()}
						/>
					</AnimatePresence>
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default App;
