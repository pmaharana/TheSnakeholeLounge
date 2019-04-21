const express  = require('express'),
      router   = express.Router();

const adminController = require('../controllers/admin');

router.get('/add-product', adminController.getAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.get('/products', adminController.getProducts);

router.post('/product', adminController.postAddProducts);

module.exports = router;