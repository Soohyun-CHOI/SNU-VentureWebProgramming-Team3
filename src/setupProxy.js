const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api/report",
        createProxyMiddleware({
            target: "http://52.78.82.160:8080",
            changeOrigin: true,
        })
    );
    app.use(
        "/openApi",
        createProxyMiddleware({
            target: "https://www.data.go.kr/data/15098931/openapi.do",
            changeOrigin: true,
        })
    );
};
