const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groceryOnListSchema = new mongoose.Schema({
  grocery: { type: Schema.Types.ObjectId, ref: 'grocery' },
  quantity: String,
  category: String,
  note: String,
  log: [{
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    message: String,
    date: Date,
  }],
});

const GroceryOnList = mongoose.model("groceryOnList", groceryOnListSchema);

module.exports = GroceryOnList;