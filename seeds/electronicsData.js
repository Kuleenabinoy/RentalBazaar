const { Electronics } = require("../models");
const electronicsdata = [
    {
        name: "Samsung Music player",
        description: " Excellent condition",
        price: 100,
        image_url: "https://via.placeholder.com/400x400 ",
        available: "true",
        user_id: 2,
        category_id: 3,
    },
    {
        name: "DJI mavic Mini",
        description: " Excellent condition ",
        price: 100,
        image_url: " https://via.placeholder.com/400x400",
        available: "true",
        user_id: 2,
        category_id: 3,
    },
];
const seedElectronics = () => Electronics.bulkCreate(electronicsdata);
module.exports = seedElectronics;
