const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  users: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  categories: [String],
  groceries: [{ type: Schema.Types.ObjectId, ref: 'groceryOnList' }}],
});

const List = mongoose.model("list", listSchema);

module.exports = List;