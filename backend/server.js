require("dotenv").config;
const express = require("express");
const OpenAI = require("openai");
const app = express();
port = 3000;
//pass parameters to the function
const client = OpenAI();

app.get("/", (req, res) => {
  res.send("Server alive");
});
//post request to send the webpage content to the backend
app.post("/posttext", (req, res) => {});
//get request to push data back to the front end
app.get("/getresponse", async () => {
  const response = await client.responses.create({
    model: "openai.gpt-oss-120b",
    input: [
      {
        role: "user",
        content: "Write a five sentence bedtime story about a cow.",
      },
    ],
  });
  console.log(response.output_text);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
