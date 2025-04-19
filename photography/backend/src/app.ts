import express, { Application } from 'express';
import cors from 'cors';
import albums from './routes/albums';

const BASE_PATH = process.env.BASE_PATH || "/photography/api";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
console.info(`Base path is '${BASE_PATH}'`);
app.use(BASE_PATH, albums);

export default app;

