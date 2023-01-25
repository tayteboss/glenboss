import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import InnerWrapper from '../../common/InnerWrapper';
import PrimaryLink from '../PrimaryLink';
import TabHeaderTitle from './TabHeaderTitle';

const TabHeaderWrapper = styled.div`
	padding-top: 80px;
	position: relative;
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-top: 64px;
	}
`;

const TabHeaderInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const PrimaryLinkWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-top: 32px;
	}
`;

const TabHeader = ({ data, useDarkTheme }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-10%',
	});

	return (
		<TabHeaderWrapper ref={ref} className="tab-header">
			<InnerWrapper>
				<TabHeaderInner>
					<TabHeaderTitle
						primaryTitle={data?.primaryHeading}
						secondaryTitle={data?.secondaryHeading}
						inView={inView}
					/>
					{data?.link[0] && (
						<PrimaryLinkWrapper
							className={`view-element-fade-in ${
								inView ? 'view-element-fade-in--in-view' : ''
							}`}
						>
							<PrimaryLink
								data={data.link[0]}
								useDarkTheme={useDarkTheme}
							/>
						</PrimaryLinkWrapper>
					)}
				</TabHeaderInner>
			</InnerWrapper>
		</TabHeaderWrapper>
	);
};

export default TabHeader;
