const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.notion.com/v1/databases',
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};