const { User } = require("../models");

const userdata = [
    {
        username: "Can",
        email: "can@gmail.com",
        password: "password",
    },
    {
        username: "Ali",
        email: "ali@gmail.com",
        password: "password",
    },
    {
        username: "Bono",
        email: "bono@gmail.com",
        password: "password",
    },
];

const seedUser = () =>
    User.bulkCreate(userdata, {
        individualHooks: true,
        returning: true,
    });

module.exports = seedUser;
