import Link from 'next/link';
import styled, { css } from 'styled-components';
import cleanUrl from '../../../utils/cleanUrl';

const SecondaryButtonWrapper = styled.a`
	text-decoration: none;
	display: flex;
	align-items: center;
	border-radius: 100px;
	position: relative;

	&:hover {
		.primary-button__dot {
			background: var(--colour-system-black-grey-300);
		}

		.primary-button__title {
			transform: translateY(-10px);
			opacity: 0;
		}

		.primary-button__hover-title {
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

const SecondaryButtonWidthHolder = styled.div`
	opacity: 0;
	white-space: nowrap;
`;

const SecondaryButtonCSS = css`
	position: absolute;
	top: 0;
	left: 14px;
	white-space: nowrap;
`;

const SecondaryButtonTitle = styled.div`
	${SecondaryButtonCSS}
	color: var(--colour-system-black-grey-300);

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const HoverSecondaryButtonTitle = styled.div`
	${SecondaryButtonCSS}
	color: var(--colour-system-black-grey-300);
	transform: translateY(10px);
	opacity: 0;

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const SecondaryButton = ({
	data,
	useDarkTheme = false,
	isActive,
	handleClick,
}) => {
	if (!data?.title) return <></>;

	return (
		<SecondaryButtonWrapper
			$isDark={useDarkTheme}
			className="primary-button"
			onClick={() => handleClick(data?.title)}
		>
			<Dot className="primary-button__dot" $isActive={isActive} />
			<SecondaryButtonWidthHolder className="type-sm">
				{data.title || data.title}
			</SecondaryButtonWidthHolder>
			<SecondaryButtonTitle className="type-sm primary-button__title">
				{data.title || data.title}
			</SecondaryButtonTitle>
			<HoverSecondaryButtonTitle className="type-sm primary-button__hover-title">
				{data.title || data.title}
			</HoverSecondaryButtonTitle>
		</SecondaryButtonWrapper>
	);
};

export default SecondaryButton;
