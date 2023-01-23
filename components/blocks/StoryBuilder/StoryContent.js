import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import InnerWrapper from '../../common/InnerWrapper';
import MediaStack from '../../elements/MediaStack';

const StoryContentWrapper = styled.div`
	margin-bottom: 400px;
	position: relative;
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		margin-bottom: 200px;
	}
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: ${(props) => props.$mediaRHS ? 'row-reverse' : 'row'};
	align-items: center;
	justify-content: center;
	column-gap: 10%;
	row-gap: 64px;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex-direction: column;
	}
`;

const MediaWrapper = styled.div`
	position: relative;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: ${(props) => !props.$inView ? '100%' : 0};
		background: var(--colour-black);

		transition: all 750ms var(--transition-ease);
	}

	.image-component-wrapper,
	.video-component-wrapper {
		width: ${(props) => props.$fullScreen ? '90vw' : props.$noText ? '60vw' : '40vw'};
		border-radius: 8px;
		overflow: hidden;

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			width: 90vw;
		}
	}
`;

const TextWrapper = styled.div`
	max-width: ${(props) => props.$noMedia ? '900px' : '500px'};
	text-align: ${(props) => props.$noMedia ? 'center' : 'left'};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		text-align: center;
		max-width: 80vw;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		max-width: 90vw;
	}
`;

const Text = styled.h1`
	color: var(--colour-white);
`;

const StoryContent = ({ data }) => {
	const hasMedia = data?.media[0];

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-10%',
	});

	return (
		<StoryContentWrapper ref={ref}>
			<InnerWrapper>
				<ContentWrapper $mediaRHS={data?.mediaOnRhs}>
					{hasMedia && (
						<MediaWrapper
							$noText={!data?.includeTextContent}
							$fullScreen={data?.mediaFullScreen}
							$inView={inView}
						>
							<MediaStack data={data?.media[0]} />
						</MediaWrapper>
					)}
					{data?.includeTextContent && (
						<TextWrapper
							$noMedia={!data?.media[0]}
							className={`view-element-bottom-top ${
								inView ? 'view-element-bottom-top--in-view' : ''
							}`}
						>
							<Text>
								{data?.textContent && data?.textContent}
							</Text>
						</TextWrapper>
					)}
				</ContentWrapper>
			</InnerWrapper>
		</StoryContentWrapper>
	);
};

export default StoryContent;
