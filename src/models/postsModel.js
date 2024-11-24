import dbConnect from "../config/database.js";
import { ObjectId } from "mongodb";

const connection = await dbConnect(process.env.MONGO_CONNECTION);

const getMongoCollection = async () => {
  const db = connection.db(process.env.MONGO_DATABASE);
  const collection = db.collection("posts");
  return collection;
};

const getAllPosts = async () => {
  const collection = await getMongoCollection();
  return collection.find().toArray();
};

const savePost = async (post) => {
  const collection = await getMongoCollection();
  return collection.insertOne(post);
};

const modifyPost = async (id, post) => {
  const mongoId = ObjectId.createFromHexString(id);

  const collection = await getMongoCollection();
  return collection.updateOne({ _id: new ObjectId(mongoId) }, { $set: post });
};

export { getAllPosts, savePost, modifyPost };
