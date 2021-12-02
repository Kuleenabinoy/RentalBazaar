const router = require("express").Router();

router.get("/admin-dashboard", function (req, res, next) {
  res.render("admin-dashboard");
});

module.exports = router;
