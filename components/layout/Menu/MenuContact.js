import styled from 'styled-components';
import MenuContactBlock from './MenuContactBlock';

const options = require('../../../json/options.json');

const MenuContactWrapper = styled.div`
	grid-column: span 6;
	padding-top: 40vh;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const Title = styled.p`
	color: var(--colour-white);
	margin-bottom: 16px;
`;

const MenuContact = () => {
	const siteData = options?.data?.siteInformation;

	const generalLinks = [
		{
			title: siteData?.generalEmail,
			link: `mailto: ${siteData?.generalEmail}`,
		},
		{
			title: siteData?.generalPhone,
			link: `tel: ${siteData?.generalPhone}`,
		},
	];

	const socialLinks = [
		{
			title: 'Instagram',
			link: siteData?.instagramLink,
		},
		{
			title: 'Twitter',
			link: siteData?.twitterLink,
		},
	];

	return (
		<MenuContactWrapper>
			<Title className="type-sm">Contact</Title>
			<MenuContactBlock title="General" links={generalLinks} />
			<MenuContactBlock title="Socials" links={socialLinks} />
		</MenuContactWrapper>
	);
};

export default MenuContact;
