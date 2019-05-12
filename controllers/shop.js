const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll()
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
  Product.findById(productId)
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

exports.getOrder = (req, res, next) => {
  // req.user.getOrders({include: ['products']})
  //   .then(orders => {
  //     res.render('shop/order', {
  //       pageTitle: 'Orders',
  //       path: '/orders',
  //       orders: orders
  //     });
  //   })
  //   .catch(err => console.log(err));
}

exports.addOrder = (req, res, next) => {
  // let fetchedCart;
  // req.user.getCart()
  //   .then(cart => {
  //     fetchedCart = cart;
  //     return cart.getProducts();
  //   })
  //   .then(products => {
  //     return req.user
  //       .createOrder()
  //       .then(order => {
  //         return order.addProducts(products.map(product => {
  //           product.orderItem = { quantity: product.cartItem.quantity };
  //           return product;
  //         }));
  //       })
  //       .catch(err => console.log(err))
  //   })
  //   .then(result => {
  //     return fetchedCart.setProducts(null);
  //   })
  //   .then(result => res.redirect('/order'))
  //   .catch(err => console.log(err));
}