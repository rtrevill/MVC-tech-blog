const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Initializes and specifies parameters for Blog model (sequelize)
class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,   
        },
        contents: {
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