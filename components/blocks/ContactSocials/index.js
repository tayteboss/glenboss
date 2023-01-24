import styled from 'styled-components';
import ContactGallery from '../ContactTab/ContactGallery';

const ContactSocialsWrapper = styled.section`
	background: var(--colour-black);
	z-index: ${(props) => props.$zIndex};
	padding: 0 0 60px;
`;

const ContactSocials = ({ data, zIndex }) => {
	return (
		<ContactSocialsWrapper
			className="tab-radius tab-wrapper"
			$zIndex={zIndex}
		>
			<ContactGallery data={data} />
		</ContactSocialsWrapper>
	);
};

export default ContactSocials;
