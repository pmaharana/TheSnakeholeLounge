const Product = require('../models/product');

exports.getCart = (req, res, next) => {
  // req.user
  //   .getCart()
  //   .then(cart => cart.getProducts())
  //   .then(products => {
  //     return res.render('shop/cart', {
  //     path: '/cart',
  //     pageTitle: 'Your Cart',
  //     products: products
  //     });
  //   })
  //   .catch(error => console.log(error));
}

exports.addToCart = (req, res, next) => {
  // const productId = req.body.productId;
  // let fetchedCart;
  // let quantity = 1;
  // req.user
  //   .getCart()
  //   .then(cart => {
  //     fetchedCart = cart;
  //     return cart.getProducts({where: {id: productId}});
  //   })
  //   .then(products => {
  //     let product;
  //     if (products.length > 0) {
  //       product = products[0];
  //     }
  //     if (product) {
  //       quantity = product.cartItem.quantity + 1;
  //       return product;
  //     }

  //     return Product.findByPk(productId)
  //       .then(product => product)
  //       .catch(error => console.log(error));
  //   })
  //   .then(product => fetchedCart.addProduct(product, {through: {quantity: quantity} }))
  //   .then(() => res.redirect('/cart'))
  //   .catch(error => console.log(error));
}

exports.removeProductFromCart = (req, res, next) => {
  // const productId = req.params.productId;
  // req.user
  //   .getCart()
  //   .then(cart => cart.getProducts({ where: {id: productId} }))
  //   .then(products => {
  //     if (products.length === 0) return res.redirect('/cart');
  //     const product = products[0];
  //     return product.cartItem.destroy();
  //   })
  //   .then(product => res.redirect('/cart'))
  //   .catch(error => console.log(error));
}