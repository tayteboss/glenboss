import Link from 'next/link';
import styled from 'styled-components';

const MenuContactBlockWrapper = styled.div`
	&:not(:last-child) {
		margin-bottom: 16px;
	}
`;

const Title = styled.p`
	color: var(--colour-system-white-grey-700);
`;

const LinkTag = styled.a`
	color: var(--colour-white);
	display: block;
	text-decoration: none;
`;

const MenuContactBlock = ({ title, links }) => {
	return (
		<MenuContactBlockWrapper>
			<Title className="type-sm">{title && title}</Title>
			{links.map((item, index) => (
				<Link
					href={item?.link ? item?.link : '/'}
					passHref
					key={index}
					scroll={false}
				>
					<LinkTag className="type-sm sm-link-hover" target="_blank">
						{item.title && item.title}
					</LinkTag>
				</Link>
			))}
		</MenuContactBlockWrapper>
	);
};

export default MenuContactBlock;
