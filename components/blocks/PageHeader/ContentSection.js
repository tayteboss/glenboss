import { useTransform, useScroll, motion } from 'framer-motion';
import styled from 'styled-components';
import InnerWrapper from '../../common/InnerWrapper';
import PrimaryButton from '../../elements/PrimaryButton';
import PrimaryLink from '../../elements/PrimaryLink';

const ContentSectionWrapper = styled(motion.div)``;

const ContentSectionInner = styled.div`
	display: flex;
	flex-direction: ${(props) => props.$hasButtons ? 'column' : 'row'};
	justify-content: ${(props) => props.$hasButtons ? 'flex-start' : 'space-between'};
	align-items: ${(props) => props.$hasButtons ? 'flex-start' : 'flex-end'};
	padding: 180px 0 32px;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const TitleWrapper = styled.div`
	max-width: 1000px;
	padding-right: 16px;
`;

const Title = styled.h1`
	color: ${(props) =>
		props.$isSecondary
			? 'var(--colour-system-white-grey-800)'
			: 'var(--colour-black)'};
`;

const ContentSectionButtonWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	row-gap: 16px;
	margin-top: 32px;
`;

const PrimaryLinkWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-top: 32px;
	}
`;

const PrimaryButtonWrapper = styled.div`
	&:not(:last-child) {
		margin-right: 8px;
	}
`;

const ContentSection = ({ data, handleClick }) => {
	const { scrollY } = useScroll();
	const y1 = useTransform(scrollY, [0, 400], [0, 150]);
	const hasLinks = data?.link.length > 0;
	const hasButtons = data?.buttons.length > 0;

	return (
		<ContentSectionWrapper style={{ y: y1 }}>
			<InnerWrapper>
				<ContentSectionInner $hasButtons={hasButtons}>
					<TitleWrapper className="page-header__title-wrapper">
						{data?.primaryHeading && (
							<Title>{data?.primaryHeading}</Title>
						)}
						{data?.secondaryHeading && (
							<Title $isSecondary>{data?.secondaryHeading}</Title>
						)}
					</TitleWrapper>
					{hasLinks && (
						<PrimaryLinkWrapper>
							<PrimaryLink data={data?.link[0]} useDarkTheme />
						</PrimaryLinkWrapper>
					)}
					{hasButtons && (
						<ContentSectionButtonWrapper>
							{data.buttons.map((item, index) => (
								<PrimaryButtonWrapper key={index}>
									<PrimaryButton
										data={item}
										isActive={index === 0}
										handleClick={handleClick}
										useDarkTheme
									/>
								</PrimaryButtonWrapper>
							))}
						</ContentSectionButtonWrapper>
					)}
				</ContentSectionInner>
			</InnerWrapper>
		</ContentSectionWrapper>
	);
};

export default ContentSection;
