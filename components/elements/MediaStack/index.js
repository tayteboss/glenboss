import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import ImageComponent from './ImageComponent';
import VideoComponent from './VideoComponent';

const MediaStackWrapper = styled.div`
	overflow: hidden;
`;

const Caption = styled.h3`
	margin-top: 16px;
`;

const MediaStack = ({ data }) => {
	const useVideo = data?.useVideo && data?.video?.url;
	const useImage = !data?.useVideo && data?.image;
	const useCaption = data?.caption;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-5%',
	});

	return (
		<MediaStackWrapper ref={ref}>
			{useVideo && <VideoComponent data={data.video} inView={inView} />}
			{useImage && <ImageComponent data={data.image} />}
			{useCaption && <Caption>{data.caption}</Caption>}
		</MediaStackWrapper>
	);
};

export default MediaStack;
