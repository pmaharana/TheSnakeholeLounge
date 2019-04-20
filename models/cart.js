const fs    = require('fs'),
      path  = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 
'data', 
'cart.json');

module.exports = class Cart {
  static addProduct(request) {
    // Fetch the previous cart
    fs.readFile(p, (error, fileContent) => {
      let cart = {products: [], totalPrice: 0};
      if (!error) {
        let existing = JSON.parse(fileContent);
        if (existing.products && existing.products.length !== 0) {
          cart = {...existing};
        }
      }
      // Analyze the cart and find existing product
      const productIndex = cart.products.findIndex(product => product.id === request.productId);
      if (productIndex !== -1) {
        cart.products[productIndex].quantity ++;
      } else {
        cart.products.push({id: request.productId, title: request.title, quantity: 1});
      }

      cart.totalPrice = cart.totalPrice + Number(request.price);

      fs.writeFile(p, JSON.stringify(cart), error => {
        console.log(error);
      });
    });
  }
}