import express from "express";
import { listAllPosts, createPost } from "../controllers/postsController.js";

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", listAllPosts);
  app.post("/posts", createPost);
};

export default routes;
