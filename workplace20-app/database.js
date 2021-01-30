const {MongoClient} = require('mongodb');
const mongoUri = process.env.MONGOURI || "mongodb://127.0.0.1:27017/workplace20?retryWrites=true&w=majority&useUnifiedTopology=true";

const client = new MongoClient(mongoUri);
const dbObject={
        db:null
};

const unique = new Date().getTime();

export default {
        connect: async function(){

                console.log('connecting to mongodb');
                await client.connect();
                console.log('connected. Unique '+unique);
                dbObject.db= await client.db('workplace20');                
        },
        getDb:  async function(){
                console.log(`get db${unique}`);

                if(!dbObject.db){
                        await this.connect();
                }
                
                return dbObject.db;
        }
};