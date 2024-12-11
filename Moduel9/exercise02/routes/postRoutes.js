
const express = require('express');
const router = express.Router();
const {
  createPost,
  getAllPosts,
  likePost,
  deletePost,
} = require('../controllers/postController');
const { addComment, getComments } = require('../controllers/commentController');
const { protect } = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + '-' + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
};

const upload = multer({
  storage,
  fileFilter,
});


router.post('/', protect, upload.single('image'), createPost);



router.get('/', getAllPosts);


router.post('/:id/like', protect, likePost);


router.delete('/:id', protect, deletePost);


const commentRoutes = require('./commentRoutes');
router.use('/:id/comments', commentRoutes);

module.exports = router;
