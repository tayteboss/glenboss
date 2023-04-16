const cleanUrl = (link) => {
	if (link?.internalLink?.slug) {
		return link.internalLink.slug;
	}
	if (link?.useInternalLink && link?.internalLink?.pageSeo[0]) {
		const internalLink = link.internalLink?.pageSeo[0]?.slug;
		if (internalLink === 'home') {
			return '/';
		} else if (link.internalLink?.pageSeo[0]?.slug) {
			return `/${link.internalLink?.pageSeo[0]?.slug}`;
		} else {
			return '/'
		}
	}
	if (!link?.useInternalLink && link?.externalLink) {
		return link.externalLink;
	}
	return '/';
};

export default cleanUrl;
