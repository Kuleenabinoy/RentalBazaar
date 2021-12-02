const router = require("express").Router();

const userRoutes = require("./user-routes");
const electronicsRoutes = require("./electronics-routes");
const furnitureRoutes = require("./furniture-routes");
const miscRoutes = require("./misc-routes");
const vehicleRoutes = require("./vehicle-routes");

router.use("/users", userRoutes);
router.use("/electronics", electronicsRoutes);
//router.use("/furniture", furnitureRoutes);
//router.use("/misc", miscRoutes);
router.use("/vehicle", vehicleRoutes);

module.exports = router;
