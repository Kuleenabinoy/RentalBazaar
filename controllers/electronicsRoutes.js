const router = require("express").Router();
const { Electronics, User } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all
router.get("/", withAuth, async (req, res) => {
    try {
        const electronicsData = await Electronics.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const electronics = electronicsData.map((electronic) => electronic.get({ plain: true }));

        res.render("productspage", {
            electronics,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Use the custom middleware before allowing the user to access the electrnics
router.get("/:id", withAuth, async (req, res) => {
    try {
        const electronicsData = await Electronics.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const electronics = electronicsData.get({ plain: true });
        res.render("electronics-singleitem", { electronics, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
