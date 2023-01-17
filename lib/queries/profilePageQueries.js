import {
	mediaFragment,
	pageHeaderFragment,
	pageSeoFragment,
	richTextFragment,
} from './fragments';

const PROFILE_PAGE_QUERY = `
	query Query {
		profilePage {
			pageSeo {
				${pageSeoFragment}
			}
			pageHeader {
				${pageHeaderFragment}
			}
			historyAchievements {
				yearBlocks {
					year
					contentBlocks {
						includeTextContent
						textContent
						media {
							${mediaFragment}
						}
						mediaOnRhs
						mediaFullScreen
					}
				}
			}
			profileInformation {
				textContent {
					${richTextFragment}
				}
				media {
					url
				}
			}
			charityWorkInformation {
				textContent {
					${richTextFragment}
				}
				media {
					url
				}
			}
		}
	}
`;

export default PROFILE_PAGE_QUERY;
