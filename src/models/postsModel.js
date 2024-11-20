import dbConnect from "../config/database.js";

const connection = await dbConnect(process.env.MONGO_CONNECTION);

const getAllPosts = async (_, response) => {
  const db = connection.db(process.env.MONGO_DATABASE);
  const collection = db.collection("posts");
  return collection.find().toArray();
};

export default getAllPosts;
