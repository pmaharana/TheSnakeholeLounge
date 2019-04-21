const fs      = require('fs'),
      path    = require('path'),
      crypto  = require('crypto');

const p = path.join(path.dirname(process.mainModule.filename), 
'data', 
'products.json');

const Cart = require('./cart');

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }    
  });
}

const generateGuid = () => {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}

module.exports = class Product {
  constructor(title, imageUrl, price, description, id = null) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = Number(price);
    this.description = description;
    this.id = id;
  }

  save() {
    getProductsFromFile(products => {
      if (this.id) {
        const existingIndex = products.findIndex(prod => prod.id === this.id);        
        if (existingIndex === -1) return;
        products[existingIndex] = this;
      } else {
        this.id = crypto.randomBytes(16).toString('hex');
        products.push(this);
      }

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static getById(productId, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === productId);
      cb(product);
    });
  }

  static deleteProduct(productId) {
    getProductsFromFile(products => {
      let productToDelete = products.find(prod => prod.id === productId);
      products = products.filter(prod => prod.id !== productId);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (!err) Cart.deleteProduct(productId, productToDelete.price);
      });
    });
  }
}