const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("API is working properly");
});

module.exports = router;
