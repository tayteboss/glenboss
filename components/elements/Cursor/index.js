import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useMousePosition } from '../../../hooks/useMousePosition';

const CursorWrapper = styled.div`
	mix-blend-mode: difference;
	height: 27px;
	width: 27px;
	z-index: 1000;
	position: fixed;
	display: ${(props) => (props.isOnDevice ? 'none' : 'block')};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: none;
	}
`;

const CursorRing = styled(motion.div)`
	position: fixed;
	display: flex;
	flex-flow: row;
	align-content: center;
	justify-content: center;
	top: ${(props) =>
		props.$isHoveringLargeLink
			? '-40px'
			: props.$isDragging
			? '0'
			: props.$isHoveringDrag
			? '-25px'
			: props.$isHoveringLink
			? '-15px'
			: '-5px'};
	left: ${(props) =>
		props.$isHoveringLargeLink
			? '-40px'
			: props.$isDragging
			? '-40px'
			: props.$isHoveringDrag
			? '-25px'
			: props.$isHoveringLink
			? '-15px'
			: '-5px'};
	height: ${(props) =>
		props.$hideCursor
			? '0'
			: props.$isDragging
			? '10px'
			: props.$isHoveringDrag
			? '50px'
			: props.$isHoveringLargeLink
			? '80px'
			: props.$isHoveringLink
			? '30px'
			: '10px'};
	width: ${(props) =>
		props.$hideCursor
			? '0'
			: props.$isDragging
			? '80px'
			: props.$isHoveringDrag
			? '50px'
			: props.$isHoveringLargeLink
			? '80px'
			: props.$isHoveringLink
			? '30px'
			: '10px'};
	background: ${(props) =>
		props.$isDragging
			? 'var(--colour-white)'
			: props.$isHoveringDrag
			? 'none'
			: 'var(--colour-white)'};
	border-radius: 100px;
	border: 1px solid var(--colour-white);
	mix-blend-mode: difference;
	pointer-events: none;
	text-align: center;
	z-index: 2;

	transition: height 300ms ease, width 300ms ease, background 200ms ease,
		top 300ms ease, left 300ms ease, border-radius 300ms ease;
`;

const CursorText = styled.span`
	opacity: 1;
	margin-top: -5px;
	text-transform: uppercase;
	letter-spacing: 0.036rem;
	font-size: 0.75rem;
	color: ${(props) => props.theme.colours.white};
	white-space: nowrap;
	padding-top: 14px;

	transition: opacity 300ms ease 300ms, padding-top 300ms ease;
`;

const Cursor = ({ cursorRefresh }) => {
	const [isHoveringLink, setIsHoveringLink] = useState(false);
	const [isHoveringLargeLink, setIsHoveringLargeLink] = useState(false);
	const [hideCursor, setHideCursor] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [isHoveringDrag, setIsHoveringDrag] = useState(false);
	const [cursorText, setCursorText] = useState('');
	const [isOnDevice, setIsOnDevice] = useState(false);
	const position = useMousePosition();
	const router = useRouter();

	const mouseXPosition = position.x;
	const mouseYPosition = position.y;

	const variantsWrapper = {
		visible: {
			x: mouseXPosition,
			y: mouseYPosition,
			transition: {
				type: 'spring',
				mass: 0.05,
				stiffness: 1000,
				damping: 40,
				ease: 'linear',
			},
		},
	};

	useEffect(() => {
		const aTags = document.querySelectorAll('a');
		const altLinks = document.querySelectorAll('.cursor-link');
		const hideLinks = document.querySelectorAll('.cursor-hide');
		const dragLinks = document.querySelectorAll('.cursor-drag');
		const closeLinks = document.querySelectorAll('.cursor-close');
		const largeLinks = document.querySelectorAll('.cursor-large-link');

		aTags.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringLink(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringLink(false);
			});
		});

		altLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringLink(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringLink(false);
			});
		});

		hideLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setHideCursor(true);
			});
			link.addEventListener('mouseleave', () => {
				setHideCursor(false);
			});
		});

		largeLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringLargeLink(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringLargeLink(false);
			});
		});

		dragLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setCursorText('drag');
				setIsHoveringDrag(true);
			});
			link.addEventListener('mouseleave', () => {
				setCursorText('');
				setIsDragging(false);
				setIsHoveringDrag(false);
			});
			link.addEventListener('mousedown', () => {
				setIsDragging(true);
				setCursorText('');
			});
			link.addEventListener('mouseup', () => {
				setCursorText('drag');
				setIsDragging(false);
			});
			link.addEventListener('click', () => {
				setIsDragging(false);
			});
		});

		closeLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setCursorText('close');
				setIsHoveringDrag(true);
			});
			link.addEventListener('mouseleave', () => {
				setCursorText('');
				setIsDragging(false);
				setIsHoveringDrag(false);
			});
			link.addEventListener('mousedown', () => {
				setCursorText('');
				setIsDragging(false);
				setIsHoveringDrag(false);
			});
			link.addEventListener('mouseup', () => {
				setCursorText('');
				setIsDragging(false);
				setIsHoveringDrag(false);
			});
			link.addEventListener('click', () => {
				setCursorText('');
				setIsDragging(false);
				setIsHoveringDrag(false);
			});
		});

		// checking if on a device
		const ua = navigator.userAgent;
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			setIsOnDevice(true);
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			setIsOnDevice(true);
		}
	}, [cursorRefresh]);

	useEffect(() => {
		setIsHoveringLink(false);
		setIsHoveringLargeLink(false);
		setHideCursor(false);
		setIsDragging(false);
		setCursorText(false);
	}, [router.asPath, cursorRefresh]);

	return (
		<CursorWrapper isOnDevice={isOnDevice}>
			<CursorRing
				$isHoveringLargeLink={isHoveringLargeLink}
				$isHoveringLink={isHoveringLink}
				$isDragging={isDragging}
				$isHoveringDrag={isHoveringDrag}
				$hideCursor={hideCursor}
				variants={variantsWrapper}
				animate="visible"
			>
				<CursorText>{cursorText}</CursorText>
			</CursorRing>
		</CursorWrapper>
	);
};

export default Cursor;
