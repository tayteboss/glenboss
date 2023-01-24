require('dotenv').config({
	path: '.env.local',
});

const fetch = require('node-fetch');

// const fetchAPI = async (query, { variables } = {}) => {
// 	const url = `https://graphql.datocms.com/`;
// 	const apiToken = process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN;
// 	const json = await fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			authorization: `Bearer ${apiToken}`,
// 		},
// 		body: JSON.stringify({
// 			query,
// 			variables,
// 		}),
// 	})
// 		.then((response) => {
// 			response.json();
// 		})
// 		.then((data) => data);
// 	return json.data;
// };

async function fetchAPI(query) {
	const url = `https://graphql.datocms.com/`;
	const apiToken = process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN;

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${apiToken}`,
			},
			body: JSON.stringify({
				query,
			}),
		});

		const json = await response.json();
		return json;
	} catch (error) {
		throw new Error(error.message);
	}
}

const getSiteData = async () => {
	const query = `
		query Query {
			siteInformation {
				menu {
					links {
						useInternalLink
						internalLink {
							... on ContactPageRecord {
								pageSeo {
									title
									description
									slug
								}
							}
							... on HomePageRecord {
								pageSeo {
									title
									description
									slug
								}
							}
							... on PartnersPageRecord {
								pageSeo {
									title
									description
									slug
								}
							}
							... on ServicesPageRecord {
								pageSeo {
									title
									description
									slug
								}
							}
							... on ProfilePageRecord {
								pageSeo {
									title
									description
									slug
								}
							}
							... on PageRecord {
								pageSeo {
									title
									description
									slug
								}
							}
						}
						externalLink
						linkTitle
					}
				}
				instagramLink
				twitterLink
				instagramFeed {
					useVideo
					image {
						url
						alt
					}
					video {
						url
					}
				}
				footerSecondaryLinks {
					useInternalLink
					internalLink {
						... on ContactPageRecord {
							pageSeo {
								title
								description
								slug
							}
						}
						... on HomePageRecord {
							pageSeo {
								title
								description
								slug
							}
						}
						... on PartnersPageRecord {
							pageSeo {
								title
								description
								slug
							}
						}
						... on ServicesPageRecord {
							pageSeo {
								title
								description
								slug
							}
						}
						... on ProfilePageRecord {
							pageSeo {
								title
								description
								slug
							}
						}
						... on PageRecord {
							slug
						}
					}
					externalLink
					linkTitle
				}
				generalEmail
				generalPhone
			}
		}
	`;
	const data = await fetchAPI(query);
	if (data.length <= 0) {
		return [];
	}
	return data;
};

module.exports = {
	getSiteData,
};
