import Link from 'next/link';
import styled from 'styled-components';
import cleanUrl from '../../../utils/cleanUrl';

const options = require('../../../json/options.json');

const MenuSecondaryLinksWrapper = styled.div`
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;
		grid-column: 1 / -1;
	}
`;

const LinkTag = styled.a`
	color: var(--colour-system-white-grey-900);
	text-decoration: none;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:not(:last-child) {
		margin-right: 16px;
	}
`;

const MenuSecondaryLinks = () => {
	const secondaryLinks = options?.data?.siteInformation?.footerSecondaryLinks;
	const hasLinks = secondaryLinks.length > 0;

	return (
		<MenuSecondaryLinksWrapper>
			{hasLinks &&
				secondaryLinks.map((item, index) => (
					<Link href={cleanUrl(item)} passHref key={index}>
						<LinkTag className="type-sm">
							{item.linkTitle && item.linkTitle}
						</LinkTag>
					</Link>
				))}
		</MenuSecondaryLinksWrapper>
	);
};

export default MenuSecondaryLinks;
