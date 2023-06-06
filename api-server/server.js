const express = require("express");
const chat = require("./routes/chat");
const signup = require("./routes/signup");
const login = require("./routes/login");
const users = require("./routes/allUsers");

require("dotenv").config();
require("./configs/database").connect();

const auth = require("./middleware/auth");

const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome");
});

app.use("/chat", chat);
app.use("/signup", signup);
app.use("/login", login);
app.use("/users", users);

module.exports = app;
