const express     = require('express'),
      path        = require('path');

const router      = express.Router();

const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/checkout', shopController.getCheckout);

module.exports = router;