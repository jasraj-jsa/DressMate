var express = require("express");
var router = express.Router();

const { Configuration, OpenAIApi } = require("openai");
/* GET home page. */

router.post("/", async (req, res, next) => {
  const { API_Key, Temperature, prompt } = req.body;
  const configuration = new Configuration({
    apiKey: API_Key || process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: Temperature || 0.75,
    max_tokens: 1000,
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
