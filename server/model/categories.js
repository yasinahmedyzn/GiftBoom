const mongoose = require("mongoose");

const addCategorySchema = mongoose.Schema({
  img: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
});
const addCategoryModel = new mongoose.model("addCategory", addCategorySchema);
module.exports = addCategoryModel;
