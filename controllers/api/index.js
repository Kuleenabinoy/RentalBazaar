const router = require("express").Router();
const userRoutes = require("./user-routes");
const electronicsRoutes = require("./electronics-routes");
const categoriesRoutes = require("./categories-routes");
const furnitureRoutes = require("./furniture-routes");
const miscRoutes = require("./misc-routes");
const propertyRoutes = require("./properties-routes");
const vehicleRoutes = require("./vehicle-routes");

router.use("/users", userRoutes);
router.use("/vehicle", vehicleRoutes);
router.use("/categories", categoriesRoutes);
router.use("/property", propertyRoutes);
router.use("/electronics", electronicsRoutes);
router.use("/misc", miscRoutes);
router.use("/furniture", furnitureRoutes);

module.exports = router;
