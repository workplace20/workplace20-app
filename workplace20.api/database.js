const {MongoClient} = require('mongodb');
const mongoUri = "mongodb://127.0.0.1:27017/workplace20?retryWrites=true&w=majority&useUnifiedTopology=true";

const client = new MongoClient(mongoUri);
const dbObject={
	db:null
};

module.exports={
	connect: async function(){

		console.log('connecting to db');
		await client.connect();
		console.log('connected to db');
		dbObject.db= await client.db('workplace20');
		console.log(dbObject.db);
	},
	getDb:  function(){
		if(!dbObject.db){
			throw new Error("Please call method connect before use database");
		}
		return dbObject.db;
	}
};
