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

    const validatePassword = validUser.checkPassword(req.body.password);

        if (!validatePassword) {
            res.status(400).json({ message: 'Not a valid password provided'});
            return;
        }

    req.session.save(() => {
        req.session.user_id = validUser.id;
        req.session.loggedIn = true;


        res.status(200).json({message: "logged In"});

        // res.status(200).json({ user: validUser,loggedIn: req.session.loggedIn, message: 'Login successful'});
    })
    }catch(err){
        console.log(err);
    }
})

router.get('/logout', async (req,res) => {
    try{
        if (!req.session.loggedIn){
            res.redirect('/');
        }
        req.session.destroy(() => {
            res.status(200).redirect('/');
        })
    }catch(err){
        console.log(err);
    }
})

module.exports = router;