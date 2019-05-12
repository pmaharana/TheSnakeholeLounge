const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('admin/products', {
      pageTitle: 'Admin Products',
      products: products,
      path: '/admin/products'
      });
    })
    .catch(error => console.log(error));
};

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
  Product.findById(productId)
    .then(product => {
      if (!product) return res.redirect('/');

      res.render('admin/addedit-product', {
        pageTitle: 'Add Product',
        path: '/admin/addedit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

exports.postAddProducts = (req, res, next) => {
  const request = req.body;

  const product = new Product(request.title, Number(request.price),request.description, request.imageUrl);

  product
    .save()    
    .then(result => res.redirect('/admin/products'))
    .catch(error => console.log(error));
};

exports.updateProduct = (req, res, next) => {
  const request = req.body;

  const product = new Product(
      request.title, 
      Number(request.price),
      request.description, 
      request.imageUrl,
      request.id);

  return product
    .save()
    .then(result => res.redirect('/admin/products'))
    .catch(error => console.log(error));
}

exports.deleteProduct = (req, res, next) => {
  Product.deleteById(req.params.productId)
    .then(result => res.redirect('/admin/products'))
    .catch(error => console.log(error));
}
