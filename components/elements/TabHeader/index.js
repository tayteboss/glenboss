import styled from 'styled-components';
import InnerWrapper from '../../common/InnerWrapper';
import PrimaryLink from '../PrimaryLink';
import TabHeaderTitle from './TabHeaderTitle';
import { useInView } from 'react-intersection-observer';

const TabHeaderWrapper = styled.div`
	padding-top: 80px;

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

	&.view-element-fade-in {
		transition-delay: 300ms;
	}
`;

const TabHeader = ({ data }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-20px',
	});

	return (
		<TabHeaderWrapper ref={ref}>
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
							<PrimaryLink data={data.link[0]} />
						</PrimaryLinkWrapper>
					)}
				</TabHeaderInner>
			</InnerWrapper>
		</TabHeaderWrapper>
	);
};

export default TabHeader;
