const { Configuration, OpenAIApi } = require("openai");
/* GET home page. */
const dotenv = require("dotenv");
dotenv.config();
const openai = async () => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    temperature: 0,
    max_tokens: 7,
  });
  console.log(response.data);
};

openai();
