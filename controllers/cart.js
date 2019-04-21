const Cart    = require('../models/cart'),
      Product = require('../models/product');

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    res.render('shop/cart', {
      path: '/cart',
      pageTitle: 'Your Cart',
      cart: cart
    });
  });
}

exports.addToCart = (req, res, next) => {
  const productModel = req.body;
  Cart.addProduct(productModel);
  res.redirect('/');
}

exports.removeProductFromCart = (req, res, next) => {
  const productId = req.params.productId;
  Product.getById(productId, (product) => {
    Cart.deleteProduct(product.id, product.price, (cart) => {
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        cart: cart
      });
    });
  })
}