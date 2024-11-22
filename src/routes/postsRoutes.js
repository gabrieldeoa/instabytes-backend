import express from "express";
import { singleUpload } from "../middlewares/uploadMiddleware.js";
import {
  listAllPosts,
  createPost,
  uploadImage,
} from "../controllers/postsController.js";

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", listAllPosts);
  app.post("/posts", createPost);
  app.post("/upload", singleUpload("image"), uploadImage);
};

export default routes;
