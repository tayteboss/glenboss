const cleanUrl = (link) => {
	if (link.useInternalLink && link.internalLink) {
		const internalLink = link.internalLink?.pageSeo[0].slug;
		if (internalLink === 'home') {
			return '/';
		}
		return `/${link.internalLink?.pageSeo[0]?.slug}`;
	}
	if (!link.useInternalLink && link.externalLink) {
		return link.externalLink;
	}
	return '/';
};

export default cleanUrl;
