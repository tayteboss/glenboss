import Head from 'next/head';
import styled from 'styled-components';
import { getContactPage } from '../../lib/datocms';

const PageWrapper = styled.div``;

const Page = ({ data }) => {
	return (
		<PageWrapper>
			Contact
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
