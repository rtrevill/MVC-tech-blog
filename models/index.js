const Blog = require('./Blog');
const Comments = require('./Comments');
const User = require('./User');

// Creating one-to-one and one-to-many associations
// between the models.
// Also, specifying that once a blog is deleted, any comments associated with that blog will also be deleted.

User.hasMany(Blog, {
    foreignKey: 'creator_id',
});

Blog.belongsTo(User, {
    foreignKey: 'creator_id',
});

User.hasMany(Comments, {
    foreignKey: 'creator_id',
});

Comments.belongsTo(User, {
    foreignKey: 'creator_id',
});

Blog.hasMany(Comments, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE',
});

Comments.belongsTo(Blog, {
    foreignKey: 'blog_id',
});

module.exports = {
    User,
    Comments,
    Blog,
};