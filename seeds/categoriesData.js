const { Categories } = require("../models");
const categoriesData = [
    {
        name: "Property",
        user_id: 2,
    },
    {
        name: "Vehicle",
        user_id: 3,
    },
    {
        name: "Electronics",
        user_id: 1,
    },
    {
        name: "Furniture",
        user_id: 2,
    },
    {
        name: "Misc",
        user_id: 1,
    },
];
const seedCategories = () => Categories.bulkCreate(categoriesData);
module.exports = seedCategories;
