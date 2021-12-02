const router = require("express").Router();

const { Properties } = require("../../models");
const withAuth = require("../../utils/auth");
router.post("/", withAuth, async (req, res) => {
    const body = req.body;
    try {
        const newProperties = await Properties.create({ ...body, userId: req.session.userId });
        res.json(newProperties);
    } catch (err) {
        console.log("FAILED! PLEASE TRY AGAIN", err);
        res.status(500).json(err);
    }
});
router.delete("/:id", withAuth, async (req, res) => {
    try {
        const [affectedRows] = Vehicle.destroy({
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