const express = require("express");
const Category = require("../controller/categories");
const Product = require("../controller/Products");
const addCategoryModel = require("../model/categories");
const addProductModel = require("../model/product");
const Router = express.Router();

Router.post("/add-categories", Category);
Router.get("/get-categories", (req, res) => {
  addCategoryModel.find().then((foundCategories) => res.json(foundCategories));
});
Router.post("/add-products", Product);
Router.get("/get-products", (req, res) => {
  addProductModel.find().then((foundProduct) => res.json(foundProduct));
});

module.exports = Router;
