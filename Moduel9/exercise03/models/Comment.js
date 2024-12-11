
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./User');
const Post = require('./Post');

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: DataTypes.STRING(500),
    allowNull: false,
    validate: {
      len: [1, 500],
    },
  },
}, {
  timestamps: true,
  tableName: 'comments',
});


Comment.belongsTo(User, { foreignKey: 'userId', as: 'commenter' });
User.hasMany(Comment, { foreignKey: 'userId', as: 'comments' });

Comment.belongsTo(Post, { foreignKey: 'postId', as: 'post' });
Post.hasMany(Comment, { foreignKey: 'postId', as: 'comments' });

module.exports = Comment;
