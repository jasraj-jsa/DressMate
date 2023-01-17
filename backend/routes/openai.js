var express = require("express");
var router = express.Router();

const { Configuration, OpenAIApi } = require("openai");
/* GET home page. */

router.post("/", async (req, res, next) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: req.body.prompt,
    temperature: 0.75,
    max_tokens: 100,
  });
  res.json({
    data: response.data.choices[0].text,
  });
});

router.post("/image", async (req, res, next) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: req.body.prompt,
    n: 1,
    size: "512x512",
  });
  res.json({
    data: response.data.data[0].url,
  });
});

module.exports = router;
