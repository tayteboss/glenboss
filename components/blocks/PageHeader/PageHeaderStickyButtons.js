import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import useScrolled from '../../../hooks/useScrolled';
import SecondaryButton from '../../elements/SecondaryButton';

const PageHeaderStickyButtonsWrapper = styled(motion.div)`
	position: fixed;
	bottom: 16px;
	right: 16px;
	background: var(--colour-system-white-grey-50);
	padding: 8px 32px;
	display: flex;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
	border-radius: 100px;
`;

const SecondaryButtonWrapper = styled(motion.div)`
	&:not(:last-child) {
		margin-right: 16px;
	}
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			staggerChildren: 0.1,
			when: 'afterChildren',
			staggerDirection: -1,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			staggerChildren: 0.1,
			when: 'beforeChildren',
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
		},
	},
};

const PageHeaderStickyButtons = ({ data, handleClick }) => {
	const hasScrolled = useScrolled(100);

	return (
		<AnimatePresence>
			{hasScrolled && (
				<PageHeaderStickyButtonsWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					{data.map((item, index) => (
						<SecondaryButtonWrapper
							key={index}
							variants={childVariants}
						>
							<SecondaryButton
								data={item}
								isActive={index === 0}
								handleClick={handleClick}
							/>
						</SecondaryButtonWrapper>
					))}
				</PageHeaderStickyButtonsWrapper>
			)}
		</AnimatePresence>
	);
};

export default PageHeaderStickyButtons;
