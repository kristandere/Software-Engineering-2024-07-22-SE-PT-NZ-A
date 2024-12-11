const express = require('express');
const router = express.Router();
const { getLikes } = require('../controllers/likeController');


router.get('/:id/likes', getLikes);

module.exports = router;
