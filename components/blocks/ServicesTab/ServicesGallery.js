import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react';
import { useInView } from 'react-intersection-observer';
import InnerWrapper from '../../common/InnerWrapper';
import MediaStack from '../../elements/MediaStack';
import Chevron from '../../Svgs/Chevron';

const ServicesGalleryWrapper = styled.div`
	padding: 160px 0 64px;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: 80px 0 64px;
	}
`;

const ServicesGalleryInner = styled.div``;

const NavigationWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 16px;
`;

const navigationCss = css`
	width: 32px;
	height: 32px;
	background: var(--colour-black);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		svg {
			path {
				fill: var(--colour-white);
			}
		}
	}

	svg {
		path {
			fill: var(--colour-white);

			transition: all var(--transition-speed-default) var(--transition-ease);
		}
	}
`;

const NavigationLeft = styled.button`
	margin-right: 16px;
	transform: rotate(180deg);
	${navigationCss}
`;

const NavigationRight = styled.button`
	${navigationCss}
`;

const Embla = styled.div`
	overflow: hidden;
`;

const EmblaContainer = styled.div`
	display: flex;
	background: var(--colour-white);
`;

const EmblaSlider = styled.div`
	flex: 0 0 75%;
	margin-right: 16px;
	min-width: 0;
	background: var(--colour-white);
	overflow: hidden;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex: 0 0 100%;
	}

	.image-component-wrapper {
		border-radius: 8px;
		overflow: hidden;
	}

	img {
		transform: ${(props) => props.$isPointerDown ? 'scale(1.05)' : 'scale(1)'};

		transition: all var(--transition-speed-slow) var(--transition-ease);
	}
`;

const ServicesGallery = ({ data }) => {
	const [isPointerDown, setIsPointerDown] = useState(false);
	const hasData = data.length > 0;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-5%',
	});

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: 'start',
		speed: 7,
	});

	const handlePreviousSlide = () => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
	};

	const handleNextSlide = () => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
	};

	useEffect(() => {
		if (emblaApi) {
			emblaApi.on('pointerDown', () => setIsPointerDown(true));
			emblaApi.on('pointerUp', () => setIsPointerDown(false));
		}
	}, [emblaApi]);

	return (
		<ServicesGalleryWrapper
			ref={ref}
			className={`view-element-bottom-top ${
				inView ? 'view-element-bottom-top--in-view' : ''
			}`}
		>
			<InnerWrapper>
				<ServicesGalleryInner>
					<NavigationWrapper>
						<NavigationLeft
							className="cursor-link"
							onClick={() => handlePreviousSlide()}
						>
							<Chevron />
						</NavigationLeft>
						<NavigationRight
							className="cursor-link"
							onClick={() => handleNextSlide()}
						>
							<Chevron />
						</NavigationRight>
					</NavigationWrapper>
					<Embla className="embla" ref={emblaRef}>
						<EmblaContainer className="embla__container cursor-drag">
							{hasData &&
								data.map((item, index) => (
									<EmblaSlider
										className="embla__slide"
										key={index}
										$isPointerDown={isPointerDown}
									>
										<MediaStack data={item} />
									</EmblaSlider>
								))}
						</EmblaContainer>
					</Embla>
				</ServicesGalleryInner>
			</InnerWrapper>
		</ServicesGalleryWrapper>
	);
};

export default ServicesGallery;
