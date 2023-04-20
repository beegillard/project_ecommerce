
const products = require('./product');
const orders = require('./order');
const cart = require('./cart');
const customer = require('./customer');


//Mounts each individual router into main application
 
module.exports = (app) => {
  app.use('/products', products);
  //app.use('/orders', orders);
  app.use('/carts', cart);
  //app.use('/customers', customer);
};