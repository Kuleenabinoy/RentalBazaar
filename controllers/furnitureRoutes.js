// const router = require("express").Router();
// const { Furniture, User } = require("../models");
// // Import the custom middleware
// const withAuth = require("../utils/auth");

// // GET all
// router.get("/furniture", withAuth, async (req, res) => {
//     try {
//         const furnitureData = await furnitureData.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ["username", "email"],
//                 },
//             ],
//         });

//         const furnitures = furnitureData.map((furniture) => furniture.get({ plain: true }));

//         res.render("furniturepage", {
//             furnitures,
//             logged_in: req.session.logged_in,
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// // Use the custom middleware before allowing the user to access the furniture
// router.get("/furniture/:id", withAuth, async (req, res) => {
//     try {
//         const furnitureData = await Furniture.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: User,
//                     attributes: ["username", "email"],
//                 },
//             ],
//         });

//         const furnitures = furnitureData.get({ plain: true });
//         res.render("furniture-singleitem", { furnitures, logged_in: req.session.logged_in });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// module.exports = router;
