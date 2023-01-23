import styled from 'styled-components';
import TabHeader from '../../elements/TabHeader';
import ContactGallery from './ContactGallery';
import ContactSocialLink from './ContactSocialLink';

const options = require('../../../json/options.json');

const ContactTabWrapper = styled.section`
	background: var(--colour-white);
	z-index: ${(props) => props.$zIndex};
`;

const ContactTab = ({ data, zIndex }) => {
	const siteData = options?.data?.siteInformation;

	return (
		<ContactTabWrapper className="tab-radius tab-wrapper" $zIndex={zIndex}>
			<TabHeader data={data?.headingInformation[0]} />
			<ContactGallery data={data?.socialImages} />
			<ContactSocialLink
				igLink={siteData?.instagramLink}
				twLink={siteData?.twitterLink}
			/>
		</ContactTabWrapper>
	);
};

export default ContactTab;
