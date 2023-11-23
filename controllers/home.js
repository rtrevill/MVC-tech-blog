const router = require('express').Router();
const { Blog, User, Comments } = require('../models');
// const withAuth = require('../utils/auth');


router.get('/', async (req,res) => {
    try{
    const allBlogs = await Blog.findAll({
        include: [
            {
                model: Comments,
                attributes: [
                    'comment',
                ],
            },
            {model: User},
        ],
    });
    // console.log(allBlogs);
    const blogs = allBlogs.map((blog) => blog.get({ plain: true }));
    console.log(blogs);
    res.render('homepage', {blogs});
    // res.status(200).json(allBlogs);
    }
    catch(err){
        res.status(500).json({message: 'Something went wrong'});
    }

});


module.exports = router;