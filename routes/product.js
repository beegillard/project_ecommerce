const Router = require('express-promise-router');
const products = require('../models/productModel');
const router = new Router();

router.get('/', products.getProducts);


  router.get('/:id', products.getProduct);
  

  
  module.exports = router;

