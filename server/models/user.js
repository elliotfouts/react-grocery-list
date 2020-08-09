const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  googleId: String,
  lists: [{ type: Schema.Types.ObjectId, ref: 'list' }]
});

const User = mongoose.model("user", userSchema);

module.exports = User;