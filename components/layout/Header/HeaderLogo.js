import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';
import useScrolled from '../../../hooks/useScrolled';

const HeaderLogoWrapper = styled.div``;

const LinkWrapper = styled.a`
	text-decoration: none;
	display: flex;
`;

const Initial = styled(motion.div)`
	margin-right: ${(props) => (props.$mr ? props.$mr : 0)};
	color: var(--colour-white);
`;

const Full = styled(motion.div)`
	margin-right: ${(props) => (props.$mr ? props.$mr : 0)};
	color: var(--colour-white);
`;

const fullVariants = {
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

const HeaderLogo = ({ menuIsOpen }) => {
	const hasScrolled = useScrolled(100);

	return (
		<HeaderLogoWrapper>
			<Link href="/" passHref>
				<LinkWrapper>
					<AnimateSharedLayout>
						<AnimatePresence>
							<Initial layout key={1}>G</Initial>
							{(!hasScrolled || menuIsOpen) && (
								<Full
									layout
									key={2}
									variants={fullVariants}
									initial="hidden"
									animate="visible"
									exit="hidden"
								>
									l
								</Full>
							)}
							{(!hasScrolled || menuIsOpen) && (
								<Full
									layout
									key={3}
									variants={fullVariants}
									initial="hidden"
									animate="visible"
									exit="hidden"
								>
									e
								</Full>
							)}
							{(!hasScrolled || menuIsOpen) && (
								<Full
									layout
									$mr="4px"
									key={4}
									variants={fullVariants}
									initial="hidden"
									animate="visible"
									exit="hidden"
								>
									n
								</Full>
							)}
							<Initial layout key={5}>B</Initial>
							{(!hasScrolled || menuIsOpen) && (
								<Full
									layout
									key={6}
									variants={fullVariants}
									initial="hidden"
									animate="visible"
									exit="hidden"
								>
									o
								</Full>
							)}
							{(!hasScrolled || menuIsOpen) && (
								<Full
									layout
									key={7}
									variants={fullVariants}
									initial="hidden"
									animate="visible"
									exit="hidden"
								>
									s
								</Full>
							)}
							{(!hasScrolled || menuIsOpen) && (
								<Full
									layout
									key={8}
									variants={fullVariants}
									initial="hidden"
									animate="visible"
									exit="hidden"
								>
									s
								</Full>
							)}
						</AnimatePresence>
					</AnimateSharedLayout>
				</LinkWrapper>
			</Link>
		</HeaderLogoWrapper>
	);
};

export default HeaderLogo;
