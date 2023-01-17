import Head from 'next/head';
import styled from 'styled-components';
import { getContactPage } from '../../lib/datocms';

const PageWrapper = styled.div``;

const Page = ({ data }) => {
	console.log('data', data);

	return (
		<PageWrapper>
			Home
		</PageWrapper>
)};

export async function getStaticProps({ params }) {
	const data = await getContactPage();

	return {
		props: {
			data,
		},
	};
}

export default Page;
