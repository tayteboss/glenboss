import styled from 'styled-components';
import Grid from '../../common/Grid';
import InnerWrapper from '../../common/InnerWrapper';
import Accordion from '../Accordion';

const ServicesListWrapper = styled.section`
	padding: 80px 0 160px;
	z-index: ${(props) => props.$zIndex};
	background: var(--colour-system-white-grey-50);
`;

const Title = styled.h1`
	grid-column: span 6;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		margin-bottom: 64px;
	}
`;

const ServicesList = ({ data, zIndex }) => {
	return (
		<ServicesListWrapper
			className="tab-radius tab-wrapper"
			$zIndex={zIndex}
		>
			<InnerWrapper>
				<Grid>
					<Title>{data?.title && data?.title}</Title>
					<Accordion data={data?.accordionBlocks} />
				</Grid>
			</InnerWrapper>
		</ServicesListWrapper>
	);
};

export default ServicesList;
