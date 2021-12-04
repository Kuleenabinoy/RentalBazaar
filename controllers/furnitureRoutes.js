const router = require("express").Router();
const { Furniture, User } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all

router.get("/furniture", withAuth, async (req, res) => {

router.get("/", withAuth, async (req, res) => {

    try {
        const furnitureData = await Furniture.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const furniture = furnitureData.map((furniture) => furniture.get({ plain: true }));

        res.render("furniturepage", {

        res.render("productpage", {

            furniture,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Use the custom middleware before allowing the user to access the furniture

router.get("/furniture/:id", withAuth, async (req, res) => {

router.get("/:id", withAuth, async (req, res) => {

    try {
        const furnitureData = await Furniture.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const furniture = furnitureData.get({ plain: true });
        res.render("furniture-singleitem", { furniture, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;

module.exports = router;

