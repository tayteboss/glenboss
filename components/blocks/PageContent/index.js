import styled from 'styled-components';
import InnerWrapper from '../../common/InnerWrapper';
import RichText from '../../common/RichText';

const PageContentWrapper = styled.section`
	padding: 180px 0 360px;
`;

const PageContentInner = styled.div`
	display: flex;
	justify-content: center;

	* {
		text-align: center;
	}
`;

const RichContentWrapper = styled.div`
	max-width: 800px;
`;

const PageContent = ({ data }) => {
	return (
		<PageContentWrapper>
			<InnerWrapper>
				<PageContentInner>
					<RichContentWrapper>
						<RichText data={data} />
					</RichContentWrapper>
				</PageContentInner>
			</InnerWrapper>
		</PageContentWrapper>
	);
};

export default PageContent;
