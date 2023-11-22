const router = require('express').Router();
const { Blog, User, Comments } = require('../models');
// const withAuth = require('../utils/auth');


router.get('/', async (req,res) => {
    try{
    const allBlogs = await Blog.findAll({
        include: [{model: User}, {model: Comments}]
    });
    res.status(200).json(allBlogs);
    }
    catch(err){
        res.status(500).json({message: 'Something went wrong'});
    }

});


module.exports = router;