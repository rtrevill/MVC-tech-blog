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
    const blogs = allBlogs.map((blog) => blog.get({ plain: true }));


    if (req.session.loggedIn){
        console.log('Login confirmed');
    }
    // console.log(blogs.comments)
    // res.json({loggedin: req.session.loggedIn})
    res.render('homepage', {
        blogs,
        logged_in: req.session.loggedIn});
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

router.get('/create-user', async (req, res) => {
    res.render('create-user');
});

router.get('/dash', async (req, res) => {
    if (!req.session.loggedIn){
        res.redirect('/Login')
    }
    try{
        console.log(req.session.loggedIn)
        const userBlogs = await Blog.findAll({include: [{model: User}], where: 
            {creator_id: req.session.user_id}}
        )
        const refinedBlogs = userBlogs.map((blogs) => blogs.get({ plain : true })); 
        console.log(refinedBlogs);

        let loggedInOrNot = req.session.loggedIn;
        let userNumber = req.session.user_id;
        console.log(loggedInOrNot, userNumber);
        res.render('dashboard', {loggedInOrNot, userNumber, refinedBlogs});
    
    }catch(err){
        console.log(err);
    }

});

router.get('/new-post', (req,res) => {
    if (!req.session.loggedIn){
        res.redirect('/Login')
    }
    res.render('new-post');
});

router.get('/logout', async (req, res) => {
    try{
        if (!req.session.loggedIn){
            res.redirect('/dash');
        }
        req.session.destroy(() => {
            res.status(200).end();
        })
    }catch(err){
        console.log(err);
    }
})

module.exports = router;