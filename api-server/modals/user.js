const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      index: true,
    },
    password: { type: String, required: true },
    token: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
