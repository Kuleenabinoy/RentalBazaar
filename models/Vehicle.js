const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Vehicle extends Model {}
Vehicle.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        license_plate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        registration_expiration: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        insurance_expiration: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(8, 2),
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
        modelName: "vehicle",
    }
);
module.exports = Vehicle;
