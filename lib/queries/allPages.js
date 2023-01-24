import { pageSeoFragment } from './fragments';

const ALL_PAGES_QUERY = `query Query {
	allPages {
		slug
		seoTitle
		seoDescription
	}
}`;

export default ALL_PAGES_QUERY;
