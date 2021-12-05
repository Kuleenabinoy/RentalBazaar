const router = require("express").Router();

const userRoutes = require("./user-routes");
const categoriesRoutes = require("./categories-routes");
const miscRoutes = require("./misc-routes");
const propertyRoutes = require("./properties-routes");
const vehicleRoutes = require("./vehicle-routes");

router.use("/users", userRoutes);
router.use("/vehicle", vehicleRoutes);
router.use("/categories", categoriesRoutes);
router.use("/property", propertyRoutes);
router.use("/misc", miscRoutes);


module.exports = router;
