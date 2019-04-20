const Cart = require('../models/cart');

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
}

exports.addToCart = (req, res, next) => {
  // const productId = req.body.productId;
  // const title = req.body.title;
  // const price = Number(req.body.price);
  const productModel = req.body;
  Cart.addProduct(productModel);
  res.redirect('/');
}