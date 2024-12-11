
const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');


exports.addComment = async (req, res) => {
  const postId = req.params.id;
  const { text } = req.body;

  try {
    const post = await Post.findByPk(postId);

    if (!post) return res.status(404).json({ message: 'Post not found' });

    const comment = await Comment.create({
      text,
      postId,
      userId: req.user.id,
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getComments = async (req, res) => {
  const postId = req.params.id;

  try {
    const comments = await Comment.findAll({
      where: { postId },
      include: [
        {
          model: User,
          as: 'commenter',
          attributes: ['id', 'username', 'avatar'],
        },
      ],
      order: [['createdAt', 'DESC']],
    });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
