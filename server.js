var express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config()
var app = express();
const util = require('./utils');

const API_SERVICE_URL = process.env.API_BASE_URL;
// const API_SERVICE_URL = `${API_BASE_URL}`;


// Logging the requests
app.use(morgan('combined'))

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.ALLOW_FROM_ORIGIN);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//Configure Proxy and Rewrite url
app.use('/', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    "secure": false,
    // pathRewrite: {
    //     [`^/planets`]: '',
    // },
}));

var server = app.listen(process.env.PORT || 8085, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})

