require("dotenv").config();
const express = require("express");
const OpenAI = require("openai");
const app = express();
port = 3000;
//pass parameters to the function
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  //baseURL: process.env.OPENAI_BASE_URL,
});

app.get("/", (req, res) => {
  res.send("Server alive");
});
//post request to send the webpage content to the backend
app.post("/posttext", (req, res) => {});
//get request to push data back to the front end
app.get("/getresponse", async (req, res) => {
  const response = await client.responses.create({
    model: "openai.gpt-oss-120b",
    input: [
      {
        role: "user",
        content:
          "Analyze this web page and tell me if there is any potentially legally harmful content in it.",
      },
    ],
  });

  const message = response?.output_text;
  return res.json({
    message: message,
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
