import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config();

const url = process.env.MONGODB_URL || "mongodb://localhost:27017/";
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;

export const connectToMongoDB = async () => {
  if (!client) {
    try {
      client = await MongoClient.connect(url, options);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("MongoDB connection failed:", error);
    }
  }
  return client;
};

export const getConnectedClient = () => client;
