const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const GameInfo = require("../modals/gameInfo");

mongoose
  .connect(
    "mongodb+srv://sagi:sagi@cluster0.7lkbtfy.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connected to database");
    saveGames();
  })
  .catch((error) => {
    console.log("Database connection failed. Exiting now...");
    console.error(error);
    process.exit(1);
  });

function saveGames() {
  const filePath = path.join(__dirname, "games.json");

  fs.readFile(filePath, "utf8", async (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    try {
      const games = JSON.parse(data);

      await GameInfo.insertMany(games);
      console.log("Game data is saved to the database successfully.");
      exit(0);
    } catch (err) {
      console.error("Error parsing JSON:", err);
    }
  });
}
