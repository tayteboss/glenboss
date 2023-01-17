import { linkFragment, mediaFragment } from './fragments';

const SITE_DATA_QUERY = `
	query Query {
		siteInformation {
			menu {
				links {
					${linkFragment}
				}
			}
			instagramLink
			twitterLink
			instagramFeed {
				${mediaFragment}
			}
			footerSecondaryLinks {
				${linkFragment}
			}
			generalEmail
			generalPhone
		}
	}
`;

export default SITE_DATA_QUERY;
