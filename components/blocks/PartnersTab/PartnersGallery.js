import { useContext } from 'react';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import { useInView } from 'react-intersection-observer';

import { CursorContext } from '../../layout/Layout';

const PartnersGalleryWrapper = styled.div`
	position: relative;
	z-index: 2;
	padding-bottom: 50px;
`;

const Title = styled.h1`
	margin-right: 64px;
	opacity: ${(props) => (props.$isActive ? 1 : 0.3)};
	color: var(--colour-black);

	transition: all var(--transition-speed-slow) var(--transition-ease);
`;

const PartnersGallery = ({ data, isHoveredIndex, setIsHoveredIndex }) => {
	const hasData = data.length > 0;

	const { cursorRefresh, setCursorRefresh } = useContext(CursorContext);

	const handleCycleComplete = () => {
		setCursorRefresh(cursorRefresh + 1);
	};

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-20px',
	});

	return (
		<PartnersGalleryWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			{hasData && (
				<Marquee
					pauseOnHover
					gradient={false}
					speed={120}
					onCycleComplete={() => handleCycleComplete()}
				>
					{data.map((item, index) => (
						<Title
							key={index}
							className="type-extra-large cursor-large-link"
							onMouseOver={() =>
								setIsHoveredIndex(index.toString())
							}
							onMouseOut={() => setIsHoveredIndex(false)}
							$isActive={
								index.toString() === isHoveredIndex ||
								isHoveredIndex === false
							}
						>
							{item?.name}
						</Title>
					))}
				</Marquee>
			)}
		</PartnersGalleryWrapper>
	);
};

export default PartnersGallery;
