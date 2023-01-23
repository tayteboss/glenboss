import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import RichText from '../../common/RichText';
import { CursorContext } from '../../layout/Layout';
import Cross from '../../Svgs/Cross';

const ContentModalWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	right: 0;
	background: var(--colour-white);
	border-top-left-radius: 16px;
	border-bottom-left-radius: 16px;
	overflow: hidden;
	width: 70vw;
	max-width: 950px;
	z-index: 200;
	height: 100vh;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
	overflow-y: auto;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: 90vw;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		width: 100%;
	}
`;

const CloseTriggerPanel = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: var(--colour-black);
	z-index: 199;
`;

const ImageWrapper = styled.div`
	height: 560px;
	width: 100%;
	overflow: hidden;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		height: 200px;
	}
`;

const Img = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
`;

const ContentWrapper = styled.div`
	padding: 32px;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: 16px;
	}
`;

const CloseTriggerIcon = styled(motion.button)`
	position: fixed;
	top: 16px;
	right: 16px;
	height: 32px;
	width: 32px;
	background: var(--colour-white);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 201;
	border-radius: 100%;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: var(--colour-black);

		svg {
			line,
			path {
				stroke: var(--colour-white);
			}
		}
	}

	svg {
		line,
		path {
			transition: all var(--transition-speed-default) var(--transition-ease);
		}
	}
`;

const contentVariants = {
	hidden: {
		x: '100%',
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
	visible: {
		x: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
};

const triggerPanelVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
	visible: {
		opacity: 0.85,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
};

const triggerIconVariants = {
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

const ContentModal = ({ data, handleCloseModal }) => {
	const { cursorRefresh, setCursorRefresh } = useContext(CursorContext);

	useEffect(() => {
		setCursorRefresh(cursorRefresh + 1);
	}, []);

	return (
		<AnimatePresence>
			{data && (
				<>
					<ContentModalWrapper
						key={1}
						variants={contentVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						<ImageWrapper>
							<Img src={data?.media?.url} />
						</ImageWrapper>
						<ContentWrapper>
							<RichText data={data?.textContent} />
						</ContentWrapper>
					</ContentModalWrapper>
					<CloseTriggerPanel
						className="cursor-close"
						key={2}
						variants={triggerPanelVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						onClick={() => handleCloseModal()}
					/>
					<CloseTriggerIcon
						className="cursor-link"
						key={3}
						variants={triggerIconVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						onClick={() => handleCloseModal()}
					>
						<Cross />
					</CloseTriggerIcon>
				</>
			)}
		</AnimatePresence>
	);
};

export default ContentModal;
