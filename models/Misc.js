const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Misc extends Model {}
Misc.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255],
            },
        },
        price: {
            type: DataTypes.DECIMAL(8, 2),
            allowNull: false,
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        available: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },

        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "categories",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "misc",
    }
);
module.exports = Misc;
