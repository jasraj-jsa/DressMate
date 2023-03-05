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
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
      temperature: Number(Temperature),
      max_tokens: 2000,
    });
    return response.data.choices[0].message.content.trim();
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
    return `Extract the information about ${feature} from the following text: \"${output}\". Here are some examples of what the ${feature} field can be: ${examples}. Return just \"no\" if ${feature} is not present in the text otherwise return the ${feature} found. Don't include anything else in the output.`;
  },
};

module.exports = MatchUtils;
