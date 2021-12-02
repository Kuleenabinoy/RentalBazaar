const router = require("express").Router();
const { Furniture, User, Misc } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all
router.get("/", withAuth, async (req, res) => {
    try {
        const miscData = await Misc.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const miscellaneous = miscData.map((miscs) => miscs.get({ plain: true }));

        res.render("productspage", {
            miscellaneous,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Use the custom middleware before allowing the user to access the furniture
router.get("/:id", withAuth, async (req, res) => {
    try {
        const miscData = await Misc.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const miscellaneous = miscData.get({ plain: true });
        res.render("miscellaneous-singleitem", { miscellaneous, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
