    let express = require('express'),
    http = require('http'),
    path = require('path'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    _ = require('underscore'),
    appInitialize = require('./middlewares/application-initialize'),
    app = express();

mongoose.Promise = global.Promise;
let server = http.createServer(app);

//All environments
app.use(methodOverride());
app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: true
}));

appInitialize(app, server)
    .setupDatabase(mongoose)
    .setupApplicationRoutes()
    .startApplication(server);
