import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from '../shared/schema';

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

// Create the database client
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql);

// Helper function to check database connection
export async function checkDatabaseConnection() {
  try {
    await sql`SELECT 1`;
    console.log("Database connection successful!");
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
} 