const { User } = require('../models');

const userData = [
    {
        username: 'Superman',
        email: 'bigs@flyingman.com',
        password: 'banana123',
    },
    {
        username: 'The Flash',
        email: 'Superfast@mail.com',
        password: 'elvis789',
    },

];

const seeduser = () => User.bulkCreate(userData);

module.exports = seeduser;