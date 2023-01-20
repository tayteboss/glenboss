import styled from 'styled-components';

const TabHeaderTitleWrapper = styled.div`
	max-width: 570px;
`;

const SecondaryTitle = styled.p`
	margin-bottom: 16px;
	color: var(--colour-system-white-grey-800);
`;

const PrimaryTitle = styled.h1`
	color: var(--colour-black);

	&.view-element-bottom-top {
		transition-delay: 300ms;
	}
`;

const TabHeaderTitle = ({ primaryTitle, secondaryTitle, inView }) => {
	return (
		<TabHeaderTitleWrapper>
			{secondaryTitle && (
				<SecondaryTitle
					className={`view-element-bottom-top ${
						inView ? 'view-element-bottom-top--in-view' : ''
					}`}
				>
					{secondaryTitle}
				</SecondaryTitle>
			)}
			{primaryTitle && (
				<PrimaryTitle
					className={`view-element-bottom-top ${
						inView ? 'view-element-bottom-top--in-view' : ''
					}`}
				>
					{primaryTitle}
				</PrimaryTitle>
			)}
		</TabHeaderTitleWrapper>
	);
};

export default TabHeaderTitle;
