const router = require('express').Router();

// Import models for Sequelize queries.
const {User, Blog, Comments} = require('../../models')


// Create new user from details supplied in req.body
router.post('/', async (req,res) => {
    try{
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);
    }catch(err){
        console.log(`Something went wrong ${err}`);
    }
});


// Checks login details of user, first checking if there is a matching username,
// Then checks password with 'checkPassword' function (from user model)
// If both okay, creates a new session using express.session
router.post('/login', async (req, res) => {
    try{
        const validUser = await User.findOne({ where: {username: req.body.username}});

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

        res.status(200).json({message: "OKAY"})

    })
    }catch(err){
        console.log(err);
    }
})


// Ends user's session on express.session
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
});


// Query to check if a user exists
router.get('/:id', async(req,res) => {
    try{
        const checkUser = await User.findOne({where: {username: req.params.id}})
        res.status(200).json(checkUser);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;