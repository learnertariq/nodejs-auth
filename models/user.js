const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 0,
    maxLength: 100,
  },
  email: {
    type: String,
    required: true,
    minLength: 0,
    maxLength: 100,
  },
  password: {
    type: String,
    required: true,
    minLength: 0,
    maxLength: 1000,
  },
});

module.exports = {
  User: mongoose.model("User", userSchema),
};
