const router = require("express").Router();
const { User, Vehicle, Property, Furniture, Electronics, Misc } = require("../models");
const withAuth = require("../utils/auth");

// Prevent non logged in users from viewing the homepage
router.get("/", async (req, res) => {
    try {
        res.render("login");
    } catch (err) {
        res.status(500).json(err);
    }
    // const userData = await User.findAll({
    //     attributes: { exclude: ["password"] },
    //     order: [["username", "ASC"]],
});

//         const users = userData.map((project) => project.get({ plain: true }));

//         res.render("homepage", {
//             users,
//             // Pass the logged in flag to the template
//             logged_in: req.session.logged_in,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// Render main page, where we find menu
router.get("/homepage", withAuth, (req, res) => {
    try {
        res.render("homepage", { logged_in: true });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Render sign up page
router.get("/signup", (req, res) => {
    try {
        res.render("login");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/login", (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
        res.redirect("/");
        return;
    }

    res.render("login");
});
router.get("/logout", (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
        res.redirect("/");
        return;
    }

    res.render("login");
});

router.get("/vehicle", withAuth, async (req, res) => {
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
router.get("/property", withAuth, async (req, res) => {
    try {
        const propertyData = await Property.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const properties = propertyData.map((property) => property.get({ plain: true }));

        res.render("propertypage", {
            properties,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

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
router.get("/furniture", withAuth, async (req, res) => {
    try {
        const furnitureData = await Furniture.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const furnitures = furnitureData.map((furnitures) => furnitures.get({ plain: true }));

        res.render("furniturepage", {
            furnitures,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
router.get("/electronics", withAuth, async (req, res) => {
    try {
        const electronicsData = await Electronics.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username", "email"],
                },
            ],
        });

        const electronics = electronicsData.map((electronics) => electronics.get({ plain: true }));

        res.render("electronicspage", {
            electronics,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get("/addvehicle", withAuth, async (req, res) => {
    try {
        res.render("addvehicle", { logged_in: true });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
