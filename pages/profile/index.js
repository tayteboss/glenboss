import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentModal from '../../components/blocks/ContentModal';
import PageHeader from '../../components/blocks/PageHeader';
import PageHeaderStickyButtons from '../../components/blocks/PageHeader/PageHeaderStickyButtons';
import StoryBuilder from '../../components/blocks/StoryBuilder';
import useNoScroll from '../../hooks/useNoScroll';
import { getProfilePage } from '../../lib/datocms';

const PageWrapper = styled(motion.div)``;

const Page = ({ data, handleCursorRefresh, pageTransitionVariants }) => {
	const [modalData, setModalData] = useState(false);

	const seoTitle = data?.pageSeo[0]?.title;
	const seoDescription = data?.pageSeo[0]?.description;
	const hasButtons = data?.pageHeader[0].buttons.length > 0;

	const handleOpenModal = (triggerTitle) => {
		if (triggerTitle === 'Charity work')
			setModalData(data?.charityWorkInformation[0]);
		if (triggerTitle === 'Profile')
			setModalData(data?.profileInformation[0]);
		if (triggerTitle === 'History & Achievements') {
			setModalData(false);
			document.getElementById('history-achievements').scrollIntoView();
		}
	};

	useEffect(() => {
		if (modalData) {
			useNoScroll(true);
		} else {
			useNoScroll(false);
		}

		const timer = setTimeout(() => {
			handleCursorRefresh();
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [modalData]);

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
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
			<PageHeader
				data={data?.pageHeader[0]}
				zIndex="1"
				handleClick={(e) => handleOpenModal(e)}
			/>
			<StoryBuilder data={data?.historyAchievements[0]} zIndex="2" />
			<ContentModal
				data={modalData}
				handleCloseModal={() => setModalData(false)}
				handleCursorRefresh={handleCursorRefresh}
			/>
			{hasButtons && (
				<PageHeaderStickyButtons
					data={data?.pageHeader[0].buttons}
					handleClick={(e) => handleOpenModal(e)}
				/>
			)}
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
