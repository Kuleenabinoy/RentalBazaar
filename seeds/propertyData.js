const { Property } = require("../models");
const propertyData = [
    {
        address: "5/12 b RHill NSW 2121",
        description: "Mordern 3BHK Apartment  with 2 Bathrooms",
        price: 100,
        image_url: "",
        available: "false",
        user_id: 1,
        category_id: 1,
    },
    {
        address: "23 b RHill NSW 2121",
        description: "House 5BHK  with 2 Bathrooms",
        price: 100,
        image_url: "",
        available: "false",
        user_id: 2,
        category_id: 1,
    },
];
const seedProperty = () => Property.bulkCreate(propertyData);
module.exports = seedProperty;
