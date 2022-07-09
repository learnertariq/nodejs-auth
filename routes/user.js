const router = require("express").Router();
const mongoose = require("mongoose");
const { User } = require("../models/user");

router.get("/:id", async (req, res) => {
  let user = await User.findById(mongoose.Types.ObjectId(req.params.id));
  if (!user) return res.status(400).send("User not found");
  res.send(user);
});

router.put("/:id", async (req, res) => {
  let user = await User.findById(mongoose.Types.ObjectId(req.params.id));
  if (!user) return res.status(400).send("User not found");

  if (req.body.password) {
    if (req.body.password !== req.body.confirmPassword)
      return res.status(400).send("Password didn't matched");
  }

  user.name = req.body.name || user.name;
  user.password = req.body.password || user.password;

  await user.save();
  res.send(user);
});

router.delete("/:id", async (req, res) => {
  let user = await User.findById(mongoose.Types.ObjectId(req.params.id));
  if (!user) return res.status(400).send("User not found");

  const userBackup = { ...user };
  await user.delete();

  res.send(userBackup._doc);
});

module.exports = router;
