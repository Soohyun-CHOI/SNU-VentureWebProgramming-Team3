const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://52.78.82.160:8080",
            changeOrigin: true,
            onProxyRes: (proxyRes, req, res) => {
                // log original request and proxied request info
                const exchange = `[${req.method}] [${proxyRes.statusCode}] ${req.path} -> ${proxyRes.req.protocol}//${proxyRes.req.host}${proxyRes.req.path}`;
                console.log(exchange); // [GET] [200] / -> http://www.example.com
            },
        })
    );
    app.use(
        "/abandonmentPublic",
        createProxyMiddleware({
            target: "http://apis.data.go.kr/1543061/abandonmentPublicSrvc",
            changeOrigin: true,
        })
    );
};
