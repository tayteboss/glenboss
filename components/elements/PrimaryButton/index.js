import Link from 'next/link';
import styled, { css } from 'styled-components';
import cleanUrl from '../../../utils/cleanUrl';

const PrimaryButtonWrapper = styled.a`
	text-decoration: none;
	background: ${(props) =>
		props.$isDark
			? 'var(--colour-white)'
			: 'var(--colour-system-white-grey-50)'};
	padding: 8px 16px;
	display: flex;
	align-items: center;
	border-radius: 100px;
	position: relative;

	&:hover {
		background: var(--colour-black);

		.primary-button__dot {
			background: var(--colour-white);
		}

		.primary-button__title {
			color: var(--colour-white);
			transform: translateY(-10px);
			opacity: 0;
		}

		.primary-button__hover-title {
			color: var(--colour-white);
			transform: translateY(0);
			opacity: 1;
		}
	}
`;

const Dot = styled.div`
	height: 6px;
	width: 6px;
	background: ${(props) => props.$isActive ? 'var(--colour-system-black-grey-300)' : 'transparent'};
	margin-right: 8px;
	border-radius: 50%;
	border: 1px solid var(--colour-system-black-grey-300);

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const PrimaryButtonWidthHolder = styled.div`
	opacity: 0;
	white-space: nowrap;
`;

const PrimaryButtonCSS = css`
	position: absolute;
	top: 8px;
	left: 30px;
`;

const PrimaryButtonTitle = styled.div`
	${PrimaryButtonCSS}
	color: var(--colour-system-black-grey-300);

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const HoverPrimaryButtonTitle = styled.div`
	${PrimaryButtonCSS}
	color: var(--colour-system-black-grey-300);
	transform: translateY(10px);
	opacity: 0;

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const PrimaryButton = ({
	data,
	useDarkTheme = false,
	isActive,
	handleClick,
}) => {
	if (!data?.title) return <></>;

	return (
		<PrimaryButtonWrapper
			$isDark={useDarkTheme}
			className="primary-button"
			onClick={() => handleClick(data?.title)}
		>
			<Dot className="primary-button__dot" $isActive={isActive} />
			<PrimaryButtonWidthHolder className="type-sm">
				{data.title || data.title}
			</PrimaryButtonWidthHolder>
			<PrimaryButtonTitle className="type-sm primary-button__title">
				{data.title || data.title}
			</PrimaryButtonTitle>
			<HoverPrimaryButtonTitle className="type-sm primary-button__hover-title">
				{data.title || data.title}
			</HoverPrimaryButtonTitle>
		</PrimaryButtonWrapper>
	);
};

export default PrimaryButton;
