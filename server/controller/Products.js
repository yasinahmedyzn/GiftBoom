const express = require("express");

const app = express();
const addProductModel = require("../model/product");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Product = async (req, res) => {
  const { img, title, code, price } = req.body;

  const addProduct = new addProductModel({
    img,
    title,
    code,
    price,
  });
  const result = await addProduct.save();
  console.log(result);
  res.status(200).json({ message: "passed" });
};
module.exports = Product;
