const Router = require('express-promise-router');
const products = require('../models/productModel');
const router = new Router();

//products
//products/:id


//get all products
router.get('/', products.getProducts);

//get product by id
router.get('/:id', products.getProductById);
  

  
  module.exports = router;

