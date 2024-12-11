// controllers/postController.js
const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');
const Like = require('../models/Like');
const sequelize = require('../config/config');


exports.createPost = async (req, res) => {
  const { title, description } = req.body;
  const image = req.file ? `/uploads/images/${req.file.filename}` : null;

  try {
    const post = await Post.create({
      title,
      description,
      image,
      userId: req.user.id,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'username', 'avatar'],
        },
        {
          model: Comment,
          as: 'comments',
          include: [
            {
              model: User,
              as: 'commenter',
              attributes: ['id', 'username', 'avatar'],
            },
          ],
        },
        {
          model: Like,
          as: 'likes',
          include: [
            {
              model: User,
              as: 'user',
              attributes: ['id', 'username', 'avatar'],
            },
          ],
        },
      ],
      order: [['createdAt', 'DESC']],
    });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.likePost = async (req, res) => {
  const postId = req.params.id;
  const userId = req.user.id;

  try {
    const post = await Post.findByPk(postId);

    if (!post) return res.status(404).json({ message: 'Post not found' });

    const existingLike = await Like.findOne({ where: { postId, userId } });

    if (existingLike) {
      await existingLike.destroy();
      res.json({ message: 'Post unliked', likesCount: await Like.count({ where: { postId } }) });
    } else {

      await Like.create({ postId, userId });
      res.json({ message: 'Post liked', likesCount: await Like.count({ where: { postId } }) });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.deletePost = async (req, res) => {
  const postId = req.params.id;
  const userId = req.user.id;

  try {
    const post = await Post.findByPk(postId);

    if (!post) return res.status(404).json({ message: 'Post not found' });


    if (post.userId !== userId) {
      return res.status(401).json({ message: 'Not authorized to delete this post' });
    }

    await post.destroy();
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
