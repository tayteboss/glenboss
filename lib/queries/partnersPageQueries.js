import {
	mediaFragment,
	pageHeaderFragment,
	pageSeoFragment,
} from './fragments';

const PARTNERS_PAGE_QUERY = `
	query Query {
		partnersPage {
			pageSeo {
				${pageSeoFragment}
			}
			partnerLogosTicker {
				title
				logos {
					${mediaFragment}
				}
			}
		}
	}
`;

export default PARTNERS_PAGE_QUERY;
