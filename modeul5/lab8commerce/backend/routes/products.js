const express = require('express');
const { fetchProducts } = require('../controllers/productsController');
const router = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of products
 *     responses:
 *       200:
 *         description: A list of products
 */

router.get('/', fetchProducts);

module.exports = router;