import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const NeutralSequenceWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: calc(var(--vh) * 100);
	background: var(--colour-black);
	z-index: 150;
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			delay: 0.5,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			delay: 0.5,
		},
	},
};

const NeutralSequence = ({ siteReady }) => {
	return (
		<AnimatePresence>
			{!siteReady && (
				<NeutralSequenceWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				/>
			)}
		</AnimatePresence>
	);
};

export default NeutralSequence;
