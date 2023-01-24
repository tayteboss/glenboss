import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import PageHeader from '../components/blocks/PageHeader';
import { getHomePage, getSiteData } from '../lib/datocms';
import ServicesTab from '../components/blocks/ServicesTab';
import PartnersTab from '../components/blocks/PartnersTab';
import ContactTab from '../components/blocks/ContactTab';

const PageWrapper = styled.div``;

const Page = ({ data, handleCursorRefresh }) => {
	const seoTitle = data?.pageSeo[0]?.title;
	const seoDescription = data?.pageSeo[0]?.description;

	return (
		<PageWrapper>
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
			<PageHeader data={data?.pageHeader[0]} zIndex="1" />
			<ServicesTab data={data?.servicesTab[0]} zIndex="2" />
			<PartnersTab
				data={data?.partnersTab[0]}
				zIndex="3"
				handleCursorRefresh={handleCursorRefresh}
			/>
			<ContactTab data={data?.contactTab[0]} zIndex="4" />
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
