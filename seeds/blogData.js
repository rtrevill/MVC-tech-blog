const { Blog } = require('../models');

const blogData = [
    {
        title: 'First Trial Blog',
        contents: 'This is just a test',
        creator_id: 1,
    },
    {
        title: 'Second blog Blog',
        contents: 'This is a follow up to the first test',
        creator_id: 2,
    },
    {
        title: 'Bloggy McBlogface',
        contents: 'Self explanatory',
        creator_id: 1,
    },

];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;