'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.delete_cart_item = function delete_cart_item (req, res, next, itemId, cartId) {
  Default.delete_cart_item(itemId, cartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.delete_order = function delete_order (req, res, next, orderId) {
  Default.delete_order(orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_cart = function get_cart (req, res, next, cartId) {
  Default.get_cart(cartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_order = function get_order (req, res, next, orderId) {
  Default.get_order(orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_orders = function get_orders (req, res, next, custId) {
  Default.get_orders(custId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_product = function get_product (req, res, next, productId) {
  Default.get_product(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_products = function get_products (req, res, next) {
  Default.get_products()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post_order = function post_order (req, res, next) {
  Default.post_order()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.put_cart = function put_cart (req, res, next, cartId) {
  Default.put_cart(cartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
