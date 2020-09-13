const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  title: String,
  price: Number,
  photo: {type: String, default: "random"}
});

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;