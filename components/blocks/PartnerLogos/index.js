import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Marquee from 'react-fast-marquee';
import InnerWrapper from '../../common/InnerWrapper';

const PartnerLogosWrapper = styled.section`
	padding-top: 80px;
	position: relative;
	background: var(--colour-white);
	z-index: ${(props) => props.$zIndex};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-top: 64px;
	}
`;

const PartnerLogosInner = styled.div``;

const Title = styled.h1``;

const LogosTickerWrapper = styled.div`
	padding: 32px 0 110px;
`;

const MediaWrapper = styled.div`
	margin-right: 120px;

	.image-component-wrapper {
		height: 50px;
		width: 50px;
	}
`;

const Img = styled.img`
	max-width: 150px;
	max-height: 60px;
`;

const PartnerLogos = ({ data, zIndex }) => {
	const moreLogos = data?.logos.concat(data.logos);

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-5%',
	});

	return (
		<PartnerLogosWrapper
			ref={ref}
			className={`performance tab-radius view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
			$zIndex={zIndex}
		>
			<InnerWrapper>
				<PartnerLogosInner>
					<Title className="type-p">
						{data?.title && data?.title}
					</Title>
				</PartnerLogosInner>
			</InnerWrapper>
			{moreLogos.length > 0 && (
				<LogosTickerWrapper>
					<Marquee pauseOnHover gradient={false} speed={50}>
						{moreLogos.map((item, index) => (
							<MediaWrapper key={index}>
								<Img src={item?.image?.url} />
							</MediaWrapper>
						))}
					</Marquee>
				</LogosTickerWrapper>
			)}
		</PartnerLogosWrapper>
	);
};

export default PartnerLogos;
