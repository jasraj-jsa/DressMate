var express = require("express");
var router = express.Router();

const { Configuration, OpenAIApi } = require("openai");

router.post("/", async (req, res, next) => {
  try {
    const { API_Key, Temperature } = req.body;
    const { Gender, Headwear, Outfit, FootAcc, Occasion, Suggestions } = req.body;
    const sugSize = Suggestions.length;
    var prompt;
    if (sugSize === 3) {
      res.status(400).json({ error: "You can't mark everything for suggestion. Please try again!" });
      return;
    } else if (!sugSize) {
      const combination =
        Headwear ||
        "" +
          (Outfit ? (Headwear.trim() ? ", " + Outfit : Outfit) : "") +
          (FootAcc ? (Outfit.trim() || Headwear.trim() ? ", " + FootAcc : FootAcc) : "");
      prompt =
        `Does the combination of ${combination} suitable for a ${Gender} ` +
        (Occasion ? `attending a ${Occasion}` : "");
    } else {
      const sh = Suggestions.includes("Headwear") ? "" : Headwear;
      const so = Suggestions.includes("Outfit") ? "" : Outfit.trim() && (sh ? ", " + Outfit : Outfit);
      const sf = Suggestions.includes("FootAcc") ? "" : FootAcc.trim() && (so || sh ? ", " + FootAcc : FootAcc);
      const combination = sh + so + sf;
      const suh = Suggestions.includes("Headwear") ? (Headwear.trim() ? Headwear : "Headwear") : "";
      const suo = Suggestions.includes("Outfit") ? (suh ? ", " : "") + (Outfit.trim() ? Outfit : "Outfit") : "";
      const suf = Suggestions.includes("FootAcc")
        ? (suo || suh ? ", " : "") + (FootAcc.trim() ? FootAcc : "Footwear")
        : "";
      const suggest = suh + suo + suf;
      prompt =
        `Suggest a good outfit for a ${Gender}` +
        (combination ? `, including ${combination}` : "") +
        (Occasion ? ` for a ${Occasion}. ` : "") +
        `Also, suggest the type/colour of ${suggest} that would go with it?`;
    }

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
    console.log(prompt);
    res.json({
      prompt: prompt,
      data: response.data.choices[0].text.trim(),
    });
  } catch (error) {
    const errMessage = error.response ? error.response.data : { error: error.message };
    res.status(501).json(errMessage);
  }
});

module.exports = router;
