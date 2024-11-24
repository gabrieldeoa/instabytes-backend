import express from "express";
import cors from "cors";
import { singleUpload } from "../middlewares/uploadMiddleware.js";
import {
  listAllPosts,
  createPost,
  uploadImage,
  updatePost,
} from "../controllers/postsController.js";

const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
};

const routes = (app) => {
  app.use(express.json());
  app.use(cors(corsOptions));

  app.get("/posts", listAllPosts);
  app.post("/posts", createPost);
  app.post("/upload", singleUpload("image"), uploadImage);
  app.put("/upload/:id", updatePost);
};

export default routes;
