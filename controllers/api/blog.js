const router = require('express').Router();
const { Blog, User, Comments } = require('../../models');


router.post('/', async (req, res) => {
    try{
        const creator_id = req.session.user_id;
        console.log(req.session.loggedIn, req.session.user_id)
        const blogTitle = req.body.title;
        const blogContents = req.body.contents;

        const newPost  = await Blog.create({title: blogTitle, contents: blogContents, creator_id: creator_id})
        res.status(200).json(newPost);

    }catch(err){
        console.log(`Oh No Something went wrong ${err}`);
    }
});

module.exports = router;