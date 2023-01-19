import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import PageHeader from '../components/blocks/PageHeader';
import { getHomePage, getSiteData } from '../lib/datocms';

const PageWrapper = styled.div``;

const Page = ({ data, siteData }) => {
	const seoTitle = data?.pageSeo[0]?.title;
	const seoDescription = data?.pageSeo[0]?.description;

	console.log('data', data);

	return (
		<PageWrapper>
			<NextSeo
				title={seoTitle ? seoTitle : 'Glen Boss'}
				description={seoDescription}
			/>
			<PageHeader data={data?.pageHeader[0]} />
		</PageWrapper>
	);
};

export async function getStaticProps({ params }) {
	const data = await getHomePage();
	const siteData = await getSiteData();

	return {
		props: {
			data,
			siteData,
		},
	};
}

export default Page;
