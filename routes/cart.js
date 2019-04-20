const express     = require('express'),
      path        = require('path');

const router      = express.Router();

const cartController = require('../controllers/cart');

router.get('/cart', cartController.getCart);

router.post('/cart', cartController.addToCart);

module.exports = router;