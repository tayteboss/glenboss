import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import MediaStack from '../../elements/MediaStack';

const PartnersArtworkWrapper = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	overflow: hidden;

	.video-component-wrapper,
	& > div {
		height: 100%;
		width: 100%;
	}

	video {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.7,
			ease: 'easeInOut',
		},
	},
};

const PartnersArtwork = ({ data, index }) => {
	console.log('data', data[Number(index)]?.media);

	return (
		<AnimatePresence>
			{index && (
				<PartnersArtworkWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<MediaStack data={data[Number(index)]?.media[0]} />
				</PartnersArtworkWrapper>
			)}
		</AnimatePresence>
	);
};

export default PartnersArtwork;
