import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const PartnersGalleryWrapper = styled.div`
	position: relative;
	z-index: 2;
	padding-bottom: 50px;
	mix-blend-mode: difference;
	color: white;
`;

const Title = styled.a`
	margin-right: 64px;
	opacity: ${(props) => (props.$isActive ? 1 : 0)};
	color: var(--colour-white);
	text-decoration: none;

	transition: all var(--transition-speed-slow) var(--transition-ease);
`;

const PartnersGallery = ({
	data,
	isHoveredIndex,
	setIsHoveredIndex,
	handleCursorRefresh,
}) => {
	const [isMobile, setIsMobile] = useState(false);

	const hasData = data.length > 0;

	const handleCycleComplete = () => {
		handleCursorRefresh();
	};

	console.log('isMobile', isMobile);

	useEffect(() => {
		if (window.innerWidth < 550) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

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
					gradient={false}
					speed={isMobile ? 100 : 200}
					onCycleComplete={() => handleCycleComplete()}
				>
					{data.map((item, index) => (
						<Link href={item?.url} passHref>
							<Title
								target="_blank"
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
						</Link>
					))}
				</Marquee>
			)}
		</PartnersGalleryWrapper>
	);
};

export default PartnersGallery;
