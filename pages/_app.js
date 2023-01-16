import '../styles/fonts.css';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';

function App({ Component, pageProps }) {
	const router = useRouter();

	const handleExitComplete = () => {
		window.scrollTo(0, 0);
	};

	// Setup google tracking
	const routerEvents = router.events;
	useEffect(() => {
		const handleRouteChange = (url) => {};
		routerEvents.on('routeChangeComplete', handleRouteChange);

		return () => {
			routerEvents.off('routeChangeComplete', handleRouteChange);
		};
	}, [routerEvents]);

	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<Layout>
					<AnimatePresence
						onExitComplete={() => handleExitComplete()}
					>
						<Component {...pageProps} key={router.asPath} />
					</AnimatePresence>
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default App;
