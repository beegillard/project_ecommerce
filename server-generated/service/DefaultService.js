'use strict';


/**
 * removes item from cart
 *
 * itemId Integer The id of item to be deleted.
 * cartId Integer The id of cart to be accessed.
 * no response value expected for this operation
 **/
exports.delete_cart_item = function(itemId,cartId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes order by id
 *
 * orderId Integer The id of the order to be deleted.
 * no response value expected for this operation
 **/
exports.delete_order = function(orderId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets all items in a specific cart by id
 *
 * cartId Integer The id of cart to be accessed.
 * no response value expected for this operation
 **/
exports.get_cart = function(cartId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get order by order id
 *
 * orderId Integer The orders of the customer with given id.
 * no response value expected for this operation
 **/
exports.get_order = function(orderId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all orders related to customer id
 *
 * custId Integer The orders of the customer with given id.
 * no response value expected for this operation
 **/
exports.get_orders = function(custId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get product by product id
 *
 * productId Integer The id of the product.
 * no response value expected for this operation
 **/
exports.get_product = function(productId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets all products
 *
 * no response value expected for this operation
 **/
exports.get_products = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Creates a new order
 *
 * no response value expected for this operation
 **/
exports.post_order = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Modifies items in the cart
 *
 * cartId Integer The id of cart to be accessed.
 * no response value expected for this operation
 **/
exports.put_cart = function(cartId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

