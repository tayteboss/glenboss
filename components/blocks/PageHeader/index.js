import styled from 'styled-components';
import ContentSection from './ContentSection';
import MediaSection from './MediaSection';

const PageHeaderWrapper = styled.div`
	background: var(--colour-system-white-grey-50);
`;

const PageHeader = ({ data }) => {
	return (
		<PageHeaderWrapper>
			<ContentSection data={data} />
			<MediaSection data={data} />
		</PageHeaderWrapper>
	);
};

export default PageHeader;
