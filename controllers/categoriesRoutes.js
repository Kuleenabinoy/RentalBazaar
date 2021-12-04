const router = require("express").Router();
const { Categories, User } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all
router.get("/", withAuth, async (req, res) => {
    try {
        const categoriesData = await Categories.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const categories = categoriesData.map((categories) => categories.get({ plain: true }));

        res.render("categoriespage", {
            categories,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Use the custom middleware before allowing the user to access the electrnics
router.get("/categories/:id", withAuth, async (req, res) => {
    try {
        const categoriesData = await Categories.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const categories = categoriesData.get({ plain: true });
        res.render("categories-singleitem", { categories, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;