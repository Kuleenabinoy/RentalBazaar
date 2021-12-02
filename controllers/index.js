const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const vehicleRoutes = require("./vehicleRoutes");
const propertyRoutes = require("./propertyRoutes");
const miscRoutes = require("./homeRoutes");
const furnitureRoutes = require("./furnitureRoutes");
const categoriesRoutes = require("./categoriesRoutes");

// const adminRoutes = require("./adminRoutes");

// const propertyRoutes = require("./propertyRoutes");
// const miscRoutes = require("./homeRoutes");
// const furnitureRoutes = require("./furnitureRoutes");
// const categoriesRoutes = require("./categoriesRoutes");
// const electronicsRoutes = require("./electronicsRoutes");

router.use("/", homeRoutes);
router.use("/vehicle", vehicleRoutes);
router.use("/api", apiRoutes);
router.use("/property", propertyRoutes);
router.use("/categories", categoriesRoutes);
router.use("/misc", miscRoutes);
router.use("/furniture", furnitureRoutes);

// router.use("/admin-dashboard", adminRoutes);

router.use("/property", propertyRoutes);
router.use("/categories", categoriesRoutes);
router.use("/misc", miscRoutes);
router.use("/furniture", furnitureRoutes);
router.use("/electronics", electronicsRoutes);

module.exports = router;
