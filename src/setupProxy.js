const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'http://localhost:4200/',
			changeOrigin: true,
			pathRewrite: (path, req) => path.replace('/api', ''),
		}),
	);
};
