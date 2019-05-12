const generateMongoId = require('../util/database').generateMongoId;
const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    
    if (id) {
      this._id = generateMongoId(id);
    }
  }

  save() {
    const db = getDb();
    
    let dbOperation;

    if (this._id) {
      dbOperation = db.collection('products')
        .updateOne({_id: this._id}, {$set: this});
    } else {
      dbOperation = db.collection('products').insertOne(this);      
    }

    return dbOperation
      .then(result => result)
      .catch(err => console.log(err));
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('products')
      .find()
      .toArray()
      .then(products => {
        return products;
      })
      .catch(err => console.log(err));
  }

  static findById(id) {
    const db = getDb();
    return db
      .collection('products')
      .findOne({_id: generateMongoId(id)})
      .then(product => product)
      .catch(err => console.log(err));
  }

  static deleteById(id) {
    const db = getDb();
    return db
      .collection('products')
      .deleteOne({_id: generateMongoId(id)})
      .then(result => console.log('deleted product'))
      .catch(err => console.log(err));
  }
}

module.exports = Product;