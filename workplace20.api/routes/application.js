const db = require('../database').getDb();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 17;

module.exports=[{
      url: '/ping',
      method: 'get',
      handler: async (req,res)=>{

				console.log(db);
				let collections =await  db.listCollections();
				const collectionNames=[];
				collections.forEach(c=>collectionNames.push(c.name));
				res.send(collectionNames);
			}
},{
      url: '/accounts',
      method: 'post',
      handler: [
				body('email').isEmail(),
				body('password').isLength({min:8}),
				async (req,res)=>{
					const errors = validationResult(req);
					if (!errors.isEmpty()) {
						return res.status(400).json({ errors: errors.array() });
					}
					const email=req.body.email;
					const password=req.body.password;
					let oldOne = await db.collection('users').findOne({email:email});

					if(oldOne){
						return res.status(409).send();
					}

					let passhash =await bcrypt.hash(password, saltRounds);					

					const result = await db.collection("users").insertOne({
						email: email,
						password: passhash
					});
					console.log(`New listing created with the following id: ${result.insertedId}`);

					res.status(201).send();

			}]
}];
