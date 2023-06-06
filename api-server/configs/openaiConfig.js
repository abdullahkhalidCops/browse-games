const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  //   apiKey: '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',
  apiKey: process.env.OPENAI_API_KEY_2,
});
const openai = new OpenAIApi(configuration);

module.exports = openai;
