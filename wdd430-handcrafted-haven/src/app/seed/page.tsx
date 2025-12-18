import { connectToDatabase } from "@/utils/db";

export default async function Page() {
  // This is a server component — run the DB connection on the server.
  try {
    const db = await connectToDatabase();
    console.log("Database connection successful:", db.databaseName);
  } catch (error) {
    console.error("Database connection failed:", error);
  }

  return (
    <div>
      <h1>Seed</h1>
      <p>Server-side seed/connection ran. Check the server console for details.</p>
    </div>
  );
}