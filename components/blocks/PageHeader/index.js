import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import ContentSection from './ContentSection';
import MediaSection from './MediaSection';

const PageHeaderWrapper = styled.div`
	background: var(--colour-system-white-grey-50);
`;

const PageHeader = ({ data }) => {
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
		>
			<ContentSection data={data} />
			<MediaSection data={data} />
		</PageHeaderWrapper>
	);
};

export default PageHeader;
