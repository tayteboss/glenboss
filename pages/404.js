import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import ContactCard from '../components/blocks/ContactInformation/ContactCard';
import Grid from '../components/common/Grid';
import InnerWrapper from '../components/common/InnerWrapper';

const PageWrapper = styled(motion.div)`
	padding: 180px 0 360px;
`;

const Page = ({ pageTransitionVariants }) => {
	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			<NextSeo title="Glen Boss - 404 Page" />
			<InnerWrapper>
				<Grid>
					<ContactCard
						title="We couldn't find that page"
						links={[{ title: 'Return home', link: '/' }]}
					/>
				</Grid>
			</InnerWrapper>
		</PageWrapper>
	);
};

export default Page;
