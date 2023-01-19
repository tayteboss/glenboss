import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import FooterMenu from './FooterMenu';
import FooterSecondary from './FooterSecondary';

const options = require('../../../json/options.json');

const FooterWrapper = styled.footer`
	background: var(--colour-black);
`;

const Footer = () => {
	const siteData = options?.data?.siteInformation;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-5%',
	});

	return (
		<FooterWrapper className="tab-radius" ref={ref}>
			<FooterMenu data={siteData?.menu[0]?.links} inView={inView} />
			<FooterSecondary
				secondaryLinks={siteData?.footerSecondaryLinks}
				inView={inView}
			/>
		</FooterWrapper>
	);
};

export default Footer;
