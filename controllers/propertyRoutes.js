const router = require("express").Router();
const { Property, User } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all
router.get("/", withAuth, async (req, res) => {
    try {
        const propertyData = await Property.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const property = propertyData.map((property) => property.get({ plain: true }));

        res.render("propertypage", {
            property,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Use the custom middleware before allowing the user to access the electrnics
router.get("/property/:id", withAuth, async (req, res) => {
    try {
        const propertyData = await Property.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const property = propertyData.get({ plain: true });
        res.render("property-singleitem", { property, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;