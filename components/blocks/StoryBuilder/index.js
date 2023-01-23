import styled from 'styled-components';
import YearBlock from './YearBlock';

const StoryBuilderWrapper = styled.section`
	background: var(--colour-black);
	z-index: ${(props) => props.$zIndex};
	padding: 600px 0 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: 300px 0 0;
	}
`;

const StoryBuilder = ({ data, zIndex }) => {
	const hasData = data?.yearBlocks.length > 0;

	return (
		<StoryBuilderWrapper
			className="tab-radius tab-wrapper"
			id="history-achievements"
			$zIndex={zIndex}
		>
			{hasData &&
				data.yearBlocks.map((item, index) => (
					<YearBlock data={item} key={index} />
				))}
		</StoryBuilderWrapper>
	);
};

export default StoryBuilder;
