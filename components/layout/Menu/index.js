import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import InnerWrapper from '../../common/InnerWrapper';
import Grid from '../../common/Grid';
import MenuList from './MenuList';
import MenuContact from './MenuContact';
import MenuSecondaryLinks from './MenuSecondaryLinks';

const MenuWrapper = styled(motion.div)`
	z-index: 90;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background: var(--colour-black);
`;

const MenuInner = styled(motion.div)``;

const wrapperVariants = {
	hidden: {
		height: 0,
		pointerEvents: 'none',
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			delay: 0.5,
			delayChildren: 0.2,
		},
	},
	visible: {
		height: '100vh',
		pointerEvents: 'all',
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
};

const childVariants = {
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
			delay: 0.3,
		},
	},
};

const Menu = ({ isActive }) => {
	return (
		<AnimatePresence>
			{isActive && (
				<MenuWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<MenuInner variants={childVariants}>
						<InnerWrapper>
							<Grid>
								<MenuContact />
								<MenuList isActive={isActive} />
								<MenuSecondaryLinks />
							</Grid>
						</InnerWrapper>
					</MenuInner>
				</MenuWrapper>
			)}
		</AnimatePresence>
	);
};

export default Menu;
