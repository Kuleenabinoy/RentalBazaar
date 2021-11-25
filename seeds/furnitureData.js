const { Furniture } = require("../models");
const furnitureData = [
    {
        name: "Oakwood 8 Seater Dining Table",
        description: "Wooden table ",
        image_url: "",
        price: 100,
        available: "true",
        user_id: 2,
        category_id: 4,
    },
    {
        name: "Oakwood Outdoor Dining table",
        description: "Wooden table with 10 chairs ",
        image_url: "",
        price: 100,
        available: "true",
        user_id: 1,
        category_id: 4,
    },
];
const seedFurniture = () => Furniture.bulkCreate(furnitureData);
module.exports = seedFurniture;
