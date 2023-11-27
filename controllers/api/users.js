const router = require('express').Router();
const {User, Blog, Comments} = require('../../models')

router.post('/', async (req,res) => {
    try{
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);
        
    }catch(err){
        console.log(`Something went wrong ${err}`);
    }
});

router.post('/login', async (req, res) => {
    try{
        const validUser = await User.findOne({ where: {username: req.body.username}});
        console.log(validUser);

        if (!validUser) {
            res.status(400).json({message: 'Cannot find user with this Username'});
            return;
        }

    const validatePassword = await validUser.checkPassword(req.body.password);

        if (!validatePassword) {
            res.status(400).json({ message: 'Not a valid password provided'});
            return;
        }

    req.session.save(() => {
        req.session.user_id = validUser.id;
        req.session.loggedIn = true;

        res.status(200).json({ user: validUser,loggedIn: req.session.loggedIn, message: 'Login successful'});
    })
    }catch(err){
        console.log(err);
    }
})

router.post('/logout', async (req,res) => {
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


// router.get('/:id', async (req,res) => {
//     try{
//     const allBlogs = await User.findByPk(req.params.id, {
//         include: [{model: Blog}, {model: Comments}]
//     });
//     console.log(allBlogs);
//     const blogs = allBlogs.get({ plain: true });
//     console.log(blogs);
//     res.render('homepage', {blogs});
//     // res.status(200).json(allBlogs);
//     }
//     catch(err){
//         res.status(500).json({message: `Something went wrong ${err}`});
//     }

// });

module.exports = router;