import mongoose from 'mongoose';

/**
 * Connects to the MongoDB database using the database URI.
 * On connection error, the backend app will terminate.
 * 
 * @param databaseUri defines how to connect to the database.
 */
export async function connectDB(databaseUri: string) {
  try {
    await mongoose.connect(databaseUri, {
      dbName: 'photography'
    });
    console.info(`Connected to MongoDB: ${databaseUri}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
