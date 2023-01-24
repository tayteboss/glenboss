import { richTextFragment } from './fragments';

const PAGE_QUERY = `
	query Query($pageSlug: String) {
		page(filter: {slug: {eq: $pageSlug}}) {
			slug
			seoTitle
			seoDescription
			pageContent {
				${richTextFragment}
			}
		}
	}
`;

export default PAGE_QUERY;
