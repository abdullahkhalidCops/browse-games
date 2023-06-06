const express = require("express");
const User = require("../modals/user");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({
        success: true,
        status: 200,
        message: "Users found",
        users,
      }
    );
  } catch (err) {
    res.status(400).send({
        success: false,
        status: 400,
        message: "Something went wrong",
        err,
      }
    );
  }
});

module.exports = router;
