const router = require('express').Router();

const usersRoutes = require('./users');
const blogRoutes = require('./blog');

router.use('/users', usersRoutes);
router.use('/blog',blogRoutes);


module.exports = router;