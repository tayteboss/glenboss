import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';
import useActiveLink from '../../../hooks/useActiveLink';
import cleanUrl from '../../../utils/cleanUrl';
import InnerWrapper from '../../common/InnerWrapper';

const FooterMenuWrapper = styled.div`
	padding: 60px 0 32px;
`;

const FooterMenuInner = styled(motion.div)``;

const MotionElement = styled(motion.div)`
	display: inline;

	&:not(:last-child) {
		margin-right: 5px;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: inline-block;
	}
`;

const FooterMenuLink = styled(motion.a)`
	color: ${(props) =>
		props.$isActive
			? 'var(--colour-white)'
			: 'var(--colour-system-white-grey-800)'};
	text-decoration: none;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		color: var(--colour-system-white-grey-600);
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		&.type-h1 {
			font-size: 2rem;
		}
	}
`;

const wrapperVariants = {
	hidden: {
		transition: {
			duration: 0,
			ease: 'easeInOut',
		},
	},
	visible: {
		transition: {
			duration: 0,
			ease: 'easeInOut',
			staggerChildren: 0.1,
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

const FooterMenu = ({ data, inView }) => {
	const hasData = data?.length > 0;
	const activeLink = useActiveLink();
	if (!hasData) return <></>;

	return (
		<FooterMenuWrapper>
			<InnerWrapper>
				<FooterMenuInner
					variants={wrapperVariants}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
				>
					{data.map((item, index) => (
						<MotionElement key={index} variants={childVariants}>
							<Link href={cleanUrl(item)} passHref scroll={false}>
								<FooterMenuLink
									$isActive={activeLink === item.linkTitle}
									className="type-h1"
								>
									{item.linkTitle && item.linkTitle},
								</FooterMenuLink>
							</Link>
						</MotionElement>
					))}
				</FooterMenuInner>
			</InnerWrapper>
		</FooterMenuWrapper>
	);
};

export default FooterMenu;
