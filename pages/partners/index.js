import { NextSeo } from 'next-seo';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentModal from '../../components/blocks/ContentModal';
import PageHeader from '../../components/blocks/PageHeader';
import PartnerLogos from '../../components/blocks/PartnerLogos';
import PartnersList from '../../components/blocks/PartnersList';
import { CursorContext } from '../../components/layout/Layout';
import useNoScroll from '../../hooks/useNoScroll';
import { getPartners, getPartnersPage } from '../../lib/datocms';

const PageWrapper = styled.div``;

const Page = ({ data, partners }) => {
	const [modalData, setModalData] = useState(false);

	const { cursorRefresh, setCursorRefresh } = useContext(CursorContext);

	const seoTitle = data?.pageSeo[0]?.title;
	const seoDescription = data?.pageSeo[0]?.description;

	const handleOpenModal = (partnerData) => {
		const data = {
			media: partnerData?.displayImage,
			textContent: partnerData?.description
		}

		setModalData(data);
	};

	console.log('modalData', modalData);

	useEffect(() => {
		if (modalData) {
			useNoScroll(true);
		} else {
			useNoScroll(false);
		}

		setCursorRefresh(cursorRefresh + 1);
	}, [modalData]);

	return (
		<PageWrapper>
			<NextSeo
				title={seoTitle || 'Glen Boss'}
				description={seoDescription || ''}
			/>
			<PageHeader
				data={data?.pageHeader[0]}
				zIndex="1"
			/>
			<PartnerLogos data={data?.partnerLogosTicker[0]} zIndex="2" />
			<PartnersList data={partners} zIndex="2" handleOpenModal={(e) => handleOpenModal(e)} />
			<ContentModal
				data={modalData}
				handleCloseModal={() => setModalData(false)}
			/>
		</PageWrapper>
)};

export async function getStaticProps({ params }) {
	const data = await getPartnersPage();
	const partners = await getPartners();

	return {
		props: {
			data,
			partners
		},
	};
}

export default Page;
