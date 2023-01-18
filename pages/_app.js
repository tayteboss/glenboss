import '../styles/fonts.css';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import useHeaderHeight from '../hooks/useHeaderHeight';
import use1vh from '../hooks/use1vh';

function App({ Component, pageProps }) {
	const router = useRouter();

	useHeaderHeight();
	use1vh();

	const handleExitComplete = () => {
		window.scrollTo(0, 0);
	};

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
