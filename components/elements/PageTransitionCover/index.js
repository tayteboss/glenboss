import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const PageTransitionCoverWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	/* background: var(--colour-white); */
	background: red;
	z-index: 200;
`;

const wrapperVariants = {
	hidden: {
		opacity: 1,
		transition: {
			duration: 0.3,
			delay: 1,
			ease: 'easeInOut',
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			delay: 1,
			ease: 'easeInOut',
		},
	},
};

const PageTransitionCover = ({ isActive }) => {
	return (
		<AnimatePresence>
			{isActive && (
				<PageTransitionCoverWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				/>
			)}
		</AnimatePresence>
	);
};

export default PageTransitionCover;
