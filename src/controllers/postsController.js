import getAllPosts from "../models/postsModel.js";

export async function listAllPosts(_, response) {
  const posts = await getAllPosts();
  response.status(200).json(posts);
}
