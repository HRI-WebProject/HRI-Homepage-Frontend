const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://210.94.194.146:8080",
      changeOrigin: true,
    })
  );
};
