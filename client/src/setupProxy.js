const proxy = require("http-proxy-middleware");

module.exports = function(app) {

    app.use(proxy("/api", { target: "http://13.234.194.160:8080/" }));

};
