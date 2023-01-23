import Link from 'next/link';
import styled, { css } from 'styled-components';
import cleanUrl from '../../../utils/cleanUrl';

const PrimaryLinkWrapper = styled.a`
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

		.primary-link__dot {
			background: var(--colour-white);
		}

		.primary-link__title {
			color: var(--colour-white);
			transform: translateY(-10px);
			opacity: 0;
		}

		.primary-link__hover-title {
			color: var(--colour-white);
			transform: translateY(0);
			opacity: 1;
		}
	}
`;

const Dot = styled.div`
	height: 6px;
	width: 6px;
	background: var(--colour-system-black-grey-300);
	margin-right: 8px;
	border-radius: 50%;

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const PrimaryLinkWidthHolder = styled.div`
	opacity: 0;
	white-space: nowrap;
`;

const PrimaryLinkCSS = css`
	position: absolute;
	top: 8px;
	left: 30px;
`;

const PrimaryLinkTitle = styled.div`
	${PrimaryLinkCSS}
	color: var(--colour-system-black-grey-300);

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const HoverPrimaryLinkTitle = styled.div`
	${PrimaryLinkCSS}
	color: var(--colour-system-black-grey-300);
	transform: translateY(10px);
	opacity: 0;

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const PrimaryLink = ({
	data,
	useDarkTheme = false,
	dataOverride = false,
	target = '_self',
}) => {
	return (
		<Link href={dataOverride ? dataOverride.link : cleanUrl(data)} passHref>
			<PrimaryLinkWrapper
				$isDark={useDarkTheme}
				className="primary-link"
				target={target}
			>
				<Dot className="primary-link__dot" />
				<PrimaryLinkWidthHolder className="type-sm">
					{dataOverride
						? dataOverride.title
						: data.linkTitle && data.linkTitle}
				</PrimaryLinkWidthHolder>
				<PrimaryLinkTitle className="type-sm primary-link__title">
					{dataOverride
						? dataOverride.title
						: data.linkTitle && data.linkTitle}
				</PrimaryLinkTitle>
				<HoverPrimaryLinkTitle className="type-sm primary-link__hover-title">
					{dataOverride
						? dataOverride.title
						: data.linkTitle && data.linkTitle}
				</HoverPrimaryLinkTitle>
			</PrimaryLinkWrapper>
		</Link>
	);
};

export default PrimaryLink;
