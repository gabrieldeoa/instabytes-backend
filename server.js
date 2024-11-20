import express from "express";
import routes from "./src/routes/postsRoutes.js";

const port = process.env.PORT || 3000;

const app = express();
routes(app);

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
