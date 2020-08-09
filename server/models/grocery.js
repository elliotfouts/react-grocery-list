const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grocerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default: 'https://www.clipartmax.com/png/middle/166-1662503_convenient-grocery-bag-icon.png'
  },
  upc: {
    type: String,
    unique: true,
  },
  popularity: {
    type: String,
    default: 1,
    required: true
  }
});

const Grocery = mongoose.model("grocery", grocerySchema);

module.exports = Grocery;