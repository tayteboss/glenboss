import styled from 'styled-components';
import InnerWrapper from '../../common/InnerWrapper';
import PrimaryLink from '../../elements/PrimaryLink';

const ContentSectionWrapper = styled.div``;

const ContentSectionInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 180px 0 32px;
`;

const TitleWrapper = styled.div``;

const Title = styled.h1`
	max-width: 750px;
	color: ${(props) => props.$isSecondary ? 'var(--colour-system-white-grey-800)' : 'var(--colour-black)'};
`;

const ContentSection = ({ data }) => {
	return (
		<ContentSectionWrapper>
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
					<PrimaryLink data={data?.link[0]} useDarkTheme />
				</ContentSectionInner>
			</InnerWrapper>
		</ContentSectionWrapper>
	);
};

export default ContentSection;
