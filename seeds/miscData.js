const { Misc } = require("../models");
const miscData = [
    {
        name: "Mens SnowJackets",
        description: "Kathmandu Heavy jacket size S-XL",
        price: 10,
        image_url: "",
        available: "true",
        user_id: 3,
        category_id: 5,
    },
    {
        name: "Womens Wedding Frock",
        description: "Snow White Medium -Large Size",
        price: 100,
        image_url: "",
        available: "true",
        user_id: 1,
        category_id: 5,
    },
];

const seedMisc = () => Misc.bulkCreate(miscData);
module.exports = seedMisc;
