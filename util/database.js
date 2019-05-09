const   mongodb = require('mongodb'),
        dotenv  = require('dotenv').config();

const   MongoClient = mongodb.MongoClient;
const DATABASE_NAME = 'snakehole';

let _db;

const mongoConnect = (callback) => {
  const uri = process.env.DB_HOST;
  MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
    if (error) throw error;
    _db = client.db(DATABASE_NAME);
    console.log('connected to' + DATABASE_NAME);
    callback(client);
  })
  // const mongoClient = new MongoClient(uri, { useNewUrlParser: true });

  // mongoClient.connect()
  // .then(client => {
  //   console.log('connected');
  //   _db = client.db();
  //   callback(client);
  // })
  // .catch(err => {
  //   console.log(err);
  //   throw err;
  // });
};

const getDb = () => {
  if (_db) return db;
  throw 'No database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://pranyewest:<password>@holeofsnake-jlqgf.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
