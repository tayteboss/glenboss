import { GraphQLClient } from 'graphql-request';
import ALL_PAGES_QUERY from './queries/allPages';
import PAGE_QUERY from './queries/page';
import HOME_PAGE_QUERY from './queries/homePageQueries';
import PROFILE_PAGE_QUERY from './queries/profilePageQueries';
import SERVICES_PAGE_QUERY from './queries/servicesPageQueries';
import PARTNERS_PAGE_QUERY from './queries/partnersPageQueries';
import PARTNER_QUERY from './queries/partnerQueries';
import CONTACT_PAGE_QUERY from './queries/contactPageQueries';
import SITE_DATA_QUERY from './queries/siteData';

const request = ({ query, variables, preview }) => {
	const endpoint = preview
		? `https://graphql.datocms.com/preview`
		: `https://graphql.datocms.com/`;
	const client = new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
		},
	});
	return client.request(query, variables);
};

export const getSiteData = async () => {
	const data = await request({
		query: SITE_DATA_QUERY,
		variables: { siteId: process.env.SITE_ID },
	});

	return data;
};

export const getAllPages = async (siteId) => {
	const data = await request({
		query: ALL_PAGES_QUERY,
		variables: { siteId },
	});

	return data?.allPages;
};

export const getPage = async (pageSlug, preview) => {
	const data = await request({
		query: PAGE_QUERY,
		variables: { pageSlug },
		preview,
	});

	return data?.page;
};

export const getHomePage = async (preview) => {
	const data = await request({
		query: HOME_PAGE_QUERY,
		preview,
	});

	return data?.homePage;
};

export const getProfilePage = async (preview) => {
	const data = await request({
		query: PROFILE_PAGE_QUERY,
		preview,
	});

	return data?.profilePage;
};

export const getServicesPage = async (preview) => {
	const data = await request({
		query: SERVICES_PAGE_QUERY,
		preview,
	});

	return data?.servicesPage;
};

export const getPartnersPage = async (preview) => {
	const data = await request({
		query: PARTNERS_PAGE_QUERY,
		preview,
	});

	return data?.partnersPage;
};

export const getContactPage = async (preview) => {
	const data = await request({
		query: CONTACT_PAGE_QUERY,
		preview,
	});

	return data?.contactPage;
};

export const getPartners = async (preview) => {
	const data = await request({
		query: PARTNER_QUERY,
		preview,
	});

	return data?.allPartners;
};
