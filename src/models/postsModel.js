import dbConnect from "../config/database.js";

const connection = await dbConnect(process.env.MONGO_CONNECTION);

const getAllPosts = async () => {
  const db = connection.db(process.env.MONGO_DATABASE);
  const collection = db.collection("posts");
  return collection.find().toArray();
};

const savePost = async (post) => {
  const db = connection.db(process.env.MONGO_DATABASE);
  const collection = db.collection("posts");
  return collection.insertOne(post);
};

export { getAllPosts, savePost };
