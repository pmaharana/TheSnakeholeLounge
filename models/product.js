const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
  constructor(title, imageUrl, price, description, id = null) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = Number(price);
    this.description = description;
    this.id = id;
  }

  save() {
    return db.execute('INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
    [this.title, this.price, this.imageUrl, this.description]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static getById(id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
  }

  static deleteById(id) {
  }
}