import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import styled from 'styled-components';

const PartnersArtworkWrapper = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: red;
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
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
};

const PartnersArtwork = ({ data, index }) => {
	return (
		<AnimatePresence>
			{index && (
				<PartnersArtworkWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					{data[Number(index)]?.name}
				</PartnersArtworkWrapper>
			)}
		</AnimatePresence>
	);
};

export default PartnersArtwork;
