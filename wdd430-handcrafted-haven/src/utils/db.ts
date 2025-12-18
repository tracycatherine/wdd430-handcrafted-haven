// src/utils/db.ts
export async function connectToDatabase() {
  console.warn('MongoDB connection skipped. Using mock data instead.');
  return null; // No DB connection
}
