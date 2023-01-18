import Link from 'next/link';
import styled from 'styled-components';
import cleanUrl from '../../../utils/cleanUrl';
import useActiveLink from '../../../hooks/useActiveLink';

const MenuListLinkWrapper = styled.div``;

const ListLink = styled.a`
	color: ${(props) =>
		props.$isActive
			? 'var(--colour-white)'
			: 'var(--colour-system-white-grey-900)'};
	margin-bottom: 16px;
	text-decoration: none;
	position: relative;
	transform: ${(props) =>
		props.$isActive ? 'translateX(50px)' : 'translateX(0)'};
	display: inline-block;

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		transform: translateX(0);
	}

	&:hover {
		color: var(--colour-white);
	}

	&::before {
		content: '';
		position: absolute;
		top: 60px;
		left: 0;
		height: 30px;
		width: 30px;
		background: var(--colour-white);
		border-radius: 50%;
		transform: ${(props) =>
			props.$isActive ? 'translateX(-50px)' : 'translateX(0)'};
		opacity: ${(props) => (props.$isActive ? 1 : 0)};

		@media ${(props) => props.theme.mediaBreakpoints.tabletLandscape} {
			top: 33px;
		}

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			display: none;
		}
	}
`;

const MenuListLink = ({ data, index }) => {
	const linkUrl = `/${data?.internalLink?.pageSeo[0]?.slug}`;
	const linkTitle = data?.linkTitle;
	const activeLink = useActiveLink();

	return (
		<MenuListLinkWrapper>
			{linkUrl && (
				<Link href={cleanUrl(data)} passHref>
					<ListLink
						className="type-extra-large"
						$isActive={activeLink === linkTitle}
					>
						{linkTitle && linkTitle}
					</ListLink>
				</Link>
			)}
		</MenuListLinkWrapper>
	);
};

export default MenuListLink;
