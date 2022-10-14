const express = require("express");
const Router = express.Router();
const mongoose = require("mongoose");
// const addSchema = require("../model/schemas");
// const addUser = new mongoose.model("addUser", addSchema);

Router.get("/", (req, res, next) => {
  res.json("welcome to the server sites");
  next();
});
//fetch data by id
Router.get("/", async (req, res) => {});

//post data
Router.post("/add", async (req, res) => {
  // const newUser = new addUser(req.body);
  // await newUser.save((err) => {
  //   if (err) {
  //     res.status(500).json({ error: "there is an error" });
  //   } else {
  //     res.status(200).json({ message: "the database added successfully" });
  //   }
  // });
});
//post add data
Router.post("/add-user/all", async (req, res) => {
  //   await addUser.insertMany(req.body, (err) => {
  //     if (err) {
  //       res.status(500).json({ error: "there is an error" });
  //     } else {
  //       res.status(200).json({ message: "the database were added successfully" });
  //     }
  //   });
});
//edit data
Router.put("/add-user/:id", async (req, res) => {
  await addUser.updateOne(
    { _id: req.params.id },
    {
      $set: {
        title: "shiftboom",
        code: 10024,
        price: 95,
      },
    },
    (err) => {
      if (err) {
        res.status(500).json({ error: "there is an error" });
      } else {
        res.status(200).json({ message: "The update was successful" });
      }
    }
  );
});
//delete data
Router.delete("/add-user/:id", async (req, res) => {});

module.exports = Router;
