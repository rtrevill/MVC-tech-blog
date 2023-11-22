const { User } = require('../models');

const userData = [
    {
        username: 'Superman',
        email: 'bigs@flyingman.com',
        password: 'banana123',
    },
];

const seeduser = () => User.bulkCreate(userData);

module.exports = seeduser;