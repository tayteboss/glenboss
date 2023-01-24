export const responsiveImageFragment = `
	... on ResponsiveImage {
		srcSet
		webpSrcSet
		sizes
		src
		width
		height
		aspectRatio
		alt
		title
		bgColor
		base64
	}
`;

export const richTextFragment = `
	blocks
	links
	value
`;

export const linkFragment = `
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
`;

export const mediaFragment = `
	useVideo
	image {
		url
		alt
	}
	caption
	video {
		url
	}
`;

export const pageHeaderFragment = `
	primaryHeading
	secondaryHeading
	link {
		${linkFragment}
	}
	buttons {
		title
	}
	media {
		${mediaFragment}
	}
`;

export const pageSeoFragment = `
	title
	description
	slug
`;

export const headingInformationFragment = `
	secondaryHeading
	primaryHeading
	link {
		${linkFragment}
	}
`;

export const partnersFragment = `
	name
	backgroundAsset {
		url
	}
	description {
		${richTextFragment}
	}
	displayImage {
		url
	}
	foregroundAsset {
		url
	}
	lhsAsset {
		url
	}
	rhsAsset {
		url
	}
	url
`;
