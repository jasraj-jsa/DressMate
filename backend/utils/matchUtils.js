const { imageSizes } = require("../constants/otherConstants");

const MatchUtils = {
  generatePrompt: (body) => {
    const { Gender, Headwear, Outfit, FootAcc, Occasion, Suggestions } = body;
    const sugSize = Suggestions.length;
    if (!sugSize) {
      const combination =
        (Headwear || "") +
        (Outfit ? (Headwear ? ", " + Outfit : Outfit) : "") +
        (FootAcc ? (Outfit || Headwear ? ", " + FootAcc : FootAcc) : "");
      prompt =
        `Does the combination of ${combination} suitable for a ${Gender} ` +
        (Occasion ? `attending a ${Occasion}` : "");
    } else {
      const sh = Suggestions.includes("Headwear") ? "" : Headwear;
      const so = Suggestions.includes("Outfit") ? "" : Outfit && (sh ? ", " + Outfit : Outfit);
      const sf = Suggestions.includes("FootAcc") ? "" : FootAcc && (so || sh ? ", " + FootAcc : FootAcc);
      const combination = sh + so + sf;
      const suh = Suggestions.includes("Headwear") ? (Headwear ? Headwear : "Headwear") : "";
      const suo = Suggestions.includes("Outfit") ? (suh ? ", " : "") + (Outfit ? Outfit : "Outfit") : "";
      const suf = Suggestions.includes("FootAcc") ? (suo || suh ? ", " : "") + (FootAcc ? FootAcc : "Footwear") : "";
      const suggest = suh + suo + suf;
      prompt =
        `Suggest a good outfit for a ${Gender}` +
        (combination ? `, including ${combination}` : "") +
        (Occasion ? ` for a ${Occasion}. ` : "") +
        `Also, suggest the type/colour of ${suggest} that would go with it?`;
    }
    return prompt;
  },
  generateImage: async (openai, prompt, size = "sm") => {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: imageSizes[size],
    });
    return response.data.data[0].url;
  },
  generateResponse: async (openai, prompt, Temperature = 0.75) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: Number(Temperature) || 0.75,
      max_tokens: 2000,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    return response.data.choices[0].text.trim();
  },
  trimValues: (dictionary) => {
    for (let key in dictionary) {
      if (typeof dictionary[key] === "string") {
        dictionary[key] = dictionary[key].trim();
      }
    }
    return dictionary;
  },
  generateFeaturePrompt: (feature, output, examples) => {
    const extract = feature === "Bottomwear" ? "just the Bottomwear and not the Topwear" : feature;
    return `Can you extract the information about ${extract} from the following text: \"${output}\". Here are some examples of what the ${feature} field can be: ${examples}. Return just \"no\" if ${feature} are not present in the text otherwise return the ${feature} found. Don't include anything else in the output.`;
  },
};

module.exports = MatchUtils;
