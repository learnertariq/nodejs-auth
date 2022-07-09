const express = require("express");
const mongoose = require("mongoose");
require("express-async-errors");

// import middlewares
const errorsMiddleware = require("./middlewares/errors");
const accessHeaders = require("./middlewares/headers");

//importing routes
const rootRouter = require("./routes/root");

// creating express app
const app = express();
if (app.get("env") !== "production") {
  require("dotenv").config();
}

// middlewares
app.use(accessHeaders);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", rootRouter);
app.get(errorsMiddleware);
