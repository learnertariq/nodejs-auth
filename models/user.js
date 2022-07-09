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
  education: {
    type: String,
    minLength: 0,
    maxLength: 200,
  },
  location: {
    type: String,
    minLength: 0,
    maxLength: 100,
  },
  phone: {
    type: String,
    minLength: 0,
    maxLength: 100,
  },
  linkedIn: {
    type: String,
    minLength: 0,
    maxLength: 100,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = {
  User: mongoose.model("User", userSchema),
};
