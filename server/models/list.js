const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  users: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  stores: [{ type: Schema.Types.ObjectId, ref: 'store' }],
  categories: [String],
  groceries: [{
    grocery: { type: Schema.Types.ObjectId, ref: 'grocery' },
    quantity: String,
    category: String,
    note: String,
    store: { type: Schema.Types.ObjectId, ref: 'store' },
    log: [{
      user: { type: Schema.Types.ObjectId, ref: 'user' },
      message: String,
      date: Date,
    }],
  }],
});

const List = mongoose.model("list", listSchema);

module.exports = List;