const   mongodb = require('mongodb'),
        dotenv  = require('dotenv').config();

const   MongoClient = mongodb.MongoClient;
const   DATABASE_NAME = 'snakehole';

let _db;

const mongoConnect = (callback) => {
  const uri = process.env.MONGO_CONNECTION;
  const mongoClient = new MongoClient(uri, { useNewUrlParser: true });

  mongoClient.connect()
  .then(client => {
    _db = client.db(DATABASE_NAME);
    callback(client);
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
};

const getDb = () => {
  if (_db) return _db;
  throw 'No database found';
}

const generateMongoId = (id) => new mongodb.ObjectID(id);

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
exports.generateMongoId = generateMongoId;

