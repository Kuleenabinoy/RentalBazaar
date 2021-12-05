const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const vehicleRoutes = require("./vehicleRoutes");
const propertyRoutes = require("./propertyRoutes");
const miscRoutes = require("./homeRoutes");
const categoriesRoutes = require("./categoriesRoutes");

router.use("/", homeRoutes);
router.use("/vehicle", vehicleRoutes);
router.use("/misc", miscRoutes);
router.use("/api", apiRoutes);
router.use("/property", propertyRoutes);
router.use("/categories", categoriesRoutes);
router.use("/misc", miscRoutes);

// router.use("/admin-dashboard", adminRoutes);

module.exports = router;
