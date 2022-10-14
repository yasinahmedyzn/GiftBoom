const mongoose = require("mongoose");

const addProductSchema = mongoose.Schema({
  img: {
    type: String,
  },
  title: {
    type: String,
    require: true,
  },
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const addProductModel = new mongoose.model("addProduct", addProductSchema);
module.exports = addProductModel;
