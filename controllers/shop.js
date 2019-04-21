const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/product-list', {
        pageTitle: 'Shop',
        products: rows,
        path: '/products'
      });
    })
    .catch(error => console.log(error));
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.getById(productId)
    .then(([product]) => {
      res.render('shop/product-detail', {
        pageTitle: product.title,
        product: product[0],
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