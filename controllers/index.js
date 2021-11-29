const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const vehicleRoutes = require("./vehicleRoutes");

router.use("/", homeRoutes);
router.use("/vehicle", vehicleRoutes);
router.use("/api", apiRoutes);

module.exports = router;
