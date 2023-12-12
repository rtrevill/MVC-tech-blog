const router = require('express').Router();
const { Blog, User, Comments } = require('../../models');

router.get('/:id', async (req, res) => {
    try{
        const singleBlog = await Blog.findByPk(req.params.id)
        const newBlog = singleBlog.get({ plain:true });
        res.status(200).render('singleDashBlog', {newBlog, logged_in: req.session.loggedIn, pageTitle: "Your Dashboard"});
    }catch(err){
        console.log(err);
    }
});


router.post('/', async (req, res) => {
    try{
        const creator_id = req.session.user_id;
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
        res.status(200).json(deleteBlog);
    }catch(err){
        console.log(err);
    }
});

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
});

router.get('/blogComments/:id', async (req,res) => {
    try{
        const blogAndComment = await Blog.findByPk(req.params.id, {include: [{model: Comments}, {model:User}]})
        const bandC = blogAndComment.get({ plain: true})

        const commentAndCreator = await Comments.findAll({where: {blog_id: bandC.id}, include: [{model: User}]})
        const cAndC = commentAndCreator.map((comment) => comment.get({plain: true}))

        res.status(200).render('blogAndComments', {bandC, cAndC, logged_in: req.session.loggedIn, userID: req.session.user_id, pageTitle: "The Tech Blog"})

    }catch(err){
        console.log(err);
    }
}
);

router.post('/newComment', async (req,res) => {
    try{
        const makeComment = await Comments.create(req.body);

        res.status(200).json(makeComment);
    }catch(err){
        console.log(err);
    }
});


module.exports = router;