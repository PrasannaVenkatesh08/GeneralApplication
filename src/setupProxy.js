const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

      app.use(
        '/v2',
        createProxyMiddleware({
          target: 'https://api.apify.com',
          changeOrigin: true,
        })
      );
  
      app.use(
        '/svc/search',
        createProxyMiddleware({
          target: 'https://api.nytimes.com',
          changeOrigin: true,
        })
      );

      app.use(
        '/svc/topstories',
        createProxyMiddleware({
          target: 'https://api.nytimes.com',
          changeOrigin: true,
        })
      );

};