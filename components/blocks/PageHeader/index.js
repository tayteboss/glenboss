import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import ContentSection from './ContentSection';
import MediaSection from './MediaSection';
import PageHeaderStickyButtons from './PageHeaderStickyButtons';

const PageHeaderWrapper = styled.section`
	background: var(--colour-system-white-grey-50);
	position: relative;
	z-index: ${(props) => props.$zIndex};
`;

const PageHeader = ({ data, zIndex, handleClick }) => {
	const hasButtons = data?.buttons.length > 0;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-5%',
	});

	return (
		<PageHeaderWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
			$zIndex={zIndex}
		>
			<ContentSection data={data} handleClick={handleClick} />
			<MediaSection data={data} />
			{hasButtons && (
				<PageHeaderStickyButtons
					data={data.buttons}
					handleClick={handleClick}
				/>
			)}
		</PageHeaderWrapper>
	);
};

export default PageHeader;
