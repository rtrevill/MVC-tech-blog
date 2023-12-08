const router = require('express').Router();
const { Blog, User, Comments } = require('../../models');
const withAuth = require('../../utils/auth.js')

router.get('/:id', async (req, res) => {
    try{
        const singleBlog = await Blog.findByPk(req.params.id)
        const newBlog = singleBlog.get({ plain:true });
        res.status(200).render('singleDashBlog', {newBlog, logged_in: req.session.loggedIn});
    }catch(err){
        console.log(err);
    }
});


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

router.delete('/', async (req, res) => {
    try{
        const deleteBlog = await Blog.destroy({
            where: {
                id: req.body.id,
            },
        });
        console.log('Post Deleted!')
        res.status(200).json(deleteBlog);
    }catch(err){
        console.log(err);
    }
})

router.put('/', async (req,res) => {
    try{
        const updatedBlog = await Blog.update({
            title: req.body.title,
            contents: req.body.contents,
        },
        {
            where: {
                id: req.body.id,
            },
        })
        res.status(200).json(updatedBlog);
    }catch(err){
        console.log(err);
    }
})

router.get('/blogComments/:id', withAuth ,async (req,res) => {
    try{
        if(!req.session.loggedIn){
            res.redirect('/login');
        }
        const blogAndComment = await Blog.findByPk(req.params.id, {include: [{model: Comments}]})
        const bandC = blogAndComment.get({ plain: true})
        res.status(200).render('blogAndComments', {bandC, logged_in: req.session.loggedIn})

    }catch(err){
        console.log(err);
    }
})


module.exports = router;