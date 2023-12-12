const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// Initializes and specifies parameters for Comments model (sequelize),
// including creating associations with other models
class Comments extends Model {}

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        creator_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            },
        },
        blog_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "blog",
                key: "id",
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