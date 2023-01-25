import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import ContentSection from './ContentSection';
import MediaSection from './MediaSection';

const PageHeaderWrapper = styled.section`
	background: var(--colour-system-white-grey-50);
	position: relative;
	z-index: ${(props) => props.$zIndex};
`;

const PageHeader = ({ data, zIndex, handleClick }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-5%',
	});

	return (
		<PageHeaderWrapper
			ref={ref}
			className={`performance view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
			$zIndex={zIndex}
		>
			<ContentSection data={data} handleClick={handleClick} />
			<MediaSection data={data} />
		</PageHeaderWrapper>
	);
};

export default PageHeader;
