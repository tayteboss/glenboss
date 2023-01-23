import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion } from 'framer-motion';
import StoryContent from './StoryContent';
import useViewportWidth from '../../../hooks/useViewportWidth';

const YearBlockWrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	:not(:last-child) {
		margin-bottom: 90vh;

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			margin-bottom: 400px;
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			margin-bottom: 90vh;
		}
	}
`;

const Year = styled(motion.div)`
	font-size: 30vw;
	color: var(--colour-system-black-grey-400);
	position: relative;
	z-index: 1;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: 40vw;
	}
`;

const yearVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
	visible: {
		opacity: 0.33,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
};

const YearBlock = ({ data }) => {
	const hasContent = data?.contentBlocks.length > 0;
	const viewportWidth = useViewportWidth();

	const { ref, inView } = useInView({
		triggerOnce: false,
		rootMargin: viewportWidth === 'mobile' ? '-100px' : viewportWidth === 'tabletPortrait' ? '-200px' : '-300px',
	});

	return (
		<YearBlockWrapper ref={ref}>
			<AnimatePresence mode="wait">
				{inView && (
					<Year
						variants={yearVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						{data.year && data.year}
					</Year>
				)}
			</AnimatePresence>
			{hasContent &&
				data.contentBlocks.map((item, index) => (
					<StoryContent data={item} key={index} />
				))}
		</YearBlockWrapper>
	);
};

export default YearBlock;
