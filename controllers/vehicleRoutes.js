const router = require("express").Router();
const { Vehicle, User } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all

router.get("/", withAuth, async (req, res) => {

  router.get("/", async (req, res) => {

    try {
        const vehicleData = await Vehicle.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const vehicles = vehicleData.map((vehicle) => vehicle.get({ plain: true }));

        res.render("vehiclepage", {
            vehicles,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Use the custom middleware before allowing the user to access the vehicle
router.get("/:id", withAuth, async (req, res) => {
    try {
        const vehicleData = await Vehicle.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const vehicles = vehicleData.get({ plain: true });
        res.render("vehiclepage", { vehicles, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
