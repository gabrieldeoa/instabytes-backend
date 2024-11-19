import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});

app.get("/api", (_, response) => {
  response.status(200).send("Welcome !!!");
});
