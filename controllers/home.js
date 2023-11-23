const router = require('express').Router();
const { Blog, User, Comments } = require('../models');
// const withAuth = require('../utils/auth');


router.get('/', async (req,res) => {
    try{
    const allBlogs = await Blog.findAll({
        include: [{model: User}]
        //     {
        //         model: Comments,
        //         attributes: [
        //             'comment',
        //         ],
        //     },
        //     {model: User},
        // ],
    });
    // console.log(allBlogs);
    const blogs = allBlogs.map((blog) => blog.get({ plain: true }));
    console.log(blogs);
    // console.log(blogs.comments)
    res.render('homepage', {blogs});
    // res.status(200).json(allBlogs);
    }
    catch(err){
        res.status(500).json({message: `Something went wrong ${err}`});
    }

});

router.get('/user/:id', async (req,res) => {
    try{
    const allBlogs = await User.findByPk(req.params.id, {
        include: [{model: Blog}, {model: Comments}]
    });
    console.log(allBlogs);
    const blogs = allBlogs.get({ plain: true });
    console.log(blogs);
    res.render('homepage', {blogs});
    // res.status(200).json(allBlogs);
    }
    catch(err){
        res.status(500).json({message: `Something went wrong ${err}`});
    }

});

router.get('/login', async (req,res) => {
    res.render('login');
});

module.exports = router;