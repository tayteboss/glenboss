import { partnersFragment } from './fragments';

const PARTNERS_QUERY = `
	query Query {
		allPartners {
			${partnersFragment}
		}
	}
  
`;

export default PARTNERS_QUERY;
