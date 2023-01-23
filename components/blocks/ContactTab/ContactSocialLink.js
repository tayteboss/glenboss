import styled from 'styled-components';
import InnerWrapper from '../../common/InnerWrapper';
import PrimaryLink from '../../elements/PrimaryLink';

const ContactSocialLinkWrapper = styled.div``;

const ContactSocialLinkInner = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 32px 0 64px;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		flex-direction: column;
		justify-content: flex-start;
	}
`;

const PrimaryLinkWrapper = styled.div`
	margin-right: 16px;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: 16px;
	}
`;

const ContactSocialLink = ({ igLink, twLink }) => {
	return (
		<ContactSocialLinkWrapper>
			<InnerWrapper>
				<ContactSocialLinkInner>
					<PrimaryLinkWrapper>
						<PrimaryLink
							data={false}
							dataOverride={{
								title: 'Follow on Instagram',
								link: igLink,
							}}
							useDarkTheme
							target="_blank"
						/>
					</PrimaryLinkWrapper>
					<PrimaryLinkWrapper>
						<PrimaryLink
							data={false}
							dataOverride={{
								title: 'Follow on Twitter',
								link: twLink,
							}}
							useDarkTheme
							target="_blank"
						/>
					</PrimaryLinkWrapper>
				</ContactSocialLinkInner>
			</InnerWrapper>
		</ContactSocialLinkWrapper>
	);
};

export default ContactSocialLink;
