const router = require("express").Router();

const { Vehicle } = require("../../models");
const withAuth = require("../../utils/auth");
router.post("/", withAuth, async (req, res) => {
    const body = req.body;
    try {
        const newVehicle = await Vehicle.create({ ...body, userId: req.session.userId });
        res.json(newVehicle);
    } catch (err) {
        console.log("IT FAILED!", err);
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
