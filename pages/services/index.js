import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import PageHeader from '../../components/blocks/PageHeader';
import ServicesList from '../../components/blocks/ServicesList';
import { getServicesPage } from '../../lib/datocms';

const PageWrapper = styled.div``;

const Page = ({ data }) => {
	const seoTitle = data?.pageSeo[0]?.title;
	const seoDescription = data?.pageSeo[0]?.description;

	return (
		<PageWrapper>
			<NextSeo
				title={seoTitle || 'Glen Boss'}
				description={seoDescription || ''}
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
			<ServicesList data={data?.servicesList[0]} zIndex="2" />
		</PageWrapper>
	);
};

export async function getStaticProps({ params }) {
	const data = await getServicesPage();

	return {
		props: {
			data,
		},
	};
}

export default Page;
