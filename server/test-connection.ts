import 'dotenv/config';
import { checkDatabaseConnection } from './db';

async function testConnection() {
  try {
    const isConnected = await checkDatabaseConnection();
    if (isConnected) {
      console.log('✅ Database connection test successful!');
      process.exit(0);
    } else {
      console.error('❌ Database connection test failed');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error testing database connection:', error);
    process.exit(1);
  }
}

testConnection(); 