const express = require("express");

const router = express.Router();

router.get("/create-or-update-user", (req, res) => {
  res.json({
    data: "Create or update User API endpoint",
  });
});

module.exports = router;
