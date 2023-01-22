import {
	headingInformationFragment,
	mediaFragment,
	pageHeaderFragment,
	pageSeoFragment,
	partnersFragment,
} from './fragments';

const HOME_PAGE_QUERY = `
	query Query {
		homePage {
			pageSeo {
				${pageSeoFragment}
			}
			pageHeader {
				${pageHeaderFragment}
			}
			servicesTab {
				headingInformation {
					${headingInformationFragment}
				}
				servicesGallery {
					${mediaFragment}
				}
			}
			partnersTab {
				headingInformation {
					${headingInformationFragment}
				}
				partners {
					${partnersFragment}
				}
			}
			contactTab {
				headingInformation {
					${headingInformationFragment}
				}
				socialImages {
					${mediaFragment}
				}
			}
		}
	}
`;

export default HOME_PAGE_QUERY;
