import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import InnerWrapper from '../../common/InnerWrapper';
import MediaStack from '../../elements/MediaStack';

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
	return (
		<PartnerLogosWrapper className="tab-radius" $zIndex={zIndex}>
			<InnerWrapper>
				<PartnerLogosInner>
					<Title className="type-p">
						{data?.title && data?.title}
					</Title>
				</PartnerLogosInner>
			</InnerWrapper>
			<LogosTickerWrapper>
				<Marquee pauseOnHover gradient={false} speed={50}>
					{data?.logos.map((item, index) => (
						<MediaWrapper>
							<Img src={item?.image?.url} key={index} />
						</MediaWrapper>
					))}
				</Marquee>
			</LogosTickerWrapper>
		</PartnerLogosWrapper>
	);
};

export default PartnerLogos;
