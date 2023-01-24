import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { getAllPages, getPage } from '../lib/datocms';
import PageContent from '../components/blocks/PageContent';

const PageWrapper = styled(motion.div)``;

const Page = ({ pageTransitionVariants, data }) => {
	const seoTitle = data?.seoTitle;
	const seoDescription = data?.seoDescription;

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			<NextSeo
				title={seoTitle || 'Glen Boss'}
				description={seoDescription}
				openGraph={{
					images: [
						{
							url: 'ogg-image.jpg',
							width: 800,
							height: 600,
						},
					],
				}}
			/>
			<PageContent data={data?.pageContent} />
		</PageWrapper>
	);
};

export const getStaticPaths = async () => {
	const allPages = await getAllPages();

	return {
		paths: allPages?.map((page) => `/${page.slug}`) || [],
		fallback: false,
	};
};

export const getStaticProps = async ({ params, preview = false }) => {
	const data = await getPage(params.slug[0], preview);

	return {
		props: {
			preview,
			data,
		},
	};
};

export default Page;
