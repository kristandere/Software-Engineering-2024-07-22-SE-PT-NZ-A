const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./User');
const Post = require('./Post');

const Like = sequelize.define('Like', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  timestamps: true,
  tableName: 'likes',
});

Like.belongsTo(User, { foreignKey: 'userId', as: 'user' });
User.hasMany(Like, { foreignKey: 'userId', as: 'likes' });

Like.belongsTo(Post, { foreignKey: 'postId', as: 'post' });
Post.hasMany(Like, { foreignKey: 'postId', as: 'likes' });

module.exports = Like;
