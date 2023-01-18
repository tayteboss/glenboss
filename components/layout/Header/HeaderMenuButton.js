import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const HeaderMenuButtonWrapper = styled.div`
	position: relative;
`;

const MenuButton = styled(motion.button)`
	position: relative;
	z-index: 3;
	color: var(--colour-white);
	mix-blend-mode: difference;

	&:hover {
		&::before {
			height: 6px;
			width: 6px;
			transform: translate(-1px, 1px);
		}
	}

	&::before {
		content: '';
		position: absolute;
		top: 10px;
		right: calc(100% + 7px);
		background: var(--colour-white);
		height: 8px;
		width: 8px;
		border-radius: 100%;
		z-index: 1;
		mix-blend-mode: difference;

		transition: all var(--transition-speed-default) var(--transition-ease);
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
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
};

const HeaderMenuButton = ({ setMenuIsOpen, menuIsOpen }) => {
	return (
		<HeaderMenuButtonWrapper>
			<AnimatePresence exitBeforeEnter>
				{menuIsOpen && (
					<MenuButton
						onClick={() => setMenuIsOpen(!menuIsOpen)}
						$menuIsOpen={menuIsOpen}
						variants={wrapperVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						Close
					</MenuButton>
				)}
				{!menuIsOpen && (
					<MenuButton
						onClick={() => setMenuIsOpen(!menuIsOpen)}
						$menuIsOpen={menuIsOpen}
						variants={wrapperVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						Menu
					</MenuButton>
				)}
			</AnimatePresence>
		</HeaderMenuButtonWrapper>
	);
};

export default HeaderMenuButton;
