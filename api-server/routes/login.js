const express = require("express");
const User = require("../modals/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createResponse } = require("../utils");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // Get user input
    const { username, password } = req.body;
    // Validate user input
    if (!(username && password)) {
      res.status(400).send({
          success: false,
          status: 400,
          message: "All input is required",
        }
      );
    }
    // Validate if user exist in our database
    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign({ username }, process.env.TOKEN_KEY, {
        expiresIn: "2h",
      });
      user.token = token;

      res.status(200).send(
        createResponse({
          success: true,
          status: 200,
          message: "User logged in",
          user,
        })
      );
    }
  } catch (err) {
    res.status(400).send({
        success: false,
        status: 400,
        message: "Incorrect username or password",
        err,
      }
    );
  }
});

module.exports = router;
