import {
	pageHeaderFragment,
	pageSeoFragment,
	richTextFragment,
} from './fragments';

const SERVICES_PAGE_QUERY = `
	query Query {
		servicesPage {
			pageSeo {
				${pageSeoFragment}
			}
			pageHeader {
				${pageHeaderFragment}
			}
			servicesList {
				title
				accordionBlocks {
					title
					textContent {
						${richTextFragment}
					}
				}
			}
		}
	}
`;

export default SERVICES_PAGE_QUERY;
