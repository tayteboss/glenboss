import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import InnerWrapper from '../../common/InnerWrapper';
import Loading from '../../common/Loading';

const LandingSequenceWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: calc(var(--vh) * 100);
	z-index: 200;
	background: var(--colour-black);

	.inner-wrapper {
		height: 100%;
		overflow: hidden;
	}
`;

const LandingSequenceInner = styled.div`
	display: flex;
	bottom: 0;
	left: 0;
	align-items: flex-end;
	height: calc(var(--vh) * 100);
	position: relative;
	padding: 16px 0;
`;

const Initial = styled(motion.div)`
	margin-right: ${(props) => (props.$mr ? props.$mr : 0)};
	color: var(--colour-white);
	font-size: 17vw;
	line-height: 1;
	letter-spacing: -0.4rem;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		letter-spacing: 0;
	}
`;

const Full = styled(motion.div)`
	color: var(--colour-white);
	margin-right: ${(props) => (props.$mr ? props.$mr : 0)};
	font-size: 17vw;
	line-height: 1;
	letter-spacing: -0.4rem;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-right: ${(props) => (props.$mr ? '15px' : 0)};
		letter-spacing: 0;
	}
`;

const LoadingText = styled.p`
	position: absolute;
	top: 16px;
	right: 0;
	color: var(--colour-system-white-grey-700);
	opacity: ${(props) => (props.$isActive ? 1 : 0)};

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const wrapperVariants = {
	hidden: {
		height: 0,
		transition: {
			duration: 0.4,
			ease: 'easeInOut',
			delay: 1,
		},
	},
	visible: {
		height: '100vh',
		transition: {
			duration: 0.4,
			ease: 'easeInOut',
			delay: 0.1,
		},
	},
};

const fullVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			delay: 0,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			delay: 0,
		},
	},
};

const LandingSequence = ({ siteReady }) => {
	return (
		<LandingSequenceWrapper
			variants={wrapperVariants}
			initial="hidden"
			animate={siteReady ? 'hidden' : 'visible'}
		>
			<InnerWrapper>
				<LandingSequenceInner>
					<LoadingText $isActive={!siteReady}>Loading...</LoadingText>
					<AnimatePresence>
						{!siteReady && <Loading />}
					</AnimatePresence>
					<AnimatePresence>
						<Initial layout key={1}>
							G
						</Initial>
						{!siteReady && (
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
						{!siteReady && (
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
						{!siteReady && (
							<Full
								layout
								$mr="30px"
								key={4}
								variants={fullVariants}
								initial="hidden"
								animate="visible"
								exit="hidden"
							>
								n
							</Full>
						)}
						<Initial layout key={5}>
							B
						</Initial>
						{!siteReady && (
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
						{!siteReady && (
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
						{!siteReady && (
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
				</LandingSequenceInner>
			</InnerWrapper>
		</LandingSequenceWrapper>
	);
};

export default LandingSequence;
