const router = require('express').Router();
const { Blog, User, Comments } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req,res) => {
    try{
    const allBlogs = await Blog.findAll({
        include: [{model: User}],
        order: [
            ['id', 'DESC']
        ],
    });

    const blogs = allBlogs.map((blog) => blog.get({ plain: true }));

    res.render('homepage', {
        blogs,
        logged_in: req.session.loggedIn,
        pageTitle: "The Tech Blog"});
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

    const blogs = allBlogs.get({ plain: true });

    res.render('homepage', {
        blogs,
        pageTitle: "The Tech Blog"});
    }
    catch(err){
        res.status(500).json({message: `Something went wrong ${err}`});
    }

});

router.get('/login', async (req,res) => {
    res.render('login', {pageTitle: "The Tech Blog"});
});

router.get('/create-user', async (req, res) => {
    res.render('create-user', {pageTitle: "The Tech Blog"});
});

router.get('/dash', withAuth, async (req, res) => {
    try{
        const userBlogs = await Blog.findAll({include: [{model: User}], where: 
            {creator_id: req.session.user_id}}
        )

        const refinedBlogs = userBlogs.map((blogs) => blogs.get({ plain : true })); 

        res.render('dashboard', {refinedBlogs, logged_in: req.session.loggedIn, pageTitle: "Your Dashboard"});
    
    }catch(err){
        console.log(err);
    }
});

router.get('/new-post', withAuth, (req,res) => {
    res.render('new-post', {logged_in: req.session.loggedIn, pageTitle: "Your Dashboard"});
});


module.exports = router;