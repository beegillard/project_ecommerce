const db = require('../db/index');

const getProducts = (req, res) => {
     db.query("SELECT * FROM products", (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
    })
};

const getProductById = (req, res) => {

 db.query("SELECT * FROM products WHERE id = $1", [req.params.id], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
    })
};

module.exports = {
    getProducts,
    getProductById
};