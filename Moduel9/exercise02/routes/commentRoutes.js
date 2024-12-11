
const express = require('express');
const router = express.Router({ mergeParams: true });
const { addComment, getComments } = require('../controllers/commentController');
const { protect } = require('../middleware/auth');


router.post('/', protect, addComment);


router.get('/', getComments);

module.exports = router;
