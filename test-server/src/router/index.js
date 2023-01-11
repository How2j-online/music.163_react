const fs = require("fs");
const useRouters = (app) => {
	fs.readdirSync(__dirname).forEach(file => {
		if (file !== 'index.js') {
			const router = require(`./${file}`);
			router.prefix('/api')
			app.use(router.routes());
			app.use(router.allowedMethods())
		}
	})
}
module.exports = useRouters;