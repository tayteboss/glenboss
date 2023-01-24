import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import MediaStack from '../../elements/MediaStack';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const ContactGalleryWrapper = styled.div`
	padding-top: 80px;
`;

const OverflowWrapper = styled.div`
	width: 100%;
	overflow: hidden;
	contain: content;

	&:not(:last-child) {
		margin-bottom: 16px;
	}
`;

const SliderWrapper = styled.div``;

const Slider = styled(motion.div)`
	display: flex;
	flex-wrap: nowrap;
`;

const MediaWrapper = styled.div`
	position: relative;
	margin-right: 16px;

	.image-component-wrapper {
		width: 350px;
		height: 350px;
		border-radius: 8px;
		overflow: hidden;

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			width: 200px;
			height: 200px;
		}
	}
`;

const ContactGallery = ({ data }) => {
	function shuffle(array) {
		let currentIndex = array.length;
		let randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex != 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	}

	const sliderOne = shuffle(data);
	const sliderTwo = shuffle(data);

	const [maxTransform, setMaxTransform] = useState(null);

	const { width } = useWindowDimensions();

	const sliderRef = useRef(null);

	useEffect(() => {
		const containerElWidth = sliderRef?.current?.offsetWidth;

		const imageElWidth = containerElWidth * 1.5;

		const transformThreshold =
			containerElWidth - imageElWidth < 1
				? containerElWidth - imageElWidth
				: 0;
		setMaxTransform(transformThreshold);
	}, [sliderRef, width]);

	const { scrollYProgress } = useScroll({
		target: sliderRef,
		offset: ["1 1.5", "0 0.1"],
	});

	const xRange = useTransform(scrollYProgress, [0, 1], [0, maxTransform * 2]);
	const xRangeTwo = useTransform(scrollYProgress, [1, 0], [0, maxTransform * 2]);

	const x = useSpring(xRange, { stiffness: 400, damping: 90 });
	const xTwo = useSpring(xRangeTwo, { stiffness: 400, damping: 90 });

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-5%',
	});

	return (
		<ContactGalleryWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			<OverflowWrapper>
				<SliderWrapper ref={sliderRef}>
					<Slider style={{ x }}>
						{sliderOne.map((item, index) => (
							<MediaWrapper key={index}>
								<MediaStack data={item} />
							</MediaWrapper>
						))}
					</Slider>
				</SliderWrapper>
			</OverflowWrapper>
			<OverflowWrapper>
				<SliderWrapper ref={sliderRef}>
					<Slider style={{ x: xTwo }}>
						{sliderTwo.map((item, index) => (
							<MediaWrapper key={index}>
								<MediaStack data={item} />
							</MediaWrapper>
						))}
					</Slider>
				</SliderWrapper>
			</OverflowWrapper>
		</ContactGalleryWrapper>
	);
};

export default ContactGallery;
