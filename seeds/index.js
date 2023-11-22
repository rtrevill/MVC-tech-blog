const seedBlog = require('./blogData');
const seedcomments = require('./commentData');
const seeduser = require('./userData');

const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n---Database Synced---\n');
    await seeduser();

    await seedBlog();

    await seedcomments();


    process.exit(0);
};

seedAll();