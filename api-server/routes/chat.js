const express = require("express");
const router = express.Router();
const openai = require("../configs/openaiConfig");

router.get("/", async (req, res) => {
  const message = req.body.message;
  try {
    const completion = await openai.createChatCompletion({
      model: "text-davinci-003",
      messages: [{role: "user", content: message}]
    });
    console.log(completion.data.choices[0].message);
    const completedText = completion.data.choices[0].message;
    res.json({ completedText });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.log(error.message);
    }
  }
});

module.exports = router;
