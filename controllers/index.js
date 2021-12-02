const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const vehicleRoutes = require("./vehicleRoutes");
// const adminRoutes = require("./adminRoutes");

router.use("/", homeRoutes);
router.use("/vehicle", vehicleRoutes);
router.use("/api", apiRoutes);
// router.use("/admin-dashboard", adminRoutes);

module.exports = router;
