import styled from 'styled-components';
import MediaStack from '../../elements/MediaStack';

const MediaSectionWrapper = styled.div`
	.video-component-wrapper {
		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			height: 600px;
		}
	}
`;

const MediaSectionInner = styled.div``;

const MediaSection = ({ data }) => {
	return (
		<MediaSectionWrapper>
			<MediaSectionInner>
				<MediaStack data={data?.media[0]} />
			</MediaSectionInner>
		</MediaSectionWrapper>
	);
};

export default MediaSection;
