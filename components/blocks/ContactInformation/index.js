import styled from 'styled-components';
import Grid from '../../common/Grid';
import InnerWrapper from '../../common/InnerWrapper';
import ContactCard from './ContactCard';

const ContactInformationWrapper = styled.section`
	padding: 180px 0 360px;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: 180px 0;
	}

	.grid {
		row-gap: 32px;
	}
`;

const ContactInformation = ({ email, phone, igLink, twLink }) => {
	return (
		<ContactInformationWrapper>
			<InnerWrapper>
				<Grid>
					<ContactCard
						title="Get in touch"
						links={[
							{ title: email, link: `mailto:${email}` },
							{ title: phone, link: `tel:${phone}` },
						]}
					/>
					<ContactCard
						title="Social"
						links={[
							{ title: 'Instagram', link: igLink },
							{ title: 'Twitter', link: twLink },
						]}
					/>
				</Grid>
			</InnerWrapper>
		</ContactInformationWrapper>
	);
};

export default ContactInformation;
