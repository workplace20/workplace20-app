const express = require('express'),
http = require('http'),
path = require('path'),
methodOverride = require('method-override'),
bodyParser = require('body-parser'),
_ = require('underscore'),
appInitialize = require('./middlewares/application-initialize'),
database=require('./database');
app = express();


let HOST_PORT=8900;
/**
 * * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 * */
async function main(){
	let server = http.createServer(app);
	//All environments
	app.use(methodOverride());
	app.use(bodyParser.json({
			limit: '5mb'
	}));
	app.use(bodyParser.urlencoded({
			extended: true
	}));

	await database.connect();

	appInitialize(app, server)
			.setupApplicationRoutes()
			.startApplication(HOST_PORT);
	console.log('Application started');
}

main().catch(err=>console.log(err));
