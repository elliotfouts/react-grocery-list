const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default: 'https://cdn4.iconfinder.com/data/icons/food-drinks-vol-1/66/182-512.png',
  },
  
  
});

const Store = mongoose.model("store", storeSchema);

module.exports = Store;