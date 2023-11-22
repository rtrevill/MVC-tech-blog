const { Comments } = require('../models');

const commentdata = [
    {
        comment: 'Trial Comment number 1',
        creator_id: 1,
        blog_id: 1,
    },
];

const seedcomments = () => Comments.bulkCreate(commentdata);

module.exports = seedcomments;