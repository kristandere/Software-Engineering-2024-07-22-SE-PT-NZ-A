
const Like = require('../models/Like');
const Post = require('../models/Post');


exports.getLikes = async (req, res) => {
  const postId = req.params.id;

  try {
    const likes = await Like.findAll({
      where: { postId },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'username', 'avatar'],
        },
      ],
    });

    res.json(likes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
