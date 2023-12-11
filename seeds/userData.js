const { User } = require('../models');

const userData = [
    {
        username: 'Superman',
        password: 'banana123',
    },
    {
        username: 'The Flash',
        password: 'elvis789',
    },

];

const seeduser = () => User.bulkCreate(userData);

module.exports = seeduser;