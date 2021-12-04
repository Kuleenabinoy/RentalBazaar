const { User } = require("../models");

const userdata = [
  {
    username: "Can",
    email: "can@gmail.com",
    password: "password",
    isadmin: false,
  },
  {
    username: "Ali",
    email: "ali@gmail.com",
    password: "password",
    isadmin: false,
  },
  {
    username: "Bono",
    email: "bono@gmail.com",
    password: "password",
    isadmin: false,
  },
  {
    username: "admin",
    email: "admin@admin.com",
    password: "password",
    isadmin: true,
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
