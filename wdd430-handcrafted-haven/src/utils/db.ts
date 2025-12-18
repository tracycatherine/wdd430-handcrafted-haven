import { MongoClient, Db } from "mongodb";

// Use only MONGODB_URL as requested
const url = process.env.MONGODB_URL;
if (!url) {
  // Defer throwing until connectToDatabase is called, but log for clarity in dev
  console.warn("Warning: MongoDB connection string not found in env. Set MONGODB_URL.");
}

let client: MongoClient | null = null;
let db: Db | null = null;

export async function connectToDatabase() {
  if (!db) {
    try {
      if (!url) throw new Error("MONGODB connection string is not defined in environment");
      if (!client) client = new MongoClient(url);
      console.log("Connecting to MongoDB...");
      await client.connect();
      db = client.db(); // connects to the database specified in the connection string
      console.log("Connected to the database", db.databaseName);
    } catch (error) {
      console.error("Failed to connect to the database", error);
      throw error;
    }
  }
  return db;
}