import Image from 'next/image';
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
	return (
		<PartnerListCardWrapper
			className="cursor-link"
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
