const router = require('express').Router();

// Import models for sequelize queries, and import function to check if user is logged in.
const { Blog, User, Comments } = require('../models');
const withAuth = require('../utils/auth');

// Get all blogs, and list them in reverse chronological order,
//then render the homepage, with login status.
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


// Renders login page when called
router.get('/login', async (req,res) => {
    res.render('login', {pageTitle: "The Tech Blog"});
});


// Renders 'Create User' page when called
router.get('/create-user', async (req, res) => {
    res.render('create-user', {pageTitle: "The Tech Blog"});
});


// Checks login status of user, then renders the dashboard page, with all the user's blogs listed.
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


// Checks login status, then renders "New Post" page
router.get('/new-post', withAuth, (req,res) => {
    res.render('new-post', {logged_in: req.session.loggedIn, pageTitle: "Your Dashboard"});
});


module.exports = router;