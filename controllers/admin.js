const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    activeAddProduct: true,
    formCss: true
  });
};

exports.postAddProducts = (req, res, next) => {
  const request = req.body;
  const product = new Product(request.title, request.imageUrl, request.price, request.description);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      pageTitle: 'Admin Products',
      products: products,
      path: '/admin/products'
    });
  });
};