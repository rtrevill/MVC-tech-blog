const Blog = require('./Blog');
const Comments = require('./Comments');
const User = require('./User');

User.hasMany(Blog, {
    foreignKey: 'creator_id',
});

User.hasMany(Comments, {
    foreignKey: 'creator_id',
});

Blog.belongsTo(User, {
    foreignKey: 'creator_id',
});

Blog.hasMany(Comments, {
    foreignKey: 'blog_id',
});

Comments.belongsTo(User, {
    foreignKey: 'creator_id',
});

module.exports = {
    User,
    Comments,
    Blog,
};