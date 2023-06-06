const mongoose = require("mongoose");

const gameInfoSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  thumbnail: String,
  short_description: String,
  game_url: String,
  genre: String,
  platform: String,
  publisher: String,
  developer: String,
  release_date: Date,
  freetogame_profile_url: String,
});

const GameInfo = mongoose.model("GameInfo", gameInfoSchema);

module.exports = GameInfo;
