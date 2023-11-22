const sequelize = require('../config/connection')
const seedBlog = require('./blogData');
const seedcomments = require('./commentData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedBlog();

    await seedcomments();

    process.exit(0);
};

seedAll();