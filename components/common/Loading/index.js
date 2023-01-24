import styled from 'styled-components';
import { motion } from 'framer-motion';
import BarLoader from 'react-spinners/BarLoader';

const LoadingWrapper = styled(motion.div)`
	z-index: 500;
	position: fixed;
	top: 0;
	left: 0;
	height: calc(var(--vh) * 100);
	width: 100%;
`;

const LoaderWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;

	& > span {
		width: 100% !important;
	}
`;

const fadeVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
};

const Loading = () => {
	return (
		<LoadingWrapper
			variants={fadeVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			<LoaderWrapper>
				<BarLoader
					color="#ACADAA"
					loading
					height={2}
					speedMultiplier={0.5}
				/>
			</LoaderWrapper>
		</LoadingWrapper>
	);
};

export default Loading;
