import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import MenuListLink from './MenuListLink';

const options = require('../../../json/options.json');

const MenuListWrapper = styled.div`
	grid-column: span 6;
	position: relative;
	height: 100vh;
`;

const MenuListInner = styled(motion.div)`
	height: 100%;
	overflow-y: scroll;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
`;

const MotionElement = styled(motion.div)`
	&:first-child {
		padding-top: 40vh;
	}
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.1,
			ease: 'easeInOut',
			staggerChildren: 0.15,
			when: 'afterChildren',
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.1,
			ease: 'easeInOut',
			staggerChildren: 0.15,
			when: 'beforeChildren',
		},
	},
};

const childVariants = {
	hidden: {
		opacity: 0,
		y: 20,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
};

const MenuList = ({ isActive }) => {
	const menuLinks = options?.data?.siteInformation.menu[0]?.links;
	const hasMenuLinks = menuLinks.length > 0;

	return (
		<MenuListWrapper>
			<MenuListInner
				variants={wrapperVariants}
				initial="hidden"
				animate={isActive ? 'visible' : 'hidden'}
			>
				{hasMenuLinks &&
					menuLinks.map((item, index) => (
						<MotionElement
							variants={childVariants}
							key={index}
						>
							<MenuListLink data={item} key={index} />
						</MotionElement>
					))}
			</MenuListInner>
		</MenuListWrapper>
	);
};

export default MenuList;
