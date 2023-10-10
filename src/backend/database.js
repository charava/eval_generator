const mongoose = require('mongoose');
const server = '127.0.0.1:27017';
const database = 'eval_db';      // Since we made our schema into a model, this should be created
// const userModel = require('./User')


//get to mongodb shell
// type mongosh in cd ~
// show dbs
// db
// use <db name>;
// db.dropDatabase()
// show dbs
// exit

class Database {
  constructor() {
    this._connect()
  }


_connect() {
     mongoose.connect(`mongodb://${server}/${database}`, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
       .then(dbSuccess())
       .catch(err => {
         console.error('Database connection error')
       })
    
  }
}

function dbSuccess(){
  console.log('Database connection successful')

//   let user = new userModel({
// 	firstName: "te",
//     lastName: "st",
// 	email: "test@nuevaschool.org",
//     date: "9/2/13",
//     note: [{
//         title: "hello",
//         description: "hello again",
//     }]

//   })

//   user.save()
// 	.then(doc => {
//   	console.log("user " + doc.firstName + " added to the database")
//   	console.log(doc)
// 	})
// 	.catch(err => {
//   	console.error(err)
// 	})

}
    

//creates a new database object
//which calls _connect()
module.exports = new Database()
