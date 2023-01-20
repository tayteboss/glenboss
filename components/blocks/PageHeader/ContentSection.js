import { useTransform, useScroll, motion } from 'framer-motion';
import styled from 'styled-components';
import InnerWrapper from '../../common/InnerWrapper';
import PrimaryLink from '../../elements/PrimaryLink';

const ContentSectionWrapper = styled(motion.div)``;

const ContentSectionInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 180px 0 32px;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const TitleWrapper = styled.div`
	max-width: 750px;
	padding-right: 16px;
`;

const Title = styled.h1`
	color: ${(props) =>
		props.$isSecondary
			? 'var(--colour-system-white-grey-800)'
			: 'var(--colour-black)'};
`;

const PrimaryButtonWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-top: 32px;
	}
`;

const ContentSection = ({ data }) => {
	const { scrollY } = useScroll();
	const y1 = useTransform(scrollY, [0, 400], [0, 150]);

	return (
		<ContentSectionWrapper style={{ y: y1 }}>
			<InnerWrapper>
				<ContentSectionInner>
					<TitleWrapper>
						{data?.primaryHeading && (
							<Title>{data?.primaryHeading}</Title>
						)}
						{data?.secondaryHeading && (
							<Title $isSecondary>{data?.secondaryHeading}</Title>
						)}
					</TitleWrapper>
					<PrimaryButtonWrapper>
						<PrimaryLink data={data?.link[0]} useDarkTheme />
					</PrimaryButtonWrapper>
				</ContentSectionInner>
			</InnerWrapper>
		</ContentSectionWrapper>
	);
};

export default ContentSection;
