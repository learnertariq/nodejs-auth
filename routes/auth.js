const router = require("express").Router();
const { User } = require("../models/user");
var jwt = require("jsonwebtoken");
const emailValidator =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

router.post("/register", async (req, res) => {
  if (!req.body.email.match(emailValidator))
    return res.status(400).send("Wrong Email");

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered");

  if (req.body.password !== req.body.confirmPassword)
    return res.status(400).send("Password didn't matched");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  await user.save();
  res.send(user);
});

router.post("/login", async (req, res) => {
  if (!req.body.email.match(emailValidator))
    return res.status(400).send("Wrong Email");

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User not found");

  if (req.body.password !== user.password)
    return res.status(401).send("Incorrect Password");

  var token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
  res.send({ token });
});

module.exports = router;
