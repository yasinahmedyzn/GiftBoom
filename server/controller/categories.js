const express = require("express");
const app = express();
const addCategoryModel = require("../model/categories");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Category = async (req, res) => {
  const { img, title } = req.body;

  const addCategory = new addCategoryModel({
    img,
    title,
  });
  const result = await addCategory.save();
  console.log(result);
  res.status(200).json({ message: "passed" });
};

module.exports = Category;
