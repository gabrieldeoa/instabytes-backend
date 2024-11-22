import express from "express";
import multer from "multer";
import {
  listAllPosts,
  createPost,
  uploadImage,
} from "../controllers/postsController.js";

const upload = multer({ dest: process.env.UPLOAD_PATH });

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", listAllPosts);
  app.post("/posts", createPost);
  app.post("/upload", upload.single("image"), uploadImage);
};

export default routes;
