const { Comments } = require('../models');

const commentdata = [
    {
        comment: 'Trial Comment number 1',
        creator_id: 2,
        blog_id: 1,
    },
    {
        comment: 'The second blog is great... Check it out',
        creator_id: 1,
        blog_id: 2,
    },

];

const seedcomments = () => Comments.bulkCreate(commentdata);

module.exports = seedcomments;