import { NextSeo } from 'next-seo';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentModal from '../../components/blocks/ContentModal';
import PageHeader from '../../components/blocks/PageHeader';
import { CursorContext } from '../../components/layout/Layout';
import useNoScroll from '../../hooks/useNoScroll';
import { getProfilePage } from '../../lib/datocms';

const PageWrapper = styled.div``;

const Page = ({ data }) => {
	const [modalData, setModalData] = useState(false);

	const { cursorRefresh, setCursorRefresh } = useContext(CursorContext);

	const seoTitle = data?.pageSeo[0]?.title;
	const seoDescription = data?.pageSeo[0]?.description;

	const handleOpenModal = (triggerTitle) => {
		if (triggerTitle === 'Charity work')
			setModalData(data?.charityWorkInformation[0]);
		if (triggerTitle === 'Profile')
			setModalData(data?.profileInformation[0]);
		if (triggerTitle === 'History & Achievements') {
			setModalData(false);
			// SCROLL TO ACHIEVEMENTS SECTION
		};
	};

	useEffect(() => {
		if (modalData) {
			useNoScroll(true);
		} else {
			useNoScroll(false);
		}

		setCursorRefresh(cursorRefresh + 1);
	}, [modalData]);

	console.log('modalData', modalData);

	return (
		<PageWrapper>
			<NextSeo
				title={seoTitle || 'Glen Boss'}
				description={seoDescription || ''}
			/>
			<PageHeader
				data={data?.pageHeader[0]}
				zIndex="1"
				handleClick={(e) => handleOpenModal(e)}
			/>
			<ContentModal
				data={modalData}
				handleCloseModal={() => setModalData(false)}
			/>
		</PageWrapper>
	);
};

export async function getStaticProps({ params }) {
	const data = await getProfilePage();

	return {
		props: {
			data,
		},
	};
}

export default Page;
