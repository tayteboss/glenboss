import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import cleanUrl from '../../../utils/cleanUrl';

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
	display: block;

	transition: all var(--transition-speed-default) var(--transition-ease);

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
	}
`;

const MenuListLink = ({ data, index }) => {
	const [activeLink, setActiveLink] = useState('Home');

	const linkUrl = `/${data?.internalLink?.pageSeo[0]?.slug}`;
	const linkTitle = data?.linkTitle;

	const router = useRouter();

	useEffect(() => {
		if (router.pathname === '/') {
			setActiveLink('Home');
		} else if (router.pathname === '/profile') {
			setActiveLink('Profile');
		} else if (router.pathname === '/services') {
			setActiveLink('Services');
		} else if (router.pathname === '/partners') {
			setActiveLink('Partners');
		} else if (router.pathname === '/Contact') {
			setActiveLink('Contact');
		}
	}, [router]);

	return (
		<MenuListLinkWrapper>
			{linkUrl && (
				<Link href={cleanUrl(data)} passHref>
					<ListLink
						className="type-extra-large"
						$isActive={activeLink === linkTitle}
						onClick={() => setActiveLink(linkTitle)}
					>
						{linkTitle && linkTitle}
					</ListLink>
				</Link>
			)}
		</MenuListLinkWrapper>
	);
};

export default MenuListLink;
