import styled from 'styled-components';
import Grid from '../../common/Grid';
import InnerWrapper from '../../common/InnerWrapper';
import PartnerListCard from './PartnerListCard';

const PartnersListWrapper = styled.section`
	z-index: ${(props) => props.$zIndex};
	background: var(--colour-system-white-grey-50);
	padding: 80px 0;

	.grid {
		row-gap: 24px;
	}
`;

const PartnersList = ({ data, zIndex, handleOpenModal }) => {
	const hasData = data.length > 0;

	return (
		<PartnersListWrapper
			className="tab-radius tab-wrapper"
			$zIndex={zIndex}
		>
			<InnerWrapper>
				<Grid>
					{hasData &&
						data.map((item, index) => (
							<PartnerListCard
								data={item}
								key={index}
								handleOpenModal={handleOpenModal}
							/>
						))}
				</Grid>
			</InnerWrapper>
		</PartnersListWrapper>
	);
};

export default PartnersList;
