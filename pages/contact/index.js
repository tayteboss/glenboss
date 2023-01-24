import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import styled from 'styled-components';
import ContactInformation from '../../components/blocks/ContactInformation';
import ContactSocials from '../../components/blocks/ContactSocials';
import { getContactPage, getHomePage } from '../../lib/datocms';

const options = require('../../json/options.json');

const PageWrapper = styled.div``;

const Page = ({ data, socialImages }) => {
	const siteData = options?.data?.siteInformation;
	const seoTitle = data?.pageSeo[0]?.title;
	const seoDescription = data?.pageSeo[0]?.description;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
			<ContactInformation
				email={siteData?.generalEmail}
				phone={siteData?.generalPhone}
				igLink={siteData?.instagramLink}
				twLink={siteData?.twitterLink}
			/>
			<ContactSocials data={socialImages} zIndex="2" />
		</PageWrapper>
	);
};

export async function getStaticProps({ params }) {
	const data = await getContactPage();
	const homeData = await getHomePage();

	const socialImages = homeData?.contactTab[0].socialImages;

	return {
		props: {
			data,
			socialImages,
		},
	};
}

export default Page;
