import styled from 'styled-components';
import InnerWrapper from '../../common/InnerWrapper';

const ComingSoonWrapper = styled.div`
	background: var(--colour-black);
	height: 100vh;
	width: 100%;
`;

const ComingSoonInner = styled.div`
	padding-top: 16px;
`;

const PrimaryTitle = styled.h1`
	color: var(--colour-white);
`;

const Title = styled.h1`
	color: var(--colour-system-white-grey-800);
`;

const ComingSoon = () => {
	return (
		<ComingSoonWrapper>
			<InnerWrapper>
				<ComingSoonInner>
					<PrimaryTitle>glenboss.com.au</PrimaryTitle>
					<Title>coming soon...</Title>
				</ComingSoonInner>
			</InnerWrapper>
		</ComingSoonWrapper>
	);
};

export default ComingSoon;
