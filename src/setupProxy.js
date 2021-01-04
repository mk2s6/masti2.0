const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: process.env.API_ENDPOINT,
			changeOrigin: true,
			pathRewrite: (path, req) => path.replace('/api', ''),
		}),
	);
};
