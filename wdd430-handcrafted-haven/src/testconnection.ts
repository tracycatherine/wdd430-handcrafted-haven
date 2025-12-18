import { connectToDatabase } from "@/utils/db";

async function testConnection() {
  try {
    const db = await connectToDatabase();
    console.log("Database connection successful:", db.databaseName);
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

testConnection();