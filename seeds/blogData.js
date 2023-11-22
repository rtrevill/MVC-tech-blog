const { Blog } = require('../models');

const blogData = [
    {
        title: 'First Trial Blog',
        contents: 'This is just a test',
        creator_id: 1,
    },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;