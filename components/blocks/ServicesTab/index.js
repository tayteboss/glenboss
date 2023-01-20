import styled from 'styled-components';
import TabHeader from '../../elements/TabHeader';
import ServicesGallery from './ServicesGallery';

const ServicesTabWrapper = styled.section`
	background: var(--colour-white);
	z-index: ${(props) => props.$zIndex};
`;

const ServicesTab = ({ data, zIndex }) => {
	return (
		<ServicesTabWrapper className="tab-radius tab-wrapper" $zIndex={zIndex}>
			<TabHeader data={data?.headingInformation[0]} />
			<ServicesGallery data={data?.servicesGallery} />
		</ServicesTabWrapper>
	);
};

export default ServicesTab;
