const fs = require('fs').promises;
const path = require('path');
require('dotenv').config({ path: path.join(process.cwd(), '.env') });
require('dotenv').config({ path: path.join(process.cwd(), '.env.local') });

const dataJson = require('../data.json');

const data = {
	description: "Qadsa Noor",

	githubUsername: "qadsa123",
	avatarUrl: "",
	displayName: "Qadsa Noor",
	email: "",
	socials: {},
};

(async () => {
	if (!process.env.GH_TOKEN) {
		throw new Error('Please set GH_TOKEN in .env or .env.local');
	}
	if (process.env.IS_TEMPLATE === 'false') return;
	if (dataJson.githubUsername !== 'jirihofman') return;

	console.log('⚠️  This is still a template. Please update data.json file and set IS_TEMPLATE to false in .env.local to use this template');

	// Remove favicon.ico
	const faviconPath = path.join(process.cwd(), 'public', 'favicon.ico');
	await fs.unlink(faviconPath).catch(() => {});
	console.log('⚙️  Removed favicon.ico');

	const dataPath = path.join(process.cwd(), 'data.json');
	const newData = { ...dataJson, ...data };
	await fs.writeFile(dataPath, JSON.stringify(newData, null, 4));
	console.log('⚙️  Reverted to template data (using octocat).');
})();
