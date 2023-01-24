import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const PartnerListCardWrapper = styled.div`
	grid-column: span 6;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}

	&:hover {
		img {
			transform: scale(1.03);
		}
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	padding-top: 56.3%;
	overflow: hidden;
	border-radius: 8px;

	img {
		transition: all var(--transition-speed-default) var(--transition-ease);
	}
`;

const Title = styled.h3`
	padding-top: 16px;
`;

const PartnerListCard = ({ data, handleOpenModal }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-5%',
	});

	return (
		<PartnerListCardWrapper
			ref={ref}
			className={`cursor-link view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
			onClick={() => handleOpenModal(data)}
		>
			<ImageWrapper>
				<Image
					src={data?.displayImage?.url}
					layout="fill"
					objectFit="cover"
				/>
			</ImageWrapper>
			<Title className="type-p">{data?.name && data?.name}</Title>
		</PartnerListCardWrapper>
	);
};

export default PartnerListCard;
