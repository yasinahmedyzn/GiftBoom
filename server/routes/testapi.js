const express = require("express");
const Router = express.Router();

Router.post("/add-demo", (req, res) => {
  const { title, code, price } = req.body;
  const img = req.file.filename;

  const addItem = new addItemModel({
    title,
    code,
    price,
    img,
  });
  console.log(addItem);
});

module.exports = Router;
