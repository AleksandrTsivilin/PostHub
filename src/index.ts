import { connectDB } from './initDB';
import { createServer } from './server';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
      await connectDB();
  
      createServer().listen(PORT, () => {
        console.log(`Server is Fire at http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log(error)
    }  
  }

start();

