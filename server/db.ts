// server/src/db.ts
import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/futuremesh');
    console.log('Database connected, memories preserved.');
  } catch (err) {
    console.error('Connection failed:', err);
  }
};