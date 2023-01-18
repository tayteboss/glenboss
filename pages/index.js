import Head from 'next/head';
import styled from 'styled-components';
import { getHomePage, getSiteData } from '../lib/datocms';

const PageWrapper = styled.div``;

const Page = ({ data, siteData }) => {
	return (
		<PageWrapper>
			Home
		</PageWrapper>
)};

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
