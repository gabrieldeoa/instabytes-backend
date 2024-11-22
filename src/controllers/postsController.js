import { getAllPosts, savePost } from "../models/postsModel.js";

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
