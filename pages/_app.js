import { useEffect, useState } from 'react';
import '../styles/fonts.css';
import Cookies from 'js-cookie';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import ReactGA from 'react-ga';
import Layout from '../components/layout/Layout';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import use1vh from '../hooks/use1vh';

const pageTransitionVariants = {
	hidden: { opacity: 0, transition: { duration: 0.3 } },
	visible: { opacity: 1, transition: { duration: 0.3, delay: 0.25 } },
};

function App({ Component, pageProps }) {
	const [siteReady, setSiteReady] = useState(false);
	const [hasVisited, setHasVisited] = useState(false);
	const [appCursorRefresh, setAppCursorRefresh] = useState(0);
	const [isPageLoading, setIsPageLoading] = useState(false);

	const router = useRouter();
	const routerEvents = router.events;

	const handleExitComplete = () => {
		window.scrollTo(0, 0);
	};

	const handleRouteChangeComplete = () => {
		ReactGA.pageview(window.location.pathname + window.location.search);
		setIsPageLoading(false);
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

		ReactGA.initialize('G-VLZCPMNN34');

		routerEvents.on('routeChangeStart', () => {
			setIsPageLoading(true);
		});

		routerEvents.on('routeChangeComplete', handleRouteChangeComplete);

		return () => {
			routerEvents.off('routeChangeComplete', handleRouteChangeComplete);
		};
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
					isPageLoading={isPageLoading}
				>
					<AnimatePresence
						mode="wait"
						onExitComplete={() => handleExitComplete()}
					>
						<Component
							{...pageProps}
							key={router.asPath}
							handleCursorRefresh={() => handleCursorRefresh()}
							pageTransitionVariants={pageTransitionVariants}
						/>
					</AnimatePresence>
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default App;
