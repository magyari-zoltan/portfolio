import express, { Application } from 'express';
import cors from 'cors';
import albums from './routes/albums';
import images from './routes/images';
import { connectDB } from './database';

const BASE_PATH = process.env.BASE_PATH || "/photography/api";
const DATABASE_URI = process.env.MONGODB_URI || '';

connectDB(DATABASE_URI);

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
console.info(`Base path is '${BASE_PATH}'`);
app.use(BASE_PATH, albums);
app.use(BASE_PATH, images);

export default app;
