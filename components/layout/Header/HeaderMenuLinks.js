import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import cleanUrl from '../../../utils/cleanUrl';

const HeaderMenuLinkOuter = styled(motion.div)`
	&:not(:last-child) {
		margin-right: 8px;
	}
`;

const HeaderMenuLink = styled.a`
	text-decoration: none;
	color: var(--colour-system-white-grey-800);
	margin-bottom: 64px;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		color: var(--colour-white);
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

const HeaderMenuLinks = ({ data }) => {
	const hasData = data?.length > 0;
	if (!hasData) return <></>;

	return data.map((item, index) => (
		<HeaderMenuLinkOuter
			variants={wrapperVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
			key={index}
		>
			<Link href={cleanUrl(item)} passHref>
				<HeaderMenuLink>
					{item.linkTitle && item.linkTitle}
				</HeaderMenuLink>
			</Link>
		</HeaderMenuLinkOuter>
	));
};

export default HeaderMenuLinks;
