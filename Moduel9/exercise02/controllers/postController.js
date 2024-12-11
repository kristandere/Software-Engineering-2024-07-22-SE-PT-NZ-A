
const Post = require('../models/Post');
const Comment = require('../models/Comment');


exports.createPost = async (req, res) => {
  const { title, description } = req.body;
  const image = req.file ? `/uploads/images/${req.file.filename}` : null;

  try {
    const post = await Post.create({
      author: req.user._id,
      title,
      description,
      image,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'username avatar')
      .populate({
        path: 'comments',
        populate: { path: 'commenter', select: 'username avatar' },
      })
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: 'Post not found' });

    if (post.likes.includes(req.user._id)) {
      // Unlike
      post.likes.pull(req.user._id);
    } else {
      // Like
      post.likes.push(req.user._id);
    }

    await post.save();
    res.json({ likes: post.likes.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: 'Post not found' });

    // Check if the user is the author
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await post.remove();
    res.json({ message: 'Post removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
