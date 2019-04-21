const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/addedit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
}

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit && req.query.edit === 'true';
  if (!editMode) return res.redirect('/');

  const productId = req.params.productId;
  Product.getById(productId, product => {
    if (!product) return redirect('/');
    res.render('admin/addedit-product', {
      pageTitle: 'Add Product',
      path: '/admin/addedit-product',
      editing: editMode,
      product: product
    });
  });
};

exports.postAddProducts = (req, res, next) => {
  const request = req.body;
  const product = new Product(request.title, request.imageUrl, request.price, request.description);
  product.save();
  res.redirect('/');
};

exports.updateProduct = (req, res, next) => {
  const request = req.body;
  const product = new Product(request.title, request.imageUrl, request.price, request.description, request.id);
  product.save();
  res.redirect('/admin/products');
}

exports.deleteProduct = (req, res, next) => {
  Product.deleteProduct(req.params.productId);
  res.redirect('/admin/products');
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      pageTitle: 'Admin Products',
      products: products,
      path: '/admin/products'
    });
  });
};