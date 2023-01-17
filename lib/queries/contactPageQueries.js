import { pageSeoFragment } from './fragments';

const CONTACT_PAGE_QUERY = `
	query Query {
		contactPage {
			pageSeo {
				${pageSeoFragment}
			}
		}
	}
`;

export default CONTACT_PAGE_QUERY;
