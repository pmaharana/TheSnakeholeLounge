const Product = require('../models/product');

// exports.getProducts = (req, res, next) => {
//   req.user
//     .getProducts()
//     .then(products => {
//       res.render('admin/products', {
//       pageTitle: 'Admin Products',
//       products: products,
//       path: '/admin/products'
//       });
//     })
//     .catch(error => console.log(error));
// };

exports.getAddProduct = (req, res, next) => {
  res.render('admin/addedit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
}

// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit && req.query.edit === 'true';
//   if (!editMode) return res.redirect('/');

//   const productId = req.params.productId;

// req.user
//   .getProducts({ where: {id: productId}})
//   .then(products => {
//     const product = products[0];
//     if (!product) return res.redirect('/');
//     res.render('admin/addedit-product', {
//       pageTitle: 'Add Product',
//       path: '/admin/addedit-product',
//       editing: editMode,
//       product: product
//     });
//   })
//   .catch(error => console.log(error));
// };

exports.postAddProducts = (req, res, next) => {
  const request = req.body;

  const product = new Product(request.title, Number(request.price),request.description, request.imageUrl);

  product
    .save()    
    .then(result => res.redirect('/admin/products'))
    .catch(error => console.log(error));
  // const product = {
  //   title: request.title, 
  //   price: Number(request.price), 
  //   imageUrl: request.imageUrl,
  //   description: request.description
  // };

  // return req.user.createProduct({
  //   title: request.title, 
  //   price: Number(request.price), 
  //   imageUrl: request.imageUrl,
  //   description: request.description
  // })
  // .then(result => res.redirect('/admin/products'))
  // .catch(error => console.log(error));
};

// exports.updateProduct = (req, res, next) => {
//   Product.findByPk(req.body.id)
//     .then(product => {
//       product.title = req.body.title;
//       product.imageUrl = req.body.imageUrl;
//       product.price = Number(req.body.price);
//       product.description = req.body.description;      

//       return product.save();      
//     })
//     .then(result => res.redirect('/admin/products'))
//     .catch(error => console.log(error));
// }

// exports.deleteProduct = (req, res, next) => {
//   Product.findByPk(req.params.productId)
//     .then(product => {
//       return product.destroy();
//     })
//     .then(result => res.redirect('/admin/products'))
//     .catch(error => console.log(error));
// }
