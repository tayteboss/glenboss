import { useState } from 'react';
import styled from 'styled-components';
import TabHeader from '../../elements/TabHeader';
import PartnersArtwork from './PartnersArtwork';
import PartnersGallery from './PartnersGallery';

const PartnersTabWrapper = styled.section`
	background: var(--colour-system-white-grey-50);
	height: calc(var(--vh) * 100);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	z-index: ${(props) => props.$zIndex};

	.tab-header {
		h1,
		p,
		a {
			opacity: ${(props) => props.$isActive ? 0 : 1};
	
			transition: all var(--transition-speed-default) var(--transition-ease);
		}
	}
`;

const PartnersTab = ({ data, zIndex, handleCursorRefresh }) => {
	const [isHoveredIndex, setIsHoveredIndex] = useState(false);

	return (
		<PartnersTabWrapper
			className="tab-radius tab-wrapper"
			$zIndex={zIndex}
			$isActive={isHoveredIndex}
		>
			<TabHeader data={data?.headingInformation[0]} useDarkTheme />
			<PartnersGallery
				data={data?.partners}
				setIsHoveredIndex={setIsHoveredIndex}
				isHoveredIndex={isHoveredIndex}
				handleCursorRefresh={handleCursorRefresh}
			/>
			<PartnersArtwork data={data?.partners} index={isHoveredIndex} />
		</PartnersTabWrapper>
	);
};

export default PartnersTab;
