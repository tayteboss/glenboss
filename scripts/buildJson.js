const api = require('./api');

const writeToJson = (file, data) => {
	// eslint-disable-next-line no-param-reassign
	data = data || {};
	const path = 'json';
	const json = JSON.stringify(data);
	// eslint-disable-next-line global-require
	const fs = require('fs');
	fs.writeFile(`${path}/${file}`, json, 'utf8', () => {
		console.log(`Wrote ${file} file.`);
	});
};

const buildSiteOptions = async () => {
	const options = await api.getSiteData();

	writeToJson('options.json', options || {});
};

buildSiteOptions();
