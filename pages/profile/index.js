import Head from 'next/head';
import styled from 'styled-components';
import { getProfilePage } from '../../lib/datocms';

const PageWrapper = styled.div``;

const Page = ({ data }) => {
	return (
		<PageWrapper>
			Profile
		</PageWrapper>
)};

export async function getStaticProps({ params }) {
	const data = await getProfilePage();

	return {
		props: {
			data,
		},
	};
}

export default Page;
