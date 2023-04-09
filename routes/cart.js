const Router = require('express-promise-router');

const db = require('../db');


/*

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router();
 
// export our router to be mounted by the parent application
module.exports = router;
 
//update this with correct API endpoints

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id])
  res.send(rows[0])
});

*/

const allProducts = (req, res) => {
    pool.query("SELECT * FROM product", (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
    })
};