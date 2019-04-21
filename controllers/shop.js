const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.findAll()
    .then(products => {
      res.render('shop/product-list', {
        pageTitle: 'Shop',
        products: products,
        path: '/products'
      });
    })
    .catch(error => console.log(error));
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findByPk(productId)
    .then(product => {
      res.render('shop/product-detail', {
        pageTitle: product.title,
        product: product,
        path: '/products'
      });
    })
    .catch(error => console.log(error));
}

exports.getIndex = (req, res, next) => {
  res.render('shop/index', {
    pageTitle: 'Shop Index',
    path: '/'
  });
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
}