const router = require("express").Router();
const { Misc, User } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all
router.get("/misc", withAuth, async (req, res) => {
    try {
        const miscData = await Misc.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const misc = miscData.map((misc) => misc.get({ plain: true }));

        res.render("miscspage", {
            misc,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Use the custom middleware before allowing the user to access the misc
router.get("/misc/:id", withAuth, async (req, res) => {
    try {
        const miscData = await Misc.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const misc = miscData.get({ plain: true });
        res.render("misc-singleitem", { misc, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;