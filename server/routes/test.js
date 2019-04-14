const express = require("express");
const mongoose = require("mongoose");
const Users = require("../../models/user");
const { success } = require("../services");
const app = express();

app.post("/", (req, res, next) => {
  Users.create({ ...req.body })
    .then(user => success(res, 201))
    .catch(err => {
      /* istanbul ignore else */
      if (err.name === "MongoError" && err.code === 11000) {
        console.log("here");
        res.status(409).json({
          valid: false,
          param: "email",
          message: "email already registered"
        });
      } else {
        next(err);
      }
    });
});
module.exports = app;
