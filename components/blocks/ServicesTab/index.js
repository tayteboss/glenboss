import styled from 'styled-components';
import TabHeader from '../../elements/TabHeader';

const ServicesTabWrapper = styled.section`
	background: var(--colour-white);
	z-index: ${(props) => props.$zIndex};
`;

const ServicesTab = ({ data, zIndex }) => {
	return (
		<ServicesTabWrapper className="tab-radius tab-wrapper" $zIndex={zIndex}>
			<TabHeader data={data?.headingInformation[0]} />
		</ServicesTabWrapper>
	);
};

export default ServicesTab;
