const {Model, Datatypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
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
                model: "user",
                key: 'id',
            },
        },
        blog_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
                model: 'blog',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        createdAt: true,
        updatedAt: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments'
    },
);

module.exports = Comments;