import fs from "fs";
import { getAllPosts, savePost, modifyPost } from "../models/postsModel.js";

export async function listAllPosts(_, response) {
  const posts = await getAllPosts();
  response.status(200).json(posts);
}

export async function createPost(request, response) {
  try {
    const data = request.body;
    const postCreated = await savePost(data);

    response.status(200).json(postCreated);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Falha na requisição." });
  }
}

export async function updatePost(request, response) {
  try {
    const id = request.params.id;
    const data = request.body;
    const urlImage = `http://localhost:3000/${id}.png`;

    const post = {
      image_url: urlImage,
      description: data.description,
      image_alt: data.image_alt,
    };

    const postUpdated = await modifyPost(id, post);

    response.status(200).json(postUpdated);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Falha na requisição." });
  }
}

export async function uploadImage(request, response) {
  try {
    const data = {
      description: "",
      image_url: request.file.originalname,
      image_alt: "",
    };

    const postCreated = await savePost(data);

    const imageUpdated = `${process.env.UPLOAD_PATH}${postCreated.insertedId}.png`;
    fs.renameSync(request.file.path, imageUpdated);

    response.status(200).json(postCreated);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Falha na requisição." });
  }
}
