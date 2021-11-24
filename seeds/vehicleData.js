const { Vehicle } = require("../models");
const vehicleData = [
    {
        model: "Volkswagen CC",
        color: "Grey",
        year: 2012,
        license_plate: "EY34 P",
        registration_expiration: "2022-06-01",
        insurance_expiration: "2021-06-12",
        image_url: "",
        price: 300,
        available: "true",
        user_id: 2,
        category_id: 2,
    },
    {
        model: "Tesla Model3",
        color: "Grey",
        year: 2020,
        license_plate: "EY21 P",
        registration_expiration: "2022-09-01",
        insurance_expiration: "2021-10-12",
        image_url: "",
        price: 500,
        available: "true",
        user_id: 3,
        category_id: 2,
    },
];
const seedVehicle = () => Vehicle.bulkCreate(vehicleData);
module.exports = seedVehicle;
