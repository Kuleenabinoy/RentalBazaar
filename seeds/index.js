const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedCategories = require("./categoriesData");
const seedElectronics = require("./electronicsData");
const seedFurniture = require("./furnitureData");
const seedProperty = require("./propertyData");
const seedVehicle = require("./vehicleData");
const seedMisc = require("./miscData");
const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUser();
    await seedCategories();

    await seedElectronics();
    await seedFurniture();
    await seedProperty();
    await seedVehicle();
    await seedMisc();
    process.exit(0);
};

seedAll();
