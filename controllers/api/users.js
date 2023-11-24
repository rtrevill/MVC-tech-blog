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

module.exports = router;