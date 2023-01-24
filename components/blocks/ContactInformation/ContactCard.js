import styled from 'styled-components';

const ContactCardWrapper = styled.div`
	grid-column: span 6;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: 1 / -1;
	}
`;

const Title = styled.h1``;

const LinksWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const Link = styled.a`
	color: var(--colour-system-white-grey-800);
	text-decoration: none;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		color: var(--colour-black);
	}
`;

const ContactCard = ({ title, links }) => {
	return (
		<ContactCardWrapper>
			<Title>{title && title}</Title>
			<LinksWrapper>
				{links.map((item, index) => (
					<Link
						href={item.link}
						target="_blank"
						key={index}
						className="type-h1 large-link-hover"
					>
						{item.title}
					</Link>
				))}
			</LinksWrapper>
		</ContactCardWrapper>
	);
};

export default ContactCard;
