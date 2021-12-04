const router = require("express").Router();
const { Furniture } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    const body = req.body;
    try {
        const newFurniture = await Furniture.create({
            ...body,
            userId: req.session.userId,
        });

        res.json(newFurniture);
    } catch (err) {
        console.log("FAILED! PLEASE TRY AGAIN", err);
        res.status(500).json(err);
    }
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
        const [affectedRows] = Furniture.destroy({

            where: {
                id: req.params.id,
            },
        });

        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
