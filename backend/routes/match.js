var express = require("express");
var router = express.Router();

const { Configuration, OpenAIApi } = require("openai");
const exampleConstants = require("../constants/exampleConstants");
const { outfitCategories } = require("../constants/otherConstants");
const { generatePrompt, generateImage, generateResponse, generateFeaturePrompt } = require("../utils/matchUtils");
const { trimValues } = require("../utils/matchUtils");

router.post("/", async (req, res, next) => {
  try {
    const body = trimValues(req.body);
    const { API_Key, Temperature } = body;
    const { Gender, Suggestions } = body;
    var prompt;
    const sugSize = Suggestions.length;
    if (sugSize === 3) {
      res.status(400).json({ error: "You can't mark everything for suggestion. Please try again!" });
      return;
    } else prompt = generatePrompt(body);
    const configuration = new Configuration({
      apiKey: API_Key || process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const output = await generateResponse(openai, prompt, Temperature);

    const images = [];
    for (const category of outfitCategories) {
      const feature = category === "FootAcc" ? "Footwear and Accessories" : category;
      const featurePrompt = generateFeaturePrompt(feature, output, exampleConstants[category][Gender]);
      const features = await generateResponse(openai, featurePrompt);
      if (!["no", "no."].includes(features.toLowerCase())) {
        const image = await generateImage(openai, features);
        images.push(image);
      } else {
        if (category !== "Topwear" && category !== "Bottomwear") {
          if (body[category]) {
            const image = await generateImage(openai, body[category], Temperature);
            images.push(image);
          }
        } else {
          if (body["Outfit"]) {
            const featurePrompt = generateFeaturePrompt(category, body["Outfit"], exampleConstants[category][Gender]);
            const features = await generateResponse(openai, featurePrompt);
            if (!["no", "no."].includes(features.toLowerCase())) {
              const image = await generateImage(openai, features);
              images.push(image);
            }
          }
        }
      }
    }
    res.json({
      prompt: prompt,
      data: output,
      images: images,
    });
  } catch (error) {
    const errMessage = error.response ? error.response.data : { error: error.message };
    res.status(501).json(errMessage);
  }
});

router.post("/test", async (req, res, next) => {
  const { prompt } = req.body;
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const out = await generateResponse(openai, prompt, 0);
  res.json({
    data: out,
  });
});

module.exports = router;
