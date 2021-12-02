const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const vehicleRoutes = require("./vehicleRoutes");
const furnitureRoutes = require("./furnitureRoutes");
const electronicsRoutes = require("./electronicsRoutes");
const miscRoutes = require("./miscRoutes");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/vehicle", vehicleRoutes);
router.use("/furniture", furnitureRoutes);
router.use("/electronics", electronicsRoutes);
router.use("/misc", miscRoutes);
router.use("/api", apiRoutes);

module.exports = router;
