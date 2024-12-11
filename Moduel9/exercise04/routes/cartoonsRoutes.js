
const express = require('express');
const router = express.Router();
const {
  getAllCartoons,
  getCartoonById,
  searchCartoons,
} = require('../controllers/cartoonsController');


router.get('/', getAllCartoons);


router.get('/:id', getCartoonById);

router.get('/search', searchCartoons);

module.exports = router;
