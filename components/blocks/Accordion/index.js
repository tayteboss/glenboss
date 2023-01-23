import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import RichText from '../../common/RichText';
import Chevron from '../../Svgs/Chevron';

const AccordionWrapper = styled.div`
	grid-column: span 6;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

const AccordionBlockWrapper = styled.div`
	margin-bottom: 32px;
`;

const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	padding: 0 16px 16px 0;

	&:hover {
		h1 {
			color: var(--colour-black);
		}

		&::after {
			width: 100%;
		}
	}

	&::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: var(--colour-system-white-grey-700);
		z-index: 1;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: ${(props) => (props.$isOpen ? '100%' : 0)};
		height: 2px;
		background: var(--colour-system-white-grey-900);
		z-index: 2;

		transition: all var(--transition-speed-slow) var(--transition-ease);
	}

	svg {
		transform: ${(props) =>
			props.$isOpen ? 'rotate(-90deg)' : 'rotate(90deg)'};

		transition: all var(--transition-speed-default) var(--transition-ease);

		path {
			fill: var(--colour-system-white-grey-900);
		}
	}
`;

const Title = styled.h1`
	color: ${(props) =>
		props.$isOpen
			? 'var(--colour-black)'
			: 'var(--colour-system-white-grey-800)'};

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const ContentWrapper = styled(motion.div)``;

const ContentInner = styled(motion.div)`
	padding: 16px 0 32px;
`;

const wrapperVariants = {
	hidden: {
		height: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			when: 'afterChildren',
		},
	},
	visible: {
		height: 'auto',
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
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

const AccordionBlock = ({ data }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<AccordionBlockWrapper>
			<TitleWrapper
				className="cursor-link"
				onClick={() => setIsOpen(!isOpen)}
				$isOpen={isOpen}
			>
				<Title $isOpen={isOpen}>{data?.title && data?.title}</Title>
				<Chevron />
			</TitleWrapper>
			<AnimatePresence>
				{isOpen && (
					<ContentWrapper
						variants={wrapperVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						<ContentInner variants={childVariants}>
							<RichText data={data?.textContent} />
						</ContentInner>
					</ContentWrapper>
				)}
			</AnimatePresence>
		</AccordionBlockWrapper>
	);
};

const Accordion = ({ data }) => {
	const hasBlocks = data.length > 0;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-5%',
	});

	return (
		<AccordionWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			{hasBlocks &&
				data.map((item, index) => (
					<AccordionBlock data={item} key={index} />
				))}
		</AccordionWrapper>
	);
};

export default Accordion;
