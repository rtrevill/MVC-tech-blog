const {Model, Datatypes} = require('sequelize');
const sequelize = require('sequelize');

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: Datatypes.STRING,
            allowNull: false,   
        },
        contents: {
            type: Datatypes.TEXT,
            allowNull: false,
        },
        creator: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        creator_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: true,
        modelName: 'blog',
    },
);

module.exports = Blog;