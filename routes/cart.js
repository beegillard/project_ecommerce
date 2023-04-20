const Router = require('express-promise-router');
const carts = require('../models/cartModel');
const router = new Router();

//router.get('/', carts.getCartByCustId);

router.get('/:id', carts.getCartById);
  

  
  module.exports = router;
