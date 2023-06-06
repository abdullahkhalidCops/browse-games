const express = require("express");
const User = require("../modals/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/new-user", async (req, res) => {
  try {
    // Get user input
    const { username, password } = req.body;

    // Check if user already exist
    const oldUser = await User.findOne({ username });
    console.log("after old user fetch", oldUser);
    if (oldUser) {
      return res.status(409).send({
          success: true,
          status: 409,
          message: "User Already Exist. Please Login",
          oldUser,
        }
      );
    }

    // Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create new user in database
    console.log("new user created");

    // Create token
    const token = jwt.sign({ username }, process.env.TOKEN_KEY, {
      expiresIn: "2h",
    });

    const newUser = await User.create({
      ...req.body,
      password: encryptedPassword,
      token,
    });

    return res.send({
        success: true,
        status: 200,
        message: "New user created",
        newUser,
      }
    );
  } catch (err) {
    console.log("-------------", err);
    return res.send({
        success: false,
        status: 400,
        message: "User creation failed",
        err,
      }
    );
  }
});

module.exports = router;
